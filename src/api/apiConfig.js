const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3',
  apiKey: 'b29ee0691fb56e6589c7a8ab26e23b57',
  originalImage: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: imgPath => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
