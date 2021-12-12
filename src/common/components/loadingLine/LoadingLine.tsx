import styles from './LoadingLine.module.css'

export const LoadingLine = () => {
  return (
    <div className={styles.loadingLine}>
      {/*<h3>Loading is in progress, do not rush, be patient</h3>*/}
      <div className={styles.line}>
        <div className={styles.shadow}/>
      </div>
    </div>
  )
}
