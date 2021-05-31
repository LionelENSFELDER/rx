import React from 'react'

export default function Section (props) {
  return (
    <div id={props.id} className='section'>
      {props.children}
    </div>
  )
}
