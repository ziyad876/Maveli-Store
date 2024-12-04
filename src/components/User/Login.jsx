import React from "react";

function Login(){
    return <main class="form-signin text-center mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="lgkbpg"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="0417oy"/>
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit" fdprocessedid="mgvc">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2024–2025</p>
    </form>
  </main>
}

export default Login;