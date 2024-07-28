import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>THE GARAGE</title>
        <meta property="og:title" content="THE GARAGE" />
      </Helmet>
      <Navbar8
        page4Description={
          <fragment>
            <span className="thq-body-small">Page Four Description</span>
          </fragment>
        }
        action1={
          <fragment>
            <span>Get started</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-link thq-body-small">Features</span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="home-text003 thq-body-large">Page One</span>
          </fragment>
        }
        link1={
          <fragment>
            <span className="home-text004 thq-link thq-body-small">Home</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="home-text005 thq-body-large">Page Four</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="home-text006 thq-body-large">Page Two</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-link thq-body-small">Contact Us</span>
          </fragment>
        }
        page1Description={
          <fragment>
            <span className="thq-body-small">Page One Description</span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="thq-body-small">Page Two Description</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text010 thq-link thq-body-small">
              Pricing
            </span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="home-text011 thq-body-large">Page Three</span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="thq-body-small">Page Three Description</span>
          </fragment>
        }
        action2={
          <fragment>
            <span>Secondary Action</span>
          </fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <fragment>
            <span className="thq-body-small">Learn More</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="thq-body-small">Get Started</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text016 thq-heading-1">
              Book Your Spot in THE GARAGE
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text017 thq-body-large">
              Find the perfect workspace for your needs and schedule your spot
              hassle-free with our easy-to-use platform.
            </span>
          </fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <fragment>
            <span className="thq-body-small">Access to premium workspaces</span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Premium Workspaces</span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              Priority booking for high-demand times
            </span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Flexible Scheduling</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Book your spot at the workspace center with ease
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Priority Booking</span>
          </fragment>
        }
      ></Features24>
      <Features25
        feature3Description={
          <fragment>
            <span className="thq-body-small">
              Tailor your workspace environment to suit your needs with our
              customizable options.
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Easily book your workspace spot according to your schedule and
              preferences.
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">
              Premium Plans with Exclusive Benefits
            </span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Flexible Workspace Booking</span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              Unlock premium plans to enjoy exclusive benefits such as priority
              booking, discounts, and more.
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Customizable Work Environment</span>
          </fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <fragment>
            <span className="home-text030 thq-heading-3">$79.99/month</span>
          </fragment>
        }
        plan3Action={
          <fragment>
            <span className="thq-body-small">Sign up now</span>
          </fragment>
        }
        plan11={
          <fragment>
            <span className="home-text032 thq-body-large">Basic plan</span>
          </fragment>
        }
        plan1Action={
          <fragment>
            <span className="thq-body-small">Sign up now</span>
          </fragment>
        }
        plan31={
          <fragment>
            <span className="home-text034 thq-body-large">Enterprise plan</span>
          </fragment>
        }
        plan3Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature2={
          <fragment>
            <span className="thq-body-small">24/7 customer support</span>
          </fragment>
        }
        plan2Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature51={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature2={
          <fragment>
            <span className="thq-body-small">
              Priority access to workspace center
            </span>
          </fragment>
        }
        plan3Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Yearly={
          <fragment>
            <span className="thq-body-large">or $299 yearly</span>
          </fragment>
        }
        plan1Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan2Action={
          <fragment>
            <span className="thq-body-small">Sign up now</span>
          </fragment>
        }
        plan3Feature1={
          <fragment>
            <span className="thq-body-small">All features in Plan 2</span>
          </fragment>
        }
        plan2Feature3={
          <fragment>
            <span className="thq-body-small">Free coffee and snacks</span>
          </fragment>
        }
        plan1Price1={
          <fragment>
            <span className="home-text048 thq-heading-3">$200/yr</span>
          </fragment>
        }
        plan2={
          <fragment>
            <span className="home-text049 thq-body-large">Business plan</span>
          </fragment>
        }
        plan2Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan3Feature2={
          <fragment>
            <span className="thq-body-small">Personal workspace desk</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text053 thq-body-small">
              Choose the perfect plan for you
            </span>
          </fragment>
        }
        plan2Feature1={
          <fragment>
            <span className="thq-body-small">All features in Plan 1</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text055 thq-heading-2">Pricing plan</span>
          </fragment>
        }
        plan3Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1={
          <fragment>
            <span className="home-text057 thq-body-large">Basic plan</span>
          </fragment>
        }
        plan21={
          <fragment>
            <span className="home-text058 thq-body-large">Business plan</span>
          </fragment>
        }
        plan1Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature5={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Yearly1={
          <fragment>
            <span className="thq-body-large">or $29 monthly</span>
          </fragment>
        }
        plan2Price={
          <fragment>
            <span className="home-text063 thq-heading-3">$49.99/month</span>
          </fragment>
        }
        plan3Yearly1={
          <fragment>
            <span className="thq-body-large">or $49 monthly</span>
          </fragment>
        }
        plan2Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Yearly1={
          <fragment>
            <span className="thq-body-large">or $20 monthly</span>
          </fragment>
        }
        plan2Price1={
          <fragment>
            <span className="home-text068 thq-heading-3">$299/yr</span>
          </fragment>
        }
        plan3Yearly={
          <fragment>
            <span className="thq-body-large">or $499 yearly</span>
          </fragment>
        }
        plan3Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Price1={
          <fragment>
            <span className="home-text071 thq-heading-3">$499/yr</span>
          </fragment>
        }
        plan1Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature3={
          <fragment>
            <span className="thq-body-small">
              Discounts on meeting room bookings
            </span>
          </fragment>
        }
        plan1Yearly={
          <fragment>
            <span className="thq-body-large">or $200 yearly</span>
          </fragment>
        }
        plan1Feature1={
          <fragment>
            <span className="thq-body-small">Access to workspace center</span>
          </fragment>
        }
        plan3Feature3={
          <fragment>
            <span className="thq-body-small">
              Complimentary printing services
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="home-text077 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </fragment>
        }
        plan3Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan1Price={
          <fragment>
            <span className="home-text081 thq-heading-3">$29.99/month</span>
          </fragment>
        }
        plan3={
          <fragment>
            <span className="home-text082 thq-body-large">Enterprise plan</span>
          </fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <fragment>
            <span className="home-text083 thq-body-small">
              Discover a variety of workspaces available for booking in your
              desired location.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="home-text084 thq-body-small">
              Secure your spot in the workspace center by booking online
              hassle-free.
            </span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="thq-heading-2">Select Your Plan</span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="home-text086 thq-body-small">
              Choose a plan that suits your needs, whether it&apos;s a basic
              package or a premium plan with exclusive benefits.
            </span>
          </fragment>
        }
        step1Title={
          <fragment>
            <span className="thq-heading-2">Browse Workspaces</span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="thq-heading-2">Book Your Spot</span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="home-text089 thq-body-small">
              Unlock exclusive benefits and amenities by opting for our premium
              plans.
            </span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="thq-heading-2">Enjoy Premium Benefits</span>
          </fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <fragment>
            <span className="thq-body-small">Entrepreneur</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="thq-body-small">Freelancer</span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="thq-body-large">John Doe</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="thq-body-large">David Johnson</span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="home-text095 thq-body-small">
              Great service! The premium plan benefits are totally worth it.
            </span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="thq-body-large">Jane Smith</span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="thq-body-small">Digital Nomad</span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="thq-body-large">Emily Brown</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text099 thq-body-small">
              I love how easy it is to book my workspace spot with this service.
              It saves me so much time and hassle!
            </span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="thq-body-small">Small Business Owner</span>
          </fragment>
        }
        review1={
          <fragment>
            <span className="home-text101 thq-body-small">5 stars</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Testimonials</span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="home-text103 thq-body-small">
              Highly recommend this platform for anyone looking for a convenient
              way to manage workspace bookings.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="home-text104 thq-body-small">
              I&apos;ve tried other scheduling services before, but this one
              stands out for its user-friendly interface and excellent customer
              support.
            </span>
          </fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <fragment>
            <span className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        location1Description={
          <fragment>
            <span className="thq-body-large">
              Visit our main office for inquiries or to book a tour of our
              workspace center.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Contact Us</span>
          </fragment>
        }
        location2Description={
          <fragment>
            <span className="thq-body-large">
              Reach out to our customer support team for any assistance or
              questions regarding our services.
            </span>
          </fragment>
        }
        location1={
          <fragment>
            <span className="home-text109 thq-heading-3">
              Workspace Center Main Office
            </span>
          </fragment>
        }
        location2={
          <fragment>
            <span className="home-text110 thq-heading-3">Customer Support</span>
          </fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <fragment>
            <span className="thq-body-small">FAQ</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-body-small">Plans</span>
          </fragment>
        }
        link1={
          <fragment>
            <span className="thq-body-small">Home</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="thq-body-small">Terms of Service</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small">Services</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-body-small">Contact Us</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="thq-body-small">Cookies Policy</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="home-text118 thq-body-small">Privacy Policy</span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
