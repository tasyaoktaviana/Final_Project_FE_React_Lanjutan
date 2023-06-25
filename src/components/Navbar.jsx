import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Link as CakraLink, Text } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box as="nav" py={4} bg='black' color='white'>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg">
          <Link data-testid="home-page" to="/">
            Student Portal
          </Link>
        </Heading>
        <Flex alignItems="center">
          <Text mx={2}>
            <CakraLink as={Link} to="/student" data-testid="student-page">
              All Students
            </CakraLink>
          </Text>
          <Text mx={2}>
            <CakraLink as={Link} to="/add" data-testid="add-page">
              Add Student
            </CakraLink>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
