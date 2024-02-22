import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Box, Container, Typography } from '@mui/material';

const Contact: React.FC = () => {
  // TODO: X/Github/Email/BlueSky のリンク追加
  return (
    <>
      <Container maxWidth="xl">
        <Box p={2}>
          <Box display={'flex'} justifyContent={'left'} p={1}>
            <Typography variant='h5'>
              Contact
            </Typography>
          </Box>
          <Box display={'flex'} justifyContent={'left'} p={1}>
            <GitHubIcon />
            <Typography variant='body1' marginLeft={1}>
              <a target='_blank' rel="noreferrer" href='https://github.com/YutoOkawa'>GitHub</a>
            </Typography>
          </Box>
          <Box display={'flex'} justifyContent={'left'} p={1}>
            <EmailIcon />
            <Typography variant='body1' marginLeft={1}>
              yuutoowata [at] yahoo.co.jp
            </Typography>
          </Box>
          <Box display={'flex'} justifyContent={'left'} p={1}>
            <PermIdentityIcon />
            <Typography variant='body1' marginLeft={1}>
              <a target='_blank' rel="noreferrer" href='https://bsky.app/profile/yuutoowata.bsky.social'>BlueSky</a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default Contact