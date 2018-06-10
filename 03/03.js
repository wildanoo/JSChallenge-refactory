const daftar_produk = {
    "001" : {"kode_produk" : "001", "nama" : "Iphone X", "harga" : 15000000, "kuantitas" : 1 },
    "002" : {"kode_produk" : "002","nama" : "Asus Zenfone 5", "harga" : 4000000, "kuantitas" : 1 },
    "003" : {"kode_produk" : "003","nama" : "Xiaomi Redmi Note 5", "harga" : 3000000, "kuantitas" : 1 },
    "004" : {"kode_produk" : "004","nama" : "Samsung Galaxy A6+", "harga" : 4500000, "kuantitas" : 1 },
    "005" : {"kode_produk" : "005","nama" : "Samsung Galaxy J7", "harga" : 3500000, "kuantitas" : 1 },
    "006" : {"kode_produk" : "006","nama" : "Iphone 8 Plus", "harga" : 13000000, "kuantitas" : 1 },
    "007" : {"kode_produk" : "007","nama" : "Xiaomi Mi A1", "harga" : 2700000, "kuantitas" : 1 },
    "008" : {"kode_produk" : "008","nama" : "Redmi Note 5A", "harga" : 1500000, "kuantitas" : 1 },
    "009" : {"kode_produk" : "009","nama" : "Oppo F7", "harga" : 4000000, "kuantitas" : 1 },
    "010" : {"kode_produk" : "010","nama" : "Vivo V9", "harga" : 3400000, "kuantitas" : 1 }
}

let cart = [];

function tambahItemKeCart(item){
    cart.push(daftar_produk[item]);
}

function addItemButton(){
    let val = document.getElementById("tambah").value;
    if (val != "") {
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
             <td>${v.kode_produk}</td>
             <td>${v.nama}</td>
             <td>${v.harga}</td>
             <td>${v.kuantitas}</td>
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
