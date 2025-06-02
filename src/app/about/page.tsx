import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-white">
      {/* About Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About TechSolutions Pro
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate technology experts dedicated to helping businesses 
              succeed in the digital age through innovative solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, TechSolutions Pro emerged from a simple vision: to bridge the gap 
                between complex technology and business success. Our founders, experienced software 
                engineers and business consultants, recognized that many companies struggle to 
                leverage technology effectively.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we serve over 100+ clients across various industries, from startups to 
                enterprise companies, helping them transform their digital presence and streamline 
                their operations through custom software solutions.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence and customer satisfaction has made us a trusted 
                partner for businesses looking to innovate and grow in the digital landscape.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-700">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-700">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Skilled professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Sharma',
                role: 'CEO & Founder',
                description: 'Former software architect with 10+ years in enterprise solutions',
              },
              {
                name: 'Rohit Jain',
                role: 'Lead Developer',
                description: 'Full-stack developer specializing in modern web technologies',
              },
              {
                name: 'Manorama Singh',
                role: 'Project Manager',
                description: 'Expert in agile methodologies and client relationship management',
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to start your next project? We'd love to hear from you.
          </p>
          <div className="space-x-4">
            <Link href="/" className="btn-primary">
              View Our Services
            </Link>
            <button className="btn-secondary">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}