import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Box, Container, Typography, Paper, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              textAlign: 'center',
            }}
          >
            <Typography variant='h4' component='h2' gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main' }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <GitHubIcon sx={{ fontSize: 32, mr: 2 }} />
                <MuiLink href="https://github.com/YutoOkawa" target="_blank" rel="noreferrer" color="inherit" underline="hover" variant="h6">
                  GitHub
                </MuiLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 32, mr: 2 }} />
                <Typography variant="h6">
                  yuutoowata [at] yahoo.co.jp
                </Typography>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <PermIdentityIcon sx={{ fontSize: 32, mr: 2 }} />
                <MuiLink href="https://bsky.app/profile/yuutoowata.bsky.social" target="_blank" rel="noreferrer" color="inherit" underline="hover" variant="h6">
                  BlueSky
                </MuiLink>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
export default Contact