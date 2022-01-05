import React from 'react';

var Alert = ({ alertproducts, handleAlert }) => (

    <div className="alert" >


        <h4> The  List of the Products with high risk of shortage </h4>

        <div>

            <table className='table' width={'100%'}>

                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Inventory</th>
                    </tr>
                </thead>
                <tbody>
                
                    {() => { this.handleAlert() }}
                    {alertproducts.map((product, item) => {

                        <tr key={item}>
                            <th>{product.name}</th>
                            <th>{product.inventory}</th>
                        </tr>

                    })}
                </tbody>
            </table>

        </div>
    </div>



);




export default Alert;