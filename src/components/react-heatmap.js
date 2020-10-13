import h337 from 'heatmap.js';
import React, { Component } from 'react';
import '../stylesheet/react-heatmap.css';

class ReactHeatmap extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { cfg: null };
  }

  componentDidMount(){
    var config = {
      container: document.getElementById('react-heatmap'),
      radius: 50,
      maxOpacity: .5,
      minOpacity: 0,
      blur: .75
    };

    this.heatmapInstance = h337.create( config );
    this.heatmapInstance.setData({
        max: 5,
        data: [
            { x: 670, y: 200, value: 100},
            { x: 500, y: 100, value: 100},
            { x: 550, y: 80, value: 100},
            { x: 400, y: 200, value: 100},
            { x: 150, y: 80, value: 100},
        ]    
    });
  }

  render(){

    return (
      <section className="heatmap__section">
        <div className="heatmap__container">
          <div id="react-heatmap"></div>
        </div>
      </section>
    );

  }

}

export default ReactHeatmap;