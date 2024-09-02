"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


export default function Navbar() {
  const pathName = usePathname()
  const router = useRouter()
  const links =[
    {
      title: "About",
      path: '/about'
    },
    {
      title: "Services",
      path: '/services'
    },
    {
      title: "Contacts",
      path: '/contacts'
    },
    {
      title: "Blogs",
      path: '/blogs'
    },
   
  ]
  const handler =()=>{
router.push('/login')
  }
  return (
    <div>
             <nav className="bg-red-500 px-6 py-4 flex justify-between items-center ">
          <h6 className='text-3xl'>SAM <span className='text-cyan-300'>Hero</span></h6>
          <ul className='flex justify-between items-center space-x-4'>
       {
        links.map((link)=><Link className={`${pathName === link.path && "text-cyan-300" }`} key={link.path} href={link.path}>{link.title}</Link>)
       }
          </ul>
          <button onClick={handler} className='bg-white text-cyan-400'>Login</button>
        </nav>
    </div>
  )
}
