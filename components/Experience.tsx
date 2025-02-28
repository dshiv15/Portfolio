export default function Experience() {
    return (
      <section id="experience" className="py-20 bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="relative border-l-4 border-blue-500 ml-4 md:ml-12 space-y-12 pb-8">
            {/* Experience Item */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-6 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <i className="fas fa-briefcase text-white"></i>
              </div>
              <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-semibold">Web Development Intern</h3>
                  <p className="text-blue-400">LEARNTRICKS EDUTECH | Jun-Jul 2024</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Worked on developing and maintaining web applications, ensuring high-quality code and optimal performance.</li>
                  <li>Collaborated with the team to implement new features and improve user experience.</li>
                </ul>
              </div>
            </div>
            
            {/* Leadership Experience */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-6 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <i className="fas fa-users text-white"></i>
              </div>
              <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-semibold">Core Committee Member</h3>
                  <p className="text-blue-400">COMPUTER SOCIETY OF INDIA</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Conducted the National Level HackNUThon 2024.</li>
                  <li>Organized the CSI flagship event CUBIX.</li>
                </ul>
              </div>
            </div>
            
            {/* University Club */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-6 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <i className="fas fa-university text-white"></i>
              </div>
              <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-semibold">Sponsorship Team Member</h3>
                  <p className="text-blue-400">UNIVERSITY CLUB</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Conducted University Fest.</li>
                </ul>
              </div>
            </div>
            
            {/* Community Service */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-6 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <i className="fas fa-hands-helping text-white"></i>
              </div>
              <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-semibold">Community Service Intern</h3>
                  <p className="text-blue-400">ZORIYA FOUNDATION</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Completed 10-days internship.</li>
                  <li>Contributing to Community service initiatives at Tajpur Government School and village.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }