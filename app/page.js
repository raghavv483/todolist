'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
      e.preventDefault();
      setmainTask([...mainTask,{title,desc}]);
      setdesc("");
      settitle(""); 
      
      console.log(mainTask);
  }
  const deleteHandler=(i)=>{
      var copytask=[...mainTask];
      copytask.splice(i,1);
      setmainTask(copytask)
  }
  var renderTask=<h2>No Task available</h2>
 if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return(
      <>
      <li key={i} className='flex items-center justify-between'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h5 className='text-xl font-semibold'>{t.desc}</h5>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-400 rounded-md text-white font-bold px-5 py-2 mb-5'>Delete</button>
      </li>
      </>
    )
})
 }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-2xl font-bold text-center'>Raghav's toDoList</h1>
    <form onSubmit={submitHandler}>
      <input type='text' 
      className='border-zinc-800 m-5 px-4 py-2 border-2 text-2xl' 
      placeholder='Enter Title here' 
      value={title} 
      onChange={(e)=>{
        //console.log(e.target.value);
        settitle(e.target.value)
      }}></input>
 
      <input type='text' 
      className='border-zinc-800 m-5 px-4 py-2 border-2 text-2xl' 
      placeholder='Enter Description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value);
      }}
      ></input>
      <button className='bg-black text-white rounded-md font-bold text-2xl ml-4 mt-6 px-8 py-2'>Add</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-400'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page