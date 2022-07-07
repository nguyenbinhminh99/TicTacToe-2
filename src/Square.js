import { useState } from "react";

function Square(props) {
    return (
        <button className="square" onClick = {(e) => {props.clickOn()}}>
            {props.value}
      </button>
    );
}

export default Square