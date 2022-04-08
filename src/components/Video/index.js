import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import tmdbApi from '../../api/tmdbApi';

export default function Video({ category, id }) {
  //   console.log(category, id);
  const { data, isLoading, isError, error } = useQuery(
    ['getVideos', category, id],
    () => {
      return tmdbApi.getVideos(category, id);
    }
  );
  // console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Box>
      {data?.results.map(video => (
        <Box key={video.id}>
          <Box
            fontSize={{
              base: 'sm',
              md: 'xl',
            }}
            fontWeight="bold"
            py={4}
          >
            {video.type}
          </Box>
          <AspectRatio mb={3}>
            <iframe
              title="naruto"
              src={`https://www.youtube.com/embed/${video?.key}`}
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      ))}
    </Box>
  );
}
