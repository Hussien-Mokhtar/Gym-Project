import { GiHeartPlus } from "react-icons/gi";
import whiteTick from "../Photos/whiteTick.png"
import Arrow from "../Photos/rightarrow.png"
import { RiVipCrownFill } from "react-icons/ri";
import { LuDumbbell } from "react-icons/lu";
export default function Forth() {
  return (
    <>
    <div className="container">
    <div className="tybe">

     <h1>READY TO START</h1>
     <h2>YOUR JOURNEY</h2>
     <h1>NOW WITHUS</h1>
    </div>

<div className="con">
<div className="big-bords">

<GiHeartPlus className="icon"/>
<h3>BASIC PLAN</h3>
<h1>$ 25</h1>
<h2> <img src={whiteTick} alt="" /> <span>2 hours of excercises</span> </h2>
<h2> <img src={whiteTick} alt="" /><span>Free consultaion to coaches</span></h2>
<h2> <img src={whiteTick} alt="" /><span> Access to The Community</span></h2>

<h3><span>See more benefits</span> <img src={Arrow} alt="" /></h3>
<button>Join now</button>

</div>
<div className="big-bordss"  >

< RiVipCrownFill className="tag"/>
<h3>PREMIUM PLAN</h3>
<h1>$ 30</h1>
<h2> <img src={whiteTick} alt="" /> <span>5 hour of excercises</span> </h2>
<h2> <img src={whiteTick} alt="" /><span>Free consultaion of Coaches</span></h2>
<h2> <img src={whiteTick} alt="" /><span> Accessto minibar</span></h2>

<h3><span>See more benefits</span> <img src={Arrow} alt="" /></h3>
<button>Join now</button>

</div>
<div className="big-bords">

<LuDumbbell className="icon"/>
<h3>BASIC PLAN</h3>
<h1>$ 25</h1>
<h2> <img src={whiteTick} alt="" /> <span>2 hours of excercises</span> </h2>
<h2> <img src={whiteTick} alt="" /><span>Free consultaion to coaches</span></h2>
<h2> <img src={whiteTick} alt="" /><span> Access to The Community</span></h2>

<h3><span>See more benefits</span> <img src={Arrow} alt="" /></h3>
<button>Join now</button>

</div>

</div>

    
    </div>
    
    </>
  )
}
