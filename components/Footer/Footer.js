import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'

function Footer() {
  return (
    <>
      <footer className="bg-green-100 pt-10 shadow-xl border-t-2 border-green-200">
        <div className="container">
            <FirstSection />
            <SecondSection />
        </div>
        <div className="border-t-2 border-green-300 bg-green-200">
          <div className="container">
            <ThirdSection />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
