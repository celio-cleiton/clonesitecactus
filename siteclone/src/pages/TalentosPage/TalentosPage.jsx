import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Container,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Junior Silva",
    position: "Dev Full Stack",
    bio: "Com vasta experiência em desenvolvimento web, Junior é especialista em criar soluções robustas e escaláveis. Ele é apaixonado por tecnologia e está sempre buscando aprender algo novo.",
    image: "https://bit.ly/ryan-florence",
  },
  {
    name: "Kent Dodds",
    position: "Designer de UI/UX",
    bio: "Kent é uma designer criativo com um olho apurado para detalhes. Seu design centrado no usuário e suas habilidades excepcionais fazem dele uma peça-chave em nossos projetos de interface.",
    image: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Sage Adebayo",
    position: "Dev Back-End",
    bio: "Sage é uma Back-end criativo com um olho apurado para detalhes e segurança. Seus projetos centrado no banco de dados e suas habilidades excepcionais fazem dele uma peça-chave em nossos projetos de Back End.",
    image: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Oliveira Silva",
    position: "Dev Front End",
    bio: "Oliveira é um dev Front End bem criativo com um olho apurado para detalhes. Seu desenvolvimento sempre centrado na experiência do usuário e suas habilidades excepcionais fazem dele um peça-chave em nossos projetos de interface.",
    image: "https://bit.ly/dan-abramov",
  },
  // Adicione mais membros da equipe conforme necessário
];

const TalentosPage = () => {
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
                <Link to={`/talentos/${member.name}`}>
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

        {/* Adicione mais seções conforme necessário, como Testemunhos, Vagas Disponíveis, etc. */}
      </Box>
    </ChakraProvider>
  );
};

export default TalentosPage;
