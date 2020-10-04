<template>
  <div class="loan">
     <div class="loan_body">
       <div class="bodyBg">
         <!-- <span class="imgText">Community</span> -->
       </div>
       <!-- <div class="main_menu1">
         <div class="title_div">
           <span class="title">Vote</span>
         </div>
         
         <div class="box">
            <div class="boxText">
              <button class="ant-btn-red1 ant-btn1" 
              style="background-color: rgb(89, 89, 89);border-color: rgb(89, 89, 89);">Active</button>
              <div class="text1">
                <span style="color: rgb(144,85,47)">Temporary lovation with voting title</span>
                <span>9/8/2020 – 9/10/2020</span>
              </div>
              
            </div>
            <div class="boxText">
              <button class="ant-btn-red1 ant-btn1">Ended</button>
              <div class="text1">
                <span style="color: rgb(144,85,47)">Temporary lovation with voting title</span>
                <span>9/8/2020 – 9/10/2020</span>
              </div>
            </div>
         </div> -->

       <!-- </div> -->
     </div>
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
      .loan {
        background: rgb(4,3,47);
        width: 100%;
        height: 100vh;
        // overflow: scroll;
        overflow: hidden;
        
      }
      .loan_body {
        width: 1200px;
        margin: 0 auto;
        .bodyBg{
          width: 400px;
          margin: 0 auto;
          background-image: url("../../assets/image/loan.png");
          background-repeat:no-repeat;
          background-size:100% 50%;
          -moz-background-size:100% 50%;
          z-index: 80;
          .imgText {
            z-index: 10;
            position: relative;
            font-size: 24px;
            bottom: 265px;
            left: -32px;
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
            bottom: 220px;
            margin: 0 auto;
            width: 900px;
            .title_div {
              display: flex;
              justify-content: flex-start;
              margin-left: 150px;
              margin-bottom: 5px;

            }
            .title {
              border-left: 8px solid #fff;
              font-family: 'Calibri (正文)';
              font-size: 28px; 
              color: #fff;
              margin-top: 20px;
              padding-left: 20px;
              line-height: 35px;
            }
            .box {
              width: 600px;
              background: #fff;
              height: 250px;
              margin: 0 auto;
              border-radius: 20px;
              display: flex;
              // justify-content: flex-start;
              flex-direction:column;
              .boxText {
                margin-top: 20px;
                display: flex;
                justify-content: flex-start;
                button {
                  margin-left: -40px;
                }
                .text1 {
                  margin-left: 40px;
                  display: flex;
                  flex-direction:column;
                  font-size: 20px;
                  margin-top: 10px;
                  text-align: left;
                }
              }
            } 
            // .box:before{
            //   content: "";
            //   display: block; 
            //   padding-bottom: 250px;
            // }
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
 .box .ant-btn1 {
    line-height: 1.499;
    position: relative;
    width: 100px;
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
    font-size: 16px;
    border-radius: 10px;
    color: rgba(0,0,0,0.65);
    background-color: #fff;
    border-color: #d9d9d9;
}
.box .ant-btn-red1 {
    color: #fff;
    height: 45px;
    background-color: rgb(56, 87, 35);
    border-color: rgb(56, 87, 35);
    text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
}
button:focus {outline:none;}

</style>
  