import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FullScreenCenter, Button, Input, Card, Error } from '../common';
import { submitSurvey } from './Actions';


class SurveyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: [
        {
          question: 'What was your first reaction to our product?',
          type: 'radio',
          options: ['Very Positive', 'Somewhat Positive', 'Neutral', 'Somewhat Negative', 'Very Negative']
        }, {
          question: 'Why did you purchase our product?',
          type: 'radio',
          options: ['It was a gift', 'I bought it for myself']
        }, {
          question: 'How would you rate our product? ',
          type: 'range',
          min: 1,
          max: 10
        }, {
          question: 'Please let us know why you chose that rating?',
          type: 'text'
        }, {
          question: 'In your own words, please tell us what you like most about your new product.',
          type: 'text'
        }, {
          question: 'Would you purchase our product again?',
          type: 'radio',
          options: ['Yes', 'No']
        }
      ],
      answers: [
        {
          question: 'What was your first reaction to our product?',
          answer: ''
        }, {
          question: 'Why did you purchase our product?',
          answer: ''
        }, {
          question: 'How would you rate our product? ',
          answer: ''
        }, {
          question: 'Please let us know why you chose that rating?',
          answer: ''
        }, {
          question: 'In your own words, please tell us what you like most about your new product.',
          answer: ''
        }, {
          question: 'Would you purchase our product again?',
          answer: ''
        }
      ],
      errorMsg: '',
      extraQuestion: {
        question: 'We’re sorry to hear that. Please elaborate.',
        type: 'text',
        display: false
      }
    };
  }

  handleChange({ target }, question) {
    const { answers, extraQuestion } = this.state;
    const ans = answers;

    ans.forEach((el, index) => {
      if (el.question === question) {
        el.answer = target.value;
      }
      if (el.question === 'Would you purchase our product again?' && el.answer === 'No' && !extraQuestion.display) {
        this.setState(state => ({
          extraQuestion: {
            ...state.extraQuestion,
            display: true
          }
        }));
        ans.push({
          question: 'We’re sorry to hear that. Please elaborate.',
          answer: ''
        });
      } else {
        this.setState(state => ({
          extraQuestion: {
            ...state.extraQuestion,
            display: false
          }
        }));
        if (el.question === 'Would you purchase our product again?' && el.answer === 'Yes' && extraQuestion.display) {
          ans.splice(index, 1);
        }
      }
    });

    this.setState({
      answers: ans
    });
  }

  handleClick() {
    const { answers } = this.state;

    for (const el of answers) {
      if (el.answer === '') {
        this.setState({ errorMsg: 'All fields are required' });
        return;
      }
    }

    this.setState({ errorMsg: '' });
    this.props.submitSurvey(answers);
  }

  render() {
    const { survey, errorMsg, extraQuestion } = this.state;

    return (
      <FullScreenCenter color="white">
        <div className="tc">
          <h1>PLEASE ANSWER THE FOLLOWING QUESTIONS</h1>
          { survey.map((s, i) =>
            (
              <Card classOverrides="mt5" key={s.question} cardWidth="900px" >
                <h3 style={{ textAlign: 'left', width: '100%' }}>{s.question}</h3>
                <div style={{ textAlign: 'left', width: '100%' }}>
                  {s.type === 'radio' && s.options.map((option, j) => (
                    <div className="mt2 mb2 bg-white" style={{ height: '40px', padding: '10px' }} key={option} onChange={e => this.handleChange(e, s.question)}>
                      <Input type={s.type} name={`choice${i}`} value={option} />
                      <label style={{ paddingLeft: '15px', fontSize: '18px' }} htmlFor={`choice${i}${j}`}>{option}</label>
                    </div>
                  ))}
                  {s.type === 'range' && <Input type={s.type} min="1" max="10" inputWidth="100%" inputHeight="40px" onChange={e => this.handleChange(e, s.question)} />}
                  {s.type === 'text' && <Input type={s.type} inputWidth="100%" inputHeight="40px" onChange={e => this.handleChange(e, s.question)} />}
                </div>
              </Card>
            )
          )}

          { extraQuestion.display && <Card classOverrides="mt5" cardWidth="900px" >
            <h3 style={{ textAlign: 'left', width: '100%' }}>{extraQuestion.question}</h3>
            <div style={{ textAlign: 'left', width: '100%' }}>
              <Input type={extraQuestion.type} inputWidth="100%" inputHeight="40px" onChange={e => this.handleChange(e, extraQuestion.question)} />
            </div>
          </Card>}

          { errorMsg !== '' && <Error>{errorMsg}</Error>}
          <Button onClick={() => this.handleClick()} classOverrides="mt4 mb4" borderRadius="small">Submit</Button>
        </div>
      </FullScreenCenter>
    );
  }
}

export default connect(null, { submitSurvey })(SurveyView);
