/**
 * Created by onlystar on 2017/1/21.
 */
/////////////////////右侧点击和导航栏单击事件//////////////////
$(function () {
    //右侧点击事件
    /*   $("#aside").on("click", "a", (e) => {
     e.preventDefault();
     $(e.target).addClass("current").siblings().removeClass("current");
     //页面跳转
     var i = $("#aside>a").index($(e.target));
     $(`.navbar-collapse>ul a:eq(${i})`).parent().addClass("active").siblings().removeClass("active");
     switchCur();
     });*/
    //导航栏鼠标点击事件
    /*   $(".navbar-collapse>ul").on("click", "a", function (e) {
     //阻止默认行为
     e.preventDefault();
     //导航栏单击状态
     var i = $(".navbar-collapse>ul a").index($(this));
     $(`#aside>a:eq(${i})`).trigger("click");
     });*/
});

/////////////////////导航栏游标效果//////////////////
//导航栏鼠标指向样式
$(function thisBar() {
    /*鼠标悬停--下标划过   事件委托*/
    $('#navMenu ul a').on('mouseenter', function () {
        //获得父元素ul相对浏览器的左侧距离
        var thisparent = $(this).parent().parent().offset().left,
            //获得当前a元素相对ul的左侧距离
            thisLeft = $(this).offset().left - thisparent + 15,
            thisWidth = $(this).width();
        // console.log('当前元素的X：'+$(this).offset().left);
        //console.log('父元素的X：'+thisparent);
        //console.log("当前元素的宽：" + thisWidth);
        $('.active-bar').stop().animate({
            left: thisLeft,
            width: thisWidth,
            opacity: 1
        }, 600);
    });
    /*鼠标离开--下标返回*/
    $('#navMenu ul').mouseleave(function () {
        $('.active-bar').stop().animate({
            left: getCur().curLeft,
            width: getCur().curWidth,
            opacity: 1
        }, 500);
    });
});

// 获取当前元素
function getCur() {
    var curElem = $('#navMenu ul').find('.active').size() > 0 ? $('#navMenu ul').find('.active a') : 0, //获取active a样式元素
        parentLeft = $('#navMenu ul').offset().left, //父元素的X值
        curLeft = curElem ? curElem.offset().left - parentLeft + 15 : 0, //active元素实际left值
        curWidth = curElem ? curElem.width() : 0; //当前li元素的宽
    return {
        curElem: curElem, parentLeft: parentLeft, curLeft: curLeft, curWidth: curWidth,
    };
}

//换屏切换效果
function switchCur() {
    $('.active-bar').animate({
        left: getCur().curLeft,
        width: getCur().curWidth,
        opacity: 1
    }, 300);
}
/////////////////////7个动画//////////////////
$flag1 = true;
function sectionOne() {
    if ($flag1) {
        $('.line-top').animate({"left": 0, "opacity": 1}, 1000);
        $('.line-bottom').animate({"left": 0, "opacity": 1}, 500, function () {
            $('#first').animate({"opacity": 1}, 500, function () {
                $('#second').animate({"opacity": 1}, 500, function () {
                    $('#third').animate({"opacity": 1}, 1000, function () {
                        $(".line-top").animate({"left": '-500px', "opacity": 0});
                        $(".line-bottom").animate({"left": '510px', "opacity": 0});
                        $(".line-top2").animate({"left": '-1px', "opacity": 1},500);
                        $(".line-bottom2").animate({"left": '-1px', "opacity": 1},500);
                        $(".line-left2").animate({"top": '-1px', "opacity": 1},500);
                        $(".line-right2").animate({"top": '-1px', "opacity": 1},500);
                        $(".look").animate({"opacity": 1}, 1000, function () {
                            $flag1 = false;
                        });
                    });
                });
            });
        });
    } else {
        return false;
    }
}

