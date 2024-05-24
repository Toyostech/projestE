"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import "./navbar.css"

import Links from '@/app/Links/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image'

import { Button, Typography } from '@mui/material'
import car from "@mui/material"

import Moble_menu from '../component/Moble_menu'
import MobileNav from '../component/MobileNav/MobileNav'
import { Nav_Link } from '../component/constant'

const navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }





    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='container' style={{
                background: "rgba(0, 0, 4, 0.5)",
             
                position: "sticky",
                top: 0,
                zIndex: 3,
                backdropFilter: "blur(50px)",

            }}>
                <div className='nav-content' style={{
                    maxWidth: "1300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                   
                    margin: "0 auto",
                }}>
                    <Typography style={{
                        width: "12rem",
                        height: "auto",
                        fontWeight: "bold"
                    }}>TOYOSTECH</Typography>
                    <ul style={{
                        

                        alignItems: "center",
                        gap: "2rem",
                        listStyle: "none"
                    }}>
                        {Nav_Link.map((link) => (
                            <li style={{
                                margin: "0 1rem"
                            }}>
                                <Link href={link.href} key={link.key} style={{
                                    textDecoration: "none",
                                    fontSize: "1.5rem",
                                    fontWeight: 900,
                                    color: "white",
                                    position: "relative",
                                    cursor: "pointer"

                                }}>
                                    {link.label}


                                </Link>
                            </li>

                        ))}


                        <Button style={{
                            fontSize: "1rem",
                            padding: "1rem 0.1rem",
                            fontWeight: 900,
                            alignItems: "center",
                            color: "white",
                            background: "blue",
                            transition: "all 0.3 ease",
                            borderRadius: "20px",

                        }}>
                            Hire
                        </Button>


                    </ul>
                    <Button onClick={toggleMenu} className='menu-btn' style={{
                        fontSize: "1.8rem",
                    }}>
                        
                        {openMenu ? "close" : "menu"}

                       


                    </Button>
                    
                </div>





            </nav>


        </>






    )
}

export default navbar


//     < nav >
// {/* <Link href='/'>
//                 {/* <Image src="/public/aboutbg.jpg" alt='logo' width={29} height={30}/> */}
//     < Typography > TPY</ >
//             </Link > * /}
//     < ul >
// {
//     Nav_Link.map((link) => (
//         <Link href={link.href}
//             key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" >
//             {link.label}


//         </Link>

//     ))
// }

//             </ >

//             <div className="lg:flexCenter hidden">
//                 <Button type="button"
//                     title="Login"
//                     variant= "green"
//                 />
//             </div>
//             <Moble_menu />


//         </nav >