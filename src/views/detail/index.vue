<template>
  <div class="detail">
    <!-- <div class="head">
       <div class="left">
         <div class="img">
           <img :src="url" alt="">
         </div>        
         <span>GALAXY</span>
       </div>
       <div class="right">
         <div id="menu">
          <ul >
           <li v-for="(num, i) in name[0].data" :key="i" @click="onTurn(num.url)">
             <div>
              
               <span>{{num.value}}</span>
               
              </div>
           </li>
          </ul>
         </div>
         
       </div>
     </div> -->
     <div class="main_body1" >
       <div class="bodyBg" >
         <img src="../../assets/image/newBlock.png" alt="">
         <img class="name" src="../../assets/image/blocksize.png" alt="">
         <span class="imgText">Deposit 
           <span style="color: rgb(191 107 69 ); margin: 0 10px">
              {{select.val.replace(/\(*\)*/g,"")}}
            </span> and earn GAL
          </span>
          <!-- <span class="imgText" v-else style="bottom: 0px">
            <span>PLANET: {{select.value}}</span><br/>
            <span >Deposit
              <span style="color: rgb(191 107 69 )">
                {{ select.val.replace(/\(*\)*/g,"") }}
              </span> and earn GAL
            </span>
          </span> -->
          
       </div>
       <div class="main_menu1" >
          <ul>
            <li v-for="(num, i) in arr" :key="i">
              <!-- :style="{backgroundImage:'url('+num.bg+')'}" -->
              <div class="box" >
                <div class="imgBox">
                  <img :src="num.img" alt="">
                </div>
                
                <span style="padding-top:25px">{{num.num}}</span>
                <span style="font-size: 18px;color:#fff">{{num.name}}</span>
                <!-- <div class="imgBox">
                  <img :src="num.img" alt="">
                </div>
                <span>{{num.value}}</span>
                <span>{{num.val}}</span>
                
                <button class="ant-btn1" style="background: rgb(217,217,217)">APY</button> -->
                
              </div>
              <button v-if="i == 0" class="ant-btn-red1 ant-btn1" 
                @click="onCut(num)">收割</button>
                <div v-else-if=" (i == 1)">
                  <button v-if="type=='approve'" class="ant-btn-red1 ant-btn1" 
                  @click="onSelect(num)">Approve USDJ</button>
                  <div v-else class="symbol">
                     <button class="ant-btn-red1 ant-btn1 add" 
                     @click="onSelect(num)"> + </button>
                      <button class="ant-btn-red1 ant-btn1 increase" 
                     @click="onSelect(num)"> - </button>
                  </div>
                </div>
              
            </li>
        </ul>
       </div>
     </div>
     <Dialog :dialogArr="dialogArr" v-if="dialogShow" @onClose="onClose">
       <template>
       <div class="dialogText">
         <span class="number">{{number}}</span><br/>

         <span>DHOT余额</span>
       </div>
       <div class="dialogBox">
         <input type="text" v-model="dialogArr.number" @input="onInput">
         <button @click="onMax()" class="ant-btn-red1 ant-btn">MAX</button>
       </div>
       </template>
     </Dialog>
     <!-- <div class="footer">
        <div class="left_img">
          <img src="../../assets/image/left_earth.png" alt="">
        </div>
        <div class="mine_but">
          <div class="button">
            <button class="ant-btn-red ant-btn" style="margin-left: 60px"> Swap </button>
            <button  class="ant-btn-red ant-btn" style="margin-right: 60px"> Mining </button>
          </div>
        </div>
        <div class="right_img">
          <img src="../../assets/image/right_earth.png" alt="">
        </div>
     </div> -->
  </div>
</template>

