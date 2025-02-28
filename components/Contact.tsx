export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-lg mb-10">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat about technology and business. 
            Feel free to reach out through any of the channels below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="mailto:dshiv1213@gmail.com"
              className="flex flex-col items-center p-6 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm hover:border-blue-400 transition duration-300"
            >
              <div className="text-4xl text-blue-400 mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-center text-gray-300">dshiv1213@gmail.com</p>
            </a>
            
            <a 
              href="https://github.com/dshiv15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm hover:border-blue-400 transition duration-300"
            >
              <div className="text-4xl text-blue-400 mb-4">
                <i className="fab fa-github"></i>
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-center text-gray-300">github.com/dshiv15</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/shiv-dixit-75338924a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm hover:border-blue-400 transition duration-300"
            >
              <div className="text-4xl text-blue-400 mb-4">
                <i className="fab fa-linkedin"></i>
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-center text-gray-300">https://www.linkedin.com/in/shiv-dixit-75338924a/</p>
            </a>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Ahmedabad, Gujarat, India
            </p>
            <p className="text-gray-400 mt-2">
              <i className="fas fa-phone mr-2"></i>
              +91 9898282119
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}