import { Box, Text, Link } from '@chakra-ui/react';
import { useLocation, Link as RouterLink } from 'react-router-dom';

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error;

  console.error('Erro:', error);

  return (
    <Box textAlign="center" mt={8}>
      <h1>Oops!</h1>
      <Text fontSize="lg" mt={4}>
        Desculpe, ocorreu um erro inesperado.
      </Text>
      {error && (
        <Text mt={4}>
          <i>{error.statusText || error.message}</i>
        </Text>
      )}
      <Link as={RouterLink} to="/" color="blue.500" mt={4} display="block">
        Voltar para a Página Inicial
      </Link>
    </Box>
  );
}
