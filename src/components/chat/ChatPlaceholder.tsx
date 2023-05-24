import React from "react";
import {useState} from "react"
import AddTokenModal from "./../auth/AddTokenModal";
import Link from "next/link";
import GithubStar from "./../misc/GithubStar";
import Guide from "../ModalGuide/Guide";
import Example from "./CodeDownload";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  const [showPopup, setShowPopup] = useState(false);



  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">AG-BOT</h1>
       
       
       

        <div className="p-4 mb-8">
          {/* <GithubStar /> */}
          Your Problem Solver and Idea Generator
        </div>
          <p className="mt-4 mx-6 text-lg">
          A GPT AI that can help you write codes, gave idea, and many more
        </p>
        <div className="m-6 flex items-center justify-center">
        <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-neutral-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 sm:ml-2 sm:w-auto"
                onClick={() => setShowPopup(true)}
              >
               
                <span>Guidelines</span>  
              </button>
        </div>
        
      
        <div className="m-4 flex items-center justify-center">
        <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-neutral-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 sm:ml-2 sm:w-auto"
                onClick={() => setShowPopup(true)}
              >
               
                <span>Code Generator Guide</span>  
              </button>
              
       
        </div>    
        {/* <Guide trigger={showPopup} setTrigger={setShowPopup} onClose={() => setShowPopup(false)} /> */}
        <Example trigger={showPopup} setTrigger={setShowPopup} onClose={() => setShowPopup(false)} code={undefined} />
      </div>
    </div>
  );
}
