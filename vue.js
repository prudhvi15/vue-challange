const mul = (x, y) => { return x * y }

const m = new Vue({
  el: '#multiply',
  data: {
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result: function () {
      const countOfStories = parseInt(this.firstNumber)
      const avgTasksPerStory= parseInt(this.secondNumber)
      return `The estimated total tasks are ${mul(countOfStories, avgTasksPerStory)}.`
    }
  }
})