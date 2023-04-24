import React from 'react'

const signin = () => {
  return (
    <form>
        <h1>Registration</h1>
      <label htmlFor="fullname">Full name:</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Register</button>
    </form>
  )
}

export default signin