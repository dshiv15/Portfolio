export default function Skills() {
    const skillCategories = [
      {
        category: "Programming Languages",
        skills: ["C++", "Python", "JavaScript", "SQL", "Java"]
      },
      {
        category: "Frameworks & Libraries",
        skills: ["ReactJS", "Express.js", "Node.js","NumPy", "Matplotlib","Pandas"]
      },
      {
        category: "Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB"]
      },
      {
        category: "Cloud & DevOps",
        skills: ["Amazon Web Services", "Git", "GitHub"]
      },
      {
        category: "Business Intelligence",
        skills: ["Tableau", "Data Modeling", "ETL/ELT", "Fact and Dimension Tables"]
      },
      {
        category: "Soft Skills",
        skills: ["Management", "Leadership", "Oratory", "Adaptability"]
      }
    ];
  
    return (
      <section id="skills" className="py-20 bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6 bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-2 rounded-md text-sm border border-gray-600 hover:border-blue-400 transition duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }