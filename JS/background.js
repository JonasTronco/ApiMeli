/*********************/
/*                   */
/*ÍNDICE DE SCRIPTING*/
/*                   */
/*********************/

/***LISTADO DE APIS***/
let mercadoEnvios = [{
        nombre: "PREFERENCIAS DE ENVÍO DE UN USUARIO",
        funcionamiento: "Solo debe colocar el User Id para lograr el resultado",
        descripcion: "Se puede ver si el user Seller decidió que va a querer enviar varios productos en un mismo paquete o no",
        url: "https://api.mercadolibre.com/users/XXX/shipping_preferences",
        habilitado: true,
        token: false,
        requiere:[{
            data: "Ingresa el usuario"            
        }],
        resultados: [
            {data: "modes"},
            {data: "local_pick_up"},
        ]
    },
    {
        nombre: "CATEGORÍA HABILITADA PARA ENVÍO POR ME",
        funcionamiento: "Debes ingresar el User Id y el Id de la categoría",
        descripcion: "Esta herramienta nos permite validar si un usuario está habilitado para enviar por Mercado Envíos por una categoría específica.",
        url: " https://api.mercadolibre.com/users/XXX/shipping_modes?category_id=YYY",
        habilitado: true,
        token: true,
        requiere:[
            {data: "Ingresa el usuario"},
            {data: "Ingresa el ID de la Categoría"},
        ],
        resultados: [
            {data: "mode"}
        ]
    }
]
/* url: "https://api.mercadolibre.com/mercadopago_account/movements/search?user_id=XXX&status=unavailable&access_token=yyy",
/* Operaciones a liberar */
/* url: "https://api.mercadolibre.com/mercadopago_account/movements/search?user_id=XXX%20&label=unavailable_by_dispute&access_token=yyy",
/* Retenidas por Mediaciones */
/* url: "https://api.mercadolibre.com/mercadopago_account/movements/search?user_id=XXX%20&label=unavailable_by_chargeback&access_token=yyy",
/* Retenidas por Chargebacks */
/* url: "https://api.mercadolibre.com/mercadopago_account/movements/search?user_id=XXX%20&label=unavailable_by_shipping_return&access_token=yyy",
/* Retenidas por Devolución Express */ 

let mercadoPago = [ {
        nombre: "BALANCE DE SALDO EN MERCADO PAGO",
        descripcion: "Podemos verificar el dinero de la cuenta de cada usuario, ver cuánto tiene disponible, retenido y por qué, en reclamo, etc.",
        url: "https://api.mercadolibre.com/users/xxx/mercadopago_account/balance?access_token=yyy",
        habilitado: true,
        token: true,
        requiere: {
            user: "Ingresa el ID del Usuario"
        }

    },
    {
        nombre: "BLOQUEO POR VISA",
        descripcion: "Nos servirá para ver si un usuario está bloqueado para recibir pagos con visa",
        url: "https://api.mercadolibre.com/users/XXX/accepted_payment_methods/visa?marketplace=MELI",
        habilitado: true,
        token: false,
        requiere:[
            {data: "Ingresa el ID del Usuario"}
        ],
    }, 
    {
        nombre: "INFORMACIÓN DE UN COBRO",
        descripcion: "Esta herramienta proporciona toda la información asociada a un cobro, detalle, cliente, fecha y hora de liberación exacta, etc.",
        url: "https://api.mercadopago.com/v1/payments/xxx?access_token=yyy",
        habilitado: true,
        token: true,
        requiere: [
            {data: "Ingresa el ID del cobro"}
        ],
        resultados:[
            {data: "money_release_date"},
            {data: "operation_type"}
        ]
    },
   {
        nombre: "LIMITE MP POINT",
        descripcion: "Esta API nos servirá en caso de que nos consulten si el ITEM tiene B=P",
        url: "https://api.mercadolibre.com/point/services/caps/xxx ",
        habilitado: false,
        toke: false,
        requiere: {
            data: "Ingresa el ID del Usuario"
        }
    },
    {
        nombre: "TITULARIDAD DE POINT",
        descripcion: "Esta API nos servirá en caso de que nos consulten si el ITEM tiene B=P",
        url: "https://api.mercadolibre.com/point/services/poi/BBPOS-xxx ",
        habilitado: true,
        toke: false,
        requiere: [{
            data: "Ingresa el Serial del Point"
        }],
        resultados:[
            {data: ""}
        ]
    } 
]
let mercadoShops = [{
    nombre: ""
}]
let mercadoVendedor = [{
        nombre: "INFORMACIÓN DE CATEGORÍAS",
        funcionamiento: "Ingresa el ID de la categoría, puedes obtenerlo desde CX debajo del título de la publicación de un usuario.",
        descripcion: "Esta herramienta, nos indicará información correspondiente a una categoría específica.",
        url: "https://api.mercadolibre.com/categories/XXX",
        habilitado: true,
        token: false,
        requiere:[
             {data: "Ingresa el ID de la Categoría"}
            ],
        resultados:[
            {data:""}
        ]
    },
    {
        nombre: "INFORMACIÓN DE CUENTA",
        funcionamiento: "Ingresa el ID del usuario, para que funcione, debes hacerlo en modo incógnito desde la impersonalización del usuario, recuerda no tener más de una impersonalización activa.",
        descripcion: "Esta herramienta, nos indicará toda la información asociada a la cuenta de un usuario de Mercado Libre",
        url: "https://api.mercadolibre.com/users/XXX?access_token=YYY",
        habilitado: true,
        token: true,
        requiere: [
            {data: "Ingresa el ID del Usuario"}
        ],
        resultados:[
            {data:""}
        ]
    },

    {
        nombre: "INFORMACIÓN DE ÍTEMS",
        funcionamiento: "",
        descripcion: "nos mostrará información sobre la composición de la categoría y de las categorías hijas",
        url: "",
        habilitado: false
    },

    {
        nombre: "INFORMACIÓN DE ÓRDENES",
        descripcion: "nos mostrará información sobre la composición de la categoría y de las categorías hijas",
        url: "https://api.mercadolibre.com/categories/XXX",
        habilitado: false
    },

    {
        nombre: "PRODUCT ADS",
        descripcion: "Esta herramienta nos permitirá validar diferentes aspectos de la campaña de publicidad de un usuario, fecha de creación, visitas e inversión en la misma.",
        url: "https://api.mercadolibre.com/eshops/search?seller_id=XXX",
        habilitado: false
    }
]


