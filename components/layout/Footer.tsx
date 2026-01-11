import Link from "next/link"

export default function Footer() {
    return (
        <section id='footer'>
            <div className="container">
                <div className="to-top">
                    <Link href=""><i className="fa-solid fa-angles-up"></i>BACK TO TOP</Link>
                </div>
                <div className="social-container">
                    <Link href="https://www.facebook.com/profile.php?id=100034502544292"><i className="fa-brands fa-facebook"></i></Link>
                    <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><i className="fa-brands fa-square-linkedin"></i></Link>
                    <Link href="https://www.instagram.com/barwal_sahbb/"><i className="fa-brands fa-instagram"></i></Link>
                    <Link href="#contact"><i className="fa-regular fa-envelope"></i></Link>
                </div>
                <div className="copy-right">
                    <p><span>@2025 Abhinav Barwal</span> All Rights Reserved.</p>
                </div>
            </div>
        </section>
    )
}