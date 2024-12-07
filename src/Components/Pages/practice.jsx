import React, { lazy, Suspense, useState } from "react";
// import ConditionalRendering from "../practice/conditionalRendering";
import Theme from "../practice/LightDarkTheme/components/Theme";

const ConditionalRendering = lazy(()=> import("../practice/conditionalRendering"))


const Practice = () => {

  const [count, setCount] = useState(0)
  console.log('count', count)

  const Counter = ()=>{
    return  <button  onClick={() =>setCount(v=> v + 1)}>Counter</button>

  }
  return (
    <React.Fragment>
      <Counter />
      <Suspense fallback={<p>Loading...</p>}>
      <ConditionalRendering hello={count}/> 
      </Suspense>
      <Theme />
    </React.Fragment>
  );
};
export default Practice;
