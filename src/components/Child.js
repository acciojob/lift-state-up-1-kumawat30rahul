import React from 'react'

function ChildComponent({onBtnClick,showModal}) {
  return (
    <div>
        <h2>ChildComponent</h2>
    <button onClick={()=>onBtnClick(!showModal)}>click me</button> 
    {showModal && 
        <div>
            <h3>Modal Content</h3>
            <p>This is the modal content.</p>
        </div>
    }
     </div>

  )
}

export default ChildComponent