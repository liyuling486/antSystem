<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider v-model="collapsed" collapsible>
            <div class="logo" />
            <a-menu theme="dark" :default-selected-keys="['0']" mode="inline" @click="menuChange">
                <template v-for="item in menu">
                    <a-sub-menu v-if="item.subMenus" :key="item.menuId">
                        <span slot="title">
                            <a-icon type="user" />
                            <span>{{item.name}}</span>
                        </span>
                        <a-menu-item
                            v-for="item1 in item.subMenus"
                            :key="item1.menuId"
                        >{{item1.name}}</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item v-else :key="item.menuId">
                        <a-icon type="file" />
                        <span>{{item.name}}</span>
                    </a-menu-item>
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0" />
            <a-layout-content style="margin: 0 16px;">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item v-for="item in bread" :key="item.menuId">{{item.name}}</a-breadcrumb-item>
                </a-breadcrumb>
                <div
                    :style="{ padding: '24px', background: '#fff', minHeight: '360px',height: 'calc(100vh - 186px)',overflowY: 'auto' }"
                >
                    <keep-alive>
                        <router-view />
                    </keep-alive>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
export default {
    data() {
        return {
            menu: [],
            bread: [],
            siderVal: "",
            collapsed: false,
        };
    },
    watch: {},
    methods: {
        getBread: function (val, data) {
            for (const item of data) {
                if (item.menuId == val) {
                    return item;
                } else {
                    if (item.subMenus) {
                        let value = this.getBread(val, item.subMenus);
                        if (value) {
                            return value;
                        }
                    }
                }
            }
        },
        menuChange(e) {
            let bread = [];
            for (const item of e.keyPath) {
                bread.unshift(this.getBread(item, this.menu));
            }
            let name = bread[bread.length - 1].menuUrl;
            if (location.hash.slice(1) != name) {
                this.$router.push("/index" + name);
            }
            this.bread = bread;
        },
    },
    created() {
        console.log("-----");
        this.menu = this.$store.state.menus;
        this.menuChange({ keyPath: ["0"] });
    },
};
</script>

<style>
#components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
</style>
