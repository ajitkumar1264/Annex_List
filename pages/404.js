import React from 'react'
import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

function NotFound() {

    const router=useRouter()
    useEffect(()=>{

        setTimeout(() => {
            router.push("/");
        },3000);
    },[])

  return (
    <>
    <div className='text-center font-semibold text-3xl'>
    <h1>opps page is not found in this web </h1>
    <h2>404 error page</h2>
    <img src="/404.webp" className="p-20 ml-48" width={400} alt="" />
    <div className="cursor-pointer">
<Link href="/"><button>go to home page</button></Link>
</div>
    </div>
    
    </>
  )
}

export default NotFound