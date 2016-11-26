import React from 'react';
import ReactGA from 'react-ga';

import Home from './Home';
import Home2 from './Home2';

// This should handle the IndexRoute until the experiment ends
export default class HomeWrapper extends React.Component {
  constructor(props) {
    super(props);
    let variations = [
      'original',
      'new'
    ];
    let variation = cxApi.chooseVariation();
    this.state = {
      selectedVariation: variations[variation]
    }
  }

  render () {
    console.log("Experiment active: Variant Chosen: " + 
                this.state.selectedVariation);
    let pageUrl = (this.state.selectedVariation === 'original') ? 'home' : 'home2';
    ReactGA.set({ page: window.location.pathname + pageUrl });
    ReactGA.pageview(window.location.pathname + pageUrl);
    return (this.state.selectedVariation === 'original') ? <Home /> : <Home2 />
  }
}