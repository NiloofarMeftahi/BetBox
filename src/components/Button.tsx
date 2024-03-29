import React from 'react'
type Props = {
    runFunction: any;
}
function Button({runFunction} : Props) {
  return (
    <button 
      onClick={runFunction} className="transition-all duration-300 border border-black w-full  px-4 py-12 rounded-sm bg-indigo-500 text-white hover:bg-indigo-800">
        Place Bet
      </button>
  )
}

export default Button