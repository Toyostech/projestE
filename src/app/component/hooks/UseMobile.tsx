"use client"

import { useEffect, useState } from "react"

export function useIsMobile() {
    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 769)
        };
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);
    return isMobile;





}