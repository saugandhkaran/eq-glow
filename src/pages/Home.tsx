import React from 'react';
import './Home.scss';
import section_1_img from '../assets/images/homepage.png';
import sun from '../assets/images/sun.png';
import { PackageCard } from '../components/PackageCard/PackageCard';
import { TestimonialCard } from '../components/TestimonialCard/TestimonialCard';
import Testimonial1 from '../assets/images/testimonial_1.webp';
import Testimonial2 from '../assets/images/testimonial_2.webp';
import Testimonial3 from '../assets/images/testimonial_3.webp';
import Accordion from '../components/Accordion/Accordion';
import background from './background_1.png';


const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <div className="section section-1">
          <h4 className="title is-4 has-text-centered mb-1 has-text-black">THE FEEL COACH</h4>
          <div className="section has-text-centered mt-3">
            <h1 className="title is-1">Develop <br /> emotional <br /> stability</h1>
            <h3 className="subtitle is-3 has-text-white">From overwhelmed <br /> to confident</h3>
            <div className="columns is-centered mt-6">
              <div className="field has-addons">
                <div className="control has-icons-right is-expanded">
                  <input type="text" className="input is-info is-medium" placeholder="Enter your email" />
                </div>
                <p className="control">
                  <a className="button is-medium">Read for free</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-2">
          <div className='container mt-6'>
            <div className='columns'>
              <div className='column is-7'>
                <h3 className='title is-3'>Open for deep feelers & empaths
                  who want to develop resilience.</h3>
              </div>
              <div className='column is-3'></div>
              <div className='column is-2'>
                <button className='button is-medium' >I am ready</button>
              </div>
            </div>
          </div>
        </div>

        <div className='section section-3'>
          <div className='container'>
            <h2 className='title is-2'>Emotional Intelligence Basics</h2>
            <div className='columns is-space-between'>
              <div className='column is-6'>
                <Accordion />
              </div>
              <div className='column is-1'></div>
              <div className='column is-5'>
                <div className='has-text-centered has-text-white'>
                  <img src={background} alt='background' className='background-image-yoga' />
                  <p>I help you meet your hidden and also your clearly noticeable needs,
                    optimize your emotional world,
                    and build a healthy relationship with your mind and body.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-4">
          <div className='container'>
            <h2 className="title is-2 mb-1">The EMOTION - FLOW journey</h2>
            <h2 className='title is-4 mb-1'>Designed to get best results</h2>
            <div className="container mt-6">
              <div className='columns'>
                <div className='column is-3'>
                  <div className="card"
                    style={{ backgroundImage: `url(${sun})`, backgroundPosition: 'top right', backgroundSize: '100px 100px', backgroundRepeat: 'no-repeat' }}>
                    <div className="card-content">
                      <p className="title is-5">EQ <br />FEEL RESET <br /><span className='tag is-info is-light'>2 Weeks</span></p>
                      <div>
                        <p className='has-text-black p-1 features features'>Learn the basics of emotional awareness</p>
                        <p className='has-text-black p-1 features'>Get to know your life patterns & triggers</p>
                        <p className='has-text-black p-1 features'>Clarify goals, circumstances and necessary steps</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='column is-3'>
                  <div className="card"
                    style={{ backgroundImage: `url(${sun})`, backgroundPosition: 'top right', backgroundSize: '100px 100px', backgroundRepeat: 'no-repeat' }}>
                    <div className="card-content">
                      <p className="title is-5">EQ <br />FOUNDATIONS <br /><span className='tag is-info is-light'>2 Weeks</span></p>
                      <div>
                        <p className='has-text-black p-1 features'>Feel Reset +</p>
                        <p className='has-text-black p-1 features'>Build strong mental & emotional foundations</p>
                        <p className='has-text-black p-1 features'>learn techniques to increase emotional stability (grounding, mindfulness, self regulation, reflection)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='column is-3'>
                  <div className="card"
                    style={{ backgroundImage: `url(${sun})`, backgroundPosition: 'top right', backgroundSize: '100px 100px', backgroundRepeat: 'no-repeat' }}>
                    <div className="card-content">
                      <p className="title is-5">EQ <br />SHIFT<br /><span className='tag is-info is-light'>2 Weeks</span></p>
                      <div>
                        <p className='has-text-black p-1 features'>Feel Reset + Foundations</p>
                        <p className='has-text-black p-1 features'>Transformative EQ sessions</p>
                        <p className='has-text-black p-1 features'>Mindset work</p>
                        <p className='has-text-black p-1 features'>Deepen the basics</p>
                        <p className='has-text-black p-1 features'>Learn advanced EQ.glow techniques (behaviour change, old pattern transformation, stabilisation techniques)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='column is-3'>
                  <div className="card"
                    style={{ backgroundImage: `url(${sun})`, backgroundPosition: 'top right', backgroundSize: '100px 100px', backgroundRepeat: 'no-repeat' }}>
                    <div className="card-content">
                      <p className="title is-5">EQ <br />INTEGRATION<br /><span className='tag is-info is-light'>2 Weeks</span></p>
                      <div>
                        <p className='has-text-black p-1 features'>Feel Reset Included</p>
                        <p className='has-text-black p-1 features'>Learn the basics of emotional awareness</p>
                        <p className='has-text-black p-1 features'>Learn the basics of emotional awareness</p>
                      </div>
                    </div>
                  </div>
                </div>
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

        <div className="section section-5">
          <div className='container'>
            <h2 className="title is-2 mb-1">Testimonials</h2>
            <div className="container mt-6">
              <div className="columns">
                <div className="column is-4">
                  <TestimonialCard
                    description="I am so grateful for the work we did together. I feel like I am finally in control of my life and my emotions."
                    author="Someone"
                    additional_info="Wonderful GmbH"
                    testimonial_image={Testimonial1} />
                </div>
                <div className="column is-4">
                  <TestimonialCard
                    description="I am so grateful for the work we did together. I feel like I am finally in control of my life and my emotions."
                    author="Someone"
                    additional_info="Wonderful GmbH"
                    testimonial_image={Testimonial2} />
                </div>
                <div className="column is-4">
                  <TestimonialCard
                    description="I am so grateful for the work we did together. I feel like I am finally in control of my life and my emotions."
                    author="Someone"
                    additional_info="Wonderful GmbH"
                    testimonial_image={Testimonial3} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-6">
          <div className="container">
            <h2 className="title is-2 mb-1">Frequently Asked Questions</h2>
          </div>
          <div className='container mt-6'>
            <div className='columns'>
              <div className='column is-6'>
                <h4 className='title is-4'>Do I need prior experience in emotional work or coaching?</h4>
                <p className='mb-4'>No, but you should be committed to giving your best during the coaching period to achieve the best results for yourself. This includes determination, courage for self-exploration, and dedication.</p>
                <h4 className='title is-4'>I often feel overwhelmed by my emotions—does that mean this workshop isn’t right for me?</h4>
                <p className='mb-4'>Quite the opposite. If emotional overwhelm is one of your main challenges, this workshop will provide you with a safe space to work through it. You’ll learn how to handle strong emotions effectively.</p>
                <h4 className='title is-4'>How is your approach different from traditional therapy or coaching?</h4>
                <p className='mb-4'>My approach integrates aspects of traditional cognitive-behavioral therapy and mindset coaching but expands on them with techniques from emotional intelligence, psychosomatics, and inner child work.</p>
              </div>
              <div className='column is-6'>
                <h4 className='title is-4'>How much time should I set aside each week?</h4>
                <p className='mb-4'> I estimate a weekly commitment of 3 hours: 1 hour for our 1:1 session, 1 hour for reflection exercises, and approximately 70 minutes of practice (10 minutes per day). Additionally, at the beginning and end of the coaching program, there will be a 2-hour emotion-focused session</p>
                <h4 className='title is-4'>What if I realize during the workshop that it feels too intense for me?</h4>
                <p className='mb-4'>We will adjust the coaching to your pace and personal preferences. If you still find the process too intense, we can pause anytime and continue after a month if needed.</p>
                <h4 className='title is-4'> Can I continue working with you after the workshop?</h4>
                <p className='mb-4'>Absolutely! You’ll have the option to continue with six additional weeks or individual sessions. I’m also planning group seminars and advanced courses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
