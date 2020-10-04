<template>
  <div class="shome1">
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
     <div class="smain_body1">
       <div class="bodyBg">
         <!-- <span class="imgText">Farm</span> -->
       </div>
       <div class="main_menu1">
          <ul>
            <li class="ul_li">
              <div class="box" style="height: 100px; border-radius: 5px; background: none">
                <img src="../../assets/image/static1.png" alt="">
                <div style="padding-left: 20px">
                  <span style="font-size:24px">0.00000</span><br/>
                  <span  style="font-size:14px;color: rgb(154,141,69)">Your Galaxy balance</span>
                </div>
              </div>
            </li>
            <li class="ul_li1">
              <div class="box">
                <img src="#" alt="">
                <div style="padding-left: 20px">
                  <span style="font-size:24px">0.00000</span><br/>
                  <span  style="font-size:14px;color: rgb(154,141,69)">Total supply</span>
                </div>
              </div>
            </li>
            <li v-for="(num, i) in arr" :key="i">
              <div class="box">
                <img :src="num.img" alt="">
                <span style="margin-top: 20px">{{num.val}}</span>
                <div class="box_div" style="margin-top: 20px;text-align: left">
                  <span style="font-size: 14px;">{{num.val1}}</span><br/>
                  <span style="font-size: 14px;color: rgb(191,107,69)">{{num.val2}}</span>
                </div>
                <!-- <div class="boxImg">
                
                </div> -->
                <!-- <div class="imgBox">
                  <img :src="num.img" alt="">
                </div>
                <span>{{num.value}}</span>
                <span>{{num.val}}</span>
                <button class="ant-btn-red1 ant-btn1" @click="onSelect(num)">SELECT</button>
                <button class="ant-btn1" style="background: rgb(217,217,217)">APY</button> -->
              </div>
            </li>
        </ul>
       </div>
     </div>
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
let arr = [
  {
    img: require("../../assets/image/min2.png"),
    val: "GAL/TRX LP",
    val1: "Mining Pool Information",
    val2: "Your Galaxy balance"
  },
  {
    img: require("../../assets/image/mint3.png"),
    val: "USDJ",
    val1: "Mining Pool Information",
    val2: "Your Galaxy balance"
  },
  {
    value: "Black Hole",
    img: require("../../assets/image/min2.png"),
    val: "GAL/TRX LP",
    val1: "Mining Pool Information",
    val2: "Your Galaxy balance"
  },
  {
    value: "Black Hole",
    img: require("../../assets/image/mint3.png"),
    val: "USDJ",
    val1: "Mining Pool Information",
    val2: "Your Galaxy balance"
  }
]
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
  export default {
    name: 'mint',
    data() {
      return {
        url: require("../../assets/image/earth.png"),
        url1: require("../../assets/image/caise_earth.png"),
        name,
        arr
      }
    },
    mounted() {
      console.log("1")
      // this.$router.go(0)
    },
    methods: {
      onSelect(num) {
        console.log(num,"num")
        this.$router.push({
          name: 'detail',
          params: {
            data: num
          }
        })
      },
      // onTurn(url) {
      //   console.log(url)
      //   this.$router.push(url)
      // },
    }
  }
</script>

<style lang="scss" scoped>
  @media only screen and (min-width: 750px) {
      .shome1 {
        background: rgb(4,3,47);
        width: 100%;
        height: 100%;
        overflow: scroll;
        // overflow: hidden;
        
      }
      .smain_body1 {
        width: 1200px;
        margin: 0 auto;
        .bodyBg{
          width: 400px;
          margin: 0 auto;
          background-image: url("../../assets/image/stat.png");
          background-repeat:no-repeat;
          background-size:100% 50%;
          -moz-background-size:100% 50%;
          z-index: 80;
          .imgText {
            z-index: 10;
            position: relative;
            font-size: 24px;
            bottom: 280px;
            font-family: 'Ink Free';
            color: #fff;
          }
        }
         .bodyBg:before{
           content: "";
          display: block; 
          padding-top: 100%;
          }
        .main_menu1 {
            list-style: none;
            border: 0; 
            padding: 0;
            position: relative;
            bottom: 200px;
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
                  .ul_li1 {
                    display: flex;
                    justify-content: flex-start;
                    .box {
                        width: 250px;
                        height: 100px;
                        margin: 0;
                        margin-left: 20px;
                        border-radius: 5px;
                        border: 1px solid #fff;
                        background: none;
                        display: flex;
                        /*垂直排列*/
                        flex-direction: row;
                        align-items:center;
                        color: #fff;
                      }
                      img {
                        width: 50px;
                        height: 50px;
                        margin-left: 20px;
                      }
                      img[src="#"],img:not([src]){
                        opacity:0;
                      }
                  }
                  .ul_li {
                    display: flex;
                    justify-content: flex-end;
                    .box {
                        width: 250px;
                        height: 100px;
                        margin: 0;
                        margin-left: 20px;
                        border-radius: 5px;
                        border: 1px solid #fff;
                        display: flex;
                        /*垂直排列*/
                        flex-direction: row!important;
                        color: #fff;
                      }
                      img{
                        width: 50px;
                        height: 50px;
                        margin-left: 20px;
                        margin-top: 0px !important;
                      }
                  }
                  li:nth-of-type(odd) {
                    display: flex;
                    justify-content: flex-end;
                    .box {
                        width: 250px;
                        height: 350px;
                        margin: 0;
                        margin-left: 20px;
                        border-radius: 10px;
                        background:#fff;
                        display: flex;
                        /*垂直排列*/
                        flex-direction: column;
                        align-items:center;
                      }
                  }
                  li {
                      flex: 0 0 50%;
                      // height: 6rem;
                      display: inline-block;
                      // background: #ededee;
                      margin-bottom: 1rem;
                      text-align: center;
                      .box {
                        width: 250px;
                        height:350px;
                        // margin: 0 auto;
                         margin-left: 20px;
                        border-radius: 10px;
                        background:#fff;
                        display: flex;
                        /*垂直排列*/
                        flex-direction: column;
                        align-items:center;
                        img {
                             width: 50px;
                             height: 50px;
                             margin-top: 20px;
                          }
                        span {
                            font-family: 'Calibri (正文)';
                            font-size: 20px;
                          }
                        // .imgBox {
                        //   width: 60px;
                        //   height: 60px;
                        //   border-radius: 50%;
                        //   background: #000;
                        //   margin-top: 20px;
                        //   padding-top: 4px;
                        //   img {
                        //      width: 50px;
                        //      height: 50px;
                        //   }
                        // }
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
    width: 140px;
    display: inline-block;
    font-weight: 400;
    font-family: 'Calibri (正文)';
    white-space: nowrap;
    text-align: center;
    margin-top: 10px;
    background-image: none;
    border: 1px solid transparent;
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.015);
    box-shadow: 0 2px 0 rgba(0,0,0,0.015);
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
    border-radius: 10px;
    color: rgba(0,0,0,0.65);
    background-color: #fff;
    border-color: #d9d9d9;
}
.ant-btn-red1 {
    color: #fff;
    height: 45px;
    background-color: #FF5A44;
    border-color: #FF5A44;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
}
button:focus {outline:none;}

</style>
  