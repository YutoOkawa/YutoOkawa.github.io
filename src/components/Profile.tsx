import { Avatar, Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

function Profile() {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
				overflow: 'hidden',
				// Subtle gradient background
				background: 'radial-gradient(circle at 20% 30%, rgba(88, 166, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 148, 158, 0.1) 0%, transparent 50%)',
			}}
		>
			<Container maxWidth='md'>
				<motion.div
					initial={{ opacity: 0, scale: 0.9, y: 30 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<Paper
						elevation={0}
						sx={{
							p: { xs: 4, md: 8 },
							borderRadius: 4,
							backdropFilter: 'blur(10px)',
							backgroundColor: 'rgba(22, 27, 34, 0.5)',
							border: '1px solid rgba(255, 255, 255, 0.05)',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							textAlign: 'center',
							boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
						}}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Avatar
								alt="Yuto Okawa"
								src="/images/IMG_2535.JPG"
								sx={{ width: 200, height: 200, mb: 4, border: '4px solid rgba(88, 166, 255, 0.8)', boxShadow: '0 0 20px rgba(88,166,255,0.4)' }}
							/>
						</motion.div>
						<Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
							Yuto Okawa
						</Typography>
						<Typography variant="h5" color="secondary" sx={{ fontWeight: 400, maxWidth: '600px', mx: 'auto', mt: 2 }}>
							Inhouse Security Engineer focused on building secure robust systems.
						</Typography>
					</Paper>
				</motion.div>
			</Container>
		</Box>
	);
}
export default Profile;