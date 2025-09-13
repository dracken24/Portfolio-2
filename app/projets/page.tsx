'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import ErrorIcon from '@mui/icons-material/Error';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import AppBarComponent from '../components/appBar';

interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string;
    status: string;
    cathegory?: string;
    url: string;
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
}

// Composants stylisés
const HeaderSection = styled(Box)(({ theme }) => ({
    background:
        theme.palette.mode === 'dark'
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
        background:
            theme.palette.mode === 'dark'
                ? 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                : 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3
    }
}));

const ProjectCard = styled(Card)(({ theme }) => ({
    background:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(145deg, #1e1e1e 0%, #2d2d2d 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
    border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
    borderRadius: 16,
    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.08)',
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
        background:
            theme.palette.mode === 'dark'
                ? 'linear-gradient(90deg, #4a90e2 0%, #357abd 100%)'
                : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease'
    },
    '&:hover': {
        transform: 'translateY(-8px) scale(1.02)',
        boxShadow: theme.palette.mode === 'dark' ? '0 20px 40px rgba(0,0,0,0.5)' : '0 20px 40px rgba(0,0,0,0.15)',
        '&::before': {
            transform: 'scaleX(1)'
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
}));

const StatusChip = styled(Chip)(({ theme, color }: any) => ({
    borderRadius: 20,
    fontWeight: 600,
    fontSize: '0.875rem',
    padding: theme.spacing(0.5, 1.5),
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    '& .MuiChip-label': {
        padding: theme.spacing(0.5, 1)
    }
}));

const ActionButton = styled(Button)(({ theme }) => ({
    background:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: 12,
    padding: theme.spacing(1.5, 3),
    fontWeight: 600,
    fontSize: '1rem',
    textTransform: 'none',
    boxShadow:
        theme.palette.mode === 'dark' ? '0 4px 15px rgba(74, 144, 226, 0.4)' : '0 4px 15px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s ease',
    '&:hover': {
        background:
            theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #357abd 0%, #2d5a8a 100%)'
                : 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
        transform: 'translateY(-2px)',
        boxShadow:
            theme.palette.mode === 'dark' ? '0 8px 25px rgba(74, 144, 226, 0.6)' : '0 8px 25px rgba(102, 126, 234, 0.6)'
    },
    '&:disabled': {
        background:
            theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #404040 0%, #303030 100%)'
                : 'linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)',
        color: theme.palette.mode === 'dark' ? '#888888' : '#757575',
        boxShadow: 'none'
    }
}));

const TechStack = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2)
}));

const TechTag = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white',
    padding: theme.spacing(0.5, 1.5),
    borderRadius: 20,
    fontSize: '0.75rem',
    fontWeight: 500,
    boxShadow: '0 2px 8px rgba(240, 147, 251, 0.3)'
}));

const StatsCard = styled(Paper)(({ theme }) => ({
    background:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: theme.spacing(3),
    borderRadius: 16,
    textAlign: 'center',
    boxShadow:
        theme.palette.mode === 'dark' ? '0 8px 32px rgba(26, 26, 46, 0.5)' : '0 8px 32px rgba(102, 126, 234, 0.3)',
    animation: 'fadeIn 0.6s ease-out',
    '@keyframes fadeIn': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' }
    }
}));

const AnimatedBox = styled(Box)({
    animation: 'fadeIn 0.6s ease-out',
    '@keyframes fadeIn': {
        from: {
            opacity: 0,
            transform: 'translateY(30px)'
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)'
        }
    }
});

const ProjectsGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: theme.spacing(4),
    transition: 'all 0.3s ease-in-out',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr'
    },
    [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
    }
}));

const StatsGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: theme.spacing(3),
    marginBottom: theme.spacing(6)
}));

const SearchContainer = styled(Paper)(({ theme }) => ({
    background:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(145deg, #1e1e1e 0%, #2d2d2d 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
    border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
    borderRadius: 20,
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.1)',
    animation: 'fadeIn 0.6s ease-out',
    '@keyframes fadeIn': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' }
    }
}));

