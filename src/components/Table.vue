<template>
    <div>
        <a-table :columns="columns" :data-source="data" :row-key="record => record.id" bordered>
            <!-- 搜索框筛选 搜索框与排序不可同时使用 -->
            <div
                slot="filterDropdown"
                slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
                style="padding: 8px"
            >
                <a-input
                    :placeholder="`Search ${column.dataIndex}`"
                    :value="selectedKeys[0]"
                    style="width: 188px; margin-bottom: 8px; display: block;"
                    @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                    @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
                />
                <a-button
                    type="primary"
                    icon="search"
                    size="small"
                    style="width: 90px; margin-right: 8px"
                    @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
                >Search</a-button>
                <a-button
                    size="small"
                    style="width: 90px"
                    @click="() => handleReset(clearFilters)"
                >Reset</a-button>
            </div>
            <!-- 搜索框图标 -->
            <a-icon
                slot="filterIcon"
                slot-scope="filtered"
                type="search"
                :style="{color: filtered ? '#dcb11' : undefined}"
            ></a-icon>
            <!-- 名字标题 -->
            <span slot="customTitle">
                <a-icon type="api" />名字
            </span>
            <!-- 标签 -->
            <span slot="tag" slot-scope="tag">
                <a-tag v-for="item in tag" :key="item" :color="getColor()">{{item}}</a-tag>
            </span>
            <div slot="name" slot-scope="text, record, index">
                <a-input
                    v-if="record.editable"
                    style="margin:-5px 0"
                    :value="text"
                    @change="e => handleChange(e.target.value, record, index)"
                />
                <template v-else>{{text}}</template>
            </div>
            <!-- 操作 -->
            <template slot="operation" slot-scope="text, record, index">
                <div class="operation">
                    <span v-if="record.editable" title="是否删除?">
                        <a @click="() => handleSave(index)">保存</a>
                        <a-popconfirm>
                            <span slot="title">
                                <a-icon type="exclamation-circle" />是否删除?
                            </span>
                            <a>取消</a>
                        </a-popconfirm>
                    </span>
                    <span v-else>
                        <a :disabled="editKey !== ''" @click="() => handleEdit(index)">编辑1</a>
                    </span>

                    <!-- <span v-else>
                        <a :disabled="editKey !== ''" @click="() => handleEdit(record.key)">Edit</a>
                    </span>-->
                </div>
            </template>
            <!-- 表格Title -->
            <div slot="title" class="title">
                <span>人员信息</span>
                <a-button class="addBtn" @click="handleAdd">
                    <a-icon type="plus-circle" />添加一条哦
                </a-button>
            </div>
            <!-- 表格Footer -->
            <div slot="footer">由xxxxxx有限公司提供</div>
        </a-table>
    </div>
</template>

<script>
let data = [
    {
        id: 1,
        age: 12,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小红",
    },
    {
        id: 2,
        age: 22,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小蓝",
    },
    {
        id: 3,
        age: 22,
        tel:
            "123432223431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431",
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小绿",
    },
    {
        id: 4,
        age: 13,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小紫",
    },
    {
        id: 5,
        age: 41,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小橙",
    },
    {
        id: 6,
        age: 43,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小红",
    },
    {
        id: 7,
        age: 18,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小蓝",
    },
    {
        id: 8,
        age: 38,
        tel:
            "123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431",
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小绿",
    },
    {
        id: 9,
        age: 28,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小紫",
    },
    {
        id: 10,
        age: 19,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小橙",
    },
    {
        id: 11,
        age: 55,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小红",
    },
    {
        id: 12,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小蓝",
    },
    {
        id: 13,
        age: 11,
        tel:
            "123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431",
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小绿",
    },
    {
        id: 14,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小紫",
    },
    {
        id: 15,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小橙",
    },
    {
        id: 16,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小红",
    },
    {
        id: 17,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小蓝",
    },
    {
        id: 18,
        age: 11,
        tel:
            "123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431",
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小绿",
    },
    {
        id: 19,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小紫",
    },
    {
        id: 20,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小橙",
    },
    {
        id: 21,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小红",
    },
    {
        id: 22,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小蓝",
    },
    {
        id: 23,
        age: 11,
        tel:
            "123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431123431",
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "女",
        name: "小绿",
    },
    {
        id: 24,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小紫",
    },
    {
        id: 25,
        age: 11,
        tel1: "0468-123456",
        tel2: "13000000000",
        tag: ["abc", "ghi"],
        sex: "男",
        name: "小橙",
    },
];

