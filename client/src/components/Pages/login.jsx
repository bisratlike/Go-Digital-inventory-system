import { Typography } from "@material-tailwind/react";
import React from "react";
import { TEInput, TERipple } from "tw-elements-react";

export default function Login() {
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

                            placeholder="Email"
                            size="lg"
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <TEInput
                            type="password"

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
                            className="mb-2 block w-full rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 active:bg-orange-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
                        >
                            Action
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
