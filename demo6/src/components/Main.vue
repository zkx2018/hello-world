<template>

  <el-container>
    <el-header><span :class="mycode">{{mycode}}</span></el-header>
    <el-container>
<!--      <el-aside>aside</el-aside>-->
      <el-main>
        <el-container>
          <el-main>

            <table style="line-height: 50px;position:relative;">
              <tr>
                <td colspan="2" rowspan="2"  >&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td>
               <td  ><i class="el-icon-setting"></i></td> <td><i class="el-icon-star-off"></i></td> <td  colspan="2" rowspan="2" >&nbsp;</td>  </tr>


              <tr>

                <td>&nbsp;</td> <td >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td >
              &nbsp;
            </td> <td>&nbsp;</td> </tr>


              <tr><td> <i class="el-icon-star-off"></i></td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td >
              &nbsp;
            </td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td></tr> <tr><td  ><i class="el-icon-setting"></i></td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td ><i class="el-icon-right"></i></td> <td><i class="el-icon-arrow-right"></i></td> <td  >
              &nbsp;
            </td> <td><i class="el-icon-arrow-right"></i></td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td></tr> <tr><td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td ><i class="el-icon-bottom"></i></td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td></tr> <tr><td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td><i class="el-icon-arrow-up"></i></td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td><i class="el-icon-arrow-down"></i></td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td></tr> <tr><td  >
              &nbsp;
            </td> <td >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  ><button type="button" class="el-button el-button--success is-circle"></button></td> <td >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td >
              &nbsp;
            </td></tr> <tr><td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td><i class="el-icon-arrow-up"></i></td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td><i class="el-icon-arrow-down"></i></td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td></tr> <tr><td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td  ><i class="el-icon-top"></i></td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td></tr> <tr><td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td><i class="el-icon-arrow-left"></i></td> <td  >
              &nbsp;
            </td> <td><i class="el-icon-arrow-left"></i></td> <td  ><i class="el-icon-back"></i></td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td ><i class="el-icon-setting"></i></td></tr> <tr><td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>
              &nbsp;
            </td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td><i class="el-icon-star-off"></i></td>
            </tr>

              <tr>

                <td colspan="2" rowspan="2"  >&nbsp;</td>

                <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td>    <td colspan="2" rowspan="2"  >&nbsp;</td>
              </tr>

              <tr>  <td><i class="el-icon-star-off"></i></td> <td  ><i class="el-icon-setting"></i></td> <td >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td  >
              &nbsp;
            </td> <td>&nbsp;</td>
            </tr>
            </table>

            <table style="line-height: 50px; position: absolute; top: 160px;"><tr><td colspan="2" rowspan="2" class="q1 home1">&nbsp;</td> <td>&nbsp;</td> <td class="qp q-1-10">
              &nbsp;
            </td> <td class="qp q-1-11">
              &nbsp;
            </td> <td class="qp q-1-12">
              &nbsp;
            </td> <td class="qp q-1-13">
              &nbsp;
            </td> <td class="qp q-2-1">
              &nbsp;
            </td> <td class="qp q-2-2">
              &nbsp;
            </td> <td class="qp q-2-3"></td> <td class="qp q-2-0">&nbsp;</td> <td colspan="2" rowspan="2" class="q2 home2">&nbsp;</td></tr> <tr><td>&nbsp;</td> <td class="qp q-1-9">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q2 h-2-1">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-2-4">
              &nbsp;
            </td> <td>&nbsp;</td></tr> <tr><td class="qp  q-1-0">&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-1-8">
              &nbsp;
            </td> <td>&nbsp;</td> <td class="qp q2 h-2-2">
              &nbsp;
            </td> <td>&nbsp;</td> <td class="qp q-2-5">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td></tr> <tr><td class="qp q-1-3"></td> <td class="qp q-1-4">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-1-7"></td> <td></td> <td class="qp q2 h-2-3">
              &nbsp;
            </td> <td></td> <td class="qp q-2-6">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-2-9">
              &nbsp;
            </td> <td class="qp q-2-10">
              &nbsp;
            </td></tr> <tr><td class="qp q-1-2">
              &nbsp;
            </td> <td>&nbsp;</td> <td class="qp q-1-5">
              &nbsp;
            </td> <td class="qp q-1-6">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q2 h-2-4">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-2-7"></td> <td class="qp q-2-8">
              &nbsp;
            </td> <td>&nbsp;</td> <td class="qp q-2-11">
              &nbsp;
            </td></tr> <tr><td class="qp q-1-1">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td></td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q2 h-2-5">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td></td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-2-12">
              &nbsp;
            </td></tr> <tr><td class="qp q-4-13">
              &nbsp;
            </td> <td class="qp q1 h-1-1">
              &nbsp;
            </td> <td class="qp q1 h-1-2">
              &nbsp;
            </td> <td class="qp q1 h-1-3">
              &nbsp;
            </td> <td class="qp q1 h-1-4">
              &nbsp;
            </td> <td class="qp q1 h-1-5">
              &nbsp;
            </td> <td class="IN"></td> <td class="qp q3 h-3-5">
              &nbsp;
            </td> <td class="qp q3 h-3-4">
              &nbsp;
            </td> <td class="qp q3 h-3-3">
              &nbsp;
            </td> <td class="qp q3 h-3-2">
              &nbsp;
            </td> <td class="qp q3 h-3-1">
              &nbsp;
            </td> <td class="qp q-2-13">
              &nbsp;
            </td></tr> <tr><td class="qp q-4-12">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td></td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q4 h-4-5">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td></td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-3-1">
              &nbsp;
            </td></tr> <tr><td class="qp q-4-11">
              &nbsp;
            </td> <td>&nbsp;</td> <td class="qp q-4-8">
              &nbsp;
            </td> <td class="qp q-4-7"></td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q4 h-4-4">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-3-6">
              &nbsp;
            </td> <td class="qp q-3-5">
              &nbsp;
            </td> <td>&nbsp;</td> <td class="qp q-3-2">
              &nbsp;
            </td></tr> <tr><td class="qp q-4-10">
              &nbsp;
            </td> <td class="qp q-4-9">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-4-6">
              &nbsp;
            </td> <td></td> <td class="qp q4 h-4-3">
              &nbsp;
            </td> <td></td> <td class="qp q-3-7"></td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-3-4">
              &nbsp;
            </td> <td class="qp q-3-3"></td></tr> <tr><td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-4-5">
              &nbsp;
            </td> <td>&nbsp;</td> <td class="qp q4 h-4-2">
              &nbsp;
            </td> <td>&nbsp;</td> <td class="qp q-3-8">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-3-0">&nbsp;</td></tr> <tr><td colspan="2" rowspan="2" class="q4 home4">&nbsp;</td> <td>&nbsp;</td> <td class="qp q-4-4">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q4 h-4-1">
              &nbsp;
            </td> <td>&nbsp;</td> <td>&nbsp;</td> <td class="qp q-3-9">
              &nbsp;
            </td> <td>&nbsp;</td> <td colspan="2" rowspan="2" class="q3 home3">&nbsp;</td></tr> <tr><td class="qp q-4-0">&nbsp;</td> <td class="qp q-4-3"></td> <td class="qp q-4-2">
              &nbsp;
            </td> <td class="qp q-4-1">
              &nbsp;
            </td> <td class="qp q-3-13">
              &nbsp;
            </td> <td class="qp q-3-12">
              &nbsp;
            </td> <td class="qp q-3-11">
              &nbsp;
            </td> <td class="qp q-3-10">
              &nbsp;
            </td> <td>&nbsp;</td></tr></table>
          </el-main>
          <el-footer>
            <template v-if="status==0">
              <el-button @click.native="login"   >连接</el-button>
            </template>
            <template v-if="mycode==null&&status!=3">
              <template v-for="play in playList" >
                <el-button @click.native="select(play.code)" v-if="play.use==0" >{{play.name}}</el-button>
              </template>
            </template>
            <template v-if="mycode!=null&&status!=3">
            <el-button @click.native="start"  >开始</el-button>
            </template>
            <template v-if="mycode==code&&status==3">
              <el-button @click.native="yao"   >摇色子</el-button>
            </template>

          </el-footer>
        </el-container>
      </el-main>
    </el-container>
  </el-container>

