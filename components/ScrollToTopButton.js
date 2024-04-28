"use client"
import { useEffect, useState } from "react"


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)


    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        isVisible &&
            window.scrollTo({
                top: 0,
                behavior: "auto",
            })
    }


    return (
        <>

            <button className={`topbutton ${isVisible ? "" : "btn-hide"}`} onClick={scrollToTop} >

                <span className='fa fa-chevron-up'>

                </span>
            </button>


        </>


    )
}

export default ScrollToTopButton