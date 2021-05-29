<template>
  <div class="search-page">
    <p class="title-text">查询界面</p>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入查找内容" v-model="input" class="input-with-select" clearable @keyup.enter.native="goSearch(1)">
        <el-select v-model="select" slot="prepend" placeholder="查找范围" class="el-select" @change="goSearch(0)">
          <el-option  v-for="item in searchMsg" :key="item.value"  :label="item.name" :value="item.value"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="goSearch(1)"></el-button>
      </el-input>
    </div>
    <br>
    <content-card v-if="select!=='skill_all'" :character-list="characterDatas" :search-type="select" />
    <character-card v-if="select==='skill_all'" :character-list="characterDatas" :search-type="select" />
  </div>
</template>

<script>
import { searchMsg } from '../assets/data/data'
import { getCharacterOfSearch } from '../api'
import CharacterCard from '../components/CharacterCard'
import ContentCard from '../components/ContentCard'

export default {
  name: 'Search',
  components: {ContentCard, CharacterCard},
  data () {
    return {
      characterDatas: [],
      searchMsg: [],
      input: '',
      select: 'skill_all'
    }
  },
  created () {
    this.searchMsg = searchMsg
  },
  methods: {
    goSearch (showMessage) {
      if (this.select === '') {
        this.$message({
          message: '请选择查找范围',
          type: 'error'
        })
      } else if (this.input === '') {
        if (showMessage === 1) {
          this.$message({
            message: '请输入查找内容',
            type: 'error'
          })
        }
      } else {
        getCharacterOfSearch(this.select, this.input)
          .then(res => {
            this.characterDatas = res
          })
          .catch(err => {
            console.log(err)
          })
        // console.log(this.select + ',' + this.input)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/search.scss";
</style>
