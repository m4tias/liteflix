import PropTypes from 'prop-types';
import * as Styled from './styles';

export default function Button({ children, ...props }) {
  return (
    <Styled.Button {...props}>
      <span>{children}</span>
    </Styled.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
