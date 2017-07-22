import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    const tweets = this.props.newTweets;
    this.setState({ tweets });
  }

  componentWillReceiveProps(nextProps){
    const tweets = nextProps.newTweets.concat(this.state.tweets);
    this.setState({ tweets });
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.props.newTweets > 0;
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
