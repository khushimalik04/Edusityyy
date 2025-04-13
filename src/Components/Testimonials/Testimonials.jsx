import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react';


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt=""/>
                            <div>
                                <h3> Sophia Martinez</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusty was one of
                            the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment
                            to academic excellence have truly exceeded my
                            expectations.</p>
                        </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt=""/>
                            <div>
                                <h3> William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Enrolling at Edusty has been the best academic choice I’ve made.
                        The dynamic environment, access to top-tier facilities, and the 
                        university's dedication to student success make it truly exceptional.</p>
                        </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt=""/>
                            <div>
                                <h3> Olivia Chen</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Edusty has been an incredible place to learn and grow.
                        The collaborative atmosphere, innovative teaching methods, 
                        and focus on real-world applications have given me the 
                        confidence to excel in my field.</p>
                        </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt=""/>
                            <div>
                                <h3> Liam Anderson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Studying at Edusty has been an outstanding experience.
                        The interactive learning approach, career-focused programs,
                        and vibrant student community make it the perfect place to 
                        thrive.</p>
                        </div>
                </li>
            </ul>   
        </div>


    </div>
  )
}

export default Testimonials