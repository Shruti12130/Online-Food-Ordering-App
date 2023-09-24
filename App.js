import React from "react";
import ReactDOM from "react-dom/client";

//React element through React

const heading = React.createElement("h1", {id: "heading"}, "React Project");

const root = ReactDOM.createRoot(document.getElementById("root"));

//React element through JSX syntax
const jsxHeading = <h1 id="heading "> React Project through JSX</h1>;

//If JSX is multi lined, we wrap it inside ()
const jsxHeading2 = (
    <div className="container2">
        <h2 className="head2">
            Writing JSX in multiple lines and wrapping it inside parentheses.
        </h2>
    </div>
);

const Title = function () {
    return (
        <h1 className="head">
            Learning React!!
        </h1>
    );
};

const num = 1000;

// React Functional Component
const HeadingComponent = () => (
    <div id="conatiner">
        <Title />
        {num}
        <h2 className="heading"> React Functional Component! </h2>
    </div>
);

root.render(<HeadingComponent />);