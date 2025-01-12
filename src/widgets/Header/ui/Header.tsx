import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { BackButton } from './_components/BackButton';

export const Header = () => {

  return (
    <AppBar 
      position="sticky" 
      color="inherit" 
      sx={{ 
        maxWidth: 'sm',
        margin: '0 auto',
        right: 0,
        left: 0,
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
        <Box>
          <BackButton />
        </Box>
        <Typography 
          variant="h6" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold',
            textAlign: 'center',
            background: 'linear-gradient(to right, #3B82F6, #6366F1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          랜덤여행
        </Typography>
        <Box />
      </Toolbar>
    </AppBar>
  );
};