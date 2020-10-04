<template>
  <div class="home2">
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
         <span class="imgText">Monitor</span>
       </div>
       <div class="burn_main_menu">
          <ul>
            <li v-for="(num, i) in arr" :key="i">
              <div class="li_div">
                <img :src="num.img" alt="">
              <div style="border-bottom: 1px solid #fff;width: 100%;line-height: 50px;">
                <span >{{num.num}}</span>
              </div>
              <div class="p_data">
                <p>
                {{num.value}}
              </p>
              </div>
              
              <!-- <div class="menu_body">
                <img :src="url1" alt="" class="earth">
                <div class="data_class">
                  <span v-html="num.num"></span>
                  <div>
                   <span style="font-size: 18px;lineHeight:18px;marginBottom: 20px">{{num.value}}</span>

                  </div>
                </div>
              </div> -->
              </div>
            </li>
        </ul>
       </div>
     </div>
     <div class="footer">
       <span class="title">DASH BOARD</span>
       <div class="footer_list">
         <ul>
           <li v-for="(num ,i) in name[0].data" :key="i">
             <div class="list_box" :style="`background-image: linear-gradient(to right, ${num.color} , rgb(57, 55, 69))`">
               <div class="top">
                 <span :class="{'span_text': num.isText}">{{num.num}}</span>
                 <img :src="num.img" alt="">
               </div>
               <div class="bottom" :class="{'span_text1': !num.isText}">
                 <span >{{num.name}}</span>
                 <img :src="num.img1" alt="">
               </div>
              </div>
           </li>
         </ul>
       </div>
       <span class="title">Winner List</span>
       <table width="90%" class="table">
        <thead>
            <tr>
                <th>
                    RANK
                </th>
                <th>
                    ADDRESS
                </th>
                <th>
                    REWARD
                </th>
            </tr>
        </thead>
        <tr v-for="(num , i) in tableData" :key="i">
            <td>
                109
            </td>
            <td>
                13
            </td>
            <td>
                1.34
            </td>
        </tr>
    </table>

        <!-- <div class="left_img">
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
        </div> -->
     </div>
  </div>
</template>

