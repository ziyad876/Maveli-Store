import React from "react";
import MainBody from "./MainBody";
import MSProducts from "./Prodects";

function Home(props){
    const items = props.items
    return <div>
        <MainBody/>
        <MSProducts items={items} />
    </div>
}
export default Home;