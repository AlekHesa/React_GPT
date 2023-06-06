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

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">AG-BOT</h1>
        <div className="p-4 mb-8">
          {/* <GithubStar /> */}
          Your Problem Solver and Idea Generator
       
          <p className="mt-4 mx-6 text-lg">
          A GPT AI that can help you write codes, gave idea, and many more
        </p>
        <div className="m-6 flex items-center justify-center">
        
              
        <Guide/>
        
        </div>   
       
        </div>
        
      </div>
     
    </div>
  );
}
