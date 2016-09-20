
<script>

    $(document).ready(function() {
        var ancho = $("#portfolio_cycler").width();
        var alto = ancho * 0.46;
        $("#portfolio_cycler").css("height", alto + "px");
    });

</script>

<div class="grid_12">
    <div id="portfolio_cycler"> </div>
</div>

<hr class="grid_12" />

<div align="justify">
    <div class="grid_4">
        <div>
            <h4>Estudio de Arquitectura</h4>
            <p>
                El Taller de Alejandría es un despacho de arquitectura donde te ofrecemos servicios integrales, tanto técnicos como de gestión, para dar respuesta a tus necesidades manteniendo un estricto seguimiento presupuestario de la obra.
            </p>
        </div>
    </div>
    <div class="grid_4">
        <div>
            <h4>Rehabilitaciones</h4>
            <p>
                En nuestra ámplia experiencia en rehabilitaciones de toda clase de envergadura, trabajamos dando respuesta a las encesidades técnicas y económicas. 
            </p>
        </div>
    </div>
    <div class="grid_4">
        <div>
            <h4>Informes y Peritajes</h4>
            <p>
                También ofrecemos servicios periciales y valoraciones tanto para particulares como para entidades públicas judiciales.
            </p>
        </div>
    </div>
</div>

<script>

    var url = "imagenes_proyectos/_b_y_n/";
    $.ajax({
        url: url,
        success: function(data) {
            var i = 0;
            $(data).find("td > a").each(function() {

                if (i != 0) { //quit standard href 1st path
                    var src = url + $(this).attr("href");
                    var img = $("<img name='img' alt='imágenes de proyectos del arquitecto' src='" + src + "'>");
                    $("#portfolio_cycler").append(img);
                }
                i++;
            });

        $("#portfolio_cycler img:first").addClass("active");
        }
    });

</script>
