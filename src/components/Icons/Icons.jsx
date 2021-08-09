import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Bell } from '../../assets/bell.svg';
import { ReactComponent as Clip } from '../../assets/clip.svg';
import { ReactComponent as Play } from '../../assets/play.svg';
import { ReactComponent as PlayMovie } from '../../assets/playMovie.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Selected } from '../../assets/selected.svg';
import { ReactComponent as Star } from '../../assets/star.svg';

export default function Icons({ icon }) {
  switch (icon) {
    case 'arrow':
      return <Arrow />;
    case 'bell':
      return <Bell />;
    case 'clip':
      return <Clip />;
    case 'play':
      return <Play />;
    case 'play-movie':
      return <PlayMovie />;
    case 'plus':
      return <Plus />;
    case 'selected':
      return <Selected />;
    case 'star':
      return <Star />;
    default:
      return <></>;
  }
}

Icons.propTypes = {
  icon: PropTypes.oneOf([
    'arrow',
    'bell',
    'clip',
    'play',
    'play-movie',
    'plus',
    'selected',
    'star',
  ]),
};
