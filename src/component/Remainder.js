import React,{useState}  from 'react'
import './Remainder.css'
import Part from './Part';


function Remainder() {
    const [name , setName] = useState('')
    const[remainder , setRemainder] = useState([])

    console.log(name)
    const onHandleChange = (e) =>{
        setName(e.target.value)

    }
    const onClickHandle =() =>{
        console.log("sumitted")
        setRemainder([...remainder ,name])
        setName('');
    }
    const onDelete = (index)=>{
        const updatedRemainder =remainder.filter((item,itemindex)=>{
            return itemindex !== index
           
        })
        setRemainder(updatedRemainder);
    }


  return (
    <div className='body'>
        <div className='container'>
            <div className='card'>
                <h3 className='heading'>Remainder App</h3>
                <form className='rem'>
                    <input type="text" class="form-control" placeholder="Add remainder" value={name} onChange={onHandleChange}aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <button  type="button" onClick={onClickHandle} class="btn btn-color">Submit</button>
                </form>

                <div class="input-group mb-3">
                 
                    {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span class="input-group-text bg-danger" id="basic-addon2">
                        <button type="button" class="btn btn-sm btn-danger">Delete</button> */}
                    {/* </span> */}
                    <Part  remainder={remainder} onDelete={onDelete} />
                </div>
            </div>
        </div>
    
      
    </div>
  )
}

export default Remainder

