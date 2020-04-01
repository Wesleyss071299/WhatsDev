import React from 'react';



const InfoBar = ({room}) => {

    return(
        <div>
        <div>
            <h3>{room}</h3>
        </div>
        <div>
            <a href="/"> Sair</a>
        </div>
    </div>
    );
    
}

export default InfoBar;