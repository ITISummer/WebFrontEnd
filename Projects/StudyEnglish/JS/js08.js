/* 实现轮播图效果 */
window.onload = function () {
    //顶部焦点图切换
    function hotChange() {
        var current_index = 0;
        var timer = window.setInterval(autoChange, 3000);
        // 获取 banner ul 下的图片
        var pic_li = document.getElementById('banner_pic').getElementsByTagName('li');
        // 获取 banner ol 下的按钮
        var button_li = document.getElementById('button').getElementsByTagName('li');
        for (var i = 0; i < button_li.length; i++) {
            //给鼠标悬浮事件绑定响应函数
            button_li[i].onmouseover = function () {
                //防止有多个定时器
                if (timer) {
                    clearInterval(timer);
                }
                //设置图片自动轮播
                for (var j = 0; j < pic_li.length; j++) {
                    //?
                    if (button_li[j] == this) {
                        current_index = j;
                        //切换按钮样式
                        button_li[j].className = 'current';//button设置为 current 样式
                        //切换对应的图片，设置图片显示为 none(不显示)
                        pic_li[j].className = 'current';//pic设置为 current 样式
                    } else {
                        pic_li[j].className = 'pic';//pic设置为 pic 样式
                        button_li[j].className = 'but';//button设置为 but 样式
                    }
                }
            }
            //设置按钮自动轮播
            button_li[i].onmouseout = function () {
                timer = setInterval(autoChange, 3000);
            }
        }

        //实现图片与按钮的切换
        function autoChange() {
            ++current_index;
            if (current_index == button_li.length) {
                current_index = 0;
            }
            for (var i = 0; i < button_li.length; i++) {
                if (i == current_index) {
                    button_li[i].className = 'current';
                    pic_li[i].className = 'current';
                } else {
                    button_li[i].className = 'but';
                    pic_li[i].className = 'pic';
                }
            }
        }
    }
    hotChange();


    //实现简介无缝滚动效果
    function school() {
        // 定义滚动速度
        var speed = 50;
        var imgbox = document.getElementById('imgbox');
        //复制一个 <span>，用于无缝滚动
        imgbox.innerHTML += imgbox.innerHTML;
        //获取两个 span 元素
        var span = imgbox.getElementsByTagName('span');
        //启动定时器，调用滚动函数
        var timer1 = window.setInterval(marquee, speed);
        imgbox.onmouseover = function () {
            clearInterval(timer1);
        };
        imgbox.onmouseout = function () {
            timer1 = setInterval(marquee, speed);
        };
        //滚动函数定义
        function marquee() {
            //当第 1 个 <span> 被完全卷出时
            if (imgbox.scrollLeft > span[0].offsetWidth) {
                //将被卷起的内容归零
                imgbox.scrollLeft = 0;
            } else {
                //否则向左滚动
                ++imgbox.scrollLeft;
            }
        }

    }
    school();



    //实现课程特色栏无缝滚动效果
    function tableChange() {
        var lis = document.getElementById('SwitchNav').getElementsByTagName('li');
        var spans = document.getElementById('SwitchBigPic').getElementsByTagName('span');
        var current_index = 0;//保存当前焦点元素的索引
        var timer = setInterval(autoChange, 3000);
        for (var i = 0; i < lis.length; i++) { //遍历 lis，为各<li>元素添加事件
            lis[i].onmouseover = function () {
                if (timer) {
                    clearInterval(timer);
                }
                for (var i = 0; i < lis.length; i++) {
                    if (lis[i] == this) {
                        spans[i].className = 'sp';
                        current_index = i;
                    } else {
                        spans[i].className = '';
                    }
                }
            }
            lis[i].onmouseout = function () {
                timer = setInterval(autoChange, 3000); //启动定时器，恢复图片自动切换
            }
        }
        function autoChange() {
            ++current_index;
            if (current_index == lis.length) {//当索引自增达到上限时，索引归0
                current_index = 0;
            }
            for (var i = 0; i < lis.length; i++) {
                spans[i].className = '';
            }
            spans[current_index].className = 'sp';
        }
    }
    tableChange();
}
