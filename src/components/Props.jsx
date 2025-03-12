import React from 'react'

export default function Props() {
    // const Greeting = (props) => {
    //     return <h1>Hello {props.name} {props.age}</h1>
    // }
    // destructing:
    const Greeting = ({name,age}) => {
        return <h1>Hello {name} {age}</h1>
    }
  return (
    <div>
        <h2>This is props</h2>
        {/* {Greeting("Rahul")} */}
        <Greeting name="Rahul" age={23} />
    </div>
  )
}
