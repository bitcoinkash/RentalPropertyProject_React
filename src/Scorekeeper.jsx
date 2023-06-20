// import { useState } from "react";
// import './Scorekeeper.css';

// export default function Scorekeeper({numPlayers, target}) 
// {
//   const arr = new Array(numPlayers).fill(0);

//   const [score, setScore] = useState(arr);

//   const handleClick = (index) => {
//     setScore((prevScore) => {
//       const newScore = [...prevScore];
//       newScore[index] += 1;
//       return newScore;
//     });
//   };


//   const resetClick = () => {
//     setScore(arr)
//   }

//   return (
//     <div>
//       <h1>
//         <ul>
//           {arr.map((_, index) => (
//             <li key={index}>
//               Player{index +1}: {score[index]}
//               <button onClick={() => handleClick(index)}>+1</button>
//               {score[index] >= target && '\u00A0WINNER!'}
//               </li>
//           ))}
          
//         </ul>
//       </h1>
//       <button onClick={resetClick}>Reset</button>
//     </div>
//   );
// }


import { useState } from "react";
export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  //   const incrementScore = (idx) => {
  //     setScores((prevScores) => {
  //       const copy = [...prevScores];
  //       copy[idx] += 1;
  //       return copy;
  //     });
  //   };

  const incrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
    });
  };

  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Player{idx + 1}: {score}
              <button onClick={() => incrementScore(idx)}>+1</button>
              {score >= target && "WINNER!"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
