<template>
  <div class="edit-page">
    <p class="title-text">{{ title }}</p>
    <div class="detail-text">

      <div class="text-item">
        <span class="b">名称</span>
        <el-input class="input" v-model="input" placeholder="请输入内容" maxlength="10" show-word-limit @blur="Verify"></el-input>
        <img src="../../dist/static/img/yes.png" width="20" height="20" v-if="available===0">
        <img src="../../dist/static/img/no.png" width="20" height="20" v-if="available>0">
        <br><br>
        <span class="b">站位</span>
        <el-select class="input" v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="白位" value="1"></el-option>
          <el-option label="黑位" value="2"></el-option>
          <el-option label="金位" value="3"></el-option>
        </el-select>
        <br><br>
        <p><span class="b">一魂</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6}"
          placeholder="请输入内容"
          v-model="skill1description">
        </el-input>
        <br><br>
        <p><span class="b">二魂</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6}"
          placeholder="请输入内容"
          v-model="skill2description">
        </el-input>
        <br><br>
        <p><span class="b">三魂</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6}"
          placeholder="请输入内容"
          v-model="skill3description">
        </el-input>
        <br><br>
        <p><span class="b">四魂</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6}"
          placeholder="请输入内容"
          v-model="skill4description">
        </el-input>
        <br><br>
        <p><span class="b">六魂</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6}"
          placeholder="请输入内容"
          v-model="skill6description">
        </el-input>
        <br><br>
        <p><span class="b">被动</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6}"
          placeholder="请输入内容"
          v-model="skillpdescription">
        </el-input>
        <br><br>
        <p><span class="b">参谋</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6}"
          placeholder="请输入内容"
          v-model="skilladescription">
        </el-input>
        <br><br>
      </div>
      <div class="button" style="text-align:center">
        <el-button class="btn-primary" @click="Submit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {addCharacter, getCharacterOfName} from '../api'

export default {
  name: 'Edit',
  props: [
    'character_name'
  ],
  data () {
    return {
      title: '新增',
      input: '',
      select: '',
      skill1description: '',
      skill2description: '',
      skill3description: '',
      skill4description: '',
      skill6description: '',
      skillpdescription: '',
      skilladescription: '',
      available: -1
    }
  },
  methods: {
    getParams () {
      let params = new URLSearchParams()
      params.append('name', this.input)
      params.append('label', this.input)
      params.append('position', this.select)
      params.append('have', '0')
      params.append('skill_1', this.skill1description)
      params.append('skill_2', this.skill2description)
      params.append('skill_3', this.skill3description)
      params.append('skill_4', this.skill4description)
      params.append('skill_6', this.skill6description)
      params.append('skill_p', this.skillpdescription)
      params.append('skill_a', this.skilladescription)
      return params
    },
    Submit () {
      let _this = this
      let record = this.getParams()
      addCharacter(record)
        .then(res => {
          console.log(res)
          if (res.code === 1) {
            _this.notify('添加成功', 'success')
            setTimeout(function () {
              _this.$router.push({path: '/sdorica'})
            }, 2000)
          } else {
            _this.notify('添加失败:' + res.msg, 'error')
          }
        })
        .catch(err => {
          console.log(err)
        })
      this.available = -1
    },
    Verify () {
      let name = this.input
      if (name !== '') {
        getCharacterOfName(name).then(res => {
          this.available = res.length
        })
          .catch(err => {
            console.log(err)
          })
      }
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/edit.scss";
</style>
