import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
      
    
    

const Home = () => {
  return (
   <>

    <div className="home" id='home'>
        <main>
            <h1>TechStar</h1>
            <p>Solution to all your problems!</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your one and only solution in the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veniam ut eveniet perspiciatis similique eos consectetur doloremque temporibus dolorum voluptas laudantium totam vero sed blanditiis aliquam, recusandae esse quia beatae ipsa quisquam odit. Cupiditate sapiente error accusamus porro iure! Nostrum, dolor alias reprehenderit, eaque eveniet eum, vel ducimus aut ipsam aperiam ad a consectetur deleniti dolorem hic? Exercitationem ex dolore architecto animi fugiat. Voluptatum veniam facere numquam nihil voluptas magnam repudiandae architecto placeat itaque debitis dolores iusto, dolorem laudantium praesentium culpa quasi quis ut corrupti deserunt inventore. Officiis, qui! Quidem iste molestiae sit vel mollitia commodi cumque accusantium fuga quam!</p>
        </div>        
    </div>

    <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{animationDelay: "0.3s"}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style={{animationDelay: "0.5s"}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                     <div style={{animationDelay: "0.7s"}}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div style={{animationDelay: "1s"}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>

            </div>
        </div>

   </>
  )
}

export default Home
