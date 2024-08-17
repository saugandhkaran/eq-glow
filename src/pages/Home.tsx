import React from 'react';
import './Home.scss';
import section_1_img from '../assets/images/homepage.png';
import sun from '../assets/images/sun.svg';
import { PackageCard } from '../components/PackageCard/PackageCard';
import { TestimonialCard } from '../components/TestimonialCard/TestimonialCard';
import Testimonial1 from '../assets/images/testimonial_1.webp';
import Testimonial2 from '../assets/images/testimonial_2.webp';
import Testimonial3 from '../assets/images/testimonial_3.webp';


const Home: React.FC = () => {
  return (
    <>
      <div className="home">



        <div className="section section-1">
          <h1 className="title is-1 has-text-centered mb-1">EQ:GLOW</h1>
          <div className="section has-text-centered mt-3">
            <h1 className="title">Excel in mind <br /> and body.</h1>
            <button className='button is-primary is-medium'>I am ready</button>
          </div>
        </div>

        <div className="section section-2">
          <h2 className="title is-2 has-text-centered mb-1">Choose your path</h2>
          <div className="container mt-5">
              <div className="columns">
                <div className="column is-4">
                  <PackageCard title="EQ reset◆4 week"
                    description="Start your journey of using the power of your emotional intelligence and build a strong inner foundation."
                    img="https://fastly.picsum.photos/id/309/200/200.jpg?hmac=CV40Xz7anjWDJQgU2hAMvKhl5yWiUTCLTZqejhKkKs4"/>
                </div>
                <div className="column is-4">
                  <PackageCard title="EQ Glow◆8 week"
                    description="Our code program designed to transform your life."
                    img="https://fastly.picsum.photos/id/309/200/200.jpg?hmac=CV40Xz7anjWDJQgU2hAMvKhl5yWiUTCLTZqejhKkKs4"/>
                </div>
                <div className="column is-4">
                <PackageCard title="1:1 session◆90 minutes"
                  description="Work with me through a topic of your choice."
                  img="https://fastly.picsum.photos/id/309/200/200.jpg?hmac=CV40Xz7anjWDJQgU2hAMvKhl5yWiUTCLTZqejhKkKs4"/>
                </div>
            </div>
          </div>
        </div>

        <div className="section section-3">
          <h2 className="title is-2 has-text-centered has-text-black mb-1">The EQ Glow journey</h2>
          <div className="container mt-6">
            <div className='columns'>
              <div className='column is-3'>
                <h4 className="title has-text-black is-4">EQ Reset <br/>(2 Weeks)</h4>
                <div className="sun-border">
                  <img src={sun}/>
                  <hr/>
                </div>
                <p>check-in & reflect on old patterns, your goals & circumstances</p>
              </div>
              <div className='column is-3'>
                <h4 className="title is-4 has-text-black">EQ Foundations <br/>(2 Weeks)</h4>
                <div className="sun-border">
                  <img src={sun}/>
                  <hr/>
                </div>
                <p>Start to build a mental & emotional base within</p>
              </div>
              <div className='column is-3'>
                <h4 className="title is-4 has-text-black">EQ Shift<br /> (2 Weeks)</h4>
                <div className="sun-border">
                  <img src={sun}/>
                  <hr/>
                </div>
                <p>Learn the tools to transform old patterns</p>
              </div>
              <div className='column is-3'>
                <h4 className="title is-4 has-text-black">EQ Glow <br/> (2 Weeks)</h4>
                <div className="sun-border">
                  <img src={sun}/>
                  <hr/>
                </div>
                <p>Work with the techniques and activate your EQ glow</p>
              </div>
            </div>
            
            {/* EQ Reset Timeline */}
            <div className="columns mt-6 eq-reset-timeline">
              <div className="column is-3 timeline">
              </div>
              <div className="column is-3 timeline">
              </div>
            </div>
            <div className="columns">
              <div className="column is-3"> <p>EQ Reset</p>
            </div>

            

            
            </div>

            {/* EW Glow Timeline */}
            <div className="columns eq-glow-timeline">
              <div className="column is-3 timeline">
              </div>
              <div className="column is-3 timeline">
              </div>
              <div className="column is-3 timeline">
              </div>
              <div className="column is-3 timeline">
              </div>
            </div>
            <div className="columns">
              <div className="column is-3"> <p>EQ Glow</p>
            </div>

          </div>
        </div>
        </div>

      <div className="section section-4">
        <h2 className="title is-2 has-text-centered has-text-black mb-1">Testimonials</h2>
        <div className="container mt-6">
          <div className="columns">
            <div className="column is-4">
            <TestimonialCard
              description="I am so grateful for the work we did together. I feel like I am finally in control of my life and my emotions."
              author="Someone"
              additional_info="Wonderful GmbH"
              testimonial_image={Testimonial1}/>
            </div>
            <div className="column is-4">
            <TestimonialCard
              description="I am so grateful for the work we did together. I feel like I am finally in control of my life and my emotions."
              author="Someone"
              additional_info="Wonderful GmbH"
              testimonial_image={Testimonial2}/>
            </div>
            <div className="column is-4">
            <TestimonialCard
              description="I am so grateful for the work we did together. I feel like I am finally in control of my life and my emotions."
              author="Someone"
              additional_info="Wonderful GmbH"
              testimonial_image={Testimonial3}/>
            </div>
          </div>    
        </div>
      </div>

        <div className="section section-5">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <h2 className='title is-2'>We are looking for empaths, health and wellness practitioners</h2>
                <p className='has-text-white mt-6'>Our mission is to change the face of humanity changing our inner system, reprogramming mindsets
                  and healing with emotional intelligence, we empower humans to step up for themselves.
                </p>
                <br />
                <p className='has-text-white'>All of out servives are grounded in 10+ years of experience. The techniques trached have changed thousands of lives already.</p>
                <br />
                <p className='has-text-white'>We know that healing is not linear. The process of change has very unique individual circumstances.</p>
                <br />
                <button className='button is-white' style={{width: '100%'}}>Join us</button>
              </div>
              <div className="column is-6">

              </div>
            </div>
          </div>
        </div>

        <div className="section section-6">

        </div>

        <div className="section section-7">
          
        </div>



      </div>
    </>
  );
};

export default Home;
