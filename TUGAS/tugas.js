 document.write("SOAL NO 1"+"<br/>");
const nama= "Agung Setiawan";
let nilai;
let n_uts=45;
let n_uas=30;
let rata_rata=(n_uas+n_uts)/2;

let ket;
if(rata_rata >= 75){
    ket = "LULUS";
} else if (rata_rata >= 50){
    ket ="REMIDI";
} else {
    ket="TIDAK LULUS";
}
document.write("<br/>"+"Nama : "+nama+"<br/>");
document.write("Nilai UTS : "+n_uts+"<br/>");
document.write("Nilai UAS : "+n_uas+"<br/>");
document.write("Nilai Rata-rata : "+Math.ceil (rata_rata)+"<br/>");
document.write("*NOTE : SELAMAT ANDA "+ket+"<br/>")
document.write("<br/>"+"<br/>")


document.write("<br/>"+"SOAL NO 2 "+"<br/>");
let diskon;
let harga=[20000,40000,65000,80000];
for (let i=0; i<harga.length; i++){
    document.write("<br/>Data Barang " +i+" Harga : "+harga[i]);
    if(harga[i]>=50000){
        diskon = 0.05*harga[i];
        document.write("<br/>"+"DISKON 5% : " + diskon);}
}document.write("<br/>"+"<br/>")


document.write("<br/>"+"SOAL NO 3" +"<br/>");
let daftar="sudah";
let bayar=0;
let ospek;
if (daftar=="sudah"&&bayar==1){
    ospek="Silahkan Mengikuti Ospek";
}else if(daftar=="sudah"&&bayar==0){
    ospek="Silahkan Bayar Terlebih Dahulu";
}else{
    ospek="Silahkan Hubungi Administrasi";
}
document.write("<br/>"+ospek);