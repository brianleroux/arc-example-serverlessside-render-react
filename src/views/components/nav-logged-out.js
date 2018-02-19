import React from 'react'

export default function NavLoggedOut(props) {
  return (
    <nav>
      <a href={props.urls.home}>home</a>
      <a href={props.urls.login}>login</a>
    </nav>
  )
}
