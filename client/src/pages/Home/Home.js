import React from 'react';
import './Home.css';
import NavTabs from '../../components/NavTabs/NavTabs'
import Card from '../../components/Card/Card'

class Home extends React.Component {

    state = {
        pages:['me','sabotage','keep-it-local','moodi','art','contact']
    }

    render(){
        return(
            <div className="main-content">
                <NavTabs/>

                <div class="center-scroll">            
                    {this.state.pages.map(item => {
                        return(
                            <Card 
                                id={this.state.pages.indexOf(item)+1}
                                title={item}
                            />
                        )
                    })}
                </div>

                <div className="name zm"><a href="/">Zubin Mulji</a></div>
                <div className="name lam">Full Stack Web Developer</div>
                <div className="name pm">Made with React</div>

                
                {/* center-scroll OR center-select append here */}
                
            </div>
        )
    }

}


export default Home;