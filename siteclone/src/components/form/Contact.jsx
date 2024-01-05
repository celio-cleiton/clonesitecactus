import { Fragment } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BiWorld } from "react-icons/bi";

const contactOptions = [
  {
    label: 'Rua:',
    value: 'Dr. João Marcelino, 142 Nova Betânia - Mossoró/RN',
    icon: GoLocation
  },
  {
    label: 'Contato',
    value: '+55 (84) 3316-3335',
    icon: BsPhone
  },
  {
    label: 'EMAIL',
    value: 'contato@cactustecnologia.com',
    icon: HiOutlineMail
  },
  {
    label: 'Site',
    value: 'www.cactustecnologia.com',
    icon: BiWorld
  }
];

const Contact = () => {
  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justifyContent="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
          Converse conosco.
          </Heading>
          <Text fontSize="md" textAlign="center">
          para uma comunicação mais acessível e direta.
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                px={3}
              >
                <Icon as={option.icon} w={10} h={10} color="green.400" />
                <Text fontSize="lg" fontWeight="semibold">
                  {option.label}
                </Text>
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel>Nome</FormLabel>
                <Input type="text" placeholder="Ahmad" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="test@test.com" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Assunto</FormLabel>
              <Input type="text" placeholder="Are you available for freelance work?" rounded="md" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Mensagem</FormLabel>
              <Textarea size="lg" placeholder="Escreva sua mensagem aqui." rounded="md" />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="green.300"
              color="white"
              _hover={{
                bg: 'green.500'
              }}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
            >
              Enviar Mensagem
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Contact;