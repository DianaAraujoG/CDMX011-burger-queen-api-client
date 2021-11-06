import React from 'react';
// function Helloworld(props){
//   return(
//     <div id='hello'>
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   )
// }

class Helloworld extends React.Component{
    //  this referce to THIS CLASS
    state = {
      show: true
    }
    toggleshow = ()=>{
      this.setState({show: !this.state.show})
    }
    render() {
      if(this.state.show){
        return(
          <div id='hello'>
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleshow}>Toggle Show</button>
        </div>
        )
      }else{
        return <div>There are not elements
          <button onClick={this.toggleshow}>Toggle Show</button>
        </div>
      }
    }
  }
  
  function App() {
    return (
      <div>This is my Component: 
        <Helloworld mytext='Hi my dear Diana' subtitle='Laboratoria'/>
        <Helloworld mytext='You can' subtitle='motivacion'/>
      </div>
    );
  }
  
  // const App = () => <div>ESTE ES MI COMPONENTE: <Helloworld/></div>
  
  // class App extends React.Component {
  //   render() {
  //     return  <div>ESTE ES MI COMPONENTE: <Helloworld/></div>;
  //   }
  // }
  
  export default App;