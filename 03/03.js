const daftar_produk = [
    {"kode_produk" : "001", "nama" : "Iphone X", "harga" : 15000000, "kuantitas" : 1 },
    {"kode_produk" : "002","nama" : "Asus Zenfone 5", "harga" : 4000000, "kuantitas" : 1 },
    {"kode_produk" : "003","nama" : "Xiaomi Redmi Note 5", "harga" : 3000000, "kuantitas" : 1 },
    {"kode_produk" : "004","nama" : "Samsung Galaxy A6+", "harga" : 4500000, "kuantitas" : 1 },
    {"kode_produk" : "005","nama" : "Samsung Galaxy J7", "harga" : 3500000, "kuantitas" : 1 },
    {"kode_produk" : "006","nama" : "Iphone 8 Plus", "harga" : 13000000, "kuantitas" : 1 },
    {"kode_produk" : "007","nama" : "Xiaomi Mi A1", "harga" : 2700000, "kuantitas" : 1 },
    {"kode_produk" : "008","nama" : "Redmi Note 5A", "harga" : 1500000, "kuantitas" : 1 },
    {"kode_produk" : "009","nama" : "Oppo F7", "harga" : 4000000, "kuantitas" : 1 },
    {"kode_produk" : "010","nama" : "Vivo V9", "harga" : 3400000, "kuantitas" : 1 }
];

let cart = [];

function tambahItemKeCart(item){

    cart.push(findProduct(item));
}

function findProduct(param){
    return daftar_produk.find(function (obj) { return obj.kode_produk === param; });
}

function addItemButton(){
    let val = document.getElementById("tambah").value;
    if (val != "" && typeof findProduct(val) != "undefined") {
        document.querySelector("#listCart>tbody").innerHTML = "";
        tambahItemKeCart(val);
        document.getElementById("tambah").value = "";
        tampilkanIsiCart();
        totalBelanja();
    }
}

function tampilkanIsiCart(){

    for (const [i, v] of cart.entries()) {
        document.querySelector("#listCart>tbody").innerHTML += 
         `<tr>
             <td>${i + 1}</td>
             <td class="kodeProd">${v.kode_produk}</td>
             <td>${v.nama}</td>
             <td>${v.harga}</td>
             <td>${v.kuantitas}</td>
             <td class="hapusItem" onclick="hapusItemBelanja()">Hapus</td>
         </tr>
         `;
    }
}

function totalBelanja(){
    let totalBelanja = 0;

    document.querySelector("#totalBelanja").innerHTML = "";
    cart.forEach(e => {
        totalBelanja += e.harga;
    });
    document.querySelector("#totalBelanja").innerHTML = totalBelanja;
    console.log(totalBelanja);
}

function hapusItemBelanja(){
    const kodeProd = event.target.parentNode.querySelector('.kodeProd').innerHTML;
    // console.log(event.target.parentNode.querySelector('.kodeProd').innerHTML);

    cart = cart.filter(item => item.kode_produk != kodeProd);
    document.querySelector("#listCart>tbody").innerHTML = "";
    tampilkanIsiCart();
    totalBelanja();
}
