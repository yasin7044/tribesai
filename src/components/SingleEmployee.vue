<template>
  <div>
      {{chartData[0]}}
      {{chartData[1]}}
      {{singleEmployee}}
        <GChart
    :settings="{packages: ['bar']}"    
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Bar(el)"
    @ready="onChartReady"
  />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
    components: {
    GChart
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        bars: 'vertical', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#1b9e77', '#d95f02']
      })
    }
  },
  data(){
      return {
          chartsLib: null, 
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Salary', 'Hour'],
        ['Quarter1', 1000, 400],
        ['Quarter2', 1170, 460],
        ['Quarter3', 660, 1120],
        ['Quarter4', 1030, 540]
      ]
      }
  },
  created(){
      
    //   const chartData = this.singleEmployee
  },
   methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  },
  props: {
    singleEmployee: { type: Object, required: true, default: () => {} },
  },
};
</script>

<style lang="scss" scoped>
</style>