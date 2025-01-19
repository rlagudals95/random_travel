import { Button, ButtonProps } from "@mui/material";

interface CtaButtonProps extends Omit<ButtonProps, 'onClick' | 'component'> {
  children: React.ReactNode;
  onClick: () => void;
}

export const CtaButton = ({ children, onClick, ...props }: CtaButtonProps) => {
  return (
    <Button
        color="primary"
        variant="contained"
        fullWidth
        sx={{
        py: 1.5,  
        borderRadius: 10, 
        textAlign: 'center',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        boxShadow: 'none',
        }}
        onClick={onClick}
        {...props}
    >
        {children}
    </Button>      
  );
};