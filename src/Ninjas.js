// import React, {Component} from 'react';
import React from 'react';
import './Ninjas.css'; //did not work


// class NinjasClass extends Component{
   const  NinjasClass =( {ninjasp, deleteNinjaFunc} ) =>{
    // render(){
        //console.log(this.props);
        // const {name,age,belt} = this.props;
        //const ninjas = this.props.ninjasp;
        //const {ninjasp} = props;
        // const ninjaList = ninjasp.map(ninja =>{
        //     if(ninja.age > 20){
        //     return(
        //     <div className="ninja" key={ninja.id}>
        //         <div>Name: {ninja.name}</div>
        //         <div>Age: {ninja.age} </div>
        //         <div>Belt: {ninja.belt}</div>
        //    </div>
        //     )
        //  }
        //  else{
        //      return null
        //  }
        // })
        // const ninjaList = ninjasp.map(ninja =>{
        //  return  (ninja.age > 20) ? (
        //         <div className="ninja" key={ninja.id}>
        //             <div>Name: {ninja.name}</div>
        //             <div>Age: {ninja.age} </div>
        //             <div>Belt: {ninja.belt}</div>
        //     </div>
        //     ): null;
        // });
        return (
            // <div className="ninja">
            //  <div>Name: {this.props.name}</div>
            //  <div>Age: {this.props.age} </div>
            //  <div>Belt: {this.props.belt}</div>
            // </div>
                  <div className = "ninja-list">
                     {/* {ninjaList} */
                     
                      ninjasp.map(ninja =>{
                        return  (ninja.age > 20) ? (
                            <div className="ninja" key={ninja.id}>
                                <div>Name: {ninja.name}</div>
                                <div>Age: {ninja.age} </div>
                                <div>Belt: {ninja.belt}</div>
                                <button onClick={() => {deleteNinjaFunc(ninja.id)}}>Delete ninja</button> 
                            </div>
                        ): null;
                        })
                    }
                  </div>
               )
    // }
}
// {deleteNinjaFunc(ninja.id) would fire automatically. we dont wwant that. so we need to make it anonymous as above.
export default NinjasClass