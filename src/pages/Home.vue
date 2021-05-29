<template>
  <div class="home-page">
    <div class="filter">
      <p class="title-text">角色筛选</p>
      <filter-table @filterSelection="getSelection"/>
      <div class="button" style="text-align:center">
        <el-button class="btn-primary" @click="SearchName">查询</el-button>
      </div>
    </div>
    <div class="content">
      <character-thumb :character-list="characterDatas"/>
<!--      <character-card :character-list="characterDatas"/>-->
    </div>
  </div>
</template>

<script>
import FilterTable from '../components/FilterTable'
import CharacterThumb from '../components/CharacterThumb'
import CharacterCard from '../components/CharacterCard'
// eslint-disable-next-line no-unused-vars
import {getCharacterOfFilter, getAllCharacter} from '../api'

export default {
  name: 'Home',
  components: { FilterTable, CharacterThumb, CharacterCard },
  data () {
    return {
      have: 'all',
      position: 'all',
      skill_number: 'all',
      skill_type: 'all',
      characterDatas: []
    }
  },
  created () {
    this.SearchName()
  },
  methods: {
    SearchName () {
      getCharacterOfFilter(this.have, this.position, this.skill_number, this.skill_type)
        .then(res => {
          this.characterDatas = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    getSelection (param) {
      this.have = param.have
      this.skill_type = param.type
      this.skill_number = param.number
      this.position = param.position
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./src/assets/css/home.scss";
</style>
