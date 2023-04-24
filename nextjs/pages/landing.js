import React from 'react'

const sidebar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>Profile</li>
          <li>Add Property</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome</h1>
        <p>This is the main content area.</p>
      </div>
      <style js>{`
        .container {
          display: flex;
        }
        .sidebar {
          width: 200px;
          height: 100vh;
          background-color: black;
          padding: 1rem;
        }
        .content {
          flex: 1;
          padding: 1rem;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 1rem;
          cursor: pointer;
        }
        li:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

export default sidebar
