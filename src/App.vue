<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <button @click="isPay=true">确认支付</button>
    <vue-pay-keyboard ref="pay" 
      :is-pay="isPay" 
      @pas-end="pasEnd" 
      @close="closeFunc"
      >
    </vue-pay-keyboard>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '这是一个虚拟支付键盘组件',
      isPay: false,
    }
  },
  methods: {
    pasEnd(val) {
      // 键盘输入完事件，参数为用户输入的密码

      setTimeout(() => {
        if(val === 111111) {
          this.$refs.pay.$payStatus(true, '支付成功')
        } else {
          this.$refs.pay.$payStatus(false, '支付失败，请看下出了什么问题哟 ("▔□▔)/')
        }
      },1000)

    },
    closeFunc() {
      // 关闭键盘事件
      this.isPay = false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
