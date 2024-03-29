import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
} from "@chakra-ui/react";
import HomeI from '../../assets/homeImagem.jpg';

const home = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Box mr={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            boxShadow="lg"
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "25rem" }}
            maxH="20rem"
            src={HomeI}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center">
          <chakra.h1
            fontSize="4xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            Soluções Tecnológicas para a Liberdade
          </chakra.h1>
          <Box>
            <Content>
              A CACTUS Tecnologia da Informação está comprometida com a
              liberdade, acreditando que ela deve ser acessível a qualquer
              momento e em qualquer lugar. Nesse contexto, oferecemos soluções
              tecnológicas inovadoras que verdadeiramente impulsionam resultados
              tanto nas corporações quanto na vida das pessoas.
            </Content>
            <Content mt={4}>
              Maximize Seu Potencial Tecnológico! Agende Já uma Consulta com
              Nossos Analistas e Desvende as Soluções Tecnológicas Mais
              Inovadoras do Mercado. Estamos Comprometidos em Elevar o
              Desempenho da Sua Empresa, Tornando-a Altamente Organizada,
              Produtiva e Destacada na Competição Empresarial. Não Deixe para
              Depois, Transforme Agora!
            </Content>
          </Box>
          <Link href="#" fontSize="sm" color="blue.400">
            Cactus Tecnologia da Informação acredita na liberdade →
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

// eslint-disable-next-line react/prop-types
const Content = ({ children, ...props }) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default home;
