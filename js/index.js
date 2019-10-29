   $(window).scrollTop(0)

/*显示产品列表函数*/
function showProductsAsideCategorys(cid){

    $("li.nav-item[cid="+cid+"]").css("background-color","white");
    $("li.nav-item[cid="+cid+"] a").css("color","#87CEFA");
    $("li.nav-item[cid="+cid+"]").css("color","#87CEFA");
    $("div.pannel-con[cid="+cid+"]").show();
}

/*隐藏产品列表函数*/
function hideProductsAsideCategorys(cid){
    $("li.nav-item[cid="+cid+"]").css("background-color","rgba(0, 0, 0, 0)");
    $("li.nav-item[cid="+cid+"] a").css("color","#fff");
    $("li.nav-item[cid="+cid+"]").css("color","#fff");
    $("div.pannel-con[cid="+cid+"]").hide();
}

/*当鼠标移入菜单项的时候，显示对应的产品列表*/
$("li.nav-item").mouseenter(function(){
    var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
});


/*当鼠标移出菜单项的时候，显示对应的产品列表*/
$("li.nav-item").mouseleave(function(){
    var cid = $(this).attr("cid");
    hideProductsAsideCategorys(cid);

});
/*当鼠标移入产品列表的时候，显示对应的产品列表*/
$("div.pannel-con").mouseenter(function(){
    var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
       
});
/*当鼠标移出产品列表的时候，隐藏对应的产品列表*/
$("div.pannel-con").mouseleave(function(){
        var cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
});

/*竖直导航*/
t0=$(".brandWall-con").offset().top
t1=$(".floor-line-con[cid=1]").offset().top
t2=$(".floor-line-con[cid=2]").offset().top
t3=$(".floor-line-con[cid=3]").offset().top
t4=$(".floor-line-con[cid=4]").offset().top
t5=$(".floor-line-con[cid=5]").offset().top
t6=$(".floor-line-con[cid=6]").offset().top
t7=$(".floor-line-con[cid=7]").offset().top
t8=$(".wonderful-con").offset().top

/*console.log($(".floor-line-con[cid=7]").offset())*/

    window.onscroll=function(){

t=$(window).scrollTop()
    $(".as-shelter").removeClass("show")
    $(".as-total-container").removeClass("show")
if(300<=t){
    $(".mui-lift").fadeIn()
     $(".mui-lift-nav").removeClass("mui-lift-cur-nav")
if((t0+50)<=t){
    $(".as-shelter").addClass("show")
    $(".as-total-container").addClass("show")
}
if((t1-300)<=t && t<=(t2-300)){
    $(".mui-lift-nav[cid=1]").addClass("mui-lift-cur-nav")
}
if((t2-300)<=t && t<=(t3-300)){
    $(".mui-lift-nav[cid=2]").addClass("mui-lift-cur-nav")
}
if((t3-300)<=t && t<=(t4-300)){
    $(".mui-lift-nav[cid=3]").addClass("mui-lift-cur-nav")
}
if((t4-300)<=t && t<=(t5-300)){
    $(".mui-lift-nav[cid=4]").addClass("mui-lift-cur-nav")
}
if((t5-300)<=t && t<=(t6-300)){
    $(".mui-lift-nav[cid=5]").addClass("mui-lift-cur-nav")
}
if((t6-300)<=t && t<=(t7-300)){
    $(".mui-lift-nav[cid=6]").addClass("mui-lift-cur-nav")
}
if((t7-300)<=t && t<=(t8-300)){
    $(".mui-lift-nav[cid=7]").addClass("mui-lift-cur-nav")
}
if((t8)<=t){
    $(".mui-lift-nav[cid=8]").addClass("mui-lift-cur-nav")
}
}

else {
      $(".mui-lift").fadeOut() 
}
}

/*        $(window).on("scroll", function () {
            var t = $(this).scrollTop();
            if (t >= 300) {
                $("xxxx").hide()
            } else {
                $("xxxx").show()
            }
        })*/

function scrollmain(cid){
tt=$(".floor-line-con[cid="+cid+"]").offset().top

$("html,body").animate({scrollTop: tt-70},300)

}

function scrolleigth(){

$("html,body").animate({scrollTop: t8},300)

}


