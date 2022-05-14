import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Title from './components/title';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import data from './data/options.json';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    options: data,
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
      (this.state.good / this.countTotalFeedback()) * 100
    );
  };

  render() {
    const nullFeadback = 0;
    const { good, neutral, bad, options } = this.state;
    return (
      <>
        <Section>
          <Title title="Plaese leave feedba" />
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onIncrement}
          />
        </Section>
        <Section>
          {this.countTotalFeedback() === nullFeadback ? (
            <Notification />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}

export default App;
