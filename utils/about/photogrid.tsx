import Image from 'next/image'
import React from 'react'
import { useTypedText } from '..'
import {

} from '../../assets'
import styles from './photogrid.module.scss'

export function VPhotoGrid() {
  return (
    <div className={styles.photoGrid}>
      {/* <div className={styles.barca}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Sagrada Familia, Barcelona', 50)}
          <br/>
          {useTypedText('Date: 08.2018', 50)}
        </h2>
        <Image alt="Photo of Sagrada Familia" src={barcelonaSagradaPhoto} layout="fill"/>
      </div> */}

    </div>
  )
}

//TO-DO refactoring of VPhotoGrid