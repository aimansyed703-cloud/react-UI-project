
import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pl-15 sm:pl-15 pb-16 pt-6 flex items-center gap-10 h-[90vh] px-4 sm:px-8 lg:px-18'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
