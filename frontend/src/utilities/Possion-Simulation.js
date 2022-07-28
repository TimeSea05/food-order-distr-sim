import getRandomOrder from './random-lib'

/**
 * @brief The following function simulates Possion Distribution
 * @param average indicate the expected value of the target Poisson-Distribution
 * Customarily, we set the `average` the average number of food orders per minute
 */
async function PoissonDistrSim (avg, time) {
  const INTERVAL = 25
  const prob = avg / (time * 1000 / INTERVAL)

  let count = 0
  const sendOrderReq = () => {
    if (Math.random() < prob) {
      console.log('Send a food order')
      fetch('http://localhost:8000/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(getRandomOrder())
      })

      count++
    }
  }

  const timerId = setInterval(sendOrderReq, INTERVAL)
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      clearInterval(timerId)
      resolve(count)
    }, 1000 * time)
  })

  const result = await promise
  return result
}

const PoissonReqSim = (avg, time) => {
  PoissonDistrSim(avg, time).then((numOfOrder) => {
    console.log('Number of Deliverd Orders: ', numOfOrder)
  })
}

export default PoissonReqSim
