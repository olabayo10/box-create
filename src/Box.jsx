import React from "react"
export default function Box (props) {
    // console.log(props.on)

    // this is formerly b4 props was passed from parent component 
    // const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }

    return (
       <div 
            style={styles} 
            className="box" 
            onClick={props.toggle}
        >
        </div>
    )
}


