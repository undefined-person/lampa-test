import React, { forwardRef, InputHTMLAttributes, Ref } from 'react'

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = forwardRef((props, ref: Ref<HTMLInputElement>) => {
  return <input ref={ref} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" {...props} />
})
