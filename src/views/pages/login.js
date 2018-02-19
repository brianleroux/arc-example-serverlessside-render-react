import React from 'react'

export default function LoginForm(props) {
  return (
    <form 
      onSubmit={props.login} 
      action={props.urls.login}
      method="POST">
      <label>
        Email:
        <input 
          type="text" 
          name="username" 
          placeholder="Please enter your email" 
        required/>
      </label><br/>
      <label>
        Password:
        <input 
          type="password" 
          name="password" 
          placeholder="Please enter your password" 
        required/>
      </label><br/>
      <input 
        type="submit" 
        value="Login"
      />
    </form>
  )
}
