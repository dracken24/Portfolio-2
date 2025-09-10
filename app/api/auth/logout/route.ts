import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Créer la réponse
    const response = NextResponse.json({
      message: 'Déconnexion réussie'
    });

    // Supprimer le cookie adminToken
    response.cookies.set('adminToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0, // Expire immédiatement
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Erreur de déconnexion:', error);
    return NextResponse.json(
      { message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
