import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import Feed from './components/Feed.jsx';
import Productlist from './components/Productlist.jsx'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'
import Homepage from './components/Homepage.jsx'
import axios from 'axios'
import { create } from 'underscore';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			product: [],
			page: 'pageAll',
			name: '',
			note: '',
			types: '',
			stock: 0,
			price: 0,
			currentProduct: {}
		}

		this.renderView = this.renderView.bind(this)
		this.changeView = this.changeView.bind(this);
		this.handleSubmit = this.handlesubmit.bind(this);
		this.handleupdate = this.handleupdate.bind(this)
	}
	componentDidMount() {
		this.setState({
			page: 'pageHome'
		})

	}
	
	changeView(view) {
		this.setState({
			page: view
		})
	}

	handleupdate() {
		const Product = this.state.currentProduct;
		Product.name = this.state.name;
		Product.stock = this.state.stock;
		Product.note = this.state.note;
		Product.price = this.state.price;
		Product.types = this.state.types.split('');
		axios.put('/api/stocks/' + Product.id, Product).then((
			{ data }) => (
			this.setState({
				Product: data
			})))
	};

	handlesubmit() {
		let { name, types, stock, note, price } = this.state;
		types = types.split('');
		axios.post('/api/stocks/', { name, types, stock, note, price }).then(({ data }) => {
			let Product = this.state.product.push(data)
			this.setState({
				Products: [...this.state.Product, data]
			})
		})
	};

	renderView() {
		const { page, product } = this.state;
		if (page === 'pageAll') { return <Productlist product={product} /> }
		else if (page === 'pageCreate') {
			return <Create />
		} else if (page === 'pageUpdate') { return <Update /> }
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
						Update a product
					</button>
					<input type="text" id="search" placeholder='enter the name of the product' />
					<div id='button-holder'>

					</div>

				</div>
				<div className="main">
					{this.renderView()}
				</div>
			</div>



		);
	}
}


ReactDOM.render(<App />, document.getElementById("Stock"));
