'use client';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AppBarComponent from '../components/appBar';

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

const AboutCard = styled(Box)(({ theme }) => ({
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
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.palette.mode === 'dark' ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.15)'
    }
}));

const SkillTag = styled(Box)(({ theme }) => ({
    display: 'inline-block',
    background:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)'
            : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white',
    padding: theme.spacing(0.5, 2),
    borderRadius: 20,
    fontSize: '0.875rem',
    fontWeight: 500,
    margin: theme.spacing(0.5),
    boxShadow:
        theme.palette.mode === 'dark' ? '0 2px 8px rgba(74, 144, 226, 0.3)' : '0 2px 8px rgba(240, 147, 251, 0.3)'
}));

export default function APropos() {
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
                        À Propos
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
                        De 42Québec au Collège Maisonneuve : mon parcours de développeuse
                    </Typography>
                </Container>
            </HeaderSection>

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 4,
                        mb: 8
                    }}
                >
                    <AboutCard>
                        <PersonIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            Qui suis-je ?
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            Je m'appelle Nadia Desjardins et je suis une developpeuse full stack de la région de Québec.
                            Après 10 ans d'ébénisterie, une blessure au dos en fin 2021 m'a poussée vers une
                            réorientation de carrière. Cette transition m'a menée vers l'école 42Québec pour apprendre
                            la programmation système en C/C++, puis vers le Collège Maisonneuve pour me spécialiser en
                            développement web full stack. Aujourd'hui, après pres de 4 ans de formation et d'expérience, je combine ma rigueur artisanale avec ma passion
                            pour le code.
                        </Typography>
                        <Box>
                            <SkillTag>C/C++ & C#</SkillTag>
                            <SkillTag>Game Engines</SkillTag>
                            <SkillTag>React</SkillTag>
                            <SkillTag>Next.js</SkillTag>
                            <SkillTag>TypeScript</SkillTag>
                            <SkillTag>Node.js</SkillTag>
                            <SkillTag>SQL</SkillTag>
                        </Box>
                    </AboutCard>

                    <AboutCard>
                        <SchoolIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            Formation
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            <strong>42Québec</strong> : 1½ an de programmation backend style core system en C/C++
                            <br />
                            <strong>Collège Maisonneuve</strong> : AEC Développement Full Stack orienté Applications (Bureau, Mobile) et Web
                        </Typography>
                        <Box>
                            <SkillTag>Programmation Système</SkillTag>
                            <SkillTag>Développement Web</SkillTag>
                            <SkillTag>Architecture Logicielle</SkillTag>
                            <SkillTag>Bases de Données</SkillTag>
                        </Box>
                    </AboutCard>

                    <AboutCard>
                        <WorkIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            Expérience
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            Nombreux projets personnels en GameDev (Unity & Godot en C#), applications WPF et MAUI,
                            sites web en React et Next.js, ainsi qu'une connaissance fonctionnelle en SQL. Une
                            expérience diversifiée allant du jeu vidéo aux applications desktop et web.
                        </Typography>
                        <Box>
                            <SkillTag>Unity</SkillTag>
                            <SkillTag>Godot</SkillTag>
                            <SkillTag>C#</SkillTag>
                            <SkillTag>WPF</SkillTag>
                            <SkillTag>MAUI</SkillTag>
                            <SkillTag>React</SkillTag>
                            <SkillTag>Next.js</SkillTag>
                            <SkillTag>SQL</SkillTag>
                        </Box>
                    </AboutCard>

                    <AboutCard>
                        <PsychologyIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            Approche
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            Approche rigoureuse héritée de 42, code propre et architecture solide pour une expérience
                            utilisateur optimale avec application des design patterns et injection de dépendances. De l'allocation de mémoire dynamique en C à la gestion des threads, tout est pensé pour une performance optimale.
                        </Typography>
                        <Box>
                            <SkillTag>Clean Code</SkillTag>
                            <SkillTag>Rigueur 42</SkillTag>
                            <SkillTag>UX/UI</SkillTag>
                            <SkillTag>Performance</SkillTag>
                        </Box>
                    </AboutCard>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <EmojiEventsIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h4" gutterBottom>
                        Prêt à collaborer sur votre prochain projet ?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                        Forte de mon parcours unique combinant programmation système et développement web, je suis prête
                        à relever de nouveaux défis. Contactez-moi pour discuter de vos projets !
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
