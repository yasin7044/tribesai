export const SearchAndFilter = {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchValue() {
      if (this.search.length) {
        this.employee = this.employee.filter((ele) => {
          if (ele.email.toUpperCase().includes(this.search.toUpperCase())) {
            return ele;
          } else if (ele.id.toUpperCase().includes(this.search.toUpperCase())) {
            return ele;
          } else if (ele.jobTitle.toUpperCase().includes(this.search.toUpperCase())) {
            return ele;
          } else if (ele.lastName.toUpperCase().includes(this.search.toUpperCase())) {
            return ele;
          } else if (ele.country.toUpperCase().includes(this.search.toUpperCase())) {
            return ele;
          } else if (ele.salaryQ1.toString().toUpperCase().includes(this.search.toUpperCase())) {
            return ele;
          } else if (ele.salaryQ2.toString().toUpperCase().includes(this.search.toUpperCase())) {
            return ele;
          } else if (ele.salaryQ3.toString().toUpperCase().includes(this.search.toUpperCase())) {
            return ele;
          } else if (ele.salaryQ4.toString().toUpperCase().includes(this.search.toUpperCase())) {
            return ele;
          }

        });
        console.log(this.search);
      } else {
        this.employee = [...this.oldEmployeeData];
      }
    },
  },
};
