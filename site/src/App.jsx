import React from 'react'
import Create from './components/Create'
import Map from './components/Map'

export default class App extends React.Component {
  render() {
    return (
      <div className="w-full h-screen relative">
          <Create />
          <Map />
      </div>
    )
  }
}
