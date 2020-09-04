<style scoped>
.box {
    height: 100%;
}
.content {
    height: calc(100% - 50px);
    overflow: hidden;
}
.machineList {
    width: calc(100% + 28px);
    height: 100%;
    overflow-y: scroll;
}
.headType,
.headState {
    display: inline-block;
}
.headType {
    margin-right: 20px;
}
.headState i {
    margin-right: 10px;
}
.headState .run.ant-radio-button-wrapper-checked {
    background: #44c83f;
    border-color: #44c83f;
}
.headState .run.ant-radio-button-wrapper:hover {
    color: #44c83f;
}
.headState .warn.ant-radio-button-wrapper-checked {
    background: #e72b32;
    border-color: #e72b32;
}
.headState .warn.ant-radio-button-wrapper:hover {
    color: #e72b32;
}
.headState .wait.ant-radio-button-wrapper-checked {
    background: #dbc344;
    border-color: #dbc344;
}
.headState .wait.ant-radio-button-wrapper:hover {
    color: #dbc344;
}
.headState .stop.ant-radio-button-wrapper-checked {
    background: #b8643f;
    border-color: #b8643f;
}
.headState .stop.ant-radio-button-wrapper:hover {
    color: #b8643f;
}
.headState .close.ant-radio-button-wrapper-checked {
    background: #4a5057;
    border-color: #4a5057;
}
.headState .ant-radio-button-wrapper.ant-radio-button-wrapper-checked:hover {
    color: #fff !important;
}
.headState
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    box-shadow: none;
}
.head {
    margin-bottom: 20px;
}
.machineBox {
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(221, 226, 232, 1);
    border-radius: 4px;
    padding: 15px;
    box-sizing: border-box;
    border: 0.05rem solid #c3c6ca;
}
.cardTitle {
    font-weight: bold;
    line-height: 38px;
    border-radius: 2px;
    color: #3388ec;
    background: #f7f8f9;
    font-size: 18px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
}
.cardTitle span:last-child {
    color: #44c83f;
    font-size: 14px;
    font-family: MicrosoftYaHei;
}
.cardTitle span:last-child .cardTitleTotal {
    font-size: 0.75rem;
    color: #737882;
}
.machineH {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 14px;
}
.machine {
    box-shadow: 0 1px 6px 0 rgba(204, 204, 204, 1);
    border-radius: 4px;
    overflow: hidden;
}
.machineState {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    word-break: keep-all;
}
.run .machineH {
    background: #2ac754;
}
.run .machineState {
    background: #16af3f;
}
.machineT {
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.machineM {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
@media (min-width: 1000px) {
    .machineBox .ant-col {
        width: 100%;
    }
}
@media (min-width: 1400px) {
    .machineBox .ant-col {
        width: 50%;
    }
}
</style>
<template>
    <div class="box">
        <div class="head">
            <div class="headType">
                <a-radio-group
                    default-value="workshop"
                    button-style="solid"
                    @change="machineTypeFn"
                >
                    <a-radio-button value="workshop">车间</a-radio-button>
                    <a-radio-button value="type">设备类型</a-radio-button>
                </a-radio-group>
            </div>
            <div class="headState">
                <a-radio-group default-value="a" button-style="solid">
                    <a-radio-button value="a">
                        <a-icon type="appstore" />全部
                    </a-radio-button>
                    <a-radio-button value="b" class="run">
                        <a-icon type="highlight" />运行
                    </a-radio-button>
                    <a-radio-button value="c" class="warn">
                        <a-icon type="alert" />警报
                    </a-radio-button>
                    <a-radio-button value="d" class="wait">
                        <a-icon type="check-square" />待机
                    </a-radio-button>
                    <a-radio-button value="1" class="stop">
                        <a-icon type="exclamation-circle" />停机
                    </a-radio-button>
                    <a-radio-button value="2" class="close">
                        <a-icon type="stop" />关机
                    </a-radio-button>
                </a-radio-group>
            </div>
        </div>
        <div class="content">
            <a-row :gutter="[16, 16]" class="machineList">
                <a-col
                    :md="24"
                    :lg="12"
                    :xl="8"
                    v-for="item in machineList"
                    :key="item.id"
                    class="machineBoxCol"
                >
                    <div class="machineBox">
                        <div class="cardTitle">
                            <span>{{item.name}}</span>
                            <span>
                                运行数 / 总数 ： 1/
                                <span class="cardTitleTotal">4</span>
                            </span>
                        </div>
                        <a-row :gutter="[6, 6]">
                            <a-col
                                :md="12"
                                :lg="24"
                                :xl="12"
                                v-for="val in item.machines"
                                :key="val.id"
                                class="machineCol"
                            >
                                <div class="machine run">
                                    <div class="machineH">
                                        <div class="machineT">{{val.machineName}}</div>
                                        <div class="machineState">运行</div>
                                    </div>
                                    <div class="machineM">
                                        <div class="machineNum">0A(A相)</div>
                                        <div class="machineNum">0A(A相)</div>
                                        <div class="machineNum">0A(A相)</div>
                                    </div>
                                </div>
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import { getMachine } from "@/api/api";
export default {
    data() {
        return {
            machineList: [],
            machineType: "workshop",
            allMachine: [],
        };
    },
    watch: {
        machineType: function (val) {
            console.log(val);
        },
    },
    methods: {
        getMachineList: function (res) {
            let allMachine = [];
            for (const item of res.data) {
                for (const val of item.machines) {
                    allMachine.push(val);
                }
            }
            this.machineList = res.data;
            this.allMachine = allMachine;
        },
        machineTypeFn: function (e) {
            this.machineType = e.target.value;
        },
    },
    mounted() {
        getMachine({
            successFn: this.getMachineList,
        });
    },
};
</script>