import { ChakraProvider, Box, Heading, Text, Button, Stack, Image } from '@chakra-ui/react';
import logo from '../../assets/cactusicone.png'

const SolutionsPage = () => {
    return (
        <ChakraProvider>
            <Box bg="gray.100" minH="100vh">
                <Box bg="teal.500" color="white" py="20" textAlign="center">
                    <Image src={logo} alt="CACTUS Logo" boxSize="100px" mx="auto" mb="4" />
                    <Heading as="h1" fontSize="3xl" mb="4">Soluções Inteligentes em Tecnologia da Informação</Heading>
                    <Text>Transformando ideias em inovação</Text>
                </Box>

                <Box maxW="800px" mx="auto" my="20" p="8" bg="white" boxShadow="lg" borderRadius="md">
                    <Heading as="h2" fontSize="xl" color="teal.500" mb="6">Nossas Soluções</Heading>

                    <Stack spacing="4">
                        <Box bg="teal.100" p="4" borderRadius="md">
                            <Heading as="h3" fontSize="lg" color="teal.500">Sistema de Informação</Heading>
                            <Text>Desenvolvimento de sistemas inteligentes para melhorar a eficiência dos negócios.</Text>
                        </Box>

                        <Box bg="teal.100" p="4" borderRadius="md">
                            <Heading as="h3" fontSize="lg" color="teal.500">Projetos Computacionais</Heading>
                            <Text>Projetos inovadores que impulsionam a tecnologia aplicada aos diversos setores da economia.</Text>
                        </Box>

                        <Box bg="teal.100" p="4" borderRadius="md">
                            <Heading as="h3" fontSize="lg" color="teal.500">Consultoria e Treinamento</Heading>
                            <Text>Oferecemos consultoria especializada e treinamento para capacitar sua equipe.</Text>
                        </Box>
                    </Stack>

                    <Button colorScheme="teal" size="lg" mt="8" onClick={() => window.location.href = "#contact"}>
                        Entre em Contato
                    </Button>
                </Box>

                {/* Adicione mais seções conforme necessário, como Estudos de Caso, Testemunhos, etc. */}
            </Box>
        </ChakraProvider>
    );
};

export default SolutionsPage;
