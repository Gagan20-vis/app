import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const [user, setUser] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();
  const onChange = (e) => {
    if (document.getElementById(e.target.name + "Prompt").style.visibility === 'visible') document.getElementById(e.target.name + "Prompt").style.visibility = 'hidden'
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (!user.email) {
      document.getElementById('emailPrompt').style.visibility = "visible";
    }
    if (!user.name) {
      document.getElementById('namePrompt').style.visibility = "visible";
    }
    if (!user.mobile) {
      document.getElementById('mobilePrompt').style.visibility = "visible";
    }
    else {
      axios.post(`https://sellpe.in/mykisan/api/activity.php?method=register&name=${user.name}&email=${user.email}&mobile=${user.mobile}`)
        .then((res) => {
          if (res.status == 2) {
            Swal.fire({
              title: "Ohh!",
              text: res.message,
              icon: "warning"
            });
          }
          else if (res.status == 1) {
            Swal.fire({
              title: "Account Created",
              text: "your account created",
              icon: "success"
            });
            navigate('/profile');
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  return (
    <div className='container mt-5 px-4'>
      <h3 className='mx-3 mb-3'>Sign in your account</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input type="text" className="form-control px-3 py-2" id="name" name="name" value={user.name} onChange={onChange} placeholder='name' style={{ borderRadius: "50px" }} />
          <span className="form-label ms-3" id="emailPrompt" style={{ fontSize: ".8rem", color: "red", visibility: "hidden" }}>Email Required*</span>

        </div>
        <div className="mb-4">
          <input type="email" className="form-control px-3 py-2" id="email" name="email" value={user.email} onChange={onChange} placeholder='email' style={{ borderRadius: "50px" }} />
          <span className="form-label ms-3" id="namePrompt" style={{ fontSize: ".8rem", color: "red", visibility: "hidden" }}>Name Required*</span>

        </div>
        <div className="mb-4">
          <input type="text" className="form-control px-3 py-2" id="mobile" name="mobile" value={user.mobile} onChange={onChange} placeholder='mobile' style={{ borderRadius: "50px" }} />
          <span className="form-label ms-3" id="mobilePrompt" style={{ fontSize: ".8rem", color: "red", visibility: "hidden" }}>Mobile number required*</span>

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
        <div className="col-12 d-flex flex-column" style={{ height: "120px" }}>
          <div className="mt-auto d-flex justify-content-center">Already registered ? <Link to="/login"> Login here</Link></div>
        </div>
      </div>
    </div>
  )
}
