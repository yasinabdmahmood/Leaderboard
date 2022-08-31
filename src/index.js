import './style.css';
import getScores from './modules/getScores.js';
import addNewScore from './modules/addNewScore.js'

///important
const gameId='fvBwO8kYIdwKI7oQqNAr';
///important

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fvBwO8kYIdwKI7oQqNAr/scores/', {
//   method: 'POST',
//   body: JSON.stringify({ 
// 	"user": "Yaseen",
// 	"score": 70
// }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  /////////////////////

  window.onload=getScores;

  document.getElementById('refresh').onclick=getScores;
 
  const btn=document.querySelector('#addNewScore');
  btn.onclick=addNewScore;

  
 