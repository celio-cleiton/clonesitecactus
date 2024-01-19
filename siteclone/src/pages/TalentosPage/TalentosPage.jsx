import { useEffect, useState } from 'react';
import { ChakraProvider, Box, Heading, Text, Flex, Image, SimpleGrid, Container, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from 'axios';

const TalentosPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembersFromAPI = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        const apiData = response.data.results.map(person => ({
          name: person.name,
          position: 'Desconhecido', // Adapte conforme necessário
          bio: `Altura: ${person.height} cm, Peso: ${person.mass} kg`, // Adapte conforme necessário
          image: `https://via.placeholder.com/150`, // Substitua por uma imagem real se a API fornecer
          genero:`${person.gender} `,
        }));
        setTeamMembers(apiData);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setTeamMembers([]);
      }
    };

    fetchTeamMembersFromAPI();
  }, []);

  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh">
        <Box bg="teal.500" color="white" py="20" textAlign="center">
          <Heading as="h1" fontSize="4xl" mb="4">
            Conheça Nossa Equipe de Talentos
          </Heading>
          <Text fontSize="xl">
            Conheça as mentes brilhantes por trás do sucesso da CACTUS
            Tecnologia da Informação.
          </Text>
        </Box>

        <Container maxW="container.xl" mt="8">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="8">
            {teamMembers.map((member, index) => (
              <Flex
                key={index}
                bg="white"
                p="6"
                boxShadow="md"
                borderRadius="md"
                flexDirection="column"
                alignItems="center"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  borderRadius="full"
                  boxSize="150px"
                  mb="4"
                  fallbackSrc="https://via.placeholder.com/150"
                />

                <Heading as="h2" fontSize="xl" color="teal.500" mb="2">
                  {member.name}
                </Heading>
                <Text fontSize="md" fontWeight="medium" color="gray.600" mb="2">
                  {member.position}
                </Text>
                <Text fontSize="sm" color="gray.500" textAlign="center">
                  {member.bio}
                </Text>
                <Link to={`/talentos/${encodeURIComponent(member.name)}`}>
                  <Button
                    colorScheme="gray"
                    variant="outline"
                    rounded="md"
                    size="lg"
                    height="2rem"
                    fontSize="1rem"
                  >
                    Details
                  </Button>
                </Link>
              </Flex>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default TalentosPage;
