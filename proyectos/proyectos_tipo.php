<!--?php $menu = $_GET['menu']; ?
?php $tabla = $_GET['tabla']; ?-->
<div id="proyectos" class="grid_12 proyectos">

    <h1>
<!--        ?php
        if ($menu == "rehabilitacion") {
            echo 'Proyectos de rehabilitación';
        }
        if ($menu == "obra_nueva") {
            echo 'Obra nueva';
        }
        if ($menu == "ejecucion") {
            echo 'Proyectos en ejecución';
        }
        if ($menu == "no_construido") {
            echo 'Anteproyectos';
        }
        ?-->
    </h1>

<!--    ?
    $query = "SELECT * FROM $tabla WHERE tipo= '$menu' order by fecha desc";
    $result = mysql_db_query($dbname, $query, $link);
    while ($row = mysql_fetch_array($result)) {
        ?-->
        <hr style="margin-left:45px; margin-bottom: 0px; padding-bottom: 9px"/>
        <div class="entrada">

            <div class="fecha">
<!--?= htmlentities($row[fecha]) ?-->
            </div>
            <div class="texto">
                <h2>
<!--?= htmlentities($row[nombre]) ?-->
                </h2>

<!--                ?
                if ($row[lugar] != null) {
                    echo "" . htmlentities($row[lugar]) . "<br/>";
                }

                if ($row[promotor] != null) {
                    echo "Promotor: " . htmlentities($row[promotor]) . "<br/>";
                }

                if ($row[superficie] != null) {
                    echo "Sup: " . htmlentities($row[superficie]) . "<br/>";
                }

                if ($row[presupuesto_EUR] > 0) {
                    echo "Presupuesto estimado: " . number_format($row[presupuesto_EUR], 2, ",", ".") . " €<br/>";
                }

                if ($row[presupuesto_ptas] > 0) {
                    echo "Presupuesto estimado: " . number_format($row[presupuesto_ptas], 0, ",", ".") . " ptas<br/>";
                }
                ?-->

            </div>

            <div class="imagenes">
                <!--<a href="?p=plantilla&tabla=?= $tabla ?>&id_proyecto=?= htmlentities($row[id_proyecto]) ?">-->
//                    ?
//                    $ruta = "imagenes_proyectos/" . htmlentities($row[id_proyecto]) . "/peke/" . htmlentities($row[id_proyecto]) . ".jpg";
//                    if (file_exists($ruta)) {
//                        ?
//                        <img alt="" src="?= $ruta ?"/>-->
//                    <!--? } ?-->
                <!--</a>-->
            </div>

        </div>
<!--        ?
    }
    mysql_free_result($result);
    ?-->

    <a href="?p=proyectos">
        <div class="otros_proyectos" style="top: 13px;"> volver al menú </div>
    </a>

</div>

<script>
    
    var desc = {
        obra_nueva: "Obra nueva",
        proyectos_rehabilitacion: "Proyectos de Rehabilitación",
        no_construidos: "Anteproyectos"
    };
    
    var url = getUrl();
    
    var type = url.menu;

    var grupo = $("<div class='grupo'>");
    var h1 = $("<h1>");
    h1.text(desc[type]);
    grupo.append(h1);
    
    console.log(type);
    var projects = Projects[type];

    for (var id in projects) {

        var p = projects[id];

        var grid_4 = $("<div class='grid_4'>");

        var a = $("<a class='image_content' href='?p=plantilla&tabla=" + type + "&id_proyecto=" + id + " '>");
        grid_4.append(a);

        var img = $("<img alt='" + p.name + "' src='imagenes_proyectos/" + id + "/media/1.jpg' />");
        a.append(img);

        var titulo = $("<p class='titulo_opciones'>");
        titulo.text(p.work ? p.work + ". " : "" + p.name);
        grid_4.append(titulo);

        var texto = $("<p class='texto_opciones'>");
        texto.text(p.desc ? p.desc : "");
        grid_4.append(texto);
        
        console.log(123)
        grupo.append(grid_4);
    }

    var hr = $("<hr class='grid_12'>");
    grupo.append(hr);

    $("#proyectos").prepend(grupo);

</script>
