import React from 'react'
import { Line } from 'react-chartjs-2'
import chart from "chart.js/auto"

const styles = {
    wrapper: 'flex justify-between p-5  hover:bg-[#30363B] duration-300',
    container: 'flex flex-col text-white items-center justify-center',
    name: 'font-bold',
    chart: 'w-36 h-full',
    price: 'flex flex-col text-white',
    percent: 'text-green-400',
  }

const Assests = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.name}>{confirm.symbol}</div>
        </div>
        <div>
            <div className={styles.chart}>
                <Line data = {data} options = {options} 
                width = {400} height = {150}  />
            </div>
        </div>
        <div className={styles.price}>
            <div>{price}</div>
            <div className={styles.percent}
                style={{color: coin.change < 0 ? '#ef4b09' : 'green'
                }}  >

            </div>
        </div>
    </div>
  )
}

export default Assests