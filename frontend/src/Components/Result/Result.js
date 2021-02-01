import React, { useState } from 'react';
import './Result.css'

function Result(props) {

    // if(props.threshold!==undefined && props.distance <= props.threshold){
    //     setLabelColorState("green")
    // }


    let field = <div></div>;
    let signatureVerdict = (props.threshold !== undefined && props.distance <= props.threshold) ? "Assinatura é autêntica" : "A assinatura não corresponde a este ID de cliente";

    if (props.threshold !== undefined)

        field = <div className="ResultContainer">
            <h4>Resultado</h4>
            <p>Assinatura threshold: {props.threshold}<br />
                    Distância da imagem similar: <label style={{ color: (props.distance <= props.threshold ? "green" : "red") }}>{props.distance}</label>
            </p>
            <p style={{ color: (props.distance <= props.threshold ? "green" : "red") }}>{signatureVerdict}</p>
        </div>;
    return (field);
}

export default Result;