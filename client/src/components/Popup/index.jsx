// THIS COMPONENT IS BASED ON FREE & OPEN SOURCE TAILWIND EXTENSION https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/


import React from "react";

 const Popup = ( props ) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <p
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-grey hover:opacity-75 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        {props.title}
      </p>
      {showModal ? (
        <>

          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >

            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}        
                <button
                    className="text-red-500 hover:text-red-700 text-xl right-0 top-0 background-transparent font-bold uppercase px-2 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        
                  <h3 className="text-3xl font-semibold">
                    {props.title}
                  </h3>
                {/* REMOVED THE RANDOM TRANSPARENT X FROM THE STARTER KIT VERSION, SEEMED TO DO NOTHING */}
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>{React.cloneElement(props.children, { showModal, setShowModal, loggedIn: props.loggedIn, setLoggedIn: props.setLoggedIn })}</div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Log In
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Popup