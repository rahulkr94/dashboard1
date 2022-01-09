import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { tempUsersList } from '../../service/data';
import './login.css'

const Login = () => {
    const appContext = useContext(AppContext);
    let userList = tempUsersList;
    const history = useHistory();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })
    const [errorMessage, setErrorMessage] = useState("");

    // handle login submit
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if(userInfo.email === "" || userInfo.password === "") {
                setErrorMessage("Enter email or password");
                return;
            }
            if(userInfo.email && userInfo.password) {
                let userObj = userList.find(r => r.email === userInfo.email);
                if(userObj) {
                    if(userObj.email === userInfo.email && userObj.password === userInfo.password) {
                        appContext.setUserInfo(userObj);
                        history.push('./dashboard/mailbox');
                    } else {
                        setErrorMessage("Incorrect email or password!");
                    }
                } else {
                    setErrorMessage("User not found!");
                }
            }
        } catch (error) {
            console.error("Error occurred while handleSubmit--", error);
        }
    }


    return <div className="login">
        <div className="login-form-body">
            <div className="login-form">
                <form onSubmit={handleSubmit} autoComplete={false}>
                    <div className="login-header pl20 aic">Login</div>
                    <div className="p20">
                        <div className="form-group">
                            <label>Email Id</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={(e) => {
                                    setUserInfo({...userInfo, "email": e.target.value})
                                    if(errorMessage) setErrorMessage("");
                                }}
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                onChange={(e) => {
                                    setUserInfo({...userInfo, "password": e.target.value})
                                    if(errorMessage) setErrorMessage("");
                                }}
                                placeholder="Password"
                            />
                        </div>

                        <div className="small-text text-danger py5 h25">{errorMessage}</div>
                        <button type="submit" className="btn btn-block bc-work cfff">Login</button>

                    </div>
                    
                </form>
            </div>
        </div>
    </div>;
}
 
export default Login;