import React, { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './ICP1.css';

export default function ICP1() {
  const clientSwiperRef = useRef(null);

  useEffect(() => {
    let problemSwiper = null;
    let verticalSwiper = null;
    let clientSwiper = null;
    let ctx = null;
    let isDestroyed = false;

    // Dynamically load heavy animation & slider libraries only when mounting
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('swiper'),
      import('swiper/modules'),
      import('vanilla-tilt')
    ]).then(([
      { default: gsap },
      { default: ScrollTrigger },
      { default: Swiper },
      { EffectCoverflow, Navigation, Autoplay, Mousewheel },
      { default: VanillaTilt }
    ]) => {
      if (isDestroyed) return;

      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Initialize VanillaTilt
      const tiltElements = document.querySelectorAll("[data-tilt]");
      VanillaTilt.init(tiltElements);

      // Initialize GSAP & Swiper within the GSAP context
      ctx = gsap.context(() => {
        // GSAP Scroll Animations
        gsap.from(".hero-text > *", { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" });
        gsap.from(".hero-cards > div", { x: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 });
        gsap.from(".section-title", { scrollTrigger: { trigger: ".section-title", start: "top 85%" }, y: 30, opacity: 0, duration: 0.8, stagger: 0.1 });

        // 4. Network Hub Animation
        let hubTimeline = gsap.timeline({ scrollTrigger: { trigger: "#network-section", start: "top 70%", end: "center 30%", toggleActions: "restart reset restart reset" } });

        hubTimeline.from(".hub-reveal", { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }, 0); 
        hubTimeline.from("#hub-center", { scale: 0, opacity: 0, duration: 1, ease: "back.out(1.5)" }, 0.3);

        gsap.set(".hub-node", { top: "50%", left: "50%", xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

        const nodes = gsap.utils.toArray(".hub-node");
        nodes.forEach((node, index) => {
            hubTimeline.to(node, {
                top: node.getAttribute('data-end-top'),
                left: node.getAttribute('data-end-left'),
                scale: 1,
                opacity: 1,
                rotation: 360, 
                duration: 1.2,
                ease: "power3.out"
            }, 0.8 + (index * 0.3)); 
        });
        
        // 1. Problem Swiper
        problemSwiper = new Swiper(".problem-swiper", {
            modules: [EffectCoverflow, Autoplay],
            effect: "coverflow", 
            grabCursor: true, 
            centeredSlides: true, 
            slidesPerView: "auto", 
            loop: true, 
            loopedSlides: 5,
            autoplay: { delay: 2000, disableOnInteraction: false },
            coverflowEffect: { rotate: 0, stretch: -30, depth: 100, modifier: 1, slideShadows: false }, 
            speed: 1000 
        });

        // 2. Vertical Dashboard Swiper
        verticalSwiper = new Swiper('.vertical-swiper', {
            modules: [Autoplay, Mousewheel],
            direction: 'vertical', 
            slidesPerView: "auto", 
            centeredSlides: true,
            spaceBetween: 30, 
            loop: true, 
            grabCursor: true,
            autoplay: { delay: 3000, disableOnInteraction: false }, 
            speed: 1200, 
            mousewheel: true,
        });

        // 5. Automated Content Workspace logic
        const typeText = "Create a Diwali offer for my saree boutique..."; 
        const typeContainer = document.querySelector('#auto-type-text');
        const genBtn = document.querySelector('#auto-generate-btn');
        const genAssets = document.querySelector('#generated-assets');
        const igImage = document.querySelector('#ig-generated-img');
        const posterImage = document.querySelector('#poster-generated-img');
        let isTyped = false;

        if (typeContainer && genBtn && genAssets && igImage && posterImage) {
            ScrollTrigger.create({
                trigger: typeContainer,
                start: "top 85%",
                onEnter: () => {
                    if(!isTyped) {
                        isTyped = true;
                        let i = 0;
                        typeContainer.innerHTML = '';
                        const interval = setInterval(() => {
                            if (i < typeText.length) {
                                typeContainer.innerHTML += typeText.charAt(i);
                                i++;
                            } else {
                                clearInterval(interval);
                                typeContainer.classList.add('typing-cursor');
                                genBtn.disabled = false;
                                genBtn.classList.add('btn-eager');
                            }
                        }, 50);
                    }
                }
            });

            genBtn.addEventListener('click', () => {
                genBtn.classList.remove('btn-eager');
                typeContainer.classList.remove('typing-cursor');
                genBtn.innerHTML = 'Processing... <i class="fa-solid fa-circle-notch fa-spin ml-2"></i>'; 
                
                setTimeout(() => {
                    genBtn.innerHTML = 'Generated! <i class="fa-solid fa-check ml-2"></i>';
                    genBtn.className = "w-full md:w-auto mt-4 md:mt-0 bg-green-500 text-white px-10 py-3.5 rounded-full md:ml-4 heading1 text-lg shadow-[0_8px_20px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2 transition-all duration-300";
                    genAssets.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                    
                    setTimeout(() => {
                        igImage.classList.remove('opacity-0');
                        posterImage.classList.remove('opacity-0');
                    }, 300);
                }, 1500);
            });
        }

        // 3. Testimonial Swiper
        clientSwiper = new Swiper('.client-swiper', {
            modules: [Navigation],
            slidesPerView: 'auto', 
            centeredSlides: true, 
            spaceBetween: 30, 
            loop: true, 
            grabCursor: true,
            autoplay: false,
            speed: 1500, 
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.client-next',
                prevEl: '.client-prev',
            },
        });
        
        // Slide to card on hover (half-visible cards)
        if (clientSwiper.slides) {
            Array.from(clientSwiper.slides).forEach(slide => {
                slide.addEventListener('mouseenter', () => {
                    const slideIndex = Array.from(slide.parentNode.children).indexOf(slide);
                    if (slideIndex !== -1 && slideIndex !== clientSwiper.activeIndex) {
                        clientSwiper.slideTo(slideIndex);
                    }
                });
            });
        }

        clientSwiperRef.current = clientSwiper;
      });
    });

    return () => {
      isDestroyed = true;
      if (problemSwiper) problemSwiper.destroy();
      if (verticalSwiper) verticalSwiper.destroy();
      if (clientSwiper) clientSwiper.destroy();
      if (ctx) ctx.revert();
      
      const tiltElements = document.querySelectorAll("[data-tilt]");
      tiltElements.forEach(el => {
        if (el.vanillaTilt) el.vanillaTilt.destroy();
      });
    };
  }, []);

  return (
    <div className="backgroupnd_color bodyText antialiased text_color">
      {/* 1. HERO SECTION */}
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden hero-section">
        <div className="mesh-bg"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="relative z-10 hero-text">
                <div className="inline-block bg-white primary_color heading2 px-4 py-1.5 rounded-full mb-6 border border-[#0859b8]/20 shadow-sm text-xs uppercase tracking-widest">
                    For India's Local Business Owners
                </div>
                <h1 className="text-6xl md:text-7xl heading1 leading-[1.05] mb-6 text_color tracking-tight">
                    Every small business <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0859b8] to-[#00adc4]">owner has a dream.</span>
                </h1>
                <p className="text-2xl text-gray-600 mb-8 bodyText">
                    You started your business to serve people.<br />
                    <span className="heading2 primary_color">Not to spend your day figuring out marketing.</span>
                </p>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <button className="interactive w-full md:w-auto primary_bg text-white heading1 px-8 py-4 rounded-full text-lg hover:secondary_bg transition-colors duration-300 shadow-glass flex items-center justify-center gap-2">
                        Start Growing for free <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <p className="heading2 text-gray-400 text-sm">Free to start. No credit card required.</p>
                </div>
            </div>

            <div className="relative h-[600px] w-full hidden lg:block perspective-1000 hero-cards">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-[#0859b8]/10 to-[#00adc4]/20 border-4 border-white shadow-2xl"></div>
                <div className="absolute top-[10%] right-[5%] glass-panel p-6 rounded-3xl w-72 shadow-glass z-20" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4 shadow-sm">
                        <i className="fa-solid fa-star text-[16px]"></i>
                    </div>
                    <h4 className="heading1 text_color text-lg mb-2">The Dream</h4>
                    <ul className="space-y-2 heading2 text-gray-500 text-sm">
                        <li className="flex items-center gap-2"><i className="text-green-500 w-4 h-4 fa-solid fa-circle-check text-[16px]"></i> Being known in my city</li>
                        <li className="flex items-center gap-2"><i className="text-green-500 w-4 h-4 fa-solid fa-circle-check text-[16px]"></i> Regular enquiries every week</li>
                        <li className="flex items-center gap-2"><i className="text-green-500 w-4 h-4 fa-solid fa-circle-check text-[16px]"></i> Positive reviews online</li>
                    </ul>
                </div>
                <div className="absolute bottom-[20%] left-[5%] bg-[#222222] text-white p-6 rounded-3xl w-72 shadow-2xl z-30" data-tilt data-tilt-max="10" data-tilt-scale="1.05">
                    <i className="accent_color w-8 h-8 mb-4 fa-solid fa-comment-dots text-[#e7eb90] text-[32px] mb-4"></i>
                    <p className="bodyText text-sm leading-relaxed">
                        "I know my business. I just don't know how to make more people discover it."
                    </p>
                    <p className="mt-4 text-xs heading2 text-gray-400 uppercase tracking-widest">— Every Founder</p>
                </div>
            </div>
        </div>
    </section>

    {/* 2. THE STRUGGLE (Seamless Infinite Loop Fix) */}
    <section className="py-24 bg-gray-50 border-y border-gray-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-4xl md:text-5xl heading1 text_color mb-4 tracking-tight section-title">
                Marketing should <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0859b8] to-[#00adc4]">not feel impossible.</span>
            </h2>
            <p className="text-xl text-gray-500 bodyText max-w-2xl mx-auto section-title">
                Are you throwing time and money into a <span className="heading2 text_color italic">black box?</span>
            </p>
        </div>

        <div className="swiper problem-swiper pb-4">
            <div className="swiper-wrapper">
                {/* Group 1 */}
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 primary_bg/10 rounded-2xl flex items-center justify-center primary_color mb-6"><i className="w-6 h-6 fa-solid fa-layer-group text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">Too many places</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">Google, Instagram, Facebook, WhatsApp...</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"I don't know where to focus first."</div>
                    </div>
                </div>
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 secondary_bg/10 rounded-2xl flex items-center justify-center secondary_color mb-6"><i className="w-6 h-6 fa-solid fa-microphone-lines-slash text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">Complicated terms</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">Website, keywords, rankings, funnels.</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"People explain marketing in a language I don't understand."</div>
                    </div>
                </div>
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 primary_bg/10 rounded-2xl flex items-center justify-center primary_color mb-6"><i className="w-6 h-6 fa-solid fa-clock text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">No time</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">I'm busy serving customers.</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"I cannot spend hours figuring out what to post."</div>
                    </div>
                </div>
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 secondary_bg/10 rounded-2xl flex items-center justify-center secondary_color mb-6"><i className="w-6 h-6 fa-solid fa-chart-pie text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">Wasted effort</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">I'm spending money and effort.</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"But is any of it actually helping my business grow?"</div>
                    </div>
                </div>
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 primary_bg/10 rounded-2xl flex items-center justify-center primary_color mb-6"><i className="w-6 h-6 fa-solid fa-eye-slash text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">Am I visible?</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">When people search for businesses like mine...</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"Do they find me or my competitors?"</div>
                    </div>
                </div>
                
                {/* Group 2 (Duplicated for seamless infinite loop without blank gaps) */}
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 primary_bg/10 rounded-2xl flex items-center justify-center primary_color mb-6"><i className="w-6 h-6 fa-solid fa-layer-group text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">Too many places</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">Google, Instagram, Facebook, WhatsApp...</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"I don't know where to focus first."</div>
                    </div>
                </div>
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 secondary_bg/10 rounded-2xl flex items-center justify-center secondary_color mb-6"><i className="w-6 h-6 fa-solid fa-microphone-lines-slash text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">Complicated terms</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">Website, keywords, rankings, funnels.</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"People explain marketing in a language I don't understand."</div>
                    </div>
                </div>
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 primary_bg/10 rounded-2xl flex items-center justify-center primary_color mb-6"><i className="w-6 h-6 fa-solid fa-clock text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">No time</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">I'm busy serving customers.</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"I cannot spend hours figuring out what to post."</div>
                    </div>
                </div>
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 secondary_bg/10 rounded-2xl flex items-center justify-center secondary_color mb-6"><i className="w-6 h-6 fa-solid fa-chart-pie text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">Wasted effort</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">I'm spending money and effort.</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"But is any of it actually helping my business grow?"</div>
                    </div>
                </div>
                <div className="swiper-slide interactive">
                    <div className="problem-card bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="w-14 h-14 primary_bg/10 rounded-2xl flex items-center justify-center primary_color mb-6"><i className="w-6 h-6 fa-solid fa-eye-slash text-[24px]"></i></div>
                        <h3 className="text-2xl heading1 text_color mb-2">Am I visible?</h3>
                        <p className="text-gray-500 bodyText mb-4 text-sm">When people search for businesses like mine...</p>
                        <div className="bg-gray-700 p-3 rounded-lg border border-gray-700 text-xs heading1 text-white">"Do they find me or my competitors?"</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* 3. THE SOLUTION (Side-Aligned Header + Vertical Gliding Cards) */}
    <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center lg:items-start">
            
            <div className="lg:w-5/12 lg:sticky lg:top-40 text-center lg:text-left z-10">
                <span className="inline-block primary_bg/5 primary_color heading1 px-4 py-1.5 rounded-full mb-6 border border-[#0859b8]/20 text-xs uppercase tracking-widest">
                    The Solution
                </span>
                <h2 className="text-5xl md:text-6xl heading1 text_color tracking-tight leading-tight mb-6">
                    Imagine if marketing was <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0859b8] to-[#00adc4]">simple.</span>
                </h2>
                <p className="text-xl text-gray-500 bodyText mb-8">
                    Everything handled in one place. No jargon, just growth. Watch how we automate your success step by step.
                </p>
                <div className="hidden lg:flex items-center gap-2 primary_color heading2 text-sm">
                    <i className="w-4 h-4 animate-bounce fa-solid fa-arrow-pointer text-[16px] animate-bounce"></i> Watch it glide
                </div>
            </div>

            <div className="lg:w-7/12 w-full">
                <div className="swiper vertical-swiper">
                    <div className="swiper-wrapper">
                        
                        <div className="swiper-slide">
                            <div className="mini-card bg-gradient-to-br from-white to-blue-50/50 border border-gray-100 shadow-soft p-8 h-full flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <div className="w-12 h-12 primary_bg/10 primary_color rounded-xl flex items-center justify-center mb-4"><i className="w-6 h-6 fa-solid fa-bullseye text-[24px]"></i></div>
                                    <h3 className="text-2xl heading1 text_color mb-2">The Plan</h3>
                                    <p className="text-sm text-gray-500 bodyText">Understand your current standing and discover clear, actionable opportunities.</p>
                                </div>
                                <div className="w-full md:w-1/2 bg-white rounded-2xl p-4 shadow-sm border border-gray-50 relative h-32 flex flex-col justify-end overflow-hidden">
                                    <div className="absolute top-4 left-4 text-xs heading2 text-gray-400 uppercase tracking-widest">Visibility Score</div>
                                    <div className="absolute top-3 right-4 text-lg heading1 text-green-500">92/100</div>
                                    <svg className="w-full h-16 overflow-visible mt-auto" viewBox="0 0 200 60">
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#0859b8" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="#0859b8" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,60 L0,40 Q40,50 80,20 T160,20 T200,5 L200,60 Z" fill="url(#grad1)"></path>
                                        <path className="line-draw" d="M0,40 Q40,50 80,20 T160,20 T200,5" fill="none" stroke="#0859b8" strokeWidth="3" strokeLinecap="round"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="mini-card bg-white border border-gray-100 shadow-soft p-8 h-full flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <div className="w-12 h-12 secondary_bg/10 secondary_color rounded-xl flex items-center justify-center mb-4"><i className="w-6 h-6 fa-solid fa-bolt text-[24px]"></i></div>
                                    <h3 className="text-2xl heading1 text_color mb-2">Getting It Done</h3>
                                    <p className="text-sm text-gray-500 bodyText">Deploy content and update maps across all channels instantly.</p>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-3">
                                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                        <div className="flex justify-between text-xs heading2 mb-2">
                                            <span className="flex items-center gap-1 text-gray-600"><i className="w-3 h-3 text-pink-500 fa-brands fa-instagram text-[16px]"></i> IG Sync</span>
                                            <span className="text-green-500">Done</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-pink-500 h-1.5 rounded-full bar-w w-full"></div></div>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                        <div className="flex justify-between text-xs heading2 mb-2">
                                            <span className="flex items-center gap-1 text-gray-600"><i className="w-3 h-3 primary_color fa-solid fa-location-dot text-[16px]"></i> G-Maps</span>
                                            <span className="text-green-500">Done</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5"><div className="primary_bg h-1.5 rounded-full bar-w d-1 w-full"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="mini-card bg-[#222222] text-white shadow-2xl p-8 h-full flex flex-col md:flex-row gap-8 items-center relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e7eb90]/10 rounded-full blur-2xl"></div>
                                <div className="flex-1 relative z-10">
                                    <div className="w-12 h-12 bg-white/10 accent_color rounded-xl flex items-center justify-center mb-4"><i className="w-6 h-6 fa-solid fa-chart-line text-[24px]"></i></div>
                                    <h3 className="text-2xl heading1 text-white mb-2">Keeping Track</h3>
                                    <p className="text-sm text-gray-400 bodyText">Watch your real-time audience growth from one simple dashboard.</p>
                                </div>
                                <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-end h-32">
                                    <div className="text-4xl heading1 text-white mb-1">8,459</div>
                                    <div className="accent_color text-xs heading2 flex items-center gap-1 mb-4"><i className="w-3 h-3 fa-solid fa-arrow-trend-up text-[12px]"></i> +24% this week</div>
                                    <div className="flex items-end gap-1.5 h-12">
                                        <div className="flex-1 bg-white/20 rounded-t-sm h-[40%] bar-up"></div>
                                        <div className="flex-1 bg-white/30 rounded-t-sm h-[60%] bar-up d-1"></div>
                                        <div className="flex-1 bg-white/40 rounded-t-sm h-[30%] bar-up d-2"></div>
                                        <div className="flex-1 bg-white/60 rounded-t-sm h-[80%] bar-up d-3"></div>
                                        <div className="flex-1 bg-[#e7eb90] rounded-t-sm h-[100%] bar-up relative">
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] heading1 accent_color">NOW</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="mini-card bg-white border border-gray-100 shadow-soft p-8 h-full flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                                        <i className="w-6 h-6 fa-solid fa-arrow-trend-up text-[24px]"></i>
                                    </div>
                                    <h3 className="text-2xl heading1 text_color mb-2">Getting Better</h3>
                                    <p className="text-sm text-gray-500 bodyText">Receive smart, automated suggestions to continually optimize your growth.</p>
                                </div>
                                <div className="w-full md:w-1/2 flex items-center justify-center">
                                    <div className="relative w-28 h-28 flex items-center justify-center">
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                            <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            <path className="secondary_color line-draw" strokeDasharray="85, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        </svg>
                                        <div className="absolute text-center">
                                            <div className="text-xl heading1 text_color">85%</div>
                                            <div className="text-[8px] text-gray-400 heading2 uppercase tracking-widest">Score</div>
                                        </div>
                                        <div className="absolute inset-0 border-2 border-secondary rounded-full pulse-ring"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* 4. THE NETWORK HUB */}
    <section className="py-32 bg-[#f8fbff] relative overflow-hidden" id="network-section">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
            <div className="hub-text-container relative z-10">
                <div className="inline-flex items-center gap-2 bg-white primary_color px-4 py-1.5 rounded-full text-xs heading1 tracking-widest uppercase mb-6 border border-[#0859b8]/10 shadow-sm hub-reveal">
                    <div className="w-2 h-2 primary_bg rounded-full animate-pulse"></div>
                    Smarter way to get discovered
                </div>
                <h2 className="text-5xl lg:text-6xl heading1 text_color leading-[1.1] mb-6 tracking-tight hub-reveal">
                    Stop Being Invisible. <br />
                    <span className="primary_color">Get Chosen First.</span>
                </h2>
                <p className="text-lg text-gray-500 bodyText mb-10 max-w-lg hub-reveal">
                    Every single day, buyers in your local neighborhood are searching online for your services. If they can't find your brand, they buy from your direct competitors. Marketing4SIGHT locks in your visibility automatically.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white hover:-translate-y-1 transition-transform hub-reveal">
                        <div className="w-8 h-8 bg-blue-50 primary_color rounded-lg flex items-center justify-center heading1 text-sm mb-4">01</div>
                        <h4 className="text-sm heading1 text_color mb-1">2-Minute Sync</h4>
                        <p className="text-xs text-gray-500 bodyText">Tell us about your business.</p>
                    </div>
                    <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white hover:-translate-y-1 transition-transform hub-reveal">
                        <div className="w-8 h-8 bg-blue-50 primary_color rounded-lg flex items-center justify-center heading1 text-sm mb-4">02</div>
                        <h4 className="text-sm heading1 text_color mb-1">Auto Presence</h4>
                        <p className="text-xs text-gray-500 bodyText">We map your entire footprint.</p>
                    </div>
                    <div className="border border-[#0859b8]/20 rounded-2xl p-5 shadow-md bg-gradient-to-b from-white to-blue-50 hover:-translate-y-1 transition-transform hub-reveal">
                        <div className="w-8 h-8 primary_bg text-white rounded-lg flex items-center justify-center heading1 text-sm mb-4 shadow-sm">03</div>
                        <h4 className="text-sm heading1 primary_color mb-1">Dominate Locally</h4>
                        <p className="text-xs primary_color/70 heading2">Scale map hits & reviews.</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[500px] flex items-center justify-center lg:ml-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-44 h-44 border-[4px] border-secondary flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,173,196,0.3)] float-subtle" id="hub-center">
                    <span className="text-[10px] heading1 font-extrabold text-gray-800 uppercase tracking-widest mb-1">Marketing</span>
                    <span className="text-2xl heading1 primary_color tracking-tight">4SIGHT</span>
                </div>
                <div className="hub-node absolute bg-white px-5 py-3 rounded-2xl flex items-center gap-3 z-10 float-subtle" data-end-top="25%" data-end-left="20%">
                    <div className="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center text-pink-500"><i className="w-4 h-4 fa-brands fa-instagram text-[16px]"></i></div>
                    <span className="text-xs heading1 text_color leading-tight">Instagram<br /><span className="bodyText text-gray-500">Feed</span></span>
                </div>
                <div className="hub-node absolute bg-white px-5 py-3 rounded-2xl flex items-center gap-3 z-10 float-subtle" data-end-top="10%" data-end-left="50%">
                    <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-500 heading1">G</div>
                    <span className="text-xs heading1 text_color leading-tight">Google<br /><span className="bodyText text-gray-500">Search</span></span>
                </div>
                <div className="hub-node absolute bg-white px-5 py-3 rounded-2xl flex items-center gap-3 z-10 float-subtle" data-end-top="25%" data-end-left="85%">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><i className="w-4 h-4 fa-brands fa-facebook-f text-[16px]"></i></div>
                    <span className="text-xs heading1 text_color leading-tight">Facebook<br /><span className="bodyText text-gray-500">Reach</span></span>
                </div>
                <div className="hub-node absolute bg-white px-5 py-3 rounded-2xl flex items-center gap-3 z-10 float-subtle" data-end-top="80%" data-end-left="80%">
                    <div className="w-8 h-8 bg-[#e7eb90] rounded-full flex items-center justify-center text_color"><i className="w-4 h-4 fill-current fa-solid fa-star text-[16px]"></i></div>
                    <span className="text-xs heading1 text_color leading-tight">5★ Local<br /><span className="bodyText text-gray-500">Reviews</span></span>
                </div>
                <div className="hub-node absolute bg-white px-5 py-3 rounded-2xl flex items-center gap-3 z-10 float-subtle" data-end-top="80%" data-end-left="20%">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600"><i className="w-4 h-4 fa-solid fa-location-dot text-[16px]"></i></div>
                    <span className="text-xs heading1 text_color leading-tight">Google<br /><span className="bodyText text-gray-500">Maps</span></span>
                </div>
            </div>
        </div>
    </section>

    {/* 5. NEW: Automated Content Workspace */}
    <section className="py-24 px-6 bg-white relative overflow-hidden border-y border-gray-100">
        <div className="absolute inset-0 workspace-bg z-0"></div>

        <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
                <span className="inline-block primary_bg/5 primary_color heading1 px-4 py-1.5 rounded-full mb-4 border border-[#0859b8]/20 text-xs uppercase tracking-widest">
                    Automation
                </span>
                <h2 className="text-4xl md:text-5xl heading1 text_color mb-4 tracking-tight">Create content in minutes.</h2>
                <p className="text-xl text-gray-500 bodyText">No designer. No writer. No complicated software.</p>
            </div>

            {/* Application Mockup Container */}
            <div className="bg-white border border-gray-200 rounded-[2rem] shadow-soft overflow-hidden">
                {/* Mac-style Window Header */}
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="ml-4 text-xs heading2 text-gray-400 tracking-widest uppercase">Marketing Workspace</span>
                </div>
                
                <div className="p-8 bg-gray-50/50">
                    {/* Automated Chat Input */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 flex flex-col md:flex-row items-center mb-8">
                        <div className="px-4 py-3 w-full text-gray-600 font-mono text-sm md:border-r border-gray-200 min-h-[48px]">
                            <span id="auto-type-text"></span>
                        </div>
                        <button id="auto-generate-btn" className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-[#0859b8] to-[#00adc4] text-white px-10 py-3.5 rounded-full md:ml-4 heading1 text-lg shadow-[0_8px_20px_rgba(8,89,184,0.3)] hover:shadow-[0_12px_25px_rgba(0,173,196,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:hover:shadow-[0_8px_20px_rgba(8,89,184,0.3)] group" disabled>
                            Generate <i className="fa-solid fa-wand-magic-sparkles text-[#e7eb90] group-hover:rotate-12 transition-transform"></i>
                        </button>
                    </div>

                    {/* App UI Output Grid */}
                    <div className="grid md:grid-cols-3 gap-6 opacity-0 translate-y-10 transition-all duration-700 pointer-events-none" id="generated-assets">
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
                            <div className="w-full h-48 bg-gradient-to-tr from-pink-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center text-pink-500 relative overflow-hidden">
                                <i className="fa-brands fa-instagram text-[32px] relative z-10"></i>
                                <img src="/assets/diwali_saree_ig.png" id="ig-generated-img" className="absolute inset-0 w-full h-full object-contain p-2 opacity-0 transition-opacity duration-1000 z-20" alt="Generated Saree Ad" />
                            </div>
                            <h4 className="heading1 text_color text-sm">Instagram Post</h4>
                            <p className="text-xs text-green-500 heading2 mt-1 flex items-center gap-1"><i className="fa-solid fa-circle-check"></i> Ready to publish</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                            <div className="w-full h-48 bg-green-50 rounded-lg mb-4 flex flex-col justify-center px-6 text_color border border-green-100">
                                <p className="text-xs font-mono leading-relaxed">✨ Diwali Exclusive! Get 20% off all designer sarees this week only. Show this message in-store to claim.</p>
                            </div>
                            <h4 className="heading1 text_color text-sm">WhatsApp Broadcast</h4>
                            <p className="text-xs text-green-500 heading2 mt-1 flex items-center gap-1"><i className="fa-solid fa-circle-check"></i> Tailored for customers</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                            <div className="w-full h-48 bg-blue-50 rounded-lg mb-4 flex items-center justify-center primary_color border-2 border-dashed border-[#0859b8]/30 relative overflow-hidden">
                                <div className="text-center relative z-10">
                                    <i className="fa-solid fa-file-lines text-[24px] mx-auto mb-1"></i>
                                    <span className="text-[10px] heading1 block mt-2">A4 POSTER</span>
                                </div>
                                <img src="/assets/diwali_saree_poster.png" id="poster-generated-img" className="absolute inset-0 w-full h-full object-contain p-2 opacity-0 transition-opacity duration-1000 z-20" alt="Generated Saree Poster" />
                            </div>
                            <h4 className="heading1 text_color text-sm">In-Store Poster</h4>
                            <p className="text-xs text-green-500 heading2 mt-1 flex items-center gap-1"><i className="fa-solid fa-circle-check"></i> Print-ready PDF</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* 6. CUSTOMER TESTIMONIALS (Short Rectangular + Visible Quotes + Nav Arrows) */}
    <section className="py-24 bg-gray-50 overflow-hidden relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8 relative">
            <h2 className="text-4xl md:text-5xl heading1 text_color tracking-tight mb-4 section-title">
                What our Clients say!
            </h2>
            
            {/* Navigation Arrows */}
            <div className="absolute right-6 top-0 hidden md:flex gap-4">
                <div 
                    className="client-prev swiper-button-prev !relative !left-0 !top-0 !mt-0 !h-12 !w-12 flex items-center justify-center cursor-pointer"
                    onClick={() => clientSwiperRef.current?.slidePrev()}
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div 
                    className="client-next swiper-button-next !relative !right-0 !top-0 !mt-0 !h-12 !w-12 flex items-center justify-center cursor-pointer"
                    onClick={() => clientSwiperRef.current?.slideNext()}
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>

        <div className="swiper client-swiper" dir="ltr">
            <div className="swiper-wrapper flex items-center"> {/* items-center to let them be auto height */}
                
                {/* Client 1 */}
                <div className="swiper-slide client-slide px-4">
                    <div className="client-card interactive h-full flex flex-col justify-between">
                        <div className="active-bar"></div>
                        <p className="heading2 italic text-gray-500 text-[14px] leading-relaxed mb-8 flex-1">
                            "The Marketing4Sight platform from Quantyra Analytics is a game-changer. It is extremely effective in strategizing, governing and optimizing marketing processes in an organization. The data-driven decision making framework implemented in Marketing4Sight helped us identify blind spots and addressing them effectively."
                        </p>
                        <div>
                            <h4 className="heading1 text_color text-[15px]">Nilagrib Mondal</h4>
                            <p className="text-[12px] heading2 primary_color font-medium mt-1">Marketing Head, Excel Home Decor</p>
                        </div>
                    </div>
                </div>

                {/* Client 2 */}
                <div className="swiper-slide client-slide px-4">
                    <div className="client-card interactive h-full flex flex-col justify-between">
                        <div className="active-bar"></div>
                        <p className="heading2 italic text-gray-500 text-[14px] leading-relaxed mb-8 flex-1">
                            "The Marketing4Sight platform from Quantyra Analytics is a game-changer. It is extremely effective in strategizing, governing and optimizing marketing processes in an organization. The data-driven decision making framework implemented in Marketing4Sight helped us identify blind spots and addressing them effectively."
                        </p>
                        <div>
                            <h4 className="heading1 text_color text-[15px]">Indranil Mandal</h4>
                            <p className="text-[12px] heading2 primary_color font-medium mt-1">Founder, Bombay Local</p>
                        </div>
                    </div>
                </div>

                {/* Client 3 */}
                <div className="swiper-slide client-slide px-4">
                    <div className="client-card interactive h-full flex flex-col justify-between">
                        <div className="active-bar"></div>
                        <p className="heading2 italic text-gray-500 text-[14px] leading-relaxed mb-8 flex-1">
                            "Working with Quantyra Analytics has been a strategic move that enpropeL took. Getting onboarded to the Marketing4Sight platform as a beta customer, we received strategic inputs from the platform which helped in improving our brand presence. We recommend the Marketing4Sight platform to all small and medium business owners who aspire to improve their branding."
                        </p>
                        <div>
                            <h4 className="heading1 text_color text-[15px]">Jagannath Thakur</h4>
                            <p className="text-[12px] heading2 primary_color font-medium mt-1">Founder, enpropeL</p>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Mobile arrows (shown below slider on small screens) */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
                <div 
                    className="client-prev swiper-button-prev !relative !left-0 !top-0 !mt-0 !h-12 !w-12 flex items-center justify-center cursor-pointer"
                    onClick={() => clientSwiperRef.current?.slidePrev()}
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div 
                    className="client-next swiper-button-next !relative !right-0 !top-0 !mt-0 !h-12 !w-12 flex items-center justify-center cursor-pointer"
                    onClick={() => clientSwiperRef.current?.slideNext()}
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    </section>

    {/* 6. FINAL FOOTER */}
    <footer className="primary_bg text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl heading2 font-semibold mb-6">Every local business deserves to be discovered</h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 bodyText">Stop checking dozens of complex tools. Take total control over your customer pipeline.</p>
            
            <button className="interactive bg-white primary_color heading2 px-10 py-4 rounded-xl text-lg mb-16 shadow-lg hover:bg-gray-50 transition-colors">
                Put My Business On The Map — Free
            </button>
            
            <div className="w-full h-[1px] bg-white/20 mb-10"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm bodyText text-white/90 mb-6">
                <div className="flex items-center gap-2"><i className="w-4 h-4 text-pink-400 fa-solid fa-phone w-4 h-4 text-pink-400"></i> +91 98300 50939</div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/50"></div>
                <div className="flex items-center gap-2"><i className="w-4 h-4 text-white/80 fa-solid fa-envelope w-4 h-4 text-white/80"></i> contact@quantyraanalytics.com</div>
            </div>
            <p className="text-xs text-white/60">83 S.P. Mukherjee Road, Hazra, Kolkata — 700026</p>
        </div>
    </footer>

    
    </div>
  );
}
