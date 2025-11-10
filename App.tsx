
import React, { useState, useEffect, useRef } from 'react';
import { ApartnerLogo, AppStoreIcon, GooglePlayIcon, YardiLogo, FeatureIcon } from './components/icons';

// HOOK for scroll animations
const useOnScreen = <T extends Element,>(options?: IntersectionObserverInit): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};


// HELPER component for animated sections
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};


// SECTION COMPONENTS

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-darker/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <ApartnerLogo className="h-10 w-auto" />
                <a href="#contact" className="btn-gold font-semibold text-sm py-2 px-6 rounded-full shadow-md">
                    Get Started
                </a>
            </div>
        </header>
    );
};

const Hero: React.FC = () => {
    return (
        <section
            className="h-screen min-h-[700px] w-full flex items-center justify-center text-center text-white parallax"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1613944118292-43891041183c?q=80&w=1920&auto=format&fit=crop')` }}
        >
            <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(13, 26, 38, 1) 10%, rgba(13, 26, 38, 0.2) 80%)'}}></div>
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                    The Only Property Platform That <span className="gold-text">Pays You</span>.
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300 mb-8">
                    Turn your property into a profit center with Apartner. Zero cost, zero hassle.
                    Enhance resident experience and unlock a new revenue stream effortlessly.
                </p>
                <a href="#contact" className="btn-gold text-lg font-bold py-4 px-10 rounded-full shadow-lg inline-block">
                    Discover Your Earning Potential
                </a>
            </div>
        </section>
    );
};

