import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import Feed from './components/Feed.jsx';
import Admin from './components/Admin.jsx'
import Create from './components/Create.jsx'
import axios from 'axios'


class App extends React.Component {
	constructor() {
		super();
		this.state = {

		}

		this.changeView = this.changeView.bind(this);
	}

	componentDidMount() {
		axios.get('/api/produits').then(({ data }) => {

			})



	}

	changeView(option, object) {
		this.setState({

		});


	}

	renderView() {

	}
	render() {
		return (
			<div>

			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('stock'));
