"use client";
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At Hiremode, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our AI-powered recruitment platform. We are committed to 
                protecting your personal information and ensuring transparency in our data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc ml-8 space-y-3 text-gray-700">
                <li className="pl-2">Name and contact information</li>
                <li className="pl-2">Professional experience and qualifications</li>
                <li className="pl-2">Resume/CV content</li>
                <li className="pl-2">Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc ml-8 space-y-3 text-gray-700">
                <li className="pl-2">Provide and improve our services</li>
                <li className="pl-2">Match candidates with job opportunities</li>
                <li className="pl-2">Communicate about services and updates</li>
                <li className="pl-2">Ensure platform security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Contact Us</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span>{' '}
                    <a href="mailto:privacy@hiremode.ai" className="text-blue-600 hover:text-blue-700">
                      privacy@hiremode.ai
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Address:</span> 123 Business Avenue, Suite 100, San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          This privacy policy is subject to change. We will notify you of any material changes.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
