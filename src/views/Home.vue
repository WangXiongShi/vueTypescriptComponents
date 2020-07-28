<template>
  <div class="home">
    <el-group-select :data="dataList" :selectName="name" :isRequired="true" @sendDatas="selectData"/>
    <br>
    <group-select :data="dataList" :selectName="name" :isRequired="true" @sendDatas="selectData"/>
    <br>
    <xh-select :data="dataList2" :selectName="name2" :isRequired="false" @sendDatas="selectData"/>
    <br>
    <template>
  <!-- <el-select v-model="value" placeholder="请选择">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select> -->
</template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import groupSelect from "@/components/groupSelect.vue";
import xhSelect from "@/components/xhSelect.vue";
import elGroupSelect from "@/components/elGroupSelect.vue";


@Component({
  components: {
    groupSelect,xhSelect,elGroupSelect
  },
})
export default class Home extends Vue {
  private name: string = "学科";
  private name2: string = "课程";
  private dataList: any = [
    {
      titleName: "小学",
      id: "1",
      children: [
        {
          name: "语文一年级",
          id: "1-1",
        },
        {
          name: "数学",
          id: "1-2",
        },
      ],
    },
    {
      titleName: "初中",
      id: "2",
      children: [
        {
          name: "语文",
          id: "2-1",
        },
        {
          name: "数学",
          id: "2-2",
        },
      ],
    },
  ];
  private dataList2: any = [
    {
      titleName: "小学",
      id: "1",
    },
    {
      titleName: "初中",
      id: "2",
    },
  ];
  private selectData(datas:any){
    console.log('datas:',datas);
  }
  mounted(){
    let el = document.getElementById('loader-wrapper');
      setTimeout(()=>{
        if(el){
          // el.style.display = 'none';
        }
      },2000)
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>

