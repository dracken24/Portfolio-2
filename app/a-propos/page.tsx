import AppBarComponent from '../components/appBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function APropos()
{
	return (
		<Box>
			{/* AppBar */}
			<AppBarComponent />
			{/* Grid */}
			<Typography variant="h1">À propos</Typography>
		</Box>
	)
}
