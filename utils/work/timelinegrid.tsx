import Image from 'next/image'
import {
  nobleLogo,
  usLogo,
  waskoLogo,
  tellyoLogo
} from '../../assets'
import { getDate } from '../date'
import styles from './timelinegrid.module.scss'

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint}/>
        <h1>{getDate()}</h1>
      </div>

        <div className={styles.timelinePoint}/>
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>
          Hover to zoom.
        </h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
     
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>SENSR IT</h1>
              <h2 className={styles.cardContentDetails}>Brazil</h2>
              <h2 className={styles.cardContentDetails}>07.2022 - Current</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Development of new features and resolution of bugs in the system<br/>
            Front-end development with React.js.<br/>
            Backend development with Node.js.<br/>
            Requirements gathering.<br/>
            PostgreSQL database.<br/>
            Database modeling.<br/>
            Project area: Retail, Real estate market.<br/>
            Technologies: ReactJS, NodeJS, HTML, SCSS, Git, Docker.<br/>
          </p>
        </div>
      </div>

      

      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>

      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Intelie</h1>
              <h2 className={styles.cardContentDetails}>Brazil</h2>
              <h2 className={styles.cardContentDetails}>02.2021 - 04.2022</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
          Development of corporate solutions mainly for the oil industry.<br/>
          I worked with ReactJS and Java. I also worked with MySQL, MongoDB and Database
          modeling.<br/>
          Project area: Oil & Gas, Food Processing, Mining, Logistics, Financial Services.<br/>
          Technologies: ReactJS, Java, MongoDB, PostgreSQL, Git, TypeScript, Jest, HTML, SCSS.<br/>
          </p>
        </div>
      </div>
      

      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>

      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
  
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Latic</h1>
              <h2 className={styles.cardContentDetails}>Brazil</h2>
              <h2 className={styles.cardContentDetails}>03.2018 - 03.2020</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
          Web development with and ReactJS. Backend building with Node.js.<br/>
          Development of virtual reality projects with Unity.<br/>
          Project area: Education.<br/>
          Technologies: ReactJS, C#, Unity, HTML, SCSS.<br/>

          </p>
        </div>
      </div>

      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      

    </div>
  )
}