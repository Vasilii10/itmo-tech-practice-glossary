import React from 'react';
import { Collapse } from 'antd';
import data from './resources/data.json';

const { Panel } = Collapse;

function Glossary({ onTermClick }) {
  const handleTermClick = (termId) => {
    onTermClick(termId);
  };

  return (
    <div style={glossaryStyle}>
      <Collapse accordion>
        {data.nodes.map((term) => (
          <Panel key={term.id} header={term.label} onClick={() => handleTermClick(term.id)}>
            <div style={descriptionStyle}>
              <p>{term.description}</p>
            </div>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

const glossaryStyle = {
  padding: '20px',
};

const descriptionStyle = {
  padding: '20px',
};

export default Glossary;
