import React, { Component } from "react";

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    deleteUser = (e,user) => {
        this.props.handlePrompt(true, user);
    }

    editUser = (e,user) => {
        this.props.editUser(user);
    }

    SearchText = (e) => {
        let value = e.target.value;
        this.props.SearchText(value);
    }

    render() {
        let { userList } = this.props;
        return (
            <div>
                
                <section className="pt-16">
                    <div className="back-gnd">
                    <div className="ginie-table-1">
                        <table>
                            <thead>
                                <tr className="row ml-inherit1">
                                    <div className="menu-header1">
                                        <div className="menu-nav-header d-flex align-items-center justify-content-end">
                                                <div id="search-box" className="form-group has-search">
                                                    <span className="fa fa-search activity-search-icon">
                                                        <input type="text" className="form-control activity-search" placeholder="Search" onChange={this.SearchText}></input>
                                                    </span> 
                                                </div>
                                        </div>
                                    </div>  
                                </tr>
                            </thead>

                            <tbody className="measure-tbody-height" >
                                {userList.map((user,key) => {
                        
                                    return <tr className="table-restrics tabel-add-effect row ml-inherit table-row-hover"  key={key}>
                                        
                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.name}>
                                                {user.name}
                                            </span>
                                        </td>

                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.password}>
                                                {user.password}
                                            </span>
                                        </td>

                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.dob}>
                                                {user.dob}
                                            </span>
                                        </td>

                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.gender}>
                                                {user.gender}
                                            </span>
                                        </td>

                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.city}>
                                                {user.city}
                                            </span>
                                        </td>

                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.nationality}>
                                                {user.nationality}
                                            </span>
                                        </td>

                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.zip_code}>
                                                {user.zip_code}
                                            </span>
                                        </td>

                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.address}>
                                                {user.address}
                                            </span>
                                        </td>

                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.description}>
                                                {user.description}
                                            </span>
                                        </td>
                                        
                                        <td className="width-auto d-flex align-items-center p-rel over-text" >
                                            <span className="text-ellipsis" title={user.file_name}>
                                                {user.file_name}
                                            </span>
                                        </td>

                                        <td className="width-auto d-flex align-items-center p-rel over-text">
                                            <div className="icons-align">
                                                <i class="fa fa-pencil align-icons pointer" aria-hidden="true" onClick={(e) => this.editUser(e,user)}></i>
                                                <i class="fa fa-trash align-icons pointer" aria-hidden="true" onClick={(e) => this.deleteUser(e,user)}></i>
                                                <i class="fa fa-plus align-icons pointer" aria-hidden="true"></i>
                                            </div>
                                        </td>
        
                                    </tr>
                                    }) }
                                    {userList.length === 0 ?
                                        <div className="no-data-text">No Records Found</div> 
                                        : 
                                        ""
                                    }
                            </tbody>

                        </table>
                    </div>
                    </div>
                </section> 
            </div>
           
        )
    }
}

export default Grid;