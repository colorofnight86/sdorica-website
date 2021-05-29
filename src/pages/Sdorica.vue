<template>
  <div class="sdorica-page">
    <p class="title-text">角色</p>
    <character-card :character-list="characterDatas"/>
<!--    <character-card2 :characterList="characterDatas"/>-->
  </div>
</template>

<script>
import {getAllCharacter} from '../api'
import CharacterCard from '../components/CharacterCard'

export default {
  name: 'Sdorica',
  components: {CharacterCard},
  data () {
    return {
      characterDatas: []
    }
  },
  created () {
    this.getAllCharacter()
  },
  methods: {
    getAllCharacter () {
      getAllCharacter()
        .then(res => {
          this.characterDatas = res
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/sdorica.scss";
</style>
