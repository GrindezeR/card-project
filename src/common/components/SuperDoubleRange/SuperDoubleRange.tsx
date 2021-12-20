import React from 'react'
import SuperRange from "../SuperRange/SuperRange";
import styles from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
  onChangeRange: (value: [number, number]) => void
  value: [number, number]
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange, value,
    // min, max, step, disable, ...
  }
) => {

  const onChangeRangeMin = (min: number) => {
    if(value[0] <= value[1] - 2) {
      onChangeRange([min, value[1]])
    } else {
      min <= 95 ? onChangeRange([min, min + 2]) : onChangeRange([min, 100])
    }
  }

  const onChangeRangerMax = (max: number) => {
    if(value[0] <= value[1] - 5) {
      onChangeRange([value[0], max])
    } else {
      max >= 5 ? onChangeRange([max - 5, max]) : onChangeRange([0, max])
    }
  }

  return (
    <div className={styles.wrapper}>
      <SuperRange
        value={value[0]}
        onChangeRange={onChangeRangeMin}
      />
      <SuperRange
        className={styles.double}
        value={value[1]}
        onChangeRange={onChangeRangerMax}
      />
    </div>
  )
}

export default SuperDoubleRange
