import React from "react";

function MSProducts(props){

    const data = props.items;
    const phones = data.filter((item) => item.type === "phone");
    const home = data.filter((item) => item.type === "kitchen");
    const electronics = data.filter((item) => item.type === "electronics");
    const decoration = data.filter((item) => item.type === "decoration");
    const others = data.filter((item) => item.type === "others");

    return <div className="MSPD1 container">
        <h1>Phones</h1>   
        {phones.map((data, index)=>{
             return (
                <div className="MSPD2" key={index}>
                    <img src={data.img} alt="Girl in a jacket"/>
                    <h4>{data.name}</h4>
                    <div className="PSAOFF">
                        <p className="PSAR"> {data.offer}% off </p><p>${data.price}  <s className="smalls">${data.mrp}</s></p>
                    </div>
                </div>
            )
    })}
        <h1>electronics</h1>
        {electronics.map((data, index)=>{
            return (
               <div className="MSPD2" key={index}>
                   <img src={data.img} alt="Girl in a jacket"/>
                   <h4>{data.name}</h4>
                   <div className="PSAOFF">
                       <p className="PSAR"> {data.offer}% off </p><p>${data.price}  <s className="smalls">${data.mrp}</s></p>
                   </div>
               </div>
           )
   })}
   <h1>Home</h1>
        {home.map((data, index)=>{
            return (
               <div className="MSPD2" key={index}>
                   <img src={data.img} alt="Girl in a jacket"/>
                   <h4>{data.name}</h4>
                   <div className="PSAOFF">
                       <p className="PSAR"> {data.offer}% off </p><p>${data.price}  <s className="smalls">${data.mrp}</s></p>
                   </div>
               </div>
           )
   })}
   <h1>decoration</h1>
        {decoration.map((data, index)=>{
            return (
               <div className="MSPD2" key={index}>
                   <img src={data.img} alt="Girl in a jacket"/>
                   <h4>{data.name}</h4>
                   <div className="PSAOFF">
                       <p className="PSAR"> {data.offer}% off </p><p>${data.price}  <s className="smalls">${data.mrp}</s></p>
                   </div>
               </div>
           )
   })}
   <h1>Others</h1>
        {others.map((data, index)=>{
            return (
               <div className="MSPD2" key={index}>
                   <img src={data.img} alt="Girl in a jacket"/>
                   <h4>{data.name}</h4>
                   <div className="PSAOFF">
                       <p className="PSAR"> {data.offer}% off </p><p>${data.price}  <s className="smalls">${data.mrp}</s></p>
                   </div>
               </div>
           )
   })}
    </div>
}

export default MSProducts;