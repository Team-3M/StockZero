import React from"react";

const Update =({handleChange, handleUpdate, currentproduct, currentProductupdate})=> (

	<div className="update">

		<div>
		
		<ul>
	<li>  The current product's Name :  {currentproduct.name}   </li>
	<br />
	<li>   The current product's Type  :  {currentproduct.type} </li>
	<br />
	<li>   The current product's  Price  : {currentproduct.price}  </li>
	<br />
	<li>   The current product's Inventory   : {currentproduct.inventory}   </li>
	<br />
	<li>   The current product's  Note  :  {currentproduct.note} </li>
	</ul>
	
	
		</div> 
		<br />
	<div>
		<label htmlFor="name"> The New Product's Name</label><br />
		<input type="text" name='name' onChange={handleChange} required />
	</div>
	<br />
	<div>
		<label htmlFor="name"> The New Product's Type</label><br />
		<input type="text" name='type' onChange={handleChange} required />
	</div>
	<br />
	<div>
		<label htmlFor="name"> The New Product's Price</label><br />
		<input type="number" name='price' onChange={handleChange} required />
	</div>
	<br />
	<div> 
		<label htmlFor="name"> The New Product's Inventory</label><br />
		<input type="number" name='inventory' onChange={handleChange} required />
	</div>
	<br />
	<div>
		<label htmlFor="name"> The New Product's Note</label><br />
		<textarea type="text" name='note' onChange={handleChange} required  rows="4" cols="87" >
	   </textarea>
	</div>
	<br />


		<button className='updateClass'  type='submit' onClick={handleUpdate}> Save to Add! </button>

	</div>
	)

	export default Update;
