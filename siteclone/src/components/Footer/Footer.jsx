import { Box, Heading, Flex, List, ListItem, Link, Text, Image } from '@chakra-ui/react';
import cactus from '../../assets/cactusicone.png'

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
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600" fontFamily={"sans-serif"}>
              Cactus Tecnologia da Informação
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkItem text="Careers" />
              <LinkItem text="News" />
              <LinkItem text="Policies" />
              <LinkItem text="Help" />
              <LinkItem text="Diversity & Belonging" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Discover
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Trust &amp; Safety" />
              <LinkItem text="Travel Credit" />
              <LinkItem text="Gift Cards" />
              <LinkItem text="Airbnb Citizen" />
              <LinkItem text="Business Travel" />
              <LinkItem text="Things To Do" isTag={true} tagText="New" />
              <LinkItem text="Airbnbmag" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Hosting
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Why Host" />
              <LinkItem text="Hospitality" />
              <LinkItem text="Responsible Hosting" />
              <LinkItem text="Community Center" />
              <LinkItem text="Host an Experience" isTag={true} tagText="New" />
              <LinkItem text="Open Homes" />
              <LinkItem text="Donations" isTag={true} tagText="New" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Flex justifyContent="start" mb="0.5rem" alignItems="baseline">
              <Link href="#" mr="0.5rem">
                <svg
                  style={{ width: '1rem', height: '1rem' }}
                  fill="#008F94"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Navigate to Facebook"
                  focusable="false"
                >
                  <path
                    d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="#" mr="0.5rem">
                <svg
                  style={{ width: '1rem', height: '1rem' }}
                  fill="#008F94"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Navigate to Twitter"
                  focusable="false"
                >
                  <path
                    d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="#" mr="0.5rem">
                <svg
                  style={{ width: '1rem', height: '1rem' }}
                  fill="#008F94"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Navigate to Instagram"
                  focusable="false"
                >
                  <path
                    d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z"
                    fillRule="evenodd"
                  ></path>
                </svg>
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
          style={{ width: '1.25rem', height: '1.25rem' }}
          viewBox="0 0 1000 1000"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          src={cactus} />
        <Text color="gray.600" fontSize="0.875rem" pl="0.5rem">
          &copy; 2005-2024 CACTUS Tecnologia da Informação LTDA. All rights reserved.
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
        _hover={{ color: 'green.600' }}
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