<script>
let arr = [
  { 
    img: require('../../assets/image/newS1.png'),
    num:"Transaction burn",
    value: "For each ATH transfer, part of it will be destroyed,  and part of it will be transferred to the prize pool, before entering the recipient address"
  },
  {
    img: require('../../assets/image/newS2.png'),
    num: "Dividends",
    value: "Take a snapshot of dividends at 10:00 every night. If you hold ATH 24 hours before the snapshot and keep above 100,000 and there are no transferors, 50% of the tokens in the dividend pool will be shared equally (data to be determined)"
  },
  {
    img: require('../../assets/image/newS3.png'),
    num: "Tail game",
    value: "Every time the swap (buy) ATH is greater than the specified value, you can enter the reward list, and the next tail order game will start at an interval of 60 minutes"
  }
]
let tableData = [
  {},
  {},
  {},
  {},
  {}
]
let name = [{
  type: '中文',
  data: [
    {
      img: require("../../assets/image/icon1.png"),
      color: "rgb(44,182,192)",
      num: "18333961.12122",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
      isText: true
    },
    {
      img: require("../../assets/image/icon2.png"),
      color: "rgb(227,121,101)",
      num: "18333961.12122",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
      isText: true
    },
    {
      img: require("../../assets/image/icon3.png"),
      color: "rgb(246,176,10)",
      num: "18333961.12122",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
      isText: true
    },
    {
      img: require("../../assets/image/icon4.png"),
      color: "rgb(125,106,235)",
      num: "18333961.12122",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
      isText: true
    },
    {
      img: require("../../assets/image/icon1.png"),
      color: "rgb(200,40,154)",
      num: "18333961.12122",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
    },
    {
      img: require("../../assets/image/icon1.png"),
      color: "rgb(125,112,244)",
      num: "18333961.12122",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
    },
    {
      img: require("../../assets/image/icon1.png"),
      color: "rgb(65,109,207)",
      num: "18333961.12122",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
    },
    {
      img: require("../../assets/image/icon1.png"),
      color: "rgb(200,40,154)",
      num: "18333961.12122",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
    },
    {
      img: require("../../assets/image/icon1.png"),
      color: "rgb(249,178,8)",
      num: "",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
    },
    {
      img: require("../../assets/image/icon1.png"),
      color: "rgb(222,118,102)",
      num: "",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
    },
    {
      img: require("../../assets/image/icon1.png"),
      color: "rgb(44,179,192)",
      num: "",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
    },
    {
      img: require("../../assets/image/icon1.png"),
      color: "rgb(199,106,93)",
      num: "",
      name: "Total tokens",
      img1: require("../../assets/image/icon5.png"),
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
        arr,
        tableData
      }
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
      .home2 {
        background: rgb(4,3,47);
        width: 100%;
        height: 100%;
        overflow: scroll;
        background-image: url("../../assets/image/newMint.png");
        z-index: -99;
        background-repeat: no-repeat;
        -moz-background-size:75% 45%; 
        background-size:76% 45%;
      }
      .home2::-webkit-scrollbar {
        display: none; /* Chrome Safari */
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */
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
          background-image: url("../../assets/image/burn1.png");
          background-repeat:no-repeat;
          background-size:100% 50%;
          -moz-background-size:100% 50%;
          z-index: 80;
          .imgText {
            z-index: 10;
            position: relative;
            font-size: 24px;
            bottom: 260px;
            font-family: 'Ink Free';
            color: #fff;
          }
        }
         .bodyBg:before{
           content: "";
            display: block; 
            padding-top: 100%;
          }
        .burn_main_menu {
            list-style: none;
            border: 0; 
            padding: 0;
            position: relative;
            bottom: 200px;
            margin: 0;
            ul {
                // width: 240px; 
                // height: 240px; 
                display: flex; 
                margin: auto; 
                padding: 0 10px;
                align-items: center;
            }
            li {
                // background: #ffffff; 
                
                display: inline-block; 
                margin: 2px;
                // line-height: 100px;
                // text-align: center;
                
                flex: auto;
                .li_div {
                  img {
                    width: 50px;
                    height: 50px;
                  }
                  height: 240px; 
                width: 240px;
                border-radius: 20px;
                // border: 1px solid rgb(255,242,204);
            
                }
                span {
                  color: #fff;
                  font-size: 18px;
                  font-family: 'Ink Free';
                }
                p {
                  height: 25px;
                  line-height: 30px;
                  color: #fff;
                  font-size: 16px;
                  text-align: left;
                  font-family: 'Ink Free';
                  text-align:justify
                }
                .p_data {
                }
                  // .menu_body {
                  //       width: 100%;
                  //       display: flex;
                  //   }
                  // .earth {
                  //     width: 60px;
                  //     height: 60px;
                  //     margin-top: 20px;
                  //     margin-left: 20px;
                  //   }
                    // .data_class {
                    //   height:100px;
                    //   flex: 1;
                    //   font-family: 'Calibri';
                    //   font-size: 25px;
                    //   line-height: 0px;
                    //   text-align: left;
                    //   margin-left: 40px;
                    //   margin-top: 5px;
                    //   span{
                    //     line-height: 50px;
                    //   }
                    // }
            }
           
        }        
      }
      .footer {
        width: 1200px;
        display: flex;
        margin: 0 auto;
        position: relative;
        bottom: 220px;
        flex-direction: column;
        .title {
            border-left: 8px solid #fff;
            font-family: 'Calibri (正文)';
            font-size: 28px; 
            color: #fff;
            margin-top: 40px;
            padding-left: 10px;
            line-height: 30px;
            display: flex;
            justify-self: start;
        }
        
        .footer_list {
            list-style: none;
            border: 0; 
            padding: 0;
            position: relative;
            margin: 0 auto;
            top: 20px;
            width: 1200px;
              .top {
                img {
                  width: 30px;
                  height: 30px;
                  margin-right: 10px;
                  margin-top: 10px;
                }
                span {
                  margin-top: 10px;
                }
              }
              .bottom {
                img {
                  width: 80px;
                  height: 40px;
                  position: relative;
                  bottom: 5px;
                }
              }
              .span_text1 {
                padding-bottom: 20px;
                height: 40px;
                img {
                   position: relative;
                   bottom: 15px;
                }
                span {
                  height: 40px !important;
                  line-height: 10px;
                }
              }
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
                    flex: 1 0 20%;
                    height: 6rem;
                    display: inline-block;
                    margin-bottom: 60px;
                    text-align: center;
                    margin-left: 0px;
                    .list_box {
                      display: flex;
                      flex-direction: column;
                      width: 250px;
                      height: 100px;
                      div {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        span {
                          font-size: 18px;
                          color: #fff;
                          height: 70px;
                          margin-left: 10px;
                        }
                        
                        .span_text {
                            font-size: 25px;
                            color: #fff;                            
                            width: 65%;
                            word-break: break-all;
                            text-align: left;
                            margin-left: 10px;
                            margin-top: 0px;
                        }
                      }
                    }
                }
              }
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
 table{
      border-collapse: collapse;
      margin: 0 auto;
      text-align: center;
      
  }
  table td, table th
  {   
      border-bottom: 1px solid #fff;
      color: #fff;
      height: 50px;
  }
  table thead th
  {
      background: rgb(22, 21, 62);
      width: 100px;
  }
  table tr:nth-child(odd)
  {
      // background: #fff;
  }
  table tr:nth-child(even)
  {
      // background: #F5FAFA;
  }

</style>