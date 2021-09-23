<template>
  <div class="character-page">
    <div class="drawing">
      <img class="image-cg" :src="imgSrc" :onload="loadImg(characterInfo.name)"  alt="立绘">
    </div>
    <div class="header-info">
      <br>
      <span v-if="!edit" @click="EditMode"><a href="javascript:">修改</a></span>
      <span v-if="edit" @click="Cancel"><a href="javascript:">取消修改</a></span>
      <span v-if="!edit" @click="NextId"><a href="javascript:">下一个</a></span>
      <span v-if="edit" @click="Update"><a href="javascript:">保存</a></span>
      <br>
      <span v-if="!edit" class="title-text">{{ characterInfo.label }} </span>
      <el-input v-if="edit" class="input" v-model="label" placeholder="请输入名称" maxlength="10" show-word-limit></el-input>
      <el-checkbox v-model="have" :disabled="!edit">
        <span class="b" v-if="have">已拥有</span>
        <span class="b" v-if="!have">未拥有</span>
      </el-checkbox>
      <br><br>
      <span class="b">站位</span>
      <el-select class="input" v-model="select" slot="prepend" :disabled="!edit" placeholder="请选择">
        <el-option label="白位" value="1"></el-option>
        <el-option label="黑位" value="2"></el-option>
        <el-option label="金位" value="3"></el-option>
      </el-select>
      <br><br>
    </div>
    <!--  详细信息界面  -->
    <div v-if="!edit" class="character-info">
      <div class="text-item">
        <p v-if="characterInfo.skill1!==''">
          <span class="b">一魂</span><br><br>
          <span class="c">{{ characterInfo.skill1 }}</span><br><br>
        </p>
        <p v-if="characterInfo.skill2!==''">
          <span class="b">二魂</span><br><br>
          <span class="c">{{ characterInfo.skill2 }}</span><br><br>
        </p>
        <p v-if="characterInfo.skill3!==''">
          <span class="b">三魂</span><br><br>
          <span class="c">{{ characterInfo.skill3 }}</span><br><br>
        </p>
        <p v-if="characterInfo.skill4!==''">
          <span class="b">四魂</span><br><br>
          <span class="c">{{ characterInfo.skill4 }}</span><br><br>
        </p>
        <p v-if="characterInfo.skill6!==''">
          <span class="b">六魂</span><br><br>
          <span class="c">{{ characterInfo.skill6 }}</span><br><br>
        </p>
        <p>
          <span class="b">被动</span><br><br>
          <span class="c">{{ characterInfo.skillP }}</span><br><br>
        </p>
        <p>
          <span class="b">参谋</span><br><br>
          <span class="c">{{ characterInfo.skillA }}</span><br><br>
        </p>
      </div>
    </div>
    <!--  修改界面  -->
    <div v-if="edit" class="character-edit">
      <div class="text-item">
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
        <el-button class="btn-primary" @click="Update">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {getCharacterOfName, getCharacterOfId, updateCharacter} from '../api'

export default {
  name: 'Character',
  props: [
    'character_name'
  ],
  data () {
    return {
      imgSrc: '../../static/img/blank_cg.png',
      edit: false,
      // disabled: true,
      have: false,
      characterInfo: {},
      select: '',
      label: '',
      skill1description: '',
      skill2description: '',
      skill3description: '',
      skill4description: '',
      skill6description: '',
      skillpdescription: '',
      skilladescription: ''
    }
  },
  created () {
    this.getCharacterOfName(this.character_name)
  },
  watch: {
    // '$route': function (to, from) {
    //   // 我这里还是用了Vuex，不过应该不影响理解
    //   this.$store.dispatch('updateActiveTemplateId', this.$route.params.templateId)
    //   // 通过更新Vuex中的store的数据，让数据发生变化
    //   this.getTemplateById()
    // }
  },
  methods: {
    // 获取图床的图片地址
    loadImg (imgSrc) {
      this.imgSrc = this.getImgSrc(imgSrc)
    },
    getImgSrc (name) {
      return 'https://colorofnight86.github.io/synthesis-of-nanami/img/big/' + name + '立绘.png'
    },
    getCharacterOfName (name) {
      getCharacterOfName(name)
        .then(res => {
          this.characterInfo = res[0]
          this.select = this.characterInfo.position
          this.have = this.characterInfo.have === 1
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 下一个角色
    NextId () {
      getCharacterOfId(this.characterInfo.id + 1)
        .then(res => {
          // this.characterInfo = res
          // this.select = this.characterInfo.position
          this.$router.push({path: `/character/${res.name}`})
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 编辑模式
    EditMode () {
      this.label = this.characterInfo.label
      this.skill1description = this.characterInfo.skill1
      this.skill2description = this.characterInfo.skill2
      this.skill3description = this.characterInfo.skill3
      this.skill4description = this.characterInfo.skill4
      this.skill6description = this.characterInfo.skill6
      this.skillpdescription = this.characterInfo.skillP
      this.skilladescription = this.characterInfo.skillA
      this.edit = true
      // this.disabled = false
    },
    // 取消修改
    Cancel () {
      this.edit = false
      // this.disabled = true
    },
    // 提交修改
    Update () {
      let _this = this
      let params = new URLSearchParams()
      params.append('id', this.characterInfo.id)
      params.append('name', this.characterInfo.name)
      params.append('label', this.label)
      params.append('position', this.select)
      params.append('have', this.have ? '1' : '0')
      params.append('skill_1', this.skill1description)
      params.append('skill_2', this.skill2description)
      params.append('skill_3', this.skill3description)
      params.append('skill_4', this.skill4description)
      params.append('skill_6', this.skill6description)
      params.append('skill_p', this.skillpdescription)
      params.append('skill_a', this.skilladescription)
      updateCharacter(params)
        .then(res => {
          console.log(res)
          if (res.code === 1) {
            _this.notify('更新成功', 'success')
            setTimeout(function () {
              _this.$router.push({path: '/character/' + _this.characterInfo.name})
            }, 2000)
            _this.edit = false
          } else {
            _this.notify('更新失败:' + res.msg, 'error')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

</script>

<style lang="scss" scoped>
@import "./src/assets/css/character.scss";
</style>
