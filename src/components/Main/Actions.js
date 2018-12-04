import Parse from 'parse';
import { browserHistory } from 'react-router';
import {
  AUTH_ERROR,
  AUTH_LOADING,
  SET_BG_COLOR
} from "./Types";


// ////////////////////////////////////////////////////////////////////////////////////////////////////
// Here's a function (randomBackgroundColor) and a helper function (_setColor)
// for you to look at as an example.
function _setColor(color) {
  return {
    type: SET_BG_COLOR,
    payload: color
  };
}

export const randomBackgroundColor = () => (dispatch) => {
  const cssColors = ['white', 'silver', 'gray', 'black', 'red', 'maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal', 'blue', 'navy', 'fuschia', 'purple'];
  const min = Math.ceil(0);
  const max = Math.floor(cssColors.length - 1);
  const randomColorIndex = (Math.floor(Math.random() * (max - min + 1)) + min); //eslint-disable-line
  return dispatch(_setColor(cssColors[randomColorIndex]));
};

// //////////////////////////////////////////////////////////////////////////////////////////////////////


// function _authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   };
// }

// function _authLoading(value) {
//   return {
//     type: AUTH_LOADING,
//     payload: value
//   };
// }

// function _createUser(email, password) {
//   const User = new Parse.User();
//   User.set('username', email);
//   User.set('email', email);
//   User.set('password', password);
//   User.signUp();
// }

// export const signUpUser = (email, password) => (dispatch) => {
//   dispatch(_authLoading(true));
//   _createUser(email, password)
//       .then((user) => {
//         console.log('value returned from signUpUser:', user);
//         browserHistory.push('/survey');
//       })
//       .catch((error) => {
//         dispatch(_authError(error));
//       });
// };

// function _sendAnswers(answers) {
//   const surveyObject = new Parse.Object('Survey');
//   surveyObject.set('answers', answers);
//   return surveyObject.save();
// }

/* below, 'answers' should look like this:
[
{question: 'What was your first reaction to our product?', answer: 'Very Positive'};
{question: 'Why did you purchase our product?', answer: 'It was a gift'}
]
*/
// export const submitSurvey = answers => (dispatch) => {
//   console.log('answers from submitsurvey:', answers);
//   dispatch(_authLoading(true));
//   _sendAnswers(answers)
//       .then((result) => {
//         console.log('value returned from submitSurvey:', result);
//         browserHistory.push('/congrats');
//       })
//       .catch((error) => {
//         dispatch(_authError(error));
//       });
// };

// ////////////////////////////////////////////////////////////////////////////////////////////////////
// If the above functions aren't working for some reason, comment out lines 30-90 and uncomment the below.

export const signUpUser = (email, password) => () => {
  console.log('email:', email, "password", password);
  browserHistory.push('/survey');
};

export const submitSurvey = answers => () => {
  debugger;
  console.log('answers', answers);
  browserHistory.push('/congrats');
};
