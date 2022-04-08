import { Box } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '../../api/apiConfig';
import tmdbApi, { tvType } from '../../api/tmdbApi';
import Movie from '../Movie';

function Tv() {
  const { data, isLoading, isError, error } = useQuery(
    ['getListTv', tvType.popular],
    () => {
      return tmdbApi.getTvList(tvType.popular, {
        params: {
          page: 1,
        },
      });
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Box
      // h={500}
      position="relative"
      bg="#141414"
      // px={8}
    >
      <Box>
        <Box
          position="absolute"
          top={-6}
          zIndex={3}
          color="#E5E5E5"
          fontSize="12px"
          fontWeight="bold"
          left={6}
        >
          Chương trình truyền hình kịch tính
        </Box>
        <Link to="/tv">
          <Box
            position="absolute"
            top={-6}
            zIndex={3}
            color="#E5E5E5"
            fontSize="12px"
            fontWeight="bold"
            right={6}
          >
            Xem thêm
          </Box>
        </Link>

        <Swiper
          spaceBetween={8}
          breakpoints={{
            100: {
              width: 100,
              slidesPerView: 2,
            },
            350: {
              width: 350,
              slidesPerView: 3,
            },
            640: {
              width: 640,
              slidesPerView: 4,
            },
            800: {
              width: 800,
              slidesPerView: 5,
            },
            1100: {
              width: 1100,
              slidesPerView: 6,
            },
            1400: {
              width: 1400,
              slidesPerView: 7,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.results.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <Movie
                  url={apiConfig.originalImage(item.poster_path)}
                  category={'tv'}
                  movie={item}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Tv;
