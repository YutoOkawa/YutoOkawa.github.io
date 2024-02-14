import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
  return (
		// TODO: h5 をもう少し工夫したい
		// TODO: body1 にある要素を１つずつブロック的に区切りたい
  	<>
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
    </>
  );
}
export default About;