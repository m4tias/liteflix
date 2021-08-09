import instance from './instance';

export const getPopularMovies = () =>
  instance.req({ method: 'GET', url: 'movies/popular' });

export const getMyMovies = () =>
  instance.req({ method: 'GET', url: 'movies/my-movies' });

export const postMovie = (data) =>
  instance.req({ method: 'POST', url: 'movies/movie', data });

export const postMovieImg = (data, onUploadProgress = () => {}) => {
  const form = new FormData();
  form.append('img_file', data);
  return instance.req({
    method: 'POST',
    url: 'movies/upload-img',
    data: form,
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress,
  });
};
