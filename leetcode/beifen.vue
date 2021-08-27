<template>
  <div id="module-table-wrapper">
    <h2>模块分析</h2>

    <!-- 选择观测指标、页面对比按钮、下载按钮-->
    <div class="setting">
      <span class="metric">观测指标:</span>
      <el-select
        v-model="selectedModuleMetric"
        value-key="key"
        placeholder="请选择"
        size="small"
        @change="moduleMetricChange"
      >
        <el-option
          v-for="item in currentModuleMetrics"
          :key="item.key"
          :label="item.title"
          :value="item"
        >
        </el-option>
      </el-select>
      <el-button class="pageComp" size="small" @click="jumpToPageContrastPage">页面对比</el-button>
      <el-button 
        icon="el-icon-download" 
        size="small" 
        @click="download"
        :loading="downloadLoading"
        :disabled="currentModuleMetrics.length === 0"
      ></el-button>
    </div>

    <!-- 模块指标分析 -->
    <!-- 对比 -->
    <div v-loading="moduleAnalysisLoading" element-loading-text="正在加载中" v-if="isCompare">
      <div class="moduleAnalysis" v-if="currentModuleMetrics.length !== 0">
        <ScreenShot
          ref="screenShot"
          :height="640"
          @picture-data-select="onScreenShotPictureDataSelect"
          @picture-data-unselect="onScreenShotPictureDataUnselect"
        />
        
        <DrilldownDialog 
          :visible="visible"
          @closeDialog="closeDialog"
          @downloadDrillData="downloadDrillData"
          @metricSelectChange="metricSelectChange"
          :currentModuleMetrics="currentModuleMetrics"
          :currentCid="currentCid"
          :drillLevel="drillLevel"
          :drillModuleName="drillModuleName"
          :selectedModuleMetric="selectedModuleMetric"
        />
        <div class="module-metric-table">
          <el-table
            ref="table"
            :data="moduleMetricTable"
            :row-key="getModuleName"
            height="640"
            lazy
            :load="load"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
            :cell-style="columnStyle"
            @row-click="tableRowClick"
            highlight-current-row
          >
            <el-table-column 
              label="模块名称"
              label-class-name="metricName"
              class-name="moduleName"
              width="256"
              min-width="256"
              :render-header="renderTableHeader"
            >
              <template slot-scope="scope">
                <span>
                  {{ scope.row["element_business_type_id"] }}
                  <el-tooltip v-if="isDrilldown(scope.row)" class="item" effect="dark" content="查看趋势图" placement="top">
                    <i class="iconfont icon-mtdui-areachart-o drillLev2" @click="drilldownLev2(scope.row)"></i>                
                  </el-tooltip>
                </span>
              </template>            
            </el-table-column>

            <el-table-column
              v-for="item in currentModuleMetrics"
              :key="item.key"
              :label="item.title"
              :sortable="true"
              :sort-method="(row1, row2) => sortHandle(row1, row2, item.key)"
              :sort-orders="['ascending', 'descending']"
              label-class-name="metricName"
              class-name="metricValue"
              width="216"
              min-width="216"
            >
              <template slot-scope="scope">
                <el-row>
                  <el-col :span="14" class="metricVal">
                    <span style="line-height: 40px;">
                      {{ getFormatValue(scope.row[item.key].value, scope.row[item.key].format) }}
                    </span>
                  </el-col>
                  <el-col :span="10" class="compareVal">
                      <span class="valueUp" v-if="scope.row[item.key].grows.compare.value > 0">
                        <!-- {{ '+' + (scope.row[item.key].grows.compare.value * 100).toFixed(2) + '%' }}  -->
                        {{ '+' + getFormatValue(scope.row[item.key].grows.compare.value, scope.row[item.key].grows.compare.format) }}
                      </span>
                      <span class="valueDown" v-if="scope.row[item.key].grows.compare.value < 0">
                        <!-- {{ (scope.row[item.key].grows.compare.value * 100).toFixed(2) + '%' }}  -->
                        {{ getFormatValue(scope.row[item.key].grows.compare.value, scope.row[item.key].grows.compare.format) }}
                      </span>
                      <span class="NaN" v-if="isNaN(scope.row[item.key].grows.compare.value)">
                       {{ getFormatValue(scope.row[item.key].grows.compare.value, scope.row[item.key].grows.compare.format) }}
                      </span>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-empty :image-size="200" v-if="currentModuleMetrics.length === 0"></el-empty>
    </div> 

    <!-- 不对比 -->
    <div v-loading="moduleAnalysisLoading" element-loading-text="正在加载中" v-else>
      <div class="moduleAnalysis" v-if="currentModuleMetrics.length !== 0">
        <ScreenShot
          ref="screenShot"
          :height="640"
          @picture-data-select="onScreenShotPictureDataSelect"
          @picture-data-unselect="onScreenShotPictureDataUnselect"
        />
        
        <DrilldownDialog 
          :visible="visible"
          @closeDialog="closeDialog"
          @downloadDrillData="downloadDrillData"
          @metricSelectChange="metricSelectChange"
          :currentModuleMetrics="currentModuleMetrics"
          :currentCid="currentCid"
          :drillLevel="drillLevel"
          :drillModuleName="drillModuleName"
          :selectedModuleMetric="selectedModuleMetric"
          :chartDownload="chartDownload"
        />
        <div class="module-metric-table">
          <el-table
            ref="table"
            :data="moduleMetricTable"
            :row-key="getModuleName"
            height="640"
            lazy
            :load="load"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
            :cell-style="columnStyle"
            @row-click="tableRowClick"
            highlight-current-row
          >
            <el-table-column 
              label="模块名称"
              label-class-name="metricName"
              class-name="moduleName"
              width="216"
              min-width="216"
              :render-header="renderTableHeader"
            >
              <template slot-scope="scope">
                <span>
                  {{ scope.row["element_business_type_id"] }}
                  <el-tooltip v-if="isDrilldown(scope.row)" class="item" effect="dark" content="查看趋势图" placement="top">
                    <i class="iconfont icon-mtdui-areachart-o drillLev2" @click="drilldownLev2(scope.row)"></i>                
                  </el-tooltip>
                </span>
              </template>            
            </el-table-column>

            <el-table-column
              v-for="item in currentModuleMetrics"
              :key="item.key"
              :label="item.title"
              :sortable="true"
              :sort-method="(row1, row2) => sortHandle(row1, row2, item.key)"
              :sort-orders="['ascending', 'descending']"
              label-class-name="metricName"
              class-name="metricValue"
              width="216"
              min-width="216"
            >
              <template slot-scope="scope">
                <el-row>
                  <el-col :span="24">
                    <span style="line-height: 40px;">
                      {{ getFormatValue(scope.row[item.key].value, scope.row[item.key].format) }}
                    </span>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-empty :image-size="200" v-if="currentModuleMetrics.length === 0"></el-empty>
    </div>    
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { ModuleMetric, DimFilter } from "DimFilter";
import { PageBoardData } from "PageManage"
import DrilldownDialog from "@/components/DrillChart/index.vue";
import { getLev2ModuleData, downloadDrillChartData } from "@/api/PageBoardOverview"
import ScreenShot from "./ScreenShot.vue";
import { ScreenShotRefreshParam } from "PageContrast";
import { DateObj } from "PageBoardOverview";
import { formatNumData } from "@/utils/index";
import { cloneDeep } from "lodash";

