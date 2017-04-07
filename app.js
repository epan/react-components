class GroceryListItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      // TODO Ask why this is {this.props.items}
      <li>{this.props.items}</li>
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem items={item} />
    )}
  </ul>
)

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Eggs', 'Milk', 'Sriracha']} />
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))
