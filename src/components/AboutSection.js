import React, { Component } from 'react';
import '../stylesheet/AboutSection.css'


class AboutSection extends Component {
  render(){
    return (
        <section className="about__section">
            <div className="about__container">
                <h2 className="about__title">Wespace is Growing</h2>
                <p className="about__description">
                    Wespace was a project that originated in the Philippines in early 2017,
                    and now has expanded it's reach to international waters. We are a group of diverse communities
                    that want to foster a family-friendly relationship with our users. Bonding and experiencing many
                    experiences that help us cultivate a much larger goal of unifying the world we live in today.
                </p>
            </div>
        </section>
    );

  }

}

export default AboutSection;