const Showcase: React.FC = () => {
    const screenshots = [
        { src: 'https://play-lh.googleusercontent.com/xnOw7ZWULEr4Ul0peo-iLuftxPfmJA5psQkD5qEZ2c7YVO19Wn8VyHwPwn3KO-AQfi8=w2560-h1440-rw', alt: 'AffiniPay wallet for rent, utilities, and services' },
        { src: 'https://play-lh.googleusercontent.com/we_b3UjUlW1IjPD1MPK3APxe0Htz9aJPszop5OsdkWnu-0XjqVqx9W3BLPQ0g2JG8bI=w2560-h1440-rw', alt: 'In-app transaction for services like sink repair' },
        { src: 'https://play-lh.googleusercontent.com/QSP4hSAkyb_cBTNDWmdeQVuGwgi0qRwV9-B4P4l9JqtttVPxZ_AvkQg5blVd-c3U0bsB=w2560-h1440-rw', alt: 'Peer-to-peer money transfer between residents' },
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                 <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experience The <span className="gold-text">Resident App</span></h2>
                    <p className="text-center max-w-2xl mx-auto text-slate-400 mb-16">
                        Give your tenants a seamless, all-in-one mobile experience that they will love to use every day.
                    </p>
                </AnimatedSection>
                <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
                    {screenshots.map((shot, index) => (
                        <AnimatedSection key={index}>
                            <div className="phone-mockup">
                                <div className="phone-mockup-screen">
                                    <img src={shot.src} alt={shot.alt} />
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Features: React.FC = () => {
    const residentFeatures = [
        { icon: 'rent', title: 'Seamless Rent Payments', description: 'Easy, secure online payments with full Yardi integration.' },
        { icon: 'maintenance', title: 'Instant Maintenance', description: 'Submit and track service requests right from the app.' },
        { icon: 'community', title: 'Community Hub', description: 'Stay updated on events, news, and connect with neighbors.' },
        { icon: 'smart', title: 'Smart Access', description: 'Open doors, gates, and common areas with a single tap.' },
        { icon: 'marketplace', title: 'Exclusive Marketplace', description: 'Shop for products, book movers, buy insurance, and more.' },
        { icon: 'amenities', title: 'Amenity Booking', description: 'Reserve gyms, pools, and other building facilities.' },
    ];
    const landlordFeatures = [
        { icon: 'dashboard', title: 'Powerful Admin Dashboard', description: 'Manage your properties, residents, and staff with ease.' },
        { icon: 'revenue', title: 'New Revenue Stream', description: 'Earn a share of every transaction made through the app.' },
        { icon: 'permissions', title: 'Custom User Roles', description: 'Assign specific permissions to your property managers.' },
    ];

    return (
        <section className="py-20 md:py-32 bg-brand-dark">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">A <span className="gold-text">Revolution</span> in Resident Living</h2>
                    <p className="text-center max-w-2xl mx-auto text-slate-400 mb-16">
                        Provide your residents with a state-of-the-art mobile app that consolidates all their needs into one elegant interface.
                    </p>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {residentFeatures.map((feature, index) => (
                        <AnimatedSection key={index}>
                           <div className="bg-brand-darker p-8 rounded-lg h-full transition-all duration-300 hover:bg-slate-700 hover:-translate-y-2">
                                <FeatureIcon name={feature.icon as any} className="w-10 h-10 mb-4 text-amber-400" />
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-slate-400">{feature.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
                <div className="mt-20">
                     <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Empowering <span className="gold-text">Property Owners</span></h2>
                        <p className="text-center max-w-2xl mx-auto text-slate-400 mb-16">
                            Beyond resident satisfaction, Apartner provides powerful tools and a unique business model designed for your success.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {landlordFeatures.map((feature, index) => (
                           <AnimatedSection key={index}>
                               <div className="bg-brand-darker p-8 rounded-lg h-full transition-all duration-300 hover:bg-slate-700 hover:-translate-y-2 text-center">
                                    <FeatureIcon name={feature.icon as any} className="w-12 h-12 mb-4 text-amber-400 mx-auto" />
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-slate-400">{feature.description}</p>
                                </div>
                           </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Customization: React.FC = () => {
    const hexFeatures: ('rent' | 'maintenance' | 'community' | 'smart' | 'marketplace' | 'amenities')[] = ['rent', 'maintenance', 'community', 'smart', 'marketplace', 'amenities'];
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <AnimatedSection className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Drag, Drop, Done. <br/><span className="gold-text">Instant App Customization.</span></h2>
                        <p className="text-slate-400 text-lg mb-6">
                           Tailor the resident experience with our intuitive drag-and-drop admin panel. Arrange features, activate services, and watch the changes appear instantly on the mobile app.
                        </p>
                        <p className="text-slate-400 text-lg">No developers, no delays. You are in complete control.</p>
                    </div>
                    <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
                       <div className="relative p-8 bg-brand-dark rounded-xl border border-slate-700">
                           <h3 className="font-bold text-center mb-6 text-slate-300">ADMIN DRAG & DROP EDITOR</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {hexFeatures.map(name => (
                                    <div key={name} className="flex flex-col items-center p-4 bg-brand-darker rounded-lg cursor-move transition-transform hover:scale-110 hover:shadow-lg">
                                        <FeatureIcon name={name} className="w-10 h-10 text-amber-400" />
                                        <span className="text-xs mt-2 capitalize">{name}</span>
                                    </div>
                                ))}
                           </div>
                           <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden lg:block">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-600">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                           </div>
                       </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};


const RevenueModel: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-brand-dark">
            <div className="container mx-auto px-6 text-center">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">From Cost Center to <span className="gold-text">Profit Center</span></h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-16">
                        Stop paying for property management software. With Apartner, you get paid. Our unique partnership model is designed to be purely additive to your bottom line.
                    </p>
                </AnimatedSection>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                     <AnimatedSection>
                        <div className="bg-brand-darker p-8 rounded-lg border border-slate-700 h-full">
                            <div className="text-5xl font-bold gold-text mb-4">1</div>
                            <h3 className="text-2xl font-bold mb-2">Partner With Us</h3>
                            <p className="text-slate-400">Onboarding is simple, fast, and completely free. No hidden fees, no setup costs. Ever.</p>
                        </div>
                    </AnimatedSection>
                     <AnimatedSection>
                        <div className="bg-brand-darker p-8 rounded-lg border border-slate-700 h-full">
                            <div className="text-5xl font-bold gold-text mb-4">2</div>
                            <h3 className="text-2xl font-bold mb-2">Launch to Residents</h3>
                            <p className="text-slate-400">We provide all the materials to get your residents excited and easily onboarded onto the app.</p>
                        </div>
                    </AnimatedSection>
                     <AnimatedSection>
                        <div className="bg-brand-darker p-8 rounded-lg border border-slate-700 h-full">
                            <div className="text-5xl font-bold gold-text mb-4">3</div>
                            <h3 className="text-2xl font-bold mb-2">Receive Monthly Checks</h3>
                            <p className="text-slate-400">A check arrives every month with your share of the revenue generated from the platform. It's that simple.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

const Integrations: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <AnimatedSection className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamlessly Integrated with <span className="gold-text">Yardi</span></h2>
                        <p className="text-slate-400 text-lg">
                           Apartner features full, deep integration with Yardi for all payment-related activities. This ensures a smooth, reliable, and consistent experience for both you and your residents, without disrupting your existing accounting workflows.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                       <div className="bg-white p-8 rounded-lg shadow-2xl">
                          <YardiLogo className="h-16 w-auto" />
                       </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

const CallToAction: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-brand-dark">
            <div className="container mx-auto px-6 text-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Unlock Your Property's Potential?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        The app is ready for your residents. Let's start your journey to increased profits and happier tenants today.
                    </p>
                    <div className="flex justify-center items-center gap-4 md:gap-6">
                        <a href="https://apps.apple.com/us/app/affinitee/id1583030327" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                            <AppStoreIcon className="h-12 md:h-16 w-auto" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.bellrock.affinitee&hl=en" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                            <GooglePlayIcon className="h-12 md:h-16 w-auto" />
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-darker border-t border-slate-800 py-8">
            <div className="container mx-auto px-6 text-center text-slate-500">
                <ApartnerLogo className="h-8 w-auto mx-auto mb-4" />
                <p>&copy; {new Date().getFullYear()} Apartner. All Rights Reserved.</p>
                 <p className="text-xs mt-2">Elevating the property management experience.</p>
            </div>
        </footer>
    );
};


// MAIN APP COMPONENT
export default function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
        <Header />
        <main>
            <Hero />
            <Showcase />
            <Features />
            <Customization />
            <RevenueModel />
            <Integrations />
            <CallToAction />
        </main>
        <Footer />
    </div>
  );
}
