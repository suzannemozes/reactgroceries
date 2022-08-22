const groceryList = [
    {
      item: 'diapers',
      brand: 'huggies',
      units: '36-pack',
      quantity: 3,
      isPurchased: true
    },
    {
      item: 'formula',
      brand: 'Similac Advance',
      units: '13 oz',
      quantity: 40,
      isPurchased: false
    },
    {
      item: 'cereal',
      brand: 'Cheerios',
      units: '18 oz',
      quantity: 4,
      isPurchased: false
    }
  ]

  
class App extends React.Component{

    constructor(props) {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.toggleHiring = this.toggleHiring.bind(this)
    }
 
    state = {
        groceryList: groceryList,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
    }

    handleChange = (event) => { //change whenever typing
        // this.state.value = e.target.value // this is wrong, we cannot mutate state directly
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = (event) => { //whenever click submit/you create a new item here and adds to the array of objects and put it at the front of the array
        event.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity
        }
        this.setState({ //this is how you change the state//we're updating the state
            groceryList: [newItem, ...this.state.groceryList],
            item: '',
            brand: '',
            units: '',
            quantity: 0
        })
       
    }

    render () {
        return(

            <div>
            
            <form onSubmit={this.handleSubmit}>
                    <label htmlFor='item'>Item Name</label>
                    <input type='text' value={this.state.item} onChange={this.handleChange} id='item' placeholder='name of item' />
                    <br />
                    <label htmlFor='brand'>Brand</label>
                    <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' />
                    <br />
                    <label htmlFor='units'>Units</label>
                    <input type='text' value={this.state.units} onChange={this.handleChange} id='units' placeholder='describe me'/>
                    <br />
                    <label htmlFor='quantity'>Quantity</label>
                    <input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity' />
                    <br />
                    <input type="submit" />
                </form>

                <h1> Text here </h1>
                <h1>Whole Grocery List </h1>
                <ul>
                    {this.state.groceryList.map(listItem => {
                        return(
                            <li>{listItem.item}</li>
                        )
                    })}
                </ul>
                <br />
                <h1>Purchased</h1>
                <ul>
                    {this.state.groceryList.map(listItem => {
                        return(
                            <li>
                            {listItem.isPurchased ? <span> {listItem.item} </span> : ''}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)