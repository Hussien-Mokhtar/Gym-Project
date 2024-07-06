import Header from "./Header";
import heart from "../Photos/heart.png"
import man from "../Photos/hero-man.png"
import back from"../Photos/hero_image_back.png"
import calories from "../Photos/calories.png"

function Nav() {
    const transation = {type: "spring" , duration : 3 }
    return (
        <>

            <div className="hero">
           
                <div className="left-h ">
                    <Header />
                    <div className="blur hero-blur"></div>
                    <div className="the-best-ad">
                        <div className="animation-1"></div>


                        <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                    </div>


                    <div className="h">
                        <h1> <span>SHAPE </span>YOUR</h1>
                        <h2>IDEAL BODY</h2>
                        <p>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
                    </div>

                    <div className="numbers">
                        <div><h1>+140 </h1><span> EXPERT COACHES</span></div>

                        <div><h1>+ 978</h1><span> MEMBERS JOINED</span></div>

                        <div>  <h1>+ 50</h1><span>FITNESS PROGRAMS</span></div>

                    </div>

                    <div className="button-1">
                        <button className="b1">Get Started</button>
                        <button className="b2">Learn More</button>
                    </div>




                </div>



                <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart animation-2">
                    <img src={heart} alt=""/>
                    <h2>Heart  Rate</h2>
                    <h1>116bpm</h1>
                </div>

            {/* ***HERO IMG*** */}

               <img src={man} alt="" className="man"/>
               <img src={back} alt="" className="man-back animation-3"/>

             {/* ***CALOREIES*** */}

             <div className="calories animation-4">
                <img src={calories} alt=""  />
               
               <div className="box">
               <p>Calories burned</p>
                <h2>220 kcal</h2>

               </div>
             </div>



                </div>

            </div>


        </>
    )
}
export default Nav;