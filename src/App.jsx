import React, {useState, useEffect} from 'react';
import './App.css';
import Result from './Components/Result.jsx'

function App() {

  const [name, setName] = useState('')
  const [darkMode, setDarkMode] = useState(false);
  const [showCount, setShowCount] = useState(false);




  //****** The code block from line 18 to line 37 is
  // triggering an error. See if you can figure out how
  // to fix it by looking at the error in the console.

  // The code below creates a timer that triggers the
  // doneTyping function 700 milliseconds after the user has
  // finished typing
  let typingTimer
  let doneTypingInterval = 700
  let inputField = document.getElementById('input')

  // Start the countdown when keyup event is detected
  inputField.addEventListener('keyup', () => {
      clearTimeout(typingTimer);
      if (inputField.value) {
          typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
  });

  // User hasn't typed in 700ms and are finished typing, so
  // update the 'name' state variable accordingly
  function doneTyping () {
    setName(inputField.value)
  }




  return (
    <main>
      <div className="grid">
        <h2 className="row1">Please type a name in the field below</h2>
        <input placeholder="First name" className="row2 inp" id="input"/>
        <div className="side">
          <h4>Options</h4>


          {/* Use event listeners or the onClick attribute */}
          {/* to make these buttons toggle darkMode or showCount */}
          {/* when they are pressed */}
          <button className="btn">Dark mode</button>
          <button className="btn">Show count</button>

        </div>
      </div>

      {/* Add props to the Result component below */}
      <Result />

    </main>
  );
}

export default App;


// Instructions

// The goal for this application is to make API calls to the Nationalize API to take a name and output the country the person with that name is most likely to be from.

// Your first order of business for this lesson should be fixing the error occurring on lines 18-37 in 'App.jsx'. Whoever wrote that code did not properly consider the component life cycle. Look in the console for the specific error message.

// Next, modify the existing components so that they pass data from parent to child using props. Then, modify the buttons in the App component so that they correctly update their corresponding state variables.

// Finally, look inside 'Result.jsx'. You will need to use useEffect for your API call, and it should trigger a new API call every time the name state variable changes in 'App.jsx'. You will also need to use conditional styling to make the result appear in dark mode or light mode.

// Hopefully this lesson helps you appreciate the value of the useEffect hook and how it lets applications divorce side effects (like API calls or database operations) from the re-rendering of the view in order to improve user experience.