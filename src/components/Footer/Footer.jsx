import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import cactus from "../../assets/cactusicone.png";
import { FaTiktok, FaFacebookF, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.300"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
    >
      <Box
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="gray.700"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
              fontFamily={"sans-serif"}
            >
              Cactus Tecnologia da Informação
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkItem text="Carreiras" />
              <LinkItem text="Novidades" />
              <LinkItem text="Política de privacidade" />
              <LinkItem text="Acessibilidade" />
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="gray.700"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Para seu negócio
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Cloud Computing" />
              <LinkItem text="Crie seu blog" />
              <LinkItem text="Crie seu site" />
              <LinkItem text="Crie sua loja virtual" />
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="gray.700"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Atendimento
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Ajuda" />
              <LinkItem text="comunidade" />
              <LinkItem text="Perguntas frequentes" />
              <LinkItem text="Fale conosco" />
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Flex justifyContent="start" mb="0.5rem" alignItems="baseline">
            <Link href="#" mr="0.5rem" aria-label="Navigate to TikTok">
            <FaTiktok />
              </Link>
              <Link href="#" mr="0.5rem">
              <FaFacebookF />
              </Link>
              <Link href="#" mr="0.5rem">
              <BsTwitterX />
              </Link>
              <Link href="#" mr="0.5rem">
              <FaInstagram />
              </Link>
              <Link href="#" mr="0.5rem">
              <FaYoutube />
              </Link>
              <Link href="#" mr="0.5rem">
              <FaDiscord />
              </Link>
            </Flex>
            <List lineHeight="2">
              <LinkItem text="Terms" />
              <LinkItem text="Privacy" />
              <LinkItem text="Site Map" />
            </List>
          </Box>
        </Flex>
      </Box>
      <Flex maxW="64rem" mx="auto" alignItems="center" px={10}>
        <Image
          style={{ width: "1.25rem", height: "1.25rem" }}
          viewBox="0 0 1000 1000"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          src={cactus}
        />
        <Text color="gray.600" fontSize="0.875rem" pl="0.5rem">
          &copy; 2005-2024 CACTUS Tecnologia da Informação LTDA. All rights
          reserved.
        </Text>
      </Flex>
    </Box>
  );
};

// eslint-disable-next-line react/prop-types
const LinkItem = ({ text, isTag = false, tagText }) => {
  return (
    <ListItem display="flex">
      <Link
        fontWeight="600"
        href="#"
        color="rgba(113, 128, 150, 1)"
        _hover={{ color: "green.600" }}
      >
        {text}
      </Link>
      {isTag && (
        <Text
          as="span"
          bg="#008F94"
          px="0.25rem"
          display="inline-flex"
          alignItems="center"
          color="#fff"
          height="1.25rem"
          borderRadius="0.25rem"
          ml="0.25rem"
          mt="0.25rem"
          fontSize="0.75rem"
        >
          {tagText}
        </Text>
      )}
    </ListItem>
  );
};

export default Footer;
