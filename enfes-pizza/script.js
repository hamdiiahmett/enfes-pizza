let sayac = 0;
let toplamFiyat = 0;
let sepetUrunleri = []; // İşte bu bizim boş poşetimiz (Array)

// Artık hem fiyatı hem ismi alıyoruz
function sepeteEkle(fiyat, isim) {
    // 1. Hesaplamalar
    sayac = sayac + 1;
    toplamFiyat = toplamFiyat + fiyat;

    // 2. İsmi poşete at (push = itekle/ekle)
    sepetUrunleri.push(isim);

    // 3. Ekranı Güncelle
    document.getElementById("sepet-sayisi").innerText = sayac;
    document.getElementById("toplam-fiyat").innerText = toplamFiyat;
    
    // 4. Sipariş özetini yazdır (Poşetin içindekileri göster)
    document.getElementById("siparis-ozeti").innerText = sepetUrunleri.join(" - ");
}

function sepetiBosalt() {
    sayac = 0;
    toplamFiyat = 0;
    sepetUrunleri = []; // Poşeti de boşaltıyoruz!

    document.getElementById("sepet-sayisi").innerText = sayac;
    document.getElementById("toplam-fiyat").innerText = toplamFiyat;
    document.getElementById("siparis-ozeti").innerText = "Henüz yok";
}

function satinAl() {
    // EĞER sepet boşsa (sayac 0 ise)
    if (sayac === 0) {
        alert("Sepetin boş! Aç karnına durulmaz, bir şeyler ekle. 🍕");
    } 
    // DEĞİLSE (yani sepette bir şeyler varsa)
    else {
        alert("Sipariş alındı! Toplam Tutar: " + toplamFiyat + " TL. Afiyet olsun!");
        // Sipariş bitince sepeti otomatik temizleyelim
        sepetiBosalt();
    }
}