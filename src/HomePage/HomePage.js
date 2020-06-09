import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Quiz from './Quiz'
import { userActions } from '../actions';



class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
            <div className="header-home">
                <h4>Hi {user.firstName}!</h4>
               <p className ="logout">
                    <Link to="/login">Logout</Link>
                </p>
                </div>
                <Quiz/>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };