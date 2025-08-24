'use client'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CodeIcon from '@mui/icons-material/Code'
import ErrorIcon from '@mui/icons-material/Error'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import ScheduleIcon from '@mui/icons-material/Schedule'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import AppBarComponent from '../components/appBar'

interface Project {
  id: number
  name: string
  description: string
  technologies: string
  status: string
  url: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
}

// Composants stylisés
const HeaderSection = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
  padding: theme.spacing(8, 0, 6),
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

const ProjectCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, #1e1e1e 0%, #2d2d2d 100%)'
    : 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
  border: theme.palette.mode === 'dark' 
    ? '1px solid rgba(255,255,255,0.1)' 
    : '1px solid rgba(0,0,0,0.08)',
  borderRadius: 16,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 20px rgba(0,0,0,0.3)'
    : '0 4px 20px rgba(0,0,0,0.08)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  animation: 'fadeInUp 0.6s ease-out',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, #4a90e2 0%, #357abd 100%)'
      : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 40px rgba(0,0,0,0.5)'
      : '0 20px 40px rgba(0,0,0,0.15)',
    '&::before': {
      transform: 'scaleX(1)',
    }
  },
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(30px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
}))

const StatusChip = styled(Chip)(({ theme, color }: any) => ({
  borderRadius: 20,
  fontWeight: 600,
  fontSize: '0.875rem',
  padding: theme.spacing(0.5, 1.5),
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  '& .MuiChip-label': {
    padding: theme.spacing(0.5, 1),
  }
}))

const ActionButton = styled(Button)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: 12,
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 15px rgba(74, 144, 226, 0.4)'
    : '0 4px 15px rgba(102, 126, 234, 0.4)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #357abd 0%, #2d5a8a 100%)'
      : 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 25px rgba(74, 144, 226, 0.6)'
      : '0 8px 25px rgba(102, 126, 234, 0.6)',
  },
  '&:disabled': {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #404040 0%, #303030 100%)'
      : 'linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)',
    color: theme.palette.mode === 'dark' ? '#888888' : '#757575',
    boxShadow: 'none',
  }
}))

const TechStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}))

const TechTag = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  color: 'white',
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 20,
  fontSize: '0.75rem',
  fontWeight: 500,
  boxShadow: '0 2px 8px rgba(240, 147, 251, 0.3)',
}))

const StatsCard = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: theme.spacing(3),
  borderRadius: 16,
  textAlign: 'center',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(26, 26, 46, 0.5)'
    : '0 8px 32px rgba(102, 126, 234, 0.3)',
  animation: 'fadeIn 0.6s ease-out',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  }
}))

const AnimatedBox = styled(Box)({
  animation: 'fadeIn 0.6s ease-out',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  }
})

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  }
}))

const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(6),
}))

export default function Projets() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects')
      const data = await response.json()
      
      if (data.success) {
        setProjects(data.data)
      } else {
        setError('Erreur lors du chargement des projets')
      }
    } catch (err) {
      setError('Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'terminee':
      case 'fini':
      case 'terminé':
        return 'success'
      case 'wip':
      case 'en cours':
      case 'en cours de développement':
        return 'warning'
      case 'planifiee':
      case 'planifié':
      case 'planifiée':
        return 'info'
      case 'non':
      case 'non défini':
        return 'error'
      default:
        return 'default'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'terminee':
      case 'fini':
      case 'terminé':
        return <CheckCircleIcon />
      case 'wip':
      case 'en cours':
      case 'en cours de développement':
        return <TrendingUpIcon />
      case 'planifiee':
      case 'planifié':
      case 'planifiée':
        return <ScheduleIcon />
      case 'non':
      case 'non défini':
        return <ErrorIcon />
      default:
        return <CodeIcon />
    }
  }

  const handleProjectClick = (url: string) => {
    if (url && url.trim() !== '') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  // Fonction pour corriger les chemins d'images
  const getImageUrl = (imageUrl: string) =>
  {
    if (!imageUrl)
	{
		return '';
	}
    
    // Si c'est une URL complète (http/https), la retourner telle quelle
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://'))
	{
      return imageUrl;
    }
    
    // Si c'est un chemin relatif commençant par "public/", le corriger
    if (imageUrl.startsWith('public/'))
	{
      return imageUrl.replace('public/', '/');
    }
    
    // Si c'est un chemin relatif sans "public/", ajouter "/"
    if (!imageUrl.startsWith('/'))
	{
      return `/${imageUrl}`;
    }
    
    return imageUrl;
  };

  const getCompletedProjects = () => projects.filter(p => 
    ['terminee', 'fini', 'terminé'].includes(p.status.toLowerCase())
  ).length

  const getInProgressProjects = () => projects.filter(p => 
    ['wip', 'en cours', 'en cours de développement'].includes(p.status.toLowerCase())
  ).length

  if (loading) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        background: (theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <AppBarComponent />
        <Container sx={{ 
          mt: 4, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: '60vh'
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgress size={60} sx={{ 
              color: (theme) => theme.palette.mode === 'dark' ? '#4a90e2' : '#667eea', 
              mb: 2 
            }} />
            <Typography variant="h6" color="text.secondary">
              Chargement des projets...
            </Typography>
          </Box>
        </Container>
      </Box>
    )
  }

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: (theme) => theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)'
        : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <AppBarComponent />
      
      {/* Hero Section */}
      <HeaderSection>
        <Container maxWidth="lg">
          <AnimatedBox>
                         <Typography 
               variant="h2" 
               component="h1" 
               gutterBottom 
               sx={{ 
                 fontWeight: 900,
                 fontSize: { xs: '3rem', md: '4.5rem' },
                 background: (theme) => theme.palette.mode === 'dark'
                   ? 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)'
                   : 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)',
                 backgroundClip: 'text',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 textShadow: (theme) => theme.palette.mode === 'dark'
                   ? '0 4px 8px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.4)'
                   : '0 4px 8px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2)',
                 letterSpacing: '0.1em',
                 textTransform: 'uppercase',
                 position: 'relative',
                 '&::before': {
                   content: '""',
                   position: 'absolute',
                   top: '-10px',
                   left: '-10px',
                   right: '-10px',
                   bottom: '-10px',
                   background: (theme) => theme.palette.mode === 'dark'
                     ? 'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))'
                     : 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                   borderRadius: '20px',
                   zIndex: -1,
                   filter: 'blur(10px)',
                 },
                 '&::after': {
                   content: '""',
                   position: 'absolute',
                   top: '50%',
                   left: '50%',
                   transform: 'translate(-50%, -50%)',
                   width: '120%',
                   height: '120%',
                   background: (theme) => theme.palette.mode === 'dark'
                     ? 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)'
                     : 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                   zIndex: -2,
                 }
               }}
             >
              Mes Projets
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
              Découvrez mes réalisations et explorations technologiques
            </Typography>
          </AnimatedBox>
        </Container>
      </HeaderSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {error && (
          <AnimatedBox>
            <Alert severity="error" sx={{ mb: 4, borderRadius: 2 }}>
              {error}
            </Alert>
          </AnimatedBox>
        )}

        {/* Stats Section */}
        <AnimatedBox>
          <StatsGrid>
            <StatsCard>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                {projects.length}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Projets Totaux
              </Typography>
            </StatsCard>
            <StatsCard>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                {getCompletedProjects()}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Projets Terminés
              </Typography>
            </StatsCard>
            <StatsCard>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                {getInProgressProjects()}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                En Cours
              </Typography>
            </StatsCard>
          </StatsGrid>
        </AnimatedBox>

        {/* Projects Grid */}
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} sx={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StatusChip
                    icon={getStatusIcon(project.status)}
                    label={project.status}
                    color={getStatusColor(project.status)}
                    size="medium"
                  />
                </Box>
                
                <Typography 
                   variant="h5" 
                   component="h2" 
                   gutterBottom
                   sx={{ 
                     fontWeight: 700,
                     color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#2c3e50',
                     mb: 2
                   }}
                 >
                  {project.name}
                </Typography>
                
                {project.imageUrl && (
                  <Box sx={{ mb: 3, textAlign: 'center' }}>
                    <img 
                      src={getImageUrl(project.imageUrl)} 
                      alt={project.name}
                      style={{ 
                        width: '400px',
                        height: '300px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      }}
                    />
                  </Box>
                )}
                
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  paragraph
                  sx={{ 
                    lineHeight: 1.6,
                    mb: 3,
                    minHeight: '4.5rem'
                  }}
                >
                  {project.description}
                </Typography>
                
                <TechStack>
                  {project.technologies.split(',').map((tech, techIndex) => (
                    <TechTag key={techIndex}>
                      {tech.trim()}
                    </TechTag>
                  ))}
                </TechStack>
              </CardContent>
              
              <CardActions sx={{ p: 4, pt: 0 }}>
                <ActionButton
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={() => handleProjectClick(project.url)}
                  disabled={!project.url || project.url.trim() === ''}
                  startIcon={project.url?.includes('github') ? <GitHubIcon /> : <LaunchIcon />}
                >
                  {project.url && project.url.trim() !== '' 
                    ? 'Voir le projet' 
                    : 'Lien non disponible'
                  }
                </ActionButton>
              </CardActions>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        {projects.length === 0 && !error && (
          <AnimatedBox>
            <Box sx={{ 
              textAlign: 'center', 
              py: 8,
              background: 'white',
              borderRadius: 4,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <CodeIcon sx={{ fontSize: 64, color: '#667eea', mb: 2 }} />
              <Typography variant="h5" color="text.secondary" gutterBottom>
                Aucun projet disponible
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Mes projets apparaîtront ici bientôt !
              </Typography>
            </Box>
          </AnimatedBox>
        )}
      </Container>
    </Box>
  )
}
