export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="title">
                    <h2 data-aos="zoom-in">ABOUT ME</h2>
                </div>
                    <p data-aos="fade-up" data-aos-duration="2000" className="about-info">I’m Abhinav Barwal, a front-end focused developer who enjoys building clean, responsive, and user-friendly web interfaces. I have a strong interest in modern UI development and love turning ideas and designs into functional digital experiences.</p>
                    <p data-aos="fade-up" data-aos-duration="2000" className="about-info">I work with HTML, CSS, JavaScript, SCSS, Bootstrap, Figma, React, and Next.js, and I pay close attention to layout structure, responsiveness, and visual consistency. I believe good user experience comes from simple design, clean code, and attention to detail.</p>
                    <p data-aos="fade-up" data-aos-duration="2000" className="about-info">Beyond coding, I enjoy learning through hands-on projects and continuously improving my skills by experimenting with new tools, improving performance, and following modern web development practices. I’m motivated, curious, and always looking to grow as a developer.</p>
                    {/* <div data-aos="fade-up" data-aos-duration="2000" className="explore-btn">
                        <button className="secondary-btn">Explore</button>
                    </div> */}
                    <div className="seperator" data-aos="fade-up" data-aos-duration="2000">
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
                    <div className="abilities flex justify-center flex-wrap">
                        <div className="box design flex flex-col justify-start" data-aos="fade-up" data-aos-duration="2000">
                            <h3>DESIGN</h3>
                            <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                        </div>
                        <div className="box development flex flex-col justify-start" data-aos="fade-up" data-aos-duration="2000">
                            <h3>DEVELOPMENT</h3>
                            <p>I can develop fast, responsive, and functional websites using modern technologies. My goal is to turn designs into smooth, reliable, and scalable web solutions.</p>
                        </div>
                        <div className="box maintenance flex flex-col justify-start" data-aos="fade-up" data-aos-duration="2000">
                            <h3>MAINTENANCE</h3>
                            <p>I provide regular updates, bug fixes, and performance improvements. Your website stays secure, updated, and running smoothly over time.</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}