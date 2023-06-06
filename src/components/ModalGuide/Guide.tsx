import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReactMarkdown from "react-markdown";
import rangeParser from "parse-numeric-range";
import { coldarkDark, materialDark, nightOwl, oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { textCode } from './Text_code';




import { Button, ButtonToolbar, ButtonGroup, IconButton } from 'rsuite';
import SaveIcon from '@rsuite/icons/legacy/Save';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import cpp from "react-syntax-highlighter/dist/cjs/languages/prism/cpp";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import sql from "react-syntax-highlighter/dist/cjs/languages/prism/sql";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import MathJax from "react-mathjax";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { UUID, randomUUID } from "crypto";


import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import CopyToClipboard from 'react-copy-to-clipboard';



SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("SQL",sql);
SyntaxHighlighter.registerLanguage("javascript",javascript);
SyntaxHighlighter.registerLanguage("jsx",jsx);



const syntaxTheme = coldarkDark;


export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpenCode, setIsOpenCode] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function openModalCode() {
    setIsOpenCode(true)
    
  }

  function closeModalCode() {
    setIsOpenCode(false)
  }

  


 




  return (
    <>
      <div  className="inline-flex w-full justify-center rounded-md px-3 py-2 sm:ml-2 sm:w-auto">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Guidelines
        </button>
      </div>
      <div  className="inline-flex w-full justify-center rounded-md px-3 py-2 sm:ml-2 sm:w-auto">
        <button
          type="button"
          onClick={openModalCode}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Prompt Example
        </button>
      </div>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Welcome to AG-BOT
                  </Dialog.Title>
                  <div className="mt-2">
                      <p className="text-sm text-gray-700 mb-5 leading-loose">
                        When interacting with this AI, it's essential to focus on questions related to Information Technology, such as coding, programming languages, software development, hardware, networking, cybersecurity, and other IT-related topics.
                      </p>
                      <p className="text-sm text-gray-700 leading-loose">
                        It's important to note that this AI has been set to accept Information Technology related topics, and other questions outside the topic will not be answered.
                      </p>
                      
                  </div>


                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpenCode} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalCode}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Prompt Example For Code
                  </Dialog.Title>
                  <div className="mt-2">
                    <textarea
                      className="max-h-[200px] w-full resize-none border-none bg-tertiary p-4 mb-3 text-primary outline-none"
                      rows={1}
                      value={"Make a simple Calculator in python"}
                    />

                    <div className="max-h-[400px] overflow-y-auto">
                      <SyntaxHighlighter
                        style={syntaxTheme}
                        language="python"
                        PreTag="div"
                        className="overflow-hidden rounded-md break-words"
                        showLineNumbers={true}
                        useInlineStyles={true}
                      >
                        {textCode}
                      </SyntaxHighlighter>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalCode}
                    >
                      test
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>


        </Dialog>
      </Transition>
    </>
  )
}
