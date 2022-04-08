import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';
import Video from '../Video';

export default function DetailMovie() {
  const { category, id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ['getMovie', category, id],
    () => {
      return tmdbApi.detail(category, id, {
        params: {
          page: 1,
        },
      });
    }
  );

  // console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <Box w={'100%'} bg="#141414" color="white">
      <Box w={'100%'} position="relative">
        <Image
          src={apiConfig.originalImage(data?.backdrop_path)}
          w={'100%'}
          objectFit="cover"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          bgGradient="linear-gradient(rgba(0,0,0,0.4), rgba(20,20,20,1))"
        ></Box>
        <Flex
          position="absolute"
          top="65px"
          left="0"
          right="0"
          bottom="0"
          p={{
            base: 3,
            md: 5,
            lg: 10,
          }}
        >
          <Image
            // transform={isActive ? 'translateY(0%)' : 'translateY(-40%)'}
            transition={'transform 1s'}
            borderRadius={20}
            display={{
              base: 'none',
              md: 'block',
            }}
            src={apiConfig.originalImage(data?.poster_path)}
            h={'100%'}
            objectFit="cover"
            mr={20}
          />
          <Flex
            display="flex"
            justify="center"
            flexDirection="column"
            color="white"
            maxW={{
              base: '100%',
              lg: '50%',
            }}
            pr={4}
          >
            <Box
              pl={{
                base: 1,
                sm: 10,
                md: 0,
              }}
            >
              <Box
                fontSize={{
                  base: 'xl',
                  md: '5xl',
                  lg: '6xl',
                }}
                fontWeight="bold"
                mb={{
                  base: 2,
                  sm: 4,
                }}
              >
                {data?.name}
              </Box>
              <Box>
                {data?.genres.map(genre => (
                  <Box
                    display="inline-block"
                    fontSize={{
                      base: '0.5rem',
                      sm: '0.8rem',
                      md: 'sx',
                    }}
                    fontWeight="bold"
                    key={genre.id}
                    borderRadius={20}
                    border="1.5px solid white"
                    mr={2}
                    p={1}
                    mb={2}
                    cursor="pointer"
                    _hover={{
                      backgroundColor: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {genre.name}
                  </Box>
                ))}
              </Box>
              <Box
                fontSize={{
                  base: '0.8rem',
                  md: 'sm',
                }}
                mb={4}
                maxH={{
                  sm: '100px',
                  md: '120px',
                }}
                display={{
                  base: 'none',
                  sm: 'block',
                }}
                textOverflow="ellipsis"
                wordwrap="break-word"
                overflow="hidden"
                lineHeight="1.5"
              >
                {data?.overview}
              </Box>
              <Box
                display={{
                  base: 'none',
                  lg: 'block',
                }}
              >
                <Box
                  fontSize="2xl"
                  fontWeight="bold"
                  mb={1}
                  display={
                    data?.created_by && data?.created_by.length > 0
                      ? 'block'
                      : 'none'
                  }
                >
                  Cats
                </Box>
                <Flex>
                  {data?.created_by &&
                    data?.created_by.map(creator => (
                      <Box mr={2} key={creator.id}>
                        <Image
                          src={apiConfig.originalImage(creator.profile_path)}
                          h={'200px'}
                          objectFit="cover"
                          borderRadius={8}
                        />
                        <Box>{creator.name}</Box>
                      </Box>
                    ))}
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box
        px={{
          base: 3,
          md: 5,
        }}
        display={{
          base: 'block',
          lg: 'none',
        }}
      >
        <Box
          display={
            data?.created_by && data?.created_by.length > 0 ? 'block' : 'none'
          }
          fontSize="2xl"
          fontWeight="bold"
          mb={1}
        >
          Casts
        </Box>
        <Flex>
          {data?.created_by &&
            data?.created_by.map(creator => (
              <Box mr={2} key={creator?.id}>
                <Image
                  src={apiConfig.originalImage(creator?.profile_path)}
                  h={'200px'}
                  objectFit="cover"
                  borderRadius={8}
                />
                <Box>{creator.name}</Box>
              </Box>
            ))}
        </Flex>
      </Box>
      <Box
        px={{
          base: 3,
          md: 10,
          lg: 20,
        }}
      >
        <Video category={category} id={id} />
      </Box>
    </Box>
  );
}
