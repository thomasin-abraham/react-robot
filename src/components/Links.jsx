import React from 'react'

import styles from '../css/links.css'

const Links = () => {
  return (
    <div className={ styles.links }>
      <p>
        Commands you can use:<br />
        left, right, move, place, report, shutdown
      </p>
      <p>
        <a href="https://github.com/thomasin-abraham/react-robot">Github</a><br />
        <a href="http://jam-icons.com/">Thank you Jam Icons</a>
      </p>
    </div>
  )
}


export default Links
