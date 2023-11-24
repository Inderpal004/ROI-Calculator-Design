import React from 'react'
import Container from './Container'

export default function Layout() {
  return (
    <div className='main-container'>
    <Container mainHeading="Calculator" icon='<i class="ri-pencil-line" id="pencil"></i>' details='Show Details' showHide='hide'/>
    <Container mainHeading="ROI Calculator" icon='<i class="ri-pencil-line" id="pencil"></i>'   details='Hide Details' showHide='show'/>
    <Container mainHeading="ROI Calculator"  icon='<i class="ri-check-line" id="check"></i>' border='yellow-border' details='Show Details' showHide='hide'/>
   </div>
  )
}
