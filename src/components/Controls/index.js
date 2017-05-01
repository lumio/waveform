import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 1em;

  font: 1em/1.3 Helvetica, Arial, sans-serif;
`;

const Controls = props => (
  <Wrapper>
    <div>
      <label htmlFor='modeSquare'>
        <input
          id='modeSquare'
          type='radio'
          onClick={ () => props.updateOption( 'mode', 'square' ) }
          checked={ props.options.mode === 'square' }
          readOnly
        />
        { ' ' }square
      </label>
      <br />

      <label htmlFor='modeLine'>
        <input
          id='modeLine'
          type='radio'
          onClick={ () => props.updateOption( 'mode', 'line' ) }
          checked={ props.options.mode === 'line' }
          readOnly
        />
        { ' ' }line
      </label>
    </div>

    <div>
      <label htmlFor='colorInput'>
        color{ ' ' }
        <input
          id='colorInput'
          type='text'
          onChange={ e => props.updateOption( 'color', e.target.value ) }
          value={ props.options.color }
        />
      </label>
      <br />

      <label htmlFor='colorWhite'>
        <input
          id='colorWhite'
          type='radio'
          onClick={ () => props.updateOption( 'color', '#fff' ) }
          checked={ props.options.color === '#fff' }
          readOnly
        />
        { ' ' }white
      </label>
      <br />

      <label htmlFor='colorBlue'>
        <input
          id='colorBlue'
          type='radio'
          onClick={ () => props.updateOption( 'color', '#00e0ff' ) }
          checked={ props.options.color === '#00e0ff' }
          readOnly
        />
        { ' ' }blue
      </label>
      <br />

      <label htmlFor='colorRed'>
        <input
          id='colorRed'
          type='radio'
          onClick={ () => props.updateOption( 'color', '#fe1d1d' ) }
          checked={ props.options.color === '#fe1d1d' }
          readOnly
        />
        { ' ' }red
      </label>
    </div>
  </Wrapper>
);

Controls.propTypes = {
  updateOption: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default Controls;
