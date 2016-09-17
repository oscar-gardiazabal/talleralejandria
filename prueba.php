<?php
include 'mapeo.php';
include './mapeo.php';
include 'configuracion/base_datos.php';
include './configuracion/base_datos.php';

$order = array("\r\n", "\n", "\r");
$replace = '<br />'
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" LANG="ES">
    <head>

        <meta http-equiv="Cache-Control" content="no-cache"></meta>
        <meta HTTP-EQUIV="Expires" CONTENT="Tue, 01 Jan 1980 1:00:00 GMT"></meta>
        <meta HTTP-EQUIV="Pragma" CONTENT="no-cache"></meta>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="msvalidate.01" content="7109E40966DEF1AC21F4777922273C12" />
        <meta name="keywords" content="arquitecto, arquitectura, Barcelona, rehabilitación, obra, construcción, proyecto, edificio, vivienda"/>       
        <meta name="description" content="Despacho de Arquitectura en Barcelona con más de 35 años de experiencia y un largo recorrido en el desarrollo de proyectos tanto de rehabilitación como de obra nueva. Arquitectos de la Universidad Ramón Llull (URL) en Barcelona"/> 
        <meta http-equiv="Cache-Control" content="public"/> 

        <title>Taller de Alejandría. Arquitectos</title>
        <link href="img/favicon.ico" type="image/x-icon" rel="shortcut icon" />

        <script type="text/javascript" src="js//jquery-1.9.1.js"></script>
        <script type="text/javascript" src="js/jquery.nivo.slider.pack.js"></script>
        <script type="text/javascript">
            $(window).load(function () {
                $('#slider').nivoSlider();
            });
        </script>

        <script type="text/javascript">
            var ancho = screen.width;
        </script>


        <link href="style/estructura.css" rel="stylesheet" type="text/css" />
        <link href="style/reset.css" rel="stylesheet" type="text/css" />
        <link href="style/text.css" rel="stylesheet" type="text/css" />
        <link href="style/style.css" rel="stylesheet" type="text/css" />

        <link rel="stylesheet" href="style/nivo-slider.css" type="text/css" media="screen" />


        <style type="text/css"></style>

        <form action="?p=plantilla" method="post" name="formulario">
            <input type="hidden" name="id" value=""/>
        </form>


    </head>
    <body>

        <!--<script type="text/javascript" src="js/sketchy.js"></script>-->

        <div class="container_6 background" id="unselected">
            <div class="tabla">

                <div class="grid_2 logo">
                    <div><img class="logo_img" src="img/piramid.png" alt="logo del Taller de Alejandría, arquitectos"/></div>
                    <a href="./">
                        TALLER DE ALEJANDRÍAaaaa
                    </a>
                </div>

                <a href="?p=proyectos">
                    <div style="margin-left:266px;" class="titles"
                         onmouseover="this.style.fontSize = '25px'"
                         onmouseout="this.style.backgroundColor = '#bab9b9'; this.style.fontSize = '13px'">
                        PROYECTOS

                    </div>
                </a>
                <a href="?p=despacho">
                    <div style="margin-left:399px;" class="titles" onmouseover="javascript:this.style.fontSize = '25px';" onmouseout="javascript:this.style.backgroundColor = '#bab9b9'; javascript:this.style.fontSize = '13px'">
                        DESPACHO
                    </div>
                </a>
                <a href="?p=contacto">
                    <div style="margin-left:532px;" class="titles" onmouseover="javascript:this.style.fontSize = '25px';" onmouseout="javascript:this.style.backgroundColor = '#bab9b9'; javascript:this.style.fontSize = '13px'">
                        CONTACTO
                    </div>
                </a>
                <a href="?p=enlaces">
                    <div style="margin-left:665px;" class="titles" onmouseover="javascript:this.style.fontSize = '25px';" onmouseout="javascript:this.style.backgroundColor = '#bab9b9'; javascript:this.style.fontSize = '13px'">
                        ENLACES
                    </div>
                </a>
                <div>
                    <div style="height: 130px; width: 1px; margin-left: 0px" class="borde"></div>
                    <div style="height: 130px; width: 1px; margin-left:266px;" class="borde"></div>
                    <div style="height: 130px; width: 1px; margin-left: 797px;" class="borde"></div>
                    <div style="height: 130px; width: 1px; margin-left: 665px;" class="borde"></div>
                    <div style="height: 1px; width: 798px;" class="borde"></div>
                </div></div>

            <div class="tabla">
                <?php
                include getURL();
                ?>
            </div>

            <div class="tabla base">
                <!--style="margin-top: -25px; font-size: 20px; letter-spacing: 2px; word-spacing:50px; color: #666666; font-weight: bolder; overflow: hidden; text-decoration: blink;"-->
                <!-- Telf:934144525 alea@coac.net Barcelona -->

                <img class="base_imagen" style="" src="img/base.png" alt="teléfono. mail. Barcelona" />
            </div>
            <div style="height: 5px;"></div>
        </div>
        <?php
        include 'configuracion/cerrar_datos.php';
        ?>
        
    </body>
</html>
