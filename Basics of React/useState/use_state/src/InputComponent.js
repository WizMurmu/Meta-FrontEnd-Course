import { useState } from 'react';

export default function InputComponent() { 
// EXAMPLE-1
    //   const [inputText, setText] = useState('hello'); //This code uses the useState hook from React to define a state variable inputText and a function setText to update it. The initial value of inputText is set to the string 'hello'.

//   function handleChange(e) { 
//     setText(e.target.value); 
//   } 

//   return ( 
//     <> 
//       <input value={inputText} onChange={handleChange} /> 
//       <p>You typed: {inputText}</p> 
//       <button onClick={() => setText('hello')}> 
//         Reset 
//       </button> 
//     </> 
//   ); 


// EXAMPLE-2
const[form,setForm]=useState({
   firstName : "Bishwajeet " ,
   lastName : "Murmu",
   emailId : "wizmurmu@gmail.com"
})

return ( 
    <> 
      <label> 
        First name :  
        <input 
          value={form.firstName} 
          onChange={e => { 
            setForm({  
                ...form,
                firstName: e.target.value 
            }); 
          }} 
        /> 
      </label>
      <label>
        lastName :  
        <input value={form.lastName} onChange={e=>setForm({
            ...form,
            lastName : setForm.target.value
        })}
        />
      </label>
      </>
)
}