new Vue({
  el: '#app',
  template: `
  <div>
    <div class="shape" v-bind:style="shapeStyles" v-on:click="changeShape"></div>
    <h1>Employees</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, loopIndex) in employees" v-bind:class="{ highlighted: loopIndex % 2 == 0 }">
          <td>{{ employee.name }}</td>
          <td>{{ employee.title }}</td>
          <td>{{ companyName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  data() { 
    return {
      shapeStyles: {},
      employees: [
        { name: 'Abby', title: 'Accountant' },
        { name: 'Andy', title: 'Marketing Manager' },
        { name: 'Brandon', title: 'Vue.js Expert' },
        { name: 'Bob', title: 'Key Account Manager' }
      ],
      companyName: 'VueX Ltd.'
    };  
  },
  methods: {
  	changeShape: function() {
    	if (typeof this.shapeStyles['border-radius'] !== 'undefined') {
	      Vue.set(this.shapeStyles, 'border-radius', undefined);
      } else {
      	Vue.set(this.shapeStyles, 'border-radius', '50%');
      }
    }
  }
});