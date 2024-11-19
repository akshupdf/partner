import React, { useState } from 'react'
import plan from "../src/images/fp.png"
import { Link, useParams } from 'react-router-dom'

export default function DetailsPage () {

    const {id} = useParams();
    const [selectedFloor, setSelectedFloor] = useState(1);

    const floorPlans = {
        1: "Kati 1",
        2: "Kati 2",
        3: "Kati 3",
        4: "Kati 4 ",
        5: "Kati 5 ",
        6: "Kati 6",
        7: "Kati 7 ",
        8: "Kati 8 ",
        9: "Kati 9 ",
        10: "Kati 10 ",
      };

  return (
    <div className='h-screen w-[100%] flex'>
        <div className="w-20 bg-[#6b9855] text-white flex flex-col items-center py-[10vh] h-80 overflow-y-auto mt-[15vh]">
        {Object.keys(floorPlans).map((floor) => (
          <button
            key={floor}
            className={`mb-4 w-10 p-4 h-10 rounded-full text-xl flex items-center justify-center ${
              selectedFloor === parseInt(floor)
                ? "bg-white text-[#6b9855] font-bold"
                : "bg-[#6b9855] text-white"
            }`}
            onClick={() => setSelectedFloor(parseInt(floor))}
          >
            {floor}
          </button>
        ))}
      </div>
        <div className='w-[80%]   p-[20vh]'>
<h1 className=' text-6xl font-semibold mb-8'>Kati { selectedFloor || id } </h1>
<img src={plan} alt="plan"
    
        /> 
        </div>
        <button><Link to="/build" className='bg-[#6b9855] text-white text-xl px-[10vh] py-4 rounded-full absolute right-20 top-[20vh]' >Kthehu</Link></button>
    </div>
  )
}
