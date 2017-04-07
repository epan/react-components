var GroceryListItem = (props) => {
  // note curly brace requires a return

  var onGroceryItemClick = (event) => {
    alert('I got clicked')
  }
  return (
    <ul>
      <li onClick={onGroceryItemClick}>{props.groceryItems[0]}</li>
      <li>{props.groceryItems[1]}</li>
      <li>{props.groceryItems[2]}</li>
    </ul>
  )
}

var Milk = () => (
  <li>milk</li>
)
var Eggs = () => (
  <li>eggs</li>
)

var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
  <GroceryListItem groceryItems={['Eggs', 'Milk', 'Sriracha']} />
  </div>
)

ReactDOM.render(<GroceryList />, document.getElementById("grocerylist"))
