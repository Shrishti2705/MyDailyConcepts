import React from 'react'

export const Users = ({users}) => {
  return (
    <div>
        <img src={users.img} alt="" />
        <p>{users.name}</p>
          <p>{users.email}</p>
    </div>
  )
}
