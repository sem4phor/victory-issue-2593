import React from 'react';
import { VictoryChart, VictoryLine, VictoryTooltip } from 'victory';
import {registerRootComponent} from 'expo';

const Chart = () => {
  const sampleData = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 3 },
    { x: 4, y: 2 },
  ]

  return (
    <div style={{display: 'flex', maxWidth: '800px' }}>
    <VictoryChart>
      <VictoryLine
        data={sampleData}
        labels={datum => datum.x}
        labelComponent={<VictoryTooltip constrainToVisibleArea={true} active />}
      />
    </VictoryChart>
    </div>
  )
}

registerRootComponent(Chart);
