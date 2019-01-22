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
        url: "https://api.mercadolibre.com/users/xxx/shipping_preferences",
        habilitado: true,
        token: false,
        requiere:{
            users: "Ingresa el usuario",
            ggg: "ho"
        }
    },
    {
        nombre: "CATEGORÍA HABILITADA PARA ENVÍO POR ME",
        funcionamiento: "Debes ingresar el User Id y el Id de la categoría",
        descripcion: "Esta herramienta nos permite validar si un usuario está habilitado para enviar por Mercado Envíos por una categoría específica.",
        url: " https://api.mercadolibre.com/users/xxx/shipping_modes?category_id=yyy",
        habilitado: true,
        token: false,
        requiere: {
            users: "Ingresa el User ID",
            category: "Ingresa el ID de la Categoría."
        }
    },


    {
        nombre: "GENERAR ETIQUETA ML",
        descripcion: "Nos permite validar una etiqueta generada a un seller sin necesidad de darle Click en Imprimir etiqueta",
        url: "https://api.mercadolibre.com/shipment_labels?shipment_ids=xxx&savePdf=Y&access_token=yyy",
        habilitado: false,
        token: true,
        requiere: {
            shipping: "Ingresa el ID del shipping"
        }

    },

]
let mercadoPago = [{
        nombre: "BALANCE DE SALDO EN MERCADO PAGO",
        descripcion: "Podemos verificar el dinero de la cuenta de cada usuario, ver cuánto tiene disponible, retenido y por qué, en reclamo, etc.",
        url: "https://api.mercadolibre.com/users/xxx/mercadopago_account/balance?access_token=yyy",
        /* Balance general de cuenta */
        url: "https://api.mercadolibre.com/mercadopago_account/movements/search?user_id=xxx&status=unavailable&access_token=yyy",
        /* Operaciones a liberar */
        url: "https://api.mercadolibre.com/mercadopago_account/movements/search?user_id=xxx%20&label=unavailable_by_dispute&access_token=yyy",
        /* Retenidas por Mediaciones */
        url: "https://api.mercadolibre.com/mercadopago_account/movements/search?user_id=xxx%20&label=unavailable_by_chargeback&access_token=yyy",
        /* Retenidas por Chargebacks */
        url: "https://api.mercadolibre.com/mercadopago_account/movements/search?user_id=xxx%20&label=unavailable_by_shipping_return&access_token=yyy",
        /* Retenidas por Devolución Express */
        habilitado: true,
        token: true,
        requiere: {
            user: "Ingresa el ID del Usuario"
        }

    },
    {
        nombre: "BLOQUEO POR VISA",
        descripcion: "Nos servirá para ver si un usuario está bloqueado para recibir pagos con visa",
        url: "https://api.mercadolibre.com/users/xxx/accepted_payment_methods/visa?marketplace=MELI",
        habilitado: true,
        token: false,
        requiere: {
            user: "Ingresa el ID del Usuario"
        }
    },
    {
        nombre: "INFORMACIÓN DE UN COBRO",
        descripcion: "Esta herramienta proporciona toda la información asociada a un cobro, detalle, cliente, fecha y hora de liberación exacta, etc.",
        url: "https://api.mercadopago.com/v1/payments/xxx?access_token=yyy",
        url: "https://api.mercadolibre.com/mercadopago_account/movements/search?reference_id=xxx&user_id=zzz&access_token=yyy",
        habilitado: true,
        token: true,
        requiere: {
            payment: "Ingresa el ID del cobro",
            user: "Ingresa el ID del Usuario"
        }
    },
    {
        nombre: "LIMITE MP POINT",
        descripcion: "Esta API nos servirá en caso de que nos consulten si el ITEM tiene B=P",
        url: "https://api.mercadolibre.com/point/services/caps/xxx ",
        habilitado: true,
        toke: false,
        requiere: {
            user: "Ingresa el ID del Usuario"
        }
    },
    {
        nombre: "TITULARIDAD DE POINT",
        descripcion: "Esta API nos servirá en caso de que nos consulten si el ITEM tiene B=P",
        url: "https://api.mercadolibre.com/point/services/poi/BBPOS-xxx ",
        habilitado: true,
        toke: false,
        requiere: {
            serial: "Ingresa el Serial del Point"
        }
    }
]
let mercadoShops = [{
    nombre: ""
}]
let mercadoVendedor = [{
        nombre: "INFORMACIÓN DE CATEGORÍAS",
        funcionamiento: "Ingresa el ID de la categoría, puedes obtenerlo desde CX debajo del título de la publicación de un usuario.",
        descripcion: "Esta herramienta, nos indicará información correspondiente a una categoría específica.",
        url: "https://api.mercadolibre.com/categories/xxx",
        habilitado: true,
        token: false,
        requiere: {
            users: "Ingresa el ID de la Categoría"
        }
    },
    {
        nombre: "INFORMACIÓN DE CUENTA",
        funcionamiento: "Ingresa el ID del usuario, para que funcione, debes hacerlo en modo incógnito desde la impersonalización del usuario, recuerda no tener más de una impersonalización activa.",
        descripcion: "Esta herramienta, nos indicará toda la información asociada a la cuenta de un usuario de Mercado Libre",
        url: "https://api.mercadolibre.com/users/xxx?access_token=yyy",
        habilitado: true,
        token: true,
        requiere: {
            users: "Ingresa el ID del Usuario"
        }
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
        url: "https://api.mercadolibre.com/categories/XXXXXXX",
        habilitado: false
    },

    {
        nombre: "PRODUCT ADS",
        descripcion: "Esta herramienta nos permitirá validar diferentes aspectos de la campaña de publicidad de un usuario, fecha de creación, visitas e inversión en la misma.",
        url: "https://api.mercadolibre.com/eshops/search?seller_id=XXXXXXXX",
        habilitado: false
    }
]


