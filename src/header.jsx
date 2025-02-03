import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';


function Header() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const [search, setsearch] = useState("")
  const navigate = useNavigate()

  function products() {
    if (search == "") {
      return
    }
    else {
      navigate(`/search/${search}`)
     }}


   function home(){
      navigate("/")
    }
   function electronics(){
    navigate(`/electronic`)
   }
   function jewelery(){
    navigate("/jewelery")
   }
   function men(){
    navigate("/mens clothing ")
   }
   function women(){
    navigate("/womens clothing")
   }

  return (
    <>
      <div style={{height:"49px"}} className='d-md-none bg-dark sticky-top  d-flex' >
        <Offcanvas show={shows}  style={{ width: "60%" }} onHide={handleCloses}>
          <Offcanvas.Header  closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <div className=' d-flex justify-content-center row m-auto'>
              <div className='m-auto text-center' >
                 <a className="nav-link m-3 " onClick={home} >Home</a>
                <a className="nav-link m-3 " onClick={electronics} >Electronics</a>
                <a className="nav-link m-3 " onClick={jewelery} >Jewelery</a>
                <a className="nav-link m-3 " onClick={men}>Men's</a>
                <a className="nav-link m-3 " onClick={women} >Women's</a>
              </div>

          
            </div>
          </Offcanvas.Body>
        </Offcanvas>


        <Button variant="dark" className=' border-0 ' style={{ width: "100px",height:"48px" }} onClick={handleShows}>
        <img width="42" height="40" src="https://img.icons8.com/fluency/48/menu--v1.png" alt="menu-v1"/>
        </Button>
        <input style={{height:"48px"}} onChange={(e) => setsearch(e.target.value.toLowerCase())} className='form-control '  ></input>
        <button style={{height:"48px"}} onClick={products} className='btn btn-dark  '>search</button>
      </div>

      <nav className=" middle navbar navbar-expand-md sticky-top bg-black  ">
        <div className='container '>
           <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
            <a className="nav-link m-3 text-light" onClick={home}  >Home</a>
            <a className="nav-link m-3 text-light" onClick={electronics}>Electronics</a>
            <a className="nav-link m-3 text-light" onClick={jewelery} >Jewelery</a>
            <a className="nav-link m-3 text-light" onClick={men} >Men's</a>
            <a className="nav-link m-3 text-light" onClick={women}>Women's</a>


            <div className='d-flex '>

              <input onChange={(e) => setsearch(e.target.value.toLowerCase())} className='form-control' ></input>
              <button onClick={products} className='btn btn-dark '>search</button>
            </div>
          </div>

        </div>

      </nav>
    </>
  );
}

export default Header;
