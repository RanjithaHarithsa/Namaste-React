const reacthead = React.createElement("h1", {id : "heading"}, "Hello React from React !!");
const rootr = ReactDOM.createRoot(document.getElementById("root2"));
rootr.render(reacthead);


const nestedreact = React.createElement("div", {id : "parent"},
React.createElement("div", {id : "child"},
[React.createElement("h1", {},"I am h1 tag in nested tags :-)"),React.createElement("h1", {},"I am sibling of h1 tag in nested tags :-)")]
));

rootr.render(nestedreact);