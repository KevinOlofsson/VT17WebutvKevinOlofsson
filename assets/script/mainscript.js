//ökar antalet ingredienser för olika antal
function setBatchNum(){
    console.log(document.getElementById("batchNum").value)
    if (document.getElementById("batchNum").value == 30) {
        document.getElementById("yeast").innerHTML = 50;
        document.getElementById("butter").innerHTML = 150;
        document.getElementById("sugar").innerHTML = 1;
        document.getElementById("egg").innerHTML = 1;
        document.getElementById("flour").innerHTML= 15;
        document.getElementById("milk").innerHTML = 6;
        document.getElementById("butter2").innerHTML =100;
        document.getElementById("vanillasugar").innerHTML =4;
        document.getElementById("sugar2").innerHTML = 1;
    }

    if (document.getElementById("batchNum").value == 40) {
        document.getElementById("yeast").innerHTML = 65;
        document.getElementById("butter").innerHTML = 200;
        document.getElementById("sugar").innerHTML = 1.3;
        document.getElementById("egg").innerHTML = 1.3;
        document.getElementById("flour").innerHTML= 20;
        document.getElementById("milk").innerHTML = 8;
        document.getElementById("butter2").innerHTML =130;
        document.getElementById("vanillasugar").innerHTML =5.5;
        document.getElementById("sugar2").innerHTML = 1.3;
    }
    if (document.getElementById("batchNum").value == 50) {
        document.getElementById("yeast").innerHTML = 85;
        document.getElementById("butter").innerHTML = 250;
        document.getElementById("sugar").innerHTML = 1.6;
        document.getElementById("egg").innerHTML = 1.6;
        document.getElementById("flour").innerHTML= 25;
        document.getElementById("milk").innerHTML = 10;
        document.getElementById("butter2").innerHTML =160;
        document.getElementById("vanillasugar").innerHTML =6.5;
        document.getElementById("sugar2").innerHTML = 1.6;
    }
    if (document.getElementById("batchNum").value == 60) {
        document.getElementById("yeast").innerHTML = 100;
        document.getElementById("butter").innerHTML = 300;
        document.getElementById("sugar").innerHTML = 2;
        document.getElementById("salt").innerHTML = 1;
        document.getElementById("egg").innerHTML = 2;
        document.getElementById("egg2").innerHTML = 2;
        document.getElementById("flour").innerHTML= 30;
        document.getElementById("milk").innerHTML = 12;
        document.getElementById("butter2").innerHTML =200;
        document.getElementById("vanillasugar").innerHTML =8;
        document.getElementById("sugar2").innerHTML = 2;
    }
    if (document.getElementById("batchNum").value == 70) {
        document.getElementById("yeast").innerHTML = 115;
        document.getElementById("butter").innerHTML = 350;
        document.getElementById("sugar").innerHTML = 2.3;
        document.getElementById("salt").innerHTML = 1;
        document.getElementById("egg").innerHTML = 2.3;
        document.getElementById("flour").innerHTML= 35;
        document.getElementById("milk").innerHTML = 14;
        document.getElementById("butter2").innerHTML =230;
        document.getElementById("vanillasugar").innerHTML =10;
        document.getElementById("sugar2").innerHTML = 2.3;
    }
    if (document.getElementById("batchNum").value == 80) {
        document.getElementById("yeast").innerHTML = 130;
        document.getElementById("butter").innerHTML = 400;
        document.getElementById("sugar").innerHTML = 2.6;
        document.getElementById("salt").innerHTML = 1;
        document.getElementById("egg").innerHTML = 2.6;
        document.getElementById("flour").innerHTML= 40;
        document.getElementById("milk").innerHTML = 16;
        document.getElementById("butter2").innerHTML =260;
        document.getElementById("vanillasugar").innerHTML =12;
        document.getElementById("sugar2").innerHTML = 2.6;
    }
    if (document.getElementById("batchNum").value == 90) {
        document.getElementById("butter").innerHTML = 450;
        document.getElementById("yeast").innerHTML = 150;
        document.getElementById("sugar").innerHTML = 3;
        document.getElementById("salt").innerHTML = 1.5;
        document.getElementById("egg").innerHTML = 3;
        document.getElementById("egg2").innerHTML = 3;
        document.getElementById("flour").innerHTML= 45;
        document.getElementById("milk").innerHTML = 18;
        document.getElementById("butter2").innerHTML =300;
        document.getElementById("vanillasugar").innerHTML =14;
        document.getElementById("sugar2").innerHTML = 3;
    }
    if (document.getElementById("batchNum").value == 100) {
        document.getElementById("yeast").innerHTML = 165;
        document.getElementById("butter").innerHTML = 500;
        document.getElementById("sugar").innerHTML = 3.3;
        document.getElementById("salt").innerHTML = 1.5;
        document.getElementById("egg").innerHTML = 3.3;
        document.getElementById("egg2").innerHTML = 3;
        document.getElementById("flour").innerHTML= 50;
        document.getElementById("milk").innerHTML = 20;
        document.getElementById("butter2").innerHTML =330;
        document.getElementById("vanillasugar").innerHTML =16;
        document.getElementById("sugar2").innerHTML = 3.3;
    }
}