@Component({
  components: {
    ScreenShot,
    DrilldownDialog
  }
})
export default class ModuleTable extends Vue {
  public $refs!: {
    screenShot: ScreenShot;
    table: any;
  };

  @Prop() private currentCid!: string;
  @Prop({ type: Number }) private currentBoardId!: number;
  @Prop() private moduleMetricTable!: any[];
  @Prop() private currentModuleMetrics!: any[];
  @Prop() private moduleAnalysisLoading!: boolean;
  @Prop() private selectedPageBoard!: PageBoardData;
  @Prop({type: Boolean, default: true}) private isCompare!: boolean;
  @Prop() private downloadLoading!: boolean;

  private selectedModuleMetric: ModuleMetric|object = {};    //当前选中的模块指标

  private drillModuleName = '';     //当前下钻的一级模块名

  private drillLevel = 1;       //下钻等级 

  private visible = false;      //控制子组件dialog的显示，默认关闭

  private chartDownload = false;    //下钻趋势图下载

  private getFormatValue(value: any, formats: any) {
    return formatNumData(value, formats);
  }
  
  //监听子组件dialog关闭
  private closeDialog() {    
    this.visible = false;    
  }

  //一级模块下钻
  private drilldownLev1() {
    this.drillLevel = 1;
    this.visible = true;
  }

