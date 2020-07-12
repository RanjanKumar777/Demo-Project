import React, { Component } from "react";
import TopNav from './TopNav';
import MenuHeader from './MenuHeader';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="page-container">
                <section className="section">
                    <div className="body">
                        <div className="main-content">
                            <TopNav />
                            <MenuHeader />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;