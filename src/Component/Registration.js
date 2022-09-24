import React, { useState } from 'react'
import { Container, Grid, Paper, TextField } from '@mui/material';
import axios from 'axios';

function Registration() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    async function SignUp () {


        try{
            var authOptions = {
                method: 'POST',
                url: `http://52.33.80.175:1337/user/email/register`,
                data: { fullName: name , email, password },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            };
            return await axios(authOptions).then(res=>{
                console.log(res)
            })
        } catch(err){
            console.log(err)
        }
        


        // let item = { name, email, password }
        // let result = await fetch("http://52.33.80.175:1337/user/email/register", {
        //     method: 'POST',
        //     body: JSON.stringify(item)
        // })
        // result = await result.json()
        // console.warn("result", result)





    }

    // const handleVerifyNumber = (e) => {
    //     e.preventDefault();
    //     let requestData = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         moneyProviderId: provider,
    //         moneyProviderMobile: mobile,
    //         countryCode: countryCode,
    //         password: password,
    //     };

    //     SignUpAPI(requestData)
    //         .then((res) => {
    //             if (res && res.status === 200 && res.data.success) {
    //                 console.log("Sign up done")
    //             }
    //             else {
    //                 console.log("Something_went_wrong");
    //             }
    //         })
    //         .catch((e) => console.log(e));
    // }





return (
    <div>
        <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="fullName" className="form-control form-control-lg" onChange={(e) => setName(e.target.value)} value={name} />
                                            <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="email" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} value={email} />
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="password" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} value={password} />
                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                        </div>
                                        <div className="form-check d-flex justify-content-center mt-5">
                                            <label className="form-check-label" htmlFor="form2Example3g">
                                                I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                            </label>
                                            <input className="ml-3" type="checkbox" defaultValue id="form2Example3cg" />
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <button type="button" onClick={SignUp} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>
                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/Login/login.html" className="fw-bold text-body"><u>Login here</u></a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
}
export default Registration

