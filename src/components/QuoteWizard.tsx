import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const printOptions = [
  'Business Cards',
  'Flyers',
  'Brochures',
  'Postcards',
  'Banners',
  'Stickers/Labels',
  'Posters',
  'Yard Signs',
  'Door Hangers',
  'Menus',
  'Booklets',
  'Invitations',
  'Catalogs',
  'Envelopes',
  'Letterhead',
  'Presentation Folders',
  'Table Tents',
  'Rack Cards',
  'Custom / Not sure',
];

const sizeOptions = [
  '3.5" x 2" (Business Card)',
  '4" x 6"',
  '5" x 7"',
  '8.5" x 11" (Letter)',
  '11" x 17" (Tabloid)',
  '18" x 24"',
  '24" x 36"',
  '36" x 72"',
  '48" x 96"',
  'Not sure / recommend for me',
];

const timelineOptions = [
  'ASAP (Rush Service)',
  'Within 3 days',
  'Within 1 week',
  '2+ weeks',
];

export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    printType: '',
    size: '',
    timeline: '',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1 && !formData.printType) {
      newErrors.printType = 'Please select what you want printed';
    }
    if (step === 2 && !formData.size) {
      newErrors.size = 'Please select a size';
    }
    if (step === 3 && !formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateContactForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
      setErrors({});
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateContactForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const handleOptionSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 sm:p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You for Your Quote Request!
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          We've received your information and will get back to you shortly with a detailed quote.
        </p>
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h4 className="font-semibold text-gray-900 mb-4">Your Request Summary:</h4>
          <div className="space-y-2 text-gray-600">
            <p><span className="font-medium">Product:</span> {formData.printType}</p>
            <p><span className="font-medium">Size:</span> {formData.size}</p>
            <p><span className="font-medium">Timeline:</span> {formData.timeline}</p>
            <p><span className="font-medium">Contact:</span> {formData.fullName}</p>
            <p><span className="font-medium">Email:</span> {formData.email}</p>
            <p><span className="font-medium">Phone:</span> {formData.phone}</p>
            {formData.company && <p><span className="font-medium">Company:</span> {formData.company}</p>}
          </div>
        </div>
        <p className="text-gray-600 mb-6">
          Expect to hear from us within 1 business hour during office hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              printType: '',
              size: '',
              timeline: '',
              fullName: '',
              email: '',
              phone: '',
              company: '',
              notes: '',
            });
          }}
          className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden">
      {/* Progress Indicator */}
      {step <= totalSteps && (
        <div className="bg-gray-50 px-6 sm:px-8 py-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-900">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round((step / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(step / totalSteps) * 100}%`,
                backgroundColor: '[PRIMARY_COLOR]'
              }}
            />
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8 lg:p-12">
        {/* Step 1: What to print */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              What do you want printed?
            </h3>
            <p className="text-gray-600 mb-8">Select the type of product you need</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {printOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('printType', option)}
                  className={`p-4 rounded-lg border-2 text-left transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    formData.printType === option
                      ? 'border-current font-semibold'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    borderColor: formData.printType === option ? '[PRIMARY_COLOR]' : undefined,
                    backgroundColor: formData.printType === option ? '[PRIMARY_COLOR]10' : undefined,
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.printType && (
              <p className="text-red-600 text-sm mb-4">{errors.printType}</p>
            )}
          </div>
        )}

        {/* Step 2: Size */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              What size do you need?
            </h3>
            <p className="text-gray-600 mb-8">Choose the dimensions for your {formData.printType}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {sizeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('size', option)}
                  className={`p-4 rounded-lg border-2 text-left transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    formData.size === option
                      ? 'border-current font-semibold'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    borderColor: formData.size === option ? '[PRIMARY_COLOR]' : undefined,
                    backgroundColor: formData.size === option ? '[PRIMARY_COLOR]10' : undefined,
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.size && (
              <p className="text-red-600 text-sm mb-4">{errors.size}</p>
            )}
          </div>
        )}

        {/* Step 3: Timeline */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              When do you need it?
            </h3>
            <p className="text-gray-600 mb-8">Select your preferred timeline</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {timelineOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('timeline', option)}
                  className={`p-4 rounded-lg border-2 text-left transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    formData.timeline === option
                      ? 'border-current font-semibold'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    borderColor: formData.timeline === option ? '[PRIMARY_COLOR]' : undefined,
                    backgroundColor: formData.timeline === option ? '[PRIMARY_COLOR]10' : undefined,
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.timeline && (
              <p className="text-red-600 text-sm mb-4">{errors.timeline}</p>
            )}
          </div>
        )}

        {/* Step 4: Contact Form */}
        {step === 4 && (
          <form onSubmit={handleSubmit} className="animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Get Your Quote
            </h3>
            <p className="text-gray-600 mb-8">Enter your contact information to receive your custom quote</p>
            
            <div className="space-y-5 mb-8">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                    errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-current'
                  }`}
                  placeholder="John Smith"
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-200 focus:border-current'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-current'
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-current transition-colors"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
                  Additional Notes <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-current transition-colors resize-none"
                  placeholder="Quantity needed, special requirements, design details, etc."
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Your Selections:</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">Product:</span> {formData.printType}</p>
                <p><span className="font-medium">Size:</span> {formData.size}</p>
                <p><span className="font-medium">Timeline:</span> {formData.timeline}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: '[PRIMARY_COLOR]' }}
              >
                Get My Quote
              </button>
            </div>
          </form>
        )}

        {/* Navigation Buttons for Steps 1-3 */}
        {step <= totalSteps && (
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: '[PRIMARY_COLOR]' }}
            >
              {step === totalSteps ? 'Continue to Contact Info' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
