//Accessing HTML element through JS
// document.getElementById("root") = "Hello World!!"

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World!! from JS";

// const root = document.getElementById('root');
// root.appendChild(heading);



//Accessing HTML element through React JS

//React is a library  -- creating an h1 element inside React (core React thing - 1st library)
const heading = React.createElement(   //this is a react element -> JS object
    "h1",                         //what type of tag we are creating
    { id: "heading" },            // attribute of tag
    "Hello World from React!!"    // children of this tag
);

console.log(heading);

// React needs to have a root where it can do all DOM stuffs
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render inside Root  -> take the object, convert into h1 tag and put it inside root (DOM)
root.render(heading);


//React element (object)  => HTML tag that browser understands
const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div", 
        {id: "child"}, 
        [React.createElement("h1", {}, "h1 tag"),
        React.createElement("h2", {}, "h2 tag")
    ])
);
root.render(parent);

