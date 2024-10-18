import React from 'react'

export default function Product({info}) {
    console.log(info)
  return (
    <div>
      <h2>I am Product.</h2>
      <p>Message:{info.message}</p>
      <p>Phone No:{info.phoneNo}</p>
    </div>
  )
}
