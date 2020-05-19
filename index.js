import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
// React component
class Test extends Component {


  componentWillReceiveProps(nextProps) {
    console.log('receive prop')
  }
  componentDidMount() {
    console.log("did mount")
  }

  componentWillMount() {
    console.log("will mount")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update')
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('will update')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('did update')
  }


  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

// React component
class Counter extends Component {


  componentWillReceiveProps(nextProps) {
    console.log('receive prop')
  }
  componentDidMount() {
    console.log("did mount")
  }

  componentWillMount() {
    console.log("will mount")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update')
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('will update')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('did update')
  }


  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById('root')
)
