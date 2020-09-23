import React from "react";
import axios from "axios";
import "./style.css";

class FileUpload extends React.Component {
 constructor(props){
     super(props);

     this.state = {
        // name:"",
        selectedFile: null
     }
 }
//  onNameChangeHandler=event=>{
//     this.setState({
//         name:event.target.value
//     });
// }

 onChangeHandler=event=>{
    console.log(event.target.files[0]);
    this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
    });
}

onClickHandler = () => {
    const data = new FormData() 
    if(this.state.selectedFile){
        data.append('file', this.state.selectedFile);
        // const formData = [this.state.name,data];
        axios.post("http://localhost:5000/info/upload",data)
          .then(res => {
            console.log(res.statusText);
          }).catch((error) => {
              console.log(error);
      });
    }else{
        alert("Please upload the file!");
    }
    
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
              {/* <div className="form-group">
                <label>Upload Your File </label>
                <input type="text" name="name" value={this.state.name} className="form-control" multiple="" onChange={this.onNameChangeHandler}/>
              </div> */}
              <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file" name="file" className="form-control" multiple="" onChange={this.onChangeHandler}/>
              </div>
              <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload;
