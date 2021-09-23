<template>
  <div class="character-thumb">
    <div v-for="(item, index) in characterList" :key="index" class="box-card" @click="goPage(item)" :style="style[item.have]">
      <img class="image" :src="getImgUrl(item.name)" :alt="item.name">
      <img alt="" class="card-border" src="static/img/CardFrame.png">
      <img alt="" class="card-bottom" src="static/img/Heroes_Rank3.png">
      <img alt="" class="card-effect" src="static/img/Heroes_Effect_Rank3.png">
      <img alt="" class="card-corner" :src="getLocalImg(src[item.position])">
      <p class="text">{{item.label}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CharacterThumb',
  data () {
    return {
      src: {
        '3': 'frame_position_gold',
        '2': 'frame_position_black',
        '1': 'frame_position_white'
      },
      style: {
        '0': 'filter: grayscale(100%);',
        '1': ''
      }
    }
  },
  props: [
    'characterList'
  ],
  methods: {
    goPage (item) {
      this.$router.push({path: `/character/${item.name}`})
    },
    // 获得本地图片的地址
    getLocalImg (name) {
      return 'static/img/' + name + '.png'
    },
    // 获取图床的图片地址
    getImgUrl (name) {
      return 'https://colorofnight86.github.io/synthesis-of-nanami/img/thumb/' + name + '缩略.png'
    },
    mouseOver () {
      console.log('focus')
    },
    mouseLeave () {
      console.log('leave')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/character-thumb.scss";
</style>
