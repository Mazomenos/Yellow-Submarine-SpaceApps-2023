import { useNavigate } from 'react-router';
// import "../App.css"

function TextBox() {

    const navigate = useNavigate();

    const Jueguito = () => {
        navigate("/jueguito")
    }

    return (

        // <div class="container" id="textbox">
        //     <div class="container">
        //         <div id="textbox-container">
        //             <h1 id="textbox-title">What is Firewatch?</h1>
        //             <p id="textbox-content">
        //                 The year is 1989.<br /><br />
        //                 You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.<br /><br />
        //                 An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to youat all times over a small, handheld radio—and is your only contact with the world you've left behind.<br /><br />
        //                 But when something strange draws you out of your lookout tower and into the world below, you'll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.
        //             </p>
        //         </div>
        //         {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={Jueguito}> hola </button> */}
        //     </div>

        //     <div class="container pt-8">
        //         <div class="container mx-auto flex flex-row items-center">
        //             <div class="basis-1/2">
        //                 You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.
        //             </div>
        //             <div class="basis-1/2 mx-auto">
        //                 <img src="./images/planktonGlobe.jpeg" alt="globe" class="w-64 h-64 object-cover rounded shadow-md" />

        //             </div>
        //         </div>

        //     </div>

        //     {/* <footer id='textblock-footer'>Demo<a id="textblock-devsense" href="https://youtube.com/c/DevSense19">DevSense</a></footer> */}

        // </div>

        <>
            <section>
                <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h1 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"> PITOPLANKTON </h1>
                            <p class="mb-8 font-light lg:text-xl">
                                placton wow placton wow placton wow placton wow placton wow placton wow placton wow placton wow
                                placton wow placton wow placton wow placton wow placton wow placton wow placton wow placton wow
                                placton wow placton wow placton wow
                            </p>
                        </div>
                        {/* <img class="hidden w-full rounded-full lg:mb-0 lg:flex " src="./images/planktonGlobe.jpeg" alt="globe" /> */}
                        {/* <img class="hidden w-64 h-64 rounded-full lg:mb-0 lg:flex" src="./images/planktonGlobe.jpeg" alt="globe" /> */}
                        <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/planktonGlobe.jpeg" alt="globe" />

                    </div>
                </div>
            </section>

            <section>
                <figure>
                    <figure class="max-w-screen-md mx-auto">
                        <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
                        </svg>
                        <blockquote>
                            <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"Phytoplankton are key players in drawing carbon dioxide (CO2) down from our atmosphere. Their ability to export carbon to the deep ocean, a process that may reduce climate warming, is being studied by researchers around the globe. – Ivona Cetinić, PACE Biogeochemistry Lead & EXPORTS Project Scientist</p>
                        </blockquote>
                    </figure>
                </figure>
            </section>

            <section>
                <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

                    <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h1 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"> PITOPLANKTON </h1>
                        <p class="mb-8 font-light lg:text-xl">
                            placton wow placton wow placton wow placton wow placton wow placton wow placton wow placton wow
                            placton wow placton wow placton wow placton wow placton wow placton wow placton wow placton wow
                            placton wow placton wow placton wow
                        </p>
                    </div>
                    
                    <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/planktonGlobe.jpeg" alt="globe" />
                    {/* <img class="hidden w-full rounded-full lg:mb-0 lg:flex " src="./images/planktonGlobe.jpeg" alt="globe" /> */}
                    {/* <img class="hidden w-64 h-64 rounded-full lg:mb-0 lg:flex" src="./images/planktonGlobe.jpeg" alt="globe" /> */}

                </div>
            </section>
        </>
    );
}

export default TextBox;