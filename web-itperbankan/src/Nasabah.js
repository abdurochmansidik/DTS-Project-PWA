import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

export default class Nasabah extends Component {
    constructor() {
        super()

        this.state = {
            length: 0,
            users: []
        }

        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        fetch('https://api.mocki.io/v1/b043df5a')
            .then(res => res.json())
            .then(res => this.setState({
                length: res.length,
                users: res
            }))
    }

    handleAdd() {
        const newUsers = this.state.users.concat([
            { name: this.state.length + 1, name: prompt('Enter users name'), city: prompt('Enter users city') }
        ]);
        this.setState((state) => ({ length: state.length + 1, users: newUsers }));
    }

    handleRemove(name) {
        let newUsers = this.state.users.filter(function (user) {
            return user.name !== name
        });
        this.setState({ users: newUsers });
    }

    render() {
        const { users } = this.state
        const usersItem = users.map((user) =>
            <div key={user.name}>
                <span onClick={() => this.handleRemove(user.name)} style={{ color: "red", cursor: "pointer" }}>X</span>
                <span>  </span>
                {user.name} - {user.city}
            </div>
        )
        return (
            <div style={{ textAlign: 'left' }}>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {usersItem}
                </CSSTransitionGroup>
                <hr/>
                <button onClick={this.handleAdd} style={{ padding: "5px 20px", float: "right" }}><b>Add User</b></button>
            </div>
        )
    }
}