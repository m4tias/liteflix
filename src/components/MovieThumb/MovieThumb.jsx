import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useOnScreen } from '../../hooks';
import Icons from '../Icons';
import * as Styled from './styles';

export default function MovieThumb({ title, img, score, year }) {
  const movieRef = useRef();
  const isVisible = useOnScreen(movieRef, '10px');

  return (
    <Styled.Container
      ref={movieRef}
      visible={isVisible}
      className="movie-container"
      role="button"
    >
      <Styled.BgImg img={img}>
        <Styled.OpacityHover />
      </Styled.BgImg>
      <Styled.Gradient />
      <Styled.Ellipse>
        <Icons icon="play-movie" />
      </Styled.Ellipse>
      <Styled.Title>{title}</Styled.Title>
      <Styled.ScoreAndYear>
        <div>
          <Icons icon="star" />
          <div>{score}</div>
        </div>
        <div>{year}</div>
      </Styled.ScoreAndYear>
    </Styled.Container>
  );
}

MovieThumb.defaultProps = {
  score: 'n/a',
  year: 'n/a',
};

MovieThumb.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
