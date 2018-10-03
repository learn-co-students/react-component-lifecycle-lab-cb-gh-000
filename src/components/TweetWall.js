import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }
  componentWillMount()
  {
    var tweets=this.props.newTweets;
    this.setState({tweets:tweets});
  }
componentWillReceiveProps(nextProps){
  var listTweets=nextProps.newTweets.concat(this.state.tweets);
  this.setState({tweets:listTweets});

}
shouldComponentUpdate(){
   return (this.state.tweets.length>0);
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
