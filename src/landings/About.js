import React from 'react';
import '../styles/Main.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Huargo from '../images/Huargo.jpg';
import Stormtrooper from '../images/stormtrooper.jpg';
import Vicky from '../images/vicky.jpg';
import WH from '../images/warhammer.jpg';
import Rol from '../images/rol.jpg';
import Lenin from '../images/lenin.jpg';

function About() {
  return (
    <div className="todo">
      <div className="content">
        <div className="experience">
          <h1 className="bienv">About me!</h1>
          <h2 className="bienv2">I'm passionate about learning new things! I love deep talks with my friends sharing a drink, motorcycles, videogames, 
          to learn about philosophy, history and economics and I'm a bit nerdy about tabletop games, Dungeons and Dragons and wargames :)</h2>
          <h2 className="bienv2">Yeah, I know, I may be a walking software developer cliché...</h2>
        </div>
      </div>
      <div className="content-grey closetop content-about">

        <div className="container-fluid d-flex justify-content-center colres" >
            <div className="row colres" >
                <div className="col-md-4 colres" >
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={Huargo} alt="test" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Huargo, my dog</h4>
                            <p className="card-text text-secondary">
                                My best friend. I found him on the streets while I was working. He was very sick, scared and hungry. That was almost seven 
                                years ago and since then we've been together.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  colres" >
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={Stormtrooper} alt="test" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">My episode IV stormtrooper armour!</h4>
                            <p className="card-text text-secondary">
                                Back in Spain I used to volunteer with a local Science-Fiction association and with Disney's 501st Legion 
                                to not only make Sci-Fi culture known better for the general public, but to help fundraising money and toys to 
                                give away to hospitalized children while we visited them and made their stays in hospital much easier :)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  colres" >
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={Vicky} alt="test" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Victoria, My Yamaha MT-10</h4>
                            <p className="card-text text-secondary">
                                Yeah, I'm the kind of guy who gives names to his motorcycles. I am in love with my bike :S
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid d-flex justify-content-center colres" >
            <div className="row  colres" >
                <div className="col-md-4  colres" >
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={WH} alt="test" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Warhammers!</h4>
                            <p className="card-text text-secondary">
                                My weak point and the main reason I'm still poor! I love to collect, paint and play with them!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 colres" >
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={Rol} alt="test" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Dungeons and Dragons</h4>
                            <p className="card-text text-secondary">
                                I've been playing almost weekly for the past years with some friends and I think it's a great way to improve one's personality 
                                and way of thinking... and it's always cool to slay dragons.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 colres" >
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={Lenin} alt="test" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Moscow</h4>
                            <p className="card-text text-secondary">
                                I love to travel around the world. When I was in Moscow back in 2019 they kept saying I looked like Lenin's statues and 
                                they didn't stop until I took that photo. Do I look like him?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


      </div>
    </div>
  );
}

export default About;
