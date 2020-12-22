new Vue({
  el: '#app',

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