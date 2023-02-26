import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter,
  VMenuBar,
  VTimelineGrid
} from '../../utils'
import styles from './work.module.scss'

export default function VWork() {
  return(
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
        <meta name="description" content="Raphael Fernandes Portfolio Page" />
        <meta name="author" content="Raphael Fernandes"/>
        <meta name="keywords" content="Raphael, Fernandes, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Work"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              My work history
            </h1>
            <h2>
            I started my career at the State University of Rio de Janeiro (UERJ), studying Computer Engineering.<br/>
             My passion for programming was born out of the infinite capabilities that programming languages can offer.<br/>
            My first contact was with Python, shortly after I specialized in front-end development with React.js. <br/>
            Soon after, I ended up specializing in the JavaScript ecosystem, currently also working with Node.js and databases such as Postgre, MySQL and MongoDB.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}