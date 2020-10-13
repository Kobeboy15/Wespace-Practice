import React, { Component } from 'react';
import logo from '../images/react-native.png';
import '../stylesheet/LandingBanner-Stylesheet.css';


class LandingBanner extends Component {
  render(){
    return (
        <section>
            <div className="landing__container">
                <img src={logo} className="landing__logo" alt="logo"/>
                <div className="landing__content">
                    <div className="landing__title">A Space for Everyone.</div>
                    <div className="landing__description">
                        We are lucky to have a diverse and enthusiastic commmunity
                        of early adopters who are helping shape our product and community.
                        If you are interested in joining our space, you've come to right place.
                    </div>
                </div>
            </div>
        </section>
    );

  }

}

export default LandingBanner;