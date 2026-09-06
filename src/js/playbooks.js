const playbooksData = [
    {
        id: 1,
        title: "1. Out-of-Band (OOB) Standard",
        icon: "fa-phone-volume",
        description: "Za vsako zahtevo glede prenosa sredstev, spremembe IBAN-a ali deljenja občutljivih podatkov velja obvezno preverjanje preko predhodno potrjene interne telefonske številke ali osebnega sestanka."
    },
    {
        id: 2,
        title: "2. Tajna Varnostna Gesla (Passcode Phrase)",
        icon: "fa-key",
        description: "Vzpostavitev vnaprej dogovorjene tajne besedne zveze med financami in vodstvom. Če klicatelj ne navede gesla ob klicu v sili, se klic takoj prekine."
    },
    {
        id: 3,
        title: "3. AI Tone & Artifact Analyzers",
        icon: "fa-robot",
        description: "Implementacija vtičnikov v komunikacijske sisteme, ki opozarjajo na nenavadne vzorce v nujnih e-sporočilih in zaznavajo sintezo frekvenc v zvočnih tokovih."
    }
];

function renderPlaybooks(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    playbooksData.forEach(item => {
        html += `
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div class="w-10 h-10 rounded-xl bg-blue-900/50 border border-blue-700 flex items-center justify-center text-blue-400">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <h3 class="font-bold text-white text-base">${item.title}</h3>
                <p class="text-slate-400 text-xs leading-relaxed">${item.description}</p>
            </div>
        `;
    });
    container.innerHTML = html;
}