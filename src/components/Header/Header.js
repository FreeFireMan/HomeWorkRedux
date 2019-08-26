import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Header.css'

class HeaderCommponent extends Component {
    render() {
        const {count} = this.props;
        return (
            <div className="header">
                <h2>Welcome to Hell</h2>
                <h2>Cart count {count}</h2>
            </div>
        );
    }
}

const mapStateToProps = ({count}) =>{
    return{
        count
    }
}
export default connect(mapStateToProps)(HeaderCommponent);
