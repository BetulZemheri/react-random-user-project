import React from 'react';
import emailsvg from "../assets/email.svg";
import locationsvg from "../assets/location.svg";
import phonesvg from "../assets/phone.svg";
import "./Card.css";

const Card = ({user}) => {
    const {
        picture: {large},
        name: { title, first, last },
        email,
        phone,
        location: {city, country},
        dob: {age},
        registered: { date },
    } = user;
    return (
        <div className="content">
          <div className="image">
            <img src={large} alt="#" />
          </div>
          <h3>
            <span>{title}</span> <span>{first}</span> <span>{last}</span>
          </h3>
          <div className="png">
            <img src={emailsvg} alt="email" />
          </div>
          <h4>{email}</h4>
          <div className="png">
            <img src={phonesvg} alt="phone" />
          </div>
          <h4>{phone}</h4>
          <div className="png">
            <img src={locationsvg} alt="location" />
          </div>
          <h4><span>{country}</span> <span>{city}</span></h4>
          <h4 className="age">Age: {age}</h4>
          <h4 className="regdate">Register Date: {date.substring(0,10)}</h4>
        </div>
      );
    };
    
    export default Card;