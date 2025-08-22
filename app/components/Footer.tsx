'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'

const FooterContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: theme.spacing(4, 0, 2),
  marginTop: 'auto',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark'
      ? 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      : 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.3,
  }
}))

const SocialIcon = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.1)',
  color: 'white',
  margin: theme.spacing(0, 1),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255,255,255,0.2)',
    transform: 'scale(1.1)',
  }
}))

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Portfolio Web
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Développeur Full Stack
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              Suivez-moi
            </Typography>
            <Box>
              <SocialIcon>
                <GitHubIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <LinkedInIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <TwitterIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <EmailIcon fontSize="small" />
              </SocialIcon>
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © {currentYear} Tous droits réservés
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.6, fontSize: '0.75rem' }}>
              Construit avec Next.js & Material-UI
            </Typography>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  )
}
