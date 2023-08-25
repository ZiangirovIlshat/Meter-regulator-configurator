function app() {
    var app = new Vue ({
        el: '#App',
        data: {
            configuratorData: configuratorData,
            appointment: [], // массив всех приборов одного назначения
            properties:  [], // массив всех совойств приборов одного назначения
            arrayToDraw: [], // массив свойств для отрисовки элементов управления конфигуратором 
    
            arrayOfsuitableValues: [], // массив подходящих по фильтрам приборов
            searchResults: [],         // массив подходящих по фильтрам приборов(для отображения)
        },
    
        watch: {
            // отслеживание изменения массива приборов одного назначения
            appointment(newAppointment, oldAppointment) {
                if(this.appointment.length != 0) {
                    if (newAppointment != oldAppointment) {
                        this.arrayToDraw = [];
                        this.searchResults = []
                        this.arrayOfsuitableValues = this.appointment.devices
                        this.createPropertiesList(this.appointment.devices)
    
                        this.arrayToDraw.push(this.properties[0])
                    }
                }
            }
        },
    
        methods: {
    
            // функция подбора всех свойств переданного массива приборов
            createPropertiesList(arr) {
                this.properties = []
    
                for(index in arr) {
                    for(i in arr[index].properties) {
                        arr[index].properties[i]
    
                        let item      = arr[index].properties[i];
                        let nameTrue  = true
                        let valueTrue = true
    
                        for(i in this.properties) {
                            if(item.name === this.properties[i].name) {
                                nameTrue = false
                            }
                        }
    
                        if(nameTrue) {
                            this.properties.push({name: item.name, values: []})
                        }
    
                        for(i in this.properties) {
                            if(item.name === this.properties[i].name) {
                                for(j in this.properties[i].values) {
                                    if(this.properties[i].values[j] === item.value) {
                                        valueTrue = false
                                    }
                                }
                                if(valueTrue) {
                                    this.properties[i].values.push(item.value)
                                }
                            }
                        }
                    }
                }
            },
    
            // функция фильтрации массива приборов по переданным значениям
            getResult(name, value) {
                if(value != "") {
                    let result = [];
                    this.searchResults = []
    
                    let selectValue = JSON.stringify({name, value}).toLowerCase()
    
                    for(index in this.arrayOfsuitableValues) {
    
                        let item = this.arrayOfsuitableValues[index]
                        let properties = [];
    
                        for(i in item.properties) {
                            properties.push(JSON.stringify(item.properties[i]).toLowerCase());
                        }
    
                        if(properties.indexOf(selectValue) !== -1) {
                            result.push(this.arrayOfsuitableValues[index])
                        }
    
                    }
    
                    this.arrayOfsuitableValues = result
    
                    if(result.length === 1) {
                        this.createPropertiesList(this.arrayOfsuitableValues)
                        this.showResult()
    
                    } else {
                        this.createPropertiesList(this.arrayOfsuitableValues)
    
                        for(let i=0; i < this.properties.length; i++) {
    
                            if(this.properties[i].name === name) {
                                let step         = 1;
                                let propertyTrue = false
    
    
                                while(propertyTrue == false) {
                                    if(this.properties[i + step] && this.properties[i + step].values.length > 1) {
                                        this.arrayToDraw.push(this.properties[i + step])
                                        propertyTrue = true
                                    } else {
                                        if(step < this.properties.length) {
                                            step++;    
                                        }
                                        else {
                                            propertyTrue = true
                                            this.showResult()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
    
            },
    
            // функция для отображения результата
            showResult() {
                this.searchResults = []
    
                for(index in this.arrayOfsuitableValues) {
                    this.searchResults.push({
                        label: this.arrayOfsuitableValues[index].label,
                        img:   this.arrayOfsuitableValues[index].img,
                        link:  this.arrayOfsuitableValues[index].link,
                    })
                }
            },
    
            // функция для отключения неподходящих инпутов
            blockUnsuitableElements(name, value) {
                for(index in this.properties) {
    
                    if(this.properties[index].name === name) {
                        for(i in this.properties[index].values) {
                            if(this.properties[index].values[i] === value) {
                                return false
                            }
                        }
                        return true
                    }
                }
    
                console.log(this.properties)
            },
    
            // функция отмены
            reset() {
                this.arrayOfsuitableValues = []
                this.searchResults         = []
                this.appointment           = []
                this.arrayToDraw           = []
                document.querySelectorAll('.configurator__head-input').forEach( i=>{
                    i.checked = false
                })
            }
        }
    })
}

setTimeout(app, 300);