$(".mui-lift-nav").click(function(){

        var cid = $(this).attr("cid");
        if(cid==8){
        scrolleigth()
        }
        else if(cid==9){
        $("html,body").animate({scrollTop: 0},300)
        }
        else{
        scrollmain(cid);
        }

})


/*天猫超市滑动绿色呈现*/
/*
$(".floor-tab-head li").mouseover(function(){

     $(".floor-tab-head li").removeClass("floor-current-tab") ;
    $(this).addClass("floor-current-tab");
    var cid = $(this).attr("cid");
    hidegreen(cid);
    lol
}
)*/
/*显示*/
function hidegreen(cid){
    $(".floor-tab-detail").hide()
    $(".floor-tab-detail[cid="+cid+"]").show();
}

var num = 0

var ali = document.getElementsByClassName("floor-tab-head")[0].getElementsByTagName("li");
var atab = document.getElementsByClassName("floor-tab-detail")
for (var i = 0; i < ali.length; i++) {
    ali[i].index = i;
    ali[i].onmouseenter = function () {
        num = this.index;
        btnMoveFn();
        clearInterval(timer);
   
    }
    ali[i].onmouseleave = function () {
        clearInterval(timer);
        Time();
    }
}

/*设置定时器运行的函数*/

function btnMoveFn() {
    for (var j = 0; j < ali.length; j++) {
        ali[j].className = "";
        atab[j].style.display = "none";
    }
    ali[num].className = "floor-current-tab";
    atab[num].style.display = "block";
}



function Time() {
    timer = setInterval(function () {
        num++
        if (num >= ali.length) {
            num = 0
        }

        btnMoveFn()
    }, 2000)
}
Time(); /*调用定时器*/



/*console.log($(".floor-line-con[cid=7]").offset())*/
/*竖直导航栏*/
/*
var aprof = document.getElementsByClassName("mui-mbar-tab-prof")[0]
var alogo = document.getElementsByClassName("mui-mbar-tab-logo-prof")[0]
var anologin = document.getElementsByClassName("mui-mbar-tab-cart-nologin")[0]

alogo.onmouseover= function(){

      aprof.classList.add("mui-mbar-tab-hover")
     $(".mui-mbar-tab-tip").animate({
    right:'35px',
    opacity:'1'},"slow");
     $(".mui-mbar-tab-tip").css("display","block");
}
alogo.onmouseout = function(){
      aprof.classList.remove("mui-mbar-tab-hover")
    $(".mui-mbar-tab-tip").animate({
    right:'70px',
    opacity:'0'},"slow",function(){ $(".mui-mbar-tab-tip").css("display","none")});
;
}

anologin.onmouseover= function(){
      anologin.classList.add("mui-mbar-tab-hover")
      $(this).$(".mui-mbar-tab-logo-cart").removeClass("mui-mbar-tab-logo-nologin-cart")
}
anologin.onmouseout= function(){
      anologin.classList.remove("mui-mbar-tab-hover")
$(".mui-mbar-tab-logo-cart").addClass("mui-mbar-tab-logo-nologin-cart")
}
*/
$(".mui-mbar-tab").mouseover(   //鼠标指针位于 <p> 元素上方
    function(){
        $(this).addClass("mui-mbar-tab-hover")//添加一个类
        var mno=$(this).hasClass("mui-mbar-tab-hover")// 检查元素是否包含 "intro" 类
        if(mno==true){
        $(this).children(".mui-mbar-tab-logo-cart").removeClass("mui-mbar-tab-logo-nologin-cart")
        }
    $(this).children(".mui-mbar-tab-tip").animate({
    right:'35px',
    opacity:'1'},"slow");
    $(this).children(".mui-mbar-tab-tip").css("display","block");
  

        }

    )
$(".mui-mbar-tab").mouseout(
    function(){
        $(this).removeClass("mui-mbar-tab-hover")
        var mno=$(this).hasClass("mui-mbar-tab-hover")
        if(mno==false){
        $(this).children(".mui-mbar-tab-logo-cart").addClass("mui-mbar-tab-logo-nologin-cart")
        }

    $(this).children(".mui-mbar-tab-tip").animate({
    right:'70px',
    opacity:'0'},"slow",function(){ $(this).css("display","none")});


        }

    )




