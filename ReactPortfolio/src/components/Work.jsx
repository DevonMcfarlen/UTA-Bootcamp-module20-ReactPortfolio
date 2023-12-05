import newestProject from '../assets/images/Project-2.png'
import workOne from '../assets/images/Project-1.png'
import workTwo from '../assets/images/hoxton.png'
import workThree from '../assets/images/JUDGEMENTMATT.png'
import workFour from '../assets/images/Matt-Pop.png'

function Work() {
    return (
        <div>
            <section id="labels">
                <h3>Work</h3>
            </section>

            <article id="work">
                <section class="main-image">
                    <a href="https://board-game-cabinet-project-2-a7bf951a2669.herokuapp.com"><img src={newestProject}/></a>
                </section>
                    
                <section class="sub-images">
                    <a href="https://devonmcfarlen.github.io/DallasMavericksPlayerStats/"><img src={workOne}/></a>
                    <img src={workTwo}/>
                    <img src={workThree}/>
                    <img src={workFour}/>
                </section>
            </article>
        </div>
    )
}

export default Work;