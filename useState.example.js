/* 
                                USING Composition INSTEAD OF INHERITENCE 
*/

// Can be a "class" or "function", but it must begin with a capital letter (i.e. "Example")
function Example_useState() {
    // Declare a new state variable, which we'll call count
    // The useState will always give two variables
    // The 1st one is an object that says this is the actual/inital state >> "count"
    // The 2nd one is a function that will change the state (i.e. the count) >>  "setCount"
    const [count, setCount] = useState(0);
    // the line of code above is called, ""Array deconstruction"".

    return (
        <div>
            <p>You clicked {count} times</p>
            {/* The "onClick" calls the "setCount" & "(count + 1)"" will will cause the "count" to go up one number everytime the button is clicked */}
            <button onClick={() => setCount(count + 1)}> 
                Click me
            </button>
        </div>
    );
}
/*
Composition has five rules
    -Components can be a "class" or "function".
    -That class or function must start with a cpital letter.
    -That class or function must return valid JSX that can be rendered.
    -That JSX muct have exactly one root level tag.
    -You must use a ReactDOM.render function called somewhere to tie the component to a node in the component

    Virtual Dom = is just a Javascript that resembles the real DOM, which REACT maintains with the full state
                    of all of our components in it. It keeps track of where everything is supposed to be, what
                    new thins appear and what things disaper, and use that info to update only what changes.

    Updating the Virtual Dom is faster them updating the real DOM.
*/