'use client';

import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();

  return (
    <AppBar 
      position="sticky" 
      color="inherit" 
      sx={{ 
        maxWidth: 'sm',
        margin: '0 auto',
        right: 0,
        left: 0,
        bgcolor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(20px)',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
        <Box>
          <IconButton 
            edge="start" 
            color="inherit" 
            onClick={() => router.back()}
          >
            <ArrowBackIcon />
          </IconButton>
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