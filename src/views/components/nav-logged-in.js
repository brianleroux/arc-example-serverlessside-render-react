import React from 'react'

export default function NavLoggedIn(props) {
  return (
    <nav>
      <a href={props.urls.home}>home</a>
      <form 
        action={props.urls.logout}
        method="POST"
        onSubmit={props.handler}>
        <button>logout</button>
      </form>
    </nav>
  )
}
