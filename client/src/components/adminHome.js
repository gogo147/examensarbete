import React, { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AdminHome({ userData }) {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "george") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:8080/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

    const [data, setData] = useState([])

    useEffect(() => {
       getAllUser()
    }, [])

    const getAllUser = () => {
      fetch("http://localhost:8080/getAllUser", {
        method: "GET",
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData")
        setData(data.data)
      })
    }
    
  
  const next = () => {
    window.location.href = "./";
  };

  const deleteUser = (id,name) => {
    if(window.confirm(`Are you sure you want to delete ${name}`)){

      fetch("http://localhost:8080/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data)
          getAllUser()
        })
  
    } else {

    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{ width: "auto" }}>
        <h3>Welcome Admin</h3>
            <table style={{ width: 500 }}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Type</th>
                    <th>Delete</th>
                </tr>
                {data.map((i) => {
                    return(
                        <tr>
                            <td>{i.fname}</td>
                            <td>{i.email}</td>
                            <td>{i.userType}</td>
                            <td>
                              <FontAwesomeIcon 
                                icon={faTrash} 
                                onClick={() => deleteUser(i._id, i.fname)} 
                              />
                            </td>
                        </tr>
                    )
                })}
            </table>
            <br />
          <button onClick={next} className="btn btn-primary">
            Next
          </button> 
          <br /> <br />
          <form onSubmit={handleSubmit}>
          <h3>Add Account</h3>
          <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
         
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
  
      </div>
    </div>
  );
}
