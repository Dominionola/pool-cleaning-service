/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Star, Droplet, Shield, Clock, ArrowRight, Menu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-pool-blue selection:text-white">
      {/* Announcement Bar */}
      <div className="bg-pool-dark text-white text-xs font-medium py-2 px-4 text-center tracking-widest uppercase">
        <span className="text-sun">✦</span> Serving the Greater Metro Area with 5-Star Pool Care <span className="text-sun">✦</span>
      </div>

      {/* Navigation */}
      <nav className="absolute top-8 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center text-white mix-blend-difference">
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wider uppercase">
          <a href="#" className="hover:text-sun transition-colors">Services</a>
          <a href="#" className="hover:text-sun transition-colors">Pricing</a>
          <a href="#" className="hover:text-sun transition-colors">About</a>
        </div>
        
        <div className="text-2xl md:text-4xl font-serif font-bold tracking-tighter text-center flex-1 md:flex-none">
          OASIS<span className="italic font-light">pools</span>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium tracking-wider uppercase">
          <a href="tel:+1234567890" className="flex items-center hover:text-sun transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            (555) 123-4567
          </a>
          <a href="#" className="hover:text-sun transition-colors">Book Now</a>
        </div>
        
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-pool-dark">
          <img 
            src="https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Tropical pool with lounge chairs and sun flare" 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pool-dark/30 via-transparent to-pool-dark/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-none mb-6 drop-shadow-lg">
            YOUR POOL,<br/>
            <span className="italic font-light text-pool-pale">Our Passion</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium tracking-wide drop-shadow-md">
            Expert cleaning, maintenance, and repair for a pristine oasis all season long.
          </p>
          <button className="bg-sun text-pool-dark hover:bg-white transition-colors px-8 py-4 rounded-none font-sans font-bold tracking-widest uppercase text-sm inline-flex items-center group shadow-lg">
            Get a Free Quote
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Decorative Border */}
      <div className="h-4 bg-pool-light w-full flex items-center justify-around overflow-hidden opacity-90">
        {[...Array(20)].map((_, i) => (
          <Droplet key={i} className="w-3 h-3 text-white/50" />
        ))}
      </div>

      {/* Intro Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif text-pool-dark mb-8 leading-tight">
          Crystal Clear <br/>
          <span className="italic text-pool-blue">Perfection.</span>
        </h2>
        <p className="text-lg text-pool-dark/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Oasis Pools is dedicated to your relaxation. We provide premium maintenance and expert care to help you build your routine of backyard tranquility, keeping your water safe, balanced, and beautiful.
        </p>
        <button className="border border-pool-dark text-pool-dark hover:bg-pool-dark hover:text-white transition-colors px-6 py-3 font-sans font-bold tracking-widest uppercase text-xs">
          Explore Services
        </button>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="group cursor-pointer relative overflow-hidden bg-pool-pale">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582657118090-af35eecce8bc?q=80&w=800&auto=format&fit=crop" 
                alt="Weekly Maintenance" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-pool-blue text-white p-6 flex justify-between items-center transform translate-y-0 transition-transform">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1 text-pool-pale">Keep it pristine</p>
                <h3 className="font-serif text-2xl">Weekly Maintenance</h3>
              </div>
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="group cursor-pointer relative overflow-hidden bg-pool-pale">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop" 
                alt="Chemical Balancing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-pool-light text-pool-dark p-6 flex justify-between items-center transform translate-y-0 transition-transform">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1 text-pool-dark/70">Perfect harmony</p>
                <h3 className="font-serif text-2xl">Chemical Balancing</h3>
              </div>
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="group cursor-pointer relative overflow-hidden bg-pool-pale">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=800&auto=format&fit=crop" 
                alt="Equipment Repair" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-pool-dark text-white p-6 flex justify-between items-center transform translate-y-0 transition-transform">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1 text-pool-pale/70">Fix it right</p>
                <h3 className="font-serif text-2xl">Equipment Repair</h3>
              </div>
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="border-y border-pool-dark/10 py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 text-sm font-serif tracking-widest uppercase text-pool-dark/80">
          <div className="flex items-center flex-col gap-3 mx-auto">
            <Droplet className="w-8 h-8 text-pool-blue" />
            <span>Eco-Friendly</span>
          </div>
          <div className="flex items-center flex-col gap-3 mx-auto">
            <Shield className="w-8 h-8 text-pool-blue" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center flex-col gap-3 mx-auto">
            <Clock className="w-8 h-8 text-pool-blue" />
            <span>Reliable Weekly</span>
          </div>
          <div className="flex items-center flex-col gap-3 mx-auto">
            <Star className="w-8 h-8 text-pool-blue" />
            <span>5-Star Rated</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-pool-blue text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-4">
              PLANS FOR ALL <span className="italic text-pool-pale">YOUR SEASONS</span>
            </h2>
            <p className="text-white/90 font-sans tracking-wide text-lg">Transparent pricing. No hidden fees. Just crystal clear water.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white text-pool-dark p-8 flex flex-col shadow-xl">
              <div className="mb-8">
                <h3 className="text-sm font-bold tracking-widest uppercase text-pool-blue mb-2">Chemical Only</h3>
                <p className="font-serif text-4xl mb-4 text-pool-dark">The Balancer</p>
                <p className="text-pool-dark/70 text-sm h-12">Perfect for DIYers who just need help keeping the water chemistry safe and balanced.</p>
              </div>
              <div className="mb-8 flex-1">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-light mr-3 shrink-0"/> Water testing & balancing</li>
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-light mr-3 shrink-0"/> Chemical addition</li>
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-light mr-3 shrink-0"/> Empty skimmer baskets</li>
                </ul>
              </div>
              <button className="w-full border-2 border-pool-dark py-4 font-bold tracking-widest uppercase text-xs hover:bg-pool-dark hover:text-white transition-colors">
                Get Quote
              </button>
            </div>

            {/* Plan 2 */}
            <div className="bg-white text-pool-dark p-8 flex flex-col relative shadow-2xl transform md:-translate-y-4 border-t-4 border-sun">
              <div className="absolute top-0 right-8 bg-sun text-pool-dark text-[10px] font-bold tracking-widest uppercase py-1.5 px-4 transform -translate-y-1/2 shadow-md">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-sm font-bold tracking-widest uppercase text-pool-blue mb-2">Full Service</h3>
                <p className="font-serif text-4xl mb-4 text-pool-dark">The Oasis</p>
                <p className="text-pool-dark/70 text-sm h-12">Our comprehensive weekly cleaning service so you never have to lift a finger.</p>
              </div>
              <div className="mb-8 flex-1">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-blue mr-3 shrink-0"/> Everything in Balancer</li>
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-blue mr-3 shrink-0"/> Net surface debris</li>
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-blue mr-3 shrink-0"/> Brush walls & steps</li>
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-blue mr-3 shrink-0"/> Vacuum pool floor</li>
                </ul>
              </div>
              <button className="w-full bg-pool-dark text-white py-4 font-bold tracking-widest uppercase text-xs hover:bg-pool-blue transition-colors shadow-md">
                Get Quote
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-white text-pool-dark p-8 flex flex-col shadow-xl">
              <div className="mb-8">
                <h3 className="text-sm font-bold tracking-widest uppercase text-pool-blue mb-2">Premium Care</h3>
                <p className="font-serif text-4xl mb-4 text-pool-dark">The Resort</p>
                <p className="text-pool-dark/70 text-sm h-12">Ultimate care including filter cleans and preventative maintenance.</p>
              </div>
              <div className="mb-8 flex-1">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-light mr-3 shrink-0"/> Everything in Oasis</li>
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-light mr-3 shrink-0"/> Bi-annual filter cleaning</li>
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-light mr-3 shrink-0"/> Equipment inspection</li>
                  <li className="flex items-start"><Droplet className="w-5 h-5 text-pool-light mr-3 shrink-0"/> Priority repair scheduling</li>
                </ul>
              </div>
              <button className="w-full border-2 border-pool-dark py-4 font-bold tracking-widest uppercase text-xs hover:bg-pool-dark hover:text-white transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-pool-pale py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-pool-dark mb-4">
              We're locally grown,<br/>
              <span className="font-sans font-light tracking-widest uppercase text-3xl md:text-5xl text-pool-blue">Pool Professional Made</span>
            </h2>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" 
              alt="Pool cleaning professional" 
              className="w-full h-[600px] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute -bottom-12 right-6 md:right-24 bg-white p-8 md:p-12 max-w-md border border-pool-dark/10 shadow-xl">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-pool-dark mb-6">
                Oasis Pools exists to make pool ownership a fun and easy daily practice. It's time to throw open the doors of relaxation and welcome everyone inside.
              </p>
              <button className="border-2 border-pool-dark px-8 py-3 font-bold tracking-widest uppercase text-[10px] hover:bg-pool-dark hover:text-white transition-colors">
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 px-6 bg-pool-dark text-white mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-sun mb-4">From Our Community</p>
            <h2 className="text-4xl md:text-5xl font-serif">5-Star Google Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white text-pool-dark p-8 shadow-lg">
              <div className="flex text-sun mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="font-serif text-lg mb-8 leading-relaxed">
                "I always count on Oasis for effective, reliable service that fits seamlessly into my routine. My pool has never looked better."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pool-pale rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" alt="Sarah" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-sm">Sarah M.</p>
                  <p className="text-xs text-pool-dark/60 uppercase tracking-wider mt-1">Homeowner</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white text-pool-dark p-8 shadow-lg">
              <div className="flex text-sun mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="font-serif text-lg mb-8 leading-relaxed">
                "I love adding their weekly service to my routine. It gives me peace of mind knowing the chemicals are perfectly balanced."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pool-pale rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="Michael" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-sm">Michael T.</p>
                  <p className="text-xs text-pool-dark/60 uppercase tracking-wider mt-1">Property Manager</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white text-pool-dark p-8 shadow-lg">
              <div className="flex text-sun mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="font-serif text-lg mb-8 leading-relaxed">
                "Oasis is the best because of their transparency. I get a detailed report after every visit. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pool-pale rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Jessica" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-sm">Jessica R.</p>
                  <p className="text-xs text-pool-dark/60 uppercase tracking-wider mt-1">Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#011E2C] text-pool-pale pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-serif font-bold tracking-tighter mb-6 text-white">
              OASIS<span className="italic font-light">pools</span>
            </div>
            <p className="text-sm text-pool-pale/70 mb-6 leading-relaxed">
              Premium pool care for the modern homeowner. Crystal clear water, guaranteed.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold tracking-widest uppercase text-xs mb-6 text-pool-light">Services</h4>
            <ul className="space-y-4 text-sm text-pool-pale/80">
              <li><a href="#" className="hover:text-white transition-colors">Weekly Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chemical Balancing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equipment Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Green Pool Recovery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-widest uppercase text-xs mb-6 text-pool-light">Company</h4>
            <ul className="space-y-4 text-sm text-pool-pale/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-widest uppercase text-xs mb-6 text-pool-light">Grow with us.</h4>
            <p className="text-sm text-pool-pale/80 mb-4 leading-relaxed">Sign up to get pool care tips, seasonal recommendations, and more.</p>
            <div className="flex shadow-lg">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 px-4 py-3 w-full text-sm text-white placeholder-white/50 focus:outline-none focus:border-pool-light"
              />
              <button className="bg-pool-light text-pool-dark px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-pool-pale/50">
          <p>&copy; 2026 OASIS POOLS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">ACCESSIBILITY</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

