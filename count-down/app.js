// const endDate = '12 May 2023 14:00 PM'
const endDate = 'Sat May 14 2023 14:00:00 '
// const endDate = '12/07/2023'
document.getElementById('end-date').innerText = endDate
const inputs = document.querySelectorAll('input')

console.log(inputs)
function clock() {
  const end = new Date(endDate)
  // console.log(end)
  const now = new Date()
  // console.log(now)
  const diff = (end - now) / 1000
  console.log(diff)
  if (diff < 0) return

  // convert into days;
  inputs[0].value = Math.floor(diff / 3600 / 24)
  inputs[1].value = Math.floor(diff / 3600) % 24
  inputs[2].value = Math.floor(diff / 60) % 60
  inputs[3].value = Math.floor(diff) % 60
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(() => {
  clock()
}, 1000)