import React from "react";

function Forms(){
    return  <div>
            <form action="http://localhost:4000/post/submit" method="POST" className="panelform container mt-3">
                <label>Item Name</label><br/>
                <input type="text" name="name" /><br/>
                <label>Item Offer</label><br/>
                <input type="number" name="offer" /><br/>
                <label>Item MRP</label><br/>
                <input type="number" name="mrp" /><br/>
                <label>Item Type</label><br/>
                <select name="type">
                    <option value="phone">Mobile Phone</option>
                    <option value="kitchen">Home Kitchen</option>
                    <option value="decoration">Decoration</option>
                    <option value="electronics">Electronics</option>
                    <option value="others">Others</option>
                </select><br/>
                <label>Item Image</label><br/>
                <input type="file" name="img" /><br/>
                <button className="btn btn-success" type="submit">Submit</button>
            </form>
            </div>
}

export default Forms;