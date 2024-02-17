import { Box, Card, CardContent, Container, Typography, makeStyles } from "@mui/material";

function Skills() {
	return (
		<>
			<Container maxWidth="xl">
				<Box p={2}>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Typography variant="h5">
							Skills
						</Typography>
					</Box>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Card sx={{ minWidth: 300, maxWidth: '100%'}} >
							<CardContent>
								<Typography sx={{ fontSize: 14 }} color={'text.Secondary'} gutterBottom>
									Language
								</Typography>
								<Typography variant="h6" component={'div'}>
									Go / Python / Java / Node.js
								</Typography>
							</CardContent>
						</Card>
					</Box>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Card sx={{ minWidth: 300, maxWidth: '100%'}} >
							<CardContent>
								<Typography sx={{ fontSize: 14 }} color={'text.Secondary'} gutterBottom>
									Tools
								</Typography>
								<Typography variant="h6" component={'div'}>
									Docker / Kubernetes
								</Typography>
							</CardContent>
						</Card>
					</Box>
				</Box>
			</Container>
		</>
	);
}
export default Skills