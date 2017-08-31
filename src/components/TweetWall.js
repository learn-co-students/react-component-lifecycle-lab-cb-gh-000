import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    this.state = {
      tweets: this.props.newTweets
    }

  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps){
    return nextProps.newTweets.length > 0
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    this.setState({
      tweets: [ ...nextProps.newTweets, ...this.props.newTweets ]
    })

  }

  render() {
    console.log(this.state.tweets)
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
