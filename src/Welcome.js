import React from "react";
import { useNavigate } from 'react-router-dom';

function Welcome(){


    const navigate = useNavigate();
return(
    <div className="login">
        <div className="loginContainer">
            <button className="btnContainer" onClick={()=>{navigate('/ComponentPacing')}}> 
            ComponentPacing
            </button>
            <button className="btnContainer" onClick={()=>{navigate('/showdata')}}>
            LessonCompetency
            </button>
            <button className="btnContainer" onClick={()=>{navigate('/ComponentPacing')}}>
            OnOffTask
            </button>
            <button className="btnContainer" onClick={()=>{navigate('/ComponentPacing')}}>
            OpportunitiesToRespond
            </button>
            <button className="btnContainer" onClick={()=>{navigate('/ComponentPacing')}}>
            UseOfQuestion
            </button>
            <button className="btnContainer" onClick={()=>{navigate('/ComponentPacing')}}>
            VerbalBehaviour
            </button>
        </div>
    </div>
)


}

export default Welcome;