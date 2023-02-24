import Heading from "./Heading";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import cr7 from "./cr7.jpg";

function Logo(props)
{
  const pic = <img src={cr7}/>;
  return pic;
}

function App() {
  return (
    <div >
      <Heading name="wiz" color="purple"/>
      <Logo/>
      <Main name = "mohit" color = "red"/>
      <Sidebar name = "spandan" color = "green"/>
    </div>
  );
}

export default App;