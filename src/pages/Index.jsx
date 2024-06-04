import { Container, VStack, Heading, Text, Box, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to Movie Reviews
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest reviews and ratings for your favorite movies.
        </Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Reviews
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/movie-poster1.jpg" alt="Movie 1" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Movie Title 1
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/movie-poster2.jpg" alt="Movie 2" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Movie Title 2
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/movie-poster3.jpg" alt="Movie 3" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Movie Title 3
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;