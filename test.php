<?php
$fp = fsockopen("180.151.101.196", 3333, $errno, $errstr, 30);
if (!$fp) {
    echo "$errstr ($errno)<br />\n";
} else {
    fwrite($fp, "Your message");
    while (!feof($fp)) {
        echo fgets($fp, 10);
    }
    fclose($fp);
}
?>