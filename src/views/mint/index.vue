<template>
  <div class="home1">
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
     <div class="main_body1">
       <div class="bodyBg">
         <span class="imgText">Farm</span>
       </div>
       <div class="main_menu1">
          <ul>
            <li v-for="(num, i) in arr" :key="i">
              <div class="box" :class="{borderImg: num.background }">
                <div class="imgBox">
                  <img :src="num.img" alt="">
                </div>
                <span>{{num.value}}</span>
                <span>{{num.val}}</span>
                <button class="ant-btn-red1 ant-btn1" @click="onSelect(num)" :disabled="num.disabled">SELECT</button>
                <button class="ant-btn1" style="background: rgb(217,217,217)">APY</button>
   
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
    value: "Black Hole",
    img: require("../../assets/image/min3.png"),
    val: "(GAL/TRX)",
    background: true,
    disabled: false,
    bg: require("../../assets/image/block.png"),
    bk: require("../../assets/image/block1.png")
  },
  {
    value: "NEPTUNE",
    val: "(USDJ)",
    img: require("../../assets/image/mint3.png"),
    disabled: true
  },
  {
    value: "VENUS",
    val: "(USDT)",
    img: require("../../assets/image/mint4.png"),
    disabled: true
  },
   {
    value: "SATURN",
    val: "(TAI)",
    img: require("../../assets/image/mint5.png"),
    disabled: true
  },
  {
    value: "SPACESHIP",
    val: "(JFI)",
    img: require("../../assets/image/mint6.png"),
    disabled: true
  },
  {
    value: "COMET",
    val: "(JST)",
    img: require("../../assets/image/mint7.png"),
    disabled: true
  },
  {
    value: "URANUS",
    val: "(PEARL)",
    img: require("../../assets/image/mint8.png"),
    disabled: true
  },
  {
    value: "ASTRONAUT",
    val: "(TRX)",
    img: require("../../assets/image/mint9.png"),
    disabled: false,
    bg: require("../../assets/image/block3.png"),
    bk: require("../../assets/image/block4.png")
  },
  {
    value: "EARTH",
    val: "(SUN)",
    img: require("../../assets/image/mint10.png"),
    disabled: false,
    bg: require("../../assets/image/block5.png"),
    bk: require("../../assets/image/block6.png")
  },
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
@media only screen and (max-width: 750px) {
  @import "./index.scss";
}
  @media only screen and (min-width: 750px) {
      .home1 {
        background: rgb(4,3,47);
        width: 100%;
        height: 100%;
        overflow: scroll;
        // overflow: hidden;
        background-image: url("../../assets/image/newMint.png");
        z-index: -99;
        background-repeat: no-repeat;
        -moz-background-size:75% 45%; 
        background-size:76% 45%;
        
      }
      .home1::-webkit-scrollbar {
        display: none; /* Chrome Safari */
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */
      }
      .main_body1 {
        width: 1200px;
        margin: 0 auto;
        .bodyBg{
          width: 400px;
          margin: 0 auto;
          background-image: url("../../assets/image/mint2.png");
          background-repeat:no-repeat;
          background-size:100% 50%;
          -moz-background-size:100% 50%;
          z-index: 80;
          .imgText {
            z-index: 10;
            position: relative;
            font-size: 5rem;
            bottom: 50rem;
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
                  li {
                      flex: 1 0 30%;
                      // height: 6rem;
                      display: inline-block;
                      // background: #ededee;
                      margin-bottom: 1rem;
                      text-align: center;
                      
                      .box {
                        width: 160px;
                        height: 250px;
                        margin: 0 auto;
                        border-radius: 20px;
                        // background:#fff;
                        border: 3px solid #fff;
                        
                        display: flex;
                        /*垂直排列*/
                        color: #fff;
                        flex-direction: column;
                        align-items:center;
                        clip-path: inset(0 round 10px);
                        
                        span {
                            font-family: 'Bahnschrift';
                            font-size: 20px;
                          }
                        .imgBox {
                          width: 60px;
                          height: 60px;
                          border-radius: 50%;
                          background: #000;
                          margin-top: 20px;
                          padding-top: 4px;
                          img {
                             width: 50px;
                             height: 50px;
                          }
                        }
                      }
                      .borderImg{
                        width: 160px;
                        height: 250px;
                        border: 3px solid rgb(238, 82, 204);
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

button[disabled] {
  opacity: 0.5;
}

</style>
  