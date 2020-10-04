<template>
  <div class="home page">
     <div class="head">
       <div class="left">
         <div class="img">
           <img :src="url" alt="">
         </div>        
         <span>GALAXY<span style="fontSize: 16px">.finance</span></span>
       </div>
       <div v-if="scrollWidth">
          <div class="selectProperty">
              <ul>
                <li>
                  <div v-for="(num, i) in wallet" :key="i">
                    <button v-if="num.type == type" 
                    class="ant-btn-red ant-btn" style="fontSize: 4rem">{{num.val}}</button>
                  </div>
                </li>
                <li> 
                  <span @click="showli = !showli" >
                    <img   src="../../assets/image/menu.png" alt="">
                  </span>
                  <div  v-for="(data, i) in name" :key="i" >
                      <ul  v-if="data.type == type&&showli" class="span_ul"
                      :class="showli?'Anim':''"  >
                      <li class="same" v-for="(num, i) in data.data" :key="i" @click="onTurn(num.url)">
                          <div>
                            <span>{{num.value}}</span>
                          </div>
                      </li>
                      <!-- <li>
                        <div v-for="(num, i) in wallet" :key="i">
                          <button v-if="num.type == type" class="ant-btn-red ant-btn" style="fontSize: 16px">{{num.val}}</button>
                        </div>
                      </li>
                      <li>
                        <div v-if="type == '中文'" class="lanager">
                          <span>语言</span>
                          <a class="eng" @click="onLanguage('EN')"></a>
                          <a @click="onLanguage('中文')"> <img class="CH" src="../../assets/image/china.png" alt=""></a>
                        </div>
                        <div v-if="type == 'EN'" class="lanager">
                          <span>language</span>
                          <a class="eng" @click="onLanguage('EN')"></a>
                          <a @click="onLanguage('中文')"> <img class="CH" src="../../assets/image/china.png" alt=""></a>

                        </div>
                      </li> -->
                      </ul>
                    </div>
                </li>
               
              </ul>
             </div>
       </div>
       <div class="right" v-else>
         <div id="menu" v-for="(data, i) in name" :key="i" >
          <ul  v-if="data.type == type">
           <li v-for="(num, i) in data.data" :key="i" @click="onTurn(num.url)">
             <div>
               <span>{{num.value}}</span>
              </div>
           </li>
           <li>
             <div v-for="(num, i) in wallet" :key="i">
               <button v-if="num.type == type" class="ant-btn-red ant-btn" style="fontSize: 16px">{{num.val}}</button>
             </div>
           </li>
           <li>
             <div v-if="type == '中文'" class="lanager">
               <span>语言</span>
               <a class="eng" @click="onLanguage('EN')"></a>
               <a @click="onLanguage('中文')"> <img class="CH" src="../../assets/image/china.png" alt=""></a>
             </div>
             <div v-if="type == 'EN'" class="lanager">
               <span>language</span>
               <a class="eng" @click="onLanguage('EN')"></a>
               <a @click="onLanguage('中文')"> <img class="CH" src="../../assets/image/china.png" alt=""></a>

             </div>
           </li>
          </ul>
         </div>
         
       </div>
     </div>
     <div class="anmimateBox">
     <transition :name="transitionName"> 
       <!-- <keep-alive> -->
        <router-view ></router-view>
       <!-- </keep-alive> -->
     </transition>
     </div>
     <div v-if="type == '中文' && scrollWidth" class="lanager">
        <span>语言</span>
        <a class="eng" @click="onLanguage('EN')"></a>
        <a @click="onLanguage('中文')"> <img class="CH" src="../../assets/image/china.png" alt=""></a>
      </div>
      <div v-if="type == 'EN'" class="lanager">
        <span>language</span>
        <a class="eng" @click="onLanguage('EN')"></a>
        <a @click="onLanguage('中文')"> <img class="CH" src="../../assets/image/china.png" alt=""></a>

      </div>
  </div>
</template>

<script>
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
      value: "挖矿",
      url: '/minting'
    },
    {
      value: "燃烧规则",
      url: '/burning'
    },
    {
      value: "投票",
      url: '/voting'
    },
    {
      value: "规则",
      url: 'about'
    },
    // {
    //   value: "统计",
    //   url: '/statistics'
    // },
    // {
    //   value: "贷款",
    //   url: '/loan'
    // }
  ]
},{
  type: 'EN',
  data: [
    {
      value: "Home",
      url: '/netWork'
    },
    {
      value: "Mining",
      url: '/minting'
    },
    {
      value: "Burning",
      url: '/burning'
    },
    {
      value: "Vote",
      url: '/voting'
    },
    {
      value: "About",
      url: 'about'
    },
    // {
    //   value: "Statistics",
    //   url: '/statistics'
    // },
    // {
    //   value: "Loan",
    //    url: '/loan'
    // }
  ]
}]
  export default {
    name: 'Home',
    data() {
      return {
        url: require("../../assets/image/log1.png"),
        url1: require("../../assets/image/caise_earth.png"),
        name,
        arr,
        showli:false,
        routerAlive: true,
        transitionName: "slide-left",
        type: "",
        wallet: [
          {
            type: '中文',
            val: "我的钱包"
          },
          {
            type: 'EN',
            val: "My Wallet"
          }
        ]
      }
    },
    watch: {//使用watch 监听$router的变化
      $route(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.$nextTick(() => {
            this.transitionName = 'slide-left';
          })
          
        }else{
           this.$nextTick(() => {
             this.transitionName = 'slide-right';
          })
         
        }
      }
    },
    created() {
      this.type = this.$store.state.type
    },
    methods: {
      drop (el) {
      this.showli = true
      this.ball.el = el
    },
   
      onLanguage(val) {
        this.$store.commit('changeType', val)
        this.type = val
      },
      onTurn(url) {
        if(url == 'about') {
          window.open("https://www.baidu.com/");
        }else {
          this.$router.push(url)
          this.routerAlive = false;
          this.$nextTick(()=>{
            this.routerAlive = true;
          });
        }
        
      },
      routerRefresh(){
        this.routerAlive = false;
        this.$nextTick(()=>{
          this.routerAlive = true;
        });
	    }
    }
  }
