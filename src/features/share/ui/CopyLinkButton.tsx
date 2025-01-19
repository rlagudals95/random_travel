'use client';

import { IconButton, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

export const CopyLinkButton = () => {
  const [open, setOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleCopy}
        color="inherit"
        size="large"
        aria-label="copy link"
        sx={{
          fontSize: 30,
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            transform: 'scale(1.1)',
            transition: 'transform 0.2s',
          },
        }}
      >
        <ContentCopyIcon />
      </IconButton>
      <Snackbar
        sx={{
          maxWidth: 300,
          position: 'fixed',
          bottom: '50%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="링크가 복사되었습니다"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
};