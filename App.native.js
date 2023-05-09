import React from 'react';
import { VictoryChart, VictoryLine, VictoryTooltip } from 'victory-native';

const Chart = () => {
  const sampleData = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 3 },
    { x: 4, y: 2 },
  ]

  return (
    <VictoryChart width={250}>
      <VictoryLine
        data={sampleData}
        labels={datum => datum.x}
        labelComponent={<VictoryTooltip constrainToVisibleArea={true} active />}
      />
    </VictoryChart>
  )
}

export default Chart
