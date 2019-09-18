import React from 'react';
// import {CSSTransition, TransitionGroup } from 'react-transition-group'
import './Home.css';
import NavTabs from '../../components/NavTabs/NavTabs';
import Card from '../../components/Card/Card';
import Pages from '../../pages.json'
// import ArrowKeysReact from 'arrow-keys-react';
// const refs = Pages.map(item => {
//     item.title = createRef()
//     return item;
// })

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pages:[]
        }   
    }

    componentDidMount(){
        this.setState({
            pages:Pages
        })
    }

    

    // clickToScroll = title => {
    //     refs[title].current.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start',
    //     });
    // 
    // }

    render(){
        return(
            <div className="main-content">
                <NavTabs />
                {/* <NavTabs onClick={() => this.clickToScroll}/> */}
                <div className="center-scroll" >
                        {this.state.pages.map(item => {
                            return(
                                <Card 
                                    // ref={item.title}
                                    id={this.state.pages.indexOf(item)+1}
                                    key={this.state.pages.indexOf(item)+1}
                                    title={item.title}
                                    tag={item.tag}
                                />
                            )
                        })}
                </div>
               

                <div className="name zm"><a href="/">Zubin Mulji</a></div>
                <div className="name lam">Full Stack Web Developer</div>
                <div className="name pm">Made with React®</div>

                
                {/* center-scroll OR center-select append here */}
                
            </div>
        )
    }

}


export default Home;




