import React, {useEffect, useState} from "react";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./Pack.module.css"
import SuperDoubleRange from "../../../common/components/SuperDoubleRange/SuperDoubleRange";
import {getPackApi, InitialStatePackPageType} from "../../../bll/packReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {Paginator} from "../../../common/components/Paginator/Paginator";

export const Pack = () => {
  const {
    cardPacks,
    cardPacksTotalCount,
    maxCardsCount,
    minCardsCount,
    page,
    pageCount,
    // token,
    // tokenDeathTime,
  } = useSelector<AppStoreType, InitialStatePackPageType>(state => state.packPage)
  const dispatch = useDispatch()

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const onChangeDoubleRanger = (value: [number, number]) => {
    setValue1(value[0])
    setValue2(value[1])
  }

  const onChangedPage = (numberCurrentPage: number) => {
    dispatch(getPackApi(numberCurrentPage, 8))
  }

  useEffect(() => {
    dispatch(getPackApi(1, 8))
  }, [dispatch]);


  return (
    <div className={commonStyles.wrapper}>
      <section className={`${commonStyles.section} ${styles.section}`}>
        <article className={`${commonStyles.article} ${styles.article}`}>
          <div className={styles.rangeWrapper}>
            <span style={{color: value1 === 0 ? 'red' : ''}}>{value1}</span>
            <SuperDoubleRange
              value={[value1, value2]}
              onChangeRange={onChangeDoubleRanger}
            />
            <span style={{color: value2 === 100 ? 'red' : ''}}>{value2}</span>
          </div>
          <table className={commonStyles.table} width="100%" cellPadding="5">
            <caption>Table</caption>
            <thead>
            <tr>
              <th>Name</th>
              <th>Cards Count</th>
              <th>Updated
                {/*<span>*/}
                {/*  <button onClick={()=>{}}>up</button>*/}
                {/*  <button onClick={()=>{}}>down</button>*/}
                {/*</span>*/}
              </th>
              <th>
                <button onClick={() => {
                }}>add
                </button>
              </th>
            </tr>
            </thead>
            <tbody>
            {cardPacks.map(p => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.cardsCount}</td>
                <td>{p.updated}</td>
                <td>
                  <span>
                    <button onClick={() => {
                    }}>delete</button>
                    <button onClick={() => {
                    }}>update</button>
                  </span>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          <Paginator
            // cardPacksTotalCount={100}
            // page={6}
            // pageCount={7}
            currentPage={3}
            pageSize={pageCount}//количество элементов на 1 странице
            totalItemsCount={cardPacksTotalCount}//общее количество
            portionSize={5} //количество видимых кнопок
            onChangedPage={onChangedPage}
          />
        </article>
      </section>
    </div>
  );
}


