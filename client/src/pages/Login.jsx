import { Typography } from "@material-tailwind/react";
import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userToken', data.token); // Store the token
        navigate('/dashboard'); // Navigate to a protected route
      } else {
        console.error('Login failed');
      }
    };
    return (
        <section className="h-screen flex justify-center items-center">

            <div className="max-w-md w-full px-4">
                <Typography color="blue-gray" className="mr-auto font-bold text-[25px] text-center">
                    Log In
                </Typography>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <TEInput
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            size="lg"
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <TEInput
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            size="lg"
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="inline-flex items-center">
                            <input
                                label="Remember Me"
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-primary px-5"
                            />
                            Remember Me
                        </label>

                    </div>
                    <div className="mb-6">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="mb-2 block w-full rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 active:bg-orange-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
                        >
                            Login
                        </button>
                        <p className="text-center text-orange-600 text-xs">
                            Create an account{" "}
                            <a
                                href="#!"
                                className="text-primary hover:text-primary-600"
                            >
                                Forgot password?
                            </a>
                        </p>
                    </div>
                </form>

            </div>
        </section>
    );
}