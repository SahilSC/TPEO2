
function Greeting(props) {

    function toggleColor(e) {
        const currentClass = e.target.className;
        
        if (currentClass === "defaultColor") {
            e.target.className = "hoverColor"
        } else {
            e.target.className = "defaultColor";
        }
    }

    return(
        <h1 onClick={toggleColor}> Hello, World from {props.name ? props.name : "TPEO!!"}!</h1>
    )
}

export default Greeting;