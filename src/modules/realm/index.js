import React, { Component } from 'react'
import Realm from 'realm'

export const RealmContext = React.createContext({})

class RealmProvider extends Component {
  constructor(props) {
    super(props)

    this.state = { realm: null }
  }

  componentDidMount() {
    Realm.open({
      schema: this.props.schemas
    }).then(realm => {
      this.setState({ realm })
    })
  }

  componentWillUnmount() {
    // Close the realm if there is one open.
    const { realm } = this.state

    if (realm !== null && !realm.isClosed) {
      realm.close()
    }
  }

  render() {
    return (
      <RealmContext.Provider value={ this.state.realm }>
        { this.props.children }
      </RealmContext.Provider>
    )
  }
}

export default RealmProvider