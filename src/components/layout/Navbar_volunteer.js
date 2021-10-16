import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const Navbar_volunteer = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/seepost'>See Post</NavLink></li>
        <li><NavLink to='/posthelp'>Post For Help</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(Navbar_volunteer)