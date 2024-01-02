import { Box, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error;

  return (
    <Box>
      <h1>Oops!</h1>
      <Text>Desculpe, ocorreu um erro inesperado.</Text>
      {error && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </Box>
  );
}
