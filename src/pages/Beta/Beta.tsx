import React, { useState } from 'react';
import './Beta.scss';
import BetaImage from '../../assets/images/beta_image.jpg';
import { ShieldCheck, BrainCircuit, HeartHandshake, Sparkles, Target, Award, MessageSquare, UserCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Beta: React.FC = () => {

  return (
    <div className="beta">
      <section className="hero section is-medium"  style={{ backgroundImage: `url(${BetaImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="title is-1 has-text-centered mb-1 has-text-white brand">the feel coach</h1>
        <div className="hero-body has-text-centered">
          <h1 className="title is-1 is-size-2-mobile has-text-light">
            From Overwhelm to Resilience
          </h1>
          <p className="subtitle is-4 has-text-light">
            A Beta Offer to transform emotional pain by developing awareness, self-regulation, and profound inner strength.
          </p>
          <button className="button is-secondary is-rounded">
            <span>Apply for the Beta Offer</span>
          </button>
        </div>
      </section>

      <section className="section is-this-course-for-you">
        <div className="container mt-6">
            <h1 className="title is-1 has-text-centered has-text-light mb-6">Is this course for you?</h1>
            <div className="columns is-desktop is-variable is-8">
              <div className="column">
                <h3 className="title is-5 has-text-weight-semibold has-text-white mb-5">If you suffer from emotional pain like...</h3>
                <div className="box">
                  <article className="media">
                    <div className="media-content">
                      <p className="title is-5 has-text-white">Anxiety & Overthinking</p>
                      <p className="subtitle is-6 has-text-white">You feel stuck in loops of worry and what-ifs, finding it hard to quiet your mind.</p>
                    </div>
                  </article>
                </div>
                <div className="box">
                  <article className="media">
                    <div className="media-content">
                      <p className="title is-5 has-text-white">Overwhelm & Burnout</p>
                      <p className="subtitle is-6 has-text-white">You're constantly juggling too much, leaving you drained and emotionally exhausted.</p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="column">
                <h3 className="title is-5 has-text-weight-semibold has-text-white mb-5">...this is your opportunity to gain:</h3>
                <div className="box">
                  <article className="media">
                    <div className="media-content">
                      <p className="title is-5 has-text-white">Resilience & Self-Regulation</p>
                      <p className="subtitle is-6 has-text-white">Train your awareness to navigate challenges with calm and develop emotional stability.</p>
                    </div>
                  </article>
                </div>
                <div className="box">
                  <article className="media">
                    <div className="media-content">
                      <p className="title is-5 has-text-white">Internal Calmness & Clarity</p>
                      <p className="subtitle is-6 has-text-white">Get the tools to access a state of peace and clear-headedness, even in stressful times.</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className="section has-text-centered taste-of-core-transformation">
        <div className="container is-max-desktop mt-6 mb-6">
          <h2 className="title is-3 has-text-primary">A Taste of Core Transformation</h2>
          <p className="subtitle is-5 has-text-primary mt-6 mb-6">
            This Beta Offer is a no-brainer if you value personalized 1:1 work and seek profound internal well-being. It's a mini-version of our 8-week program, including the <strong className="has-text-primary">emotionalbody-technique (EBT)</strong> and dedicated coaching to explore your emotional intelligence.
          </p>
          <div className="tags are-large is-centered">
            <span className="tag is-primary is-light">Experience One Trigger Shift</span>
            <span className="tag is-primary is-light">Learn Self-Regulation Basics</span>
            <span className="tag is-primary is-light">Develop Internal Calmness</span>
          </div>
        </div>
      </section>

      <section className="section beta-offer-details">
        <div className="container mt-6 mb-6">
          <h2 className="title is-3 has-text-centered has-text-white mb-6">What You Get in the Beta Offer</h2>
          <div className="columns is-desktop is-variable is-5">
            <div className="column">
              <div className="box has-text-centered p-5">
                <span className="icon is-large has-text-white mb-4"><i className="fas fa-bullseye fa-3x"></i></span>
                <p className="title is-4">1 EBT Session</p>
                <p className="subtitle is-6 has-text-grey-white">A transformative, felt shift in one of your trigger emotions by learning a unique method for activating your emotional intelligence.</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered p-5">
                <span className="icon is-large has-text-white mb-4"><i className="fas fa-user-check fa-3x"></i></span>
                <p className="title is-4">2 Coaching Sessions</p>
                <p className="subtitle is-6 has-text-grey-white">Receive personalized assistance to process insights and build confidence in your self-regulation skills.</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered p-5">
                <span className="icon is-large has-text-white mb-4"><i className="fas fa-star fa-3x"></i></span>
                <p className="title is-4">Personalized Meditation</p>
                <p className="subtitle is-6 has-text-grey-white">A customized tool for daily grounding, tailored to your unique emotional needs, to round up your transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section what-is-asked-of-you">
        <div className="container is-max-desktop mt-6 mb-6">
            <h2 className="title is-3 has-text-centered has-text-primary mb-6">What Is Asked Of You</h2>
            <div className="columns is-centered is-vcentered">
              <div className="column has-text-centered">
                <span className="icon has-text-white mb-6"><i className="fas fa-award fa-3x"></i></span>
                <p className="title is-5 has-text-white">Beta Price 500€</p>
                <p className="subtitle is-6 has-text-white">for the first 5 clients.<br /><small>(Goes up to 1500€+)</small></p>
              </div>
              <div className="column has-text-centered">
                <span className="icon has-text-white mb-6"><i className="fas fa-comment-dots fa-3x"></i></span>
                <p className="title is-5 has-text-white">Feedback</p>
                <p className="subtitle is-6 has-text-white">Help us improve by answering a post-course questionnaire.</p>
              </div>
              <div className="column has-text-centered">
                <span className="icon has-text-white mb-6"><i className="fas fa-star-half-alt fa-3x"></i></span>
                <p className="title is-5 has-text-white">Testimonial</p>
                <p className="subtitle is-6 has-text-white">Share your experience to feature on our future website.</p>
              </div>
            </div>
        </div>
      </section>

      <footer className="section has-text-centered">
        <div className="container mt-6 mb-6 is-max-desktop">
          <h2 className="title is-3 has-text-light">Ready to Begin Your Transformation?</h2>
          <p className="subtitle is-5 mb-5 has-text-light">
            Spots are limited for this exclusive beta price. Secure your place to start building a more resilient and peaceful you.
          </p>
          <button className="button is-secondary is-rounded">
            <span>Apply for the Beta Offer</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Beta;