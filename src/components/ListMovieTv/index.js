import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useInfiniteQuery } from 'react-query';
import apiConfig from '../../api/apiConfig';
import tmdbApi, { tvType } from '../../api/tmdbApi';
import Movie from '../Movie';

const fetchData = async ({ pageParam = 1 }) => {
  const data = await tmdbApi.getTvList(tvType.popular, {
    params: {
      page: pageParam,
    },
  });
  return data;
};

export default function ListMovieTv() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    'getListTvPopular',
    fetchData,
    //

    {
      getNextPageParam: (lastPage, pages) => {
        // console.log({ lastPage, pages });
        const { page, total_pages } = lastPage;
        if (page < total_pages) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  // console.log(data);

  return (
    <Box
      bg="#141414"
      px={{
        base: 0,
        sm: 1,
        md: 2,
      }}
    >
      <Box
        color={'white'}
        fontSize={{
          md: 'xl',
          sm: 'xm',
          base: 'sm',
        }}
        fontWeight="bold"
        p={4}
      >
        Chương trình Tv
      </Box>
      {/* <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}> */}
      <SimpleGrid spacing={2} columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
        {data?.pages.map((list, index) => {
          return (
            <React.Fragment key={index}>
              {list.results.map(item => {
                if (item?.poster_path) {
                  return (
                    <Box w="100%" key={item.id}>
                      <Movie
                        url={apiConfig.originalImage(item.poster_path)}
                        category="tv"
                        movie={item}
                      />
                    </Box>
                  );
                } else {
                  <React.Fragment key={item.id}></React.Fragment>;
                }
              })}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
      {/* </InfiniteScroll> */}
      <Flex justify="center" mt={2} p={4}>
        <Button
          // style={{ color: 'white' }}
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Xem thêm'
            : ''}
        </Button>
      </Flex>
    </Box>
  );
}
