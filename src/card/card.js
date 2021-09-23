import React, {useState, useEffect } from 'react';
import './card.css';
export default class Card extends React.Component{

    constructor(props) {
        super(props);
        this.state = {clicks: this.props.skillLevel, name: this.props.skillName, autoInc: 0};
    }

    handleClick = () => {
        const newState = this.state.clicks +1;
        this.setState({'clicks': newState});
    }
    componentDidUpdate(prevProps) {
        if(this.props.skillName !== prevProps.skillName) {
           // this.setState({'clicks': window.skills[this.props.skillName]})
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick() {
        const newState = this.state.clicks +1;
        this.setState({
            clicks: newState
        });
      }

    render() {
        return ( 
            <>
            <div className="inline-block card w-60 m-11" onClick={this.handleClick}>
                <div className="container">
                    <img src={this.props.source} width="30" height="30"/>
                    <h4><b> {this.state.name}</b></h4>
                    <p> {this.state.clicks} </p>
                </div>
                
            </div>
            </>
        )
    }
}