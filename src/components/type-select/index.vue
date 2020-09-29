<template>
  <div class="component">
    <!--  <input type="text" id="typeSelect" :placeholder="typePlaceHolder" @click="selectArea" v-model="typeName"-->
    <!--       class="select"/>-->
    <!--  <input type="button" value="×" class="inputIcon" @click="clearType"/>-->
    <!--  <div v-show="isShow">-->
    <!--    <ul class="ulClass">-->
    <!--    <li v-for="(item,index) in dataList" :key="index" @click="setArea(item)" style="list-style-type: none">-->
    <!--      {{item.typeName}}-->
    <!--    </li>-->
    <!--    </ul>-->
    <!--  </div>-->
    <el-select v-model="typeName" clearable placeholder="请选择" @change="changeType">
      <el-option
        v-for="item in dataList"
        :key="item.typeId"
        :label="item.typeName"
        :value="item.typeId"
        @change="changeType1"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: 'index.vue',
    data () {
      return {
        typePlaceHolder: '请选择类型',
        isShow: false,
        typeName: '',
        typeId: '',
        dataList: [
          {
            typeId: '1',
            typeName: '美食',
          }, {
            typeId: '2',
            typeName: '风景',
          }, {
            typeId: '3',
            typeName: '趣图',
          }, {
            typeId: '4',
            typeName: 'YY',
          }
        ]
      }
    },
    methods: {
      selectArea: function () {
        this.isShow = !this.isShow
      },
      setArea: function (item) {
        this.typeName = item.typeName
        this.typeId = item.typeId
        console.log('shadow', 'typeId', this.typeId)
        console.log('shadow', 'typeName', this.typeName)
        this.isShow = false
      }, clearType: function () {
        this.typeId = ''
        this.typeName = ''
      },
      changeType: function (item) {
        console.log(item)
      },
      changeType1: function (item) {
        console.log(item)
      }
    },
    props: {},
    created () {
      console.log('lifecycle', 'created')
    }, mounted () {
      console.log('lifecycle', 'mounted')
    }, beforeCreate () {
      console.log('lifecycle', 'beforeCreate')
    }, beforeMount () {
      console.log('lifecycle', 'beforeMount')
    }, deactivated () {
      console.log('lifecycle', 'deactivated')
    }, destroyed () {
      console.log('lifecycle', 'destroyed')
    }
  }
</script>

<style scoped>
  .component {
    margin: 0;
    position: relative;
    width: 200px;
    height: 20px;
  }

  .select {
    margin: 10px 10px 0px 10px;
    height: 20px;
    width: 100%;
    border-radius: 8px;
    border: 1px silver solid;
  }

  .select:focus {
    margin: 10px 10px 0px 10px;
    height: 20px;
    border-radius: 8px;
    border: 1px silver solid;
  }

  .inputIcon {
    position: relative;
    left: 190px;
    bottom: 22px;
    border-radius: 30px;
    border: 0px;
    color: darkgrey;
  }

  .ulClass {
    position: absolute;
    margin-left: 15px;
    margin-top: 0px;
    border: 1px rosybrown solid;
    width: 100%;
    padding-left: 0px;
    padding-top: 0px;
  }

  .ulClass li:hover {
    background-color: darkgrey;
  }

  .ulClass li {
    width: 100%;
  }
</style>
