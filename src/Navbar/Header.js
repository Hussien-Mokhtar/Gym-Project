import logo from "../Photos/fitclup-logo.png"
 function Header() {
  return (
    <>
    <div className="header">

    
<img src={logo} alt="" className="logo" />

<ul className="header-menu">

  <li> Home</li> 
<li> Programs</li>
 <li>Why us</li>
<li>Plans</li>
<li>Testimonials</li>



</ul>
     
    </div>        
   
    </>

  )
}
export default Header;