</template>

<style scope>
  table{
    border: 1px solid black;
    width: 758px;height: 758px;

  }
  td{
    width: 50px; height: 50px;
  }
  .qp{
    border: 2px solid black;
  }
  .play1,.q1,.q-4-13,.q-4-9,.q-4-5,.q-4-1,.q-3-10,.q-3-6,.q-3-2,.q-2-11,.q-2-7,.q-2-3,.q-1-12,.q-1-8,.q-1-4{
    border:2px solid  #F56C6C;
  }
  .play2,.q2,.q-1-13,.q-1-9,.q-1-5,.q-1-1,.q-4-10,.q-4-6,.q-4-2,.q-3-11,.q-3-7,.q-3-3,.q-2-12,.q-2-8,.q-2-4{
    border:2px solid   #E6A23C;
  }
  .play3,  .q3,.q-2-13,.q-2-9,.q-2-5,.q-2-1,.q-1-10,.q-1-6,.q-1-2,.q-4-11,.q-4-7,.q-4-3,.q-3-12,.q-3-8,.q-3-4{
    border:2px solid  #409EFF;
  }
  .play4, .q4,.q-3-13,.q-3-9,.q-3-5,.q-3-1,.q-2-10,.q-2-6,.q-2-2,.q-1-11,.q-1-7,.q-1-3,.q-4-12,.q-4-8,.q-4-4{
    border:2px solid   #67C23A;
  }
