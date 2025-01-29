import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-4 lg:p-8">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Terms and Conditions
          </h1>
          <div className="space-y-4 text-sm lg:text-base">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 ">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-4">
                  <div className="space-y-4">
                    <h2 className="font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-gray-100">
                      Terms and Conditions
                    </h2>
                    <nav className="grid gap-2">
                      <a href="#terms" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        Terms
                      </a>
                      <a href="#use-license" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        Use License
                      </a>
                      <a href="#disclaimer" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        Disclaimer
                      </a>
                      <a href="#limitations" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        Limitations
                      </a>
                      <a href="#revisions" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        Revisions and Errata
                      </a>
                      <a href="#links" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        Links
                      </a>
                      <a href="#modifications" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        Terms Modifications
                      </a>
                      <a href="#governing-law" className="text-md text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                        Governing Law
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              {/* End Sidebar */}

              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                <div id="terms" className="scroll-mt-16">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Terms</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    By accessing this Website, accessible from HireMode, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
                  </p>
                </div>

                <div id="use-license" className="scroll-mt-16">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Use License</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Permission is granted to temporarily download one copy of the materials (information or software) on HireMode's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-400">
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose or for any public display;</li>
                    <li>attempt to reverse engineer any software contained on HireMode's Website;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transfer the materials to another person or 'mirror' the materials on any other server.</li>
                  </ul>
                </div>

                <div id="disclaimer" className="scroll-mt-16">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Disclaimer</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    All the materials on HireMode's Website are provided "as is". HireMode makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, HireMode does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
                  </p>
                </div>

                <div id="limitations" className="scroll-mt-16">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Limitations</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    HireMode or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on HireMode's Website, even if HireMode or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage.
                  </p>
                </div>

                <div id="revisions" className="scroll-mt-16">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Revisions and Errata</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The materials appearing on HireMode's Website may include technical, typographical, or photographic errors. HireMode does not warrant that any of the materials on its Website are accurate, complete, or current. HireMode may make changes to the materials contained on its Website at any time without notice.
                  </p>
                </div>

                <div id="links" className="scroll-mt-16">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Links</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    HireMode has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by HireMode of the site. The use of any linked website is at the user's own risk.
                  </p>
                </div>

                <div id="modifications" className="scroll-mt-16">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Terms Modifications</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    HireMode may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
                  </p>
                </div>

                <div id="governing-law" className="scroll-mt-16">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Governing Law</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Any claim related to HireMode's Website shall be governed by the laws of the country without regards to its conflict of law provisions.
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
        </div>
      </div>
    </div>
  );
};

export default Terms;
