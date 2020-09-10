<style scoped>
.ant-carousel >>> .slick-slide {
    text-align: center;
    height: 200px;
    line-height: 200px;
    background: #364d79;
    overflow: hidden;
}

.slick-slide h1 {
    color: #fff;
}
.carouselBox {
    margin-bottom: 20px;
}
.carouselBox .arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    opacity: 0.3;
    color: #fff;
}
.carouselBox .arrow:hover {
    opacity: 1;
}
.carouselBox .arrow:before {
    display: none;
}
.ant-descriptions >>> .ant-descriptions-row .ant-descriptions-item-content {
    word-break: break-all;
}
.ant-descriptions >>> .ant-descriptions-row .ant-descriptions-item-label {
    word-break: keep-all;
}
</style>
<template>
    <div>
        <div class="carouselBox">
            <a-carousel arrows>
                <div slot="prevArrow" class="arrow" style="left: 10px;zIndex: 1;">
                    <a-icon type="left-circle" />
                </div>
                <div slot="nextArrow" class="arrow" style="right: 10px;zIndex: 1;">
                    <a-icon type="right-circle" />
                </div>
                <div>
                    <h1>11111</h1>
                </div>
                <div>
                    <h1>22222</h1>
                </div>
                <div>
                    <h1>33333</h1>
                </div>
                <div>
                    <h1>44444</h1>
                </div>
                <div>
                    <h1>55555</h1>
                </div>
            </a-carousel>
        </div>
        <a-collapse v-model="activeKey" :expand-icon-position="expandIconPosition" accordion>
            <a-collapse-panel key="1" header="个人信息">
                <a-descriptions title="User Info" bordered :column="4">
                    <a-descriptions-item label="姓名" style="width: 300px">李追追1</a-descriptions-item>
                    <a-descriptions-item label="性别">女</a-descriptions-item>
                    <a-descriptions-item label="手机号">13000000000</a-descriptions-item>
                    <a-descriptions-item label="政治面貌">党员</a-descriptions-item>
                    <a-descriptions-item label="住址" :span="2">浙江省杭州市xxxxxxxx</a-descriptions-item>
                    <a-descriptions-item label="身份证号" :span="2">230xxxxxxxxxxxx</a-descriptions-item>
                    <a-descriptions-item
                        label="备注"
                    >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</a-descriptions-item>
                </a-descriptions>
                <a-icon slot="extra" type="setting"></a-icon>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="折叠标题2">
                <p>{{text}}</p>
                <a-icon slot="extra" type="setting"></a-icon>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="折叠标题3" disabled>
                <p>{{text}}</p>
                <a-icon slot="extra" type="setting"></a-icon>
            </a-collapse-panel>
        </a-collapse>
        <Table></Table>
    </div>
</template>
<script>

import Table from '@/components/Table'
export default {
    components: {
        Table
    },
    data() {
        return {
            expandIconPosition: "left",
            text: "折叠文字啊啊啊啊啊啊",
            activeKey: 2,
        };
    },
    method: {
    },
    created() {},
};
</script>