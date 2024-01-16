import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
    const [user, setUser] = useState({ email: '', password: '' });
    const onChange = e => {
        if (document.getElementById(e.target.name + "Prompt").style.visibility === 'visible') document.getElementById(e.target.name + "Prompt").style.visibility = 'hidden'
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log("hello")
        if (!user.email) {
            document.getElementById('emailPrompt').style.visibility = "visible";
        }
        if (!user.password) {
            document.getElementById('passwordPrompt').style.visibility = "visible";
        }
        else {
            Swal.fire({
                title: "Logged In",
                text: "you are successfully logged in",
                icon: "success"
            });
        }
    }
    return (
        <div className='container mt-5 px-4'>
            <h3 className='mx-3 mb-3'>Sign in your account</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <input type="email" name="email" id="email" className="form-control px-3 py-2" value={user.email} onChange={onChange} placeholder='Email' style={{ borderRadius: "50px" }} />
                    <span className="form-label ms-3" id="emailPrompt" style={{ fontSize: ".8rem", color: "red", visibility: "hidden" }}>Email Required*</span>
                </div>
                <div className="mb-4">
                    <input type="password" name="password" id="password" className="form-control px-3 py-2" value={user.password} onChange={onChange} placeholder='Password' style={{ borderRadius: "50px" }} />
                    <span className="form-label ms-3" id="passwordPrompt" style={{ fontSize: ".8rem", color: "red", visibility: "hidden" }}>Password Required*</span>
                </div>
                <div className="d-grid gap-2 mb-4">
                    <button className="btn btn-primary" type="submit" style={{ borderRadius: "50px", background: "#317298" }}>Sign in</button>
                </div>
            </form>
            <div className="d-flex justify-content-center">
                <label className="form-label my-2">or Login with :</label>
            </div>
            <div className="d-flex justify-content-center">
                <div className="mx-2"><FcGoogle fontSize="2rem" /></div>
                <div className="mx-2"><FaFacebook color="blue" fontSize="2rem" /></div>
            </div>
            <div className="row">
                <div className="col-12 d-flex flex-column" style={{ height: "210px" }}>
                    <div className="mt-auto d-flex justify-content-center">Not registered ? <Link to="/app/register"> Register here</Link></div>
                </div>
            </div>
        </div>
    )
}
