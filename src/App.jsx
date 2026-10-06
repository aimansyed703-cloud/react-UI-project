import React from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'

const App = () => {

  const users =[
    {
      img:'https://media.istockphoto.com/id/1481370371/photo/portrait-of-enthusiastic-hispanic-young-woman-working-on-computer-in-a-modern-bright-office.jpg?s=612x612&w=0&k=20&c=8kNce9Ruc9F2KXvnwf0stWQXCwwQTBCrW8efrqhUIa4=',
      intro:'',
      color:"royalblue",
      tag:'Satisfied'
    },
     {
      img:'https://media.istockphoto.com/id/2184105565/photo/young-professional-it-specialist-latin-hispanic-business-lady-working-on-laptop-pc-sitting-at.jpg?s=1024x1024&w=is&k=20&c=3nYeozDgrJQ10CGyUGLMIBURySK718w0jBGrBde9CAY=',
      intro:'',
      color:"lightseagreen",
      tag:'Underserved'
    },
     {
      img:'https://media.istockphoto.com/id/1459348921/photo/a-smiling-man-with-glasses-is-using-a-laptop-in-the-office-while-sitting-at-his-desk.jpg?s=612x612&w=0&k=20&c=api2P5DEDoThHjxN9SbvLgMa3bB2BU875qIwjKpDPks=',
      intro:'',
      color:"orange",
      tag:'UnderBanked'
    },
     {
      img:'https://media.istockphoto.com/id/2196870531/photo/making-decision-on-the-move.jpg?s=612x612&w=0&k=20&c=l9LHXSh1d2NBSldDxSDRsLRDJwmm7mMuMsOTlQFcNW0=',
      intro:'',
      color:"purple",
      tag:'Underground'
    },
    {
      img:'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:"black",
      tag:'Average'
    }
  ]
  return (
    <div>
    <Section1 users={users}/>
    <Section2/>
    </div>
  )
}

export default App
