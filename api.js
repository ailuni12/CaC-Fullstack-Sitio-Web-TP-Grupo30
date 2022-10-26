const app = new Vue({
    el: '#app',
    data: {
        info: {},
        datetime: ""
    },
    created() {
        fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires.json')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.datetime=data.datetime
            })
        .catch( error => console.log(error));
    }
});