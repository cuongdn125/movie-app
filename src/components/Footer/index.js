import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const BoxTextStyled = styled(Box)`
  padding-bottom: 5px;
  padding-top: 5px;
`;

function Footer() {
  return (
    <Box
      bg="#141414"
      pt={20}
      pb={10}
      px={{
        base: 4,
        md: 15,
        lg: 20,
      }}
      color="#808080"
      fontSize="sm"
    >
      <SimpleGrid columns={2} spacing={10}>
        <Box
          w={'100%'}
          display={{
            base: 'block',
            md: 'flex',
          }}
        >
          <Box
            w={{
              base: '50%',
              md: '100%',
            }}
            mb={10}
            minH={230}
          >
            <BoxTextStyled>Âm thanh và phụ đề</BoxTextStyled>
            <BoxTextStyled>Trung tâm đa phương tiện</BoxTextStyled>
            <BoxTextStyled>Quyền riêng tư</BoxTextStyled>
            <BoxTextStyled>Liên hệ với chúng tôi</BoxTextStyled>
          </Box>
          <Box
            w={{
              base: '50%',
              md: '100%',
            }}
            minH={230}
          >
            <BoxTextStyled>Mô tả âm thanh</BoxTextStyled>
            <BoxTextStyled>Quan hệ với nhà đầu tư</BoxTextStyled>
            <BoxTextStyled>Thông báo pháp lý</BoxTextStyled>
          </Box>
        </Box>
        <Box
          w={'100%'}
          display={{
            base: 'block',
            md: 'flex',
          }}
        >
          <Box
            w={{
              base: '50%',
              md: '100%',
            }}
            mb={10}
            minH={230}
          >
            <BoxTextStyled>Trung tâm trợ giúp</BoxTextStyled>
            <BoxTextStyled>Việc làm</BoxTextStyled>
            <BoxTextStyled>Tuỳ chọn cookie</BoxTextStyled>
          </Box>
          <Box
            w={{
              base: '50%',
              md: '100%',
            }}
            minH={230}
          >
            <BoxTextStyled>Thẻ quà tặng</BoxTextStyled>
            <BoxTextStyled>Điều khoản sử dụng</BoxTextStyled>
            <BoxTextStyled>Thông tin doanh nghiệp</BoxTextStyled>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Footer;
