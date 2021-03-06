<template>
  <div>
    <vs-table :data="employee" pagination max-items="10" stripe>
      <template slot="header">
        <h3>Employee Table</h3>
      </template>
      <template slot="thead">
        <vs-th> Job Id </vs-th>
        <vs-th> Job Title </vs-th>
        <vs-th> Email Address </vs-th>
        <vs-th> Full Name </vs-th>
        <vs-th> Country </vs-th>
        <vs-th> Salary In Q1 </vs-th>
        <vs-th> Salary In Q2 </vs-th>
        <vs-th> Salary In Q3 </vs-th>
        <vs-th> Salary In Q4 </vs-th>
        <vs-th> Total Salary </vs-th>
        <vs-th> Actions </vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].id">
            {{ data[indextr].id }}
          </vs-td>
          <vs-td :data="data[indextr].jobTitle">
            {{ data[indextr].jobTitle }}
          </vs-td>
          <vs-td :data="data[indextr].email">
            {{ data[indextr].email }}
          </vs-td>
          <vs-td :data="data[indextr].firstName">
            {{ data[indextr].firstName }}
            {{ data[indextr].lastName }}
          </vs-td>
          <vs-td :data="data[indextr].country">
            {{ data[indextr].country }}
          </vs-td>
          <vs-td :data="data[indextr].salaryQ1">
            {{ data[indextr].salaryQ1 }}
          </vs-td>
          <vs-td :data="data[indextr].salaryQ2">
            {{ data[indextr].salaryQ2 }}
          </vs-td>
          <vs-td :data="data[indextr].salaryQ3">
            {{ data[indextr].salaryQ3 }}
          </vs-td>
          <vs-td :data="data[indextr].salaryQ4">
            {{ data[indextr].salaryQ4 }}
          </vs-td>
          <vs-td> Total </vs-td>
          <vs-td>
            <vs-button
            @click="setSingleEmployee(data[indextr])"
            >View</vs-button>
            <vs-button>Edit</vs-button>
            <vs-button>Delete</vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  props: {
    employee: { type: Array, required: true, default: () => {} },
  },
  methods:{
    setSingleEmployee(singleEmployee){

      this.$emit('singleViewOpen',singleEmployee)
      console.log(singleEmployee)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>