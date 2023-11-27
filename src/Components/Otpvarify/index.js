import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
// import axios from "axios";

import './index.css'

const Otpvarify = props => {
    const navigate= useNavigate()
    console.log(props,"propsssssssssssss")
    const [varifyOtp, setVarifyOtp] = useState({ otp: "" });

    const handlerInput = (event) => {
        setVarifyOtp({ otp: event.target.value });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(varifyOtp.otp)

        try {
            const storedOtp = localStorage.getItem('otp'); // Retrieve data by key
            if (storedOtp) {
                const parsedOtp = JSON.parse(storedOtp); // Parse JSON data
                console.log("parsedOtp", parsedOtp)
                if (varifyOtp.otp === parsedOtp) {
                    navigate('/',{replace:true})
                }
            }

        } catch (error) {
            console.error("Otp error:", error);
        }
    }

    return (
        <>
            <div className='login-main-home-container'>
                <div className='bg-login'>
                    <form className='login-home-left-cont' onSubmit={submitHandler}>
                        <p className='varify-description'>Please enter the OTP we've sent you on your mobile number</p>
                        <p className='varify-description-num'>9110189245 <Link to="/login" className="edit">Edit</Link></p>
                        <input
                            type="number"
                            className='otp-input'
                            name="otp"
                            id="otp"
                            value={varifyOtp.otp}
                            onChange={handlerInput}
                            required
                        />

                        <button className='continue-btn' type="submit">Verify</button>

                    </form>

                </div>
                <div className='bg-login-rigth-cont'>X</div>
            </div>
        </>
    )
}

export default Otpvarify