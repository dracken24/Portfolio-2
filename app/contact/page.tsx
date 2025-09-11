'use client';

// Discord SVG Icon Component
const DiscordIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AppBarComponent from '../components/appBar';

const HeaderSection = styled(Box)(({ theme }) => (
{
    background:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: theme.spacing(12, 0, 8),
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&::before':
	{
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

const ContactCard = styled(Box)(({ theme }) => (
{
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
    '&:hover':
	{
        transform: 'translateY(-5px)',
        boxShadow: theme.palette.mode === 'dark' ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.15)'
    }
}));

const SocialIcon = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: '50%',
    background:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    margin: theme.spacing(1),
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover':
	{
        transform: 'scale(1.1)',
        boxShadow:
            theme.palette.mode === 'dark' ? '0 8px 25px rgba(74, 144, 226, 0.4)' : '0 8px 25px rgba(102, 126, 234, 0.4)'
    }
}));

export default function Contact()
{
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
                        Contact
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
                        Prenons contact et discutons!
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
                    <ContactCard>
                        <EmailIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h6" gutterBottom>
                            Email
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            component="a"
                            href="mailto:dracken24@gmail.com"
                            sx={{
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            dracken24@gmail.com
                        </Typography>
                    </ContactCard>

                    <ContactCard>
                        <PhoneIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h6" gutterBottom>
                            Téléphone
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            component="a"
                            href="tel:+14182647191"
                            sx={{
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            418-264-7191
                        </Typography>
                    </ContactCard>

                    <ContactCard>
                        <LocationOnIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h6" gutterBottom>
                            Localisation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ville de Québec, Québec, Canada
                        </Typography>
                    </ContactCard>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                        Suivez-moi
                    </Typography>
                    <Box>
                        <a
                            href="https://www.linkedin.com/in/nadia-desjardins-a57b9b247/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <SocialIcon>
                                <LinkedInIcon />
                            </SocialIcon>
                        </a>
                        <a
                            href="https://github.com/dracken24"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <SocialIcon>
                                <GitHubIcon />
                            </SocialIcon>
                        </a>
                        <a
                            href="https://discord.com/users/dracken24"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <SocialIcon>
                                <DiscordIcon />
                            </SocialIcon>
                        </a>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
