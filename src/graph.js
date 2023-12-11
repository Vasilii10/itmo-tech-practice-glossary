import React from 'react';
import Network from 'react-graph-vis';
import data from './resources/data.json';

function SemanticGraph() {
  const nodes = data.nodes.map((node) => ({ ...node }));
  const graph = {
    nodes,
    edges: data.edges,
  };

  const groups = {
    1: { color: 'red', shape: 'ellipse' },
    2: { color: 'blue', shape: 'box' },
    3: { color: 'yellow', shape: 'box' }
  };

  var options = {
    zoomView: true,
    dragView: true,
      layout: {
        hierarchical: {
          levelSeparation: 150,
          treeSpacing: 200,
          blockShifting: true,
          edgeMinimization: true,
          parentCentralization: true,
          direction: 'UD',
          nodeSpacing: 300,
          sortMethod: "directed" //directed,hubsize
        }

    },
    nodes: {
      shape: "dot",
      size: 16,
    },
    physics: false
  };

  // var options = {
  //   configure: {
  //     enabled: true,
  //     filter: '1, 2,3,4,5',
  //     showButton: true
  //   },
  //   layout: {
  //     nodeSpacing: 1000,
  //     nodeDistance: 300
  //   },
  //   zoomView: true,
  //   dragView: true
  // }


  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Network graph={graph} options={options} groups={groups} />
    </div>
  );
}

export default SemanticGraph;
