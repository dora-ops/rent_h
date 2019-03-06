<template>
  <div class="collect_tenant_info_box info_box">
    <div class="bread_box">
      <ul class="bread">
        <li><router-link to="/index">首页</router-link></li>
        <li><a href="javascript:;">我的账户</a></li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">定制管理</a></li>
        <li><a href="javascript:;">租客个人信息收集表</a></li>
      </ul>
    </div>
    <div class="collect_header_box header_box">
      <div class="header_title">房客相关信息收集表</div>
      <div class="header_info">*请注意：此表格收集的信息将仅用于进行海外租房或购买的其他服务时，提供于海外房屋的负责人或拥有者如 房屋房东、房屋中介、公寓管理方等。申请人需要保证填写的信息-准确、完整、真实、有效、并无欺骗、伪造信息的行为。若因申请人提供的信息导致服务失败，申请人需自行承担相关责任。</div>
    </div>
    <div class="collect_content_box content_box">
      <div class="add_tab">
        <div :class="currentUserIndex === index - 1?'item on': 'item'" v-for="index in userCount" :key="index" @click="switchUser(index)">房客{{index}}</div>
        <div class="add_btn" @click="addUser">+</div>
        <div class="right_info">*点击加号添加房客信息</div>
      </div>
      <div class="form_box">
        <el-form label-position="top">
          <p class="form_title">1.个人信息</p>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="出生年月" prop="birthday">
            <el-date-picker type="date" id="adate" placeholder="选择日期" v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.birthday"></el-date-picker>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.gender">
              <el-radio-button label="男"></el-radio-button>
              <el-radio-button label="女"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="婚姻状况">
            <el-select v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.maritalStatus" placeholder="请选择">
              <el-option
                v-for="(item,index) in marriageStatusList"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="护照号">
            <!-- <el-col :span="5">
              <el-select v-model="country" placeholder="请选择">
                <el-option
                  v-for="item in countryList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="18" :offset="1"> -->
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.passportNumber"></el-input>
            <!-- </el-col> -->
          </el-form-item>
          <el-form-item label="护照到期日">
            <el-date-picker type="date" id="bdate" placeholder="选择日期" v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.passportExpiryDate"></el-date-picker>
          </el-form-item>
          <div class="divide"></div>
          <el-form-item label="手机号码">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.contactEmail"></el-input>
          </el-form-item>
          <el-form-item label="微信号码">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.wechatId"></el-input>
          </el-form-item>
          <div class="divide"></div>
          <el-form-item label="您是否是学生">
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.student" :label=true>是</el-radio>
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.student" :label=false>否</el-radio>
          </el-form-item>
          <el-form-item label="学校名称">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.schoolName"></el-input>
          </el-form-item>
          <el-form-item label="专业名称">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.courseName"></el-input>
          </el-form-item>
          <el-form-item label="学生号码">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.studentId"></el-input>
          </el-form-item>
          <el-form-item label="学校联系电话">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.schoolContactNumber"></el-input>
          </el-form-item>
          <div class="divide"></div>
          <el-form-item label="收入来源">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.incomeSource"></el-input>
          </el-form-item>
          <el-form-item label="每周收入数目">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.incomePeerWeek"></el-input>
          </el-form-item>
          <el-form-item label="监护人">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.guadianName"></el-input>
          </el-form-item>
          <el-form-item label="关系">
            <el-select v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.relationship" placeholder="请选择">
              <el-option
                v-for="(item,index) in relationshipList"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="监护人地址">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.guadianAddress"></el-input>
          </el-form-item>
          <el-form-item label="监护人电话">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantPersonalInfo.studentPersonalInfo.guadianPhone"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-position="top">
          <p class="form_title">2.紧急联系人</p>
          <el-form-item label="紧急联系人姓名">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmergencyContactInfo.emergencyContactName"></el-input>
          </el-form-item>
          <el-form-item label="关系">
            <el-select v-model="tenantRelatedInfos[currentUserIndex].tenantEmergencyContactInfo.relationship" placeholder="请选择">
              <el-option
                v-for="(item,index) in relationshipList"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="监护人地址">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmergencyContactInfo.guadianAddress"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系人联系电话">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmergencyContactInfo.emergencyContactPhone"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-position="top">
          <p class="form_title">3.居住地址</p>
          <p class="form_des">现今居住情况</p>
          <el-form-item label="您是否目前在澳洲居住？">
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.liveInAustralia" :label=true>是</el-radio>
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.liveInAustralia" :label=false>否</el-radio>
          </el-form-item>
          <el-form-item label="现今居住地址">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.residentialAddress"></el-input>
          </el-form-item>
          <el-form-item label="目前的居住安排是？">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.livingArrangements"></el-input>
          </el-form-item>
          <el-form-item label="每周租金数目">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.weeklyRent"></el-input>
          </el-form-item>
          <el-form-item label="起租日期">
            <el-date-picker type="date" id="cdate" placeholder="选择日期" v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.movingIntime"></el-date-picker>
          </el-form-item>
          <el-form-item label="离开原因">
            <el-input type="textarea" v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.leavingReason"></el-input>
          </el-form-item>
          <el-form-item label="房屋房东(或中介)的姓名">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.ownerOrAgentName"></el-input>
          </el-form-item>
          <el-form-item label="房屋房东(或中介)的联系电话">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.ownerOrAgentPhone"></el-input>
          </el-form-item>
          <el-form-item label="房屋房东(或中介)的联系邮箱">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.ownerOrAgentEmail"></el-input>
          </el-form-item>
          <el-form-item label="是否已经收回房屋押金？">
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.hasRefundedeposit" :label=true>是</el-radio>
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantCurrentResidentialAddressInfo.hasRefundedeposit" :label=false>否</el-radio>
          </el-form-item>
          <div class="divide"></div>
          <p class="form_des">过往居住情况</p>
          <el-form-item label="您是否目前在澳洲居住？">
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.liveInAustralia" :label=true>是</el-radio>
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.liveInAustralia" :label=false>否</el-radio>
          </el-form-item>
          <el-form-item label="现今居住地址">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.residentialAddress"></el-input>
          </el-form-item>
          <el-form-item label="目前的居住安排是？">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.livingArrangements"></el-input>
          </el-form-item>
          <el-form-item label="每周租金数目">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.weeklyRent"></el-input>
          </el-form-item>
          <el-form-item label="起租日期">
            <el-date-picker type="date" id="ddate" placeholder="选择日期" v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.movingIntime"></el-date-picker>
          </el-form-item>
          <el-form-item label="离开原因">
            <el-input type="textarea" v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.leavingReason"></el-input>
          </el-form-item>
          <el-form-item label="房屋房东(或中介)的姓名">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.ownerOrAgentName"></el-input>
          </el-form-item>
          <el-form-item label="房屋房东(或中介)的联系电话">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.ownerOrAgentPhone"></el-input>
          </el-form-item>
          <el-form-item label="房屋房东(或中介)的联系邮箱">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.ownerOrAgentEmail"></el-input>
          </el-form-item>
          <el-form-item label="是否已经收回房屋押金？">
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.hasRefundedeposit" :label=true>是</el-radio>
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantResidentialAddressInfo.tenantPreviousResidentialAddressInfo.hasRefundedeposit" :label=false>否</el-radio>
          </el-form-item>
        </el-form>
        <el-form label-position="top">
          <p class="form_title">4.雇佣情况</p>
          <p class="form_des">目前工作情况</p>
          <el-form-item label="您是否处于就业状态">
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.employment" :label=true>是</el-radio>
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.employment" :label=false>否</el-radio>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.companyName"></el-input>
          </el-form-item>
          <el-form-item label="主管姓名">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.managerName"></el-input>
          </el-form-item>
          <el-form-item label="主管联系电话">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.managerPhone"></el-input>
          </el-form-item>
          <el-form-item label="主管联系邮箱">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.managerEmail"></el-input>
          </el-form-item>
          <el-form-item label="公司地址">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.companyAddress"></el-input>
          </el-form-item>
          <el-form-item label="职位状态">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.positionNature"></el-input>
          </el-form-item>
          <el-form-item label="职位名称">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.positionName"></el-input>
          </el-form-item>
          <!-- <el-form-item label="就职日期" prop="passportDate">
            <el-date-picker type="date" placeholder="选择日期" v-model="rule.passportDate"></el-date-picker>
          </el-form-item> -->
          <el-form-item label="税前年收入">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantCurrentEmploymentInfo.grossAnnualSalaryBeforeTax"></el-input>
          </el-form-item>
          <div class="divide"></div>
          <p class="form_des">曾经工作情况</p>
          <el-form-item label="您是否曾经处于就业状态">
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.employment" :label=true>是</el-radio>
            <el-radio v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.employment" :label=false>否</el-radio>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.companyName"></el-input>
          </el-form-item>
          <el-form-item label="主管姓名">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.managerName"></el-input>
          </el-form-item>
          <el-form-item label="主管联系电话">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.managerPhone"></el-input>
          </el-form-item>
          <el-form-item label="主管联系邮箱">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.managerEmail"></el-input>
          </el-form-item>
          <el-form-item label="公司地址">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.companyAddress"></el-input>
          </el-form-item>
          <el-form-item label="职位状态">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.positionNature"></el-input>
          </el-form-item>
          <el-form-item label="职位名称">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.positionName"></el-input>
          </el-form-item>
          <!-- <el-form-item label="就职日期" prop="passportDate">
            <el-date-picker type="date" placeholder="选择日期" v-model="rule.passportDate"></el-date-picker>
          </el-form-item> -->
          <el-form-item label="税前年收入">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantEmploymentInfo.tenantPreviousEmploymentInfo.grossAnnualSalaryBeforeTax"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-position="top">
          <p class="form_title">5.身份证明人</p>
          <p class="form_des">个人证明人-Personal Referrer(如：非直系亲属、朋友等)</p>
          <el-form-item label="证明人姓名">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantReferrerInfo.tenantPersonalReferrerInfo.referrerName"></el-input>
          </el-form-item>
          <el-form-item label="与您的关系">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantReferrerInfo.tenantPersonalReferrerInfo.relationship"></el-input>
          </el-form-item>
          <el-form-item label="证明人联系电话">
            <el-input v-model="tenantRelatedInfos[currentUserIndex].tenantReferrerInfo.tenantPersonalReferrerInfo.referrerPhone"></el-input>
          </el-form-item>
          <p class="form_des">专业证明人-Professional Referrers(同学、老师、同事、领导等)</p>
          <div v-for="(item,index) in tenantRelatedInfos[currentUserIndex].tenantReferrerInfo.tenantProfessionalReferrerInfos" :key="index">
            <el-form-item :label="'证明人 ' + (index+1) + ' 姓名'">
              <el-input v-model="item.referrerName"></el-input>
            </el-form-item>
            <el-form-item :label="'证明人 ' + (index+1) + ' 与您的关系'">
              <el-input v-model="item.relationship"></el-input>
            </el-form-item>
            <el-form-item :label="'证明人 ' + (index+1) + ' 联系电话'">
              <el-input v-model="item.referrerPhone"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div class="form_btns">
          <a href="javascript:;" @click="submit" class="submit">提交</a>
          <a href="javascript:;" @click="save" class="save">保存</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectTenantInfo',
  data () {
    return {
      userCount: 1,
      currentUserIndex: 0,
      tenantRelatedInfos: [{
        tenantPersonalInfo: {
          name: '',
          birthday: '',
          gender: '男',
          maritalStatus: '',
          passportNumber: '',
          passportExpiryDate: '',
          phone: '',
          contactEmail: '',
          wechatId: '',
          student: true,
          studentPersonalInfo: {
            schoolName: '',
            courseName: '',
            studentId: '',
            schoolContactNumber: '',
            incomeSource: '',
            incomePeerWeek: '',
            guadianName: '',
            relationship: '',
            guadianAddress: '',
            guadianPhone: ''
          }
        },
        tenantEmergencyContactInfo: {
          emergencyContactName: '',
          relationship: '',
          guadianAddress: '',
          emergencyContactPhone: ''
        },
        tenantResidentialAddressInfo: {
          tenantCurrentResidentialAddressInfo: {
            liveInAustralia: true,
            residentialAddress: '',
            livingArrangements: '',
            weeklyRent: '',
            movingIntime: '',
            leavingReason: '',
            ownerOrAgentName: '',
            ownerOrAgentPhone: '',
            ownerOrAgentEmail: '',
            hasRefundedeposit: true
          },
          tenantPreviousResidentialAddressInfo: {
            liveInAustralia: true,
            residentialAddress: '',
            livingArrangements: '',
            weeklyRent: '',
            movingIntime: '',
            leavingReason: '',
            ownerOrAgentName: '',
            ownerOrAgentPhone: '',
            ownerOrAgentEmail: '',
            hasRefundedeposit: true
          }
        },
        tenantEmploymentInfo: {
          tenantCurrentEmploymentInfo: {
            employment: true,
            companyName: '',
            managerName: '',
            managerPhone: '',
            managerEmail: '',
            companyAddress: '',
            positionNature: '',
            positionName: '',
            grossAnnualSalaryBeforeTax: ''
          },
          tenantPreviousEmploymentInfo: {
            employment: true,
            companyName: '',
            managerName: '',
            managerPhone: '',
            managerEmail: '',
            companyAddress: '',
            positionNature: '',
            positionName: '',
            grossAnnualSalaryBeforeTax: ''
          }
        },
        tenantReferrerInfo: {
          tenantPersonalReferrerInfo: {
            referrerName: '',
            relationship: '',
            referrerPhone: ''
          },
          tenantProfessionalReferrerInfos: [
            {
              referrerName: '',
              relationship: '',
              referrerPhone: ''
            },
            {
              referrerName: '',
              relationship: '',
              referrerPhone: ''
            },
            {
              referrerName: '',
              relationship: '',
              referrerPhone: ''
            }
          ]
        }
      }],
      tenantRelatedInfosCopy: {
        tenantPersonalInfo: {
          name: '',
          birthday: '',
          gender: '男',
          maritalStatus: '',
          passportNumber: '',
          passportExpiryDate: '',
          phone: '',
          contactEmail: '',
          wechatId: '',
          student: true,
          studentPersonalInfo: {
            schoolName: '',
            courseName: '',
            studentId: '',
            schoolContactNumber: '',
            incomeSource: '',
            incomePeerWeek: '',
            guadianName: '',
            relationship: '',
            guadianAddress: '',
            guadianPhone: ''
          }
        },
        tenantEmergencyContactInfo: {
          emergencyContactName: '',
          relationship: '',
          guadianAddress: '',
          emergencyContactPhone: ''
        },
        tenantResidentialAddressInfo: {
          tenantCurrentResidentialAddressInfo: {
            liveInAustralia: true,
            residentialAddress: '',
            livingArrangements: '',
            weeklyRent: '',
            movingIntime: '',
            leavingReason: '',
            ownerOrAgentName: '',
            ownerOrAgentPhone: '',
            ownerOrAgentEmail: '',
            hasRefundedeposit: true
          },
          tenantPreviousResidentialAddressInfo: {
            liveInAustralia: true,
            residentialAddress: '',
            livingArrangements: '',
            weeklyRent: '',
            movingIntime: '',
            leavingReason: '',
            ownerOrAgentName: '',
            ownerOrAgentPhone: '',
            ownerOrAgentEmail: '',
            hasRefundedeposit: true
          }
        },
        tenantEmploymentInfo: {
          tenantCurrentEmploymentInfo: {
            employment: true,
            companyName: '',
            managerName: '',
            managerPhone: '',
            managerEmail: '',
            companyAddress: '',
            positionNature: '',
            positionName: '',
            grossAnnualSalaryBeforeTax: ''
          },
          tenantPreviousEmploymentInfo: {
            employment: true,
            companyName: '',
            managerName: '',
            managerPhone: '',
            managerEmail: '',
            companyAddress: '',
            positionNature: '',
            positionName: '',
            grossAnnualSalaryBeforeTax: ''
          }
        },
        tenantReferrerInfo: {
          tenantPersonalReferrerInfo: {
            referrerName: '',
            relationship: '',
            referrerPhone: ''
          },
          tenantProfessionalReferrerInfos: [
            {
              referrerName: '',
              relationship: '',
              referrerPhone: ''
            },
            {
              referrerName: '',
              relationship: '',
              referrerPhone: ''
            },
            {
              referrerName: '',
              relationship: '',
              referrerPhone: ''
            }
          ]
        }
      },
      marriageStatusList: ['未婚', '已婚', '离婚', '丧偶', '其他'],
      relationshipList: ['父母', '兄弟姐妹', '子女', '其他']
    }
  },
  methods: {
    // 提交
    submit () {
      this.$ajax({
        method: 'post',
        url: 'mxj/order/material/tenant/submit',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          tenantRelatedInfos: this.tenantRelatedInfos,
          orderId: this.$route.params.orderId
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
        method: 'post',
        url: 'mxj/order/material/tenant/save',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          tenantRelatedInfos: this.tenantRelatedInfos,
          orderId: this.$route.params.orderId
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
      this.tenantRelatedInfos.push(this.tenantRelatedInfosCopy)
    },
    switchUser (index) {
      this.currentUserIndex = index - 1
    }
  }
}
</script>
