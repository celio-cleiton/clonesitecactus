import { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Container,
  Button,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CharacterModal from "../../components/modal/ModalT";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

const TalentosPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchTeamMembersFromAPI = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const apiData = response.data.results.map((person) => ({
          name: person.name,
          position: "Desconhecido",
          height: person.height,
          mass: person.mass,
          image: `https://via.placeholder.com/150`,
          genero: person.gender,
        }));
        setTeamMembers(apiData);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        setTeamMembers([]);
        // Adicione aqui o feedback ao usuário
      }
    };

    fetchTeamMembersFromAPI();
  }, []);

  const openModal = (member) => {
    setSelectedMember(member);
    onOpen();
  };

  const closeModal = () => {
    setSelectedMember(null);
    onClose();
  };

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
            {teamMembers.map((member) => {
              const { name } = member;
              return (
                <Flex
                  key={name}
                  bg="white"
                  p="6"
                  boxShadow="md"
                  borderRadius="md"
                  flexDirection="column"
                  alignItems="center"
                  transition="transform 0.3s"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    color="gray.600"
                    mb="2"
                  >
                    Nome: {member.name}
                  </Text>
                  <Image
                    src={member.image}
                    alt={member.name}
                    borderRadius="full"
                    boxSize="150px"
                    mb="4"
                    fallbackSrc="https://via.placeholder.com/150"
                  />
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    color="gray.600"
                    mb="2"
                  >
                    Altura: {member.height} cm
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    color="gray.600"
                    mb="2"
                  >
                    Peso: {member.mass} kg
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    color="gray.600"
                    mb="2"
                  >
                    Gênero: {member.genero}
                  </Text>
                  <Link onClick={() => openModal(member)}>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      rounded="md"
                      size="lg"
                      height="2rem"
                      fontSize="1rem"
                    >
                      Detalhes
                    </Button>
                  </Link>
                  <CharacterModal
                    character={selectedMember}
                    isOpen={isOpen}
                    onClose={closeModal}
                  />
                </Flex>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default TalentosPage;
