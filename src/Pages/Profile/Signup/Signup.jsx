import { Helmet } from "react-helmet-async";
import './Signup.css' ; 

const Signup = () => {
    return (
        <div className="signup-div flex flex-col justify-center items-center md:py-40  ">
            <Helmet>
                <title>Sign Up</title>
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            </Helmet>
            <div className="form-div border border-slate-50 p-8 text-white lg:w-[450px]">
                <h2 className="text-4xl text-center mb-10"> Sign Up </h2>
                <div className="form-fields flex flex-col gap-y-5 mt-3 text-black">
                    <input className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="text" name="" id="" placeholder="Your Name" />
                    <input className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="email" name="" id="" placeholder="Your Email" />
                    <input className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="password" name="" id="" placeholder="Password" />
                    <input className="max-w-full py-2 px-4 rounded text-lg focus:outline-emerald-500" type="password" name="" id="" placeholder="Confirm Password" />
                    <button className="btn btn-success">Sign Up</button>
                </div>
            </div>
            <h2 className="text-white my-8">Or  Sign In Using</h2>

            {/* --- Social Sign In Icons --- */}
            <div className="social-button flex gap-7 ">
                <div className="social-icons border border-slate-50 py-4 px-5 cursor-pointer">
                    <img style={{width:'42px'}} src="https://i.ibb.co/0sh2Gtn/google-1.png" alt="" />
                </div>
                <div className="social-icons border border-slate-50 py-4 px-5 cursor-pointer">
                    <img style={{width:'42px'}} src="https://i.ibb.co/tB9HhgW/facebook.png" alt="" />
                </div>
                <div className="social-icons border border-slate-50 py-4 px-5 cursor-pointer">
                    <img style={{width:'42px'}} src="https://i.ibb.co/xsmwmm7/github.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Signup;