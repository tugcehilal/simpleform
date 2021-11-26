import React, {Component} from 'react';
import NinjasClass from './Ninjas';
import AddNinja from './AddNinja'
class App extends Component {

  state = {
    ninjas :[
      {name: 'Ryutt', age:30, belte:'black', id:1},
      {name: 'Tugce2', age:20, belte:'blue', id:2},
      {name: 'Ahmett', age:32, belte:'blaredck', id:3}
    ]
  }

  addNinja = (ninja) => {
     console.log(ninja);
     ninja.id = Math.random();
     let ninjascarboncopy = [...this.state.ninjas, ninja]
     this.setState({
       ninjas: ninjascarboncopy
     })
     console.log(this.state);
  }

  deleteNinja = (id) =>{
     //console.log(id);
     let ninjasdeleted = this.state.ninjas.filter(ninja =>{
       return ninja.id !== id
     });

     this.setState({
      ninjas: ninjasdeleted
     })
  }

  componentDidMount(){
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState){
   console.log('component updated');
   console.log(prevProps, prevState )
  }
  
  render(){
    return (
      <div className="App">
      <h1>My first react App</h1>
      <p>Welcome2 f:)</p>
      {/* <NinjasClass name="Ryu" age="25" belt="black23"/>
      <NinjasClass name="Yoshi" age="28" belt="black234"/> */}
      <NinjasClass deleteNinjaFunc={this.deleteNinja} ninjasp= {this.state.ninjas}/>
      <AddNinja addNinjaFunc={this.addNinja}/>
      </div>
    );
  }
}

export default App;