</style>
<script>
  import  $ from 'jquery'
  export default {
    name: 'Main',

    data() {
      return {
        play:null,
        mycode:null,
        socket:null,
        playList:[],
        status:0,
        code:null,//归谁操作， 减少服务器压力
        msg: 'Welcome to Your Vue.js App'
      }
    },created () {

    },mounted () {
      // 初始化
      this.init()
    },
    methods: {

      start:function(){
        this.send({type:"start"});
      },
      yao:function(){
        if(this.mycode==this.code){
          this.send({type:"yao"});
        }
      },
      selectBtn:function(play){
        if(this.mycode==this.code){
          this.send({type:"selectBtn",playcode:play});

        }
      },
      select:function(play){
        this.send({type:"select",playcode:play});
      },
      login:function(){

        if(   this.socket.readyState==3){
          this.init()
        }else{
          this.send({type:"insert"});
        }

      },
      init: function () {
        if(typeof(WebSocket) === "undefined"){
          alert("您的浏览器不支持socket")
        }else{
          // 实例化socket
          this.socket = new WebSocket("ws://127.0.0.1:3001");
          // 监听socket连接
          this.socket.onopen = this.open
          // 监听socket错误信息
          this.socket.onerror = this.error
          // 监听socket消息
          this.socket.onmessage = this.getMessage
         // this.send({type:"insert"});
        }
      },
      open: function () {
        console.log("socket连接成功")
      },
      error: function () {
        console.log("连接错误")
      },
      getMessage: function (msg) {
        console.log(msg.data)
        var   data = JSON.parse(msg.data);

        if(data.type=='insert'){
          this.playList=data.playList;
          if(data.isopen==1){
            this.status=3;
          }else{
            this.status=1;
          }

          this.$forceUpdate()
        }


        if(data.type=='select'){
          this.mycode=data.code;
          this.status=2;
          var self=this;
          for(var i in  this.playList) {
            var p = this.playList[i];
            if (p.code == data.code) {
              self.play=p;
            }
          }
        }
        if(data.type=='start'){
          this.status=3;
          this.code=data.code;
        }

        if(data.type=='yao'){
            $(".IN").html(data.num);
        }

        if(data.type=='move'){
          var q=data.btn;
          if(data.code){
            this.code=data.code;
          }
          $(".q-"+q.h+"-"+q.w).append(this.getBtn(q))
        }

        if(data.type=='selectOne'||data.type=='insert'){
          for(var i in  this.playList){
            var p=this.playList[i];
            if(data.type=='insert'&& p.use==0){
              continue;
            }
            if(data.type=='selectOne' &&p.code==data.code){
              p.use=data.u;

            }
            if(data.type=='selectOne' &&p.code!=data.code){
              continue;
            }

            for(var j in p.qizis){
              var q=p.qizis[j];

              if(q.h==0&&q.w==0){//在家
                $(".home"+q.p).append(this.getBtn(q))
              }else if(q.h==0&&q.w==1){
                //完成
              }else{
                //出门
                $(".q-"+q.h+"-"+q.w).append(this.getBtn(q))
              }
            }

          }
        }

      },getBtn(q){
        $("."+q.code).remove();
        var bcode=null;
        switch(q.p){
          case 1:
            bcode="#F56C6C";
            break;
          case 2:
            bcode="#E6A23C";
            break;
          case 3:
            bcode="#409EFF";
            break;
          case 4:
            bcode="#67C23A";
            break;
        }

        var self=this;
        var btn=$("<button class='"+q.code+"' style='background-color: "+bcode+";width: 20px;height: 20px;padding: 0px;' >"+q.name+"</button>");
       if(this.mycode=="play"+q.p){
         btn.click(function () {
           var myclas=$(this).attr("class");
           self.selectBtn(myclas);
         })
       }
        return btn;
      },
      send: function (params) {
        var   str=JSON.stringify(params);
        this.socket.send(str)
      },
      close: function () {
        console.log("socket已经关闭")
      }
    },
    destroyed () {
      // 销毁监听
      this.socket.onclose = this.close
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
