'use client';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// Discord SVG Icon Component
const DiscordIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
	</svg>
);

const FooterContainer = styled(Box)(({ theme }) => (
{
	background:
		theme.palette.mode === 'dark'
			? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
			: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
	color: 'white',
	padding: theme.spacing(4, 0, 2),
	marginTop: 'auto',
	position: 'relative',
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

const SocialIcon = styled(Box)(({ theme }) => (
{
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: 40,
	height: 40,
	borderRadius: '50%',
	background: 'rgba(255,255,255,0.1)',
	color: 'white',
	margin: theme.spacing(0, 1),
	transition: 'all 0.3s ease',
	'&:hover':
	{
		background: 'rgba(255,255,255,0.2)',
		transform: 'scale(1.1)'
	}
}));

export default function Footer()
{
	const currentYear = new Date().getFullYear();

	return (
		<FooterContainer>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: 2
					}}
				>
					<Box>
						<Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
							Nadia Desjardins
						</Typography>
						<Typography variant="body2" sx={{ opacity: 0.8 }}>
							Développeuse Full Stack
						</Typography>
					</Box>

					<Box sx={{ textAlign: 'center' }}>
						<Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
							Suivez-moi
						</Typography>
						<Box>
							<IconButton
								component="a"
								href="https://github.com/dracken24"
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									color: 'white',
									background: 'rgba(255,255,255,0.1)',
									margin: 1,
									'&:hover':
									{
										background: 'rgba(255,255,255,0.2)',
										transform: 'scale(1.1)'
									}
								}}
							>
								<GitHubIcon fontSize="small" />
							</IconButton>
							<IconButton
								component="a"
								href="https://www.linkedin.com/in/nadia-desjardins-a57b9b247/"
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									color: 'white',
									background: 'rgba(255,255,255,0.1)',
									margin: 1,
									'&:hover':
									{
										background: 'rgba(255,255,255,0.2)',
										transform: 'scale(1.1)'
									}
								}}
							>
								<LinkedInIcon fontSize="small" />
							</IconButton>
							<IconButton
								component="a"
								href="https://discord.com/users/dracken24"
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									color: 'white',
									background: 'rgba(255,255,255,0.1)',
									margin: 1,
									'&:hover':
									{
										background: 'rgba(255,255,255,0.2)',
										transform: 'scale(1.1)'
									}
								}}
							>
								<DiscordIcon />
							</IconButton>
							<IconButton
								component="a"
								href="mailto:dracken24@gmail.com"
								sx={{
									color: 'white',
									background: 'rgba(255,255,255,0.1)',
									margin: 1,
									'&:hover':
									{
										background: 'rgba(255,255,255,0.2)',
										transform: 'scale(1.1)'
									}
								}}
							>
								<EmailIcon fontSize="small" />
							</IconButton>
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
	);
}
