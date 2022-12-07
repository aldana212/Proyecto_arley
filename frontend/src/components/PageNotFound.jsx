import React from 'react'
import Style from '../cssComponents/PageNotFound.module.css'

export function PageNotFound() {
  return (
      <div className={Style.container}>
        <p className={Style.opps}>404</p>
        <p className={Style.notPage}>The Page you're looking for isn't here</p>
      </div>
  )
}
