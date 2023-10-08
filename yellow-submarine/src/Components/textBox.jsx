import { useNavigate } from 'react-router';
// import "../App.css"

function TextBox() {

    const navigate = useNavigate();

    const Jueguito = () => {
        navigate("/jueguito")
    }

    return (
        <>

            <section>
                <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <h2 class="mb-4 text-3xl font-extrabold text-amber-500 dark:text-amber-500 text-center">
                    The Ocean and its organisms provide all of us with benefits and needs like access to food, oxygen
                    and maintaining the balance of the ecosystem
                    </h2>
                </div>
            </section>


            <section>
                <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div class="text-white sm:text-lg dark:text-white">
                            <h1 class="mb-4 text-3xl font-extrabold tracking-tight text-amber-500 dark:text-amber-500"> PITOPLANKTON </h1>
                            <p class="mb-8 font-light lg:text-xl">
                                One of the organisms in the Ocean that have a big impact for us are Phythonplankton
                            </p>
                            </div>
                        <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/planktonGlobe.jpeg" alt="globe" />
                            
                
                    </div>
                </div>
            </section>

            <section class="lg:py-24">
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
                    <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div class="text-white sm:text-lg dark:text-white">
                            <h1 class="mb-4 text-3xl font-extrabold tracking-tight text-amber-500 dark:text-amber-500"> PITOPLANKTON </h1>
                            <p class="mb-8 font-light lg:text-xl">
                                Phythonplankton are microorganisms that are plant-like and generate resources like nutrients and oxygen
                                through photosyntesis
                            </p>
                            </div>
                        <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/planktonGlobe.jpeg" alt="globe" />
                            
                
                    </div>
                </div>
            </section>

           
            <section>
                <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div class="flex justify-evenly gap-8 xl:gap-16 text-white sm:text-lg dark:text-white">
                        <div>
                            <p>This little organisms are responsible for the start of life on the surface by providing around 50%
                            of oxygen for the atmosphere</p>
                        </div>
                        <div>
                            <p>They are also the web of the food chain in the ocean, providing nutrients to other microoganisms and
                            small animals</p>
                        </div>
                        <div>
                            <p>They also have the responsability to balance the acidity levels in the ocean with their mineral shells that
                            from around them and are dissolved to balance the acidity around them</p>
                        </div>
                    </div>
                </div>
            </section>


            


            <section>
                <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6 flex flex-col justify-center">

                    <div class="text-gray-500 sm:text-lg dark:text-gray-400 text-center">
                        <h1 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"> Are you Ready? </h1>
                        <p class="mb-8 font-light lg:text-xl">
                            Now we are ready to embark on a journey to a distant future to restore the world with the help of the ocean.
                        </p>
                        <button id='BOTON' onClick={Jueguito}> PLAY! </button>
                    </div>
                    
                </div>
                
              
            </section>
            
        </>
    );
}

export default TextBox;