import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Vérifier si la route est une route admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Pour les routes admin, on laisse le client gérer l'authentification
    // Le middleware ne bloque plus automatiquement, l'authentification se fait côté client
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
