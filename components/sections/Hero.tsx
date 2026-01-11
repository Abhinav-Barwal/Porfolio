'use client'

import Image from "next/image";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Link from "next/link";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    },[])
    return (
        <section id="hero">
            <div className="hero-info">
                <h3 data-aos="flip-left">Hi, I am</h3>
                <h1 data-aos="flip-left">Abhinav Barwal</h1>
                <p data-aos="flip-left">Front-end Developer / UI | UX Developer</p>
                <div className="social-tabs" data-aos="fade-up">
                    <Link href="" className="mail-tab" data-aos="fade-up"><i className="fa-solid fa-at"></i></Link>
                    <Link href="https://github.com/Abhinav-Barwal" className="git-tab" data-aos="fade-up"><i className="fa-brands fa-github"></i></Link>
                    <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="linkedIn-tab" data-aos="fade-up"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>
            <div className="hero-img">
                <Image src='/images/AbhinavBarwal.png' alt='hero image' width={500} height={600} data-aos="zoom-out"/>
            </div>
        </section>
    )
}