<template>
  <form data-vv-scope="Employee">
    <label v-if="editingIndex">Email:{{ email }}</label>
    <v-select
          class="w-full mb-2"

      :options="jobTitleList"
      v-model="jobTitle"
      v-validate="'required'"
      placeholder="Job Title"
      data-vv-name="jobTitle"
    ></v-select>
    <div
      v-if="errors.has('Employee.jobTitle')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.jobTitle") }}
    </div>

    <vs-input
      class="w-full mb-2"
      label="FirstName"
      placeholder="Add Name"
      v-validate="'required|min:4|max:7'"
      data-vv-name="firstName"
      v-model="firstName"
      autofocus
    />
    <div
      v-if="errors.has('Employee.firstName')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.firstName") }}
    </div>
    <vs-input
      class="w-full mb-2"
      label="lastName"
      placeholder="Add lastName"
      v-validate="'required|min:4|max:7'"
      data-vv-name="lastName"
      v-model="lastName"
      autofocus
    />
    <div
      v-if="errors.has('Employee.lastName')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.lastName") }}
    </div>

     <vs-input
     v-if="!editingIndex"
      class="w-full mb-2"
      label="email"
      v-validate="'required|email'"
      data-vv-name="email"
      v-model="email"
      autofocus
    />
    <div
      v-if="errors.has('Employee.email')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.email") }}
    </div>
   
    <v-select
          class="w-full my-2"

      :options="countryList"
      v-model="country"
      placeholder="Country"
      v-validate="'required'"
      data-vv-name="country"
    ></v-select>
    <div
      v-if="errors.has('Employee.country')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.country") }}
    </div>
    <vs-input
      class="w-full mb-2"
      label="salaryQ1"
      v-validate="'required|numeric|min_value:5000|max_value:10000'"
      data-vv-name="salaryQ1"
      v-model="salaryQ1"
      autofocus
    />
    <div
      v-if="errors.has('Employee.salaryQ1')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.salaryQ1") }}
    </div>
    <vs-input
      class="w-full mb-2"
      label="salaryQ2"
      v-validate="'required|numeric|min_value:5000|max_value:10000'"
      data-vv-name="salaryQ2"
      v-model="salaryQ2"
      autofocus
    />
    <div
      v-if="errors.has('Employee.salaryQ2')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.salaryQ2") }}
    </div>
    <vs-input
      class="w-full mb-2"
      label="salaryQ3"
      v-validate="'required|numeric|min_value:5000|max_value:10000'"
      data-vv-name="salaryQ3"
      v-model="salaryQ3"
      autofocus
    />
    <div
      v-if="errors.has('Employee.salaryQ3')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.salaryQ3") }}
    </div>
    <vs-input
      class="w-full mb-2"
      label="salaryQ4"
      placeholder="Add salaryQ4"
      v-validate="'required|numeric|min_value:5000|max_value:10000'"
      data-vv-name="salaryQ4"
      v-model="salaryQ4"
      autofocus
    />
    <div
      v-if="errors.has('Employee.salaryQ4')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.salaryQ4") }}
    </div>
    <vs-input
      class="w-full mb-2"
      label="wHourQ1"
      placeholder="Add Name"
      v-validate="'required|numeric|min_value:700|max_value:1000'"
      data-vv-name="wHourQ1"
      v-model="wHourQ1"
      autofocus
    />
    <div
      v-if="errors.has('Employee.wHourQ1')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.wHourQ1") }}
    </div>

    <vs-input
      class="w-full mb-2"
      label="wHourQ2"
      v-validate="'required|numeric|min_value:700|max_value:1000'"
      data-vv-name="wHourQ2"
      v-model="wHourQ2"
      autofocus
    />
    <div
      v-if="errors.has('Employee.wHourQ2')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.wHourQ2") }}
    </div>
    <vs-input
      class="w-full mb-2"
      label="wHourQ3"
      v-validate="'required|numeric|min_value:700|max_value:1000'"
      data-vv-name="wHourQ3"
      v-model="wHourQ3"
      autofocus
    />
    <div
      v-if="errors.has('Employee.wHourQ3')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.wHourQ3") }}
    </div>
    <vs-input
      class="w-full mb-2"
      label="wHourQ4"
      v-validate="'required|numeric|min_value:700|max_value:1000'"
      data-vv-name="wHourQ4"
      v-model="wHourQ4"
      autofocus
    />
    <div
      v-if="errors.has('Employee.wHourQ4')"
      style="color: red"
      class="invalid-feedback"
    >
      {{ errors.first("Employee.wHourQ4") }}
    </div>
    <div class="mt-4 text-right">
      <vs-button class="ml-2" @click="createdOrUpdate()" v-if="!editingObject"
        >Save</vs-button
      >
      <vs-button class="ml-2" @click="createdOrUpdate()" v-else
        >Update</vs-button
      >
    </div>
  </form>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect,
  },
  props: {
    jobTitleList: {},
    countryList: {},
    editingObject: {},
    editingIndex: {},
  },
  created() {
    if (this.editingObject) {
      this.jobTitle = this.editingObject.jobTitle;
      this.firstName = this.editingObject.firstName;
      this.lastName = this.editingObject.lastName;
      this.country = this.editingObject.country;
      this.salaryQ1 = this.editingObject.salaryQ1;
      this.salaryQ2 = this.editingObject.salaryQ2;
      this.salaryQ3 = this.editingObject.salaryQ3;
      this.salaryQ4 = this.editingObject.salaryQ4;
      this.wHourQ1 = this.editingObject.wHourQ1;
      this.wHourQ2 = this.editingObject.wHourQ2;
      this.wHourQ3 = this.editingObject.wHourQ3;
      this.wHourQ4 = this.editingObject.wHourQ4;
      this.email = this.editingObject.email;
    }
  },
  methods: {
    createdOrUpdate() {
      this.$validator.validateAll("Employee").then((valid) => {
        if (valid) {
          console.log(valid);

          const payload = {
            jobTitle: this.jobTitle,
            firstName: this.firstName,
            lastName: this.lastName,
            country: this.country,
            salaryQ1: this.salaryQ1,
            salaryQ2: this.salaryQ2,
            salaryQ3: this.salaryQ3,
            salaryQ4: this.salaryQ4,
            wHourQ1: this.wHourQ1,
            wHourQ2: this.wHourQ2,
            wHourQ3: this.wHourQ3,
            wHourQ4: this.wHourQ4,
            email: this.email,
          };
          payload.index = this.editingIndex;

          console.log(payload);

          this.$emit("createdObject", payload);
          console.log("hii");
        } else {
          this.showSuccessMessage(
            "Not Validated",
            "Validation is Required",
            "danger"
          );
        }
      });
    },
  },
  data() {
    return {
      jobTitle: "",
      firstName: "",
      lastName: "",
      country: "",
      salaryQ1: "",
      salaryQ2: "",
      salaryQ3: "",
      salaryQ4: "",
      wHourQ1: "",
      wHourQ2: "",
      wHourQ3: "",
      wHourQ4: "",
      email: "",
    };
  },
};
</script>
<style lang="css">
</style>