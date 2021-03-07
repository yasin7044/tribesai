<template>
  <div>
    <!-- <pre>{{ employee }}</pre> -->
    <vs-row>
      <vs-button @click="GenerateData()">Generating Random Data</vs-button>

      <vs-card>
        <data-listing
          :employee="employee"
          @singleViewOpen="singleViewOpen"
          @editingEmit="editingEmit"
        ></data-listing>
      </vs-card>
    </vs-row>
    <div v-if="singleViewPopUp">
      <vs-popup
        class="holamundo"
        :title="`${singleEmployee.firstName} Profile Info`"
        :active.sync="singleViewPopUp"
      >
        <single-employee
          :singleEmployee="singleEmployee"
          v-if="singleViewPopUp"
        ></single-employee>
      </vs-popup>
    </div>
    <div v-if="employeeEventPopUp">
      <vs-popup
        class="holamundo"
        title="Employee Info "
        :active.sync="employeeEventPopUp"
      >
        <create-update-employee
          :editingObject="editingObject"
          :editingIndex="editingIndex"
          @createdObject="createdObject"
          :countryList="countryList"
          :jobTitleList="jobTitle"
        ></create-update-employee>
      </vs-popup>
    </div>
  </div>
</template>

<script>
import DataListing from "@/components/DataListing.vue";
import SingleEmployee from "@/components/SingleEmployee.vue";
import CreateUpdateEmployee from "@/components/CreateUpdateEmployee.vue";

export default {
  components: {
    DataListing,
    SingleEmployee,
    CreateUpdateEmployee,
  },
  watch: {
    singleViewPopUp() {
      if (!this.singleViewPopUp) {
        this.singleEmployee = null;
      }
    },
  },
  data() {
    return {
      employeeEventPopUp: false,
      maximizeCard: true,
      singleViewPopUp: false,

      id: "",
      employee: [],
      countryList: [
        "India",
        "China",
        "USA",
        "UK",
        "Australia",
        "Italy",
        "Canada",
        "Italy",
        "Spain",
      ],
      jobTitle: [
        "Full Stack Developer",
        "Frontend",
        "Backend",
        "Php Developer",
        "Node Js",
        "Front Desk",
        "Web Master",
      ],
      emailType: ["gmail", "yahoo", "tribes", "codelogicx", "abc", "outlook"],
      emailSubDomain: ["org", "com", "in", "edu"],
      editingObject: null,
      editingIndex: null,
    };
  },
  mounted() {
    const data = this.getRandomInt(4, 7);
    const createName = this.createName(data);
    console.log(data);
    console.log(createName);
  },
  methods: {
    singleViewOpen(employeeObject) {
      this.singleEmployee = employeeObject;
      this.singleViewPopUp = true;

      //   console.log(object)
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    },
    createName(length) {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return result;
    },
    getUniqueValue(array) {
      const random = Math.floor(Math.random() * array.length);
      return array[random];
    },

    GenerateData() {
      this.$vs.loading({
        text: "We Are Creating 1 lakh random Data Please have patience",
      });
      const vm = this;

      for (let i = 0; i < 100; i++) {
        console.log(i);
        this.employee.push({
          id: `Job#${this.id++ + 1}`,
          jobTitle: this.getUniqueValue(this.jobTitle),
          firstName: this.createName(this.getRandomInt(4, 7)),
          lastName: this.createName(this.getRandomInt(4, 7)),
          country: this.getUniqueValue(this.countryList),
          salaryQ1: this.getRandomInt(5000, 10000),
          salaryQ2: this.getRandomInt(5000, 10000),
          salaryQ3: this.getRandomInt(5000, 10000),
          salaryQ4: this.getRandomInt(5000, 10000),
          wHourQ1: this.getRandomInt(700, 1000),
          wHourQ2: this.getRandomInt(700, 1000),
          wHourQ3: this.getRandomInt(700, 1000),
          wHourQ4: this.getRandomInt(700, 1000),
          get email() {
            return `${this.firstName}_${this.lastName}@${vm.getUniqueValue(
              vm.emailType
            )}.${vm.getUniqueValue(vm.emailSubDomain)}`;
          },
        });
      }

      setTimeout(() => {
        this.$vs.loading.close();
      }, 2);

      // this.$vs.loading.close()

      /*  const newData = this.employee.map(ele,index=>{
                return {
                    
                }
            }) */
      console.log("Hi");
    },
    editingEmit(paylaodObject) {
      this.editingObject = paylaodObject.editingObject;
      this.editingIndex = paylaodObject.index;
      this.employeeEventPopUp = true;
      console.log(paylaodObject);
    },
    createdObject(addedObject) {
      console.log("hi");
      console.log(addedObject);
      if ("index" in addedObject) {
        const index = addedObject.index;
        this.employee[index].jobTitle = addedObject.jobTitle;
        this.employee[index].firstName = addedObject.firstName;
        this.employee[index].lastName = addedObject.lastName;
        this.employee[index].country = addedObject.country;
        this.employee[index].salaryQ1 = addedObject.salaryQ1;
        this.employee[index].salaryQ2 = addedObject.salaryQ2;
        this.employee[index].salaryQ3 = addedObject.salaryQ3;
        this.employee[index].salaryQ4 = addedObject.salaryQ4;
        this.employee[index].wHourQ1 = addedObject.wHourQ1;
        this.employee[index].wHourQ2 = addedObject.wHourQ2;
        this.employee[index].wHourQ3 = addedObject.wHourQ3;
        this.employee[index].wHourQ4 = addedObject.wHourQ4;
        this.employee[index].email = addedObject.email;
        this.showSuccessMessage(
          "success",
          "Employee Updated Successfully",
          "success"
        );
        this.editingObject = null;
        this.editingIndex = null;
        this.employeeEventPopUp = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>