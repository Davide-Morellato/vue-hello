const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'The Lion King',
      img:'./hakuna_matata.jpg',
    }
  }
}).mount('#lion_app')