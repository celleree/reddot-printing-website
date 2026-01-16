import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle, Zap, Award, Users, DollarSign, FileCheck, Heart } from 'lucide-react';
import logoImage from 'figma:asset/7ce7c1afde59b3ffa1a6a36c81a4d2f1dc591e72.png';
import { QuoteForm } from './components/QuoteForm';
import { BenefitBlock } from './components/BenefitBlock';
import { ReviewCard } from './components/ReviewCard';
import { CTAButton } from './components/CTAButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="RedDOT Printing" 
                className="h-12 sm:h-14 w-auto"
              />
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a 
                href="tel:714-930-5200" 
                className="flex items-center gap-2 text-gray-900 hover:text-red-600 transition-colors font-semibold"
                aria-label="Call (714) 930-5200"
              >
                <Phone className="w-5 h-5 text-red-600" />
                <span className="hidden sm:inline">(714) 930-5200</span>
              </a>
              <a
                href="#quote"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
              >
                Get a Fast Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 2px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              On-Demand Digital Printing in Orange County — Fast, Premium, Guaranteed.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Serving all of Southern California with lightning-fast turnaround, exceptional quality, and owner-led personalized service. Family-owned, local, and trusted.
            </p>

            {/* Trust Bullets */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-medium">Same Day Printing & Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-medium">Hundreds of 5-star reviews</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-medium">30+ years experience • 5th-generation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-medium">100% satisfaction guarantee</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#quote"
                className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all"
              >
                Get a Fast Quote
              </a>
              <a
                href="tel:714-930-5200"
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-lg font-bold text-lg hover:bg-gray-800 transition-all"
              >
                Call (714) 930-5200
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section - Main Conversion Element */}
      <section id="quote" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get Your Fast Quote Today
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Fill out the form below and we'll respond quickly — often within minutes during business hours.
            </p>
            <p className="text-sm text-gray-500">
              Fast response • Fair pricing • Satisfaction guaranteed
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Why Customers Choose RedDOT */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Customers Choose RedDOT Printing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality, personalized service, and decades of printing expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitBlock
              icon={<Zap className="w-8 h-8" />}
              title="Lightning-Fast Turnaround"
              description="Rush orders? No problem. We specialize in quick turnarounds without sacrificing quality. Same-day and next-day options available."
            />
            <BenefitBlock
              icon={<Award className="w-8 h-8" />}
              title="Premium Print Quality"
              description="State-of-the-art digital printing equipment and meticulous attention to detail ensure your projects look outstanding every time."
            />
            <BenefitBlock
              icon={<Users className="w-8 h-8" />}
              title="Personalized Help & Guidance"
              description="Work directly with experienced printing professionals who take time to understand your needs and guide you to the best solution."
            />
            <BenefitBlock
              icon={<Heart className="w-8 h-8" />}
              title="Trusted Local Partner"
              description="Family-owned and operated in Orange County. Hundreds of 5-star reviews from businesses and individuals who trust us with their projects."
            />
            <BenefitBlock
              icon={<DollarSign className="w-8 h-8" />}
              title="Fair & Competitive Pricing"
              description="Quality printing at reasonable prices. We believe in transparent pricing and delivering exceptional value for your investment."
            />
            <BenefitBlock
              icon={<FileCheck className="w-8 h-8" />}
              title="Guarantee-Backed Results"
              description="100% satisfaction guarantee or your money back. We stand behind our work and won't rest until you're completely happy."
            />
          </div>

          <div className="text-center mt-12">
            <CTAButton href="#quote" variant="primary">
              Get Your Quote Today
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Reviews / Social Proof */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it — see why businesses throughout Orange County trust RedDOT Printing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <ReviewCard
              rating={5}
              quote="Last-minute rush request and they delivered! Quality was top notch and the service was incredible. Z really knows his stuff."
              author="Michael R."
              source="Google"
            />
            <ReviewCard
              rating={5}
              quote="Printed beautifully. The colors came out perfect and the paper quality exceeded my expectations. Will definitely be back!"
              author="Sarah L."
              source="Yelp"
            />
            <ReviewCard
              rating={5}
              quote="Best, reliable print shop in Orange County. We've been using them for years and they never disappoint."
              author="David K."
              source="Google"
            />
            <ReviewCard
              rating={5}
              quote="Very reasonable and fair pricing. Great quality work and Z was super helpful walking me through the options."
              author="Jennifer M."
              source="Yelp"
            />
            <ReviewCard
              rating={5}
              quote="Fast turnaround, excellent quality, and amazing customer service. They truly care about getting it right. Highly recommend!"
              author="Robert P."
              source="Google"
            />
            <ReviewCard
              rating={5}
              quote="Z and his team are fantastic! Patient, knowledgeable, and the final product always looks professional. Our go-to print shop."
              author="Amanda T."
              source="Google"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Read more reviews on these platforms:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.google.com/search?q=reddot+printing&rlz=1C1VDKB_enUS962US967&oq=reddot+printing&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhAIARAuGK8BGMcBGIAEGI4FMggIAhAAGBYYHjINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPdIBCDMzMjhqMGo3qAIIsAIB8QWQTAVqJk1lBg&sourceid=chrome&ie=UTF-8#lrd=0x80dcd60c804e4573:0xca541fd0e5c5c832,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all"
              >
                Google Reviews
              </a>
              <a
                href="https://www.yelp.com/biz/reddot-printing-orange-3#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all"
              >
                Yelp Reviews
              </a>
              <a
                href="https://local.yahoo.com/info-195796114-red-dot-printing-fullerton/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAL4D52dPOF5sTG1HGp3zWvaoIUlBkwzY_JS5VGf00Ai12vUFRC3RkS1yhdw1Mr7kAp2sG8WRgM23jMDC9oaJJZyDqtv_zc9oP0XVJ3eIGL0DtEYMi1WOiyAMltAzQ2YZ6Z6BwOsLTqvJ4KFUomtMP-Zr5Q0uogm7UB2h9uOsUVTt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all"
              >
                Yahoo Reviews
              </a>
            </div>
          </div>

          <div className="text-center">
            <CTAButton href="#quote" variant="primary">
              Get Your Quote Today
            </CTAButton>
          </div>
        </div>
      </section>

      {/* About Z (Owner Story) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src="/assets/meet-z.webp"
                  alt="Z, Owner & Master Printer at RedDot Printing"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet Z — Owner & Master Printer
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Zaryab "Z" Niazi brings over 30 years of printing experience and carries on a proud tradition as a <strong className="text-gray-900">5th-generation printer</strong>. What started as a family craft has evolved into a passion for delivering exceptional results for every customer.
                </p>
                <p>
                  At RedDOT Printing, Z personally oversees projects to ensure every detail meets the highest standards. Whether you're a first-time customer or a long-time partner, you'll experience the same dedication to quality and personalized attention.
                </p>
                <p>
                  Known for his patience and expert guidance, Z takes time to understand your vision and recommend the best materials, finishes, and techniques to bring your project to life. From business cards to large-format banners, he treats every job with care.
                </p>
                <p className="text-gray-900 font-semibold">
                  "We don't just print — we partner with you to make sure your message looks its absolute best."
                </p>
                <div className="pt-4">
                  <p className="font-semibold text-gray-900">— Z. Niazi</p>
                  <p className="text-gray-600">Owner, RedDOT Printing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area + SEO Block */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Professional Digital Printing Services in Orange & Fullerton
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-600 space-y-6">
            <p>
              <strong className="text-gray-900">RedDOT Printing</strong> is your premier <strong className="text-gray-900">digital printing shop in Orange County, CA</strong>, specializing in high-quality on-demand printing with fast turnaround times. Located in the heart of Orange, we proudly serve businesses and individuals throughout Fullerton, Anaheim, Santa Ana, Tustin, and the greater Orange County area.
            </p>
            
            <p>
              Our comprehensive printing services include <strong className="text-gray-900">business cards printing, brochures, flyers, postcards, banners, yard signs, posters, booklets, menus, door hangers, labels, stickers</strong>, and much more. Whether you need professional marketing materials, event signage, or custom promotional products, our state-of-the-art digital printing technology delivers exceptional results.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Services Include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Business Cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Brochures & Flyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Banners & Signs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Postcards & Mailers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Posters & Presentations</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Booklets & Catalogs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Labels & Stickers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Menus & Table Tents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Door Hangers & Rack Cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Custom Print Projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Anything you want to get printed</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              As a family-owned <strong className="text-gray-900">custom print shop in Orange County</strong>, we combine cutting-edge printing technology with old-fashioned customer service. Our team provides expert guidance on paper selection, finishes, and design to ensure your printed materials make the right impression.
            </p>

            <p className="text-center font-semibold text-gray-900 pt-4">
              Need printing services in Orange County? Contact RedDOT Printing today for fast quotes and exceptional results.
            </p>
          </div>

          <div className="text-center mt-10">
            <CTAButton href="#quote" variant="primary">
              Request Your Free Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Visit Us or Get In Touch
            </h2>
            <p className="text-xl text-gray-300">
              We're here to help bring your printing projects to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Map Placeholder */}
            <div className="bg-gray-800 rounded-xl overflow-hidden h-80 lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8776699999997!2d-117.85634!3d33.80944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d8e1234567%3A0x1234567890abcdef!2s941%20N%20Elm%20St%20Suite%20A%2C%20Orange%2C%20CA%2092867!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RedDOT Printing Location"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Address</p>
                      <p className="text-gray-300">941 N Elm St, Suite A</p>
                      <p className="text-gray-300">Orange, CA 92867</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Phone</p>
                      <a href="tel:714-930-5200" className="text-gray-300 hover:text-white transition-colors text-lg">
                        (714) 930-5200
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Email</p>
                      <a href="mailto:sales@reddotprinting.com" className="text-gray-300 hover:text-white transition-colors">
                        sales@reddotprinting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Business Hours</p>
                      <p className="text-gray-300">Monday – Friday: 9:00 AM – 6:00 PM</p>
                      <p className="text-gray-300">Saturday & Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:714-930-5200"
                    className="flex-1 px-6 py-4 bg-red-600 text-white rounded-lg font-bold text-center hover:bg-red-700 transition-all"
                  >
                    Call Now
                  </a>
                  <a
                    href="#quote"
                    className="flex-1 px-6 py-4 bg-white text-gray-900 rounded-lg font-bold text-center hover:bg-gray-100 transition-all"
                  >
                    Get a Fast Quote
                  </a>
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">
                  Fast response • Fair pricing • Satisfaction guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src={logoImage} 
                alt="RedDOT Printing" 
                className="h-10 w-auto mb-4 opacity-90"
              />
              <p className="text-gray-500 mb-4">
                Premium digital printing in Orange County since 1990. Family-owned, locally trusted.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#quote" className="hover:text-white transition-colors">Get a Quote</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Z</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-3 mb-4">
                <a 
                  href="https://www.instagram.com/reddotprinting" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram" 
                  className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/reddotprinting" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn" 
                  className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm">
                <a href="tel:714-930-5200" className="hover:text-white transition-colors">
                  (714) 930-5200
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 RedDOT Printing. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
