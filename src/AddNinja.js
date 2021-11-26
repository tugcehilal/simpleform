import React, {Component} from 'react'

class AddNinja extends Component{
    state = {
        name: null,
        age:  null,
        belt: null
    }
    handleChange = (e) =>{
        // console.log(e);
        // console.log(typeof e.target.id);
        // console.log(e.target.id);
        // console.log(e.target);
        this.setState({
            [e.target.id]: e.target.value //this is like ninja['name'] when id in char
        })
    }
    handleSubmit = (e) =>{
     e.preventDefault();
     //console.log(this.state);
     this.props.addNinjaFunc(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}></input>
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange}></input>
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default AddNinja