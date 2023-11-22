import { faBed, faCar, faPerson, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import './Header.css'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';

const Header = ({type}) => {


  
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);

      const [openDate , setOpenDate] = useState(false)
      const [destination, setDestination] = useState("")
      const [openOptons , setOpenOptions] = useState(false)

      const [options  , setOptions] = useState({
        adult : 1,
        children : 0,
        room :1,

      })


      const handleOptions = (name , operation) =>  {

        setOptions((prev) => {
          return {
            ...prev,
            [name] : operation ==="i" ? options[name] + 1 : options[name]- 1,

          }
        }) 



      }
 
      const navigate = useNavigate()

      const {dispatch} = useContext(SearchContext)

       const handleSearch = () => {

        dispatch({ type : "NEW_SEARCH", payload : {
          destination , dates, options
        }})

        navigate("/hotels", {state :{destination, dates, options}})
         
          
       }



    return (
      
       <div className="header">
        <div className={type === "List" ? "headerContainer listMode" : "headerContainer"}>
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

{  type !== "List"  &&
 <>
  <h1 className="headerTitle">A lifeTime of discount ? It's Genius</h1>
  <p className="headerDesc">Get Rewarded For your travels - Unlock instant savings of 10% or more with a free acoounts </p>

 
    <div className="headerSearch">
    <div className="headerSearchItem">   
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="headerSearchInput"

                   onChange={e => setDestination(e.target.value)}
                />
              </div>



        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
       <span onClick={() => setOpenDate(!openDate)}  className='headerSearchText'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to  ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>

       
       {
        openDate && <DateRange
        editableDateInputs={true}
        onChange={(item) => setDates([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={dates}
        className="date"
        minDate={new Date()}
      />
       }
        </div>



        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"  />
      <span onClick={() => setOpenOptions(!openOptons)} className='headerSearchText'>{`${options.adult} adult ${options.children} children  . ${options.room}  room ` }</span>


             {

      openOptons && 

      <div className="options">
  <div className="optionItem">
    <div className="optionText">  Adult </div>
    <div className="optionCounter">
    <button 
    disabled= {options.adult <= 1}
    className="optionCounterButton" onClick={() => handleOptions("adult", "d")}> -</button>
    <div className="optionCounterNumber"> {options.adult} </div>
    <button   className="optionCounterButton"
    onClick={() => handleOptions("adult", "i")}
    > +</button>
</div>
  </div>



  <div className="optionItem">
    <div className="optionText">  Children </div>
    <div className="optionCounter">
    <button 
        disabled= {options.children <= 0}
    className="optionCounterButton" onClick={() => handleOptions("children", "d")}> -</button>
    <div className="optionCounterNumber"> {options.children} </div>
    <button   className="optionCounterButton"
    onClick={() => handleOptions("children", "i")}
    > +</button>
</div>
  </div>

  <div className="optionItem">
    <div className="optionText"> Room </div>
    <div className="optionCounter">
    <button 
        disabled= {options.room <= 1}
    className="optionCounterButton" onClick={() => handleOptions("room", "d")}> -</button>
    <div className="optionCounterNumber"> {options.room} </div>
    <button   className="optionCounterButton"
    onClick={() => handleOptions("room", "i")}
    > +</button>
</div>
  </div>


</div>


             }



        </div>

        <div className="headerSearchItem">
        <div onClick={handleSearch} className="button headerBtn">Search</div>
        </div>


    </div>
 </>
}
        </div>
    
       </div>
    );
};

export default Header;