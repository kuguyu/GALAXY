<template>
  <div class="home">
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
     <div class="main_body">
       <div class="bodyBg">
         <span class="imgText">Have you own plant</span>
       </div>
       <div class="main_menu">
          <ul>
            <li v-for="(num, i) in arr" :key="i">
              <div class="menu_body">
                <img :src="url1" alt="" class="earth">
                <div class="data_class">
                  <span v-html="num.num"></span>
                  <div>
                   <span style="font-size: 18px;lineHeight:18px;marginBottom: 20px">{{num.value}}</span>

                  </div>
                </div>
              </div>
              
            </li>
        </ul>
       </div>
     </div>
     <div class="footer">
        <!-- <div class="left_img">
          <img src="../../assets/image/left_earth.png" alt="">
        </div> -->
        <div class="mine_but">
          <div class="button">
            <button class="ant-btn-red ant-btn" > Swap </button>
            <button  class="ant-btn-red ant-btn"> Mining </button>
          </div>
        </div>
        <!-- <div class="right_img">
          <img src="../../assets/image/right_earth.png" alt="">
        </div> -->
        <div class="share">
          <img :src="num.url" alt="" v-for="(num, i) in share" :key="i">
        </div>
     </div>
  </div>
</template>

<script>
let share = [
  {
    url: require("../../assets/image/share1.png")
  },
  {
    url: require("../../assets/image/share2.png")
  },
  {
    url: require("../../assets/image/share3.png")
  }
]
let arr = [
  {
    num:"0.00000330",
    value: "My banlance"
  },
  {
    num: "0.00000330",
    value: "My banlance"
  },
  {
    num: "0.00000330",
    value: "My banlance"
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
    name: 'Home1',
    data() {
      return {
        url: require("../../assets/image/earth.png"),
        url1: require("../../assets/image/caise_earth.png"),
        name,
        arr,
        share
      }
    },
    mounted() {
      
    },
    methods: {
      onTurn(url) {
        console.log(url)
        this.$router.push(url)
      },
    }
  }
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 750px) {
  @import "./index.scss";
}
  @media only screen and (min-width: 750px) {
      .home {
        background: rgb(4,3,47);
        width: 100%;
        height: 100%;
        overflow: scroll;
        background-image: url("../../assets/image/newHome.png");
        z-index: -99;
        background-repeat: no-repeat;
        -moz-background-size:100% 200%; 
        background-size:100% 200%;
      }
      .head {
        width: 1200px;
        height: 50px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .left{
          width: 300px;
          margin: 0;
          padding: 0;
          text-align: left;
          // float: left;
          .img {
            width: 40px;
            height: 30px;
            float: left;
            margin-top: 10px;
              img {
                width: 40px;
                height: 30px;
              }
          }
          span {
            font-size: 18px;
            color: #fff;
            font-family: 'Berlin Sans FB';
            line-height: 50px;
            vertical-align: middle;
          }
        }
        .right {
          width: 600px;
          margin: 0;
          padding: 0;
          text-align: right;
          font-size: 16px;
          line-height: 50px;
          font-family: 'Calibri (正文)';
          color: #fff;
          display: flex;
          justify-content: flex-end;
          #menu ul {
            list-style:none;
            text-align:right;
            height: 50px;
            width: 100%;
          }
          #menu ul li {
            display:inline;
            float: left;
            padding-left: 20px;
          }
        }
      }
      .main_body {
        width: 1200px;
        margin: 0 auto;
        .bodyBg{
          width: 400px;
          margin: 0 auto;
          background-image: url("../../assets/image/home1.png");
          background-repeat:no-repeat;
          background-size:100% 50%;
          -moz-background-size:100% 50%;
          z-index: 80;
          .imgText {
            z-index: 10;
            position: relative;
            font-size: 24px;
            bottom: 240px;
            font-family: 'Ink Free';
            color: #fff;
          }
        }
         .bodyBg:before{
           content: "";
          display: block; 
          padding-top: 100%;
          }
        .main_menu {
            list-style: none;
            border: 0; 
            padding: 0;
            position: relative;
            bottom: 200px;
            margin: 0
            ul {
                width: 250px; 
                height: 100px; 
                background: red; 
                display: flex; 
                margin: auto; 
                margin-top: 100px; 
                padding: 0 10px;
                align-items: center;
            }
            li {
                box-shadow: inset -2px -2px 5px #000;
                background: #ffffff; 
                height: 100px; 
                width: 250px; 
                display: inline-block; 
                margin: 2px;
                line-height: 100px;
                text-align: center;
                margin-right: 40px;
                border-radius: 10px;
                flex: auto;
                  .menu_body {
                        width: 100%;
                        display: flex;
                    }
                  .earth {
                      width: 60px;
                      height: 60px;
                      margin-top: 20px;
                      margin-left: 20px;
                    }
                    .data_class {
                      height:100px;
                      flex: 1;
                      font-family: 'Calibri';
                      font-size: 25px;
                      line-height: 0px;
                      text-align: left;
                      margin-left: 40px;
                      margin-top: 5px;
                      span{
                        line-height: 50px;
                      }
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
            justify-content: center;
            button:focus {outline:none;}
            button {
              box-shadow: inset 0px 1px 5px #4a4a4a;
              margin-top: 60px;
              width: 150px;
              height: 40px;
              margin-right: 60px;
            }
          }
        }
        // .right_img {
        //  flex:0 0 auto;
        //  width: 300px;
        //  margin-top: 80px;
        //  img {
        //    width: 300px;
        //    height: 200px;
        //  }
        // }
        // .left_img{
        //   padding:5px;
        //   width:300px;
        //   img{
        //     width: 170px;
        //     height: 100px;
        //     position: absolute;
        //     bottom: 40px;
        //     left: 80px;
        //   }
        // }
        .share {
          width: 200px;
          left: calc(50% - 100px);
          position: absolute;
          bottom: -120px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          img {
            width: 25px;
            height: 25px;
            margin: 10px;
          }
        }
      }
  
  .ant-btn {
    line-height: 1.499;
    position: relative;
    display: inline-block;
    font-weight: 400;
    font-family: 'Calibri (正文)';
    white-space: nowrap;
    text-align: center;
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
    font-size: 24px;
    border-radius: 40px;
    color: rgba(0,0,0,0.65);
    background-color: #fff;
    border-color: #d9d9d9;
}

// .ant-btn-primary {
//     color: #fff;
//     background-color: #1890ff;
//     border-color: #1890ff;
//     text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
//     -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);
//     box-shadow: 0 2px 0 rgba(0,0,0,0.045);
// }
.ant-btn-red {
    color: #fff;
    background-color: #FF5A44;
    border-color: #FF5A44;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
}
}
</style>