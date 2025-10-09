import { useState } from "react";
import "../../assets/page-auth.css";
import api from "../../config";
type User = {
    email: string;
    password: string;
}
function Login() {
    const [user, setUser] = useState<User>({email: "", password: ""});

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // alert("Form submitted successfully");
        // console.log(user);
        api.post("login", user)
        .then((res) => { 
            console.log(res.data);
            // if(res.data.error){
            //     alert(res.data.error);
            // }else{
            //     console.log(res.data);
            //     alert(res.data.success);
            // }
        })
        .catch((err) => {
            console.error(err);
        })
    }
  return (
    <>
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                  </span>
                  <span className="app-brand-text demo text-body fw-bolder">Sneat</span>
                </a>
              </div>
              <h4 className="mb-2">Welcome to Sneat! 👋</h4>
              <p className="mb-4">Please sign-in to your account and start the adventure</p>

              <form className="mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email or Username</label>
                  <input type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className="form-control" name="email-username" placeholder="Enter your email or username" autoFocus />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">Password</label>
                    <a href="auth-htmlForgot-password-basic.html">
                      <small>htmlForgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className="form-control" name="password" placeholder="············" aria-describedby="password" />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember-me" />
                    <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>

              <p className="text-center">
                <span>New on our platform?</span>
                <a href="auth-register-basic.html">
                  <span>Create an account</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login