let jenisBuku=[{buku:"English"},{buku:"Kitab"},{buku:"Novel"}];
let NamaBuku=document.getElementById("MenuBuku");
jenisBuku.forEach((jenis) => { NamaBuku.innerHTML+="<ul>" + "<li>" + jenis.buku + "</li>" + "</ul>"});