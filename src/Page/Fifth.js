import { useState } from "react"
import { testData } from "./Data"
import leftarrow from "../Photos/leftarrow.png"
import rightarrow from "../Photos/rightarrow.png"

export default function Fifth() {
  const [selected, setSelected] = useState(0);
  const tLength = testData.length

  return (
    <>
      <div className="container">

        <div className="fifth">

          <div className="fifth-l">
            <h4>TESTIMONIALS</h4>
            <h1>WHAT THEY</h1>
            <h2>SAY ABOUT US</h2> 

            <span>{testData[selected].review}</span>
            <span style={{ color:'var(--orange)'}} >{testData[selected].name}   </span > 

            <span>{testData[selected].status}</span>



          </div>
          <div className="fifth-r">
            <div></div>
            <div></div>

            <img src={testData[selected].image} alt="" className="hov" />
            <div className="border animation-5">

            </div>
            <div className="bold animation-6"></div>


            <div className="arrows"> 
              <img onClick={() => 
              { selected == 0 ?setSelected(tLength - 1)  :setSelected((res) => res - 1);
              }}  src={leftarrow} alt="" />


              <img onClick={() =>
               { selected == (tLength - 1) ?setSelected(0)  :setSelected((res) => res + 1 ) 
              }} 
               src={rightarrow} alt="" />


            </div>
          </div>

        </div>

      </div>
    </>
  )
}
