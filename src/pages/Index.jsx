import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, HStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";

const MovieCard = ({ title, description, imageSrc }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageSrc} alt={title} />
      <Box p={6}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>{description}</Text>
        <HStack spacing={1}>
          {[1, 2, 3, 4, 5].map((star) => (
            <IconButton
              key={star}
              icon={<StarIcon />}
              colorScheme={star <= rating ? "yellow" : "gray"}
              variant="ghost"
              onClick={() => handleRating(star)}
              aria-label={`${star} stars`}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

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
            <MovieCard
              title="Movie Title 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
              imageSrc="/path/to/movie-poster1.jpg"
            />
            <MovieCard
              title="Movie Title 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
              imageSrc="/path/to/movie-poster2.jpg"
            />
            <MovieCard
              title="Movie Title 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
              imageSrc="/path/to/movie-poster3.jpg"
            />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;