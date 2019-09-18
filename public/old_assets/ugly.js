let center_scroll = `<div class="center-scroll">            
                        <div class="center" id="center-1">me</div>
                        <div class="center" id="center-2">moodi<span class="tag">.app</span></div>
                        <div class="center" id="center-3">nyt<span class="tag">.app</span></div>
                        <div class="center" id="center-4">rpg<span class="tag">.game</span></div>
                        <div class="center" id="center-5">art<span class="tag">.wav</span></div>
                        <div class="center" id="center-6">$$$$</div>
                    </div>
`


let bio = `<div class="row center-select">
                <div class="col-md-6">
                    <div class="center bio bio-img">
                        <img src="assets/images/habitat.jpg" id="self">
                    </div>
                </div>
                <div class="col-md-6">
                    <!-- BIO -->
                    <div class="side-name bio bio-name">
                        Zubin Mulji
                    </div>
                    <div class="side bio bio-text">
                        <p>My name is Zubin Mulji and I have had a strange and exciting journey to becoming a 
                            programmer. I started out at New York University-Stern
                            School of Business studying math and finance. Pretty soon I had found out about another program at NYU,
                            the Clive Davis
                            Institute of Recorded Music. At the time, I was an electronic music producer and DJ on the side, and was
                            presented with an opportunity
                            to pursue my passion in a concrete way. So by winter break, I was working on my audition material, and
                            by the end of
                            the year was accepted as a new transfer student into the program.
                        </p>
                            
                        <p>While working towards a BFA in Music Production, I also picked up a minor in Web Programming and
                            Applications at NYU to
                            find an outlet for my more technical interests. After graduating, I worked as a recording engineer in
                            New York City music studios, working with singers, rappers, instrumentalists, etc. While the trade is
                            more creative
                            than technical, it taught me how to learn new skills quickly and how to work under pressure to meet a
                            client's
                            needs. 
                        </p>
                            
                        <p>While the problem-solving element of my work was fun, I found myself missing the intellectual stimulation
                            that I got in my
                            calculus and coding classes. So I took a step back from my music work to focus my energy on becoming a
                            skilled programmer,
                            with hopes of writing new and innovative applications to find solutions for creatives and executives in
                            music, entertainment,
                            and beyond.
                        </p><br><br>
                    </div>
                </div>
            </div>
`



let moodi = `<div class="row center-select">
                <div class="col-md-6">
                    <div class="center moodi moodi-img">
                        <img src="assets/images/moodi-cover.png" id="moodi-cover">
                    </div>
                </div>
                <div class="col-md-6">
                    <!-- MOODI -->
                    <div class="side-name moodi moodi-name">
                        Moodi
                    </div>
                    <div class="side moodi moodi-text">
                        <p>Moodi is a minimalist image and sound-based relaxation application.</p><br>
                        <p>Click on any name to go to a different sonic environment. Click a second sound to evoke an
                            entirely new space.</p><br>
                        <p> Explore the possibilities and find easter eggs as you listen and relax. </p><br>
                        
                        <br><br>
                        <a href="https://10ssless.github.io/Project-Moodi/" target="_blank">try out the app</a>
                        <br><br>
                    </div>
                </div>
            </div>
`


let nyt = `<div class="row center-select">
                <div class="col-md-6">
                    <div class="center nyt nyt-img">
                        <img src="assets/images/nyt-cover.png" id="nyt-cover">
                    </div>
                </div>
                <div class="col-md-6">                  
                    <!-- NYT -->
                    <div class="side-name nyt nyt-name">
                        New York Times
                    </div>
                    <div class="side nyt nyt-text">
                        <p>Retrieving articles from the New York Times using an API. </p>
                        <p>Search by keyword, section, and date published.</p>
                        <br><br><br><br>
                        <a href="https://10ssless.github.io/NYTimes-API/" target="_blank">try out the app</a>
                        <br><br>
                    </div>
                </div>
            </div>
        
            

`
let rpg = `<div class="row center-select">
                <div class="col-md-6">
                    <div class="center rpg rpg-img">
                        <img src="assets/images/rpg-cover.png" id="rpg-cover">
                    </div>
                </div>
                <div class="col-md-6">
                    

                    <!-- RPG -->
                    <div class="side-name rpg rpg-name">
                        Player 1
                    </div>
                    <div class="side rpg rpg-text">
                        <p>Player 1 is a legacy-style online role-playing game with a dark, War Games-style theme. </p>
                        <p>Users select a character to play as and must battle their way through the remaining characters. Each character has their own Health Points, Attack Damage, and Counter-attack Damage. Attack points multiply with every move.</p><br>
                        <p>Choose your opponents wisely.</p>
                        
                        <br><br>
                        <a href="https://10ssless.github.io/Unit-4-Game/" target="_blank">try out the game</a>
                        <br><br>
                    </div>
                </div>          
            </div>
`


let art = `<div class="row center-select">
                <div class="col-md-6">
                    <div class="center art art-img">
                        <img src="assets/images/tv.png" id="art-cover">
                    </div>
                </div>
                <div class="col-md-6">
                    
                    <!-- ART -->
                    <div class="side-name art art-name">
                        Art.wav
                    </div>
                    <div class="side art art-text">
                        <p>Coming soon...</p>
                        
                        <br><br><br><br>
                    </div>
                </div>            
            </div>        
`


let contact = `<div class="row center-select">
                <div class="col-md-6">
                    <div class="center contact contact-img">
                        <img src="assets/images/money.jpeg" id="contact-cover">
                    </div>
                </div>
                <div class="col-md-6">
                    <!-- CONTACT -->
                    <div class="side-name contact contact-name">
                        Contact
                    </div>
                    <div class="side contact contact-text">
                        <p class="input-label">Name</p>
                        <input type="text" name="fullname">
                        <br>
                        <p class="input-label">Email</p>
                        <input type="email" name="email">
                        <br>
                        <p class="input-label" id="input-label-msg">Message</p>
                        <input type="text" name="description" id="input-msg">
                        <br><br>
                        <button type="submit">Submit</button>
                        
                        <br><br><br><br>
                    </div>
                </div>            
            </div>
`

module.exports = {
    center_scroll:center_scroll,
    bio:bio,
    moodi:moodi,
    art:art,
    rpg:rpg,
    nyt:nyt,
    contact:contact
}