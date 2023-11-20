import { useState } from "react";

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
