import React, { Component } from 'react'
import ProjectList from '../post_patient/Listpost_patient'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase'



class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    let checkUser = ""
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        checkUser = user.phoneNumber
        console.log(checkUser)
      }
    })
    if (auth.email != null && auth.phoneNumber == null)  {return < Redirect to='/Home' />} 
    else if (auth.phoneNumber != null && auth.email == null) { return < Redirect to='/Home'/>}
    else if (auth.phoneNumber == null && auth.email == null) { return < Redirect to='/Home'/>}

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
