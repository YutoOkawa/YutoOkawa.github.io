import { Box, Container, Grid, Typography } from "@mui/material";
import { SkillContent, SkillTexts } from "./SkillContent";

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
		<>
			<Container maxWidth="xl">
				<Box p={2}>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Typography variant="h5">
							Skills
						</Typography>
					</Box>
					<Box display={'flex'} justifyContent={'left'} p={1}>
						<Grid container spacing={3} justifyContent={'left'}>
							{skills.map((skill) => (
								<SkillContent skill={skill}></SkillContent>
							))}
						</Grid>
					</Box>
				</Box>
			</Container>
		</>
	);
}
export default Skills