import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

// Google Apps Script Web App URL — receives form submissions and writes to Google Sheet
const CONTACT_SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycbz8QYn5AMsa2j-_ZEpnB1JSAuAEu_4szdZBLx2Mvuk5WIymKZfhGytIjx7I1OQPDq-X/exec';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    segment: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (CONTACT_SCRIPT_URL === 'YOUR_CONTACT_FORM_APPS_SCRIPT_URL') {
      alert('Please connect the Google Sheet URL first!');
      return;
    }

    setStatus('submitting');

    try {
      // URLSearchParams is required for no-cors mode.
      // JSON bodies are silently dropped by the browser in no-cors requests.
      const params = new URLSearchParams({
        ...formData,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });

      await fetch(CONTACT_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });

      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', city: '', segment: '', message: '' });

      // Reset success message after 6 seconds
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      // Auto-clear error after 5s
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Request a Consultation</h3>
        <p className="text-slate-500">Leave your details and our property experts will get back to you within 24 hours.</p>
      </div>

      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="text-green-600 w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-green-800 mb-2">Request Received!</h4>
          <p className="text-green-700">Thank you. Check your email for confirmation.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-green-700 font-medium hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
              <input
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                placeholder="e.g. Mumbai, Bangalore"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Property Segment</label>
            <select
              name="segment"
              value={formData.segment}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
            >
              <option value="">Select a segment...</option>
              <option value="Residential">Residential Property</option>
              <option value="Commercial">Commercial Property</option>
              <option value="Land">Land / Plot</option>
              <option value="Industrial">Industrial</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">How can we help? *</label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell us about your property requirements or risk assessment needs..."
            ></textarea>
          </div>

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
              <strong>Submission failed.</strong> Please try again or email us directly at{' '}
              <a href="mailto:solutions@trustflows.in" className="underline font-semibold">solutions@trustflows.in</a>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-primary-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
            ) : (
              <>Submit Request <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
