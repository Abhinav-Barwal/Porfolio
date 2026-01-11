import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    return (
        <section id="portfolio" className="flex flex-col">
            <div className="container-fluid">
                <div className="title">
                    <h2 data-aos="zoom-in">PORTFOLIO</h2>
                </div>
            </div>
            <div className="main-tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">ALL</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="coded-tab" data-bs-toggle="tab" data-bs-target="#coded" type="button" role="tab" aria-controls="coded" aria-selected="false">CODED</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="designed-tab" data-bs-toggle="tab" data-bs-target="#designed" type="button" role="tab" aria-controls="designed" aria-selected="false">DESIGNED</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        <div className="box">
                            <Image src="/images/dewi.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Dew/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Dewi</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/instagramClone.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Instagram-Clone/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Instagram Clone</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/timeZone.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Time-Zone/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Time Zone</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/visionxTemp.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>Design</h6>
                                <Link href="https://www.figma.com/proto/ydhpVlifheZSZFIwZo2Cwz/Vision-X-Team?node-id=1-2&t=6t0caJk35IwEUOZs-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Vision X Team</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/nikeMobileTemp.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>Design</h6>
                                <Link href="https://www.figma.com/proto/eX019HBAoUTKDtjDfVUZYP/Experiments-Lab?node-id=1-66&t=5hZJ6nEOnED7oxnZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A66&show-proto-sidebar=1" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Nike Mobile Mock-up</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/counsel.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Business-and-Consulting-website/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Counsel (Business & Consulting website)</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/email1.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Email-Template/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Email Template</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/email2.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Email-Template-2/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Email Template</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/email3.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Email-Template-3/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Email Template</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/postPilot.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Post-Pilot/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Post Pilot</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/biluryGallery.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Bilury-Gallery-Hotel/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Bilury Gallery</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/circle.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Circle/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Circle</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/saasto.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/SaaSto/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Saasto</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/tttGame.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Tic-Tac-Toe-Game/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Tic Tac Toe Game</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/spsGame.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Stone-Paper-Sccissor-Game/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Stone Paper Scissor Game</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="coded" role="tabpanel" aria-labelledby="coded-tab">
                        <div className="box">
                            <Image src="/images/dewi.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Dew/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Dewi</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/instagramClone.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Instagram-Clone/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Instagram Clone</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/timeZone.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Time-Zone/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Time Zone</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/counsel.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Business-and-Consulting-website/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Counsel (Business & Consulting website)</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/email1.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Email-Template/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Email Template</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/email2.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Email-Template-2/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Email Template</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/email3.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Email-Template-3/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Email Template</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/postPilot.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Post-Pilot/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Post Pilot</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/biluryGallery.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Bilury-Gallery-Hotel/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Bilury Gallery</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/circle.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Circle/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Circle</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/saasto.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/SaaSto/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Saasto</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/tttGame.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Tic-Tac-Toe-Game/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Tic Tac Toe Game</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/spsGame.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>CODE</h6>
                                <Link href="https://abhinav-barwal.github.io/Stone-Paper-Sccissor-Game/" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Stone Paper Scissor Game</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="designed" role="tabpanel" aria-labelledby="designed-tab">
                        <div className="box">
                            <Image src="/images/visionxTemp.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>Design</h6>
                                <Link href="https://www.figma.com/proto/ydhpVlifheZSZFIwZo2Cwz/Vision-X-Team?node-id=1-2&t=6t0caJk35IwEUOZs-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Vision X Team</p>
                            </div>
                        </div>
                        <div className="box">
                            <Image src="/images/nikeMobileTemp.png" alt="Portfolio projects images" width={400} height={400}></Image>
                            <div className="info">
                                <h6>Design</h6>
                                <Link href="https://www.figma.com/proto/eX019HBAoUTKDtjDfVUZYP/Experiments-Lab?node-id=1-66&t=5hZJ6nEOnED7oxnZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A66&show-proto-sidebar=1" className="visit"><i className="bi bi-link-45deg"></i></Link>
                                <p className="name">Nike Mobile Mock-up</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}