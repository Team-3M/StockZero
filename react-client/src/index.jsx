import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'


import Productlist from './components/Productlist.jsx'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'
import Homepage from './components/Homepage.jsx'
import Product from './components/Product.jsx';




class App extends React.Component {
	constructor() {
		super();
		this.state = {
			product: [],
			page: '',
			allProducts: [],
			id:0,
			name: "",
			type: "",
			price: 0,
			inventory: 0,
			note: '',
			currentproduct: {}
		}


		this.renderView = this.renderView.bind(this)
		this.changeView = this.changeView.bind(this);
		this.handleChange = this.handleChange.bind(this)
		this.submitChange = this.submitChange.bind(this)
		this.currentproductUpdate = this.currentproductUpdate.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)


	}
	componentDidMount() {
		this.setState({
			page: 'pageAll'
		})
		axios.get('/api/stock').then(({ data }) => {

			this.setState({
				allProducts: data
			})
		})
	}

	handleChange(e) {

		this.setState({
			[e.target.name]: e.target.value
		});


	}



	submitChange() {
		const {id, name, type, price, inventory, note } = this.state;
		if (name && type && price && inventory ){
			this.setState({
				id: id+1
			})
		axios.post('/api/add', {id, name, type, price, inventory, note })
			.then(({ data }) => {

				this.setState({
					allProducts: [...this.state.allProducts, data]
				})

			})
			.catch((err) => {
				console.log(err)
			})
		this.changeView('pageAll')
		}
		else alert("please fill all fields")
	}

	currentproductUpdate(object) {

		this.setState({
			currentproduct: object
		})



	}
	handleUpdate() {
		
		axios.put('/api/update/' + currentproduct.name, { name, type, price, inventory, note })
			.then(({ data }) => (
this.setState({
	name: data.name,
	type: data.type,
	price: data.price,
	inventory: data.inventory
})

			))
			.catch((err) => {
				console.log(err)
			});
			this.changeView('product')
	};

	changeView(view) {
		this.setState({
			page: view
		})
	}



	renderView() {
		const { page, product, allProducts, currentproduct } = this.state;
		if (page === 'pageAll') { return <Productlist product={product} allProducts={allProducts} currentproductUpdate={this.currentproductUpdate} changeView={this.changeView} /> }
		else if (page === 'pageCreate') {
			return <Create handleChange={this.handleChange} submitChange={this.submitChange} />
		} else if (page === 'pageUpdate') { return <Update currentproduct={currentproduct} handleChange={this.handleChange} handleUpdate={this.handleUpdate} currentproductUpdate={this.currentproductUpdate}/> }
		else if (page === 'pageHome') {
			return <Homepage />
		}
		else if (page === 'product'){
			return  <Product changeView={this.changeView} currentproduct={currentproduct}/>
		}
	}
	render() {
		return (
			<div>
				<div className='nav'>
					<span className='logo'>MMM</span>
					<button className={this.state.page === 'pageAll'
						? 'nav-selected'
						: 'nav-unselected'}
						onClick={() => this.changeView('pageAll')}>
						see all  product
					</button>
					<button className={this.state.page === 'pageCreate'
						? 'nav-selected'
						: 'nav-unselected'}
						onClick={() => this.changeView('pageCreate')}>
						Add a  product
					</button>
					<button className={this.state.view === 'pageUpdate'
						? 'nav-selected'
						: 'nav-unselected'}
						onClick={() => this.changeView('pageUpdate')}>
						Update a   product
					</button>
					<input type="text" id="search" placeholder='enter the name of the product' />


				</div>
				<div className="main">
					{this.renderView()}
				</div>
			</div>



		);
	}
}


ReactDOM.render(<App />, document.getElementById("Stock"));
