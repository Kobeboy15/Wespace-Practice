import React from 'react';
import LandingBanner from '../components/LandingBanner';
import ContentSection from '../components/ContentSection';
import LineChart from '../components/linechart';


export default class Home extends React.Component {
  render() {
    return (
        <div>
            <LandingBanner />
            <ContentSection />
            <LineChart />
        </div>
    );
  }
}