function sectionTwo() {
    /*图像logo动画*/
    $('.user-pic').css({"transform": "scale(1) rotate(360deg)"});
    $('.self-info p').animate({"opacity": 1, "left": "0px"}, 1000, function () {
        $('.education h1').animate({"opacity": 1}, 500, function () {
            $('.high-school div').animate({"left": "0px", "opacity": 1}, 500, function () {
                $('.icon-check-circle').animate({"opacity": 1}, function () {
                    $('.line.lb').animate({"opacity": 1}, function () {
                        $('.line.lt').animate({"opacity": 1}, function () {
                            $('.icon-circle').animate({"opacity": 1}, function () {
                                $('.college div').animate({"left": "0px", "opacity": 1}, 500, function () {
                                    $('.basic-info').animate({"opacity": 1}, 1000);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function sectionThree() {
    $('.three .title').animate({"opacity":1.0},1000,function () {
        $('li .simboo').css("transform", "scale(1.0,1.0)");
        $('.practice-item.item1').animate({'opacity': 1}, 1000, function () {
            $('.practice-item.item2').animate({'opacity': 1}, 2000);
        });
    });
}

function sectionFour() {
    $('.four .title').animate({"opacity": 1.0},1000, function () {
        $('.four .content').animate({"opacity": 1.0},2000,function () {
            $('.four .content').animate({"marginTop": 0},1000)
        });
    });
}

function sectionFive() {
    $('.five .title').animate({"opacity": 1}, 1000, function () {
        $('.five ul li .works-item-box').css("transform", "scale(1.0) rotateY(0deg)");
    });
}

function sectionSix(skill) {
    $('.six  .title').animate({"opacity": 1.0}, 1000, function () {
        $('.six .detail').animate({"opacity": 1.0},function () {
            for (var i = 0; i < skill.length; i++) {
                $('.six .detail>div:eq(' + i + ') p').animate({"width": skill[i].grade}, 3000, function () {
                    $('.six .skill-detail').animate({"opacity": 1.0}, 1000, function () {
                    });
                });
            }
        })
    })
}

function sectionSeven() {
    $('.letter').animate({"top": 0}, 1500, function () {
        $('.stamp').animate({"opacity": 1}, 1000, function () {
            $('.hand').animate({"opacity": 1}, 1000, function () {
                $('.stamp').animate({"right": "60px"}, 1000);
                $('.hand').animate({'right': '-360px'}, 1000, function () {
                    $('.hand').animate({'right': '-1000px'}, 1000, function () {
                        $('.hand').animate({'opacity': 0}, 1000);
                    });
                });
            });
        });
    });
}


/////////////////////模块初始化//////////////////
$(document).ready(function () {
    //loading动画加载完成关闭
    $(".status").fadeOut();
    $(".preloader").delay(1000).fadeOut("slow");
    //初始化导航栏游标
    switchCur();
    //初始化视频
    var video=$('#video').get(0);
    video.addEventListener("canplaythrough",function () {
        $('#video').get(0).play();
    });
    //初始化技能
    var skill = [
        {name: "HTML5", color: "#F1652A", grade: "90%"},
        {name: "CSS3", color: "#409AD8", grade: "90%"},
        {name: "JavaScript", color: "#ECB12C", grade: "75%"},
        {name: "JQUERY", color: "#75B143", grade: "80%"},
        {name: "BOOTSTRAP", color: "#9686B2", grade: "70%"},
        {name: "PhotoShop", color: "#031A3A", grade: "80%"},
        {name: "PHP", color: "#D65103", grade: "60%"},
        {name: "MYSQL", color: "#B1202A", grade: "65%"},
    ];
    var html = '';
    for (var i = 0; i < skill.length; i++) {
        html += `<div class="canvas_con">
            <div class="text_con">
            <p style="background:${skill[i].color}">${skill[i].name}</p>
            </div>
            <span class="percent">${skill[i].grade}</span>
            </div> `;
    }
    $('.six .detail').html(html);
    //fullpage初始化配置
    var full = $('#fullpage').fullpage({
        resize: false,//字体是否随着窗口缩放而缩放
        anchors: ['master', 'about', 'practice', 'experience', 'works', 'skill', 'contact'],//定义锚链接
        menu: "#navMenu",
        scrollBar: false,
        fitToSection: true,
        scrollOverflow: true,//内容超过满屏后是否显示滚动条
        afterLoad: function (anchorLink, index) {
            $('.navbar-fixed-top').addClass('min');
            $('#navMenu li').removeClass('active');
            switch (index) {
                case 1: {
                    $('.navbar-fixed-top').removeClass('min');
                    $('#navMenu li:nth-child(1)').addClass('active');
                    /*
                    var video=$('#video').get(0);
                    if(video&&video.readyState===4){
                        $('#video').get(0).play();
                    }
                    */
                    sectionOne();
                    break;
                }
                case 2: {
                    $('#navMenu li:nth-child(2)').addClass('active');
                    sectionTwo();
                    break;
                }
                case 3: {
                    $('#navMenu li:nth-child(3)').addClass('active');
                    sectionThree();
                    break;
                }
                case 4: {
                    $('#navMenu li:nth-child(4)').addClass('active');
                    sectionFour();
                    break;
                }
                case 5: {
                    $('#navMenu li:nth-child(5)').addClass('active');
                    sectionFive();
                    break;
                }
                case 6: {
                    $('#navMenu li:nth-child(6)').addClass('active');
                    sectionSix(skill);
                    break;
                }
                case 7: {
                    $('#navMenu li:nth-child(7)').addClass('active');
                    sectionSeven();
                    break;
                }
            }
            switchCur();
        },
        onLeave: function (index, nextIndex, direction) {
            $('.navbar-fixed-top').addClass('min');
            $('#navMenu li').removeClass('active');
            $("#aside a:nth-child(" + nextIndex + ")").addClass("current").siblings().removeClass("current");
            switch (nextIndex) {
                case 1: {
                    $('.navbar-fixed-top').removeClass('min');
                    $('#navMenu li:nth-child(1)').addClass('active');
                    break;
                }
                case 2: {
                    $('#navMenu li:nth-child(2)').addClass('active');
                    break;
                }
                case 3: {
                    $('#navMenu li:nth-child(3)').addClass('active');
                    break;
                }
                case 4: {
                    $('#navMenu li:nth-child(4)').addClass('active');
                    break;
                }
                case 5: {
                    $('#navMenu li:nth-child(5)').addClass('active');
                    break;
                }
                case 6: {
                    $('#navMenu li:nth-child(6)').addClass('active');
                    break;
                }
                case 7: {
                    $('#navMenu li:nth-child(7)').addClass('active');
                    break;
                }
            }
            switchCur();
        }
    });

    console.log('听说您在前端寻找一匹千里马？');
    console.log("这是他的邮箱:%c 991923257@qq.com", "color:red");
    console.log("要不打个电话试试:%c 135-9375-6154", "color:red");
});

