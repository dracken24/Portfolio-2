"use client";

import {
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	Launch as LaunchIcon
} from '@mui/icons-material';

import {
	Box, Card, CardContent, Chip,
	IconButton, Link, Typography
} from '@mui/material';

import { useEffect, useState } from 'react';
import './components.css';

interface Project
{
	id: number;
	name: string;
	description: string;
	technologies: string;
	status: string;
	url?: string;
	imageUrl?: string;
	createdAt: string;
	updatedAt: string;
}

export default function ProjectSlideshow()
{
	const [projects, setProjects] = useState<Project[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() =>
	{
		fetchProjects();
	}, []);

	useEffect(() =>
	{
		if (projects.length > 0)
		{
			const interval = setInterval(() =>
			{
				handleNext();
			}, 10000); // Change de projet toutes les 10 secondes

			return () => clearInterval(interval);
		}
	}, [projects.length]); // Retiré currentIndex pour éviter la recréation de l'intervalle

	const fetchProjects = async () =>
	{
		try
		{
			const response = await fetch('/api/projects');
			if (response.ok)
			{
				const data = await response.json();
				console.log('Projets reçus:', data); // Debug
				
				// Mélanger aléatoirement les projets
				const shuffledProjects = data.sort(() => Math.random() - 0.5);
				setProjects(shuffledProjects);
			}
		}
		catch (error)
		{
			console.error('Erreur lors du chargement des projets:', error);
		}
		finally
		{
			setLoading(false);
		}
	};

	const handlePrevious = () =>
	{
		if (isTransitioning)
		{
			return;
		}
		setIsTransitioning(true);
		setCurrentIndex((prevIndex) => 
			prevIndex === 0 ? projects.length - 1 : prevIndex - 1
		);
		setTimeout(() => setIsTransitioning(false), 500);
	};

	const handleNext = () => 
	{
		if (isTransitioning)
		{
			return;
		}
		setIsTransitioning(true);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
		setTimeout(() => setIsTransitioning(false), 500);
	};

	const handleIndicatorClick = (index: number) =>
	{
		if (!isTransitioning && index !== currentIndex)
		{
			setIsTransitioning(true);
			setCurrentIndex(index);
			setTimeout(() => setIsTransitioning(false), 500);
		}
	};

	const getStatusColor = (status: string) =>
	{
		switch (status.toLowerCase())
		{
			case 'terminé':
			case 'completed':
			case 'done':
				return 'success';
			case 'en cours':
			case 'in progress':
			case 'development':
				return 'warning';
			case 'planifié':
			case 'planned':
				return 'info';
			default:
				return 'default';
		}
	};

	const getProjectIndex = (offset: number) =>
	{
		const index = (currentIndex + offset + projects.length) % projects.length;
		return index;
	};

	if (loading)
	{
		return (
			<Box className="project-slideshow-loading">
				<Typography variant="body1" color="textSecondary">
					Chargement des projets...
				</Typography>
			</Box>
		);
	}

	if (projects.length === 0)
	{
		return (
			<Box className="project-slideshow-empty">
				<Typography variant="body1" color="textSecondary">
						Aucun projet disponible
				</Typography>
			</Box>
		);
	}

	return (
		<Box className="project-slideshow-container">
			<Typography 
				variant="h2" 
				className="project-slideshow-title"
			>
				Mes Projets
			</Typography>

			<Box className="project-slideshow-main">
				{/* Bouton précédent */}
				<IconButton
					onClick={handlePrevious}
					disabled={isTransitioning}
					className="project-slideshow-nav-button prev"
				>
					<ChevronLeftIcon />
				</IconButton>

				{/* Container fixe avec les projets qui glissent */}
				<Box className="project-slideshow-cards-container">
						
					{/* Projet précédent (assombri) */}
					<Card className="project-card side">
						<Box className="project-card-header">
							<Typography variant="h5" className="project-card-title">
								{projects[getProjectIndex(-1)]?.name}
							</Typography>
							<Chip 
								label={projects[getProjectIndex(-1)]?.status} 
								color={getStatusColor(projects[getProjectIndex(-1)]?.status || '') as any}
								className="project-card-status"
							/>
						</Box>
							{projects[getProjectIndex(-1)]?.imageUrl && (
						<Box className="project-card-image-container">
							<img 
								src={projects[getProjectIndex(-1)]?.imageUrl} 
								alt={projects[getProjectIndex(-1)]?.name}
								className="project-card-image side"
								onError={(e) =>
								{
									console.log('Erreur de chargement image:', projects[getProjectIndex(-1)]?.imageUrl);
									e.currentTarget.style.display = 'none';
								}}
							/>
						</Box>
					)}
						<CardContent className="project-card-content">
							<Typography variant="body2" className="project-card-description">
								{projects[getProjectIndex(-1)]?.description}
							</Typography>
						</CardContent>
					</Card>

					{/* Projet actuel (centré) */}
					<Card className="project-card center">
						<Box className="project-card-header center">
							<Typography variant="h4" className="project-card-title center">
								{projects[currentIndex].name}
							</Typography>
							<Chip 
								label={projects[currentIndex].status} 
								color={getStatusColor(projects[currentIndex].status) as any}
								className="project-card-status"
							/>
						</Box>
						{projects[currentIndex].imageUrl && (
							<Box className="project-card-image-container center">
								<img 
									src={projects[currentIndex].imageUrl} 
									alt={projects[currentIndex].name}
									className="project-card-image center"
									onError={(e) =>
									{
										console.log('Erreur de chargement image:', projects[currentIndex].imageUrl);
										e.currentTarget.style.display = 'none';
									}}
								/>
							</Box>
						)}
							
						<CardContent className="project-card-content center">
							<Typography variant="body1" className="project-card-description center">
								{projects[currentIndex].description}
							</Typography>
							<Box className="project-card-technologies-container">
								<Typography variant="subtitle2" className="project-card-technologies-title">
									Technologies utilisées :
								</Typography>
								<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
									{projects[currentIndex].technologies.split(',').map((tech, index) => (
										<Chip 
											key={index}
											label={tech.trim()} 
											size="small"
											className="project-card-technology-chip"
										/>
									))}
								</Box>
							</Box>

							<Box className="project-card-link-container">
								{projects[currentIndex].url && (
									<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
										<Link 
											href={projects[currentIndex].url} 
											target="_blank" 
											rel="noopener noreferrer"
											className="project-card-link"
										>
										<LaunchIcon fontSize="small" />
											Voir le projet
										</Link>
									</Box>
								)}
							</Box>
						</CardContent>
					</Card>

					<Card className="project-card side">
						<Box className="project-card-header">
							<Typography variant="h5" className="project-card-title">
								{projects[getProjectIndex(1)]?.name}
							</Typography>
							<Chip 
							label={projects[getProjectIndex(1)]?.status} 
							color={getStatusColor(projects[getProjectIndex(1)]?.status || '') as any}
							className="project-card-status"
						/>
						</Box>
						{projects[getProjectIndex(1)]?.imageUrl && (
							<Box className="project-card-image-container">
								<img 
									src={projects[getProjectIndex(1)]?.imageUrl} 
									alt={projects[getProjectIndex(1)]?.name}
									className="project-card-image side"
									onError={(e) =>
									{
										console.log('Erreur de chargement image:', projects[getProjectIndex(1)]?.imageUrl);
										e.currentTarget.style.display = 'none';
									}}
								/>
							</Box>
						)}
						
						<CardContent className="project-card-content">
							<Typography variant="body2" className="project-card-description">
								{projects[getProjectIndex(1)]?.description}
							</Typography>
						</CardContent>
					</Card>
				</Box>

				{/* Bouton suivant */}
				<IconButton
					onClick={handleNext}
					disabled={isTransitioning}
					className="project-slideshow-nav-button next"
				>
					<ChevronRightIcon />
				</IconButton>
			</Box>

			{/* Indicateurs de navigation */}
			<Box className="project-slideshow-indicators">
				{projects.map((_, index) =>(
					<Box
						key={index}
						onClick={() => handleIndicatorClick(index)}
						className={`project-slideshow-indicator ${index === currentIndex ? 'active' : 'inactive'}`}
					/>
				))}
			</Box>

		  {/* Compteur de projets */}
			<Typography variant="body2" className="project-slideshow-counter">
			{currentIndex + 1} / {projects.length}
			</Typography>
		</Box>
	);
}
