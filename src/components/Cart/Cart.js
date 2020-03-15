import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total =0;
    for (let i=0; i<cart.length ; i++){
        const person = cart[i];
        total = total + Number(person.salary);
    }

    return (
        <div className="CartItem">
            <h3>Friend List:</h3>
            <h5>
            {
                        cart.map(addP => <ul> <p><small>{addP.preferredFullName} : {addP.salary}  </small></p>   </ul>)
                    }
            </h5>
        
        <h5>Totall Added : {cart.length}</h5>
        <h5>Total Salary : {total} </h5>
        </div>
    );
};

export default Cart;