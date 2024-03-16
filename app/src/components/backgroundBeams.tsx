"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { IconBrandGoogle} from "@tabler/icons-react";
import { LampContainer } from "./ui/lamp";

export function BackgroundBeamsDemo() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral relative flex flex-col items-center justify-center antialiased">

      <h1 className="md:text-7xl text-3xl lg:text-9l font-bold text-center text-white relative z-20">
        Welcome to NewsPort
      </h1>
      <h1 className="md:text-7xl text-3xl lg:text-9l font-bold text-center text-white relative z-20">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Signup with Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
      </h1>
      <BackgroundBeams />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};