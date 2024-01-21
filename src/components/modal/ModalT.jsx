/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

const CharacterModal = ({ character, isOpen, onClose }) => {
  if (!character) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{character.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={character.image}
            alt={character.name}
            borderRadius="full"
            boxSize="150px"
            mb="4"
            fallbackSrc="https://via.placeholder.com/150"
          />
          <Text fontSize="md" fontWeight="medium" color="gray.600" mb="2">
            Cargo: {character.position}
          </Text>
          <Text fontSize="md" fontWeight="medium" color="gray.600" mb="2">
            Altura: {character.height} cm
          </Text>
          <Text fontSize="md" fontWeight="medium" color="gray.600" mb="2">
            Peso: {character.mass} kg
          </Text>
          <Text fontSize="md" fontWeight="medium" color="gray.600" mb="2">
            Gênero: {character.genero}
          </Text>
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

export default CharacterModal;
