import React from 'react'
import { connect } from 'react-redux'

import { command } from '../actions/commands'

import styles from '../css/input.css'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  updateValue (e) {
    this.setState({ value: e.target.value })
  }

  submitValue (e) {
    e.preventDefault()
    this.props.dispatch(command(this.state.value.toLowerCase()))
    this.setState({ value: '' })
  }

  render () {
    return (
      <form className={ styles.wrapper } onSubmit={ (e) => this.submitValue(e) } >
        <input className={ styles.input }
          type="text"
          value={ this.state.value }
          onChange={ (e) => this.updateValue(e) } />
        <button type="submit" className={ `jam jam-magic ${ styles.button } ` }></button>
      </form>
    )
  }
}

export default connect()(Input)
