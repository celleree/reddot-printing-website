import { useState } from 'react';
import { Upload, CheckCircle, Send, ChevronRight, ChevronLeft } from 'lucide-react';

const printOptions = [
  'Invitations',
  'Flyers',
  'Brochures',
  'Booklets',
  'Envelopes',
  'Business Cards',
  'Stickers/Decals',
  'Other',
];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    printType: '',
    quantity: '',
    neededBy: '',
    notes: '',
  });
  const [fileName, setFileName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.printType) {
      newErrors.printType = 'Please select what you need printed';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Quantity is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      setErrors({});
    }
  };

  const handleBack = () => {
    setStep(1);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setIsSubmitted(true);
      console.log('Quote form submitted:', formData);
      // In production, this would send to your backend or email service
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleProductSelect = (product: string) => {
    setFormData({ ...formData, printType: product });
    setErrors({ ...errors, printType: '' });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center border border-gray-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Quote Request Received!
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Thank you, <strong>{formData.name}</strong>! We've received your quote request and will respond shortly.
        </p>
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
          <h4 className="font-bold text-gray-900 mb-4">Request Summary:</h4>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium">Product:</span> {formData.printType}</p>
            <p><span className="font-medium">Quantity:</span> {formData.quantity}</p>
            {formData.neededBy && <p><span className="font-medium">Needed by:</span> {formData.neededBy}</p>}
            <p><span className="font-medium">Email:</span> {formData.email}</p>
            <p><span className="font-medium">Phone:</span> {formData.phone}</p>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <p className="text-gray-900 font-semibold mb-2">
            ⚡ We respond fast during business hours — often within minutes!
          </p>
          <p className="text-gray-600 text-sm">
            Monday–Friday: 9:00 AM – 6:00 PM
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              name: '',
              phone: '',
              email: '',
              company: '',
              printType: '',
              quantity: '',
              neededBy: '',
              notes: '',
            });
            setFileName('');
          }}
          className="text-red-600 hover:text-red-700 font-semibold transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Progress Indicator */}
      <div className="bg-gray-50 px-6 sm:px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-900">
            Step {step} of 2
          </span>
          <span className="text-sm text-gray-600">
            {step === 1 ? 'Select Product' : 'Contact Details'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 bg-red-600 rounded-full transition-all duration-300"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Product Selection */}
      {step === 1 && (
        <div className="p-6 sm:p-8 lg:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            What do you need printed?
          </h3>
          <p className="text-gray-600 mb-8">Select the type of product you need</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {printOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleProductSelect(option)}
                className={`p-6 rounded-xl border-2 text-left transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  formData.printType === option
                    ? 'border-red-600 bg-red-50 shadow-lg'
                    : 'border-gray-200 hover:border-red-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-semibold ${
                    formData.printType === option ? 'text-red-700' : 'text-gray-900'
                  }`}>
                    {option}
                  </span>
                  {formData.printType === option && (
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {errors.printType && (
            <p className="text-red-600 text-sm mb-4">{errors.printType}</p>
          )}

          <button
            onClick={handleNext}
            className="w-full px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2"
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Step 2: Contact Form */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Almost there! Tell us about your project
            </h3>
            <p className="text-gray-600">
              You selected: <strong className="text-red-600">{formData.printType}</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-200 focus:border-red-600'
                }`}
                placeholder="John Smith"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-red-600'
                }`}
                placeholder="(714) 555-1234"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200 focus:border-red-600'
                }`}
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Company (Optional) */}
            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
                Company <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-600 transition-colors"
                placeholder="Your Company Name"
              />
            </div>

            {/* Quantity */}
            <div className="sm:col-span-2">
              <label htmlFor="quantity" className="block text-sm font-bold text-gray-900 mb-2">
                Quantity *
              </label>
              <input
                type="text"
                id="quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                  errors.quantity ? 'border-red-500' : 'border-gray-200 focus:border-red-600'
                }`}
                placeholder="e.g., 500, 1000"
              />
              {errors.quantity && (
                <p className="text-red-600 text-sm mt-1">{errors.quantity}</p>
              )}
            </div>
          </div>

          {/* Needed By Date */}
          <div className="mb-6">
            <label htmlFor="neededBy" className="block text-sm font-bold text-gray-900 mb-2">
              When do you need it? <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="date"
              id="neededBy"
              value={formData.neededBy}
              onChange={(e) => setFormData({ ...formData, neededBy: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-600 transition-colors"
            />
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label htmlFor="notes" className="block text-sm font-bold text-gray-900 mb-2">
              Additional Details or Notes <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-600 transition-colors resize-none"
              placeholder="Size preferences, paper type, finishing options, design details, etc."
            />
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label htmlFor="file" className="block text-sm font-bold text-gray-900 mb-2">
              Upload Design File <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png,.ai,.psd,.eps"
              />
              <label
                htmlFor="file"
                className="flex items-center justify-center gap-3 w-full px-4 py-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-red-600 cursor-pointer transition-colors bg-gray-50 hover:bg-red-50"
              >
                <Upload className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">
                  {fileName || 'Click to upload or drag file here'}
                </span>
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Accepted formats: PDF, JPG, PNG, AI, PSD, EPS
            </p>
          </div>

          {/* Microcopy */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">⚡ We respond fast during business hours</strong> — often within minutes! Our team will review your request and send you a detailed quote right away.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Get My Fast Quote
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            By submitting, you agree to receive quote information via email and phone.
          </p>
        </form>
      )}
    </div>
  );
}
