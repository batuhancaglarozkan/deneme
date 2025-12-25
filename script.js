// Hizmet yılı seçeneklerini ekleme
const hizmetSelect = document.getElementById("hizmet");
for (let i = 0; i <= 50; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  hizmetSelect.appendChild(option);
}

// Hesaplama fonksiyonu
function hesapla() {
  const kadro = document.getElementById("kadro").value;
  const vergi = parseFloat(document.getElementById("vergi").value);
  const yevmiye = parseFloat(document.getElementById("yevmiye").value.replace(",", "."));
  const fiili = parseFloat(document.getElementById("fiili").value);
  const saat = parseFloat(document.getElementById("saat").value);
  const gece = parseFloat(document.getElementById("gece").value);
  const yogurt = parseFloat(document.getElementById("yogurt").value);
  const yol = parseFloat(document.getElementById("yol").value.replace(",", "."));
  const hizmet = parseInt(document.getElementById("hizmet").value);
  const engel = parseFloat(document.getElementById("engel").value);
  const oss = parseFloat(document.getElementById("oss").value);

  // Basit maaş hesaplama örneği
  let brut = yevmiye * fiili;
  brut += gece * 20; // gece zammı örnek
  brut += yogurt * 5; // yoğurt yardımı örnek
  brut += yol; // yol ücreti
  brut += hizmet * 50; // hizmet yılı ek
  brut -= oss; // özel sigorta çıkar
  brut -= engel; // engellilik indirimi

  let net = brut * vergi; // basit vergi uygulaması (örnek)
  net = Math.round(net);

  document.getElementById("sonuc").innerHTML = `
    <b>Brüt Maaş:</b> ${brut.toLocaleString('tr-TR')} TL<br>
    <b>Net Maaş:</b> ${net.toLocaleString('tr-TR')} TL
  `;
}

// Button event
document.getElementById("hesaplaBtn").addEventListener("click", hesapla);
