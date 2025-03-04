
import React, { useRef, useState } from 'react'

export default function App() {
  const title = useRef()
  const description = useRef()
  const [deta , setDeta] = useState([])
 const submit = (e)=>{
  e.preventDefault()
console.log(title.current.value);
console.log(description.current.value);

deta.push({
  title : title.current.value,
  description : description.current.value,
  id : Date.now()
})
setDeta([...deta])

title.current.value = "";
description.current.value = "";


 }
 function deletes(index){
deta.splice(index , 1)
setDeta([...deta])
 }
 function edit(index){
  let promt = prompt('enter value ')
  deta[index].title = promt;
  setDeta([...deta])
 }
  return (
    <>
    <form onSubmit={submit}>
    <input type="text" placeholder='enter your title' ref={title}/>
    <input type="text" placeholder='enter your discription' ref={description} />
    <button>submit</button>
    </form>
    <div>{deta.length <= 0 ? 'not found' : deta.map((item , index)=>{
      return (
        <div key={item.id}>
          <h1>
            {item.title}
          </h1>
          <h1>
            {item.description}
          </h1>
          <button onClick={()=>{
            deletes(index)
          }}>delete</button>
             <button onClick={()=>{
          edit(index)
          }}>edit</button>
          </div>
      )
    })} </div>

   
    </>
  ) 
}




