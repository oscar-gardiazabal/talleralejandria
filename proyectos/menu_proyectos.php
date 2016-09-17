
<div class="grupo">
    <h1>
        Informes y peritajes
        <a href="?p=proyectos_tipo&menu=peritaje&tabla=peritaje">
            <span>[+más]</span>
        </a>
    </h1>
</div>

<script>

    set3BestProjects("no_construidos", "Anteproyectos");
    set3BestProjects("proyectos_rehabilitacion", "Proyectos de Rehabilitación");
    set3BestProjects("obra_nueva", "Proyectos de Obra Nueva");

    function set3BestProjects(type, desc) {

        var grupo = $("<div id=" + type + " class='grupo'>");
        var h1 = $("<h1>");
        h1.text(desc);
        grupo.append(h1);

        var a = $("<a class='mas' href='?p=proyectos_tipo&menu=" + type + "&tabla=" + type + "'>");
        a.text("[+más]");
        h1.append(a);

        var projects = Projects[type];

        var n = 0;
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

            grupo.append(grid_4)
            n++;
            if (n == 3) {
                break;
            }
        }

        var hr = $("<hr class='grid_12'>");
        grupo.append(hr);

        $("#body").prepend(grupo);
    }

</script>
