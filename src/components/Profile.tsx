import { Avatar, Box, Container, Typography } from "@mui/material";

function Profile() {
	return (
		<>
			<Container maxWidth='xl'>
				<Box p={2}>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Avatar 
						  alt="my-avatar"
							src="/images/IMG_2535.JPG"
							sx={{width:175, height:175}}
						/>
					</Box>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Typography variant="h5">
							Yuto Okawa
						</Typography>
					</Box>
				</Box>
			</Container>
		</>
	);
}
export default Profile