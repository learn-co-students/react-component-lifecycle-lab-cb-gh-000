import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      latestTweets: []
    };
  }

  // TODO: componentWillMount()
  // TODO: componentDidMount()
  // TODO: componentWillUnmount()
  componentWillMount()
  {
      this.fetchTweets();
  }
  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }
componentDidMount(){
  this.startInterval();
}
componentWillUnmount(){
  this.cleanUpInterval();
}
  cleanUpInterval = () => clearInterval(this.interval);

  fetchTweets = () => {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }
}

export default App;
