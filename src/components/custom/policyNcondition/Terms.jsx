import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 ">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <div className="space-y-4">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
                Terms and Conditions
              </h2>
              <nav className="grid gap-2">
                <a href="#introduction" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  Introduction
                </a>
                <a href="#acceptance" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  Acceptance of Terms
                </a>
                <a href="#user-conduct" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  User Conduct
                </a>
                <a href="#intellectual-property" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  Intellectual Property
                </a>
                <a href="#limitation" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  Limitation of Liability
                </a>
                <a href="#modifications" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  Modifications
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* End Sidebar */}

        {/* Content */}
        <div className="lg:col-span-2 space-y-6">
          <div id="introduction" className="scroll-mt-16">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Introduction</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome to our website. These Terms and Conditions govern your use of our website and services. 
              By accessing or using our website, you agree to be bound by these Terms and Conditions. 
              If you disagree with any part of these terms, please do not use our website.
            </p>
          </div>

          <div id="acceptance" className="scroll-mt-16">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Acceptance of Terms</h3>
            <p className="text-gray-600 dark:text-gray-400">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules 
              applicable to such services.
            </p>
          </div>

          <div id="user-conduct" className="scroll-mt-16">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Conduct</h3>
            <p className="text-gray-600 dark:text-gray-400">
              You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, 
              restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or 
              causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting 
              the normal flow of dialogue within our website.
            </p>
          </div>

          <div id="intellectual-property" className="scroll-mt-16">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Intellectual Property</h3>
            <p className="text-gray-600 dark:text-gray-400">
              The content on this website, including but not limited to text, graphics, logos, images, audio clips, 
              digital downloads, and data compilations, is our property or the property of our content suppliers and 
              is protected by international copyright laws. The compilation of all content on this website is our 
              exclusive property and is protected by international copyright laws.
            </p>
          </div>

          <div id="limitation" className="scroll-mt-16">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Limitation of Liability</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We will not be liable for any damages of any kind arising from the use of this website, including but 
              not limited to direct, indirect, incidental, punitive, and consequential damages. We do not guarantee, 
              represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
            </p>
          </div>

          <div id="modifications" className="scroll-mt-16">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Modifications</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We reserve the right to modify these terms and conditions at any time. Changes and clarifications will 
              take effect immediately upon their posting on the website. If we make material changes to this policy, 
              we will notify you here that it has been updated, so that you are aware of what information we collect, 
              how we use it, and under what circumstances, if any, we use and/or disclose it.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        {/* End Content */}
      </div>
    </div>
  );
};

export default Terms;
