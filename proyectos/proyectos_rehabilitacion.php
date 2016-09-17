<div class="proyectos">
    
    <div class="titulo">
        Rehabilitaciones
    </div>

    <?
    $query = "SELECT * FROM proyecto WHERE tipo='rehabilitacion' order by fecha desc";
    $result = mysql_db_query($dbname, $query, $link);
    while ($row = mysql_fetch_array($result)) {
        ?>
        <div class="entrada">
            <div class="fecha"><?= htmlentities($row[fecha]) ?></div>
            <p class="texto">
                <?= htmlentities($row[nombre]) ?><br/>
                <?= htmlentities($row[lugar]) ?><br/>
                Promotor: <?= htmlentities($row[promotor]) ?> Sup: <?= htmlentities($row[superficie]) ?><br/>
                Presupuesto estimado: <?= htmlentities($row[presupuesto]) ?><br/>
            </p>



            <div class="imagenes">
                <a href="?p=plantilla&id_proyecto=<?= htmlentities($row[id_proyecto]) ?>">
                    <?
                    $ruta = "imagenes_proyectos/" . htmlentities($row[id_proyecto]) . "/peke/" . htmlentities($row[id_proyecto]) . ".jpg";
                    if (file_exists($ruta)) {
                        ?>
                        <img src="<?= $ruta ?>"/>
                    <? } ?>
                </a>
            </div>

            
        </div>
        <?
    }
    mysql_free_result($result);
    ?>

</div>
