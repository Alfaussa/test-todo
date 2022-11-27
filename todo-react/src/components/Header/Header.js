/** @module */
import React from "react";
import s from './Header.module.css'

/** Создаем компоненту Header */

function Header() { 
  return (
    <div className = {s.root}>Todo list</div>
  )
}

export default Header