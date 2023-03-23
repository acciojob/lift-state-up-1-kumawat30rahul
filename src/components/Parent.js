import React,{useState} from 'react'
import ChildComponent from './Child';

function MyComponent() {
    const [showModal,setShowModal] = useState(false);

   
  return (
    <div className='parent'>
        Parent COmponent
        <ChildComponent onBtnClick={setShowModal} showModal={showModal} />
    </div>
  )
}

export default MyComponent