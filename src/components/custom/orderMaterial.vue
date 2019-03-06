<template>
  <div class="order_meterial_box info_box">
    <div class="bread_box">
      <ul class="bread">
        <li><router-link to="/index">首页</router-link></li>
        <li><a href="javascript:;">我的账户</a></li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">定制管理</a></li>
        <li><a href="javascript:;">海外租房材料及证明</a></li>
      </ul>
    </div>
    <div class="order_header_box header_box">
      <div class="header_title">海外租房材料及证明</div>
      <div class="header_info">*请注意：此表格收集的信息将仅用于进行海外租房或购买的其他服务时，提供于海外房屋的负责人或拥有者如 房屋房东、房屋中介、公寓管理方等。申请人需要保证填写的信息-准确、完整、真实、有效、并无欺骗、伪造信息的行为。若因申请人提供的信息导致服务失败，申请人需自行承担相关责任。</div>
    </div>
    <div class="order_content_box content_box">
      <div class="add_tab">
        <div :class="currentUserIndex === index - 1?'item on': 'item'" v-for="index in userCount" :key="index" @click="switchUser(index)">房客{{index}}</div>
        <div class="add_btn" @click="addUser">+</div>
        <div class="right_info">*点击加号添加房客信息</div>
      </div>
      <div class="form_box">
        <el-form label-position="top">
          <el-form-item label="您是否是学生">
            <el-radio v-model="isStudent" :label=true>是</el-radio>
            <el-radio v-model="isStudent" :label=false>否</el-radio>
          </el-form-item>
        </el-form>
        <el-form label-position="top" v-show="isStudent">
          <div class="form_item">
            <p class="form_des required">1.护照证件</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="form_des required">2.学生证件</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="form_des required">3.电子入学注册证明</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="form_des required">4.签证文件</p>
            <input type="file">
          </div>
          <div class="form_item">
          <p class="form_des">5.澳洲驾照/中国驾照翻译件</p>
          <input type="file">
          </div>
          <div class="form_item">
          <p class="form_des">6.澳洲医疗保险卡</p>
          <input type="file">
          </div>
          <div class="divide"></div>
          <p class="form_des">7.租房历史证明及相关材料</p>
          <el-form-item label="您目前有在澳洲租房的历史？">
            <el-radio :label=true>是</el-radio>
            <el-radio :label=false>否</el-radio>
          </el-form-item>
          <div class="form_item">
            <p class="label required">7-1.正式租房合同</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="label">7-2.房租支付收据</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="label">7-3.房租流水</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="label">7-4.租房介绍信</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="label">7-5.能源账单(如：水费、电费、网费、煤气费)</p>
            <input type="file">
          </div>
          <div class="divide"></div>
          <p class="form_des">8.雇佣证明及相关材料</p>
          <div class="form_item">
            <p class="label">8-1.雇佣合同</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="label">8-2.收入证明</p>
            <input type="file">
          </div>
          <div class="divide"></div>
          <p class="form_des">9.经济担保人担保信</p>
          <el-form-item label="您是否由他人提供在澳洲生活的经济支持?(如：父母提供生活开支费用)">
            <el-radio :label=true>是</el-radio>
            <el-radio :label=false>否</el-radio>
          </el-form-item>
          <div class="form_item">
            <p class="label">*请参考担保人担保信的参考模板，并下载担保空白模板完成担保信的签字并扫描上传。</p>
            <div class="example">
              <span>参考模板</span>
              <span>空白模板</span>
            </div>
            <input type="file">
          </div>
        </el-form>
        <el-form label-position="top" v-show="!isStudent">
          <div class="form_item">
            <p class="form_des required">1.护照证件</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="form_des required">2.签证文件</p>
            <input type="file">
          </div>
          <div class="form_item">
          <p class="form_des">3.澳洲驾照/中国驾照翻译件</p>
          <input type="file">
          </div>
          <div class="form_item">
          <p class="form_des">4.澳洲医疗保险卡</p>
          <input type="file">
          </div>
          <div class="divide"></div>
          <p class="form_des">5.租房历史证明及相关材料</p>
          <el-form-item label="您目前有在澳洲租房的历史？">
            <el-radio :label=true>是</el-radio>
            <el-radio :label=false>否</el-radio>
          </el-form-item>
          <div class="form_item">
            <p class="label">*如果有条件，请提供其他地方居住相关证明文件(*可选)</p>
            <input type="file">
          </div>
          <div class="divide"></div>
          <p class="form_des">6.雇佣证明及相关材料</p>
          <div class="form_item">
            <p class="label">6-1.雇佣合同</p>
            <input type="file">
          </div>
          <div class="form_item">
            <p class="label">6-2.收入证明</p>
            <input type="file">
          </div>
          <div class="divide"></div>
          <p class="form_des">7.经济担保人担保信</p>
          <el-form-item label="您是否由他人提供在澳洲生活的经济支持?(如：父母提供生活开支费用)">
            <el-radio :label=true>是</el-radio>
            <el-radio :label=false>否</el-radio>
          </el-form-item>
          <div class="form_item">
            <p class="label">*请参考担保人担保信的参考模板，并下载担保空白模板完成担保信的签字并扫描上传。</p>
            <div class="example">
              <span>参考模板</span>
              <span>空白模板</span>
            </div>
            <input type="file">
          </div>
        </el-form>
        <div class="form_btns">
          <a href="javascript:;" class="submit" @click="submit">提交</a>
          <a href="javascript:;" class="save" @click="save">保存</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderMeterial',
  data () {
    return {
      userCount: 1,
      currentUserIndex: 0,
      isStudent: true,
      orderId: this.$route.params.orderId
    }
  },
  methods: {
    submit () {
      this.$ajax({
        methods: 'post',
        url: 'mxj/order/material/rental/submit',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          rentalMaterialInfos: null,
          orderId: this.orderId
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            console.log('提交成功')
          }
        })
    },
    save () {
      this.$ajax({
        methods: 'post',
        url: 'mxj/order/material/rental/save',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          rentalMaterialInfos: null,
          orderId: this.orderId
        }
      })
        .then((res) => {
          if (res.data.code === 0) {
            console.log('保存成功')
          }
        })
    },
    addUser () {
      this.userCount++
      this.currentUserIndex = this.userCount - 1
    },
    switchUser (index) {
      this.currentUserIndex = index - 1
    }
  }
}
</script>

<style lang="less">
@orangeColor:#fe5932;
.required{
  &:after{
    content: '(*必要)';
    color: red;
  }
}
.order_meterial_box{
  .order_content_box{
    .form_box{
      .form_item{
        margin-bottom: 10px;
        .label{
          font-size: 14px;
        }
        .example{
          margin-bottom: 10px;
          span{
            font-size: 14px;
            display: inline-block;
            width: 100px;
            height: 25px;
            border-radius: 5px;
            text-align: center;
            line-height: 25px;
            border: 1px solid @orangeColor;
            color: @orangeColor;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
