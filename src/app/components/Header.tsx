import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              TechSolutions Pro
            </div>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  )
}