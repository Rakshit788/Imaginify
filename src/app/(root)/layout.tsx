

import SideBar from '@/components/shared/sidebar'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (

    <main className='root'>
      <SideBar/>
  
        <div className="root-container"> 
            <div className='wrapper'>
            {children}
            </div>
        </div>
    
        
        </main>
  )

}

export default layout
