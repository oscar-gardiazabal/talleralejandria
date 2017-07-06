<?php

function getURL() {
    
}
?>

<script>

    var mapeo = {
    "proyectos": "proyectos/menu_proyectos.php",
            "despacho": "despacho/menu_despacho.php",
            "contacto": "contacto/menu_contacto.php",
            "enlaces": "enlaces/menu_enlaces.php",
            "obra_nueva": "proyectos/obra_nueva.php",
            "proyectos_rehabilitacion": "proyectos/proyectos_rehabilitacion.php",
            "no_construidos": "proyectos/no_construidos.php",
            "peritajes": "proyectos/peritajes.php",
            "donde_estamos": "contacto/donde_estamos.php",
            "quienes_somos": "despacho/quienes_somos.php",
            "equipo": "despacho/equipo.php",
            "mail": "contacto/mail.php",
            "send": "contacto/send.php",
            "proyectos_tipo": "proyectos/proyectos_tipo.php",
            "plantilla": "plantilla.php",
            "prueba_mama": "pruebas/prueba_mama.php",
            "prueba": "prueba.php",
    };
    
    var obj = getUrl();
    if (obj.p && mapeo[p]) {
    return mapeo[obj.p];
    }

    return 'index_menu.php';

</script>
