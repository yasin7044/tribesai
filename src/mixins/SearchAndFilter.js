export const SearchAndFilter = {
  data() {
    return {
      search: "",
      filterCountry: "",
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
          } else if (
            ele.jobTitle.toUpperCase().includes(this.search.toUpperCase())
          ) {
            return ele;
          } else if (
            ele.lastName.toUpperCase().includes(this.search.toUpperCase())
          ) {
            return ele;
          } else if (
            ele.country.toUpperCase().includes(this.search.toUpperCase())
          ) {
            return ele;
          } else if (
            ele.salaryQ1
              .toString()
              .toUpperCase()
              .includes(this.search.toUpperCase())
          ) {
            return ele;
          } else if (
            ele.salaryQ2
              .toString()
              .toUpperCase()
              .includes(this.search.toUpperCase())
          ) {
            return ele;
          } else if (
            ele.salaryQ3
              .toString()
              .toUpperCase()
              .includes(this.search.toUpperCase())
          ) {
            return ele;
          } else if (
            ele.salaryQ4
              .toString()
              .toUpperCase()
              .includes(this.search.toUpperCase())
          ) {
            return ele;
          }
        });
        console.log(this.search);
      } else {
        this.employee = [...this.oldEmployeeData];
      }
    },
    filerByCountry() {
      console.log("hi");
      if(!this.oldEmployeeData.length){
        this.showSuccessMessage('Error','No Employee Data Found','danger')
      } else {
      if (!this.filterCountry) {
        this.employee = [...this.oldEmployeeData];
      } else {
        this.employee = this.oldEmployeeData.filter((ele) => {
          return ele.country.includes(this.filterCountry);
        });
      }
    }
    },
  },
};
