import React from 'react'

import '../App.css'
import { checkPath } from '../helpers'

function Home(props) {

    return (
        <div className="flex-container-column centered">
            {checkPath(props)}
            <div className="article">
                <div className="flex-container-row content">
                    <div><img src="me.jpg" className="me-pic" alt="pic of me" />
                        <p>
                            I am a software engineer who thrives on opportunities to create custom solutions for people. A cool headed problem solver who sees the big picture but keeps an eye on the details. Looking for a chance to turn ‘nothing works!’ into ‘this is exactly what we need!’
                        </p>
                        <p>
                            The tools and frameworks I work with include <span className="attention">React.js</span> and <span className="attention">Python Django</span> and platforms like <span className="attention">Wordpress</span>,<span className="attention"> Shopify</span>, <span className="attention">Jekyll</span> and <span className="attention">11ty</span>. Also, I have been experimenting with <span className="attention">AWS</span> for years and decided to get my<a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-05-13&ci=AWS00870341"> Certified Cloud Practicioner certification</a> in 2019. I continue to be excited by the possibilities of severless architechture and keep building my projects in the cloud.
                        </p>
                        <p>
                            I have years of experience in tech, including management experience. An expert troubleshooter and problem solver who thrives on challenge, I got a big skills boost by going to General Assembly's Software Engineering Immersive course. Now I'm hoping to combine those new skills with my years of experience in health care, construction and customer service to bring solutions to complex problems.</p>
                        <p>
                            Here are some recent writings of mine posted to <a href="https://hackernoon.com">Hackernoon</a>...
                            <br></br> <span className="attention"><a href="https://hackernoon.com/handling-client-side-routing-when-hosting-your-reactjs-project-on-aws-s3-da6j3veq" target="blank">Handling Client Side Routing When Hosting Your React Project on AWS S3</a></span>
                            <br></br> <span className="attention"><a href="https://hackernoon.com/build-a-gallery-site-with-11ty-lu203zzm"  target="blank">Build a Gallery Site With 11ty</a> </span>
                        </p>
                        <p>
                            I'm not just a Software Engineer, I'm also a Musician. I made this <a href="/ScaleFinder"  >cool app which lets you quickly determine music scales here</a>. Also, I have some <a href="/Music" >albums which I recorded with bands I played in years ago, you can download here</a>.
                        </p>
                        <p>
                            I live in Lafayette CO with my wife and children. My wife, Faith, is the genius and animating force behind <a href="https:\\thelittleherbalapothecary.com"  target="blank">The Little Herbal Apothecary</a> in downtown Lafayette. If you are nearby, come in and check it out!
                        </p>
                        <p className="attention"><span className="flex-container-row space"><a href="JCR_Resume.pdf" target="blank">Resume</a><a href="mailto:jamcrodgers@gmail.com?subject=Web Contact"  >JamCRodgers[at]gmail.com</a> </span></p>
                    </div>

                </div>
                <div className="flex-container-row space">
                    <img src="./icons/aws.svg" className="badges" alt="aws badge" />
                    <img src="/icons/python.svg" className="badges" alt="python badge" />
                    <img src="/icons/HTML5.svg" className="badges" alt="HTML badge" />
                    <img src="/icons/CSS3.svg" className="badges" alt="CSS badge" />
                    <img src="/icons/javascript.svg" className="badges" alt="javascript badge" />
                </div>
            </div>
        </div >
    )
}

export default Home