  //二级模块下钻
  private drilldownLev2(row: any) {
    this.visible = true;
    this.drillLevel = 2;
    this.drillModuleName = row['element_business_type_id'];
  }

  //没有二级模块的一级模块、以及二级模块不显示下钻icon，
  private isDrilldown(row: any) {
    return row["hasChildren"];
  }

  @Watch('currentModuleMetrics', { immediate: true })
  public onCurrentModuleMetrics() {
    // 默认选择第一个
    this.selectedModuleMetric = this.currentModuleMetrics[0];
  }

  private jumpToPageContrastPage() {
    this.$emit("jumpToPageContrastPage", this.selectedModuleMetric)
  }

  //row-key
  private getModuleName(row: any) {
    if(row['shplat.channel_title']) { //二级title的row-key
      return row['element_business_type_id'] + Math.random().toFixed(10);
    }
    return row["element_business_type_id"];
  }

  //请求二级title数据 
  private async load(tree: any, treeNode: any, resolve: any) {
    // console.log(tree);  //tree表示当前行的数据对象 
    const filters = cloneDeep(this.$store.state.boardOverview.dimsInfo);  //维度筛选条件
    filters["element_business_type_id"] = [ tree["element_business_type_id"] ];
    if(this.isCompare) {
      const query: any = {
        "cid": this.currentCid,
        "dateType": this.$store.state.boardOverview.dateObj.curDateParticle,
        "beginDate": this.$store.state.boardOverview.dateObj.startDate,
        "endDate": this.$store.state.boardOverview.dateObj.endDate,
        "comBeginDate": this.$store.state.boardOverview.dateObj.compareStartDate,
        "comEndDate": this.$store.state.boardOverview.dateObj.compareEndDate,
        "boardId": this.currentBoardId,
        "dims": "element_business_type_id,shplat.channel_title",
        "filters": filters
      };
      const res = await getLev2ModuleData(query);
      const level2ModuleData = res.data.table.data;
      level2ModuleData.forEach((item: any) => {
        if(item['shplat.channel_title'] == '') {  //防止二级模块名为空，导致duplicate key报错
          item['shplat.channel_title'] = Math.random().toFixed(3);
        }
        item['element_business_type_id'] = item['shplat.channel_title'];
      })
      // 将二级数据插入到对应一级模块children属性中
      this.moduleMetricTable.forEach((item: any) => {
        if(item['element_business_type_id'] === tree["element_business_type_id"]) {
          this.$set(item, 'children', level2ModuleData);
        }
      })
      console.log('当前模块表格数据', this.moduleMetricTable);
      resolve(level2ModuleData);
    } else {
      const query: any = {
        "cid": this.currentCid,
        "dateType": this.$store.state.boardOverview.dateObj.curDateParticle,
        "beginDate": this.$store.state.boardOverview.dateObj.startDate,
        "endDate": this.$store.state.boardOverview.dateObj.endDate,
        "boardId": this.currentBoardId,
        "dims": "element_business_type_id,shplat.channel_title",
        "filters": filters
      };
      const res = await getLev2ModuleData(query);
      const level2ModuleData = res.data.table.data;
      level2ModuleData.forEach((item: any) => {
        if(item['shplat.channel_title'] == '') {  //防止二级模块名为空，导致duplicate key报错
          item['shplat.channel_title'] = Math.random().toFixed(3);
        }
        item['element_business_type_id'] = item['shplat.channel_title'];
      })
      // 将二级数据插入到对应一级模块children属性中
      this.moduleMetricTable.forEach((item: any) => {
        if(item['element_business_type_id'] === tree["element_business_type_id"]) {
          this.$set(item, 'children', level2ModuleData);
        }
      })
      console.log('当前模块表格数据', this.moduleMetricTable);
      resolve(level2ModuleData);      
    }

  }

