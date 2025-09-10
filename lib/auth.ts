import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export interface UserPayload {
  userId: number;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

/**
 * Vérifie et décode un token JWT
 * @param token - Le token JWT à vérifier
 * @returns Les données utilisateur décodées ou null si invalide
 */
export function verifyToken(token: string): UserPayload | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as UserPayload;
    return decoded;
  } catch (error) {
    console.error('Erreur de vérification du token:', error);
    return null;
  }
}

/**
 * Extrait le token depuis une requête Next.js
 * @param request - La requête Next.js
 * @returns Le token ou null si non trouvé
 */
export function extractTokenFromRequest(request: NextRequest): string | null {
  // Essayer d'abord depuis les cookies
  const cookieToken = request.cookies.get('adminToken')?.value;
  if (cookieToken) {
    return cookieToken;
  }

  // Essayer depuis l'en-tête Authorization
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  return null;
}

/**
 * Vérifie si un utilisateur est authentifié et a le rôle admin
 * @param request - La requête Next.js
 * @returns Les données utilisateur ou null si non authentifié
 */
export function verifyAdminAuth(request: NextRequest): UserPayload | null {
  const token = extractTokenFromRequest(request);
  
  if (!token) {
    return null;
  }

  const user = verifyToken(token);
  
  if (!user || user.role !== 'admin') {
    return null;
  }

  return user;
}

/**
 * Génère un token JWT pour un utilisateur
 * @param userData - Les données utilisateur à inclure dans le token
 * @returns Le token JWT généré
 */
export function generateToken(userData: { userId: number; email: string; role: string }): string {
  return jwt.sign(
    userData,
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '24h' }
  );
}
