<!--  -->
<template>
  <div class="main" ref="main">
    <div class="selectName">
      <span class="required" v-show="isRequired">*</span>
      <span>{{selectName}}:</span>
    </div>
    <div class="warpSelect" ref="warpSelect">
      <div class="xhSelect" ref="xhSelect" @click.stop="open()">
        <span v-show="name">{{name}}</span>
        <span v-show="!name" style="color:#999;">请选择</span>
        <div class="triangle">
          <img
            src="../assets/images/triangle.png"
            alt
            :style="{transform:(bol?'translateY(-50%) rotate(180deg)':'translateY(-50%) rotate(0deg)')}"
          />
        </div>
      </div>
      <ul class="dataList" ref="isShowList">
        <li v-for="item in data" :key="item.id">
          {{item.titleName}}
          <div class="childList">
            <span v-for="q in item.children" :key="q.id" @click="getName(item,q)">{{q.name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component({ name: "questionQuery" })
export default class xhSelect extends Vue {
  /* 
    data数据显示项
  */
  @Prop({
    type: Array,
    required: true,
  })
  data!: Array<any>;
  /* 
    下拉框筛选名称
  */
  @Prop({
    type: String,
    required: false,
  })
  selectName!: String;
  /* 
    是否必填项
  */
  @Prop({
    type: Boolean,
    required: false,
  })
  isRequired!: boolean;

  private bol: boolean = false;
  private sss: boolean = false;
  private name: string = "";
  private open() {
    this.bol = !this.bol;
    let isShowList: any = this.$refs.isShowList;
    if (this.bol) {
      isShowList.style.maxHeight = "300px";
    } else {
      isShowList.style.maxHeight = "0";
    }
  }

  @Emit("sendDatas") sendData(obj: any) {}

  private getName(item: any, q: any) {
    this.name = item.titleName + q.name;
    this.sendData({ item, q });
  }

  private documentClick(e:any):void{

      let warpSelect: any = this.$refs.warpSelect;
      let isShowList: any = this.$refs.isShowList;
      if (e.target != warpSelect) {
        this.bol = false;
        isShowList.style.maxHeight = "0";
      }

  }
  mounted() {
    document.addEventListener("click", this.documentClick,false);
  }

  beforeDestroy(){
    document.removeEventListener("click", this.documentClick,false);
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
@import "~@/styles/mixin.scss";
.main {
  background: #e6f3e5;
  padding: 20px;
  width: 290px;
  display: inline-block;
  @include clearfix;
  .selectName {
    float: left;
    line-height: 38px;
    margin-right: 15px;
    width: 32px;
    text-align: right;
  }
  .required {
    color: red;
  }
  .warpSelect {
    width: 200px;
    background: #ccc;
    position: relative;
    float: left;
  }
  .xhSelect {
    width: 200px;
    height: 38px;
    border-radius: 2px;
    background: #fff;
    align-items: center;
    position: relative;
    cursor: pointer;
    line-height: 38px;
    text-indent: 15px;
    user-select: none;
    z-index: 1;
    & > span {
      float: left;
    }
    .triangle {
      height: 100%;
      img {
        position: absolute;
        right: 15px;
        top: 50%;
        transition: 0.2s all;
      }
    }
  }

  .dataList {
    position: absolute;
    width: 200px;
    background: #fff;
    text-align: left;
    text-indent: 20px;
    transition: max-height 0.5s ease;
    max-height: 0;
    top: 100%;
    overflow: hidden;
    z-index: 9999;
    box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
    li {
      color: #000;
      font-weight: 600;
      .childList {
        width: 88%;
        margin: 3px 0;
        @include clearfix;
        span {
          color: #666;
          float: left;
          cursor: pointer;
        }
        span:hover{
          color: #409eff;
        }
      }
    }
  }
}
</style>
