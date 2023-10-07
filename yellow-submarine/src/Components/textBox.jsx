import "../App.css";

import { useNavigate } from 'react-router';


function TextBox() {


    const navigate = useNavigate();

    const Jueguito = () => {
        navigate("/jueguito")
    }

    return (
        <div id="textbox">
            <div id="textblock-container">
                <h1 id="textblock-title">What is Firewatch?</h1>
                <p id="textbox-content">
                The year is 1989.<br/><br/>
                You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.
                </p>
            </div>
            <button onClick={Jueguito}> hola </button>
            <footer id='textblock-footer'>Demo<a id="textblock-devsense" href="https://youtube.com/c/DevSense19">DevSense</a></footer>
        </div>
    );
}

export default TextBox;