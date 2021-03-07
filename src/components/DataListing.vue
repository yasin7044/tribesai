<template>
  <div>
    {{employee[0]}}
    <vs-table :data="employee" pagination max-items="10" stripe
    noDataText="No Employee Data Available"
    >
      <template slot="header">
        <h3>Employee Table</h3>
      </template>
      <template slot="thead">
        <vs-th> Job Id </vs-th>
        <vs-th> Job Title </vs-th>
        <vs-th> Email Address </vs-th>
        <vs-th> Full Name </vs-th>
        <vs-th> Country </vs-th>
        <vs-th>
          Salary(Q1)

          <vs-checkbox v-model="salaryCheckbox.Q1"></vs-checkbox>
        </vs-th>
        <vs-th>
          Salary(Q2)
          <vs-checkbox v-model="salaryCheckbox.Q2"></vs-checkbox>
        </vs-th>
        <vs-th>
          Salary(Q3)
          <vs-checkbox v-model="salaryCheckbox.Q3"></vs-checkbox>
        </vs-th>
        <vs-th>
          Salary(Q4)
          <vs-checkbox v-model="salaryCheckbox.Q4"></vs-checkbox>
        </vs-th>
        <vs-th> Total Salary ({{totalSelctedQuarter()}})</vs-th>
        <vs-th> Total Work Hour ({{totalSelctedQuarter()}})</vs-th>

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
            {{ data[indextr].email |lowerCase}} 
          </vs-td>
          <vs-td :data="data[indextr].firstName">
            {{ data[indextr].firstName | capitalize}}
            {{ data[indextr].lastName | capitalize}}
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
          <vs-td> {{ totalSalary(data[indextr],'salary') }}</vs-td>
          <vs-td> {{ totalSalary(data[indextr],'wHour') }}</vs-td>

          <vs-td>
            <vs-button
              @click="setSingleEmployee(data[indextr])"
              color="primary"
              icon="preview"
            ></vs-button>
            <vs-button
              @click="editingEmployee(indextr, data[indextr])"
              color="primary"
              icon="edit"
            ></vs-button>
            <vs-button
              @click="deletingEmployee(indextr)"
              color="danger"
              icon="delete"
            ></vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
     <div v-if="employeeEventPopUp">
      <vs-popup class="holamundo" title="Employee Info " :active.sync="employeeEventPopUp">
        <create-update-employee
          :editingObject="editingObject"
        ></create-update-employee>
      </vs-popup>
    </div>
  </div>
</template>

<script>
import CreateUpdateEmployee from "../components/CreateUpdateEmployee.vue";

export default {
  components: {
    CreateUpdateEmployee
  },
  data() {
    return {
       employeeEventPopUp:false,
       editingObject:null,
      singleEmployee: null,
      salaryCheckbox: {
        Q1: true,
        Q2: true,
        Q3: true,
        Q4: true,
      },
    };
  },

  props: {
    employee: { type: Array, required: true, default: () => {} },
  },
  filters:{
    capitalize(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0) + value.slice(1).toLowerCase()
  },
    lowerCase(value){
      return value.toLowerCase()
    }
  },
  methods: {
    setSingleEmployee(singleEmployee) {
      this.$emit("singleViewOpen", singleEmployee);
      // console.log(singleEmployee);
    },
    totalSalary(eachEmployee,keyValue) {
      const selectedCheckbox = this.getSelectedCheckbox();
      console.log(selectedCheckbox);
      // this.getSelectedCheckbox()
      const totalSalary = Object.keys(eachEmployee)
        .filter((ele) => {
          return ele.includes(keyValue);
        })
        .map((ele) => {
          return eachEmployee[ele];
        })
        .filter((ele, index) => {
          return selectedCheckbox.includes(index);
        });

      if (totalSalary.length) {
        return totalSalary.reduce((acc, val) => {
          return parseInt(acc) + parseInt(val);
        });
      } else {
        return 0;
      }

      // return totalSalary
      // console.log(totalSalary)
      /*  .reduce((acc, val) => {
          return acc + val;
        });
      return totalSalary; */
    },
    getSelectedCheckbox() {
      const trueSelectedFilter = Object.keys(this.salaryCheckbox)
        .map((ele, index) => {
          console.log(this.salaryCheckbox[ele]);
          if (this.salaryCheckbox[ele] === true) {
            return index;
          }
          // console.log(this.salaryCheckbox[ele])
        })
        .filter((ele) => {
          return ele !== undefined;
        });

      return trueSelectedFilter;
      // console.log(trueSelectedFilter);
    },
    totalSelctedQuarter(){
            const selectedCheckbox =  Object.keys(this.salaryCheckbox).filter(ele=>{
              return this.salaryCheckbox[ele] === true
            })
            // console.log(selectedCheckbox)
            if(!selectedCheckbox.length) return ''
            return selectedCheckbox.join('+')

    },
    deletingEmployee(index){
      this.employee.splice(index,1)
      this.showSuccessMessage('Deleted','Employee Deleted Successfully','success')
    },
    editingEmployee(index,editingObject){
      const editingPayload={
        editingObject,
        index
      }
      this.$emit('editingEmit',editingPayload)
      /* console.log(index)
      console.log(editingObject)
      this.editingObject = editingObject
      this.employeeEventPopUp = true */
    }
  },
};
</script>

<style lang="scss" scoped>
</style>