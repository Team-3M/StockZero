import React from 'react'

const Productlist = ({ allProducts, currentproductUpdate }) => (
	<div>
		<h4> The  List of all the Products </h4>
		<div>

			<table className='table' width={'100%'}>

				<thead>
					<tr >
						<th>Name</th>
						<th>Type</th>
						<th>Inventory</th>
						<th>Price</th>
						<th>Last Update</th>
						<th>Created At</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>

					{allProducts.map((product, item) => {
						return (
							<tr key={item} onClick={()=>{currentproductUpdate(product)}}>
								<th>{product.name}</th>
								<th>{product.type}</th>
								<th>{product.inventory}</th>
								<th>{product.price}</th>
								<th>{product.updatedAt}</th>
								<th>{product.createdAt}</th>
								<th>{product.note}</th>
							</tr>
						)
					})}


				</tbody>
			</table>

		</div>
	</div>
)

export default Productlist