<template>
  <div class="the-header">
    <div class="header-logo" @click="goPage('/')">
      <img class="icon" src="../assets/logo.png" alt="logo" width="100%">
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
      <el-menu-item v-for="item in navMsg" :class="{active: item.name === activeName}" :key="item.index" @click="goPage(item.path, item.name)">{{item.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {navMsg} from '../assets/data/header'

export default {
  name: 'TheHeader',
  data () {
    return {
      websiteName: 'Sdorica',
      navMsg: [],
      activeIndex: '1',
      activeName: '首页'
    }
  },
  created () {
    this.navMsg = navMsg
  },
  methods: {
    goPage (path, name) {
      console.log('goto:' + path)
      this.activeName = name
      this.$router.push({path: path})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/the-header.scss";
</style>
