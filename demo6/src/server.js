const http = require("http");
const ws = require('nodejs-websocket');
//12  [0,12][1,12][2,12][3,12]
//声明4个玩家
var play1={
  use:0,//是否有人使用
  admin:0,//房主
  name:"玩家1",
  code:"play1",
  qizis:[
    {p:1,h:1,w:1},
    {p:1,h:1,w:1},
    {p:1,h:1,w:1},
    {p:1,h:1,w:1},
    {p:1,h:1,w:1},
    {p:1,h:1,w:1},
  ],
  zb:0,//是否准备
};
var isopen=0;//房间状态； 1 开始， 0准备中
var playList=[];
playList.push(play1);
//封装发送消息的函数(向每个链接的用户发送消息)
const sendServer = (data)=>{

  var   str=JSON.stringify(data);
  console.log(str);
  server.connections.forEach((connect)=>{
    connect.sendText(str)
  })
};
const sendServerOne = (connect,data)=>{
  var   str=JSON.stringify(data);
  console.log(str);
  connect.sendText(str);
};
const server = ws.createServer((connect)=>{

    connect.on('text',(str)=>{
    let data = JSON.parse(str);
    console.log(data);
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
        var play=null;
        if(data.playcode=="play1"){
          play=play1;
        }
        if(data.playcode=="play2"){
          play=play2;
        }
        if(data.playcode=="play3"){
          play=play3;
        }
        if(data.playcode=="play4"){
          play=play4;
        }
        play.use=0;
        connect.play=play;
        sendServer();
        break;
      case 'button':

        break;
      default:
        break;
    }
  });
  //关闭链接的时候
  connect.on('close',()=>{

    //离开房间
    sendServer({
      type:'serverInformation',
      message:'离开房间'
    });

  });

  //错误处理
  connect.on('error',(err)=>{
    console.log(err);
  })
}).listen(3001,()=>{
  console.log("websocket")
});
