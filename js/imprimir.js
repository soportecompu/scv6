//https://www.youtube.com/watch?v=zAkKkEf0x3Y
function printPageArea(areaId){
    var printContent = document.getElementById(areaId).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}

