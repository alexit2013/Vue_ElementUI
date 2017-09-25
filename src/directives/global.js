/**
 * Created by Administrator on 2017-09-20 0020.
 */

import Vue from 'vue'
import store from 'store/index'
import router from 'router/index'
import './global.css'

/*
 * 点击元素后，添加一个tab
 * 指令参数：{title: '首页', name: '/main'}
 * 示例：
 * <li v-add-tab="{title: '首页', name: '/main'}">点我添加一个名为"首页"的标签页</li>
 */
Vue.directive('addTab', {
  inserted: (el, binding) => {
    let $el = $(el);
    let val = binding.value;
    $el.click(function () {
      store.dispatch('pushTab', {title: val.title, name:val.name});
      router.push('/OperatorManage');
    });
  }
});

/* 菜单展开/收缩 */
Vue.directive('menuShrink', {
    inserted: (el, binding) => {
        const $el = $(el);
        const val = binding.value;
        const isBtn = $el.hasClass('main-menu-shrink-btn');
        const $menuContainer = $('.main-menu-container');
        const $mainContainer = $('.main-body-content');
        const $menuShrink = $menuContainer.find('.main-menu-shrink-btn');
        /*const $titleAndIcon = $menuContainer.find('.el-submenu__title span, .el-submenu__icon-arrow.el-icon-arrow-down');
        $titleAndIcon.css({'transition':'.3s', 'opacity':1});*/
        $el.click(function () {

            if(!store.getters.menuShrink && isBtn){
                $menuContainer.css('width', '4rem');
                $mainContainer.css({'width':'95.4%', 'margin-left':'4rem'});
                $menuShrink.removeClass('rotate-0');
                $menuShrink.addClass('rotate-90');
                store.dispatch('changeShrink');
                /*$titleAndIcon.removeClass('opcity-1');
                $titleAndIcon.addClass('opcity-0');*/
            }else if(store.getters.menuShrink){
                $menuContainer.css('width', '12.5rem');
                $mainContainer.css({'width':'85.4%', 'margin-left':'12.5rem'});
                $menuShrink.removeClass('rotate-90');
                $menuShrink.addClass('rotate-0');
                store.dispatch('changeShrink');
                /*$titleAndIcon.removeClass('opcity-0');
                $titleAndIcon.addClass('opcity-1');*/
            }

        });
    }
});

Vue.directive('menuHover', {
    inserted: (el, binding) => {
        const $el = $(el);
        const val = binding.value;
        const $subMenu = $el.find('ul.el-menu');
        const $cloneMenu = $subMenu.clone(true);
        let timeFlag;
        $el.hover(
            function () {
                if(!store.getters.menuShrink){return}
                $cloneMenu.hover(function () {
                    timeFlag && clearTimeout(timeFlag);
                    $(this).css('display','block');
                }, function () {
                   $(this).css('display','none');
                });
                $('body').append($cloneMenu.css({'display':'block', 'position':'absolute', 'top':$el.offset().top, 'left':'5rem'}));
            },
            function () {
                if(!store.getters.menuShrink){return}
                timeFlag = setTimeout(function () {
                    $cloneMenu.remove();
                },100)
            }
        );
    }
});


