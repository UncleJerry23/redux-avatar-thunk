import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {

  const imgStyle = {
    width: '150px'
  };

  return (
    <>
      <img src={character.image} style={imgStyle} />
      <h3>{character.name}</h3>
    </>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
