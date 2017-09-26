import React from 'react'

import styles from '../css/board.css'


const Board = () => {
  return (
    <div className={ styles.board } >
      { renderRows(5) }
    </div>
  )
}

function renderRows(num) {
  return Array(num).fill().map((el, rowNum) => {
    return (
      <div key={rowNum} className={ styles.row } >
        { renderTiles(num, rowNum) }
      </div>
    )
  })
}

function renderTiles(num, rowNum) {
  return Array(num).fill().map((el, colNum) => {
    return (
      <div key={ `${rowNum} ${colNum}` } className={ styles.tile }></div>
    )
  })
}

export default Board
