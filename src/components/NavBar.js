import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsMonkey</a>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
