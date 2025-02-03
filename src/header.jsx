import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useFilter } from './rotes';
import { useNavigate } from 'react-router-dom';


function Header() {
  const { setMin, setMax, filter } = useFilter(); // Use the hook

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
                <li> <a className="nav-link m-3 " onClick={home} >Home</a></li>
                <a className="nav-link m-3 " onClick={electronics} >Electronics</a>
                <a className="nav-link m-3 " onClick={jewelery} >Jewelery</a>
                <a className="nav-link m-3 " onClick={men}>Men's</a>
                <a className="nav-link m-3 " onClick={women} >Women's</a>
              </div>

              <div className='m-auto text-center'>
                <form  >
                  <label htmlFor="min " >min value</label>
                  <input type='number' className='form-control ' placeholder='0' min={0} max={1000} onChange={(e) => setMin(e.target.value)} id='min'></input>
                  <label htmlFor="max" >max value</label>
                  <input type='number' className='form-control' placeholder='1000' min={0} max={1000} onChange={(e) => setMax(e.target.value)} id='max' ></input>
                  <button type='submit' className='ms-3 mt-3 btn btn-outline-dark' style={{ width: "60px" }} onClick={filter}>Filter</button>
                </form>
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


          <Offcanvas show={show}  className="" onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <div className='d-flex justify-content-center '>

                <form className='d-flex' >
                  <label htmlFor="min" className=' m-2'>min</label>
                  <input type='number' className='form-control' placeholder='0' min={0} max={1000} onChange={(e) => setMin(e.target.value)} style={{ width: "70px" }} id='min'></input>
                  <label htmlFor="max" className=' m-2'>max</label>
                  <input type='number' className='form-control' placeholder='1000' min={0} max={1000} onChange={(e) => setMax(e.target.value)} id='max' style={{ width: "70px", marginLeft: "5px" }}></input>
                  <button type='submit btn' className='btn btn-outline-dark ms-2' style={{ width: "90px" }} onClick={filter}>Filter</button>
                </form>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
            <Button variant="dark" onClick={handleShow}>
              Setting
            </Button>
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
