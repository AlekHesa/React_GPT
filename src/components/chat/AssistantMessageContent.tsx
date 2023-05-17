import React, { useEffect } from "react";
import {useState } from 'react'
import ReactMarkdown from "react-markdown";
import rangeParser from "parse-numeric-range";
import { coldarkDark, materialDark, nightOwl, oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";


import Popup from "./CodeDownload";



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

type Props = {
  content: string;
};


export default function AssistantMessageContent({ content, ...props }: Props) {
  const [showPopup, setShowPopup] = useState(false);
  
  const [code, setCode] = useState("");
  

  const MarkdownComponents: any = {
    // Work around for not rending <em> and <strong> tags
    em: ({ node, inline, className, children, ...props }: any) => {
      return (
        <span className={className} {...props}>
          _{children}_
        </span>
      );
    },
    strong: ({ node, inline, className, children, ...props }: any) => {
      return (
        <span className={className} {...props}>
          __{children}__
        </span>
      );
    },

    pre: ({ node, inline, className, children, ...props }: any) => {
      return (
        <pre className={`m-0 ${className || ""}`} {...props}>
          {children}
        </pre>
      );
    },

    math: (props: any) => <MathJax.Node formula={props.value} />,
    inlineMath: (props: any) => <MathJax.Node inline formula={props.value} />,

    code({ node, inline, className, ...props }: any) {
      const hasLang = /language-(\w+)/.exec(className || "");
      const hasMeta = node?.data?.meta;
      
      const applyHighlights = (lineNumber: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, "");
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)?.[1]
            : "0";
          const highlightLines = rangeParser(strlineNumbers || "0");
          const highlight = highlightLines;
          const id = randomUUID; // generate unique id
          const data: string = highlight.includes(lineNumber)
            ? `highlight ${id}` // add unique id to class name if line is highlighted
            : "";
          return { data };
        } else {
          return {};
        }
      };

      const parse_data = () => {
      setCode(props.children?.toString() || "");
      setShowPopup(true)
      };

      return hasLang ? (
        <div>
         
         <div className="flex mb-2">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-neutral-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 sm:ml-2 sm:w-auto"
                onClick={parse_data}
              >
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download</span>
              </button>
              <Popup trigger={showPopup} setTrigger={setShowPopup} code={code} onClose={() => setShowPopup(false)} />


              <CopyToClipboard text={props.children} onCopy={() => alert("Copied to clipboard")}>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-neutral-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 sm:ml-2 sm:w-auto"                 
                >
                  Copy to Clipboard
                </button>
              </CopyToClipboard>

         </div>
          
        <SyntaxHighlighter
          style={syntaxTheme}
          language={hasLang[1]}
          PreTag="div"
          className="overflow-hidden rounded-md"
          showLineNumbers={true}
          wrapLines={hasMeta} 
          useInlineStyles={true}
          lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
        
        </div>
      ) : (
        <code className={className} {...props} />
      );
      
    },
  };

    

  return (
    <>
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={MarkdownComponents}
      {...props}
    >
      {content}
      
    </ReactMarkdown>
    </>
  );
}

