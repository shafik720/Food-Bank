import { Helmet } from "react-helmet-async";
import './Signup.css';
import {auth} from "../../../Utilites/Firebase Auth/firebase.inti";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;
    const [rePassword, setRePassword] = useState('') ;
    const [name, setName] = useState('') ;

    // --- creating a new user with react firebase hook
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);

    const handleCreateUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="signup-div flex flex-col justify-center items-center md:py-40  ">
            <Helmet>
                <title>Sign Up</title>
                <link rel="icon" type="image/svg+xml" href="https://i.ibb.co/RcYJVv5/plate-1.png" />
            </Helmet>
            <div className="form-div border border-slate-50 p-8 text-white md:w-[450px] lg:w-[450px] w-11/12">
                <h2 className="text-4xl text-center mb-10"> Sign Up </h2>

                {/* --- Sign Up Form --- */}
                <form onSubmit={handleCreateUser} className="form-fields flex flex-col gap-y-5 mt-3 text-black">

                    {/* --- Name Field --- */}
                    <input required  className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="text" name="" id="" placeholder="Your Name" onChange={ e => setName(e.target.value)}  />

                    {/* --- Email Field --- */}
                    <input required className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="email" name="email" id="" placeholder="Your Email" onChange={ e => setEmail(e.target.value)} />

                    {/* --- Password Field --- */}
                    <input required className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="password" name="" id="" placeholder="Password" onChange={ e => setPassword(e.target.value)}  />

                    {/* --- Confirm Password Field --- */}
                    <input className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="password" name="" id="" placeholder="Confirm Password" onChange={ e => setRePassword(e.target.value)}  />

                    {/* --- Submit Button --- */}
                    <button type="submit" className="btn btn-success" >Sign Up</button>
                </form>
            </div>
            <h2 className="text-white my-8">Or  Sign In Using</h2>

            {/* --- Social Sign In Icons --- */}
            <div className="social-button flex gap-7 ">
                <div className="social-icons border border-slate-50 w-14 h-14 flex justify-center items-center cursor-pointer bg-white">
                    <img style={{ width: '42px' }} src="https://i.ibb.co/0sh2Gtn/google-1.png" alt="" />
                </div>
                <div className="social-icons border border-slate-50 w-14 h-14 flex justify-center items-center  cursor-pointer bg-white">
                    <img style={{ width: '42px' }} src="https://i.ibb.co/tB9HhgW/facebook.png" alt="" />
                </div>
                <div className="social-icons border border-slate-50 w-14 h-14 flex justify-center items-center cursor-pointer bg-white">
                    <img style={{ width: '42px' }} src="https://i.ibb.co/xsmwmm7/github.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Signup;