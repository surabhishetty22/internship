import React from 'react'

export default function Spread() {
    let arr1 = [1,3,4,5];
    let arr2 = [4,5,6,7,8]
    let combinedArray = [...arr1,...arr2]
    console.log(combinedArray)

    //vehicle
    let vehicle = {
        model:"mustang",
        brand:"ford",
        color:"blue",
        year:"2021"
    }

    let updateVehicle = {
        engine:"v12",
        top_speed:280,
        top_gear:7,
        color:"yellow"
    }

    let myUpdatedVehicle = {...vehicle,updateVehicle}
    console.log(myUpdatedVehicle)

    //using destructuring
    let numbers = [1,2,3,4,5,6];
    let [a,b,c,...d] = numbers

    // console(typeof typeof 100)

    let arr = [1,2,3]
    arr[100] = 100
    console.log(arr)

    //use of var and let
    var name="rahul"
    console.log(name,1111)
    // if(true){
        // var name = "kiran"
        console.log(name,2222)
    // }
    console.log(name,3333)



  return (
    <div>
      <p>this is spread operator</p>
      <h4>{combinedArray}</h4>
      <h2>{a} {b} {c} {d}</h2>
    </div>
  )
}