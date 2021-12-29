import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import Feed from './components/Feed.jsx';
import Productlist from './components/Productlist.jsx'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'
import Homepage from './components/Homepage.jsx'




class App extends React.Component {
	constructor() {
		super();
		this.state = {
			product: [],
			page: 'pageAll'
		}


		this.renderView = this.renderView.bind(this)
		this.changeView = this.changeView.bind(this);
	}
componentDidMount (){
this.setState({
	page: 'pageAll'
})

}

	changeView(view) {
		this.setState({
			page: view
		})
	}


	renderView() {
		const { page, product } = this.state;
		if (page === 'pageAll') { return <Productlist product={product} /> }
		else if (page === 'pageCreate') {
			return <Create />
		} else if (page==='pageUpdate')
			{return <Update />}
			else if (page ==='pageHome'){
				return <Homepage />
			}
	}
	render() {
		return (
			<div>
       <div className='nav'>
		   <span className='logo'>MMM</span>
		   <button className={this.state.page ==='pageAll'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={()=>this.changeView('pageAll')}>
            see all  product
          </button>
		   <button className={this.state.page ==='pageCreate'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={()=>this.changeView('pageCreate')}>
            Add a  product
          </button>
		  <button className={this.state.view === 'pageUpdate'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={()=>this.changeView('pageUpdate')}>
            Update a   product
          </button>
		  <input type="text"  id="search" placeholder='enter the name of the product' />
		  

	   </div>
	   <div className="main">
          {this.renderView()}
        </div>
			</div>



		);
	}
}


ReactDOM.render(<App />, document.getElementById("Stock"));
