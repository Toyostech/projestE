import React from 'react'
import Link from 'next/link'
import Style from '@/app/Links/link.module.css'
import { usePathname } from 'next/navigation'


const Links = () => {
    const currentpath = usePathname()


    const linkpage = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "services",
            path: "/services",
        }, {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Login",
            path: "/login",
        },
    ]
    return (
        <div className={Style.container}>
            {linkpage.map(link => (
                <Link href={link.path} key={link.title} className={`${Style.nav_link} ${currentpath === link.path && Style.active}`} >{link.title}</Link>
            ))}


        </div>
    )
}

export default Links
