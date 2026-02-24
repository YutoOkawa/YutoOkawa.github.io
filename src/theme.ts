import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0d1117', // Deep dark background
            paper: 'rgba(22, 27, 34, 0.7)', // Slightly lighter dark with transparency for glassmorphism
        },
        primary: {
            main: '#58a6ff', // A nice blue accent (similar to GitHub Dark blue)
        },
        secondary: {
            main: '#8b949e', // Muted text/secondary elements
        },
        text: {
            primary: '#c9d1d9',
            secondary: '#8b949e',
        },
    },
    typography: {
        fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
        h1: { fontWeight: 700 },
        h2: { fontWeight: 700 },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // Remove default MUI paper elevation gradient in dark mode
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(13, 17, 23, 0.8)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                },
            },
        },
    },
});

export default darkTheme;
