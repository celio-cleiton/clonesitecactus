import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  Image,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../../assets/logo.png';

// Links de navegação na barra
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Quem Somos', path: 'quemSomos' },
  { name: 'Soluções', path: 'solucoes' },
  { name: 'Portfolio', path: 'portfolio' },
  { name: 'Talentos', path: '/talentos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/contato' },
];

const Navbar = () => {
  // useDisclosure hook para controlar o estado do menu.
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Propriedades de estilo para o menu.
  const menuProps = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200'),
  };

  return (
    <Box px={4} boxShadow="lg" width="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW={950} mx="auto">
        {/* Botão para abrir o menu em telas menores */}
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={['inherit', 'inherit', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />
        {/* Logotipo da empresa */}
        <HStack spacing={8} alignItems="center">
          <Link href="/">
            <Image alt="Logo da Empresa" size="sm" height="50" borderColor="blue.400" src={Logo} />
          </Link>
        </HStack>
        {/* Links de navegação na barra */}
        <HStack as="nav" spacing={1} display={{ base: 'none', md: 'flex' }} alignItems="center" fontWeight="600">
          {navLinks.map((link, index) => (
            <NavLink key={index} {...link} onClose={onClose} />
          ))}
        </HStack>
      </Flex>
      {/* Links para telas menores */}
      {isOpen && (
        <Box pb={4} display={['inherit', 'inherit', 'none']}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

// Componente de link para navegação
const NavLink = ({ name, path, onClose }) => {
  // Propriedades de estilo para o link
  const linkProps = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200'),
  };

  return (
    <Link
      href={path}
      px={3}
      py={1}
      lineHeight="inherit"
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: linkProps.bg,
        color: linkProps.color,
      }}
      onClick={onClose}
    >
      {name}
    </Link>
  );
};

export default Navbar;
