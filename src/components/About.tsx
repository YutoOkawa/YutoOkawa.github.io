import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AboutContent, AboutText } from './AboutContent';

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
		// TOOD: title と content の間の空白をいい感じにしたい
  	<>
			<Container maxWidth="xl">
				<Box p={2}>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Typography variant='h5'>
							About
						</Typography>
					</Box>
					{abouts.map((about) => (
						<Box display={'flex'} justifyContent={'left'} p={1}>
							<AboutContent about={about}></AboutContent>
						</Box>
					))}
				</Box>
			</Container>
    </>
  );
}
export default About;