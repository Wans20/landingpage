let jenisBuku=[{buku:"English"},{buku:"Kitab"},{buku:"Novel"}];
let namaBuku=document.getElementById("menu");
jenisBuku.forEach((barang)=>{
    namaBuku.innerHTML+="<ul>"+"<li>"+barang.buku+"</li>"+"</ul>";
});