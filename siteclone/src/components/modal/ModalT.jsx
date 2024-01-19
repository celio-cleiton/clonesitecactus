import { useState, useEffect } from 'react';
import axios from 'axios';
import { ChakraProvider, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { BASE_URL } from '../../constants/url';

/* eslint-disable react/prop-types */

const ModalPage = () => {
  const [characters, setCharacters] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Função para buscar dados da API ao carregar o componente
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setCharacters(response.data.characters);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    };

    fetchData();
  }, []);

  // Função para abrir o modal
  const openModal = () => {
    onOpen();
  };

  return (
    <ChakraProvider>
      <Box>
        <h1>Personagens de Star Wars</h1>
        <ul>
          {characters.map((character, index) => (
            <li key={index}>
              {character.name}{' '}
              <Button onClick={openModal}>Detalhes</Button>
              {/* Adicione um botão para abrir o modal para cada personagem */}
              <CharacterModal character={character} isOpen={isOpen} onClose={onClose} />
            </li>
          ))}
        </ul>
      </Box>
    </ChakraProvider>
  );
};

const CharacterModal = ({ character, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{character.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Altura: {character.height}</p>
          <p>Peso: {character.mass}</p>
          {/* Adicione mais informações conforme necessário */}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalPage;
