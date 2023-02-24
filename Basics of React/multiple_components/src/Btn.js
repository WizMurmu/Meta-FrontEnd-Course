// function btn()
// {
//     const clickHandler = () => console.log('Olalalala Clicked')
//     return (
//         <button onClick={clickHandler}>
//             Click Me</button>
//     );
// }
// export default btn;


function Btn()
{
    const clickHandler = () => console.log('Olalalala MouseOvered')
    return (
        <button onMouseOver={clickHandler}>
            Click Me</button>
    );
}
export default Btn;