
function Sidebar(props)
{
    const Sidebar = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "calc(100vh - 160px)",
        backgroundColor: "aqua"
      }
    return <h2 style={Sidebar}>Hello this is {props.name} from sidebar</h2>
}
export default Sidebar;