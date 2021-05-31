import React from 'react'

export default function Section (props) {
  return (
    <div id={props.id} className='section pt-4 '>
      {props.children}
    </div>
  )
}
