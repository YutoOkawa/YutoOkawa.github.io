import { Grid, Card, CardContent, Typography } from "@mui/material"

export type SkillTexts = {
	title: string
	content: string
}

export const SkillContent: React.FC<{skill: SkillTexts}> = ( {skill} ) => {
	return (
		<Grid item>
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