/*********************/
/*                   */
/*ÍNDICE DE SCRIPTING*/
/*                   */
/*********************/

/***LISTADO DE APIS***/
let mercadoEnvios = [
    {
        nombre : "Carrito paquetes en una misma etiqueta",
        descripcion: "Se puede ver si el user Seller decidió que va a querer enviar varios productos en un mismo paquete o no",
        url:"https://api.mercadolibre.com/users/XXXXXXX/shipping_preferences",
        habilitado:true
    },
    
    {
        nombre : "Codigo postal de MLM",
        descripcion: "Acá podremos saber si el código postal está activo ",
        url: "https://api.mercadolibre.com/countries/MX/zip_codes/XXXXXX",
        habilitado:true
    },
    {
        nombre : "Etiqueta ML",
        descripcion: "Nos permite validar una etiqueta generada a un seller sin necesidad de darle Click en Imprimir etiqueta",
        url: "https://api.mercadolibre.com/shipment_labels?shipment_ids=XXX&savePdf=Y&access_token=XXXXXXXX",
        habilitado:false
    },
    {
        nombre : "Formas de envios por Site",
        descripcion: "Muestra los distintos shippings habilitados en el site",
        url: "https://api.mercadolibre.com/sites/XXX/shipping_methods",
        habilitado:false
    },
]

let mercadoPago = [
    
    {
        nombre : "Balance",
        descripcion: "Podemos verificar el dinero de la cuenta de cada usuario, ver cuánto tiene disponible, retenido y por qué, en reclamo, etc.",
        url:"https://api.mercadolibre.com/users/XXXXXX/mercadopago_account/balance?access_token=XXXXX",
        habilitado:false
    },
    {
        nombre : "Bancos Aceptados para Retiros",
        descripcion: "Esta API nos ayudará a ver qué bancos son aceptados para retiros",
        url: "https://api.mercadolibre.com/sites/MLM/withdrawals/accepted_banks",
        habilitado:false
    },
    {
        nombre : "Bloqueo por VISA",
        descripcion: "Nos servirá para ver si un usuario está bloqueado para recibir pagos con visa",
        url:"https://api.mercadolibre.com/users/XXXXXXXX/accepted_payment_methods/visa?marketplace=MELI",
        habilitado:false
    },
    {
        nombre : "Item en B=P",
        descripcion: "Esta API nos servirá en caso de que nos consulten si el ITEM tiene B=P",
        url:"https://api.mercadolibre.com/immediate_payment/validate?item_id=XXXXXXXXXXX ",
        habilitado:false
    }

]

let mercadoShops = [{
    nombre : ""
}]
let mercadoVendedor = [
    {
        nombre : "Comercial",
        descripcion: "Permite ver el nombre de la campaña en la cual está el producto",
        url:"https://api.mercadolibre.com/deals/XXXXXX",
        habilitado:false
    },
    {
        nombre : "Aplicaciones",
        descripcion: "Permiter reconocer que aplicación realizó el cambio que vemos reflejado en zeus por el client id",
        url: "https://api.mercadolibre.com/applications/XXXXXXXXX",
        habilitado:false
    },
    
    {
        nombre : "Categorias",
        descripcion: "nos mostrará información sobre la composición de la categoría y de las categorías hijas",
        url: "https://api.mercadolibre.com/categories/XXXXXXX",
        habilitado:false
    },

    {
        nombre : "Credit Level",
        descripcion: "nos mostrará información sobre la composición de la categoría y de las categorías hijas",
        url: "https://api.mercadolibre.com/categories/XXXXXXX",
        habilitado:false
    },

    {
        nombre : "E-Shop",
        descripcion: "En esta APi podremos ver cuando se activó un E-shop",
        url: "https://api.mercadolibre.com/eshops/search?seller_id=XXXXXXXX",
        habilitado:false
    },
    {
        nombre : "Item",
        descripcion: "Permite ver si un producto está en campaña comercial, ver el tamaño de las fotos que tiene cargadas, así como las dimensiones del producto",
        url: "https://api.mercadolibre.com/items/XXXXXXXXXX",
        habilitado:false
    }
]
/*--1---API-DE-APLICACIONES---------------------------------*/
/*--2---API-DE-BALANCE--------------------------------------*/
/*--3---API-DE-BANCOS ACEPTADOS PARA RETIROS----------------*/
/*--4---API-DE-BLOQUEO POR VISA-----------------------------*/
/*--5---API-DE-CAMPAÑA COMERCIAL----------------------------*/
/*--6---API-DE-CARRITO PAQUETES EN UNA MISMA ETIQUETA-------*/
/*--7---API-DE-CATEGORÍAS-----------------------------------*/
/*--8---API-DE-CODIGO POSTAL DE MLM-------------------------*/
/*--9---API-DE-COSTOS DE ENVÍO------------------------------*/
/*--10--API-DE-CREDIT LEVEL---------------------------------*/
/*--11--API-DE-CUANTAS OFERTAS TIENE UNA SUBASTA------------*/
/*--12--API-DE-ESHOP----------------------------------------*/
/*--13--API-DE-ETIQUETA ML----------------------------------*/
/*--14--API-DE-FORMAS DE ENVÍO POR SITE---------------------*/
/*--15--API-DE-ITEM EN B=P----------------------------------*/
/*--16--API-DE-ÍTEMS----------------------------------------*/
/*--17--API-DE-LIBERACIÓN DE DINERO-------------------------*/
/*--18--API-DE-LIMITE MP POINT------------------------------*/
/*--19--API-DE-MEDIACIONES----------------------------------*/
/*--20--API-DE-MEDIOS DE PAGO ACEPTADOS POR SITE------------*/
/*--21--API-DE-MÉTODOS ACEPTADOS DE PAGO--------------------*/
/*--22--API-DE-MONTOS MÍNIMOS Y MÁXIMOS POR MEDIO DE PAGO---*/
/*--23--API-DE-OPERACIONES A LIBERAR------------------------*/
/*--24--API-DE-OPERACIONES RETENIDAS POR CHARGEBACKS--------*/
/*--25--API-DE-OPERACIONES RETENIDAS POR DEVOLUCIÓN EXPRESS-*/
/*--26--API-DE-OPINIONES------------------------------------*/
/*--27--API-DE-ORDERS---------------------------------------*/
/*--28--API-DE-PREGUNTAS REALIZADAS EN EL ÍTEM--------------*/
/*--29--API-DE-PREGUNTAS SIN RESPONDER----------------------*/
/*--30--API-DE-TITULARIDAD DE POINT-------------------------*/
/*--31--API-DE-USUARIO CONFIABLE----------------------------*/
/*--32--API-DE-VALIDACIÓN CÓDIGO UNIVERSAL DE PRODUCTO------*/


