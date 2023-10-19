import { faBed, faCar, faPerson, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Header.css'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from 'date-fns';

const Header = () => {

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);

    return (
       <div className="header">
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed}/>
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane}/>
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar}/>
                <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed}/>
                <span>Attractions</span>
            </div>
        </div>

  <h1 className="headerTitle">A lifeTime of discount ? It's Genius</h1>
  <p className="headerDesc">Get Rewarded For your travels - Unlock instant savings of 10% or more with a free acoounts </p>

  <button className="headerBtn">Sign/Register</button>s

    
    <div className="headerSearch">

    <div className="headerSearchItem">
        
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="headerSearchInput" 
                />
              </div>



        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
       <span className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to  ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

       <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
        </div>



        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"  />
      <span className='headerSearchText'>2 adults 2 children 1 room</span>
        </div>

        <div className="headerSearchItem">
        <div className="button headerBtn">Search</div>
        </div>


    </div>

        </div>
    
       </div>
    );
};

export default Header;