import React,{useState} from 'react'
import ChildComponent from './Child';

function MyComponent() {
    const [showModal,setShowModal] = useState(false);

   
  return (
    <div className='parent'>
        <h1>Parent COmponent</h1>
        <ChildComponent onBtnClick={setShowModal} showModal={showModal} />
    </div>
  )
}

export default MyComponent