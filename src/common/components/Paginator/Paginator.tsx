import {useState} from "react";
import styles from './Paginator.module.css'

export const Paginator = (props: PropsType) => {
  const {currentPage, pageSize, totalItemsCount, portionSize, onChangedPage} = props
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 &&
      <button
        className={styles.arrowButton}
        onClick={() => {
          setPortionNumber(portionNumber - 1)
        }}>&lt;&lt;&lt;</button>}

      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (
            <span
              // className={currentPage === p ? styles.selectedPage : styles.pageNumber}
              className={currentPage === p ? `${styles.numberPage} ${styles.selected}` : styles.numberPage}
              key={p}
              onClick={(e) => {
                onChangedPage(p)
              }}
            >{p}</span>
          )
        })}

      {portionCount > portionNumber &&
      <button
        className={styles.arrowButton}
        onClick={() => {
          setPortionNumber(portionNumber + 1)
        }}>&gt;&gt;&gt;</button>}
    </div>
  )
}
type PropsType = {
  // cardPacksTotalCount: number
  // page: number
  // pageCount: number

  currentPage: number
  pageSize: number
  totalItemsCount: number
  portionSize: number,
  onChangedPage: (numberCurrentPage: number) => void
}