"use client";

import
{
	Alert, Box, Button, Dialog,
	DialogActions, DialogContent, DialogTitle,
	TextField, Typography
} from '@mui/material';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LoginModalProps
{
	open: boolean;
	onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps)
{
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) =>
	{
		e.preventDefault();
		setError('');
		setLoading(true);

		try
		{
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers:
				{
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok)
			{
				const data = await response.json();
				// Le token est maintenant automatiquement stocké dans un cookie sécurisé
				// On peut toujours stocker les infos utilisateur dans localStorage pour l'affichage
				localStorage.setItem('adminUser', JSON.stringify(data.user));
				
				onClose();
				router.push('/admin/dashboard');
			}
			else
			{
				const errorData = await response.json();
				setError(errorData.message || 'Erreur de connexion');
			}
		}
		catch (err)
		{
			setError('Erreur de connexion au serveur');
		}
		finally
		{
			setLoading(false);
		}
	};

	return (
		<Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
			<DialogTitle>
				<Typography variant="h5" component="div">
					Connexion Admin
				</Typography>
			</DialogTitle>
			
			<form onSubmit={handleSubmit}>
				<DialogContent>
					{error && (
						<Alert severity="error" sx={{ mb: 2 }}>
							{error}
						</Alert>
					)}
					
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<TextField
							label="Email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							fullWidth
							variant="outlined"
						/>
						<TextField
							label="Mot de passe"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							fullWidth
							variant="outlined"
						/>
					</Box>
				</DialogContent>
				
				<DialogActions>
					<Button onClick={onClose} color="inherit">
						Annuler
					</Button>
					<Button 
						type="submit" 
						variant="contained" 
						disabled={loading}
						sx={{ 
							backgroundColor: '#1976d2',
							'&:hover':
							{
								backgroundColor: '#1565c0'
							}
						}}
					>
						{loading ? 'Connexion...' : 'Se connecter'}
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
}
