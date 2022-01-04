import React from 'react';
import moment from 'moment'
const Product = ({changeView, currentproduct, handleDelete }) => (
	<div className="product">

		<table>
			<thead>
				<tr >

					<th>Name</th>
					<th>Type</th>
					<th>Inventory</th>
					<th>Price</th>
					<th>Notes</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>{currentproduct.name}</th>
					<th>{currentproduct.type}</th>
					<th>{currentproduct.inventory}</th>
					<th>{currentproduct.price}</th>
					<th>{currentproduct.note}</th>
				</tr>
			</tbody>
		</table>
		<button onClick={()=>changeView('pageUpdate')}>Update</button>
		<button onClick={()=>{handleDelete(currentproduct.id)}}>Delete</button>
	</div>
)

export default Product;
