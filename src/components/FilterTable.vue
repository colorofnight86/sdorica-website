<template>
  <div class="filter">
    <div class="div_table">
      <table class="table">
        <thead>
        <tr>
          <th>筛选类型</th>
          <th>选项</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>拥有</td>
          <td>
            <div class="btn-group" data-toggle="buttons" @change="changeData">
              <label class="btn btn-primary">
                <input type="radio" v-model="have" value="all" checked> 全部
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="have" value="true"> 已拥有
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="have" value="false"> 未拥有
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <td>站位</td>
          <td>
            <div class="btn-group" data-toggle="buttons" @change="changeData">
              <label class="btn btn-primary">
                <input type="radio" v-model="position" value="all" checked> 全部
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="position" value="white"> 白位
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="position" value="black"> 黑位
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="position" value="gold"> 金位
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <td>魂型</td>
          <td>
            <div class="btn-group" data-toggle="buttons" @change="changeData">
              <label class="btn btn-primary">
                <input type="radio" v-model="number" value="all" checked> 全部
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="number" value="2"> 二魂
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="number" value="3"> 三魂
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="number" value="4"> 四魂
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="number" value="6"> 六魂
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <td>角色类型</td>
          <td>
            <div class="btn-group" data-toggle="buttons" @change="changeData">
              <label class="btn btn-primary">
                <input type="radio" v-model="type" value="all" checked> 全部
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="type" value="nm"> 普通
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="type" value="sp"> 特殊
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="type" value="mz"> 水着
              </label>
              <label class="btn btn-primary">
                <input type="radio" v-model="type" value="sk"> 技能书
              </label>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'filter-table',
  data () {
    return {
      have: 'all',
      position: 'all',
      number: 'all',
      type: 'all'
    }
  },
  methods: {
    changeData () {
      this.$emit('filterSelection', this.$data)
    }
  }
}
</script>

<style scoped>
.table {
  width: 100%;
}
</style>