export default {
    name: "HelloWorld",
    data() {
        return {
            data,
            columns: [
                {
                    dataIndex: "name",
                    slots: { title: "customTitle" },
                    scopedSlots: { customRender: "name" },
                    ellipsis: true,
                    sorter: (a, b) => {
                        return a.name.localeCompare(b.name);
                    },
                    width: "100px",
                },
                {
                    dataIndex: "age",
                    title: "年龄",
                    ellipsis: true,
                    width: "100px",
                    scopedSlots: {
                        filterDropdown: "filterDropdown",
                        filterIcon: "filterIcon",
                        customRender: "customRender",
                    },
                    onFilter: (value, record) =>
                        record.age
                            .toString()
                            .toLowerCase()
                            .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: (visible) => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    dataIndex: "sex",
                    title: "性别",
                    width: "100px",
                    filters: [
                        { text: "小孩", value: "小孩" },
                        {
                            text: "大人",
                            value: "大人",
                            children: [
                                { text: "女", value: "女" },
                                { text: "男", value: "男" },
                            ],
                        },
                    ],
                    onFilter: (a, b) => {
                        return a == b.sex;
                    },
                },
                {
                    dataIndex: "tel1",
                    title: "联系方式",
                    colSpan: 2,
                    ellipsis: true,
                    customRender: (val, row, index) => {
                        const obj = {
                            children: val,
                            attrs: {},
                        };
                        switch (index) {
                            case 2:
                                obj.attrs.rowSpan = 4;
                                break;
                            case 3:
                            case 4:
                            case 5:
                                obj.attrs.rowSpan = 0;
                                break;
                        }
                        return obj;
                    },
                },
                {
                    dataIndex: "tel2",
                    colSpan: 0,
                    ellipsis: true,
                    customRender: (val, row, index) => {
                        const obj = {
                            children: val,
                            attrs: {},
                        };
                        switch (index) {
                            case 0:
                            case 5:
                                obj.attrs.rowSpan = 2;
                                break;
                            case 1:
                            case 6:
                                obj.attrs.rowSpan = 0;
                                break;
                        }
                        return obj;
                    },
                },
                {
                    dataIndex: "tag",
                    title: "标签",
                    scopedSlots: { customRender: "tag" },
                    ellipsis: true,
                },
                {
                    title: "操作",
                    dataIndex: "operation",
                    scopedSlots: { customRender: "operation" },
                },
            ],
            searchText: "",
            searchInput: null,
            searchedColumn: "",
            editKey: "",
            cacheData: data.map((item) => ({ ...item })),
        };
    },
    methods: {
        getColor() {
            let r = parseInt(Math.random() * 256);
            let g = parseInt(Math.random() * 256);
            let b = parseInt(Math.random() * 256);
            return `rgba(${r}, ${g}, ${b}, 1)`;
        },
        handleSearch(selectedKeys, confirm, dataIndex) {
            confirm();
            this.searchText = selectedKeys[0];
            this.searchedColumn = dataIndex;
        },

        handleReset(clearFilters) {
            clearFilters();
            this.searchText = "";
        },
        handleAdd() {
            const { data } = this;
            const newData = {
                id: data.length,
                age: parseInt(Math.random() * 100),
                tel1: "0468-123456",
                tel2: "13000000000",
                tag: ["aaa", "ccc"],
                sex: "男",
                name: "新人哦" + data.length,
            };
            this.data = [...data, newData];
        },
        handleEdit(key) {
            const newData = [...this.data];
            const target = newData.filter((item, index) => key === index)[0];
            this.editKey = key;
            if (target) {
                target.editable = true;
                this.data = newData;
            }
        },
        handleChange(value, column) {
            const newData = [...this.data];
            const target = newData.filter((item, index) => column === index)[0];
            if (target) {
                target[column] = value;
                this.data = newData;
            }
        },
        handleSave(key) {
            console.log(key);
            const newData = [...this.data];
            const target = newData.filter((item, index) => key === index)[0];
            console.log(target);
            if (target) {
                delete target.editable;
                this.data = newData;
            }
        },
    },
};
</script>

<style scoped>
.title {
    display: flex;
    justify-content: space-between;
}
.addBtn {
    margin-left: 50px;
}
</style>
