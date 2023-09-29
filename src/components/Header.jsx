import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, HStack, Link } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <HStack spacing={4}>
      <Link as={RouterLink} to="/" color="white">
        HOME
      </Link>
      <Link as={RouterLink} to="about" color="white">
        ABOUT
      </Link>
    </HStack>
  );
};

const Header = () => {
  return (
    <Box bg="black.500" p={4}>
      <HStack justifyContent="space-between">
        <Navigation />
      </HStack>
    </Box>
  );
};

export default Header;
