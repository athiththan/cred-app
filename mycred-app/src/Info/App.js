import React from 'react';
import InfoForm from './InfoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoTable from './Table';
import axios from 'axios';
  class App extends React.Component
  {
      constructor()
      {
          super();
      }
      create = data =>
      {
          axios.post("http://localhost:5000/info",data).then(res => {
          
          this.getAll();
          })
        
      }
      componentDidMount()
      {
         this.getAll();
      }
      getAll()
      {
          axios.get("http://localhost:5000/info").then(res =>{
         
              }
          )
      }
      update = data =>
      {
          console.log(data);
          this.setState({

            editData:data
          })
      }
      render()
      {
          return(
              <div className="container mt-4">
                  <div className="row">
                      <div className="col-6">
                       <InfoForm myData={this.create} setInfoForm={this.state.editData}/>
                      </div>
                      <div className="col-6">
                        <InfoTable getData={this.state.data} setData = {this.Update}/>
                      </div>
                 </div>
             </div>
          )
      }
  }
  export default App;