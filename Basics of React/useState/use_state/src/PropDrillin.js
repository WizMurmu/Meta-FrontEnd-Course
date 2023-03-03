export default function PropDrillin(props) { 
    return (
    <>
    <h1>Main Component</h1>
    <Header msg={props.msg} /> 
    </>
    )
  };
  
  function Header(props) { 
    return ( 
      <div style={{ border: "10px solid whitesmoke" }}> 
        <h1>Header here</h1> 
        <Wrapper msg={props.msg} /> 
      </div> 
    ); 
  };
  
  function Wrapper(props) { 
    return ( 
      <div style={{ color : "red" , border: "10px solid lightgray" }}> 
        <h2>Wrapper here</h2> 
        <Button msg={props.msg} /> 
      </div> 
    ); 
  };
  
  function Button(props) { 
    return ( 
      <div style={{ color : "blue" ,border: "20px solid orange" }}> 
        <h3>This is the Button component</h3> 
        <button onClick={() => alert(props.msg)}>Click me!</button> 
      </div> 
        ); 
    };
    