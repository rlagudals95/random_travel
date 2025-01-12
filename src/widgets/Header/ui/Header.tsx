import { AppBar, Toolbar, Typography } from '@mui/material';

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
        bgcolor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(20px)',
        boxShadow: 'none'
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold',
            flexGrow: 1,
            background: 'linear-gradient(to right, #3B82F6, #6366F1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          랜덤여행
        </Typography>
        {/* <Box>
          <IconButton size="large" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton size="large" color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};