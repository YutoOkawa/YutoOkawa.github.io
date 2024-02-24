import { Avatar, Box, Container, Typography } from "@mui/material";

function Profile() {
	return (
		<>
			<Container maxWidth='xl'>
				<Box p={2}>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Avatar 
						  alt="my-avatar"
							src="/images/IMG_2535.JPG" // TODO: 画像が見えるように
							sx={{width:100, height:100}} // TODO: リサイズ
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