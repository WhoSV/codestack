import React from 'react';

// Material UI imports
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

// Import components
import Navbar from '../Navbar';

// Component Style
import style from './style.less';

// Material UI Styles
const muiStyle = {
  radioLabelStyle: {
    fontWeight: 'normal'
  },
  submitButton: {
    marginBottom: 20,
    width: 260
  },
  submitButtonText: {
    color: '#4A90E2'
  }
};

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true
    };
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleSecondChange = this.handleSecondChange.bind(this);
    this.handleThirdChange = this.handleThirdChange.bind(this);
    this.handleFourthChange = this.handleFourthChange.bind(this);
    this.handleFifthChange = this.handleFifthChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstChange(event) {
    this.setState({
      first: event.target.value,
      isEmpty: false
    });
  }

  handleSecondChange(event) {
    this.setState({
      second: event.target.value,
      isEmpty: false
    });
  }

  handleThirdChange(event) {
    this.setState({
      third: event.target.value,
      isEmpty: false
    });
  }

  handleFourthChange(event) {
    this.setState({
      fourth: event.target.value,
      isEmpty: false
    });
  }

  handleFifthChange(event) {
    this.setState({
      fifth: event.target.value,
      isEmpty: false
    });
  }

  handleSubmit(event) {
    let first = this.state.first;
    let second = this.state.second;
    let third = this.state.third;
    let fourth = this.state.fourth;
    let fifth = this.state.fifth;

    let reqInputs = [first, second, third, fourth, fifth];

    console.log(reqInputs);
  }

  render() {
    return (
      <div className={style.survey}>
        <Navbar {...this.props} />

        <Paper className={style.paper} zDepth={2}>
          <h1>{localStorage.course_name} Course Survey</h1>
          <div className={style.questionContainer}>
            <h4>1. The course objectives were clear?</h4>
            <RadioButtonGroup
              name="q1"
              className={style.buttonsContainer}
              onChange={this.handleFirstChange}
            >
              <RadioButton
                value={1}
                label="Strongly Disgree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={2}
                label="Disagree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={3}
                label="Neutral"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={4}
                label="Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={5}
                label="Strongly Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
            </RadioButtonGroup>
          </div>
          <div className={style.questionContainer}>
            <h4>2. The course textbooks were clear and well written?</h4>
            <RadioButtonGroup
              name="q2"
              className={style.buttonsContainer}
              onChange={this.handleSecondChange}
            >
              <RadioButton
                value={1}
                label="Strongly Disgree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={2}
                label="Disagree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={3}
                label="Neutral"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={4}
                label="Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={5}
                label="Strongly Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
            </RadioButtonGroup>
          </div>
          <div className={style.questionContainer}>
            <h4>
              3. The assignments were appropriate for the level of this class?
            </h4>
            <RadioButtonGroup
              name="q3"
              className={style.buttonsContainer}
              onChange={this.handleThirdChange}
            >
              <RadioButton
                value={1}
                label="Strongly Disgree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={2}
                label="Disagree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={3}
                label="Neutral"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={4}
                label="Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={5}
                label="Strongly Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
            </RadioButtonGroup>
          </div>
          <div className={style.questionContainer}>
            <h4>4. The course increased my interest in the subject?</h4>
            <RadioButtonGroup
              name="q4"
              className={style.buttonsContainer}
              onChange={this.handleFourthChange}
            >
              <RadioButton
                value={1}
                label="Strongly Disgree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={2}
                label="Disagree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={3}
                label="Neutral"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={4}
                label="Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={5}
                label="Strongly Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
            </RadioButtonGroup>
          </div>
          <div className={style.questionContainer}>
            <h4>5. The course corresponded to my expectations?</h4>
            <RadioButtonGroup
              name="q5"
              className={style.buttonsContainer}
              onChange={this.handleFifthChange}
            >
              <RadioButton
                value={1}
                label="Strongly Disgree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={2}
                label="Disagree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={3}
                label="Neutral"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={4}
                label="Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
              <RadioButton
                value={5}
                label="Strongly Agree"
                labelStyle={muiStyle.radioLabelStyle}
                className={style.radioButton}
              />
            </RadioButtonGroup>
          </div>

          <FlatButton
            label="Submit"
            onClick={this.handleSubmit}
            primary={true}
            disabled={this.state.isEmpty}
            style={muiStyle.submitButton}
          />
        </Paper>
      </div>
    );
  }
}

export default Survey;