  //下载模块表格数据
  private download() {
    this.$emit('downloadTableData');    
  }

  //列排序 (单列排序)
  private sortHandle(row1: any, row2: any, key: any) {    
    return row1[key].value - row2[key].value;
  }

  //下载趋势图数据  分一级模块趋势图下载 和 二级模块趋势图下载
  private downloadDrillData(moduleName: string) {
    this.chartDownload = true;
    if(this.drillLevel == 1) {     //一级模块下钻趋势图数据下载
      const query = {
        "cid": this.currentCid,
        "beginDate": this.$store.state.boardOverview.dateObj.startDate,
        "endDate": this.$store.state.boardOverview.dateObj.endDate,
        "dateType": this.$store.state.boardOverview.dateObj.curDateParticle,
        "metric": {
          "key": (this.selectedModuleMetric as ModuleMetric).key,
          "title": (this.selectedModuleMetric as ModuleMetric).title,
        },
        "dims": "element_business_type_id,shplat.channel_title",
        "filters": this.$store.state.boardOverview.dimsInfo
      };
      // console.log("一级模块趋势图下载参数", query);
      downloadDrillChartData(query).then(res => {
        this.chartDownload = false;
        this.$message({
          message: '下载趋势图数据成功！',
          type: "success"
        });
        window.open(res.data, '_self');
      });
    } else {           //二级title趋势图数据下载
      const filters = cloneDeep(this.$store.state.boardOverview.dimsInfo);  //维度筛选条件
      filters["element_business_type_id"] = [ moduleName ];
      const query = {
        "cid": this.currentCid,
        "beginDate": this.$store.state.boardOverview.dateObj.startDate,
        "endDate": this.$store.state.boardOverview.dateObj.endDate,
        "dateType": this.$store.state.boardOverview.dateObj.curDateParticle,
        "dims": "element_business_type_id,shplat.channel_title",
        "metric": {
          "key": (this.selectedModuleMetric as ModuleMetric).key,
          "title": (this.selectedModuleMetric as ModuleMetric).title,
        },
        "filters": filters
      };
      // console.log("二级title趋势图下载参数", query);
      downloadDrillChartData(query).then(res => {
        this.chartDownload = false;
        this.$message({
          message: '下载趋势图数据成功！',
          type: "success"
        });
        window.open(res.data, '_self');
      })
    }
  }

  //当前选中的指标对应表格列高亮
  private columnStyle({ row, column, rowIndex, columnIndex }: any) {
    let index = 0; 
    for(const item of this.currentModuleMetrics) {
      index++;
      if(item.key === (this.selectedModuleMetric as ModuleMetric).key){
        break;
      }
    }
    if (columnIndex == index) {   
      return 'background: rgba(0,0,0,0.02);'
    }    
  }

  //表头渲染
  private renderTableHeader(h: any, { column, $index }: any) {
    return h('div', {
      style: `font-family: PingFang SC; 
      font-size: 12px; 
      color: #474747;
      letter-spacing: 0;
      line-height: 20px;
      font-weight: 500;`  
    }, [
      '模块名称',
      h('el-tooltip', {
        props: {
          placement: 'top',
          content: "查看趋势图",
          class: "item",
          effect: "dark",
        },
      }, [  
        h('i', { 
          'class': 'iconfont icon-mtdui-areachart-o drillLev1',
          on: {
            click: this.drilldownLev1
          }
        }, [])
      ])
    ])
  }

