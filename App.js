import React from "react";
import ReactDOM from "react-dom/client";

//Functional Component
const HeadingComponent = () => {
    return (
        <div>
            <h1>h1 heading using Functional Component!</h1>
            <h2>h2 heading using Functional Component!</h2>
            <h3>h3 heading using Functional Component!</h3>
        </div>
    );
};

//JSX heading
const heading = (
    <div>
        <h1 className="level1" id="head1">
            This is h1 level heading!
        </h1>
        <h2 className="level2" id="head2">
            This is h2 level heading!
        </h2>
        <h3 className="level3" id="head3">
            This is h3 level heading!
        </h3>

        <HeadingComponent />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);