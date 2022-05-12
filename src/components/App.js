import React, { Component } from 'react';
import Statistics from './statisticsEl';
import Section from './titleEl';
import FeedbackOptions from './buttonEl';
import options from '../data/options.json';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = name => {
    this.setState(st => {
      return { [name]: st[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Plaese leave feedba">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onIncrement}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    );
  }
}

export default App;
