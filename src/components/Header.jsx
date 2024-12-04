import React, { useEffect, useState } from "react";
import axios from "axios";

  function Header(props){

    const [username, setUsername] = useState("Guest")

    const API_URL = "http://localhost:4000";
    const id = 1;
    
    const isLoggedIn = props.isLoggedIn;
    useEffect(() => {
      if (isLoggedIn && id) {
        const fetchUserInfo = async () => {
          try {
            const response = await axios.get(`${API_URL}/filter/${id}`);
            console.log(response)
            setUsername(response.data.username || "Guest"); // Default to "Guest" if no username found
          } catch (error) {
            console.error("Error fetching user info:", error);
            setUsername("Guest"); // Handle errors gracefully
          }
        };
  
        fetchUserInfo();
      }
    }, [isLoggedIn, id]);

    function setState(data){
      props.GO(data)
    }

    function setAuth(data){
      props.Auth(data)
    }
    return isLoggedIn ? (<div>
          <header>
          <div className="px-3 py-2 bg-dark text-white">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket-fill HRicon" viewBox="0 0 16 16">
                    <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                  </svg>
                  <h1>Maveli Store</h1>
                </a>
      
                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <li>
                    <button href="/home" onClick={() => setState("home")} className="nav-link text-secondary">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#home"></use></svg>
                      Home
                    </button>
                  </li>
                  <li>
                    <button href="#boot" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#table"></use></svg>
                      Orders
                    </button>
                  </li>
                  <li>
                    <button href="/post" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#grid"></use></svg>
                      Products
                    </button>
                  </li>
                  <li>
                    <button href="/panel" onClick={() => setState("panel")} name="panel" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#grid"></use></svg>
                      Admin Panel
                    </button>
                  </li>
                  <li>
                    <button href="#boot" onClick={() => setState("home")} className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#people-circle"></use></svg>
                      Customers Service
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-3 py-2 border-bottom mb-3">
            <div className="container d-flex flex-wrap justify-content-center">
              <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
              </form>
              <div className="text-end mt-2">
                <h6>{username}</h6>
              </div>
            </div>
          </div>
        </header>
      </div>) 
      : (<div>
          <header>
          <div className="px-3 py-2 bg-dark text-white">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket-fill HRicon" viewBox="0 0 16 16">
                    <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                  </svg>
                  <h1>Maveli Store</h1>
                </a>

                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <li>
                    <button href="/home" onClick={() => setState("home")} className="nav-link text-secondary">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#home"></use></svg>
                      Home
                    </button>
                  </li>
                  {/* <li>
                    <button href="#boot" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#table"></use></svg>
                      Orders
                    </button>
                  </li>
                  <li>
                    <button href="/post" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#grid"></use></svg>
                      Products
                    </button>
                  </li> */}
                  {/* <li>
                    <button href="/panel" onClick={() => setState("panel")} name="panel" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#grid"></use></svg>
                      Admin Panel
                    </button>
                  </li> */}
                  <li>
                    <button href="#boot" onClick={() => setState("home")} className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#people-circle"></use></svg>
                      Customers Service
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-3 py-2 border-bottom mb-3">
            <div className="container d-flex flex-wrap justify-content-center">
              <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
              </form>

              <div className="text-end">
                <button type="button" onClick={() => setAuth("login")} className="btn btn-light text-dark me-2">Login</button>
                <button type="button" onClick={() => setAuth("signup")} className="btn btn-primary">Sign-up</button>
              </div>
            </div>
          </div>
        </header>
      </div>) 
    } 

export default Header;