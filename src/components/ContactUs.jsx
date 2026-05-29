import React, { useState } from "react";
import Footer from "./Footer";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [highlightPulse, setHighlightPulse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const autoFillMessage = (type) => {
    if (type === 'business') {
      setForm(prev => ({ ...prev, message: "Hello, I am interested in exploring Marketing4Sight for my business. I would like to discuss demos, partnerships, or platform capabilities." }));
    } else if (type === 'support') {
      setForm(prev => ({ ...prev, message: "Hello, I require support and guidance regarding onboarding, workflow setup, or strategic direction." }));
    }
    
    setHighlightPulse(false);
    setTimeout(() => setHighlightPulse(true), 10);
    
    // Focus the message box
    const messageBox = document.getElementById('message');
    if (messageBox) {
        messageBox.focus();
        if (window.innerWidth < 1024) {
            messageBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    
    if (!form.company.trim()) errs.company = "Company name is required.";
    
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid work email address.";
    }
    
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[0-9+\s\-]{7,20}$/.test(form.phone.trim())) {
      errs.phone = "Please enter a valid phone number.";
    }
    
    if (!form.website.trim()) {
      errs.website = "Website URL is required.";
    } else if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(form.website.trim())) {
      errs.website = "Please enter a valid URL (e.g., https://example.com).";
    }
    
    if (!agreed) errs.terms = "Please verify that you are not a robot.";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      console.log("📩 Contact Form Submission:", { ...form });
      setSubmitted(true);
      setForm({ name: "", email: "", company: "", designation: "", phone: "", website: "", message: "" });
      setAgreed(false);
      
      const successMsg = document.getElementById('successMessage');
      if (successMsg) {
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const InlineError = ({ msg }) =>
    msg ? <p className="text-red-500 text-xs font-bold mt-1">{msg}</p> : null;

  return (
    <div className="text-[#222222] antialiased selection:bg-[#e7eb90] selection:text-[#222222] font-['Helvetica_Neue',sans-serif]">
        
        {/* GLOBAL ANIMATED BACKGROUND */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#e7eb90]/20 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-blue-300/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-[#00adc4]/10 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>

        <main className="pt-32 pb-24 min-h-screen flex items-center relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* LEFT COLUMN: TEXT & INFO CARDS */}
                    <div className="pt-4 animate-[fadeInUp_0.8s_ease-out]">
                        <h1 className="text-5xl md:text-6xl heading1 primary_color leading-tight mb-6">
                            Get in <span className="secondary_color">Touch.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed bodyText">
                            Whether you want to explore the platform, discuss partnerships, apply for an open position, or learn more about Marketing4Sight, our team would love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 bodyText">Click to quick-fill your message:</p>
                            
                            {/* Business Inquiries */}
                            <div onClick={() => autoFillMessage('business')} className="cursor-pointer group bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-5 hover:shadow-lg hover:border-[#0859b8] transition duration-300">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 primary_color flex items-center justify-center shrink-0 group-hover:bg-[#0859b8] group-hover:text-white transition">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#222222] mb-1 group-hover:text-[#0859b8] transition heading2">Business Inquiries</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed bodyText">Reach out for demos, partnerships, and platform discussions.</p>
                                </div>
                            </div>

                            {/* Support & Guidance */}
                            <div onClick={() => autoFillMessage('support')} className="cursor-pointer group bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-5 hover:shadow-lg hover:border-[#00adc4] transition duration-300">
                                <div className="w-12 h-12 rounded-xl bg-[#00adc4]/10 secondary_color flex items-center justify-center shrink-0 group-hover:bg-[#00adc4] group-hover:text-white transition">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#222222] mb-1 group-hover:text-[#00adc4] transition heading2">Support & Guidance</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed bodyText">Our team helps you with onboarding, workflow setup, and strategic direction.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: FORM CARD */}
                    <div className="animate-[fadeInUp_0.8s_ease-out_0.2s] relative">
                        <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden bodyText">
                            
                            {/* Form Success Message */}
                            {submitted && (
                                <div id="successMessage" className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl mb-6 flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <div>
                                        <h4 className="font-bold heading2">Message Sent!</h4>
                                        <p className="text-sm">We've received your request and will contact you shortly.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10" noValidate>
                                
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" 
                                           className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#00adc4]'} focus:outline-none focus:ring-1 focus:ring-[#00adc4] transition bg-white/50`} />
                                    <InlineError msg={errors.name} />
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Work Email <span className="text-red-500">*</span></label>
                                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" 
                                               className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#00adc4]'} focus:outline-none focus:ring-1 focus:ring-[#00adc4] transition bg-white/50`} />
                                        <InlineError msg={errors.email} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                        <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" 
                                               className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#00adc4]'} focus:outline-none focus:ring-1 focus:ring-[#00adc4] transition bg-white/50`} />
                                        <InlineError msg={errors.phone} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                                        <input type="text" id="company" name="company" value={form.company} onChange={handleChange} required placeholder="Acme Corp" 
                                               className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#00adc4]'} focus:outline-none focus:ring-1 focus:ring-[#00adc4] transition bg-white/50`} />
                                        <InlineError msg={errors.company} />
                                    </div>
                                    <div>
                                        <label htmlFor="designation" className="block text-sm font-bold text-gray-700 mb-1">Your Designation</label>
                                        <input type="text" id="designation" name="designation" value={form.designation} onChange={handleChange} placeholder="Marketing Director" 
                                               className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#00adc4] focus:ring-1 focus:ring-[#00adc4] transition bg-white/50" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="website" className="block text-sm font-bold text-gray-700 mb-1">Website <span className="text-red-500">*</span></label>
                                    <input type="url" id="website" name="website" value={form.website} onChange={handleChange} required placeholder="https://www.yourcompany.com" 
                                           className={`w-full px-4 py-3 rounded-lg border ${errors.website ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#00adc4]'} focus:outline-none focus:ring-1 focus:ring-[#00adc4] transition bg-white/50`} />
                                    <InlineError msg={errors.website} />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                    <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="4" placeholder="How can we help you?" 
                                              className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#00adc4] focus:ring-1 focus:ring-[#00adc4] transition bg-white/50 resize-none ${highlightPulse ? 'animate-[ringPulse_1.5s_ease-out]' : ''}`}></textarea>
                                </div>

                                <div>
                                    <div className={`bg-gray-50 border ${errors.terms ? 'border-red-500 bg-red-50' : 'border-gray-200'} p-4 rounded-lg flex items-center justify-between transition`}>
                                        <div className="flex items-center space-x-3">
                                            <input type="checkbox" id="captcha" name="captcha" checked={agreed} onChange={(e) => {
                                                setAgreed(e.target.checked);
                                                if(errors.terms) setErrors(prev => { const n = {...prev}; delete n.terms; return n; });
                                            }} className="w-5 h-5 cursor-pointer accent-[#0859b8]" />
                                            <label htmlFor="captcha" className="text-sm font-bold text-gray-700 cursor-pointer">I'm not a robot</label>
                                        </div>
                                        <div className="text-[10px] text-gray-400 text-right flex flex-col items-center">
                                            <svg className="w-6 h-6 text-blue-500 mb-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                                            reCAPTCHA
                                        </div>
                                    </div>
                                    <InlineError msg={errors.terms} />
                                </div>

                                <p className="text-xs text-gray-500 italic">* Mandatory Fields</p>

                                <button type="submit" className="w-full primary_bg text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition shadow-lg text-lg">
                                    Send Message
                                </button>

                                <div className="text-xs text-gray-500 text-center mt-6 pt-6 border-t border-gray-100 leading-relaxed">
                                    <p className="font-bold text-gray-700 mb-1">Marketing4Sight is a product of Quantyra Analytics Private Limited.</p>
                                    <p>By submitting this form, you agree to our <a href="/compliance" className="primary_color hover:underline">Terms & Conditions</a> and <a href="/compliance" className="primary_color hover:underline">Privacy Policy</a>.</p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </main>

        <Footer />
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes ringPulse {
                0% { box-shadow: 0 0 0 0 rgba(8, 89, 184, 0.7); }
                70% { box-shadow: 0 0 0 10px rgba(8, 89, 184, 0); border-color: #0859b8; }
                100% { box-shadow: 0 0 0 0 rgba(8, 89, 184, 0); }
            }
        `}} />
    </div>
  );
};

export default ContactUs;