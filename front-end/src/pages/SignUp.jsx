import Input from "../components/signup/Input";
import Button from "../components/signup/Button";
import { Link } from "react-router-dom";
import Google from "/google.svg";
import "./Login.css";
const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col gap-5 items-center -top-7 justify-center md:h-screen sm:bg-white md:bg-white">
          <div className="flex flex-col mt-10 md:mt-0 z-20 bg-white rounded-md flex-wrap justify-center items-center shadow-xl p-8 border-[1px]">
            <div
              to={"/"}
              className="self-center whitespace-nowrap text-sm sm:text-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 px-5 py-2 w-32 text-center rounded-lg"
            >
              AsBlog
            </div>
            <h1 className="text-center pt-2 font-normal py-4">
              Welcome back on AsBlog. Sign up for new registration!
            </h1>
            <form className="flex flex-col flex-wrap justify-center items-start">
              <Input name={"Username"} placeHolder={"amit1234"} type={"text"} />
              <Input
                name={"Email"}
                placeHolder={"Someone@gmail.com"}
                type={"email"}
              />
              <Input
                name={"Password"}
                placeHolder={"*******"}
                type={"password"}
              />
              <Button text={"Sign in"} type={"submit"} />

              <p className="text-center w-full p-2">Or Continue with</p>
              <div className="flex justify-center items-center gap-4 w-full p-2 flex-wrap">
                <img
                  src={Google}
                  alt={"google"}
                  className="p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg hover:cursor-pointer bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 "
                />
              </div>
              <p className="text-center w-full p-2">
                Already have an account?{" "}
                <span className="text-indigo-700">
                  <Link>Sign In</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
