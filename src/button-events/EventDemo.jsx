import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/actions/simpleAction';

const div1 = {
    backgroundColor: "lightblue",
    padding: "5px"
}
const div3 = {
    backgroundColor: "lightgreen",
    border: "1px solid black"
}

const span1 = {
   position: "relative",
    left: "0px"
}
const span2 = {
   position: "absolute",
    left: "800px"
}

class EventDemo extends React.Component {
  constructor(props) {
      super();
      this.state = { count: 0 , newName: 'YangSB',id: 'id', Server: 'Server',off: 'off',InputValue: ' ',Show: false};
      this.myName = props.myName;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleDisShow = this.handleDisShow.bind(this);
      console.log(props.myName);

      this.student = {name: 'wang', age: 8, major: 'math'};
      this.style = {
          display: "flex",
          justifyContent: "spacearound"
      }
  }


  componentWillMount() {

  }
  handleShow() {
      console.log(this.state.Show);
      this.setState(state => ({
          Show: true
      }));
  }

  handleDisShow() {
      console.log(this.state.Show);
      this.setState(state => ({
          Show: false
      }));
  }
  handleSubmit() {
    console.log(this.state.count);
    this.setState(state => ({
      count: state.count + 1,
      newName: 'Yang'
    }));
  }
  handleClear() {
      console.log(this.state.count);
      this.setState((state => ({
          count: state.count = 0,
          newName: 'NewName'
      })))
  }
  handleInput(value) {
      console.log(value);
       this.setState(state =>({
           InputValue: value
       }))
  }
  getoff() {
      console.log(this.state.off);
      this.setState((state => ({
          off: 'GOGOGO'
      })))
  }

    render() {
      console.log(this.props.simpleReducer.reduxName);
      let a = this.student.name;
      let text;
      if (this.state.Show == true) {
          text = <div>you login as {this.state.InputValue}</div>
      }else {
          text = null;
      }
        let list=[
            {
                name:"百度",
                Height:192,
            },
            {
                name:"google",
                Height:191,
            },
            {
                name:"firefox",
                Height:100,
            }
        ];
        const elements=[];

        list.forEach((item)=>{
            elements.push(
                <div style={div3}>
                    <div ><span style={span1}> Students Name: {item.name} </span> <span style={span2}>Student's Height: {item.Height}</span> </div>

                </div>

            )
        });

      return (
       <div>
           <hr/>
           <div> <h3>{this.state.Server} with id 10 off line</h3>
           </div>
           <div> <h3>Server with {this.state.id} 10 off line </h3>
           </div>
           <div> <h3>Server with id 10 {this.state.off} line</h3>
           </div>
           <hr/>
         <div>
             <h2>This is a counter:{this.state.count}</h2>
         </div>
         <div>
          <button style={div1} onClick={this.handleSubmit}> Plus </button>   <button style={div1} onClick={this.handleClear}> Clear </button>
         </div>
           <hr/>
           <h4>This is a input Box with Event Binding</h4>
           <div>User Name :  <input value = {this.state.InputValue} onChange={event => {this.handleInput(event.target.value)}}/></div>
           <div>Password: <input/> </div>
           <div>
               <button style={div1} onClick={this.handleShow}> signin </button>   <button style={div1} onClick={this.handleDisShow}> signout </button>
           </div>
           <hr/>
           <h4>This is a input Box with Two Way Data Binding</h4>
           <div>User Name2 : <input value = {this.state.InputValue} onChange={event => {this.handleInput(event.target.value)}}/> </div>
           <div>Password2: <input/> </div>
           {text}
           <div>
               <button style={div1} onClick={this.handleShow}> signin </button>   <button style={div1} onClick={this.handleDisShow}> signout </button>
           </div>
           <hr/>
           <h3>Here is the loop</h3>
           {elements}

       </div>
      );
    }


    componentDidMount() {

    }

    componentDidUpdate() {

    }
  }

  const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction)
 })

 export default connect(mapStateToProps, mapDispatchToProps)(EventDemo);
