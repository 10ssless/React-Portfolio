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
            pages:[],
            color:"transparent"
        }   
    }

    componentDidMount(){
        this.setState({
            pages: Pages,    
        })
        setTimeout(() => {
            this.setState({
                color: "white",
            })
            this.interval = setInterval(() => this.fadeToggle(), 2500);
        },1000)
    }

    fadeToggle(){
        if(this.state.color=="white"){
            this.setState({
                color:"transparent"
            })
        } else {
            this.setState({
                color:"white"
            })
        }
    }

    componentDidUnmount(){
        clearInterval(this.interval)
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

                <div className="swipe-left" style={{color:this.state.color}}>&#60; &#60; swipe > > </div>

                {/* center-scroll OR center-select append here */}
                
            </div>
        )
    }

}


export default Home;




