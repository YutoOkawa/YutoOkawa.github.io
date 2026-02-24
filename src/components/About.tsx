import { Container, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AboutContent, AboutText } from './AboutContent';
import { motion } from 'framer-motion';

const About: React.FC = () => {
	const abouts: AboutText[] = [
		{
			title: 'Name',
			content: 'Yuto Okawa'
		},
		{
			title: 'Job',
			content: 'Inhouse Security Engineer'
		},
		{
			title: 'Hobby',
			content: 'Coffee / Social-network game'
		}
	]
	return (
		<Box sx={{ py: 10 }}>
			<Container maxWidth="md">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
				>
					<Paper
						elevation={0}
						sx={{
							p: { xs: 3, md: 5 },
							borderRadius: 4,
							backgroundColor: 'background.paper',
							backdropFilter: 'blur(10px)',
							border: '1px solid rgba(255, 255, 255, 0.05)',
						}}
					>
						<Typography variant='h4' component='h2' gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main' }}>
							About Me
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
							{abouts.map((about, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<AboutContent about={about}></AboutContent>
								</motion.div>
							))}
						</Box>
					</Paper>
				</motion.div>
			</Container>
		</Box>
	);
}
export default About;