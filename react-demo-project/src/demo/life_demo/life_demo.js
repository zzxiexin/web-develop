import { Component } from 'react';
export default class extends Component {
  constructor() {
    super();
    this.state = {
      name: 'xinxin',
    };
    console.warn('class life demo ============');
    console.log('constructor');
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }
  getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
  }
  setName = () => {
    this.setState({
      name: 'xinxin222',
    });
  };
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.setName}>{this.state?.name}</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
}
