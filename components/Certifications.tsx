export default function Certifications() {
  const certifications = [
    {
      title: "PwC US - Management Consulting",
      icon: "fas fa-chart-line",
      color: "text-red-400",
      link: "https://www.credly.com/badges/management-consulting",
    },
    {
      title: "SEBI NISM Certified Investor",
      icon: "fas fa-money-bill-wave",
      color: "text-green-400",
      link: "https://www.nism.ac.in/certification",
    },
    {
      title: "AWS Academy Cloud Foundations",
      icon: "fab fa-aws",
      color: "text-yellow-400",
      link: "https://aws.amazon.com/training/awsacademy",
    },
    {
      title: "Certificate Program of CDAC",
      icon: "fas fa-laptop-code",
      color: "text-purple-400",
      link: "https://www.cdac.in/index.aspx?id=edu_acts_SkillDevelopment",
    },
    {
      title: "The Complete 2024 Web Development Boot-Camp",
      icon: "fas fa-code",
      color: "text-blue-400",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp",
    },
    {
      title: "Smart India Hackathon 2023 - Top 10",
      icon: "fas fa-trophy",
      color: "text-yellow-400",
      link: "https://www.sih.gov.in",
    },
    {
      title: "DA-IICT Hackathon Participant",
      icon: "fas fa-lightbulb",
      color: "text-orange-400",
      link: "https://github.com/dshiv15/Certificates/blob/main/DA-IICT%20Hackathon%20.pdf",
    },
    {
      title: "GSSOC 2024 Contributor",
      icon: "fas fa-users",
      color: "text-pink-400",
      link: "https://github.com/dshiv15/Certificates/blob/main/GSSOC_contributor_badge_2024.png",
    },
    {
      title: "Web Development Internship Certificate",
      icon: "fas fa-briefcase",
      color: "text-indigo-400",
      link: "https://github.com/dshiv15/Certificates/blob/main/Internship_Web_Dev.pdf",
    },
    {
      title: "Tata Imagination Challenge 2024",
      icon: "fas fa-lightbulb",
      color: "text-blue-400",
      link: "https://github.com/dshiv15/Certificates/blob/main/Tata_Imagination.pdf",
    },
    {
      title: "Hackout'24 - Hackathon Participant",
      icon: "fas fa-code",
      color: "text-green-400",
      link: "https://github.com/dshiv15/Certificates/blob/main/Hackout'24.jpg",
    },
    {
      title: "L'Oreal Sustainability Challenge",
      icon: "fas fa-leaf",
      color: "text-teal-400",
      link: "https://github.com/dshiv15/Certificates/blob/main/loreal_sustainibility_challenge.pdf",
    },
    {
      title: "Flipkart Grid 6.0 - Hackathon Certificate",
      icon: "fas fa-shopping-cart",
      color: "text-yellow-500",
      link: "https://github.com/dshiv15/Certificates/blob/main/FlipKart_Grid_6.0.pdf",
    }
  ];

  return (
    <section id="certifications" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 rounded-lg p-6 bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition duration-300 flex items-center"
            >
              <div className={`text-3xl ${cert.color} mr-4`}>
                <i className={cert.icon}></i>
              </div>
              <div>
                <h3 className="text-lg font-medium">{cert.title}</h3>
                <span className="text-blue-400 text-sm flex items-center mt-1">
                  View Certificate <i className="fas fa-external-link-alt ml-1"></i>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}