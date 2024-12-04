import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Home from "./Home";
import Forms from "./Form";
import Register from "./User/Register";
import Login from "./User/Login";
import axios from "axios";
import Header from "./Header"

function Mainjs(){

    const API_URL = "http://localhost:4000";
    const [login, setLogin] = useState(false)
    const [Auth, setAuth] = useState("Home")
    const [items, setItems] = useState([]);
    const [page, setPage] = useState("home")

    function Setpages(){
        if(Auth === "Home"){
            return(
              <div className="App">
                <Header GO={ChangePage} isLoggedIn={login} Auth={Auths}/>
                {checkpage()}
                <Footer />
              </div>
            )}
            if(Auth === "signup"){
            return(
                <div className="App">
                    <div className="container">
                        <Register REG={Regdata} Gohome={navigateHome}/>
                    </div>
                </div>
            )}
            if(Auth === "login"){
              return(
                <div className="App">
                    <div className="container">
                        <Login/>
                    </div>
                </div>
            )}
    }
    function navigateHome(){
        setAuth("Home")
    }
    function Auths(data){
        setAuth(`${data}`)
      }
    
      function ChangePage(data){
        setPage(`${data}`)
      }
      function Regdata(){
        setLogin(true)
      }
      function checkpage(){
        if(page === "home"){
        return <Home items={items}/>
        }
        if(page === "panel"){
        return <Forms/>
        }
      }

      useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`${API_URL}/posts`);
            setItems(response.data);
          } catch (error) {
            console.error("Error fetching posts:", error);
          }
        }
        fetchData();
      });

    return Setpages()
}

export default Mainjs;