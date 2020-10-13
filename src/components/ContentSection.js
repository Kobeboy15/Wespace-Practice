import React, { Component } from 'react';
import '../stylesheet/ContentSection.css'


class ContentSection extends Component {
  render(){
    return (
        <section className="banner__section">
            <div className="banner__container">
              <div className="banner__description">
                With millions of users now attending the spaces, its soo easy to be a part of
                a community that you can fit in.
              </div>
              <div className="banner__title">
                Become one with the community you belong
              </div>
              <div className="banner__action">
                <button className="action__button button__read-more">Read More</button>
                <button className="action__button button__join-now">Join Now</button>
              </div>
            </div>
        </section>
    );

  }

}

export default ContentSection;