import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional IT Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We help businesses grow with cutting-edge technology and expert consulting
            </p>
            <div className="space-x-4">
              <Link href="/about" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Learn More
              </Link>
              <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies',
                icon: '🌐'
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications for iOS and Android',
                icon: '📱'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and migration services',
                icon: '☁️'
              },
              {
                title: 'IT Consulting',
                description: 'Strategic technology consulting to optimize your business processes',
                icon: '💼'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you achieve your technology goals
          </p>
          <Link href="/about" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}