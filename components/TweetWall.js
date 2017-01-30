const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            tweets:[...nextProps.newTweets,...this.state.tweets]
         })
    }
  shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState.tweets.join() === this.state.tweets.join())
       return  nextState.tweets.join() === this.state.tweets.join()?false:true
    }


    componentWillMount() {

         this.setState({
            tweets:this.props.newTweets
         })
     }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;
