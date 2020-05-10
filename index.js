const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]')
}

const interval = {
  isActive: false,
  start(){
    if (this.isActive){
      return
    }
    this.isActive = true
    this.intervalId = setInterval(()=>{
      let i = randomIntegerFromInterval(0, colors.length-1)
      document.body.style.background = colors[i]
    },1500)
  },
  stop(){
    this.isActive = false
    clearInterval(this.intervalId)
  }
}

refs.startBtn.addEventListener('click', interval.start.bind(interval))
refs.stopBtn.addEventListener('click', interval.stop.bind(interval))

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
  

