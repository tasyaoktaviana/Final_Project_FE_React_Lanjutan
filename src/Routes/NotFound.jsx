import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Heading as="h2" size="xl" mb={4}>
        404 - Page Not Found
      </Heading>
      <Text mb={4}>The page you are looking for does not exist.</Text>
      <Button colorScheme="blue" size="lg" onClick={handleGoBack}>
        Go Back
      </Button>
    </Box>
  );
};

export default NotFound;
