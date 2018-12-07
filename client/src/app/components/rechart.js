import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  VerticalBarSeries,
  LineSeries,
  SimpleChartWrapper
} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <XYPlot height={500} width={1000}>
          <VerticalGridLines />
          <HorizontalGridLines />

          <HorizontalBarSeries
            className=""
            data={[
              {
                color: 8,
                x: 10,
                y: 0
              },
              {
                color: 7,
                x: 9.891661069228135,
                y: 1
              },
              {
                color: 3,
                x: 10.961106608536413,
                y: 2
              },
              {
                color: 4,
                x: 10.703517513151626,
                y: 3
              },
              {
                color: 5,
                x: 10.342763122258976,
                y: 4
              },
              {
                color: 7,
                x: 9.002133458129187,
                y: 5
              },
              {
                color: 0,
                x: 8.34484505414074,
                y: 6
              },
              {
                color: 9,
                x: 9.25098144256524,
                y: 7
              },
              {
                color: 3,
                x: 7.348365853755626,
                y: 8
              }
            ]}
            stack={false}
            style={{}}
          />
        </XYPlot>
      </div>
    );
  }
}

export default App;
