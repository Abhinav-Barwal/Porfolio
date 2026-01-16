"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {

    const [toggle, setToggle] = useState(true)
    const HandelToggle = () => {
        if (toggle !== false) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }
    return (
        <div className="nav-bar">
            <div className="nav-content">
                <Link href="" className="nav-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="40" viewBox="0 0 62 50" fill="none">
                        <path d="M22.0584 13.7818C21.983 13.9582 20.2485 19.0326 18.1746 25.084L14.4165 36.0741L16.8549 36.1148L19.2807 36.142L23.441 33.9032C25.716 32.6685 27.6139 31.6645 27.6516 31.6645C27.6893 31.6645 27.7145 32.8585 27.7145 34.3103V36.9561H32.2267C34.7028 36.9561 37.0406 36.9018 37.4051 36.8204C39.4162 36.4133 41.1884 34.7852 41.9048 32.6957C42.571 30.769 42.2819 28.3268 41.2135 26.8207L40.8993 26.373L39.4665 27.1463C38.1593 27.8519 38.0587 27.9333 38.2724 28.0961C38.4107 28.2046 38.6746 28.571 38.8631 28.9238C39.1648 29.4529 39.2151 29.7107 39.2151 30.5112C39.2025 31.5967 39.0265 32.0715 38.3227 32.8042C37.556 33.6047 37.0909 33.6997 33.8481 33.6997H30.9824V31.7595V29.8328L35.3438 27.472C39.2654 25.3554 39.7807 25.0433 40.4091 24.3513C43.4131 21.1085 42.2316 15.4914 38.2096 13.8632C37.4806 13.5647 37.292 13.5511 32.5284 13.5104L27.5888 13.4697L27.7019 13.7818C27.7647 13.9582 28.0664 14.7044 28.3806 15.4507L28.9462 16.8075L33.0689 16.8753C36.6007 16.9296 37.2543 16.9703 37.5811 17.1738C39.1774 18.1236 39.5042 20.7286 38.1844 22.0583C37.8702 22.3839 19.9468 32.1394 19.8589 32.0444C19.8086 31.9901 24.0192 19.7382 24.1072 19.6432C24.1952 19.5347 24.2329 19.6161 25.7034 23.1845C26.4073 24.894 27.0357 26.3594 27.086 26.4137C27.2243 26.59 30.266 24.9076 30.1906 24.6905C30.1529 24.5955 29.0971 22.0447 27.8402 19.0055L25.54 13.4833H23.8558C22.2344 13.4833 22.1716 13.4969 22.0584 13.7818Z" fill="white"/>
                        <path d="M9.01152 1.55957C8.72444 1.91355 8.2528 2.68789 7.96572 3.26312C7.28903 4.70118 6.67386 5.89588 1.58844 15.3428C1.13731 16.1393 0.788715 16.8915 0.788715 16.98C0.788715 17.0685 0.583657 17.3783 0.358094 17.6437C-0.195561 18.2853 -0.0315135 18.9491 0.645176 18.7499C0.891245 18.6836 3.63901 18.6172 6.75589 18.6172H12.395L12.8461 17.6659C13.4202 16.4712 14.1379 15.1216 14.6096 14.3694C15.2453 13.3296 15.0607 13.2411 12.0464 13.2189C9.36011 13.1968 9.2986 13.1968 9.23708 12.7101C9.19607 12.4003 9.58568 11.449 10.2419 10.2764C10.8365 9.21448 11.4927 7.97554 11.6978 7.51093L12.0669 6.67022H21.7046C27.7538 6.67022 31.3423 6.58172 31.3423 6.44898C31.3423 6.20561 28.9636 1.84718 28.5125 1.29408C28.2254 0.940092 27.5487 0.917969 18.8748 0.917969L9.54466 0.940092L9.01152 1.55957Z" fill="white"/>
                        <path d="M52.7047 48.5762C52.9697 48.2222 53.405 47.4479 53.67 46.8726C54.2946 45.4346 54.8625 44.2399 59.5567 34.7929C59.9732 33.9964 60.2949 33.2442 60.2949 33.1557C60.2949 33.0672 60.4842 32.7575 60.6924 32.492C61.2035 31.8504 61.0521 31.1867 60.4274 31.3858C60.2003 31.4522 57.6639 31.5185 54.7868 31.5185H49.5815L49.1651 32.4699C48.6351 33.6646 47.9726 35.0141 47.5372 35.7664C46.9504 36.8062 47.1208 36.8947 49.9033 36.9168C52.3829 36.9389 52.4397 36.9389 52.4965 37.4257C52.5343 37.7354 52.1747 38.6867 51.569 39.8593C51.02 40.9213 50.4143 42.1602 50.225 42.6248L49.8843 43.4655H40.988C35.4041 43.4655 32.0917 43.554 32.0917 43.6868C32.0917 43.9301 34.2874 48.2886 34.7038 48.8417C34.9688 49.1957 35.5934 49.2178 43.6001 49.2178L52.2125 49.1956L52.7047 48.5762Z" fill="white"/>
                    </svg>
                </Link>
                <div className="nav-menu">
                    <Link href="#about" className="primary-btn navTabs">About me</Link>
                    <Link href="#skills" className="primary-btn navTabs">Skills</Link>
                    <Link href="#portfolio" className="primary-btn navTabs">Portfolio</Link>
                    <Link href="#contact" className="primary-btn navTabs">Contact me</Link>
                </div>
                <div className="toggle-btn" onClick={HandelToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-list toggle-icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <div className={`toggle-dropdown ${toggle? "d-none" : ""}`}>
                        <Link href="#about" className="toggle-tab">About me</Link>
                        <Link href="#skills" className="toggle-tab">Skills</Link>
                        <Link href="#portfolio" className="toggle-tab">Portfolio</Link>
                        <Link href="#contact" className="toggle-tab">Contact me</Link>
                        <div className="seperator">
                            <svg xmlns="http://www.w3.org/2000/svg" width="170" height="12" viewBox="0 0 170 12" fill="none">
                                <rect width="170" height="12" fill="url(#pattern0_2_349)"/>
                                <defs>
                                <pattern id="pattern0_2_349" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_2_349" transform="scale(0.00588235 0.0833333)"/>
                                </pattern>
                                <image id="image0_2_349" width="170" height="12" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAMCAYAAADyMyZxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERGOUZCMTkxNUEzMTFFNDgzOEZCNTFFNTNBOUQ0NTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERGOUZCMTgxNUEzMTFFNDgzOEZCNTFFNTNBOUQ0NTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4MDgzRTI5QjZFREE2OEQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4MDgzRTI5QjZFREE2OEQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0543MwAAAuxJREFUeNrsmVuITVEYx/e4XwrjmBljGrfJMCbJJZ0cpKHcXiiah2ki5FkSkhLywINIEkVIUcotuY94oYmQ6wi5Ny7JMWPcx/H/8p36+lrrrDnnbdn7q1/NmvPb++w96z9rrb12EISj4uAi6OXwysAVMMDhFYA6MCrH6+kJzoGJDq8TOAzmObw8sA0sD6LytsaDJEiBGyDf4g0Br9h7BgZmCOkd9j6CMTmE9Bof/wVMyhDSo+z9BtUZQrqdPWJF1OV+1lTQIjryJogZvJHgvfCeg0EGrxQ8Ed4nMDaLkNaLY7+DGZaQHhfeH7DEEtIdwiM2Rl3ub1WpsN4CfQzeCBXWF2CwwSsBj4RHI/Y4xzXQsuO6OOYbmG4J6UkV0sWWkO5UId0QdbX/NVmF9TZP47oqwTvhveS1q65+oEGFNW757nxedqTdr2CaJaSnhNcKFlpCukuFdN3/3Hl5linFl/oJ9mXh03rwNOjO7btgCvigvOHgEiji9mselR8rr5i9Ydz+DGaCq8LpDS6A0dymkM4B59W5uoBjYpSlkC4C+w19tluNsmvBese9L+B/BG8r5THJHO6XnrSbxTnugUKDVwEahUdhLTd4fcED4VFYE/xZjNfE6c9aeM2sqys4Kzx6eKo1eO3AHvU3WNPG+0563tehCyrVBNAkznNfjJ6yaKR8Izz6eajBK+JzpD0692xeC8uQVhmO7cZbVTKkNQavPdir7n91FvfsdVBpGlnp8WzwA2zN8dgELwN6cPshB+mt8sp5ei/hdiN7DcorZK/S8F003c8Clw0hPSFG2VYeSQ8ZQkoj6Xzxu1VgUxb3uxR0jh5V/N9jTXFYix17rCkOa4VjjzVNc2De2KeQ1qmRtNoykh5Q54w29kNYcRHW+sD+9qqMdwDIewr6W7wCMeU38TLDVB3BEfZ+Bfa3TzTrbREhXRZ1WXiLNuzPBP825DMV7anSq9hShxfjaT7h8DqAg2BuG65xM0/foay/AgwAzVefd5V3qsgAAAAASUVORK5CYII="/>
                                </defs>
                            </svg>
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
                </div>
            </div>
        </div>
    )
}