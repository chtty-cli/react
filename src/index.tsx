import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom";
interface HomeProps {
  count: number;
}

const OtherComponent = lazy(() =>
  import(/* webpackChunkName: "dash_board." */ "./containers/dash_board")
);
class Home extends React.Component<HomeProps, any> {
  state = {
    count: this.props.count
  };
  countChange = () => {
    this.setState({ count: 122 });
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        Hello React!
        <p>{this.state.count}</p>
        <button onClick={this.countChange}>+</button>
        {count == 122 && <OtherComponent />}
      </div>
    );
  }
}

ReactDom.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Home count={100} />
  </Suspense>,
  document.getElementById("root")
);
