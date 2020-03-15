import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Person = (props) => {

    console.log(props);

    const { userId, jobTitleName, preferredFullName, region, phoneNumber, emailAddress, salary, img } = props.person;

    return (
        <div className="person-container">

            <div className="personIMG">
                <img src={img} alt="" />


            </div>
            <div className="personInfo">
                <h1>{preferredFullName}</h1>
                <h5>Profession : {jobTitleName}</h5>
                <h5>Country: {region}</h5>
                <h5> <FontAwesomeIcon icon={faPhoneSquareAlt } /> {phoneNumber}</h5>
                <h5><FontAwesomeIcon icon={faEnvelope } /> {emailAddress}</h5>
                <h5> Salary : ${salary} </h5>
                <button className="btnAdd" onClick={()=> props.handleAddPerson(props.person)} >  <FontAwesomeIcon icon={faUserPlus } /> Add Person </button>

            </div>

        </div>
    );
};

export default Person;