  private metricSelectChange(item: any) {
    this.selectedModuleMetric = item;
  }

  //切换指标，截图刷新
  private moduleMetricChange() {
    this.screenShotRefresh();
  }

  //刷新截图，请求截图数据
  private screenShotRefresh() {
    this.$nextTick(() => {
      const params: ScreenShotRefreshParam = {
        pageBoard: this.selectedPageBoard,
        moduleMetric: (this.selectedModuleMetric as ModuleMetric),
        startDate: this.$store.state.boardOverview.dateObj.startDate,
        endDate: this.$store.state.boardOverview.dateObj.endDate,
        dimValues: this.$store.state.boardOverview.dimValues
      }
      this.$refs.screenShot.refresh(params);
    })
  }

  //表格行的点击回调函数
  private tableRowClick(row: any, column: any, event: any) {
    this.screenShotSelectPictureData(row.domKey);
  }


  /**
   * 截图交互组件根据 domKey 选中截图数据
   * 表格选中模块数据后，联动截图交互组件选中对应截图数据
   */
  private screenShotSelectPictureData(domKey: string) {
    this.$refs.screenShot.select(domKey);
  }

  /**
   * 截图交互组件取消选中截图数据
   * 表格取消选中模块数据后，联动截图交互组件取消选中对应截图数据
   */
  private screenShotUnselectPictureData() {
    this.$refs.screenShot.unselect();
  }

  // 选中截图数据，联动表格状态
  private onScreenShotPictureDataSelect(domKey: string) {
    let index = -1;
    //一级模块联动
    for(let i = 0; i < this.$refs.table.data.length; i++) {
      if(this.$refs.table.data[i]['domKey'] === domKey) {
        index++;
        break;
      } else {
        index++;
      }      
    }  
    if(index !== this.$refs.table.data.length - 1) {   //一级模块联动
      this.$refs.table.setCurrentRow(this.moduleMetricTable[index]);  
    } else {   //二级title联动
      let num = -1; 
      let childIndex = -1;
      for(let i = 0; i < this.$refs.table.data.length; i++){
        if(this.$refs.table.data[i]['children']) {    
          for(let j = 0; j < this.$refs.table.data[i]['children'].length; j++) {
            if(domKey == this.$refs.table.data[i]['children'][j]['domKey']) {
              num = i;
              childIndex = j;
              break;
            }
          }
        }
      }   
      if(num === -1 && childIndex === -1) {   //若截图下钻时，未请求二级数据，不联动
        return ;
      }  
      this.$refs.table.setCurrentRow(this.moduleMetricTable[num]['children'][childIndex]);
    }
  }

  private onScreenShotPictureDataUnselect() {
    if (this.isTablePictureDataUnselect()) {
      // console.log('TODO onScreenShotPictureDataUnselect 表格已未选中，不需要再联动');
      return;
    }
    // TOFO 取消选中截图数据，需要联动表格状态
    // console.log(`TODO onScreenShotPictureDataUnselect`);
  }

  private isTablePictureDataUnselect() {
    // TODO 返回表格当前是否未选中截图数据
    return true;
  }
}
</script>

<style scoped lang="less">

#module-table-wrapper {
  position: relative;
  width: 100%;
  margin-top: 30px;

  h2 {
    margin-left: 20px;
    font-family: PingFang SC;
    font-size: 16px;
    color: rgba(0,0,0,0.83);
    letter-spacing: 0;
    font-weight: 500;
    line-height: 22px
  }
  .setting {
    position: absolute;
    right: 40px;
    top: 0px;

    span.metric {
      font-family: PingFang SC;
      font-size: 14px;
      color: rgba(0,0,0,0.60);
      line-height: 20px;
      font-weight: 400;
      margin-right: 12px;
    }

    .el-select {
      width: 200px;
      height: 32px;
    }

    .pageComp {
      margin-left: 10px;
      width: 80px;
      height: 32px;
    }
  }
}

