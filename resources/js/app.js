/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import trae from 'trae';
require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('gif-component', require('./components/gif.vue').default);
const trackService={};



export default trackService;

 
const app = new Vue({
    el: '#app',
    data:{
        term:'',
        grid_items: [            
        ],
        total_pages:0,
        total_count:0,
        offset:25
    },
  
    methods: {
        search_gifs: function(event){            
             
            const GiphyService = trae.create();  
            
            // track search

            const result = GiphyService.get(
                'https://api.giphy.com/v1/gifs/search',
                {
                    params: {                
                        q : this.term, 
                        limit:25,
                        offset:0,
                        api_key:'wl7SJUeic3K6SIbbON6HYqVaCaOBL6li',       
                        rating:'G',
                        lang:'en'
                    }
                }
            )
            .then( (response)=>{      
 
                
                this.grid_items = response.data.data;
                this.total_count = response.data.pagination.total_count;
                
                                               
                return response;
            });
        
 

            
            
        }
    }
});






