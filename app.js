class GroceryListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      done: false,
      hover: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

    return (
      // TODO Ask why this is {this.props.items}
      <li
        style={style}
        onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemHover.bind(this)}
        onMouseOut={this.onListItemHover.bind(this)}>
        {this.props.items}
      </li>
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
