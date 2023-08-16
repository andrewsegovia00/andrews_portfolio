import '../style/lightPortfolio.css'

function LightPortfolio({toggleDarkMode, togglePixelMode}) {
    return (
<>
    <div className="video-container">
        <video autoPlay loop muted playsInline>
        <source src="/assets/videos/light.mp4" id="video" type="video/mp4" />
        </video>
        <div className="color-mask"></div>
    </div>
    <div className="dark-mode-text d-inline-flex p-2 justify-content-center" >
    <div onClick={toggleDarkMode}>
          Light Mode
          </div>
    </div>
    <div className='d-flex p-2 justify-content-center'>
        <img className="transitionIcons mr-3" src='/assets/images/blueDot.png'/>
        <img className="transitionIcons mr-3" src='/assets/images/blackDot.png' onClick={toggleDarkMode}/>
        <img className="transitionIcons mr-3" src='/assets/images/blackDot.png' onClick={togglePixelMode}/>
      </div>
    <div className='container mt-5' id="container">
        <section className='projectSection'>

            <div className='align-items-center justify-content-center margin-2 row indiv-project'>
                <div className='mockups align-items-center d-flex justify-content-center'>
                        <img className='desktop'
                            src="/assets/mockups/travelBudDesktop.png" 
                        />
                        <img className='mobile'
                            src="/assets/mockups/travelBudMobile.png" 
                        />
                </div>
                <div className='project-info col-4'>
                    <h1 id='project-title'>Travel Bud</h1>
                    <p className='regTxtProject'>Travel Bud is a comprehensive webpage designed to assist users in creating and planning their trips while effectively managing their budgets. It offers simulated budgeting features to help users estimate their expenses before embarking on their journeys. Additionally, it enables users to track their actual expenses while traveling by allowing them to add expenses and categorize their spending.</p>
                    <img src="/assets/images/technologyTB.png" />
                    <div className='row d-flex justify-content-around mr-6 linksContainer mt-3' id="linksCont">
                        <a href="https://github.com/andrewsegovia00/travelBud" target="_blank" rel="noreferrer"><h5 id='links'>GitHub Repo</h5></a>
                        <a href="https://travelbudgeting-tracker-0734a04974ea.herokuapp.com/" target="_blank" rel="noreferrer"><h5 id='links'>Live Preview</h5></a>
                    </div>
                </div>
            </div>



            <div className='align-items-center justify-content-center margin-2 row indiv-project'>
                <div className='project-info col-4'>
                    <h1 id='project-title'>Battleship</h1>
                    <p className='regTxtProject'>A retro arcade themed Battleship Game built with its own opponent. This game was my first General Assembly Software Engineering Immersive project. The game includes background music with a How-To-Play manual. In addition, the computer opponent includes advanced logic to beat the player if they are not careful.</p>
                    <img  className='techBttle' src="/assets/images/technologyTB.png" />
                    <div className='row d-flex justify-content-around mr-6 linksContainer mt-3' id="linksCont">
                        <a href="https://github.com/andrewsegovia00/BattleshipGame" target="_blank" rel="noreferrer"><h5 id='links'>GitHub Repo</h5></a>
                        <a href="https://andrewsegovia00.github.io/BattleshipGame/" target="_blank" rel="noreferrer"><h5 id='links'>Live Preview</h5></a>
                    </div>
                </div>
                <div className='mockups align-items-center d-flex justify-content-center ml-5'>
                        <img className='desktopbttle'
                            src="/assets/mockups/desktopBttle.png" 
                        />
                </div>
            </div>



            <div className='align-items-center justify-content-center margin-2 row indiv-project'>
                <div className='mockups align-items-center d-flex justify-content-center'>
                        <img className='desktop'
                            src="/assets/mockups/desktopGO.png" 
                        />
                        <img className='mobile'
                            src="/assets/mockups/mobileGO.png" 
                        />
                </div>
                <div className='project-info col-4'>
                    <h1 id='project-title'>Game On</h1>
                    <p className='regTxtProject'>An e-commerce site powered by Stripe API, showcasing a variety of videogame products. Customers can effortlessly add and checkout items, which updates using Next.js. The website accepts secure payments via Stripe. Built with: Tailwind CSS, TypeScript & Next.js. Hosted on Netlify.</p>
                    <img src="/assets/images/technologyGO.png" />
                    <div className='row d-flex justify-content-around mr-6 linksContainer mt-3' id="linksCont">
                        <a href="https://github.com/andrewsegovia00/ecommerceShop" target="_blank" rel="noreferrer"><h5 id='links'>GitHub Repo</h5></a>
                        <a href="https://sunny-travesseiro-feb150.netlify.app/" target="_blank" rel="noreferrer"><h5 id='links'>Live Preview</h5></a>
                    </div>
                </div>
            </div>
            <div className='align-items-center justify-content-center margin-2 row indiv-project'>
                <div className='project-info col-4'>
                    <h1 id='project-title'>News API</h1>
                    <p className='regTxtProject'>Web app displaying news reports on Tech, Business, Finance, and Science from apinews.org. Built with React, Tailwind CSS, fetch, promises, hooks, and Vite. Link Preview missing due to apinews.org's restrictions.</p>
                    <img  className='techBttle' src="/assets/images/technologyNA.png" />
                    <div className='row d-flex justify-content-around mr-6 linksContainer mt-3' id="linksCont">
                        <a href="https://github.com/andrewsegovia00/News_API" target="_blank" rel="noreferrer"><h5 id='links'>GitHub Repo</h5></a>
                    </div>
                </div>
                <div className='mockups align-items-center d-flex justify-content-center ml-5'>
                        <img className='desktopbttle'
                            src="/assets/mockups/desktopNA.png" 
                        />
                </div>
            </div>

        </section>
    </div>
      </>
    )
}

export default LightPortfolio