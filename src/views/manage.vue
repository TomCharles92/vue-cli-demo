<template>
    <el-row style="height: 100%;">
        <!--导航区-->
        <el-col :span="4" style="min-height: 100%; background-color: #324057;">
            <!--当前激活菜单的 index-->
            <!--是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转-->
            <el-menu :default-active="defaultActive" router>
                <!--单个可点的菜单，相当于文件-->
                <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
                <!--子菜单，相当于文件夹-->
                <el-submenu index="2">
                    <!--template slot="title" 相当于直接作为 submenu 的内容用来显示-->
                    <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                    <el-menu-item index="userList">用户列表</el-menu-item>
                    <el-menu-item index="shopList">商家列表</el-menu-item>
                    <el-menu-item index="foodList">食品列表</el-menu-item>
                    <el-menu-item index="orderList">订单列表</el-menu-item>
                    <el-menu-item index="adminList">管理员列表</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
                    <el-menu-item index="addShop">添加商铺</el-menu-item>
                    <el-menu-item index="addGoods">添加商品</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                    <el-menu-item index="visitor">用户分布</el-menu-item>
                    <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-edit"></i>编辑</template>
                    <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
                    <el-menu-item index="vueEdit">文本编辑</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-setting"></i>设置</template>
                    <el-menu-item index="adminSet">管理员设置</el-menu-item>
                    <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title"><i class="el-icon-warning"></i>说明</template>
                    <el-menu-item index="explain">说明</el-menu-item>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title"><i class="el-icon-warning"></i>测试</template>
                    <el-menu-item index="test">测试子页</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>

        <!--右视图区-->
        <el-col :span="20" style="height: 100%; overflow: auto; background: lightblue;">
            <router-view></router-view>
        </el-col>

    </el-row>
    
</template>

<script>
    export default {
        name: "manage",
        computed: {
            defaultActive: function(){
                return this.$route.path.replace('/', '');
            }
        }
    }
</script>

<style scoped>

</style>