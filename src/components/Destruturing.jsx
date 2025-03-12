import React from 'react'

export default function Destruturing() {
    let numbers = ["One","Two","Three","Four","Five"];
    //old method let n1 = numbers[0]
    let [num1,num2,num3] = numbers //new method 
    let calculate =[1+1,2+2,3+3,4+4];
    let[a,b,c]=calculate
    
    let vehicle={
        model:"mustang",
        brand:"ford",
        color:"red",
        year:2000,
    }
    //object destructuring
    let {model,brand,color}=vehicle
  return (
    <div>
        {/* old method <h1>{n1}</h1> */}
<h1>{num1}</h1>
<h1>{num2}</h1>
<h1>{num3}</h1>
<h1>{a}</h1>
<h1>{b}</h1>
<h1>{c}</h1>
<h1>{model}</h1>
<h1>{brand}</h1>
<h1>{color}</h1>
    </div>

  )
}
