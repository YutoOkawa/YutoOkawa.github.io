import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

type SkillTexts = {
	title: string
	content: string
}

const SkillContent: React.FC<{skill: SkillTexts}> = ( {skill} ) => {
	return (
		<Grid item xs={3}>
			<Card sx={{ maxWidth: '100%' }} >
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color={'text.Secondary'} gutterBottom>
						{skill.title}
					</Typography>
					<Typography variant="h6">
						{skill.content}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}

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
			content: 'Docker / Kubernetes'
		},
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
						<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'left'}>
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