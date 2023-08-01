import React from 'react'

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light px-32 dark:bg-dark xl:px-24 lg:px-16 md:px-12 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Layout