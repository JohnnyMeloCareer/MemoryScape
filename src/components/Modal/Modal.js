import React from "react";
import "./Modal.css";

const Modal = props => (
    <div className="resultModal">
        <div id="modalContent">
            <h1>{props.message}</h1>
            <br></br>
            <button class="btn btn-danger" onClick= {props.replayGame}>Replay the Game!</button>
        </div>
    </div>
);

export default Modal; 