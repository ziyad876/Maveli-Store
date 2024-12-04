import React from "react";

function Register(props){
        function handleSubmit(event) {
            event.preventDefault();
            props.REG(true);
            props.Gohome()   
        }
    
    return (
        <main className="form-signin text-center mt-5">
            <form onSubmit={()=>handleSubmit} action="http://localhost:4000/user/register" method="POST">
            <h1 className="h3 mb-3 fw-normal">Please Register here</h1>

            <div className="form-floating">
                <input type="text" className="form-control"  placeholder="username" name="username"/>
                <label>Username</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control"  placeholder="name@example.com" name="mail"/>
                <label>Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password" name="fpassword"/>
                <label>Password</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" placeholder="Confirm Password" name="cpassword"/>
                <label>Confirm Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
            <p className="mt-5 mb-3 text-muted">© 2017 2021</p>
            </form>
        </main>

    )
}

export default Register;