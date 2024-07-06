import left from "../Photos/left-img.png"
import upright from "../Photos/upright-img.png"
import mid from "../Photos/mid-img.png"
import downright from "../Photos/downright-img.png"
import tick from "../Photos/tick.png"
import adidas from "../Photos/adidas.png"
import nike from "../Photos/nike.png"
import nb from "../Photos/nb.png"


export default function Third() {
    return (
        <>
            <div className="third-box">
                <div className="l-zone">
                    <img src={left} alt="" className="img-1" />
                    <img src={upright} alt="" className="img-2" />
                    <img src={mid} alt="" className="img-3" />
                    <img src={downright} alt="" className="img-4 " />


                </div>

                <div className="r-zone">
                    <h2>SOME REASONS</h2>
                    <h1> <span>WHY</span> CHOOSE US?</h1>


                    <div className="details">
                        < div>
                            <h3> <img src={tick} alt="" /> <span>OVER 140+ EXPERT COACHS</span> </h3>
                            </div>
                        <div>
                            <h3> <img src={tick} alt="" /> <span>TRAIN SMARTER AND FASTER THAN BEFORE</span></h3>
                            </div>

                        <div>
                            <h3> <img src={tick} alt="" /> <span>1 FREE PROGRAM FOR NEW MEMBER</span></h3>
                            </div>
                        <div>
                            <h3> <img src={tick} alt="" /> <span>RELIABLE PARTNERS</span></h3>
                            </div>

                        <p>OUR PARTNERS</p>

                    </div>

                    <div className="icons"> <img src={nb} alt="" /> <img src={adidas} alt="" /> <img src={nike} alt="" />  </div>


                </div>

            </div>

        </>
    )
}