</script>

<style lang="scss">
@media only screen and (max-width: 750px) {
  .anmimateBox{
    width: 100%;
    position: absolute;
    top: 15rem;
    bottom: 0px;
    z-index: -69;
    overflow: hidden;
    background-color: rgb(4,3,47);;
  }
  @import "./index.scss";
  
}
  @media only screen and (min-width: 750px) {

.anmimateBox{
    position: absolute;
    top: 50px;
    bottom: 0px;
    width: 100%;
    // background: rgb(13,12,19);
    overflow: hidden;
}
  }
  @media only screen and (min-width: 750px) {
      .home {
        background: rgb(13,12,19);
        width: 100%;
        height: 100%;
        overflow: hidden;
        
      }
      body {
        background: rgb(4,3,47);
      }
      .home::-webkit-scrollbar {
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
            width: 42px;
            height: 42px;
            border: 1px solid #fff;
            border-radius: 21px;
            float: left;
            margin-top: 10px;
            background: #fff;
              img {
                width: 40px;
                height: 40px;
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
        .lanager {
          display: flex;
          flex-direction: row;
        }
        .eng {
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDgtMjdUMTQ6NDI6MzErMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA4LTI3VDE0OjQzOjU4KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA4LTI3VDE0OjQzOjU4KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmVjNmI1OTc5LTU2YmQtNGViMy1iMzBkLTYyMzg4MGFkMTI5YiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDplYzZiNTk3OS01NmJkLTRlYjMtYjMwZC02MjM4ODBhZDEyOWIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYzZiNTk3OS01NmJkLTRlYjMtYjMwZC02MjM4ODBhZDEyOWIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVjNmI1OTc5LTU2YmQtNGViMy1iMzBkLTYyMzg4MGFkMTI5YiIgc3RFdnQ6d2hlbj0iMjAyMC0wOC0yN1QxNDo0MjozMSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3+wEFQAAAkhJREFUSMftl8srRFEcx+8/wN7KSiwUZaNY2ZEkC5NYeCTCYqYmERakKMljcVGTEBsp1GjG1Ewjj8Z4jVkwk6EZ45XX2FBSjvu7Obdr5p7HtRgbU9+ae88538+55/E7vyMghASWzNPH6TUje5ax1cDui/S7KKhCASFT0VXHEJJe+4r7do7qx/cHeDyZwKKerZBQYUWgjlk/ABABjHC9tAbHB3T0V2BomFJt+8RmesBYOSZ3zGjxFXKDJZOZqmFvgpFeMMhmFt+vzIPdTHC4rPnkYdMrG8XD9YKXTaJcHkzNg/JaInhnYmUFV9SC6wGrod9eL4NLJyUJ4Cbx0EhooMB5wSQPWHSwYH+A4SWrIQ+Y1nFQ+YDHrYBhBdPmBxts+q+pYHv7JBUKgp0CX53wtSw4DcyCYhmGvMtC69SRQauQBieBeaCgjBbnm+A7u+u0eiKIJBheMLu3utCT/5QKxuWRm0dE8wTJwQIPIa9IYD0SznPKYmqTZOkfnDzwny0unu2EKz9HolQwbDlQOBBmbydWABHXgrLprTivAEhgqAPPoexSVNfvpgcQCJnyHwZUDaANNQ9cDpmkQyIeCkZb20EqeMF1zoT/OCTiDwotKBjwHIuktprHojoRoDXkTQRIHjClmqmP4yA6SuutntQnHn6RX/mhmfpg3VkW7aT50ZvsKfDx2bdoa6+Bmd5eNnZtaK3I36S3c87Qq1SWy53Qw1Uk6Qm9+goDqxB3gBec1eZ6Z92hBD2XNsv6mV0ChAlgtxQYPBAJeTy/ANI2R1D/diavAAAAAElFTkSuQmCC) 50% no-repeat;
              width: 20px;
              background-size: contain;
              margin: 15px 5px;
              display: block;
              height: 20px;
            }
            .CH {
              height: 30px;
              width: 30px;
              margin: 12px 0px;
            }
        .right {
          width: 650px;
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
          #menu ul li button {box-shadow: inset 0px 1px 5px #4a4a4a;}
          
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
            margin: 0;
            ul {
                // width: 250px; 
                // height: 100px; 
                // background: red; 
                // display: flex; 
                // margin: auto; 
                // margin-top: 100px; 
                // padding: 0 10px;
                // align-items: center;
            }
            
            li {
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
button:focus {outline:none;} 
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>