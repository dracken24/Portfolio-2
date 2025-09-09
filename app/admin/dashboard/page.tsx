"use client";

import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon, Logout as LogoutIcon } from '@mui/icons-material';
import {
	Alert,
	AppBar,
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Toolbar,
	Typography
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface Project {
	id: number;
	name: string;
	description: string;
	technologies: string;
	status: string;
	cathegory: string;
	url?: string;
	imageUrl?: string;
	createdAt: string;
	updatedAt: string;
}

export default function AdminDashboard()
{
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [openDialog, setOpenDialog] = useState(false);
	const [editingProject, setEditingProject] = useState<Project | null>(null);
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		technologies: '',
		status: '',
		cathegory: '',
		url: '',
		imageUrl: ''
	});
	const router = useRouter();

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

	const fetchProjects = useCallback(async () =>
	{
		try
		{
			const token = localStorage.getItem('adminToken');
			if (!token)
			{
				router.push('/');
				return;
			}

			const response = await fetch('/api/projects', {
				headers:
				{
					'Authorization': `Bearer ${token}`
				}
			});

			if (response.status === 401)
			{
				// Token invalide, rediriger vers la connexion
				localStorage.removeItem('adminToken');
				localStorage.removeItem('adminUser');
				router.push('/');
				return;
			}

			if (response.ok)
			{
				const data = await response.json();
				console.log('Projets admin reçus:', data); // Debug
				setProjects(data.data || []); // Utiliser data.data au lieu de data
			}
			else
			{
				setError('Erreur lors du chargement des projets');
			}
		}
		catch (err)
		{
			setError('Erreur de connexion');
		}
		finally
		{
			setLoading(false);
		}
	}, [router, setProjects, setError, setLoading]);

	useEffect(() =>
	{
		// Vérifier si l'utilisateur est connecté
		const token = localStorage.getItem('adminToken');
		if (!token)
		{
			router.push('/');
			return;
		}

		fetchProjects();
	}, [fetchProjects]);



	const handleLogout = () =>
	{
		localStorage.removeItem('adminToken');
		localStorage.removeItem('adminUser');
		router.push('/');
	};

	const handleAddProject = () =>
	{
		setEditingProject(null);
		setFormData({
			name: '',
			description: '',
			technologies: '',
			status: '',
			cathegory: '',
			url: '',
			imageUrl: ''
		});
		setOpenDialog(true);
	};

	const handleEditProject = (project: Project) =>
	{
		setEditingProject(project);
		setFormData({
			name: project.name,
			description: project.description,
			technologies: project.technologies,
			status: project.status,
			cathegory: project.cathegory,
			url: project.url || '',
			imageUrl: project.imageUrl || ''
		});
		setOpenDialog(true);
	};

	const handleDeleteProject = async (id: number) =>
	{
		if (!confirm('Êtes-vous sûr de vouloir supprimer ce projet ?'))
		{
			return;
		}

		try
		{
			const token = localStorage.getItem('adminToken');
			if (!token)
			{
				router.push('/');
				return;
			}

			const response = await fetch(`/api/projects/${id}`,{
				method: 'DELETE',
				headers:
				{
					'Authorization': `Bearer ${token}`
				}
			});

			if (response.status === 401)
			{
				localStorage.removeItem('adminToken');
				localStorage.removeItem('adminUser');
				router.push('/');
				
				return;
			}

			if (response.ok)
			{
				fetchProjects();
			}
			else
			{
				setError('Erreur lors de la suppression');
			}
		}
		catch (err)
		{
			setError('Erreur de connexion');
		}
	};

	const handleSubmit = async (e: React.FormEvent) =>
	{
		e.preventDefault();

		try
		{
			const token = localStorage.getItem('adminToken');
			if (!token)
			{
				router.push('/');
				return;
			}

			const url = editingProject ? `/api/projects/${editingProject.id}` : '/api/projects';
			
			const method = editingProject ? 'PUT' : 'POST';

			const response = await fetch(url,{
				method,
				headers:
				{
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify(formData)
			});

			if (response.status === 401)
			{
				localStorage.removeItem('adminToken');
				localStorage.removeItem('adminUser');
				router.push('/');
				
				return;
			}

			if (response.ok)
			{
				setOpenDialog(false);
				fetchProjects();
			}
			else
			{
				setError('Erreur lors de la sauvegarde');
			}
		}
		catch (err)
		{
			setError('Erreur de connexion');
		}
	};

	if (loading)
	{
		return (
			<Container>
			<Typography>Chargement...</Typography>
			</Container>
		);
	}

	return (
	<>
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Tableau de bord Admin
				</Typography>
				<IconButton color="inherit" onClick={handleLogout}>
					<LogoutIcon />
				</IconButton>
			</Toolbar>
		</AppBar>

		<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
				<Typography variant="h4" component="h1">
					Gestion des Projets
				</Typography>
				<Button
				variant="contained"
				startIcon={<AddIcon />}
				onClick={handleAddProject}
				sx={{ backgroundColor: '#1976d2' }}
				>
					Ajouter un projet
				</Button>
			</Box>

			{error && (
				<Alert severity="error" sx={{ mb: 2 }}>
					{error}
				</Alert>
			)}

			<Card>
				<CardContent>
					<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Nom</TableCell>
								<TableCell>Description</TableCell>
								<TableCell>Technologies</TableCell>
								<TableCell>Categorie</TableCell>
								<TableCell>Statut</TableCell>
								<TableCell>URL</TableCell>
								<TableCell>Image</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{projects.length === 0 ? (
								<TableRow>
									<TableCell colSpan={7} align="center">
										<Typography variant="body2" color="textSecondary">
											Aucun projet trouvé
										</Typography>
									</TableCell>
								</TableRow>
							) : (
							projects.map((project) => (
								<TableRow key={project.id}>
									<TableCell>{project.name}</TableCell>
									<TableCell>{project.description}</TableCell>
									<TableCell>{project.technologies}</TableCell>
									<TableCell>{project.cathegory}</TableCell>
									<TableCell>{project.status}</TableCell>
									<TableCell>
										{project.url ? (
											<a href={project.url} target="_blank" rel="noopener noreferrer">
												{project.url}
											</a>
											) : (
											<span style={{ color: '#999' }}>Aucune URL</span>
										)}
									</TableCell>
									<TableCell>
										{project.imageUrl ? (
											<img 
												src={getImageUrl(project.imageUrl)} 
												alt={project.name}
												style={{ 
												width: '50px',
												height: '50px',
												objectFit: 'cover',
												borderRadius: '4px'
												}}
											/>
										) : (
											<span style={{ color: '#999' }}>Aucune image</span>
										)}
									</TableCell>
									<TableCell>
										<IconButton onClick={() => handleEditProject(project)}>
											<EditIcon />
										</IconButton>
										<IconButton onClick={() => handleDeleteProject(project.id)}>
											<DeleteIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
				</CardContent>
			</Card>

			<Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
				<DialogTitle>
					{editingProject ? 'Modifier le projet' : 'Ajouter un nouveau projet'}
				</DialogTitle>
				<form onSubmit={handleSubmit}>
					<DialogContent>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
							<TextField
								label="Nom du projet"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								required
								fullWidth
							/>
							<TextField
								label="Description"
								value={formData.description}
								onChange={(e) => setFormData({ ...formData, description: e.target.value })}
								required
								fullWidth
								multiline
								rows={3}
							/>
							<TextField
								label="Technologies"
								value={formData.technologies}
								onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
								required
								fullWidth
							/>
							<TextField
								label="Statut"
								value={formData.status}
								onChange={(e) => setFormData({ ...formData, status: e.target.value })}
								required
								fullWidth
							/>
							<TextField
								label="Categorie"
								value={formData.cathegory}
								onChange={(e) => setFormData({ ...formData, cathegory: e.target.value })}
								required
								fullWidth
							/>
							<TextField
								label="URL"
								value={formData.url}
								onChange={(e) => setFormData({ ...formData, url: e.target.value })}
								fullWidth
								helperText="URL optionnelle du projet"
							/>
							<TextField
								label="URL de l'image"
								value={formData.imageUrl}
								onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
								fullWidth
								helperText="URL optionnelle de l'image du projet"
							/>
						</Box>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setOpenDialog(false)}>
							Annuler
						</Button>
						<Button type="submit" variant="contained">
							{editingProject ? 'Modifier' : 'Ajouter'}
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</Container>
	</>
);}
