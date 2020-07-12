import React, { Component } from "react";

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <header>
                    <div className="top-nav d-flex align-items-center justify-content-between">
                        <div className="logo c-pointer">
                            <div>
                                <i class="fa fa-circle" style={{fontSize:'10px',color:'#b22b3c',marginRight:'2px'}}></i>
                                <i class="fa fa-circle" style={{fontSize:'10px',color:'#b38d02',marginRight:'2px'}}></i>
                                <i class="fa fa-circle" style={{fontSize:'10px',color:'#1E88E5',marginRight:'2px'}}></i>
                            </div>
                        </div>
                        <div>
                            <i class="fa fa-bell" style={{color:'white',fontSize:'18px',marginRight:'22px'}} aria-hidden="true"></i>
                            <i class="fa fa-user-circle-o" style={{color:'white',fontSize:'18px'}} aria-hidden="true"></i>
                        </div>
                        
                    </div>
                </header>

            </div>
        )
    }
}

export default TopNav;