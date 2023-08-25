const configuratorData = [
    dataMeter = {
        label: "Измерители",
        name: "meter",
        devices: [
            {
                label: "2ТРМ0 обновленный двухканальный измеритель с интерфейсом RS-485", link: '/product/2trm0', img: '/thumbs/223/2trm0_standard___24cf84ab-554x300-d.png', properties: [
                    {name: 'Количество каналов', value: 'двухканальный'},
                    {name: 'Наличие интерфейса RS-485',value: 'да'},
                    {name: 'Крепление',value: 'щит (96х96), щит (48х96), щит (45х45), DIN'},
                    {name: 'Измеряемый сигнал',value: 'термосопротивление, термопара, 0…5 мА, 0(4)…20 мA, –50…+50 мВ, 0…1 В'},
                    {name: 'Показания',value: 'цифровые'},
                ]
            },
            {
                label: "ИТП-15 компактный измеритель", link: '/product/itp', img: '/uploads/346/1000x1000-itp15.png', properties: [
                    {name:'Количество каналов', value: 'одноканальный'},
                    {name:'Наличие интерфейса RS-485', value: 'нет'},
                    {name:'Крепление', value: 'в отверстие 22 мм'},
                    {name:'Измеряемый сигнал', value: '0(4)…20 мA, 0…5 мА, 0(2)…10 В'},
                    {name:'Показания', value: 'шкала'},
                ]
            },
            {
                label: "ИТП-14 компактный измеритель", link: '/product/itp', img: '/uploads/346/1000x1000-itp11-14-16.png', properties: [
                    {name:'Количество каналов', value: 'одноканальный'},
                    {name:'Наличие интерфейса RS-485', value: 'нет'},
                    {name:'Крепление', value: 'в отверстие 22 мм'},
                    {name:'Измеряемый сигнал', value: '0(4)…20 мA, 0…5 мА, 0(2)…10 В'},
                    {name:'Показания', value: 'цифровые'},
                ]
            },
            {
                label: "ИТП-16 компактный измеритель", link: '/product/itp', img: '/uploads/346/1000x1000-itp11-14-16.png', properties: [
                    {name:'Количество каналов', value: 'одноканальный'},
                    {name:'Наличие интерфейса RS-485', value: 'нет'},
                    {name:'Крепление', value: 'в отверстие 22 мм'},
                    {name:'Измеряемый сигнал', value: 'термосопротивление, термопара'},
                    {name:'Показания', value: 'цифровые'},
                ]
            },
            {
                label: "ИТП-11 компактный измеритель", link: '/product/itp', img: '/uploads/346/1000x1000-itp11-14-16.png', properties: [
                    {name:'Количество каналов', value: 'одноканальный'},
                    {name:'Наличие интерфейса RS-485', value: 'нет'},
                    {name:'Крепление', value: 'на стену, на трубу, DIN'},
                    {name:'Измеряемый сигнал', value: '4-20 мА'},
                    {name:'Показания', value: 'цифровые'},
                ]
        },
            {
                label: "ИДЦ1 измеритель с крупным цифровым индикатором", link: '/product/idtc1', img: '/thumbs/310/idcz1_new___c901a409-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'одноканальный'},
                    {name:'Наличие интерфейса RS-485', value: 'нет'},
                    {name:'Крепление', value: 'щит (96х144)'},
                    {name:'Измеряемый сигнал', value: '(0)4…20 мА, 0…1 В, 0…10 В'},
                    {name:'Показания', value: 'цифровые'},
                ]
            },
        ],
    },
    
    dataMeterRegulator = {
        label: "Измерители-регуляторы",
        name: "meter-regulator",
        devices: [ 
            {
                label: "ТРМ148 восьмиканальный<br>ПИД-регулятор с RS-485", link: '/product/trm148', img: '/thumbs/78/trm148_shh7___e5a9356a-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'восьмиканальный'},
                    {name:'Регулирование', value: 'ПИД'},
                ]
            },
            {
                label: "ТРМ138 восьмиканальный регулятор<br>с RS-485", link: '/product/trm138', img: '/thumbs/78/trm138_shh4___5230afac-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'восьмиканальный'},
                    {name:'Регулирование', value: 'двухпозиционное (on/off)'},
                ]
            },
            {
                label: "ТРМ138В восьмиканальный регулятор для взрывоопасных зон с RS-485", link: '/product/trm138v', img: '/thumbs/78/trm138v_shh4___8621db72-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'шестиканальный'},
                    {name:'Регулирование', value: 'двухпозиционное (on/off)'},
                ]
            },
            {
                label: "ТРМ136 шестиканальный регулятор<br>с RS-485", link: '/product/trm136', img: '/thumbs/78/trm136_shh7_3d___0d996a30-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'шестиканальный'},
                    {name:'Регулирование', value: 'двухпозиционное (on/off)'},
                ]
            },
            {
                label: "ТРМ151 двухканальный ПИД-регулятор с пошаговыми программами и RS-485", link: '/product/trm151', img: '/thumbs/78/trm151_shh1_3d___dd1b8659-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'двухканальный'},
                    {name:'Регулирование', value: 'ПИД'},
                ]
            },
            {
                label: "2ТРМ1 обновленный погодозависимый двухканальный регулятор с RS-485", link: '/product/2trm1', img: '/thumbs/331/2trm1_new___fd189315-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'двухканальный'},
                    {name:'Регулирование', value: 'двухпозиционное (on/off)'},
                ]
            },
            {
                label: "ТРМ10 обновленный ПИД-регулятор<br>с RS-485", link: '/product/trm10', img: '/thumbs/330/trm10-u2-shh1_standard___f890e312-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'одноканальный'},
                    {name:'Регулирование', value: 'ПИД'},
                ]
            },
            {
                label: "ТРМ12 обновленный ПИД-регулятор для задвижек с RS-485", link: '/product/trm12', img: '/thumbs/240/trm12_standard___86996e28-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'одноканальный'},
                    {name:'Регулирование', value: 'ПИД'},
                ]
            },
            {
                label: "ТРМ1 обновленный одноканальный измеритель-регулятор с RS-485", link: '/product/trm1', img: '/thumbs/210/trm1_standard___a7dd82d0-554x300-d.png', properties: [
                    {name:'Количество каналов', value: 'одноканальный'},
                    {name:'Регулирование', value: 'двухпозиционное (on/off)'},
                ]
            },
        ],
    },
]