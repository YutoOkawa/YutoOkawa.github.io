import { Typography } from "@mui/material";

export type AboutText = {
  title: string
  content: string
}

export const AboutContent: React.FC<{about: AboutText}> = ( {about} ) => {
  return (
    <Typography variant="button" align="left">
      {about.title}: {about.content}
    </Typography>   
  );
}