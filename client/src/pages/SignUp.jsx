import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7 ">Sign Up</h1>
      <form className="flex flex-col gap-4  ">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg "
          id="Username"
        />
        <input
          type="text"
          placeholder="Email"
          className="border p-3 rounded-lg "
          id="Email"
        />
        <input
          type="text"
          placeholder="Password"
          className="border p-3 rounded-lg "
          id="Password"
        />

        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
          Register
        </button>
      
      </form>
      <div className="flex gap-1 mt-5">
      <p className="text-gray-900  ">Have an Account?  </p> 
      <Link to={"/signin"} className="hover:underline text-blue-700"><span>Sign in</span></Link>
      
      </div>
    </div>
  );
};

export default SignUp;
