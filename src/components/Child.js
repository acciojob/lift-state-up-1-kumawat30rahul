import React from 'react'

function ChildComponent({onBtnClick,showModal}) {
  return (
    <div>
        ChildComponent
    <button onClick={()=>onBtnClick(!showModal)}>click me</button> 
    {showModal && 
        <div>
            <h1>Model content</h1>
            <p>this is a modal content</p>
        </div>
    }
     </div>

  )
}

export default ChildComponent