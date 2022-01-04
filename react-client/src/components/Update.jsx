import React from "react";

const Update = ({ currentproduct, handleChange, handleUpdate }) => (
  <div className="update">
    <br />

    <div>

      <ul className="productlist">
        <li>  Current product's name :          {currentproduct.name}       </li>
        <li>  Current product's type :          {currentproduct.type}       </li>
        <li>  Current product's inventory :     {currentproduct.inventory}    </li>
        <li>  Current product's price :         {currentproduct.price}         </li>
        <li>  Current product's note :          {currentproduct.note}      </li>

      </ul>

    </div>
    <form id="update">
      <div>
        <br />
        <label htmlFor="name">  New product's Name  : </label>
        <input type="text" id='name' value={currentproduct.name} onChange={handleChange} ></input>
      </div>
      <br />

      <div>
        <label htmlFor="Type ">  New product's Type  : </label>
        <input type="text" id='type' value={currentproduct.type} onChange={handleChange} ></input>
      </div>
      <br />
      <div>
        <label htmlFor="stock ">  New product's Stock  : </label>
        <input type="number" id='stock' value={currentproduct.inventory} onChange={handleChange} ></input>
      </div>
      <br />
      <div>
        <label htmlFor="price ">  New product's Price : </label>
        <input type="number" id='price' value={currentproduct.price} onChange={handleChange} ></input>
      </div>
      <br />
      <div>
      <br />
        <label htmlFor="Type ">  New product's Note : </label> <br />
        <textarea  type="text" id='note' value={currentproduct.note} onChange={handleChange}  rows="5" cols="87" ></textarea>
        <br />

      </div>
    </form>

    <div>

    </div>
    <br />
   

    <div>
      <button className='updateClass' type='submit' onClick={handleUpdate}> Save to Update! </button>
    </div>
  </div>
);

export default Update;
