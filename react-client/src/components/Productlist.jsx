import React from 'react'
import moment from 'moment'
import Product from './Product.jsx'

const Productlist = ({ allProducts, currentproductUpdate, changeView,productFilter,inputValue }) => (
	
		<div>
			<input type="text"  onChange={productFilter} />
			



		<h4> list of all the product </h4>
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


					{allProducts.filter((x)=>{
					return 	x.name.toLowerCase().includes(inputValue.toLowerCase())
					
					}).map((product, item) => {
						return (
							

					

							<tr key={item} onClick={()=>{currentproductUpdate(product)}}>
								<th>{product.name}</th>
								<th>{product.type}</th>
								<th>{product.inventory}</th>
								<th>{product.price}</th>
								<th>{moment(product.updatedAt).format("DD-MM-YYYY")}</th>
								<th>{moment(product.createdAt).format("DD-MM-YYYY")}</th>
								<th>{product.note}</th>
								<th><button onClick={()=>changeView("product")} >Details</button></th>
							</tr>
						)
					})}


				</tbody>
			</table>

		</div>
	</div>
)

export default Productlist