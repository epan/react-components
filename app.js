var App = () => (
  <div>Some cliche salutation</div>
);
ReactDOM.render(<App />, document.getElementById("app"))

var Milk = () => (
  <li>milk</li>
)
var Eggs = () => (
  <li>eggs</li>
)

var GroceryList = () => (
  <ul>
    <Milk />
    <Eggs />
  </ul>
)

ReactDOM.render(<GroceryList />, document.getElementById("grocerylist"))
