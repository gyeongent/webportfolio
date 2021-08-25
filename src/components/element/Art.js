import React, { Component } from "react";
import testimage from "../../images/Arts/testimage.png"

import "./Art.css";

class ArtBoxDefault extends Component {
    render(){
        return(
            <div className="ArtBox">
                <img src={testimage} width="273px" />
            </div>
        );
    }
}

function Art () {
        return (
            <div>
                <div className="ArtContent">
                    <p className="DefaultText" />
                    <p className="ATitle">
                        2D Design
                    </p>
                    
                    <ul>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                    </ul>

                    <p className="ATitle">
                        3D Design
                    </p>
                    <ul>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                    </ul>

                    <p className="ATitle">
                        Other
                    </p>
                    <ul>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                        <li>
                            <ArtBoxDefault/>
                        </li>
                    </ul>
                </div>
            </div>
        )
}



export default Art;