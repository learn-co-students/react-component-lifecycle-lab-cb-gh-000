import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
      this.setState({
        tweets: this.props.newTweets
      })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.newTweets.length === 0 ) return false;
    return true;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: nextProps.newTweets.concat(this.state.tweets)
    })
  }

  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