/*CÓDIGO*/
/*------API-DE-APLICACIONES---------------------------------*/

/*------API-DE-BALANCE--------------------------------------*/
/*------API-DE-BANCOS ACEPTADOS PARA RETIROS----------------*/
/*------API-DE-BLOQUEO POR VISA-----------------------------*/
/*------API-DE-CAMPAÑA COMERCIAL----------------------------*/
/*------API-DE-CARRITO PAQUETES EN UNA MISMA ETIQUETA-------*/
/*------API-DE-CATEGORÍAS-----------------------------------*/
/*------API-DE-CODIGO POSTAL DE MLM-------------------------*/
/*------API-DE-COSTOS DE ENVÍO------------------------------*/
/*------API-DE-CREDIT LEVEL---------------------------------*/
/*------API-DE-CUANTAS OFERTAS TIENE UNA SUBASTA------------*/
/*------API-DE-ESHOP----------------------------------------*/
/*------API-DE-ETIQUETA ML----------------------------------*/
/*------API-DE-FORMAS DE ENVÍO POR SITE---------------------*/
/*------API-DE-ITEM EN B=P----------------------------------*/
/*------API-DE-ÍTEMS----------------------------------------*/
/*------API-DE-LIBERACIÓN DE DINERO-------------------------*/
/*------API-DE-LIMITE MP POINT------------------------------*/
/*------API-DE-MEDIACIONES----------------------------------*/
/*------API-DE-MEDIOS DE PAGO ACEPTADOS POR SITE------------*/
/*------API-DE-MÉTODOS ACEPTADOS DE PAGO--------------------*/
/*------API-DE-MONTOS MÍNIMOS Y MÁXIMOS POR MEDIO DE PAGO---*/
/*------API-DE-OPERACIONES A LIBERAR------------------------*/
/*------API-DE-OPERACIONES RETENIDAS POR CHARGEBACKS--------*/
/*------API-DE-OPERACIONES RETENIDAS POR DEVOLUCIÓN EXPRESS-*/
/*------API-DE-OPINIONES------------------------------------*/
/*------API-DE-ORDERS---------------------------------------*/
/*------API-DE-PREGUNTAS REALIZADAS EN EL ÍTEM--------------*/
/*------API-DE-PREGUNTAS SIN RESPONDER----------------------*/
/*------API-DE-TITULARIDAD DE POINT-------------------------*/
const URL_TITULARIDAD = 'https://api.mercadolibre.com/point/services/poi/BBPOS-';
let SERIAL /*Test: 01099942713844*/
let URL_COMPLETA

/*----------Vue.js--------------*/
let listMercadoEnvios = new Vue ({
    el:'#listApp',
    data: {mercadoEnvios}
})



window.addEventListener('load', function() {
    let IDE_BOTOM = document.getElementById("ejapi-30");
    let IDE_BOTOM2 = document.getElementById("ejapi-30");
    IDE_BOTOM.addEventListener('click', buscarPoint, false);
});

function buscarPoint() {
    SERIAL = document.getElementById("serialpoint").value.trim()
    URL_COMPLETA = `${URL_TITULARIDAD}${SERIAL}`
    consulta(URL_COMPLETA, OPTS)
        .then(function(data) {
            addElement(data)
        })
        .catch(function() {
            alert("Revisa el Serial")
        })
}



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

