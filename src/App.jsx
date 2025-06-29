import React from "react"
import BoxData from "./Boxes"
import Box from "./Box"

    // export default function App (props) {
    export default function App () {


    const [square, setSquare] = React.useState(BoxData)
    const newSquares = square.map(item => {
        return (
            <div></div>
        )
    })

    function toggle (id) {
        setSquare(prevSquare => {
            return prevSquare.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            });



        // const newSquare = []
        // for(let i = 0; i < prevSquare.length; i++) {
        //     const currentSquare = prevSquare[i]
        //     if(currentSquare.id === id) {
        //         const updatedSquare = {
        //             ...currentSquare,
        //             on: !currentSquare.on
        //         }
        //         newSquare.push(updatedSquare)
        //     } else {
        //         newSquare.push(currentSquare)
        //     }
        // }
        // return newSquare
    });
        // console.log("it is clicked")
        // console.log(id)
    



    }

    
    
    // const styles = {
    //     backgroundColor: props.darkMode ? "#222222" : "#CCCCCC"
    // }

    const newSquare = square.map(item => {
        return (
            <Box 
                key={item.id} 
                on={item.on} 
                toggle={() => toggle(item.id)} 
            />

            // <div style={styles} className="box" key={item.id}></div>
        )
    })


    return (
        <div>
            {newSquare}
        </div>
    )
}


// function greet (name) {
//      console.log("good morning" + name)
//}
// greet("bayo")


// const greet = (name) => {
    // consle.log("hello" + name);
    // }
    // greet("bayo")
