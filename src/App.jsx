import React from 'react'
import IBMNavbar from './components/IBMNavbar '

function App() {
  return (
    <div className="App">
      <IBMNavbar />
      
      {/* Demo content below navbar */}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              IBM Navigation Bar
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              A responsive navigation bar inspired by IBM's homepage design
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Responsive Design
                </h2>
                <p className="text-gray-600">
                  Works seamlessly across desktop, tablet, and mobile devices
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Interactive Dropdowns
                </h2>
                <p className="text-gray-600">
                  Fully functional dropdown menus with smooth animations
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  IBM Styling
                </h2>
                <p className="text-gray-600">
                  Clean, professional design matching IBM's brand aesthetic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App