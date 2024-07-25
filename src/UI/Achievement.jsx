import React from 'react'

const Achievement = ({className, children}) => {
  return (
    <article className={`achievement ${className}`}>
      {children}
    </article>
  )
}

export default Achievement;