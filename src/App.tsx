// core
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

// Action
import { usersActions } from "~/bus/users/actions";

// Components
import Filter from "~/components/Filter";
import Catcher from "~/components/Catcher";
import Spiner from "~/components/Spiner";

// Instruments
import Styles from "./App.module.scss";
import moment from "moment";

// Types
import { User } from "~/bus/users/types";
import { IRootState, IRootProps, IRootActionProps } from "~/App.types.ts";

const mapStateToProps = (state: IRootState): IRootProps => {
  return {
    currentMonth: state.currentMonth,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IRootActionProps => {
  return {
    actions: bindActionCreators({ ...usersActions }, dispatch)
  };
};

class App extends Component<IRootProps & IRootActionProps> {
  state: Partial<IRootState> = {
    currentMonth: void 0
  };

  componentDidMount() {
    this.__fetchUsers();
  }

  __selectMonth = (id?: number) => {
    this.setState({
      currentMonth: id
    });
  };

  __clearUsers = () => {
    const { actions } = this.props;

    actions.clearUsers();
  };

  __fetchUsers = () => {
    const { actions } = this.props;

    actions.fetchUsersAsync();
  };

  render() {
    const { users } = this.props;
    const { currentMonth } = this.state;

    const usersGroup = users.get((currentMonth as unknown) as number);

    const usersJSX = !usersGroup
      ? ""
      : usersGroup.map((user: User) => {
          const dob = moment(user.dob).format("YYYY/MM/DD");
          return (
            <li key={user.id}>
              <span>
                {user.firstName} {user.lastName} - {dob}
              </span>
            </li>
          );
        });

    return (
      <Catcher>
        <section className={Styles.app}>
          <div>
            <Filter users={users} selectMonth={this.__selectMonth} />
          </div>
          <div>
            <ol className={Styles.list}>{usersJSX}</ol>
          </div>
          <div className={Styles.navigation}>
            <Spiner />
            <button onClick={this.__fetchUsers}>
              Fetch Users<span aria-labelledby="" role="img">🚀</span>
            </button>
            &nbsp;
            <button onClick={this.__clearUsers}>
              Clear Users<span aria-labelledby="" role="img">🗑</span>
            </button>
          </div>
        </section>
      </Catcher>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
