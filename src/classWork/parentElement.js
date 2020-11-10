import React, { Component } from 'react';
import Button from './button'
import Item from './UserItems/UserItem'

class ParentElement extends Component {
    
    state = {
        data: []
    }

    componentDidMount = () => {
        fetch('http://www.json-generator.com/api/json/get/cdZfJCjIia?indent=2')
            .then(response => response.json())
            .then(json => {
                this.setState( {
                    data: json
                })
            }
        )
    }

    changeIterview = (e) => {
        const element = e.target.parentElement;
        const { data } = this.state;
        const newData = data.map( user => {
            if(user.index === Number(element.id)) {
                user.interviewed = !user.interviewed;
            }
            return user;
        })
        this.setState({
            data: newData
        })
    }

    render = () => {
        const {data} = this.state;
        const { changeIterview } = this;
        
        return(
            <div>
                <h1> ClassWork paretn element</h1>
                {/* <Button 
                    style = {{background: 'red', padding: '10px', margin:'10px', color: 'white', borderRadius:'20px'}} 
                    action = {()=>{ console.log('hi')} }
                >My button</Button>
                <Button></Button> */}
                <ul>
                    {
                        data.map(user=> {
                            return(
                                <Item 
                                    user = {user}
                                    action = {changeIterview}
                                >
                                </Item>
                            )
  
                        }) 
                    }
                </ul>
    
            </div>
        )
    }

}

export default ParentElement;