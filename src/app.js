import React, { useState } from 'react';
import Graph from './graph';
import Header from './header';
import Glossary from './glossary';

function App() {
  const [selectedTerm, setSelectedTerm] = useState(true);
  const [showSemanticGraph, setShowSemanticGraph] = useState(null);

  const handleSemanticGraphClick = () => {
    setShowSemanticGraph(true);
    setSelectedTerm(null);
  };

  const handleGlossaryClick = () => {
    setShowSemanticGraph(false);
    setSelectedTerm(null);
  };

  const handleTermClick = (termId) => {
    setShowSemanticGraph(false);
    setSelectedTerm(termId);
  };

  return (
    <div>
      <Header onSemanticGraphClick={handleSemanticGraphClick} onGlossaryClick={handleGlossaryClick}/>
      {showSemanticGraph ? (
        <Graph/>
      ) : (
        <Glossary onTermClick={handleTermClick}/>
      )}
      {selectedTerm && (
        <div style={descriptionStyle}>
        </div>
      )}
    </div>
  );
}

const descriptionStyle = {
  padding: '20px',
};

export default App;
