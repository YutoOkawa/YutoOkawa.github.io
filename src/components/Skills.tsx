import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { SkillContent, SkillTexts } from "./SkillContent";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
	const skills: SkillTexts[] = [
		{
			title: 'Language',
			content: 'Go / Python / Java / TypeScript'
		},
		{
			title: 'Frameworks',
			content: 'Node.js / React',
		},
		{
			title: 'Infras',
			content: 'Linux / Docker / Kubernetes'
		},
		{
			title: 'Technology',
			content: 'FIDO / PassKey / Cryptography',
		}
	]
	return (
		<Box sx={{ py: 10, backgroundColor: 'rgba(13, 17, 23, 0.4)' }}>
			<Container maxWidth="md">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
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
						<Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main' }}>
							Skills
						</Typography>
						<Grid container spacing={3}>
							{skills.map((skill, index) => (
								<Grid item xs={12} sm={6} key={index}>
									<motion.div
										whileHover={{ scale: 1.02 }}
										transition={{ type: "spring", stiffness: 300 }}
									>
										<SkillContent skill={skill}></SkillContent>
									</motion.div>
								</Grid>
							))}
						</Grid>
					</Paper>
				</motion.div>
			</Container>
		</Box>
	);
}
export default Skills