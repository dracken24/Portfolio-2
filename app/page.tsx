import AppBarComponent from './components/appBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Home()
{
	return (
		<Box>
			{/* AppBar */}
			<AppBarComponent />
			{/* Grid */}
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					{/* Grid container */}
					<Grid container spacing={2} width="100%">
						{/* Container 1 */}
						<Container sx={{ backgroundColor: '#808080', width: '100%', marginTop: '15px' }}>
							<CardContent>
								<Typography variant="h6">Container 1</Typography>
							</CardContent>
						</Container>
						{/* Container 2 */}
						<Container sx={{ backgroundColor: '#808080', width: '100%' }}>
							<CardContent>
								<Typography variant="h6">Container 2</Typography>
							</CardContent>
						</Container>
						{/* Container 3 */}
						<Container sx={{ backgroundColor: '#808080', width: '100%' }}>
							<CardContent>
								<Typography variant="h6">Container 3</Typography>
							</CardContent>
						</Container>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
