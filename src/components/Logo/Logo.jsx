import PropTypes from 'prop-types';
import * as Styled from './styles';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import { STATES } from '../../constants';

export default function Logo({ animation }) {
  return (
    <Styled.Container animation={animation}>
      <LogoSVG />
    </Styled.Container>
  );
}

Logo.defaultProps = {
  animation: '',
};

Logo.propTypes = {
  animation: PropTypes.oneOf([STATES.LOADING, STATES.LOADED, '']),
};
