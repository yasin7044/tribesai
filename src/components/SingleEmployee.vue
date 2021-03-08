<template>
  <div>
    <div>
      <div class="profileInfo my-4">
        <strong>Job Id - {{ singleEmployee.id }}</strong>
        <label
          >Name:<strong
            >{{ singleEmployee.firstName }}
            {{ singleEmployee.lastName }}</strong
          ></label
        >
      </div>
      <div class="profileInfo my-4">
        <div>
          <label class="mx-2">Email - </label>
          <strong class="mx-2">{{ singleEmployee.email }}</strong>
        </div>
        <div>
          <label>Country - </label>
          <strong>{{ singleEmployee.country }}</strong>
        </div>
      </div>
      <div class="profileInfo my-4">
        <div>
          <label class="mx-2">Job Title -</label>
          <strong class="mx-2">{{ singleEmployee.jobTitle }}</strong>
        </div>
        <div>
          <label>Total Salary in 4Quarter - </label>
          <strong>{{ totalSalary }} $</strong>
        </div>
      </div>
      <div class="profileInfo my-4">
        <div></div>
        <div>
          <label>Total WorkHour in 4Quarter - </label>
          <strong>{{ totalWorkHour }} hr</strong>
        </div>
      </div>
    </div>

    <div id="chart">
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  data() {
    return {
      totalSalary: 0,
      totalWorkHour: 0,
      series: [
        {
          name: "Salary",
          type: "column",
          data: [],
        },
        {
          name: "Working Hour",
          type: "line",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
        },
        stroke: {
          width: [0, 4],
        },
        title: {
          text: "Employee Yearly Chart",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        xaxis: {
          categories: ["Q1", "Q2", "Q3", "Q4"],
        },
        // labels: ['Q1','Q2','Q3','Q4'],
        /* xaxis: {
              type: 'datetime'
            }, */
        yaxis: [
          {
            title: {
              text: "Salary",
            },
          },
          {
            opposite: true,
            title: {
              text: "Working Hour",
            },
          },
        ],
      },
    };
  },
  mounted() {
    const salaryValue = Object.keys(this.singleEmployee)
      .filter((ele) => {
        return ele.includes("salary");
      })
      .map((ele) => {
        this.totalSalary += this.singleEmployee[ele];
        return this.singleEmployee[ele];
      });
    console.log(salaryValue);
    this.series[0].data = salaryValue;
    const workingHours = Object.keys(this.singleEmployee)
      .filter((ele) => {
        return ele.includes("wHour");
      })
      .map((ele) => {
        this.totalWorkHour += this.singleEmployee[ele];
        return this.singleEmployee[ele];
      });
    this.series[1].data = workingHours;

    console.log(workingHours);
    // this.series[0].data.push()
  },
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    singleEmployee: { type: Object, required: true, default: () => {} },
  },
  beforeDestroy() {
    console.log("Destroyed");
  },
};
</script>

<style>
.profileInfo {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}
.con-vs-popup .vs-popup {
  width: 100% !important;
  height: auto !important;
}
</style>