/*----------Vue.js--------------*/
let resultadosObjeto;
let listMercadoEnvios = new Vue({
    el: '#listAppMe',
    data: {

        clickAyuda: false,
        mercadoEnvios,
        appSelect: '',
        requisitos: [],
        resultado: {},
        mostrar: false
         
    },
    methods: {
        clickAyudaMetodo: function() {
            let aux = this.clickAyuda
            this.clickAyuda = !aux
        },
        consultar: function(){ 
            let aux = new Array(2);
            let aux2 = new Array(2);
             
            for (let index = 0; index < this.mercadoEnvios.length; index++) {
                
                if (this.appSelect == this.mercadoEnvios[index].nombre ) {

                    for (let j = 0; j < this.mercadoEnvios[index].resultados.length; j++) {
                        aux2[j] = this.mercadoEnvios[index].resultados[j].data
                        // console.log(aux2)    
                        
                    }
                    
                    let urlTemporal = this.mercadoEnvios[index].url
                    let x,y,z
                            
                    for (let p = 0; p < this.requisitos.length; p++) {
                        if (p == 0) {
                            x = this.requisitos[p]
                        }else{
                            y = this.requisitos[p]
                        }                       
                    }
                    
                    if (this.mercadoEnvios[index].token) {
                        z = CookieMaster()
                        if (z == undefined) {
                            alert("Esta API usa una Cookie, Para usarla primero impers")                            
                        }
                    }
                     console.log(urlConstructora(urlTemporal,x,y,z))
                    
                    consulta(urlConstructora(urlTemporal,x,y,z),OPTS)
                        .then(function(data){ 
                            for (let i = 0; i < aux2.length; i++) {
                                let aux3 = aux2[i]
                                aux[i] = data[aux3]                                
                            }                            
                            console.log("este es el valor 1"+ aux)                                     
                                                     
                        })
                        
                        .catch(function(){
                            alert("Error en la consulta")
                        })
                    
                }
                
            }
            setTimeout(() => {
                console.log("este es el valor 2 "+ aux[0])
                console.log("llego") 

                for (let index = 0; index < this.mercadoEnvios.length; index++) {
                    if (this.appSelect == this.mercadoEnvios[index].nombre) {
                        for (let j = 0; j < this.mercadoEnvios[index].resultados.length; j++) {
                            let a = aux2[j]
                            let b = aux[j]
                            Vue.set(this.resultado, a,b )
                        }

                    }
                    
                }

                console.log(this.resultado)
                this.mostrar = true;    
                                            
            }, 1000);

            
           
            
            
        },
        userid: function(){

        }
    }

})

 let listMercadoVendedor = new Vue({
     el: '#listAppMl',
     data: {

        clickAyuda: false,
        mercadoVendedor,
        appSelect: '',
        requisitos: [],
        resultado: {},
        mostrar: false
         
    },
    methods: {
        clickAyudaMetodo: function() {
            let aux = this.clickAyuda
            this.clickAyuda = !aux
        },
        consultar: function(){ 
            let aux = new Array(2);
            let aux2 = new Array(2);
             
            for (let index = 0; index < this.mercadoVendedor.length; index++) {
                
                if (this.appSelect == this.mercadoVendedor[index].nombre ) {

                    for (let j = 0; j < this.mercadoVendedor[index].resultados.length; j++) {
                        aux2[j] = this.mercadoVendedor[index].resultados[j].data
                        // console.log(aux2)    
                        
                    }
                    
                    let urlTemporal = this.mercadoVendedor[index].url
                    let x,y,z
                            
                    for (let p = 0; p < this.requisitos.length; p++) {
                        if (p == 0) {
                            x = this.requisitos[p]
                        }else{
                            y = this.requisitos[p]
                        }                       
                    }
                    
<<<<<<< HEAD
                    if (this.mercadoVendedor.token) {
                        z = chrome.cookies.getAll({"domain": ".mercadolibre.com","name": "orgapi"},function(z){console.log(z[0].value)})
                        if (z == null) {
                            alert("Esta API usa una Cookie, Para usarla primero debes impersonalizar")                            
=======
                    if (this.mercadoEnvios[index].token) {
                        z = CookieMaster()
                        if (z == undefined) {
                            alert("Esta API usa una Cookie, Para usarla primero impers")                            
>>>>>>> 0e76ee50f2bfe457da175e3f2ff6fd3483c4dd04
                        }
                    }
                    // console.log(urlConstructora(urlTemporal,x,y,z))
                    
                    consulta(urlConstructora(urlTemporal,x,y,z),OPTS)
                        .then(function(data){ 
                            for (let i = 0; i < aux2.length; i++) {
                                let aux3 = aux2[i]
                                aux[i] = data[aux3]                                
                            }                            
                            console.log("este es el valor 1"+ aux)                                     
                                                     
                        })
                        
                        .catch(function(){
                            alert("Error en la consulta")
                        })
                    
                }
                
            }
            setTimeout(() => {
                console.log("este es el valor 2 "+ aux[0])
                console.log("llego") 

                for (let index = 0; index < this.mercadoVendedor.length; index++) {
                    if (this.appSelect == this.mercadoVendedor[index].nombre) {
                        for (let j = 0; j < this.mercadoVendedor[index].resultados.length; j++) {
                            let a = aux2[j]
                            let b = aux[j]
                            Vue.set(this.resultado, a,b )
                        }

                    }
                    
                }

                console.log(this.resultado)
                this.mostrar = true;    
                                            
            }, 1000);

            
           
            
            
        },
        userid: function(){

        }
    }

})
         
     
 let listMercadoPago = new Vue({
     el: '#listAppMp',
     data: {

        clickAyuda: false,
        mercadoPago,
        appSelect: '',
        requisitos: [],
        resultado: {},
        mostrar: false
         
    },
    methods: {
        clickAyudaMetodo: function() {
            let aux = this.clickAyuda
            this.clickAyuda = !aux
        },
        consultar: function(){ 
            let aux = new Array(2);
            let aux2 = new Array(2);
             
            for (let index = 0; index < this.mercadoPago.length; index++) {
                
                if (this.appSelect == this.mercadoPago[index].nombre ) {

                    for (let j = 0; j < this.mercadoPago[index].resultados.length; j++) {
                        aux2[j] = this.mercadoPago[index].resultados[j].data
                        // console.log(aux2)    
                        
                    }
                    
                    let urlTemporal = this.mercadoPago[index].url
                    let x,y,z
                            
                    for (let p = 0; p < this.requisitos.length; p++) {
                        if (p == 0) {
                            x = this.requisitos[p]
                        }else{
                            y = this.requisitos[p]
                        }                       
                    }
                    
                    if (this.mercadoEnvios[index].token) {
                        z = CookieMaster()
                        if (z == null) {
                            alert("Esta API usa una Cookie, Para usarla primero impers")                            
                        }
                    }
                    // console.log(urlConstructora(urlTemporal,x,y,z))
                    
                    consulta(urlConstructora(urlTemporal,x,y,z),OPTS)
                        .then(function(data){ 
                            for (let i = 0; i < aux2.length; i++) {
                                let aux3 = aux2[i]
                                aux[i] = data[aux3]                                
                            }                            
                            console.log("este es el valor 1"+ aux)                                     
                                                     
                        })
                        
                        .catch(function(){
                            alert("Error en la consulta")
                        })
                    
                }
                
            }
            setTimeout(() => {
                console.log("este es el valor 2 "+ aux[0])
                console.log("llego") 

                for (let index = 0; index < this.mercadoPago.length; index++) {
                    if (this.appSelect == this.mercadoPago[index].nombre) {
                        for (let j = 0; j < this.mercadoPago[index].resultados.length; j++) {
                            let a = aux2[j]
                            let b = aux[j]
                            Vue.set(this.resultado, a,b )
                        }

                    }
                    
                }

                console.log(this.resultado)
                this.mostrar = true;    
                                            
            }, 1000);

            
           
            
            
        },
        userid: function(){

        }
    }

})
 
 


function urlConstructora (URL,x,y,z){

    let auxURL = URL ;

    if(x != null ) auxURL = auxURL.replace("XXX",x)
        
    if(y != null) auxURL = auxURL.replace("YYY",y)
    
    if(z != null) auxURL = auxURL.replace("ZZZ",z)
            
    return auxURL
}

function CookieMaster(){
    return chrome.cookies.getAll({"domain": ".mercadolibre.com","name": "orgapi"},function(z){console.log(z[0].value)})
}

const OPTS = { crossDomain: true };
let promese

function consulta(URL_COMPLETA, OPTS) {
    promese = new Promise((resolve, reject) => {
        $.get(URL_COMPLETA, OPTS, function(data) {
            resolve(data)
        }).fail(() => reject())
    })

    return promese
}
