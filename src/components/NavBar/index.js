import { Box, Center, Flex, Image, Spacer, Stack } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillBellFill, BsFillCaretDownFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import netflix from '../../assets/image/netflix.png';

function NavBar(props) {
  const navRef = useRef(null);
  useEffect(() => {
    const shrinkNavBar = () => {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        navRef.current.setAttribute('style', 'background-color: #000');
      } else {
        navRef.current.setAttribute('style', 'background-color: transparent');
      }
    };
    window.addEventListener('scroll', shrinkNavBar);
    return () => {
      window.removeEventListener('scroll', shrinkNavBar);
    };
  }, []);
  return (
    <Flex
      ref={navRef}
      px={{
        base: '10px',
        md: '20px',
        lg: '48px',
      }}
      position="fixed"
      zIndex={2}
      top="0"
      left="0"
      right="0"
      h="68px"
      color="white"
      bgGradient="linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2))"
    >
      <Center>
        <Link to="/">
          <Image
            width="100px"
            objectFit="cover"
            src={netflix}
            alt="img netflix"
          />
        </Link>
      </Center>
      <Center
        ml="20px"
        fontSize="14px"
        _hover={{
          '.navmenu': {
            display: { base: 'block', lg: 'flex' },
          },
        }}
      >
        <Box
          display={{
            md: 'block',
            lg: 'none',
          }}
        >
          <Box display="flex" alignItems="center">
            <Box pr="10px">Duyệt tìm</Box>
            <BsFillCaretDownFill />
          </Box>
        </Box>
        <Stack
          className="navmenu"
          direction={{
            base: 'column',
            lg: 'row',
          }}
          display={{
            base: 'none',
            lg: 'flex',
          }}
          position={{
            base: 'absolute',
            lg: 'relative',
          }}
          top={{
            base: '68px',
            lg: '0%',
          }}
          bg={{
            base: 'rgba(0,0,0,0.6)',
            lg: 'rgba(0,0,0,0)',
          }}
          p={{
            base: '10px',
            lg: '0px',
          }}
        >
          <Box px="10px">Trang chủ</Box>
          <Box px="10px">Phim T.hình</Box>
          <Box px="10px">Phim</Box>
          <Box px="10px">Mới & Phổ biến</Box>
          <Box px="10px">Danh sách của tôi</Box>
        </Stack>
      </Center>

      <Spacer />

      <Center>
        <Box px="10px">
          <BiSearchAlt2 fontSize="20px" />
        </Box>
        <Box px="10px">
          <BsFillBellFill fontSize="20px" />
        </Box>
        <Box px="10px">
          <Image
            src="https://img1.kienthucvui.vn/uploads/2019/10/10/anh-chibi-naruto_110701874.jpg"
            alt="anh-avatar"
            boxSize="32px"
            borderRadius="4px"
          />
        </Box>
      </Center>
    </Flex>
  );
}

export default NavBar;
