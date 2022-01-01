import React from 'react';


const Create =({handleChange, submitChange})=> (

<div className="create">
<div>
	<label htmlFor="name">Name</label><br />
	<input type="text" name='name' onChange={handleChange} required />
</div>
<div>
	<label htmlFor="name">Type</label><br />
	<input type="text" name='type' onChange={handleChange} required />
</div>
<div>
	<label htmlFor="name">Price</label><br />
	<input type="number" name='price' onChange={handleChange} required />
</div>
<div>
	<label htmlFor="name">Inventory</label><br />
	<input type="number" name='inventory' onChange={handleChange} required />
</div>
<div>
	<label htmlFor="name">Note</label><br />
	<input type="text" name='note' onChange={handleChange} required />
</div>



	<button type='submit' onClick={submitChange}>submit</button>

</div>
)

export default Create