var rt = ReactDOM.createRoot(document.getElementById("root"));

var hh = React.createElement(
  "div",
  {
    id: "child",
  },
  [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]
);
rt.render(hh);
