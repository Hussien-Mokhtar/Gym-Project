import github from "../Photos/github.png"
import insta from "../Photos/instagram.png"
import linked from "../Photos/linkedin.png"
import clup from "../Photos/fitclup-logo.png"

export default function Last() {
  return (
    <>
      <div className="container">
        <div className="blur blur-end"></div>
        <div className="last ">
     <img src={github} alt="" />
     <img src={insta} alt="" />
     <img src={linked} alt="" />
        </div>
        <div className="end">
            <img src={clup} alt="" />

        </div>
      </div>
    </>
  )
}
