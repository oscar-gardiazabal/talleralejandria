<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
        <meta name="description" content="" />
        <title>Taller de Alejandria</title>

        <link rel="stylesheet" href="assets/css/master.css" />       
        <noscript>
        <link rel="stylesheet" href="assets/css/mobile.min.css" />
        </noscript>
        <script type="text/javascript" src="js/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="js/DB.js"></script>

        <script>

            var ADAPT_CONFIG = {
                path: 'assets/css/',
                dynamic: true,
                range: [
                    '0px    to 760px  = mobile.min.css',
                    '760px  to 980px  = 720.min.css',
                    '980px  to 1280px = 960.min.css',
                    '1280px to 1600px = 1200.min.css',
                    '1600px to 1940px = 1560.min.css',
                    '1940px to 2540px = 1920.min.css',
                    '2540px           = 2520.min.css'
                ]
            };
        </script>

        <script>

            function cycleImages() { //presentation home
                var $active = $('#portfolio_cycler .active');
                var $next = ($active.next().length > 0) ? $active.next() : $('#portfolio_cycler img:first');
                $next.css('z-index', 2);//move the next image up the pile
                $active.fadeOut(1500, function () {//fade out the top image
                    $active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the image
                    $next.css('z-index', 3).addClass('active');//make the next image the top one
                });
            }

            $(document).ready(function () {
                setInterval('cycleImages()', 4000);
            })

            var height = $(window).height();
            $("#altura").height(height + "px");

        </script>
        <script src="assets/js/adapt.min.js"></script>

        <link href="style/reset.css" rel="stylesheet" type="text/css" />
        <link href="style/text.css" rel="stylesheet" type="text/css" />
        <link href="style/style.css" rel="stylesheet" type="text/css" />
        <link href="style/plantilla.css" rel="stylesheet" type="text/css" />

    </head>
    <body id="texto" class="container_12">

        <div class="logo"></div>
        <div id="header" class="header">

            <!--<hr class="grid_12"/>-->

            <a href="./">
                <div class="grid_4" style="font-size: 16px">
    <!--                <img class="logoImg"  src="img/piramid.png" alt="logo del Taller de Alejandría, arquitectos"/>-->
                    TALLER DE ALEJANDRÍA
                </div>
            </a>

            <div class="grid_8">
                <a href="?p=proyectos">
                    <div class="titles">
                        PROYECTOS

                    </div>
                </a>
                <a href="?p=despacho">
                    <div class="titles" >
                        DESPACHO
                    </div>
                </a>
                <!--            <a href="?p=contacto">
                                <div class="titles" >
                                    CONTACTO
                                </div>
                            </a>-->
                <a href="?p=enlaces">
                    <div class="titles" >
                        ENLACES
                    </div>
                </a>
            </div>

            <hr class="grid_12" />

        </div>

        <div id="body"> </div>

        <hr class="grid_12" />
        <div class="grid_4">
            <p>
                <small>
                    <a target="_blank" href="https://maps.google.es/maps?q=41.400057,2.141835&hl=es&ll=41.400089,2.142095&spn=0.001736,0.002411&num=1&t=h&z=19"><b style="font-size: 12px;">Muntaner 400</b></a>, Principal segunda. 08006 Barcelona
                </small>
            </p>
        </div>
        <div class="grid_4 align_center">
            <p>
                <small>
                    Jose Antonio Gardiazabal                        &nbsp;
                    |
                    tfn: <img style="top: -10px" height="10px" src="assets/images/tfno.png"/>
                </small>
            </p>
        </div>
        <div class="grid_4 align_right">
            <p>
                <small>
                    <b style="font-size: 12px;">El Taller de Alejandría </b>, Arquitectos
                </small>
            </p>
        </div>

        <script>

            var global = {
                type: null
            }

            $.get(mapeo(), function (data) {
                $("#body").append(data);
            });

            function mapeo() {

                var dir = {
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
                    "datos": "base_datos.php",
                    "plantilla": "plantilla.php",
                    "prueba_mama": "pruebas/prueba_mama.php",
                    "prueba": "prueba.php",
                };

                var obj = getUrl();
                if (obj && obj.p && dir[obj.p]) {
                    return dir[obj.p];
                }
                return 'index_menu.php';
            }


            function getUrl() {

                var params = document.URL.split("?")[1];

                if (params) {
                    var url = params.split("&");
                    var obj = {};
                    for (var i = 0; i < url.length; i++) {
                        var n = url[i].split("=");
                        obj[n[0]] = n[1];
                    }
                    return obj;
                }
                return false;
            }

        </script>

    </body>
</html>