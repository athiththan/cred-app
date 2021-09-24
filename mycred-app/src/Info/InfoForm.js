import React from 'react';
  class InfoForm extends React.Component
  {
      constructor()
      {
          super();
          this.state = {
            Name:"",
            Age:"",
            City:"",
          }
      }
      infoChange = event =>
      {
        const {name,value}= event.target;
        this.setState({
          [name] : value
        })
      }
      infoSubmit = event =>
      {
        event.preventDefault();
        let data = {
          Name:this.state.Name,
          Age:this.state.Age,
          City:this.state.City
        }
        this.props.myData(data);
      }
      componentWillReceiveProps(props)
      {
        if(props.setInfoForm.id != null)
        {
          this.setState({
            Name:this.state.Name,
            Area:this.state.Age,
            City:this.state.City
          })
        }
      }
      render()
      {
          return(
            <form infoSubmit= {this.infoSubmit} autoComplete="off">
            <div className="form-group">
              <label for="Name">Name</label>
              <input type="text"  className="form-control" placeholder="Enter Name"
              onChange={this.infoChange}
              name="Name"
              value={this.state.Name}/>
            </div>
            <div className="form-group">
              <label for="Age">Age</label>
              <input type="text" className="form-control"  placeholder=" Enter Age" id="pwd"
              onChange={this.infoChange}
              name="Age"
              value={this.state.Age}/>
            </div>
            <div className="form-group">
              <label for="City">City</label>
              <input type="text" className="form-control"  placeholder=" Enter City" id="pwd"
              onChange={this.infoChange}
              name="City"
              value={this.state.City}/>
            
              <button type="submit" className="btn btn-primary mb-3">submit</button>
            </div>
          </form>
          )
      }
  }
  export default InfoForm;