const http = require("http");
const ws = require('nodejs-websocket');
//12  [0,12][1,12][2,12][3,12]
//声明4个玩家
var tiaoyue1=["4-13","4-9","4-5","4-1","3-10","3-6","3-2","2-11","2-7","2-3","1-12","1-8","1-4"];
var tiaoyue2=["1-13","1-9","1-5","1-1","4-10","4-6","4-2","3-11","3-7","3-3","2-12","2-8","2-4"];
var tiaoyue3=["2-13","2-9","2-5","2-1","1-10","1-6","1-2","4-11","4-7","4-3","3-12","3-8","3-4"];
var tiaoyue4=["3-13","3-9","3-5","3-1","2-10","2-6","2-2","1-11","1-7","1-3","4-12","4-8","4-4"];
tiaoyue1.reverse();
tiaoyue2.reverse();
tiaoyue3.reverse();
tiaoyue4.reverse();
var tiao1=["2-7","3-6"];
var tiao2=["3-7","4-6"];
var tiao3=["4-7","1-6"];
var tiao4=["1-7","2-6"];
var shaizi=0;

var play1={
  use:0,//是否有人使用
  admin:0,//房主
  name:"玩家1",
  code:"play1",
  qizis:[
    {p:1,h:1,w:0,code:11,name:"狗"},
    {p:1,h:0,w:0,code:12,name:"泽"},
    {p:1,h:1,w:3,code:13,name:"鱼"},
    {p:1,h:1,w:4,code:14,name:"光"},
  ],
  zb:0,//是否准备
};
var play2={
  use:0,//是否有人使用
  admin:0,//房主
  name:"玩家2",
  code:"play2",
  qizis:[
    {p:2,h:0,w:0,code:21,name:"4D"},
    {p:2,h:0,w:0,code:22,name:"月"},
    {p:2,h:2,w:3,code:23,name:"Mi"},
    {p:2,h:2,w:4,code:24,name:"Ya"},
  ],
  zb:0,//是否准备
};
var play3={
  use:0,//是否有人使用
  admin:0,//房主
  name:"玩家3",
  code:"play3",
  qizis:[
    {p:3,h:0,w:0,code:31,name:"Fe"},
    {p:3,h:0,w:0,code:32,name:"只"},
    {p:3,h:3,w:3,code:33,name:"梦"},
    {p:3,h:3,w:4,code:34,name:"An"},
  ],
  zb:0,//是否准备
};
var play4={
  use:0,//是否有人使用
  admin:0,//房主
  name:"玩家4",
  code:"play4",
  qizis:[
    {p:4,h:4,w:1,code:41,name:"Z"},
    {p:4,h:4,w:2,code:42,name:"Z"},
    {p:4,h:4,w:3,code:43,name:"Z"},
    {p:4,h:4,w:4,code:44,name:"Z"},
  ],
  zb:0,//是否准备
};
var isopen=0;//房间状态； 1 开始， 0准备中
var yaocode="play1";
var playList=[];
playList.push(play1);
playList.push(play2);
playList.push(play3);
playList.push(play4);
var playList2=playList;
//封装发送消息的函数(向每个链接的用户发送消息)
const sendServer = (data)=>{

  var   str=JSON.stringify(data);
  console.log("服务器输出："+str);
  server.connections.forEach((connect)=>{
    connect.sendText(str)
  })
};
const sendServerOne = (connect,data)=>{
  var   str=JSON.stringify(data);
  console.log("服务器输出："+str);
  connect.sendText(str);
};
// 当前坐标是否有飞机
const  boom=(q)=>{

  for(var i in  playList){
    var play=playList[i];
    if(play.use==0){
      continue;
    }
    if(play.code=='play'+q.p){
      continue;
    }

    for(var j in  play.qizis){
      var dq=play.qizis[j];
      if(dq.h==q.h&&dq.w==q.w){
        dq.h=0;
        dq.w=0;
        sendServer({type:"move",btn:dq});
      }
    }

  }


}
const  teshu=(q)=>{
  boom(q)
  var arr=[];
  var arr2=[];
  if(q.p==1){
    arr=tiaoyue1;
    arr2=tiao1;
  }
  if(q.p==2){
    arr=tiaoyue2;
    arr2=tiao2;
  }
  if(q.p==3){
    arr=tiaoyue3;
    arr2=tiao3;
  }
  if(q.p==4){
    arr=tiaoyue4;
    arr2=tiao4;
  }
  //if(arr.indexOf(要查找的元素)>-1){元素存在的操作};
  var i1=arr.indexOf(q.h+"-"+q.w)
  if(i1>-1&&i1!=arr.length-1){
    var c=arr[i1+1].split("-");
    q.h=c[0];
    q.w=c[1];
    boom(q)
    if((q.h+"-"+q.w)==arr2[0]){
      var c2=arr2[1].split("-");
      q.h=c2[0];
      q.w=c2[1];
      boom(q)
    }
  }else  if((q.h+"-"+q.w)==arr2[0]){
    var c2=arr2[1].split("-");
    q.h=c2[0];
    q.w=c2[1];
    boom(q)
  }
  return q;
}
const  next=(playcode)=>{
  var nextcode=null;
  if(playcode=="play1"){
    nextcode='play2';
  }
  if(playcode=="play2"){
    nextcode='play3';
  }
  if(playcode=="play3"){
    nextcode='play4';
  }
  if(playcode=="play4"){
    nextcode='play1';
  }
  var play=  playc(nextcode);

  if(play.use==0){
    return  next(play.code);
  }else{
    return nextcode;
  }
}
const playc2 = (playcode,qcode)=>{
  var qs=playc(playcode).qizis;
  for(var i in qs){
     var q=qs[i];
     if(q.code==qcode){
       return q;
     }
  }
}
const playc = (playcode)=>{
  var play=null;
  if(playcode=="play1"){
    play=play1;
  }
  if(playcode=="play2"){
    play=play2;
  }
  if(playcode=="play3"){
    play=play3;
  }
  if(playcode=="play4"){
    play=play4;
  }
  return play;
};
const server = ws.createServer((connect)=>{


    connect.on('text',(str)=>{
    let data = JSON.parse(str);
    console.log("服务器接收："+connect.play+"str:"+str);
      if(connect.play==null){
        switch (data.type)
        {
          case 'insert':
            //链接上来的时候
            //发送比赛情况
            //发送是否可以参战斗
            // connect.sendText({playList:playList,isopen:isopen});
            sendServerOne(connect,{type:"insert",playList:playList,isopen:isopen});

            break;
          case 'select':
            if(isopen!=1){
              var play=playc(data.playcode);
              play.use=1;
              connect.play=data.playcode;
              sendServerOne(connect,{type:"select",code:data.playcode});
              sendServer({type:"selectOne",code:data.playcode,u:1});
            }
            break;
          case 'button':
            break;
          default:
            break;
        }

      }else{
        if(isopen!=1){
          switch (data.type)
          {
            case 'start':
              isopen=1;
              yaocode=next('play4');
              sendServer({type:"start",isopen:isopen,code:yaocode});
              break;

            case 'button':
              break;
            default:
              break;
          }
        }
      }
      if(yaocode ==connect.play){
        switch (data.type)
        {

          case 'yao':
            if(shaizi==0){
              var num =  Math.ceil(Math.random()*6);
              shaizi=num;
              console.log("yaoyaoyao");
              sendServer({type:"yao",num:shaizi,code:yaocode});
            }
            break;
          case 'selectBtn':

            var q= playc2(connect.play,data.playcode);
            if(q==null){
              return;
            }
            if((q.w==0&&q.h==0)&&shaizi==6){
              q.h=q.p;// 起飞
              shaizi=0;
            }else if((q.w==0&&q.h==0)&&shaizi!=6){
                 return
             } else{
              if(q.w==0){
                q.w=2;
              }
              q.w+=shaizi;
              if(q.w>13){
                q.h++;
                q.w=q.w-13;
              }
              if(q.h>4){
                q.h=1;
              }
              shaizi=0;
            }

            if(shaizi==6){
              //继续
            }else{
              yaocode=next(yaocode);
            }
            q=teshu(q)

            sendServer({type:"move",btn:q,code:yaocode});
            break;
          case 'button':
            break;
          default:
            break;
        }
      }


  });
  //关闭链接的时候
  connect.on('close',()=>{
    //离开房间
    if( connect.play!=null){
      var play=playc( connect.play);
      play.use=0;
      console.log("销毁玩家"+connect.play);
      var cunt=0;
      for(var i in  this.playList){

        if(p.use!=0){
          cunt++;
        }
      }
      if(cunt==0){
          isopen=0;
        playList=playList2;
      }else{
        sendServer({type:"selectOne",code: connect.play,u:0});
      }

    }
  });

  //错误处理
  connect.on('error',(err)=>{
    console.log(err);
  })
}).listen(3001,()=>{
  console.log("websocket")
});
