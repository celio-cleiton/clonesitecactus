import { chakra, Container, Stack, Text, useColorModeValue, Image, Skeleton, Box } from "@chakra-ui/react";
import imagemSomos from "../../assets/quemSomos.jpg";

// Componente QuemSomos
const QuemSomos = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center">
          <Heading1>Quem Somos</Heading1>
          <Box>
            {/* Conteúdo */}
            {contents.map((content, index) => (
              <Content key={index}>{content}</Content>
            ))}
          </Box>
        </Stack>
        <ImageBox />
      </Stack>
    </Container>
  );
};

// Componente Content
const Content = ({ children, ...props }) => {
  return (
    <Text fontSize="md" textAlign="left" lineHeight="1.375" fontWeight="400" color="gray.500" {...props}>
      {children}
    </Text>
  );
};

// Componente Heading1
const Heading1 = (props) => {
  return (
    <chakra.h1 fontSize="4xl" lineHeight={1} fontWeight="bold" textAlign="left" {...props}>
      {props.children}
    </chakra.h1>
  );
};

// Componente ImageBox
const ImageBox = () => {
  return (
    <Box mr={{ base: 0, md: 5 }} pos="relative">
      <DottedBox />
      <Image
        boxShadow="lg"
        w="100%"
        h="100%"
        minW={{ base: "auto", md: "30rem" }}
        maxH="20rem"
        objectFit="cover"
        src={imagemSomos}
        rounded="md"
        fallback={<Skeleton />}
      />
    </Box>
  );
};

// Componente DottedBox
const DottedBox = () => {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
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
};

// Conteúdo do QuemSomos
const contents = [
  "A CACTUS TECNOLOGIA DA INFORMAÇÃO é pioneira no desenvolvimento de soluções inteligentes, destacando-se nas áreas de Sistemas de Informação, Projetos Computacionais, Consultoria e Treinamento. Com uma expertise consolidada, nossa empresa é líder na aplicação de conhecimento e tecnologia em diversos setores da economia.",
  "Localizada em Mossoró, no interior do Estado do Rio Grande do Norte, a nossa empresa se destaca como pioneira no desenvolvimento de Software Livre na região. Estamos comprometidos em impulsionar a inovação e a liberdade tecnológica, trazendo soluções que transcendem barreiras e colocam a sua empresa na vanguarda do cenário digital.",
  "Atendemos uma ampla gama de clientes, desde pequenas e médias empresas até grandes corporações no Estado do Rio Grande do Norte, que buscam soluções inovadoras em desenvolvimento de software. Dentre os nossos notáveis clientes, destacam-se projetos realizados em parceria com a Prefeitura Municipal de Mossoró, PETROBRAS, Faculdade Mater Christi, Jornal O Mossoroense, Jornal Plural, Rádio 93 FM, Engelétrica Engenharia, Rede10 Card, entre outros. Acreditamos que o sucesso dos nossos clientes é a nossa maior conquista.",
  //... Outros conteúdos
];

export default QuemSomos;
