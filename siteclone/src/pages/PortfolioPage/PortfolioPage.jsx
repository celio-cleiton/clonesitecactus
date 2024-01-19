import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Link,
  Button,
} from "@chakra-ui/react";

const projects = [
  {
    title: "Sistema de Gestão Empresarial",
    description:
      "Desenvolvimento de um sistema completo para gestão empresarial, incluindo módulos de finanças, recursos humanos e estoque.",
    image:
      "https://cdn.pixabay.com/photo/2016/08/02/18/27/statistic-1564428_1280.png",
    link: "/projeto-1",
  },
  {
    title: "Aplicativo Móvel",
    description:
      "Criação de um aplicativo móvel para rastreamento e gestão de entregas, proporcionando uma experiência simplificada para os usuários.",
    image: "https://cdn.pixabay.com/photo/2019/04/26/18/19/computer-4158213_1280.png",
    link: "/projeto-2",
  },
  {
    title: "Aplicativo Móvel de Entregas",
    description:
      "Criação de um aplicativo móvel para rastreamento e gestão de entregas, proporcionando uma experiência simplificada para os usuários.",
    image: "https://cdn.pixabay.com/photo/2017/12/28/10/53/image-3044893_1280.png",
    link: "/projeto-2",
  },
  // Adicione mais projetos conforme necessário
];

const PortfolioPage = () => {
  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh">
        <Box bg="teal.500" color="white" py="20" textAlign="center">
          <Heading as="h1" fontSize="4xl" mb="4">
            Explore Nosso Portfólio
          </Heading>
          <Text fontSize="xl">
            Confira alguns dos projetos incríveis que entregamos com sucesso.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8" p="8">
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="white"
              p="6"
              boxShadow="md"
              borderRadius="md"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="md"
                mb="4"
                boxSize="100px"
                objectFit="cover"
              />

              <Heading as="h2" fontSize="xl" color="teal.500" mb="2">
                {project.title}
              </Heading>
              <Text fontSize="md" mb="4">
                {project.description}
              </Text>

              <Flex justify="space-between" align="center">
                <Link href={project.link}>
                  <Button colorScheme="teal" variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </Link>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>

        {/* Adicione mais seções conforme necessário, como Estudos de Caso, Testemunhos, etc. */}
      </Box>
    </ChakraProvider>
  );
};

export default PortfolioPage;
