import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-bgColor w-screen h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex">
            <span className="text-4xl sm:text-2xl leading-1 font-semibold text-[#515a78] mr-12 sm:mr-6">
              1
            </span>
            <p className="font-source text-5xl 2xl:text-4xl xl:text-4xl lg:text-2xl sm:text-xl font-semibold leading-1 text-[#848c97] ">
              //Hello world!
            </p>
          </div>
          <div className="flex">
            <span className="text-4xl sm:text-2xl leading-1 font-semibold text-[#515a78] mr-12 sm:mr-6">
              2
            </span>
            <p className="font-source text-5xl 2xl:text-4xl xl:text-4xl lg:text-2xl sm:text-xl font-semibold leading-1 text-[#848c97] ">
              <span className="text-[#aef1ff]">I am Emran</span>
              <span className="text-[#e8a3ec]"> = </span>
              <span className="text-[#ffd79c] before:content-['<'] after:content-['>']">
                Software Engineer
              </span>
              <a href="https://ollyo.com" className="text-[#e8a3ec]">
                @ Ollyo
              </a>
              <span className="text-white">;</span>
            </p>
          </div>
          <div className="flex">
            <span className="text-4xl sm:text-2xl leading-1 font-semibold text-[#515a78] mr-12 sm:mr-6">
              3
            </span>
            <p className="font-source text-5xl 2xl:text-4xl xl:text-4xl lg:text-2xl sm:text-xl font-semibold leading-1">
              <span className="text-[#aef1ff]">In love with </span>
              <span className="text-white"> coding </span>
              <span className="text-[#e8a3ec]"> = </span>
              <span className="text-[#e8a3ec]"> True </span>
            </p>
          </div>
          <div className="flex">
            <span className="text-4xl sm:text-2xl leading-1 font-semibold text-[#515a78] mr-12 sm:mr-6">
              4
            </span>
            <p className="font-source text-5xl 2xl:text-4xl xl:text-4xl lg:text-2xl sm:text-xl font-semibold leading-1 text-[#848c97]">
              <span className="text-[#e8a3ec]">Constantly </span>
              <span className="text-[#aef1ff]">commiting</span>
              <span className="text-[#e8a3ec]">(!)</span>
            </p>
          </div>
          <div className="flex">
            <span className="text-4xl sm:text-2xl leading-1 font-semibold text-[#515a78] mr-12 sm:mr-6">
              5
            </span>
            <p className="font-source text-5xl 2xl:text-4xl xl:text-4xl lg:text-2xl sm:text-xl font-semibold leading-1 text-[#848c97] flex">
              <span className="text-[#ffd79c]">Connect </span>
              <span className="text-[#aef1ff] ml-8 sm:ml-4"> = </span>
              <a className="mx-8 sm:mx-4" href="https://github.com/emranweb">
                <FaGithub color="#aef1ff" />
              </a>
              <a href="https://www.linkedin.com/in/emranweb">
                <FaLinkedinIn color="#e8a3ec" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
