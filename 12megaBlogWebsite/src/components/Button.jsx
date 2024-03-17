import React from 'react'

function Button({
    // children is just a name . It is text here
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className="",
    // ...props is written because of addtion properties which is user is going to provide 
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} 
     {...props}>
        {children}
    </button>
  )
}

export default Button
