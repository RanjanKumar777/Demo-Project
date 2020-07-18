import React, { Component } from "react";
import Modal from './Modal';
import Grid from './Grid';
import ConfirmPrompt from './ConfirmPrompt';
import Swal from 'sweetalert2';

class MenuHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal : false,
            userList : [],
            data : [{id: 1,name : "user 1",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 2,name : "user 2",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 3,name : "user 3",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 4,name : "user 4",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 5,name : "user 5",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 6,name : "user 6",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 7,name : "user 7",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 8,name : "user 8",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 9,name : "user 9",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 10,name : "user 10",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 11,name : "user 11",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 12,name : "user 12",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 13,name : "user 13",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 14,name : "user 14",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 15,name : "user 15",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"},
                    {id: 16,name : "user 16",password : "*******",dob : "2020-04-15",gender : "male",city : "bangalore",nationality : "indian",zip_code : "560075",address : "address 1",description : "demo description",file_name : "file.csv"}
                ],
            modelType : "",
            editData : {},
            showPrompt : false,
            deleteData : {},
            initaiUserData : []
                }
            
    }

    componentDidMount = () => {
        this.setState({
            initaiUserData : this.state.data
        })
    }

    openModal = (value) => {
    this.setState({
        showModal : value,
        modelType : "add",
        editData : {}
    })
    }

    recieveUserList = (list) => {
        let { data } = this.state;
        list["id"] = data.length + 1; 
        data.push(list);
        this.setState({
            data : data,
            initaiUserData : data

        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User Created Successfully...',
            showConfirmButton: false,
            timer: 3000
          })
    }

    updateUser = (user) => {
        let data  = [...this.state.data];
        let index = data.findIndex(obj => obj.id === user.id);
        data[index] = user;
        this.setState({
            data,
            showModal : false,
            initaiUserData : data
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User Updated Successfully...',
            showConfirmButton: false,
            timer: 3000
          })
    }

    deleteUser = (user) => {
        let { data } = this.state;
        let index = data.findIndex(obj => obj.id === user.id);
        data.splice(index,1);
        this.setState({
            data,
            initaiUserData : data,
            showPrompt: false
        })
    }

    editUser = (user) => {
        this.setState({
            showModal : true,
            editData : user,
            modelType : "edit"
        })
    }

    handlePrompt = (value, user) => {
        this.setState({
            showPrompt : value,
            deleteData : user
        })
    }

    SearchText = (value) => {
        let { initaiUserData } = this.state;
        if(value === ""){
            this.setState({
                data : initaiUserData
            })
        }
        let reg_exp = new RegExp(value, 'i');
        let searchedData = initaiUserData.filter(user => { return reg_exp.test(user.name) })
        this.setState({
            data : searchedData
        })
        
    }

    render() {
        let { showModal, data, modelType, editData, showPrompt, deleteData } = this.state;

        return (
            <div>
                <div className="menu-header">
                    <div className="menu-nav-header d-flex align-items-center justify-content-end ">
                        <div className="d-flex align-button">
                            <button className="ginie-btn d-flex align-items-center align-grid">
                                Customize Grid
                            </button>
                            <button className="ginie-btn d-flex align-items-center" onClick={this.openModal}>
                                Add Record
                            </button>
                        </div>
                    </div>
                    <Grid userList={data} SearchText={this.SearchText} deleteUser={this.deleteUser} editUser={this.editUser} handlePrompt={this.handlePrompt}/>
                </div>
                { showModal ?
                    <Modal modelType={modelType} editData={editData} openModal={this.openModal} recieveUserList={this.recieveUserList} updateUser={this.updateUser}/>
                    :
                    ""
                }
                {showPrompt ?
                    <ConfirmPrompt data={deleteData} promptResponse={this.deleteUser} closeResponse={this.handlePrompt}/>
                : "" }
                
            </div>
        )
    }
}

export default MenuHeader;