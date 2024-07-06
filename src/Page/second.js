import arrow from "../Photos/rightarrow.png"
import { LiaDumbbellSolid } from "react-icons/lia";
import { FaRunning } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { RiHeartPulseFill } from "react-icons/ri";

export default function Second() {
  return (
    <>
     <div className="container">
        <div className="words">

            <h1 className='one'>EXPLORE OUR</h1>
            <h1 className='two'> PROGRAMS</h1>
            <h1 className='three'>TO SHAPE YOU</h1>
        </div>


        <div className="big-box">

        <div className="boxes">
         <LiaDumbbellSolid className="dumbel"/> 
         <h1>Strength Training</h1>
         <p>In this program, you are trained to improve your strength through many exercises.</p>
         <h2>Join Now <img src={arrow} alt="" /></h2>
        </div>
        <div className="boxes">
         <FaRunning className="run"/> 
         <h1>Cardio Training</h1>
         <p>In this program,  you are trained to do sequential moves in range of 20 until 30 minutes.</p>
         <h2>Join Now <img src={arrow} alt="" /></h2>
        </div>
        <div className="boxes">
         <AiFillFire className="fire"/> 
         <h1>Fat Burning</h1>
         <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
         <h2>Join Now <img src={arrow} alt="" /></h2>
        </div>

        <div className="boxes">
         <RiHeartPulseFill  className="ri-heart"/> 
         <h1>Health Fitness</h1>
         <p>This programs is designed for those who exercises only for their body fitness not body building.</p>
         <h2>Join Now <img src={arrow} alt="" /></h2>
        </div>


        </div>
        
     </div>
    </>
  )
}
