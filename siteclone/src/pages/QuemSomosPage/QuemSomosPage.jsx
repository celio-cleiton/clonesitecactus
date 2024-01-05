import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import imagemSomos from "../../assets/quemSomos.jpg";

const QuemSomos = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center">
          <chakra.h1
            fontSize="4xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            Quem Somos
          </chakra.h1>
          <Box>
            <Content>
              A CACTUS TECNOLOGIA DA INFORMAÇÃO é pioneira no desenvolvimento de
              soluções inteligentes, destacando-se nas áreas de Sistemas de
              Informação, Projetos Computacionais, Consultoria e Treinamento.
              Com uma expertise consolidada, nossa empresa é líder na aplicação
              de conhecimento e tecnologia em diversos setores da economia.
              <br />
              Destacamos-nos pela criação de softwares de alta disponibilidade,
              focados em impulsionar a conectividade tanto na Internet quanto em
              Intranets. Seja para otimizar processos ou inovar em sua abordagem
              digital, a CACTUS está comprometida em superar expectativas e
              levar a sua empresa a novos patamares de excelência tecnológica.
            </Content>
            <Content mt={4}>
              Localizada em Mossoró, no interior do Estado do Rio Grande do
              Norte, a nossa empresa se destaca como pioneira no desenvolvimento
              de Software Livre na região. Estamos comprometidos em impulsionar
              a inovação e a liberdade tecnológica, trazendo soluções que
              transcendem barreiras e colocam a sua empresa na vanguarda do
              cenário digital.
            </Content>
            <Content mt={4}>
              Atendemos uma ampla gama de clientes, desde pequenas e médias
              empresas até grandes corporações no Estado do Rio Grande do Norte,
              que buscam soluções inovadoras em desenvolvimento de software.
              Dentre os nossos notáveis clientes, destacam-se projetos
              realizados em parceria com a Prefeitura Municipal de Mossoró,
              PETROBRAS, Faculdade Mater Christi, Jornal O Mossoroense, Jornal
              Plural, Rádio 93 FM, Engelétrica Engenharia, Rede10 Card, entre
              outros. Acreditamos que o sucesso dos nossos clientes é a nossa
              maior conquista.
            </Content>
            <br />
            <Content>
              <chakra.h1
                fontSize="2xl"
                lineHeight={1}
                fontWeight="bold"
                textAlign="left"
              >
                Visão
              </chakra.h1>
              A CACTUS Tecnologia da Informação pretende ser a empresa
              referencia no estado, na área de desenvolvimento de software
              voltado para WEB e de soluções computacionais livres.
              <br />
              <Content mt={4}>
                <chakra.h1
                  fontSize="2xl"
                  lineHeight={1}
                  fontWeight="bold"
                  textAlign="left"
                >
                  Missão
                </chakra.h1>
                Fomentar um ambiente interativo através da promoção Tecnológica
                e do Desenvolvimento de Soluções Inteligentes.
              </Content>
              <br />
              <chakra.h1
                fontSize="2xl"
                lineHeight={1}
                fontWeight="bold"
                textAlign="left"
              >
                Metodologia
              </chakra.h1>
              Nosso processo de trabalho é rigoroso e sistemático, e visa a
              obtenção de resultados no mais curto espaço de tempo e com os
              menores custos possíveis, sem sacrificar os padrões de qualidade
              que nos comprometemos a assegurar.
            </Content>
          </Box>
        </Stack>
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

export default QuemSomos;
