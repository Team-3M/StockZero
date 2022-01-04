import React from 'react';


const Create =({handleChange, submitChange})=> (

<div className="create">
<br />

<div>
	<label htmlFor="name"> New Product's Name</label><br />
	<input type="text" name='name' onChange={handleChange} required />
</div>
<br />
<div>
	<label htmlFor="name"> New Product's Type</label><br />
	<input type="text" name='type' onChange={handleChange} required />
</div>
<br />
<div>
	<label htmlFor="name"> New Product's Price</label><br />
	<input type="number" name='price' onChange={handleChange} required />
</div>
<br />
<div>
	<label htmlFor="name"> New Product's Inventory</label><br />
	<input type="number" name='inventory' onChange={handleChange} required />
</div>
<br />
<div>
	<label htmlFor="name"> New Product's Note</label><br />
	<textarea type="text" name='note' onChange={handleChange}  rows="4" cols="87" >
	</textarea>
</div>
<br></br>

<br />
<br />

	<button className='updateClass' type='submit' onClick={submitChange}> Save to Add! </button>

</div>
)

export default Create;

