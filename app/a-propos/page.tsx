'use client'

import AppBarComponent from '../components/appBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import CodeIcon from '@mui/icons-material/Code'
import PsychologyIcon from '@mui/icons-material/Psychology'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

const HeroSection = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
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
    background: theme.palette.mode === 'dark'
      ? 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      : 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.3,
  }
}))

const AboutCard = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, #1e1e1e 0%, #2d2d2d 100%)'
    : 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
  border: theme.palette.mode === 'dark' 
    ? '1px solid rgba(255,255,255,0.1)' 
    : '1px solid rgba(0,0,0,0.08)',
  borderRadius: 20,
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(0,0,0,0.3)'
    : '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 40px rgba(0,0,0,0.4)'
      : '0 20px 40px rgba(0,0,0,0.15)',
  }
}))

const SkillTag = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)'
    : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  color: 'white',
  padding: theme.spacing(0.5, 2),
  borderRadius: 20,
  fontSize: '0.875rem',
  fontWeight: 500,
  margin: theme.spacing(0.5),
  boxShadow: theme.palette.mode === 'dark'
    ? '0 2px 8px rgba(74, 144, 226, 0.3)'
    : '0 2px 8px rgba(240, 147, 251, 0.3)',
}))

export default function APropos() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: (theme) => theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)'
        : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <AppBarComponent />
      
      <HeroSection>
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
            Découvrez mon parcours et mes compétences
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
          mb: 8
        }}>
          <AboutCard>
            <PersonIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Qui suis-je ?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Développeur passionné par la création d'applications web modernes et innovantes.
            </Typography>
            <Box>
              <SkillTag>React</SkillTag>
              <SkillTag>Next.js</SkillTag>
              <SkillTag>TypeScript</SkillTag>
              <SkillTag>Node.js</SkillTag>
            </Box>
          </AboutCard>

          <AboutCard>
            <SchoolIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Formation
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Formation en développement web et technologies modernes.
            </Typography>
            <Box>
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
              Aucune années d'expérience dans le développement d'applications.
            </Typography>
            <Box>
              <SkillTag>Full Stack</SkillTag>
              <SkillTag>API REST</SkillTag>
              <SkillTag>Patate OS</SkillTag>
            </Box>
          </AboutCard>

          <AboutCard>
            <PsychologyIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Approche
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Code propre, architecture solide et expérience utilisateur optimale.
            </Typography>
            <Box>
              <SkillTag>Clean Code</SkillTag>
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
            N'hésitez pas à me contacter pour discuter de vos idées et voir comment nous pouvons travailler ensemble.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
