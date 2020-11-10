import React, { Component } from 'react';
import './LoaderImg.css'

class LoaderImg extends Component {

    state = {
        loaded: false,
        error: false,
    }

    componentDidMount = () => {
        let img = new Image();
        img.onload = () => this.setState({ loaded:true});
        img.onerror = () => this.setState({error:true, loaded:true});
        img.src = this.props.src;
    } 

    render = () => {
        const { error, loaded } = this.state;
        const { src } = this.props;
        return(
            <React.StrictMode>
                {loaded?error?<h1>Error load!</h1>:<img src={src}></img>:<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            </React.StrictMode>
        )
    }
}

export default LoaderImg;