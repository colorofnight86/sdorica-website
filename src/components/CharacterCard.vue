<template>
  <div class="character-content">
    <el-card v-for="(item, index) in characterList" :key="index" :class="className[item.position]" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="item-name">{{ item.label }}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="goPage(item)">更多</el-button>
      </div>
      <div class="text item">
        <p v-if="item.skill1!==''"><b>一魂</b><br>{{ item.skill1 }}</p>
        <p v-if="item.skill2!==''"><b>二魂</b><br>{{ item.skill2 }}</p>
        <p v-if="item.skill3!==''"><b>三魂</b><br>{{ item.skill3 }}</p>
        <p v-if="item.skill4!==''"><b>四魂</b><br>{{ item.skill4 }}</p>
        <p v-if="item.skill6!==''"><b>六魂</b><br>{{ item.skill6 }}</p>
        <p><b>被动</b><br>{{ item.skillP }}</p>
        <p><b>参谋</b><br>{{ item.skillA }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'CharacterCard',
  data () {
    return {
      className: {
        '3': 'box-card-gold',
        '2': 'box-card-black',
        '1': 'box-card-white'
      }
    }
  },
  props: [
    'characterList'
  ],
  methods: {
    goPage (item) {
      this.$router.push({path: `/character/${item.name}`})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/character-card.scss";
</style>
