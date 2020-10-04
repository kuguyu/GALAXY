<template>
  <div class="loan">
     <div class="loan_body">
       <div class="bodyBg">
         <ul>
           <li v-for="(num, i) in arr" :key="i">
             <img :src="num.img" alt="">
           </li>
         </ul>
       </div>
       <div class="img_body">
         <img src="../../assets/image/all7.jpg" alt="">
       </div>
     </div>
  </div>
</template>

<script>
let arr = [
  {
    img: require("../../assets/image/all1.png")
  },
  {
    img: require("../../assets/image/all2.png")
  },
  {
    img: require("../../assets/image/all3.png")
  },
  {
    img: require("../../assets/image/all4.png")
  },
  {
    img: require("../../assets/image/all5.png")
  },
  {
    img: require("../../assets/image/all6.png")
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
          margin: 0 auto;
          width: 1200;
          border: 0; 
          padding: 0;
              ul {
                  margin: 0 auto;
                  width: 900px;
                  padding: 0;
                  margin: 0 auto;
                  list-style: none;
                  padding: 1rem;
                  box-sizing: border-box;
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                  li {
                      // flex: 0 0 20%;
                      // height: 6rem;
                      display: inline-block;
                      // background: #ededee;
                      margin-bottom: 1rem;
                      text-align: center;
                      img {
                        width: 160px;
                        height: 100px;
                        margin-right:40px ;
                      }
                }}
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
  