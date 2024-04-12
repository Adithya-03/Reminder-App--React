import React,{useState} from 'react'
import './Part.css'

function Part({remainder,onDelete}) {

    // const onDelete = (index)=>{
    //     const updatedRemainder =remainder.filter((item,itemindex)=>{
    //         return itemindex !== index
    //         setRemainder(updatedRemainder);
    //     })


    // }

  return (
    <div className='list-container'>
       <ul className='list'>
        {remainder.map((remainderItem , index)=>(
            <li key={index}>{remainderItem}
            <button type="button" onClick={() => onDelete(index)} class="btn btn-sm btn-danger">Danger</button>
            </li>
        ))}
           
      </ul>
    </div>
  )

        }
export default Part
