// Core
import React, { Component } from "react";

// Instruments
import Styles from "./style.module.scss";

export default class Catcher extends Component {
  state = {
    error: false
  };

  componentDidCatch(error: any, stack: any) {
    console.log("ERROR:", error.message);
    console.log("STACKTRACE:", stack.componentStack);

    this.setState({
      error: true
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <section className={Styles.catcher}>
          <span>A mysterious <span aria-labelledby="" role="img">👽</span> &nbsp;error <span aria-labelledby="" role="img">📛</span> &nbsp;occured.</span>
          <p>
            Our space <span aria-labelledby="" role="img">🛰</span> &nbsp;engineers strike team <span aria-labelledby="" role="img">👩🏼‍🚀 👨🏼‍🚀</span> &nbsp;is already
            working <span aria-labelledby="" role="img">🚀</span> &nbsp;in order to fix that for you!
          </p>
        </section>
      );
    }

    return children;
  }
}
