<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        $amount = $quantity * $price;
        echo "<tr>";
        //TODO
        echo "<td>";
        echo "<img src='images/books/tinysquare/$file'>";
        echo "</td>";
        echo "<td class=\"mdl-data-table__cell--non-numeric\">$title</td>";
        echo "<td>$quantity</td>";
        echo "<td>$";
        echo number_format($price,2,".","");
        echo "</td>";
        echo "<td>$";
        echo number_format($amount,2,".","");
        echo "</td>";
        echo "</tr>";

    }
?>