/*----------Vue.js--------------*/
let listMercadoEnvios = new Vue({
    el: '#listAppMe',
    data: {

        clickAyuda: false,
        mercadoEnvios,
        appSelect: '',
        requisitos: []  
         
    },
    methods: {
        clickAyudaMetodo: function() {
            let aux = this.clickAyuda
            this.clickAyuda = !aux
        }
    }

})

let listMercadoVendedor = new Vue({
    el: '#listAppMl',
    data: {

        clickAyuda: false,
        mercadoVendedor,
        appSelect: '',
        numeroApp: 0
    },
    methods: {
        clickAyudaMetodo: function() {
            let aux = this.clickAyuda
            this.clickAyuda = !aux
        },
        consultar: function(){
            console.log(this.input)
        }

    }

})
let listMercadoPago = new Vue({
    el: '#listAppMp',
    data: {

        clickAyuda: false,
        mercadoVendedor,
        appSelect: '',
        numeroApp: 0
    },
    methods: {
        clickAyudaMetodo: function() {
            let aux = this.clickAyuda
            this.clickAyuda = !aux
        }
    }

})
let listMercadoShops = new Vue({
    el: '#listAppMs',
    data: {

        clickAyuda: false,
        mercadoVendedor,
        appSelect: '',
        numeroApp: 0
    },
    methods: {
        clickAyudaMetodo: function() {
            let aux = this.clickAyuda
            this.clickAyuda = !aux
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







// function buscarPoint() {
//     SERIAL = document.getElementById("serialpoint").value.trim()
//     URL_COMPLETA = `${URL_TITULARIDAD}${SERIAL}`
//     consulta(URL_COMPLETA, OPTS)
//         .then(function(data) {
//             addElement(data)
//         })
//         .catch(function() {
//             alert("Revisa el Serial")
//         })
// }



/*------API-DE-USUARIO CONFIABLE----------------------------*/


/*------API-DE-VALIDACIÓN CÓDIGO UNIVERSAL DE PRODUCTO------*/


/*----------API TITULARIDAD POINT----------*/



/*----------API Liberación Cobros Mercado Pado----------*/

/*    URL_COMPLETA = `https://api.mercadolibre.com/mercadopago_account/movements/search?reference_id=2959486596&user_id=189920495&access_token=XXXXXX'` */



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

// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }


// function buscarCobro() {
//     let user = document.getElementById("user_id").value.trim()
//     let cobro = document.getElementById("cobro_id").value.trim()
//     let token = document.getElementById("cobro_id").value.trim()
//     URL_COMPLETA = `https://api.mercadolibre.com/mercadopago_account/movements/search?reference_id=${cobro}&user_id=${user}&access_token=${token}'`
//     consulta(URL_COMPLETA, OPTS)
//         .then(function(data) {
//             addElement(data)
//         })
//         .catch(function() {
//             alert("Revisa el Serial")
//         })
// }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function buscarCobro() {
    let user = document.getElementById("user_id").value.trim()
    let cobro = document.getElementById("cobro_id").value.trim()
    let token = document.getElementById("cobro_id").value.trim()
    URL_COMPLETA = `https://api.mercadolibre.com/mercadopago_account/movements/search?reference_id=${cobro}&user_id=${user}&access_token=${token}'`
    consulta(URL_COMPLETA, OPTS)
        .then(function(data) {
            addElement(data)
        })
        .catch(function() {
            alert("Revisa el Serial")
        })
}
