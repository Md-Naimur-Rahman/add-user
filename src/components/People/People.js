import React, { useState } from 'react';
import peopleData from '../../Data/user';
import './People.css';
import Person from '../Person/Person';
import Cart from '../Cart/Cart';

const People = () => {
    const f15 = peopleData.slice(0,15);
    const [peoples,setPeople] = useState(f15);
    const [cart,setCart] = useState([]);

    const handleAddPerson = (person)=> {
            const newCart = [...cart,person];
            setCart(newCart);
    }
 
    return (
        <div className="people-container">
            <div className="userss">
                <ul>
                        {
                            peoples.map(p => <Person handleAddPerson={handleAddPerson} person = {p}></Person>)
                        }

                </ul>
                
            </div>

            <div className="cart-container">
               
                <Cart cart={cart}>  </Cart>
               
            </div>

            
            
        </div>
    );
};

export default People;