import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import React from 'react';


class Section extends React.Component {

    constructor(props) {
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
    }
  
    scrollToTop() {
      scroll.scrollToTop();
    }
    render() {
      return (
        <div>
            <a onClick={this.scrollToTop}>To the top!</a>
            
            
        </div>

      );
    }
  };
  
export default Section;
  
  