import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <>
    <div className="bg-slate-400 p-10 px-10 flex items-end justify-between mb-10">
    
    <div className='font-bold mx-5 box  p-3 rounded-lg hover:text-white '>
    <h1 className="text-5xl">Navbar</h1>

    </div>
    
    <div className='flex gap-10 mr-10 text-2xl font-serif'>
    <Link href="/"><a className=''>home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/ajit/"><a>ajitList</a></Link>
    </div>
    </div>
    </>
  )
}

export default Navbar