import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { useQuery } from 'react-query';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '../../api/apiConfig';

function Header({ getData, keyQuery }) {
  const { data, isLoading, isError, error } = useQuery(keyQuery, () => {
    return getData();
  });

  //   console.log(data?.results);
  SwiperCore.use([Autoplay]);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <Swiper
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      slidesPerView={1}
    >
      {data?.results.map(item => {
        return (
          <SwiperSlide
            key={item?.id}
            sryle={{
              width: '100%',
            }}
            position="relative"
          >
            {({ isActive }) => (
              <>
                <Image
                  src={apiConfig.originalImage(item.backdrop_path)}
                  w={'100%'}
                  //   h={'60%'}
                  objectFit="cover"
                  position="relative"
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  bgGradient="linear-gradient(rgba(0,0,0,0.4), rgba(20,20,20,1))"
                ></Box>
                <Flex position="absolute" bottom={10} left={10}>
                  <Flex flexDir="column-reverse">
                    <Box mt={3}>
                      <Button
                        fontSize={'1rem'}
                        aria-label="play"
                        leftIcon={<BsFillPlayFill fontSize={'2rem'} />}
                        mr={2}
                      >
                        Phát
                      </Button>
                      <Button
                        bg={'gray.600'}
                        color={'white'}
                        fontSize={'1rem'}
                        aria-label="info"
                        leftIcon={<AiOutlineInfoCircle fontSize={'2rem'} />}
                        _hover={{}}
                        _active={{}}
                      >
                        Thông tin khác
                      </Button>
                    </Box>
                    <Text
                      transform={
                        isActive ? 'translateY(0%)' : 'translateY(-40%)'
                      }
                      transition={'transform 1s'}
                      mt={10}
                      mb={4}
                      mr={6}
                      color="white"
                      fontSize={'1rem'}
                      display={{
                        base: 'none',
                        md: 'block',
                      }}
                    >
                      {item.overview}
                    </Text>
                    <Heading
                      transform={
                        isActive ? 'translateY(0%)' : 'translateY(-100%)'
                      }
                      transition={'transform 1s'}
                      color="white"
                      display={{
                        base: 'none',
                        md: 'block',
                      }}
                    >
                      {item.title}
                    </Heading>
                  </Flex>
                  <Spacer />
                  <Image
                    transform={isActive ? 'translateY(0%)' : 'translateY(-40%)'}
                    transition={'transform 1s'}
                    borderRadius={20}
                    display={{
                      base: 'none',
                      md: 'block',
                    }}
                    src={apiConfig.originalImage(item.poster_path)}
                    w={'30%'}
                    mr={20}
                  />
                </Flex>
              </>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Header;
