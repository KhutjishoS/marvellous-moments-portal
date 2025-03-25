
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="section bg-wedding-ivory">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-wedding-gold/10 text-wedding-gold font-medium text-sm mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
              <p className="text-wedding-charcoal/70">
                We're here to help you create the perfect wedding day. Reach out to our team with any questions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-serif mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-wedding-charcoal mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-wedding-charcoal/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-wedding-charcoal mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-wedding-charcoal/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-wedding-charcoal mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-wedding-charcoal/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-wedding-charcoal mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-wedding-charcoal/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-wedding-charcoal mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-wedding-charcoal/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-wedding-gold text-white rounded-lg hover:bg-wedding-gold/90 transition-colors hover-lift"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <div className="mb-10">
                  <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-wedding-gold mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Our Address</h3>
                        <p className="text-wedding-charcoal/70">
                          123 Wedding Street<br />
                          Johannesburg, South Africa
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-wedding-gold mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Phone Number</h3>
                        <p className="text-wedding-charcoal/70">
                          +27 12 345 6789
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-wedding-gold mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Email Address</h3>
                        <p className="text-wedding-charcoal/70">
                          info@weddingportal.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif mb-6">Business Hours</h2>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-wedding-charcoal/70">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-wedding-charcoal/70">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-wedding-charcoal/70">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
