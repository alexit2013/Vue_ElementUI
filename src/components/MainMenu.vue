<template>

    <div class="main-menu-container">
        <div class="main-menu-scroll">
            <div class="main-menu-shrink">
                <i v-menu-shrink class="fa fa-bars main-menu-shrink-btn" aria-hidden="true"></i>
            </div>
            <el-menu class="main-menu" :collapse="$store.getters.menuShrink" @select="menuSelected" :default-active="$route.path" :unique-opened="true" :router="true" theme="dark">
                <template v-for="(item, pIndex) in menus">
                    <el-submenu v-menu-shrink v-if="item.subMenu" :index="pIndex+1+''" :key="item.title">
                        <template slot="title"><i class="menu-icon" :class="[item.menuIcon.split(' ')[0],item.menuIcon.split(' ')[1]]" aria-hidden="true"></i><span>{{item.title}}</span></template>
                        <el-menu-item v-for="(subItem, cIndex) in item.subMenu" :key="subItem.title" :index="subItem.linkPath">{{subItem.title}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="item.linkPath"><i class="menu-icon" :class="[item.menuIcon.split(' ')[0],item.menuIcon.split(' ')[1]]" aria-hidden="true"></i><span>{{item.title}}</span></el-menu-item>
                </template>
            </el-menu>
        </div>
    </div>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MainMenu',
  data () {
    return {}
  },
  mounted: function () {

    // 刷新&赋值
    if(!this.menus){
      const menus = ls.get('menus');
      menus && menus.length > 0 && this.setMenus(menus);
    }

    // 自定义透明滚动条
    $('.main-menu-scroll').slimScroll({
      width: '100%',
      height: '100%',
      color: 'transparent',
      railColor: 'transparent',
      railVisible: true,
      alwaysVisible: true
    });
  },
  computed: {
    ...mapGetters([
        'menus'
    ])
  },
  methods: {
    ...mapActions([
      'setMenus',
      'pushTab'
    ]),
    menuSelected: function (indexPath) {
      for (var item of this.menus) {
        if (item.subMenu && item.subMenu.length > 0) {
          for (var sItem of item.subMenu) {
            if (sItem.linkPath === indexPath) {
              this.pushTab({name: indexPath, title: sItem.title});
              return;
            }
          }
        } else {
          if (item.linkPath === indexPath) {
            this.pushTab({name: indexPath, title: item.title});
            return;
          }
        }

      }
    }

  }
}
</script>

<style scoped>

    /* 菜单组件容器,展开/收缩：12.5rem/4rem */
    .main-menu-container {
        width: 12.5rem;
        height: 90.5%;
        max-height: 90.5%;
        background-color: #324157;
        transition: .38s;
    }

    /* 菜单组件 */
    .main-menu {
        position: relative;
        width: 100%;
        height: 100%;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        user-select: none;
    }

    /* 菜单图标 */
    .menu-icon {
        display: inline-block;
        font-size: 18px;
        margin: 0 10px 0 5px;
        width: 18px;
        height: 18px;
    }

    /* 收缩按钮容器*/
    .main-menu-shrink{
        position: relative;
        height: 3rem;
        background-color: #324157;
        border-bottom: 1px dashed rgba(191,203,217,1);
    }

    /* 收缩按钮 */
    .main-menu-shrink-btn{
        position: absolute;
        right: 1.2rem;
        font-size: 22px;
        color: #bfcbd9;
        line-height: 3rem;
        display: inline-block;
        cursor: pointer;
        transition: .38s;
    }

</style>
