import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import CopyToClipboard from 'react-copy-to-clipboard';

export default function Example(props: { trigger: any ,setTrigger : any, code: any,onClose: () => void}) {
  const [open, setOpen] = useState(true)
  const [fileName, setfileName] = useState("");
  const cancelButtonRef = useRef(null)

  const delayedOnClose = () => {
    console.log("Fading out...");
    setOpen(false);
    setTimeout(() => {
      console.log("Closing now!");
      props.onClose();
    }, 500);
  };

  const downloadData = () =>{
    const element = document.createElement("a");
    const file = new Blob([props.code],
      {type:"text/plain"});
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    props.setTrigger(false);

  } 

  return (props.trigger) ?(
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={delayedOnClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-white">
                        Generate Code
                      </Dialog.Title>
                      
                      <div className="mt-2">
                        <p className="text-sm text-gray-100">
                          Name your file
                        </p>
                      </div>
                      <div className='mt-3'>
                        <label className="relative block">
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                            onChange={event => setfileName(event.target.value)} 
                            placeholder="sample.py" type="text" name="search"/>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <CopyToClipboard text={props.code} onCopy={() => alert("Copied to clipboard")}>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-neutral-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-600 sm:ml-3 sm:w-auto"
                        onClick={() => props.setTrigger(false)}>
                        Copy to clipboard
                      </button>
                     </CopyToClipboard>
                  
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-yellow-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 sm:ml-3 sm:w-auto"
                    onClick={downloadData}
                    ref={cancelButtonRef}
                  >
                    Download
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  ) : null;
}
