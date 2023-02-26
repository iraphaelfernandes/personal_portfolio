import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import {
  VMenuBar,
  VPhotoGrid,
  VFooter
} from '../../utils'
import {
  belayTheCppLogo,
  bonoboPressLogo,
  comicCommission1,
  comicCommission2,
  cssTricksLogo,
  dribbbleLogo,
  freeCodeCampLogo,
  hashnodeLogo,
  logoCommission,
  posterCommission,
  schemeCommission,
  sitePointLogo,
} from '../../assets'
import styles from './about.module.scss'

export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Raphael Fernandes Portfolio Page" />
        <meta name="author" content="Raphael Fernandes"/>
        <meta name="keywords" content="Raphael, Fernandes, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="About"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              Who am I?
            </h1>
            <h2>
            I am a computer engineer, graduated from the State University of Rio de Janeiro.<br/>
            I'm an expert in Frontend Development, especially with ReactJS and in the JavaScript and TypeScript ecosystem.<br/>
            Currently I'm working as a Full Stack developer, also working with Node.js and databases.
            I also have experience in Java and relational and non-relational databases such as PostgreSQL, MySQL and MongoDB.
            </h2>
          </Fade>
        </div>

        <Fade>
          {/* <div className={styles.photoGallery}>
            <h1>
              Photo Gallery
            </h1>
            <h2>
              I do believe that <s>actions</s> images speak louder than words. By looking at the pictures below,
              you can get a little grasp of what person I am outside of work.
              <br/>
              <br/>
              Hover on photo in order to get more details.
            </h2>
            <VPhotoGrid/>
          </div> */}
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}