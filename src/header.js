import React from 'react';

function Header({ onSemanticGraphClick, onGlossaryClick }) {
  return (
    <header style={headerStyle}>
      <div style={buttonContainerStyle}>
        <button onClick={onSemanticGraphClick}>Семантический граф глоссария</button>
        <button onClick={onGlossaryClick}>Термины Глоссария</button>
      </div>
      <div style={nameContainerStyle}>Василий Назаренко</div>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#333',
  color: '#fff',
};

const buttonContainerStyle = {
  display: 'flex',
};

const nameContainerStyle = {
  fontWeight: 'bold',
};

export default Header;