// SearchGrid component removed - using inline styles instead

export default function Projets() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [isFiltering, setIsFiltering] = useState(false);
    const [availableCategories, setAvailableCategories] = useState<string[]>([]);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    // Mapping des catégories de la base de données vers les noms d'affichage
    const getCategoryDisplayName = (category: string): string => {
        const categoryMap: { [key: string]: string } = {
            game: '🎮 Game Development',
            web: '🌐 Web Development',
            bureau: '💻 Applications Bureau',
            // burreau: '💻 Applications Bureau', // Correction pour la faute de frappe
            mobile: '📱 Mobile',
            trading: '📊 Trading',
            autre: '🔧 Autre'
            // Ajoutez d'autres mappings si nécessaire
            // 'Game Development': '🎮 Game Development',
            // 'Web Development': '🌐 Web Development',
            // 'Desktop Application': '💻 Applications Bureau',
            // 'Mobile App': '📱 Mobile',
            // 'Trading': '📊 Trading',
            // Other: '🔧 Autre'
        };
        return categoryMap[category] || category;
    };

    // Fonction pour obtenir les catégories d'un projet (support des catégories multiples)
    const getProjectCategories = (project: Project): string[] => {
        if (!project.cathegory) return [];

        return project.cathegory
            .split(',')
            .map(cat => cat.trim())
            .filter(cat => cat !== '');
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Extraire les catégories uniques des projets (support des catégories multiples)
    useEffect(() => {
        const categorySet = new Set<string>();
        projects.forEach(project => {
            if (project.cathegory && typeof project.cathegory === 'string' && project.cathegory.trim() !== '') {
                // Diviser les catégories par virgule et nettoyer
                const categories = project.cathegory
                    .split(',')
                    .map(cat => cat.trim())
                    .filter(cat => cat !== '');

                categories.forEach(category => {
                    categorySet.add(category);
                });
            }
        });
        const categories = Array.from(categorySet).sort();
        setAvailableCategories(categories);
    }, [projects]);

    useEffect(() => {
        filterProjects();
    }, [projects, searchTerm, selectedCategory]);

    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/projects');
            const data = await response.json();

            if (data.success) {
                setProjects(data.data);
            } else {
                setError('Erreur lors du chargement des projets');
            }
        } catch (err) {
            setError('Erreur de connexion');
        } finally {
            setLoading(false);
        }
    };

    const filterProjects = () => {
        setIsFiltering(true);

        // Petit délai pour l'animation (optionnel)
        setTimeout(() => {
            let filtered = projects;

            // Filtrage par catégorie (support des catégories multiples)
            if (selectedCategory) {
                filtered = filtered.filter(project => {
                    if (!project.cathegory) return false;

                    // Diviser les catégories par virgule et vérifier si la catégorie sélectionnée est présente
                    const projectCategories = project.cathegory
                        .split(',')
                        .map(cat => cat.trim())
                        .filter(cat => cat !== '');

                    return projectCategories.includes(selectedCategory);
                });
            }

            // Filtrage par terme de recherche
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                filtered = filtered.filter(
                    project =>
                        project.name.toLowerCase().includes(term) ||
                        project.description.toLowerCase().includes(term) ||
                        project.technologies.toLowerCase().includes(term)
                );
            }

            setFilteredProjects(filtered);
            setIsFiltering(false);
        }, 100);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('');
    };

    // Fonctions pour gérer le modal d'image
    const handleImageClick = (imageUrl: string, projectName: string) => {
        setSelectedImage({ src: getImageUrl(imageUrl), alt: projectName });
        setImageModalOpen(true);
    };

    const handleCloseImageModal = () => {
        setImageModalOpen(false);
        setSelectedImage(null);
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'terminee':
            case 'fini':
            case 'terminé':
                return 'success';
            case 'wip':
            case 'en cours':
            case 'en cours de développement':
                return 'warning';
            case 'planifiee':
            case 'planifié':
            case 'planifiée':
                return 'info';
            case 'non':
            case 'non défini':
                return 'error';
            default:
                return 'default';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status.toLowerCase()) {
            case 'terminee':
            case 'fini':
            case 'terminé':
                return <CheckCircleIcon />;
            case 'wip':
            case 'en cours':
            case 'en cours de développement':
                return <TrendingUpIcon />;
            case 'planifiee':
            case 'planifié':
            case 'planifiée':
                return <ScheduleIcon />;
            case 'non':
            case 'non défini':
                return <ErrorIcon />;
            default:
                return <CodeIcon />;
        }
    };

    const handleProjectClick = (url: string) => {
        if (url && url.trim() !== '') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    // Fonction pour corriger les chemins d'images
    const getImageUrl = (imageUrl: string) => {
        if (!imageUrl) {
            return '';
        }

        // Si c'est une URL complète (http/https), la retourner telle quelle
        if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
            return imageUrl;
        }

        // Si c'est un chemin relatif commençant par "public/", le corriger
        if (imageUrl.startsWith('public/')) {
            return imageUrl.replace('public/', '/');
        }

        // Si c'est un chemin relatif sans "public/", ajouter "/"
        if (!imageUrl.startsWith('/')) {
            return `/${imageUrl}`;
        }

        return imageUrl;
    };

    const getCompletedProjects = () =>
        projects.filter(p => ['terminee', 'fini', 'terminé'].includes(p.status.toLowerCase())).length;

    const getInProgressProjects = () =>
        projects.filter(p => ['wip', 'en cours', 'en cours de développement'].includes(p.status.toLowerCase())).length;

    if (loading) {
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
                <Container
                    sx={{
                        mt: 4,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '60vh'
                    }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <CircularProgress
                            size={60}
                            sx={{
                                color: theme => (theme.palette.mode === 'dark' ? '#4a90e2' : '#667eea'),
                                mb: 2
                            }}
                        />
                        <Typography variant="h6" color="text.secondary">
                            Chargement des projets...
                        </Typography>
                    </Box>
                </Container>
            </Box>
        );
    }

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
                                fontSize: {
                                    xs: '3rem',
                                    md: '4.5rem'
                                },
                                background: theme =>
                                    theme.palette.mode === 'dark'
                                        ? 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)'
                                        : 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: theme =>
                                    theme.palette.mode === 'dark'
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
                                    background: theme =>
                                        theme.palette.mode === 'dark'
                                            ? 'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))'
                                            : 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                                    borderRadius: '20px',
                                    zIndex: -1,
                                    filter: 'blur(10px)'
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '120%',
                                    height: '120%',
                                    background: theme =>
                                        theme.palette.mode === 'dark'
                                            ? 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)'
                                            : 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                                    zIndex: -2
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

                {/* Search and Filter Section */}
                <AnimatedBox>
                    <SearchContainer>
                        <Typography variant="h5" gutterBottom sx={{ mb: 3, textAlign: 'center', fontWeight: 600 }}>
                            🔍 Rechercher et Filtrer les Projets
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
                            Les filtres s'appliquent instantanément - essayez de taper ou de sélectionner une catégorie
                            !
                        </Typography>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '2fr 1fr auto' },
                                gap: 3,
                                alignItems: 'center'
                            }}
                        >
                            <TextField
                                fullWidth
                                placeholder="Rechercher par nom, description ou technologie..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon color="primary" />
                                        </InputAdornment>
                                    )
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 3
                                    }
                                }}
                            />
                            <FormControl fullWidth>
                                <InputLabel>Catégorie</InputLabel>
                                <Select
                                    value={selectedCategory}
                                    onChange={e => setSelectedCategory(e.target.value)}
                                    label="Catégorie"
                                    sx={{ borderRadius: 3 }}
                                >
                                    <MenuItem value="">Toutes les catégories</MenuItem>
                                    {availableCategories.map(category => (
                                        <MenuItem key={category} value={category}>
                                            {getCategoryDisplayName(category)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Button
                                variant="outlined"
                                onClick={clearFilters}
                                sx={{
                                    borderRadius: 3,
                                    height: '56px',
                                    px: 3
                                }}
                            >
                                Effacer
                            </Button>
                        </Box>
                        {/* Indicateurs de filtres actifs */}
                        {(searchTerm || selectedCategory) && (
                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Filtres actifs :
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                                    {searchTerm && (
                                        <Chip
                                            label={`Recherche: "${searchTerm}"`}
                                            color="primary"
                                            variant="outlined"
                                            size="small"
                                            onDelete={() => setSearchTerm('')}
                                        />
                                    )}
                                    {selectedCategory && (
                                        <Chip
                                            label={`Catégorie: ${getCategoryDisplayName(selectedCategory)}`}
                                            color="secondary"
                                            variant="outlined"
                                            size="small"
                                            onDelete={() => setSelectedCategory('')}
                                        />
                                    )}
                                </Box>
                            </Box>
                        )}

                        {/* Compteur de résultats */}
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            {isFiltering ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                    <CircularProgress size={16} />
                                    <Typography variant="body2" color="text.secondary">
                                        Filtrage en cours...
                                    </Typography>
                                </Box>
                            ) : (
                                <Typography variant="body2" color="text.secondary">
                                    {filteredProjects.length} projet(s) trouvé(s) sur {projects.length}
                                    {filteredProjects.length !== projects.length && ' • Filtres appliqués'}
                                </Typography>
                            )}
                        </Box>
                    </SearchContainer>
                </AnimatedBox>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            Aucun projet trouvé
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Essayez de modifier vos critères de recherche
                        </Typography>
                        <Button variant="outlined" onClick={clearFilters} sx={{ mt: 2 }}>
                            Effacer les filtres
                        </Button>
                    </Box>
                ) : (
                    <ProjectsGrid>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} sx={{ animationDelay: `${index * 0.1}s` }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2
                                        }}
                                    >
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
                                            color: theme => (theme.palette.mode === 'dark' ? '#ffffff' : '#2c3e50'),
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
                                                onClick={() => handleImageClick(project.imageUrl!, project.name)}
                                                style={{
                                                    minWidth: '100px',
                                                    maxWidth: '400px',
                                                    width: '100%',
                                                    minHeight: '100px',
                                                    maxHeight: '300px',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '12px',
                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                                    cursor: 'pointer',
                                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.transform = 'scale(1.02)';
                                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
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

                                    {/* Affichage des catégories */}
                                    {getProjectCategories(project).length > 0 && (
                                        <Box sx={{ mb: 2 }}>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 1, fontWeight: 600 }}
                                            >
                                                Catégories :
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {getProjectCategories(project).map((category, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={getCategoryDisplayName(category)}
                                                        size="small"
                                                        variant="outlined"
                                                        sx={{
                                                            fontSize: '0.75rem',
                                                            height: '24px',
                                                            '& .MuiChip-label': {
                                                                px: 1
                                                            }
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>
                                    )}

                                    <TechStack>
                                        {project.technologies.split(',').map((tech, techIndex) => (
                                            <TechTag key={techIndex}>{tech.trim()}</TechTag>
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
                                            : 'Lien non disponible'}
                                    </ActionButton>
                                </CardActions>
                            </ProjectCard>
                        ))}
                    </ProjectsGrid>
                )}

                {projects.length === 0 && !error && (
                    <AnimatedBox>
                        <Box
                            sx={{
                                textAlign: 'center',
                                py: 8,
                                background: 'white',
                                borderRadius: 4,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                            }}
                        >
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

            {/* Modal pour agrandir l'image */}
            <Dialog
                open={imageModalOpen}
                onClose={handleCloseImageModal}
                maxWidth="lg"
                fullWidth
                sx={{
                    '& .MuiDialog-paper': {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        maxHeight: '90vh'
                    }
                }}
            >
                <DialogContent
                    sx={{
                        position: 'relative',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '50vh'
                    }}
                >
                    {/* Bouton de fermeture */}
                    <IconButton
                        onClick={handleCloseImageModal}
                        sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            zIndex: 1,
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)'
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Image agrandie */}
                    {selectedImage && (
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                width: 'auto',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                                objectFit: 'contain'
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
}
