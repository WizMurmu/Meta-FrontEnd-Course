function ModeToggler()
{
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is on </h1>
    const lightMode = <h1>Light Mode is on </h1>
    function HandleClick () 
    {
    darkModeOn=!darkModeOn
    if(darkModeOn)
        console.log("Dark Mode is on")
    else
        console.log("Dark Mode is off")}
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={HandleClick}>ModeToggler</button>
        </div>
    )
}
export default ModeToggler;