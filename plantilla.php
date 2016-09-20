
<div class="tabla" id="altura"> 

    <div class="plantilla_proyectos">

        <div class="grid_12">
            <h1>
                <tag id="plantilla_work"></tag>
                <tag id="plantilla_name"></tag>
            </h1>

            <div id="otros_proyectos"> ver otros proyectos </div>

        </div>
        <div id="prueba" class="grid_10">

            <div id="gallery_output"></div>

            <div id="plantilla_detalles">

                <h2 id="plantilla_descripcion">
                </h2>

                <span id="plantilla_fecha">
                    Año de finalización: 
                    <span></span>
                </span><br/>

                Ubicación: 
                <span id="plantilla_lugar">
                </span> <br/>

                Promotor: 
                <span id="plantilla_promotor">
                </span><br/>

                Sup:
                <span id="plantilla_superficie">
                </span><br/>

                Presupuesto:
                <span id='plantilla_presupuesto'>
                </span>

                <br/>

            </div>
        </div>

        <div id="gallery_nav" class="grid_2"> </div>

    </div>

</div>

<script>

    var obj = getUrl();

    var p = Projects[obj.tabla][obj.id_proyecto];

    var attrs = {
        work: "plantilla_work",
        name: "plantilla_name",
        desc: "plantilla_descripcion",
        promoter: "plantilla_promotor",
        place: "plantilla_lugar",
        year: "plantilla_fecha",
        sup: "plantilla_superficie"
    };

    for (var attr in attrs) {
        console.log(p[attr])
        p[attr] ? $("#" + attrs[attr]).append(p[attr]) : $("#" + attrs[attr]).hide();
    }

    if (p.budget) {
        $("#plantilla_presupuesto").text(p.budget.val + p.budget.coin);
    }

    var url = "imagenes_proyectos/" + obj.id_proyecto + "/";
    $.ajax({
        url: url + "media",
        success: function (data) {
            var i = 0;
            $(data).find("td > a").each(function () {

                if (i != 0) { //quit standard href 1st path

                    var src = url + $(this).attr("href");
                    var img = $("<img src='" + src + ">");
                    $("#gallery_output").append(img);

                    img.click(function () {
                        window.location.href = this.src;
                    });

                    var navImg = $("<img src='" + url + "media/" + $(this).attr("href") + "'>");
                    $("#gallery_nav").append(navImg);

                    navEvent(navImg, src);
                }
                if (i == 1) {
                    outputChange(src)
                }
                i++;

                $("#gallery_output img").not(":first").hide();
            });
        }
    });

    function navEvent(navImg, src) {
        navImg.click(function () {
            outputChange(src);
        });
    }

    function outputChange(src) {
        var img = $("<img src='" + src + "'>");
        img.load(function () {
            $("#gallery_output").html(img);
            img.show();

            img.css("opacity", 100);

            var imageHeight = $("#gallery_output img").height();
            $("#gallery_output").height(imageHeight);
        })
    }

</script>

