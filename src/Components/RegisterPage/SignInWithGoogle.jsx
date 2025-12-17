import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import Image from 'next/image';

/**
 * Sign In with Google Component
 * @param {Object} props - Component props
 * @param {Function} props.clickHandler - Click handler function
 * @param {boolean} props.loading - Loading state
 * @param {string} props.text - Button text (optional)
 * @returns {JSX.Element} Sign in with Google button component
 */
export default function SignInWithGoogle({ 
  clickHandler, 
  loading = false, 
  text = 'Sign In with Google' 
}) {
  return (
    <Button
      onClick={clickHandler}
      size="large"
      loading={loading}
      loadingPosition="end"
      disabled={loading}
      style={{ textTransform: 'none' }}
      color="blackOne"
      fullWidth
      variant="outlined"
      startIcon={
        loading ? (
          <Google />
        ) : (
          <Image 
            src="/google-icon.png" 
            width="20" 
            height="20" 
            alt="Google icon" 
          />
        )
      }
      sx={{
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      {text}
    </Button>
  );
}
