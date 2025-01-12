'use client';

import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <IconButton 
      edge="start" 
      color="inherit" 
      onClick={() => router.back()}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};