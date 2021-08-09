import { useEffect, useState } from 'react';
import * as Styled from './styles';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Icons from '../../components/Icons';
import MovieThumb from '../../components/MovieThumb';
import { STATES } from '../../constants';
import { moviesAPI } from '../../api';

export default function Home() {
  const [loader, setLoader] = useState(STATES.LOADING);
  const [startRender, setStartRender] = useState(false);

  const [popularMovies, setPopularMovies] = useState([]);
  const [myMovies, setMyMovies] = useState(false);
  const [nowPlaying, setNowPlaying] = useState({});
  const [loadingMovies, setLoadingMovies] = useState(false);

  const dropOpts = ['POPULARES', 'MIS PELICULAS'];

  function loadImgs(imgs) {
    return imgs.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();

          img.src = src;
          img.addEventListener('load', () => {
            resolve();
          });
        })
    );
  }

  async function loadMyMovies() {
    try {
      setLoadingMovies(true);
      const data = await moviesAPI.getMyMovies();
      const imgsOnly = data.map((movie) => movie.img);
      await Promise.all(loadImgs(imgsOnly));
      setMyMovies(data);
    } catch (e) {
    } finally {
      setLoadingMovies(false);
    }
  }

  function handleDropdown(val) {
    if (dropOpts[val] === 'MIS PELICULAS') {
      loadMyMovies();
    } else {
      setLoadingMovies(true);
      setTimeout(() => {
        setMyMovies(false);
        setLoadingMovies(false);
      }, 500);
    }
  }

  useEffect(() => {
    async function firstLoad() {
      try {
        const data = await moviesAPI.getPopularMovies();

        const imgsOnly = [
          ...data.populars.map((movie) => movie.img),
          data.nowPlaying.img,
        ];
        await Promise.all(loadImgs(imgsOnly));

        setPopularMovies(data.populars);
        setNowPlaying(data.nowPlaying);
        setLoader(STATES.LOADED);

        setTimeout(() => {
          setStartRender(true);
        }, 1000);
      } catch (e) {
        /* would add some fancy UI to catch errors */
      }
    }
    firstLoad();
  }, []);

  return (
    <Styled.Background loaded={startRender}>
      {!startRender ? (
        <Logo animation={loader} />
      ) : (
        <>
          <Styled.BgImg img={nowPlaying.img}>
            <div />
          </Styled.BgImg>

          <Header />

          <Styled.Gradient />

          <Styled.HomePage>
            <Styled.MovieInfo>
              <Styled.Source>
                Original de <b>Liteflix</b>
              </Styled.Source>
              <Styled.Title>
                <span>{nowPlaying.title}</span>
              </Styled.Title>
              <Styled.Options>
                <Button>
                  <Icons icon="play" />
                  REPRODUCIR
                </Button>
                <Button secondary>
                  <Icons icon="plus" />
                  MI LISTA
                </Button>
              </Styled.Options>
            </Styled.MovieInfo>

            <Styled.MovieList>
              <Styled.Dropdown>
                <Dropdown
                  label="VER"
                  options={dropOpts}
                  onChange={handleDropdown}
                />
              </Styled.Dropdown>
              <Styled.List className={loadingMovies ? 'loading' : 'loaded'}>
                {!myMovies
                  ? popularMovies.map(({ title, img, score, year }) => (
                      <MovieThumb
                        title={title}
                        img={img}
                        score={score}
                        year={year}
                        key={title}
                      />
                    ))
                  : myMovies.map(({ title, img, score, year }) => (
                      <MovieThumb
                        title={title}
                        img={img}
                        score={score}
                        year={year}
                        key={title}
                      />
                    ))}
              </Styled.List>
            </Styled.MovieList>
          </Styled.HomePage>
        </>
      )}
    </Styled.Background>
  );
}
