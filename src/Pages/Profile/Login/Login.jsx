import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { auth } from "../../../Utilites/Firebase Auth/firebase.inti";
import { errorMsg, successMsg } from "../../../Utilites/PopupMsg/PopupMsg";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;

    // --- Loading spinner
    const spinner = <ClipLoader color="white" size={25} />

    // --- going to sign up page
    const navigate = useNavigate();


    // --- Login functionality
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password) ; 
    }

    // --- google login
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    // --- facebook login
    const [signInWithFacebook] = useSignInWithFacebook(auth);

    // --- github login
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);


    useEffect(()=>{
        if((!error && user?.user?.email)){
            console.log(user);
            successMsg('Logged in Successfully !');
        }
        if(loading){
            console.log(loading);
        }
        if(error || error2 || error3){
            errorMsg(error?.message || error2?.message || error3?.message);
        }
        if(user2){
            console.log(user2);
        }
    },[user, loading, error, user2, loading2, error2, user3, loading3, error3])

    return (
        <div className="signup-div flex flex-col justify-center items-center md:py-40  ">
        <Helmet>
            <title>Login || FoodBank</title>
            <link rel="icon" type="image/svg+xml" href="https://i.ibb.co/RcYJVv5/plate-1.png" />
        </Helmet>
        <div className="form-div border border-slate-50 p-8 text-white md:w-[450px] lg:w-[450px] w-11/12">
            <h2 className="text-4xl text-center mb-10"> Login </h2>

            {/* --- Login Form --- */}
            <form onSubmit={handleLogin} className="form-fields flex flex-col gap-y-5 mt-3 text-black">

                {/* --- Email Field --- */}
                <input required className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="email" name="email" id="" placeholder="Your Email" onChange={ e => setEmail(e.target.value)} />

                {/* --- Password Field --- */}
                <input required className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="password" name="" id="" placeholder="Password" onChange={ e => setPassword(e.target.value)}  />

                {/* --- Submit Button --- */}
                <button disabled={loading} type="submit" className={`${!loading ? 'btn btn-success' : 'disabledButton btn'} ` } > {loading ? spinner : 'Login'} </button>
            </form>
            <p className="mt-7">Don't have an account ? <span onClick={()=>navigate('/signup')} className="cursor-pointer text-blue-500" draggable>Sign Up</span> here </p>
        </div>
        <h2 className="text-white my-8">Or  Sign In Using</h2>

        {/* --- Social Sign In Icons --- */}
        <div className="social-button flex gap-7 ">

            {/* --- Google Sign In --- */}
            <div onClick={handleGoogleSignIn} className="social-icons border border-slate-50 w-14 h-14 flex justify-center items-center cursor-pointer bg-white">
                <img style={{ width: '42px' }} src="https://i.ibb.co/0sh2Gtn/google-1.png" alt="" />
            </div>

            {/* --- facebook sign in --- */}
            <div onClick={()=>signInWithFacebook()} className="social-icons border border-slate-50 w-14 h-14 flex justify-center items-center  cursor-pointer bg-white">
                <img style={{ width: '42px' }} src="https://i.ibb.co/tB9HhgW/facebook.png" alt="" />
            </div>

            {/* --- Github Sign in */}
            <div onClick={()=>signInWithGithub()} className="social-icons border border-slate-50 w-14 h-14 flex justify-center items-center cursor-pointer bg-white">
                <img style={{ width: '42px' }} src="https://i.ibb.co/xsmwmm7/github.png" alt="" />
            </div>
        </div>
    </div>
    );
};

export default Login;