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
			title: 'Like',
			content: 'Golang / FIDO'
		}
	]
  return (
		// TODO: 改行をできるようにする
  	<>
			<Container maxWidth="xl">
				<Box p={2}>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Typography variant='h5'>
							About
						</Typography>
					</Box>	
					<Box display={'flex'} justifyContent={'left'} p={1}>
						{abouts.map((about) => (
							<AboutContent about={about}></AboutContent>
						))}
						{/* <Typography variant='body1' align='left'>
							Name: Yuto Okawa <br />
							Job: Security Engineer <br />
							Like: Golang / FIDO
						</Typography> */}
					</Box>
				</Box>
			</Container>
    </>
  );
}
export default About;