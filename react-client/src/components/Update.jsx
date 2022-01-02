import React from"react";

const Update = ({ currentproduct, handleChange, handleUpdate }) => (
  <div className="update">
    <div>   {currentproduct.name}  - {currentproduct.type} - {currentproduct.inventory} - {currentproduct.price} - {currentproduct.note}    </div>
    <form>
    <div>
    <label htmlFor="name">  New product's Name  : </label>
      <input type="text" id='name' value={currentproduct.name} onChange={handleChange} ></input>
    </div>
    <div>
    <label htmlFor="Type ">  New product's Type  : </label>
      <input type="text" id='type' value={currentproduct.type} onChange={handleChange} ></input>
    </div>
    <div>
    <label htmlFor="stock ">  New product's Stock  : </label>
      <input type="number" id='stock' value={currentproduct.inventory} onChange={handleChange} ></input>
    </div>
    <div>
    <label htmlFor="price ">  New product's Price : </label>
      <input type="number" id='price' value={currentproduct.price} onChange={handleChange} ></input>
    </div>
    <div>
    <label htmlFor="Type ">  New product's Note : </label>
      <input type="text" id='note' value={currentproduct.note} onChange={handleChange} ></input>
    </div>
    </form>
    <div>
      <button className='updateClass' type='submit' onClick={handleUpdate}> Update this product </button>
    </div>
  </div>
);

export default Update ;
