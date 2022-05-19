# Instructions  

---

The goal for this application is to make API calls
to the [Nationalize API](https://api.nationalize.io/?name=michael)
to take a name and output the country the person with that
name is most likely to be from.

Your first order of business for this lesson should be
fixing the error occurring on lines 18-37 in 'App.jsx'.
Whoever wrote that code did not properly consider
the component life cycle. Look in the console for the
specific error message.

Next, modify the existing components so that they
pass data from parent to child using `props`. Then,
modify the buttons in the App component so that
they correctly update their corresponding
state variables.

Finally, look inside 'Result.jsx'. You will need
to use `useEffect` for your API call, and it should
trigger a new API call every time the `name` state
variable changes in 'App.jsx'. You will also need
to use conditional styling to make the result appear
in dark mode or light mode.

Hopefully this lesson helps you appreciate the value
of the `useEffect` hook and how it lets applications
divorce side effects (like API calls or database operations)
from the re-rendering of the view in order to improve
user experience.