import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600">
            Have questions about our property risk intelligence? Our team of legal and real estate experts is here to help you navigate your next transaction safely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary-blue mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Email Us</h3>
              <p className="text-slate-500 mb-4">For general inquiries and support.</p>
              <a href="mailto:solutions@trustflows.in" className="text-primary-blue font-semibold hover:underline">
                solutions@trustflows.in
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary-blue mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Call Us</h3>
              <p className="text-slate-500 mb-4">Mon-Fri from 9am to 6pm IST.</p>
              <a href="tel:+918047108800" className="text-primary-blue font-semibold hover:underline">
                +91 80 4710 8800
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary-blue mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Office</h3>
              <p className="text-slate-500">
                TRUSTFLOWS Headquarters<br />
                Bandra Kurla Complex (BKC)<br />
                Mumbai, Maharashtra 400051<br />
                India
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
