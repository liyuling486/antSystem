
<style scoped>
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
.headState
    .stop.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: #4a5057 !important;
}
.headState .close.ant-radio-button-wrapper-checked {
    background: #4a5057;
    border-color: #4a5057;
}
.headState
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    box-shadow: none;
}
</style>  
<template>
    <div>
        <div class="head">
            <!-- <a-row>
      <a-col :sm="24" :md="12" :lg="8"><div style="background: #f0f">2 / 5div </div></a-col>
      <a-col :sm="24" :md="12" :lg="8"><div style="background: #f00">2 / 5div </div></a-col>
      <a-col :sm="24" :md="12" :lg="8"><div style="background: #f0f">2 / 5div </div></a-col>
      <a-col :sm="24" :md="12" :lg="8"><div style="background: #f00">2 / 5div </div></a-col>
      <a-col :sm="24" :md="12" :lg="8"><div style="background: #f0f">2 / 5div </div></a-col>
      <a-col :sm="24" :md="12" :lg="8"><div style="background: #f00">2 / 5div </div></a-col>
            </a-row>-->
            <div class="headType">
                <a-radio-group default-value="a" button-style="solid">
                    <a-radio-button value="a">车间</a-radio-button>
                    <a-radio-button value="b">设备类型</a-radio-button>
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
    </div>
</template>

<script>
import { getMachine } from "@/api/api";
export default {
    data() {
        return {
            machineList: [],
        };
    },
    watch: {},
    methods: {
        getMachineList: function (res) {
            console.log(res);
        },
    },
    mounted() {
        getMachine({
            successFn: this.getMachineList,
        });
    },
};
</script>