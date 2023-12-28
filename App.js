const reactHeading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
);
console.log(reactHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactHeading);
