<template>
    <div class="personal_info_box">
        <div class="right_box">
            <div class="personal_top">
                <div class="personal_top_title">发布房源</div>
                <div class="avatar">
                    <img class="avatar_img" src="../../assets/img/avatar.png">
                </div>
            </div>
            <el-form label-position="left" ref="form" class="info" :model="info" label-width="100px">

                <el-form-item label="名称">
                    <el-input v-model="info.name"></el-input>
                </el-form-item>

                <el-form-item label="出租类型">
                    <el-radio-group v-model="info.rentalType">
                        <el-radio v-for="(item,index) in rentalList" :key="index" :label="item.type">{{item.name}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="地区">
                    <el-select v-model="info.area" placeholder="请选择">
                        <el-option v-for="(item,index) in cityList" :key="index" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="卫浴数目">
                    <el-input v-model="info.toiletNum"></el-input>
                </el-form-item>
                <el-form-item label="客厅数目">
                    <el-input v-model="info.parlourNum"></el-input>
                </el-form-item>
                <el-form-item label="居室数目">
                    <el-input v-model="info.bedroomNum"></el-input>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input v-model="info.rentalPrice"></el-input>
                </el-form-item>
                <el-form-item label="房子照片">
                    <el-upload class="upload-demo" action="http://localhost:3000/api/base/upload" :on-success="handleAvatarSuccess" :file-list="fileList" list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>

                    </el-upload>
                </el-form-item>
                <el-form-item label="房屋类型">
                    <el-select v-model="info.houseType" placeholder="请选择">
                        <el-option v-for="(item,index) in houseList" :key="index" :label="item.name" :value="item.type"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="起租时间">
                    <el-input v-model="info.rentalPeriod"></el-input>
                    <el-select v-model="info.rentalPeriodUnit" placeholder="请选择">
                        <el-option v-for="(item,index) in rentalPeriodUnitList" :key="index" :label="item.name" :value="item.type"></el-option>
                    </el-select>
                </el-form-item>

                <!-- <el-form-item label="自我介绍">
          <el-input type="textarea" v-model="info.selfIntroduce"></el-input>
        </el-form-item> -->
                <div class="save_btn">
                    <span class="save" @click="savePersonalInfo">保存</span>
                </div>
            </el-form>

        </div>
    </div>
</template>

<script>
import {
  pub_house,
  resource,
  cityList,
  houseList,
  rentalList,
  rentalPeriodUnitList
} from "../../sqlMap.js";
export default {
  name: "PersonalInfo",
  data() {
    return {
      info: {},
      fileList: [],
      cityList: cityList,
      houseList: houseList,
      rentalList: rentalList,
      rentalPeriodUnitList: rentalPeriodUnitList,
      
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      var currentUser = JSON.parse(localStorage.getItem("userInfo"));
      this.info.cus_id = currentUser.id;

      let id = this.$route.query.id;
      if (id) {
        var sql = pub_house.getOne.replace("?", id);
        this.$ajax.post("action", { sql: sql }).then(res => {
          this.info = res.data[0];
        //   console.log(this.cover)
          this.fileList.push({
            // name: "文件名称",
            url: this.info.cover
          });
        });
      }
    },
    savePersonalInfo() {
        let id = this.$route.query.id;
        if (id) {
            this.$ajax.post("action", { sql: pub_house.update(this.info) }).then(res => {})
            
        }else{
              this.$ajax
        .post("insert", {
          table: "pub_house",
          data: this.info
        })
        .then(res => {});
        }
    
    },
    handleAvatarSuccess(res, file) {
      var sql = resource.getOne.replace("?", res[0]);

      this.$ajax
        .post("action", {
          sql: sql
        })
        .then(res => {
          var data = res.data[0];
          //   debugger
          this.info.cover = "http://localhost:3000/" + data.fileName;
          this.fileList.push({
            name: data.originalname,
            url: "http://localhost:3000/" + data.fileName
          });
        });
    }
  }
};
</script>

<style lang="less">
@orangeColor: #fe5932;
input {
  border-color: @orangeColor;
}
.personal_info_box {
  .right_box {
    width: 1000px;
    margin-bottom: 30px;
    background: #fff;
    margin-left: 20px;
    box-sizing: border-box;
    float: left;
    .personal_top {
      .personal_top_title {
        padding: 30px 0 20px;
        font-size: 30px;
        text-align: center;
        border-bottom: 1px solid #e8e8e8;
      }
      .avatar {
        height: 200px;
        border-bottom: 1px solid #e8e8e8;
        text-align: center;
        .avatar_img {
          cursor: pointer;
          margin-top: 25px;
          width: 150px;
          height: 150px;
        }
      }
    }
    .info {
      margin: 0 80px;
      border-bottom: 1px dashed #e8e8e8;
      .verified {
        .icon {
          display: inline-block;
          width: 19px;
          height: 19px;
          background: url(../../assets/img/status_sure.png);
          background-size: 100% 100%;
          vertical-align: text-top;
        }
        .status {
          color: #999;
          font-size: 14px;
          line-height: 16px;
        }
      }
      .vercode {
        .send_vercode {
          cursor: pointer;
          text-align: center;
          border-radius: 5px;
          display: block;
          color: #fff;
          background-color: #33cc99;
        }
      }
      .info_title {
        padding: 15px 0;
        font-size: 18px;
        font-weight: bold;
      }
      .el-textarea__inner {
        resize: none;
      }
      .save_btn {
        cursor: pointer;
        .save {
          display: inline-block;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
          width: 90px;
          height: 30px;
          background-color: #33cc99;
          color: #fff;
          margin-bottom: 20px;
        }
      }
    }
    .password_manager {
      margin: 0 80px;
      .title {
        padding: 15px 0;
        font-size: 18px;
        font-weight: bold;
      }
      .save_password {
        cursor: pointer;
        display: inline-block;
        .save {
          display: inline-block;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
          width: 90px;
          height: 30px;
          background-color: #33cc99;
          color: #fff;
          margin-bottom: 20px;
        }
      }
      .forget_password {
        margin-left: 30px;
        display: inline-block;
        cursor: pointer;
        .forget {
          display: inline-block;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
          width: 90px;
          height: 30px;
          background-color: #fff;
          border: 1px solid #000;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
      }
    }
  }
  .upload_avatar_box {
    position: fixed;
    width: 400px;
    height: 500px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -200px;
    text-align: center;
    .avatar_show_box {
      margin: 50px auto 30px;
      width: 200px;
      height: 200px;
      border-radius: 10px;
      border: 1px dashed #e8e8e8;
    }
  }
}
</style>
