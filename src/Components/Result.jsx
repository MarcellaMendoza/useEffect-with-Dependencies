import React, {useState, useEffect} from 'react'
import './Result.css'
import Count from './Count.jsx'

function Result(props) {

  const [callCount, setCallCount] = useState(0)

  // ***** Write your useEffect hook on the lines below:
  


  

  return (
    <div>
    {/* ^ Add conditional styling to the div above ^ */}
    {/* This div should have classes 'dark' and 'mainD' */}
    {/* if darkMode is set to true in App.jsx */}
    {/* Otherwise, it should just have the class 'mainD' */}


      <h4>Result</h4>


      {/* Place the result of your API call in the <h1> tag
      on the line below */}
      <h1>(country)</h1>

      <Count />
    </div>
  )
}

export default Result