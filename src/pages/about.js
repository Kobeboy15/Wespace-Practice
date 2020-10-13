import React from 'react';
import AboutSection from '../components/AboutSection';
import Heatmap from '../components/react-heatmap';


export default class Home extends React.Component {
  render() {
    return (
        <div>
            <AboutSection />
            <Heatmap />
        </div>
    );
  }
}
