import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'


import Productlist from './components/Productlist.jsx'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'
import Homepage from './components/Homepage.jsx'




class App extends React.Component {
	constructor() {
		super();
		this.state = {
			product: [],
			page: '',
			allProducts: [],
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
		})

	}

	submitChange() {
		const { name, type, price, inventory, note } = this.state;
		axios.post('/api/add', { name, type, price, inventory, note })
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

	currentproductUpdate(object) {

		this.setState({
			currentproduct: object
		})
		console.log(object)


	}
	handleUpdate(object) {
		axios.put('/api/update/' + object.name, object).then((
			{ data }) => (
				this.setState({
					currentproduct: data
				})))
				.catch((err)=>{
					console.log(err)
				})
	};

	changeView(view) {
		this.setState({
			page: view
		})
	}


	renderView() {
		const { page, product, allProducts, currentproduct } = this.state;
		if (page === 'pageAll') { return <Productlist product={product} allProducts={allProducts} currentproductUpdate={this.currentproductUpdate} /> }
		else if (page === 'pageCreate') {
			return <Create handleChange={this.handleChange} submitChange={this.submitChange} />
		} else if (page === 'pageUpdate') { return <Update currentproduct={currentproduct} handleChange={this.handleChange} handleUpdate={this.handleUpdate} /> }
		else if (page === 'pageHome') {
			return <Homepage />
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
