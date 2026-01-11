"use client";

import Image from "next/image";
import { useState } from "react";

export default function DevJourney() {

    const [active, setActive] = useState(false)

    return(
        <section id="dev-journey">
            <div className="container flex">
                <div className={`journey-info ${active ? 'readMore' : ''}`}>
                    <h3 data-aos="fade-up" data-aos-anchor-placement="top-bottom">MY DEVELOPMENT JOURNEY</h3>
                    <p className="journey-cont" data-aos="fade-up" data-aos-anchor-placement="top-bottom">I began my journey with a non-medical background, where I developed strong analytical and problem-solving skills. While pursuing my BSc, I discovered my interest in technology during which I completed a one-year computer diploma. This experience sparked my interest in web development and helped me build a strong foundation in front-end technologies. Currently, I work with HTML, CSS, JavaScript, SCSS, Bootstrap, Figma, React, and Next.js to create responsive, user-friendly, and modern web interfaces. I also use Git and GitHub for version control and project management. I focus on writing clean, structured code and continuously improving my skills by building real-world projects and learning best development practices.</p>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <button className={`secondary-btn ${active ? 'd-none' : ''}`}onClick={() => setActive(true)}>READ MORE</button>
                    </div>
                </div>
                <div className={`it-banner ${active ? 'd-none' : ''}`}>
                    <Image src='/images/banner.png' alt='IT Banner' width={520} height={530} data-aos="zoom-in-up"></Image>
                </div>
            </div>
        </section>
    )
}