import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import Feed from './components/Feed.jsx';
import Admin from './components/Productlist.jsx'
import Create from './components/Create.jsx'
import Productlist from './components/Productlist.jsx'
import axios from 'axios'
import { create } from 'underscore';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			product: [],
			page: ''
		}


		this.renderView = this.renderView.bind(this)
		this.changeView = this.changeView.bind(this);
	}


	changeView(view) {
		this.setState({
			page: view
		})
	}


	renderView() {
		const { page } = this.state;
		if (page === 'pagethree') { return <Productlist product={this.state.product} /> }
		else if (page === 'pageone') {
			return <Create />
		} else
			return <Feed />
	}
	render() {
		return (
			<div>
				<div className='nav'>
					<span className='logo'>MMM</span>
					<button className={this.changeView('pagethree')
						? 'nav-selected'
						: 'nav-unselected'}
						onClick={this.handelPageThree}>
						see all  product
					</button>
					<button className={this.changeView('pageone')
						? 'nav-selected'
						: 'nav-unselected'}
						onClick={this.handelPageOne}>
						Add a  product
					</button>
					<button className={this.changeView('pagetwo')
						? 'nav-selected'
						: 'nav-unselected'}
						onClick={this.handelPageTwo}>
						Update a   product
					</button>
					<input type="text" id="search" placeholder='enter the name of the product' />
					<div id='button-holder'>
						<img src='magnifying_glass.png' />
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
