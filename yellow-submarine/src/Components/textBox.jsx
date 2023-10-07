import { useNavigate } from 'react-router';
import "../App.css"

function TextBox() {

    const navigate = useNavigate();

    const Jueguito = () => {
        navigate("/jueguito")
    }

    return (
        <div id="textbox">
            <div id="textbox-container">
                <h1 id="textbox-title">What is Firewatch?</h1>
                <p id="textbox-content">
                    The year is 1989.<br /><br />
                    You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.<br /><br />
                    An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to youat all times over a small, handheld radio—and is your only contact with the world you've left behind.<br /><br />
                    But when something strange draws you out of your lookout tower and into the world below, you'll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.
                </p>
            </div>

            {/* <img src="phytoplankton.jpeg" alt="phytoplankton" /> */}
            {/* <img src="../../images/phytoplankton.jpeg" alt="phytoplankton" /> */}

            <button onClick={Jueguito}> hola </button>
            <footer id='textblock-footer'>Demo<a id="textblock-devsense" href="https://youtube.com/c/DevSense19">DevSense</a></footer>

            <div class="flex flex-row">
                <div class="basis-1/4">01</div>
                <div class="basis-1/4">02</div>
                <div class="basis-1/2">03</div>
            </div>

        </div>
    );
}

export default TextBox;