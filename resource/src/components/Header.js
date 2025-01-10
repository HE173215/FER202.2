import React from 'react'

function Header() {
  let greet = (name, timeOfday) => {
    console.log("Hello " + name + " Good " + timeOfday);
    console.log(`Hello ${name} Good ${timeOfday}`);
  };
  greet("John","Morning")
  return (
    <div>Header</div>
  )
}

export default Header