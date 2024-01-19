import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { chakra, Box, Text, Container, Divider, Avatar, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';

const ContactDetails = () => {
  const { name } = useParams();
  const [memberDetails, setMemberDetails] = useState(null);

  useEffect(() => {
    const fetchMemberDetailsFromAPI = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
        const member = response.data.results[0];

        if (member) {
          const details = {
            name: member.name,
            position: 'Desconhecido',
            bio: `Altura: ${member.height} cm, Peso: ${member.mass} kg`,
            image: `https://via.placeholder.com/150`,
            genero: `${member.gender} `,
          };
          setMemberDetails(details);
        } else {
          console.error('Membro não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setMemberDetails(null);
      }
    };

    fetchMemberDetailsFromAPI();
  }, [name]);

  if (!memberDetails) {
    return (
      <Box>
        <h1>Oops!</h1>
        <Text>Desculpe, ocorreu um erro inesperado ao buscar os detalhes do membro.</Text>
      </Box>
    );
  }

  return (
    <Container maxW="3xl" p={{ base: 5, md: 6 }}>
      <Box
        p={8}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="2xl"
        rounded="lg"
        position="relative"
        overflow="hidden"
      >
        <Avatar
          size="2xl"
          name={memberDetails.name}
          src={memberDetails.image}
          alt={memberDetails.name}
          mb={4}
        />
        <chakra.h1
          fontSize="xl"
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'white')}
        >
          {memberDetails.name}
        </chakra.h1>
        <Text fontSize="md" color="gray.500">
          {memberDetails.position}
        </Text>
        <Divider mt={4} mb={4} />
        <Text fontSize="md" color="gray.500">
          {memberDetails.bio}
        </Text>
      </Box>
    </Container>
  );
};

export default ContactDetails;
