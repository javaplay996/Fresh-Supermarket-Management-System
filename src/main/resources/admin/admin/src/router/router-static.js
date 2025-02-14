import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import rukuxinxi from '@/views/modules/rukuxinxi/list'
    import news from '@/views/modules/news/list'
    import shengxianchanpin from '@/views/modules/shengxianchanpin/list'
    import chanpinfenlei from '@/views/modules/chanpinfenlei/list'
    import shengxiancangku from '@/views/modules/shengxiancangku/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussshengxianchanpin from '@/views/modules/discussshengxianchanpin/list'
    import orders from '@/views/modules/orders/list'
    import config from '@/views/modules/config/list'
    import caigoudandengji from '@/views/modules/caigoudandengji/list'
    import chukuxinxi from '@/views/modules/chukuxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/rukuxinxi',
        name: '入库信息',
        component: rukuxinxi
      }
      ,{
	path: '/news',
        name: '新闻公告',
        component: news
      }
      ,{
	path: '/shengxianchanpin',
        name: '生鲜产品',
        component: shengxianchanpin
      }
      ,{
	path: '/chanpinfenlei',
        name: '产品分类',
        component: chanpinfenlei
      }
      ,{
	path: '/shengxiancangku',
        name: '生鲜仓库',
        component: shengxiancangku
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discussshengxianchanpin',
        name: '生鲜产品评论',
        component: discussshengxianchanpin
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/caigoudandengji',
        name: '采购单登记',
        component: caigoudandengji
      }
      ,{
	path: '/chukuxinxi',
        name: '出库信息',
        component: chukuxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
