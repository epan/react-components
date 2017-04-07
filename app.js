class GroceryListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      done: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }

    return (
      // TODO Ask why this is {this.props.items}
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.items}</li>
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
