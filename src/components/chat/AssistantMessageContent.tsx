import React from "react";
import {useState,useEffect} from "react";
import ReactMarkdown from "react-markdown";
import rangeParser from "parse-numeric-range";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Popup from "./CodeDownload";
import Modal from "./modal-download";


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
import plsql from "react-syntax-highlighter/dist/esm/languages/prism/plsql";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import MathJax from "react-mathjax";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { UUID, randomUUID } from "crypto";

import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import { button } from "@material-tailwind/react";

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



const syntaxTheme = oneDark;

type Props = {
  content: string;
};


export default function AssistantMessageContent({ content, ...props }: Props) {
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

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
      const [code, setcode] = useState("");
      

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, "");
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)?.[1]
            : "0";
          const highlightLines = rangeParser(strlineNumbers || "0");
          const highlight = highlightLines;
          const data: string = highlight.includes(applyHighlights)
            ? "highlight"
            : "";
          return { data };
        } else {
          return {};
        }
      };

      
      
      useEffect(() => {
        setcode(props.children?.toString() || "");
      }, [props.children]);

      
     

      
     

      return hasLang ? (
        <div>
          <div>
            <IconButton  icon={<SaveIcon />} onClick={() => setShowPopup(true)}/>
             <Popup trigger={showPopup} setTrigger={setShowPopup} code={code} onClose={() =>setShowPopup(false)}/>
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