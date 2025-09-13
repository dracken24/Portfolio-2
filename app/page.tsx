'use client';

import CodeIcon from '@mui/icons-material/Code';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import AppBarComponent from './components/appBar';

const HeaderSection = styled(Box)(({ theme }) => ({
    background:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: theme.spacing(12, 0, 8),
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
            theme.palette.mode === 'dark'
                ? 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                : 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3
    }
}));

const FeatureCard = styled(Box)(({ theme }) => ({
    background:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(145deg, #1e1e1e 0%, #2d2d2d 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
    border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
    borderRadius: 20,
    padding: theme.spacing(4),
    textAlign: 'center',
    boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.palette.mode === 'dark' ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.15)'
    }
}));

export default function Home()
{
    const router = useRouter();

    const handleCardClick = (path: string) =>
    {
        router.push(path);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: theme =>
                    theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)'
                        : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
            }}
        >
            <AppBarComponent />

            <HeaderSection>
                <Container maxWidth="lg">
                    <Typography
                        variant="h1"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: '3rem', md: '4.5rem' },
                            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}
                    >
                        Développeuse<br />
                        Full Stack
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            opacity: 0.9,
                            fontWeight: 300,
                            maxWidth: 600,
                            mx: 'auto'
                        }}
                    >
                        Applications, GameDev & Web : Trois mondes, une passion
                    </Typography>
                </Container>
            </HeaderSection>

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4,
                        mb: 8
                    }}
                >
                    <FeatureCard onClick={() => handleCardClick('/projets')}>
                        <CodeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            Mes Projets
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Projets développés avec C/C++, C#, GameDev avec Unity et Godot, WPF, Maui, React, Next.js et bien plus
                        </Typography>
                    </FeatureCard>

                    <FeatureCard onClick={() => handleCardClick('/a-propos')}>
                        <PersonIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            À Propos
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Mon parcours de 42Québec au développement web full stack
                        </Typography>
                    </FeatureCard>

                    <FeatureCard onClick={() => handleCardClick('/contact')}>
                        <ContactSupportIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Prenons contact et discutons de vos projets
                        </Typography>
                    </FeatureCard>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
                        Bienvenue sur mon portfolio
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                        De la programmation système en C/C++ à 42Québec jusqu'au développement web full stack, explorez
                        mes projets et découvrez mon parcours unique.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