.moduleAnalysis{
  display: flex;
  justify-content: flex-start;
  margin-right: 40px;
  padding-top: 12px;

  .module-metric-table {
    flex: 1;
    position: relative;
    margin-left: 40px;
    width: calc(100% - 480px);  //解决flex布局下，el-table横向滚动失效问题

    /deep/ .el-table {
      &__header-wrapper tr th {
        padding: 0 0 !important;
        height: 41px !important;
        border-radius: 2px !important;
      }
      &__body-wrapper tr td{
        height: 41px !important;
        padding: 0 !important;
        line-height: 41px !important;
      }

      tbody tr td .compareVal {
        text-align: center !important;
        // margin-left: 12px !important;
      }
    }

    // 二级模块下钻icon
    .icon-mtdui-areachart-o.drillLev2 {
      position: absolute;
      left: 198px;
      top: -8px;
    }

    // 一级模块下钻icon
    /deep/ .icon-mtdui-areachart-o.drillLev1 {
      position: absolute;
      left: 175px;
      z-index: 999;
    }

    /deep/ .icon-mtdui-areachart-o.drillLev1:hover {
      cursor: pointer;
    }

    .icon-mtdui-areachart-o:hover {
      cursor: pointer;
    }

    /deep/ .metricName {
      font-family: PingFang SC;
      font-size: 12px;
      color: #474747;
      letter-spacing: 0;
      text-align: center;
      line-height: 20px;
      font-weight: 500;
      background: #f7f7f7;
      border-radius: 2px;
    }
    /deep/ .moduleName {
      font-family: PingFang SC;
      font-size: 14px;
      color: #292929;
      letter-spacing: 0;
      line-height: 40px;
      font-weight: 500;
      .cell {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;   
      }
    }

    /deep/ .el-table tbody:hover {
      cursor: pointer !important;
    }

    /**修改表格hover的高亮颜色 */
    /deep/ .el-table tbody tr>td:nth-child(1) {
      border-left: 2px solid transparent !important;
    }
    /deep/ .el-table tbody tr:hover>td { 
      background: rgba(10,112,245,0.08) !important;
    }
    /**表格row被选中 */
    /deep/ .el-table tbody tr.current-row>td:nth-child(1) {
      border-left: 2px solid #0A70F5 !important;
    }
    /deep/ .el-table tbody tr.current-row>td {
      background: rgba(10,112,245,0.08) !important;
    }

    /deep/ .metricValue {
      font-family: Avenir;
      font-size: 14px;
      color: #292929;
      letter-spacing: 0;
      text-align: center;
      line-height: 40px;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    /deep/ .valueUp {
      font-family: PingFang;
      font-size: 12px;
      color: #07A35A;
      letter-spacing: 0;
      line-height: 40px;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    } 
    /deep/ .valueDown {
      font-family: PingFang SC;
      font-size: 12px;
      color: #E33232;
      letter-spacing: 0;
      line-height: 40px;
      font-weight: 500; 
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    /deep/ .NaN {
      font-family: PingFang SC;
      font-size: 12px;
      color: rgba(0,0,0,0.60);
      line-height: 36px;
      font-weight: 400;
    }
  }
}

/deep/ .moduleName {
 padding: 0 0 0 10px ;
}
/deep/ .el-table__row--level-0  {
  .el-table__expand-icon {
    position: relative;
    left: 9px;
    margin-right: 0px !important;
   }
  .moduleName{
    .cell {
      position: relative;
      left: -25px;
    }
   } 
 }
 /deep/ .el-table__row--level-1 {
  .moduleName {
    .el-table__indent {
      padding: 0px !important;
    }
  }
 } 
 /deep/ .el-icon-arrow-right {
   margin-right: 0px !important;
   &::before {
    content: "\e791";
   }
 }
 
</style>
