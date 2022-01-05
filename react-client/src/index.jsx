import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'


import Productlist from './components/Productlist.jsx'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'
import Product from './components/Product.jsx';
import Alert from './components/Alert.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			product: [],
			page: '',
			allProducts: [],
			id: 0,
			name: "",
			type: "",
			price: 0,
			inventory: 0,
			note: '',

			currentproduct: {},
			inputValue: '',
			alertproducts: [],
		}


		this.renderView = this.renderView.bind(this)
		this.changeView = this.changeView.bind(this);
		this.handleChange = this.handleChange.bind(this)
		this.submitChange = this.submitChange.bind(this)
		this.currentproductUpdate = this.currentproductUpdate.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.productFilter = this.productFilter.bind(this)
		this.handleAlert = this.handleAlert.bind(this)
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

	productFilter(event) {
		this.setState({
			inputValue: event.target.value
		})
	}


	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});


	}

	handleDelete(index) {
		axios.delete("/api/delete/:id" + index)
			.then(({ data }) => {
				console.log(data)
			})
			.catch((e) => {
				console.log(e)
			})

	}

	submitChange() {
		const { id, name, type, price, inventory, note } = this.state;
		var l = this.state.allProducts.length - 1;

		if (name && type && price && inventory) {
			this.setState({
				id: l + 1
			})
			axios.post('/api/add', { id, name, type, price, inventory, note })
				.then(({ data }) => {
					console.log(data)
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
	};

	handleUpdate() {
		const product = this.state.currentproduct;
		product.name = this.state.name;
		product.type = this.state.type;
		product.price = this.state.price;
		product.inventory = this.state.inventory;
		product.note = this.state.note;

			axios.put('/api/update/' + product.id, product)
				.then(({ data }) => {
					this.setState({
						allProducts: data
					})

				})
				.catch((err) => {
					console.log(err)
				})
	};

	handleDelete(index) {
		axios.delete('/api/delete/' + index)
			.then(({ data }) => (
				console.log(data)
			))
			.catch((err) => {
				console.log(err)
			})
		this.componentDidMount()
	}

	changeView(view) {
		this.setState({
			page: view
		})
	};

	handleAlert() {
		if( Product.inventory < 2 ){ 
		this.state.allProducts.map(( product) => {   			
                   this.setState({
						  alertproducts : alertproducts.push(product)
					  })
					})}}
			
        renderView() {
		const { page, product, allProducts, currentproduct, inputValue,alertproducts} = this.state;
		if (page === 'pageAll') { return <Productlist product={product} allProducts={allProducts} 
		currentproductUpdate={this.currentproductUpdate} changeView={this.changeView}
		 productFilter={this.productFilter} inputValue={inputValue} handleAlert={this.handleAlert} /> }

		else if (page === 'pageCreate') {
			return <Create handleChange={this.handleChange} submitChange={this.submitChange} />
		} else if (page === 'pageUpdate') { return <Update currentproduct={currentproduct} 
		handleChange={this.handleChange} handleUpdate={this.handleUpdate} currentproductUpdate={this.currentproductUpdate} /> }
		
		else if (page === 'product') {
			return <Product changeView={this.changeView} currentproduct={currentproduct} handleDelete={this.handleDelete} />
		}
		else if(page ==='pageAlert'){
			return <Alert changeView={this.changeView} handleAlert={this.handleAlert} alertproducts={alertproducts} />
		}
	};

	render() {
		return (
			<div>
				<div className='nav'>
					<span className='logo'> Stock Zero </span>
					<button className={this.state.page === 'pageAll'
						? 'nav-selected'
						: 'nav-unselected'}
						onClick={() => this.componentDidMount()}>
						see all  product
					</button>

					<button className={this.state.page === 'pageCreate'
						? 'nav-selected'
						: 'nav-unselected'}
						onClick={() => this.changeView('pageCreate')}>
						Add a  product
					</button>

					<button className={this.state.page === 'pageAlert'
						? 'nav-selected'
						: 'nav-unselected'}
						onClick={() => this.changeView('pageAlert')}>
						Shortage Alert 
					</button>

				</div>
				<div className="main">
					{this.renderView()}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("Stock"));
