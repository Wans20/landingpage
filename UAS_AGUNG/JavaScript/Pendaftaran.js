let now=new Date();
let tahun=now.getFullYear();
let bulan=now.getMonth()+1;
document.getElementById("btn_sbmd").disabled=true;

// nama
document.getElementById("nama").onkeyup=function(){
let nama=document.getElementById("nama");
nama.value=nama.value.toUpperCase();
}

// password
document.getElementById("pass2").onchange=function(){
let pass1=document.getElementById("pass1").value;
let pass2=document.getElementById("pass2").value;
if(pass2==pass1){
    document.getElementById("btn_sbmd").disabled=false;
}else if(pass2!=pass1){
    alert("Password Yang Anda Masukan Tidak Sesuai !!!");
    document.getElementById("btn_sbmd").disabled=true;
    }
}
// form_validasi
document.getElementById("btn_sbmd").onclick=function(){
document.getElementById("daftar").style.display="none";
    let nama=document.getElementById("nama").value;
    let user=document.getElementById("txt_user").value;
    let pass1=document.getElementById("pass1").value;
    let pass2=document.getElementById("pass2").value;
    let tlp=document.getElementById("No_Tlp").value;
    let kode=nama.substring(0,2);
    if(nama===""||pass1===""||pass2===""||tlp===""){
        alert("Semua Form Wajib Di Isi !!!");
    }else{
    let tampil='<div class="text-center">'+'<h5>Terimakasih telah melakukan pendaftaran menjadi member</h5>'+'</div>'+
        "<p>"+"Nama          :   "+nama+"</p>";
        tampil+="<p>"+"Username         :   "+user+"</p>";
        tampil+="<p>"+"Nomor telepon    :   "+tlp+"</p>";
        tampil+="<p>"+"Kode Member  :   "+bulan+tahun+kode+"</p>";
        tampil+='<p class="text-center">'+"Silahkan cek email untuk mendapat link aktivasi"+'</p>';

        document.getElementById("valid_form").innerHTML=tampil;
    }
}