import React from 'react'

export default function Arrow() {
     let name="Rahul"
   // let name={fname:"surabhi",lname:"shetty",age:23}

//    creating function using simple function ====>
//     function Simple() {
//     alert("this is simple function")
//    }

//function using arrow
//() => arrowfunction ...shortest function with less syntax
   const Hello = (name) => alert("this is simple function " + name)
  const Output = () => {
   return (
   <ul>
    <li>hi</li>
    <li>hello</li>
    </ul>)
  }
  return (
    <div>
        Arrow - {name}
        <br />
        <button onClick={()=>Hello("surabhi")}>Hello</button>
        {Output()}
{/* {name.lname} */}
    </div>
  )
}
