new Vue({
    el:"#main",
    data:{
        lists:""
    },
    mounted:function() {
        this.$http.get('json/data.json').then(function (res) {
            console.log(res.body);
            this.lists = res.body;
        }, function () {
            console.log('请求失败处理');
        });
    }//mouted
})//new vue



var num_span=document.querySelector(".num span");
var num_p=document.querySelector(".num p");
var num_i=document.querySelector(".num i")
num_span.onclick=function(){
    if(num_p.style.display==="block"){
        num_p.style.display="none"
        num_i.setAttribute("class","fa fa-caret-up")
    }else{
        num_p.style.display="block";
        num_i.setAttribute("class","fa fa-caret-down");
    }
}

var num=document.querySelectorAll(".kuang");
for(var i=0;i<num.length;i++){
    num[i].onclick=function(){
        if(this.style.background==""){
            this.style.background="#337ab7";
        }else{
            this.style.background="";
        }
    }
}

