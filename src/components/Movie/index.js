import { Box, Center, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Movie({ url, movie, category = '' }) {
  // console.log(category);
  return (
    <Box
      w={'100%'}
      _hover={{
        cursor: 'pointer',
        '& .bg-image': {
          opacity: 1,
        },
      }}
      position="relative"
    >
      <Image src={url} borderRadius={8} w={'100%'} />
      <Flex
        position="absolute"
        justify="center"
        bgGradient="linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))"
        top={'0'}
        left={'0'}
        right={'0'}
        bottom={'0'}
        // display="none"
        opacity={0}
        className="bg-image"
        transition="all 0.3s ease-in-out"
      >
        <Center color="white">
          <Box
            _hover={{
              color: 'red',
            }}
          >
            <Link to={`/${category}/${movie.id}`}>
              <BsPlayCircle
                className="iconPlay"
                style={{
                  fontSize: '3rem',
                }}
              />
            </Link>
          </Box>
        </Center>
      </Flex>
    </Box>
  );
}
