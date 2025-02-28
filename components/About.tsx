export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-16 flex justify-center items-center">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-400">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              I&apos;m a <span className="font-semibold text-blue-400">Computer Science student</span> at Nirma University, minoring in Accounting and Finance. Passionate about the fusion of <span className="font-semibold text-blue-400">technology and business</span>, I specialize in crafting innovative applications that solve real-world challenges with scalability and user-centric design.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              With hands-on experience in <span className="font-semibold text-blue-400">web development, data analysis, and project management</span>, I bring a unique blend of technical expertise and strategic insight, aiming to bridge the gap between cutting-edge technology and impactful business solutions.
            </p>
          </div>

          {/* Illustration Instead of Photo */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative flex flex-col items-center p-8 rounded-3xl shadow-lg border border-blue-400 bg-[#121212]">
              <div className="text-9xl animate-bounce">👨‍💻</div> 
              <p className="mt-4 text-xl font-semibold text-blue-400 text-center">Hello, I&apos;m Shiv!</p>
              <span className="text-sm text-gray-500 italic">&quot;Innovating one project at a time.&quot;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
