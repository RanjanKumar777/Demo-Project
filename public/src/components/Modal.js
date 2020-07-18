import React, { Component } from "react";
import Dropzone from 'react-dropzone';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.fileName = "";
        this.userList = [];
        this.state = {
            UserObject : {
                name : "",
                password : "",
                dob : "",
                gender : "",
                city : "",
                nationality : "",
                zip_code : "",
                address : "",
                description : "",
                file_name : ""
            }
        }
    }

    componentDidMount = () => {
        let { editData } = this.props;
        this.setState({
            UserObject : editData
        })
    }

    onDrop = files => {

        let file = files[0].name;
        this.setState({
            UserObject: {
                  ...this.state.UserObject,
                  file_name: file
            }
        })

    }

    handleChangeInput = (e) => {
        let { id, value } = e.target;
        this.setState({
            UserObject: {
                  ...this.state.UserObject,
                  [id]: value
            }
        })
    }

    addUser = () => {
        let { UserObject } = this.state;
        let { modelType } = this.props;
        if(modelType === "add"){
            this.props.openModal(false);
            this.props.recieveUserList(UserObject);
        }
        else {
            this.props.updateUser(UserObject);
        }
        
    }

    closeModal = () => {
        this.props.openModal(false);
    }

    render() {
        let { modelType, editData } = this.props;
        let { UserObject } = this.state;
        return (
            <div>
                <div className="import-overlay">
                    <div className="app-overlay sync-app-overlay p-rel">
                        <div className="d-flex justify-content-between flex-column height-100 pad-40tb over-auto">
                            <div className="close-icon">
                            <i class="fa fa-close" style={{ "font-size": "20px" }} onClick={this.closeModal}></i>
                            </div>
                            <div className="d-flex align-items-left justify-content-start flex-column mb-40">
                                <h2 className="color-green mb-40">{modelType === "add" ? "Add User Info" : "Edit User Info"}</h2>
                                <form>
                                    <label>
                                        <h3 className="text-color-3">User Name</h3>
                                        <input type="text" className="enter-option-key" placeholder="Name" id="name" style={{ "background": "#fff" }} value= {UserObject.name} onChange={(e) => this.handleChangeInput(e)} />
                                    </label>

                                    <label>
                                        <h3 className="text-color-3">Password</h3>
                                        <input type="text" className="enter-option-key" placeholder="Password" id="password" style={{ "background": "#fff" }}value= {UserObject.password} onChange={(e) => this.handleChangeInput(e)} />
                                    </label>

                                    <label>
                                        <h3 className="text-color-3">DOB</h3>
                                        <input type="date" className="enter-option-key" placeholder="DOB" id="dob" style={{ "background": "#fff" }}value= {UserObject.dob} onChange={(e) => this.handleChangeInput(e)} />
                                    </label>

                                    <label>
                                        <h3 className="text-color-3">Gender</h3>
                                        <input type="text" className="enter-option-key" placeholder="Gender" id="gender" style={{ "background": "#fff" }} value= {UserObject.gender} onChange={(e) => this.handleChangeInput(e)} />
                                    </label>

                                    <label>
                                        <h3 className="text-color-3">City</h3>
                                        <input type="text" className="enter-option-key" placeholder="City" id="city" style={{ "background": "#fff" }} value= {UserObject.city} onChange={(e) => this.handleChangeInput(e)} />
                                    </label>

                                    <label>
                                        <h3 className="text-color-3">Nationality</h3>
                                        <input type="text" className="enter-option-key" placeholder="Nationality" id="nationality" style={{ "background": "#fff" }} value= {UserObject.nationality} onChange={(e) => this.handleChangeInput(e)} />
                                    </label>

                                    <label>
                                        <h3 className="text-color-3">Zip Code</h3>
                                        <input type="text" className="enter-option-key" placeholder="Zip Code" id="zip_code" style={{ "background": "#fff" }} value= {UserObject.zip_code} onChange={(e) => this.handleChangeInput(e)} />
                                    </label>

                                    <label>
                                        <h3 className="text-color-3">Address</h3>
                                        <input type="text" className="enter-option-key" placeholder="Address" id="address" style={{ "background": "#fff" }} value= {UserObject.address} onChange={(e) => this.handleChangeInput(e)} />
                                    </label>

                                    <label>
                                        <h3 className="text-color-3 mt-32">Description</h3>
                                        <textarea className="enter-option-key mb-32 text-area-measure" placeholder="Description" rows="3" value= {UserObject.description} id="description" onChange={(e) => this.handleChangeInput(e)} ></textarea>
                                    </label>

                                    <label>
                                        <h3 className="text-color-3">Input File</h3>
                                        <div className="d-flex align-items-center justify-content-center align-drop">
                                            <label className="c-pointer" for="uploadFile">
                                                <Dropzone
                                                multiple={false}
                                                onDrop={this.onDrop}
                                                value= {UserObject.file_name}
                                                // accept=".csv, .xlsx, .xls"
                                                >
                                                {({ getRootProps, getInputProps }) => {
                                                    return (
                                                        <div {...getRootProps()} className="upload-file-data" >
                                                            <img src="img/upload_down.svg" className="d-flex justify-content-center mr-auto" alt="upload file" />
                                                            <h3 className="text-center text-color-2">Drop file here or Choose a file</h3>
                                                            <input type="file"  className="d-none" {...getInputProps()} id="file_name"/>
                                                        </div>
                                                        );
                                                    }}
                                                </Dropzone>
                                            </label>   
                                        </div>
                                    </label>
                                </form>
                                <div className="file-name">
                                        <h6 className="text-color-3">{editData.fileName}</h6>
                                </div>
                            </div>
                            <div className="d-flex mr-auto justify-content-end mb-15">
                                <button className="ginie-btn d-flex align-items-center" onClick={this.addUser}>
                                    {modelType === "add" ? "Save" : "Update"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;