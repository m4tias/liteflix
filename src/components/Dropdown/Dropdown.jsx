import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { useOutsideClick } from '../../hooks';
import Icons from '../Icons';
import * as Styled from './styles';

export default function Dropdown({ label, options, defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [arrowPosition, setArrowPosition] = useState('32px');

  const dropdownSelector = useRef(null);
  const containerRef = useRef();

  function handleChange(val) {
    if (value === val) return;
    setValue(val);
    setIsOpen(false);
    onChange(val);
  }

  useEffect(() => {
    setArrowPosition(`${(220 - dropdownSelector.current.offsetWidth) / 2}px`);
  }, [isOpen]);

  useOutsideClick(containerRef, () => setIsOpen(false));

  return (
    <Styled.Container ref={containerRef}>
      <Styled.Selector role="button" onClick={() => setIsOpen((prev) => !prev)}>
        <span ref={dropdownSelector}>
          {label}: <b>{options[value]}</b>
          <Icons icon="arrow" />
        </span>
      </Styled.Selector>
      <Styled.Options isOpen={isOpen} arrowPosition={arrowPosition}>
        <ul>
          {options.map((option, index) => (
            <li
              key={option.split(' ').join('')}
              role="button"
              onClick={() => handleChange(index)}
              className={value === index ? 'selected' : ''}
            >
              {option}
              <Icons icon="selected" />
            </li>
          ))}
        </ul>
      </Styled.Options>
    </Styled.Container>
  );
}

Dropdown.defaultProps = {
  defaultValue: 0,
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number,
};
