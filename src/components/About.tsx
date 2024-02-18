import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
  return (
		// TODO: About のコンテンツを変数定義して、値を渡して書き出せるようにしたい
  	<>
			<Container maxWidth="xl">
				<Box p={2}>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Typography variant='h5'>
							About
						</Typography>
					</Box>	
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Typography variant='body1' align='left'>
							Name: Yuto Okawa <br />
							Job: Security Engineer <br />
							Like: Golang / FIDO
						</Typography>
					</Box>
				</Box>
			</Container>
    </>
  );
}
export default About;