const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "Hi I am Dhananjay!"),
    React.createElement("h2", {}, "Hi I am Dhananjay!"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "Hi I am Dhananjay!"),
    React.createElement("h2", {}, "Hi I am Dhananjay!"),
  ]),
]);

console.log(parent);
/*const heading = React.createElement("h1",{id:"heading"},"Hello Dhananjay!!"); */ // this comes from straight React(CORE REACT)
const root = ReactDOM.createRoot(document.getElementById("root")); //this comes from straight React-DOM*/
root.render(parent);