<script>
// let arr = [
//   {
//     num:"0.0000000",
//     name: "GAL earned"
//   },
// ]
let name = [{
  type: '中文',
  data: [
    {
      value: "首页",
      url: '/netWork'
    },
    {
      value: "挖掘技术",
      url: '/netWork/minting'
    },
    {
      value: "紧急",
      url: '/netWork/burning'
    },
    {
      value: "投票",
      url: '/netWork/voting'
    },
    {
      value: "统计",
      url: '/netWork/statistics'
    },
    {
      value: "贷款",
      url: '/netWork/loan'
    }
  ]
},{
  type: '英文',
  data: [
    {
      value: "Home",
      url: '/netWork'
    },
    {
      value: "Mining",
      url: '/netWork/minting'
    },
    {
      value: "Burning",
      url: '/netWork/burning'
    },
    {
      value: "Vote",
      url: '/netWork/voting'
    },
    {
      value: "Statistics",
      url: '/netWork/statistics'
    },
    {
      value: "Loan",
       url: '/netWork/loan'
    }
  ]
}]
import Dialog from "../../components/dialog.vue"
  export default {
    name: 'mint',
    components: {
      Dialog
    },
    data() {
      return {
        url: require("../../assets/image/earth.png"),
        url1: require("../../assets/image/caise_earth.png"),
        name,
        arr: [],
        dialogShow:false,
        select: {},
        widthH: "",
        type: "",
        dialogArr: {
          title: "我的账户",
          number: ""
        },
        number: "0"
      }
    },
    created() {
      console.log(this.$route.params)
      this.select = this.$route.params.data
      // this.arr = []
      let a = this.imgCut(this.select.bg)
      let b = this.imgCut(this.select.bk)
      let url = this.imgCut(this.select.img)
      // let n = 
      // let a = n.indexOf(".")
      // let b = n.lastIndexOf("/")
      // let url = n.slice(b,a)
      // url = url+'.png'
      console.log(a,b,"asa")
      this. arr = [
          {
            num:"0.0000000",
            name: "GAL earned",
            img:require("../../assets/image/min2.png"),
            bg: require("../../assets/image"+a)
          },
        ]
        
      if(this.select.val == '(GAL/TRX)') {
        this.select.img1 = require("../../assets/image/tian.png")
        // if(this.scrollWidth) {
        //   this.widthH = "300px"
        // } else {
        //   this.widthH = "400px"
        // }
        
      } else{
        this.select.img1 = require("../../assets/image"+url)
        // if(this.scrollWidth) {
        //   this.widthH = "300px"
        // } else {
        //   this.widthH = "300px"
        // }
        
      }
      this.arr.push({
          num: "0.0000000",
          name: this.select.val.replace(/\(*\)*/g,"") + "  Staked",
          img: require("../../assets/image"+url),
          bg: require("../../assets/image"+b)
        })
        console.log(this.arr)
    },
    mounted() {
      console.log("1")
      // this.$router.go(0)
    },
    methods: {
      imgCut(num) {
        let n = num
        let a = n.indexOf(".")
        let b = n.lastIndexOf("/")
        let url = n.slice(b,a)
        url = url+'.png'
        return url 
      },
      onCut(val) {},
      onMax() {
        this.dialogArr.number = 10
        this.number=this.dialogArr.number

      },
      onInput() {
        if(this.dialogArr.number == "") {
          this.number = 0
        }else{
          this.number=this.dialogArr.number
        }
      }, 
      onSelect(val){
        this.dialogShow = true
      },
      onClose(val) {
        console.log("val")
        this.dialogShow = val
        this.number = 0
        this.dialogArr = {
          title: "我的账户",
          number: ""
        }
      }
      // onTurn(url) {
      //   console.log(url)
      //   this.$router.push(url)
      // },
    }
  }
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 750px) {
  @import "./index.scss";
}
  @media only screen and (min-width: 750px) {
      .detail {
        background: rgb(4,3,47);
        width: 100%;
        height: 100%;
        overflow: scroll;
        background-image: url("../../assets/image/snew.png");
        z-index: -99;
        background-repeat: no-repeat;
        -moz-background-size:100% 100%; 
        background-size:100% 100%; 
        
      }
     .detail::-webkit-scrollbar {
        display: none; /* Chrome Safari */
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */
      }
      .main_body1 {
        width: 1200px;
        margin: 0 auto;
        .bodyBg{
          width: 400px;
          height: 400px;
          margin: 0 auto;
          // background-image: url("../../assets/image/mint2.png");
          // background-repeat:no-repeat;
          // background-size:80% 80% !important;
          // -moz-background-size:100% 50%;
          z-index: 80;
          img {
            width: 320px;
            height: 320px;
          }
          .name {
            width: 100px;
            height: 100px;
            position: relative;
            position: relative;
            bottom: 220px;

          }
          .imgText {
            z-index: 10;
            position: relative;
            font-size: 24px;
            bottom: 150px;
            width: 420px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-family: 'Berlin Sans FB';
            color: #fff;
          }
        }
        //  .bodyBg:before{
        //    content: "";
        //   display: block; 
        //   padding-top: 100%;
        //   }
        .main_menu1 {
            list-style: none;
            border: 0; 
            padding: 0;
            position: relative;
            bottom: 40px;
            margin: 0 auto;
            width: 900px;
              ul {
                  padding: 0;
                  margin: 0;
                  list-style: none;
                  padding: 1rem;
                  box-sizing: border-box;
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  li {
                      flex: 1 0 50%;
                      // height: 6rem;
                      display: inline-block;
                      // background: #ededee;
                      margin-bottom: 1rem;
                      text-align: center;
                      .block {
                        background: url("../../assets/image/block.png") no-repeat;
                        
                      }
                      .box {
                        width: 280px;
                        height: 300px;
                        margin: 0 auto;
                        border-radius: 20px;
                        // background:#fff;
                        display: flex;
                        border: 2px solid rgb(238, 96, 202);
                        /*垂直排列*/
                        flex-direction: column;
                        align-items:center;
                        justify-content: center;
                        -moz-background-size:100% 100%; 
                        background-size:100% 100%;
                        color: #000;
                        span {
                            font-family: 'Bahnschrift';
                            font-size: 35px;
                          }
                        .imgBox {
                          width: 60px;
                          height: 60px;
                          border-radius: 50%;
                          background: #000;
                          margin-top: -90px;
                          padding-top: 4px;
                          img {
                             width: 50px;
                             height: 50px;
                          }
                        }
                      }
                    }
                    .bt_classify_name_empty {
                      width: 0px;
                      height: 0px;
                    }
                }
               }        
      }
      .footer {
        width: 1200px;
        display: flex;
        margin: 0 auto;
        position: relative;
        bottom: 220px;
        .mine_but {
          flex:1 1 auto;
          .button {
            display: flex;
            justify-content: space-between;
            button {
              margin-top: 60px;
              width: 150px;
              height: 40px;
            }
          }
        }
        .right_img {
         flex:0 0 auto;
         width: 300px;
         margin-top: 80px;
         img {
           width: 300px;
           height: 200px;
         }
        }
        .left_img{
          padding:5px;
          width:300px;
          img{
            width: 170px;
            height: 100px;
            position: absolute;
            bottom: 40px;
            left: 80px;
          }
        }
      }
      
  }
 .ant-btn1 {
    line-height: 1.499;
    position: relative;
    width: 200px;
    display: inline-block;
    font-weight: 400;
    font-family: 'Calibri (正文)';
    white-space: nowrap;
    text-align: center;
    bottom: 95px;
    background-image: none;
    border: 1px solid transparent;
    // -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.015);
    // box-shadow: 0 2px 0 rgba(0,0,0,0.015);
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 18px;
    border-radius: 40px;
    box-shadow: inset -1px 0px 5px #4a4a4a;
    color: rgba(0,0,0,0.65);
    background-color: #fff;
    border-color: #d9d9d9;
}
.ant-btn-red1 {
    color: #fff;
    height: 60px;
    background-color: #FF5A44;
    border-color: #FF5A44;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
    // -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    // box-shadow: 0 2px 0 rgba(0,0,0,0.045);
}
.symbol {
  display: flex;
  width: 200px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  .add, .increase {
        width: 50px;
        height: 50px;
        font-size: 25px;
      }
}

button:focus {outline:none;}

</style>
  