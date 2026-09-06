/**
 * Forenzični laboratorij - Modul za podatke in interaktivno analizo
 * Vsebuje definicije vzorcev napadov, zvočnih posnetkov in video maskiranja.
 */

const labItems = [
    {
        title: "Forenzična analiza: Voice Cloning (Glasovni klon)",
        preview: `
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <div class="flex items-center justify-between text-xs text-slate-400">
                    <span class="flex items-center"><i class="fa-solid fa-microphone text-blue-400 mr-2"></i> WhatsApp Glasovno Sporočilo (CEO)</span>
                    <span>0:24 / 0:45</span>
                </div>
                <div class="flex items-center space-x-3 py-2">
                    <button onclick="playAudioSim()" class="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition shadow-lg shadow-blue-600/30">
                        <i class="fa-solid fa-play ml-0.5"></i>
                    </button>
                    <div class="flex-1 flex items-center space-x-1 h-8 bg-slate-900 px-3 rounded-lg border border-slate-800">
                        <div class="w-1 bg-blue-500 h-3 audio-wave rounded-full"></div>
                        <div class="w-1 bg-blue-500 h-6 audio-wave rounded-full" style="animation-delay: 0.2s"></div>
                        <div class="w-1 bg-blue-500 h-4 audio-wave rounded-full" style="animation-delay: 0.4s"></div>
                        <div class="w-1 bg-blue-500 h-7 audio-wave rounded-full" style="animation-delay: 0.1s"></div>
                        <div class="w-1 bg-blue-500 h-5 audio-wave rounded-full" style="animation-delay: 0.3s"></div>
                        <div class="w-1 bg-blue-500 h-3 audio-wave rounded-full" style="animation-delay: 0.5s"></div>
                        <div class="w-1 bg-blue-500 h-6 audio-wave rounded-full"></div>
                    </div>
                </div>
                <p class="text-xs text-slate-300 italic bg-slate-900 p-3 rounded-lg border border-slate-800">
                    "Hej, tukaj Janez. Potrebujem takojšnje zaupno nakazilo 48.000 € za takojšen odkup licence. Ne sprašuj preveč po mailu..."
                </p>
            </div>
        `,
        details: `
            <div class="space-y-3">
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <h4 class="font-bold text-white text-xs uppercase text-blue-400 mb-1">1. Spektralna analiza frekvenc</h4>
                    <p class="text-xs text-slate-400">Zvočni posnetek kaže nenaravno frekvenčno rezanje nad 8 kHz, kar je značilno za kompresijo AI generatorjev (npr. ElevenLabs).</p>
                </div>
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <h4 class="font-bold text-white text-xs uppercase text-blue-400 mb-1">2. Odsotnost naravnih mikro-pauz</h4>
                    <p class="text-xs text-slate-400">AI sinteza glasu pogosto izpusti naravne vdihovalne zvoke med stavki ter ima enakomeren ritem govora brez človeških spodrsljajev.</p>
                </div>
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <h4 class="font-bold text-white text-xs uppercase text-blue-400 mb-1">3. Vektor preverjanja</h4>
                    <p class="text-xs text-slate-400">Preverjanje se izvede izključno preko klica nazaj na znano interno številko (Out-of-Band).</p>
                </div>
            </div>
        `
    },
    {
        title: "Forenzična analiza: Synthetic Video (Video Maskiranje v živo)",
        preview: `
            <div class="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden relative">
                <div class="bg-slate-900 px-4 py-2 flex justify-between items-center text-xs border-b border-slate-800 text-slate-400">
                    <span><i class="fa-solid fa-video text-blue-400 mr-1.5"></i> SecureZoom Live Call (CTO)</span>
                    <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono">REC</span>
                </div>
                <div class="p-8 text-center space-y-4 bg-gradient-to-b from-slate-950 to-slate-900">
                    <div class="w-24 h-24 rounded-full bg-blue-900/40 border-2 border-blue-500/50 mx-auto flex items-center justify-center text-blue-400 text-4xl shadow-xl">
                        <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <p class="text-xs text-slate-400 italic max-w-md mx-auto">
                        "[Video prikazuje CTO-ja] 'Glavni strežnik je pod napadom izsiljevalcev. Potrebujem tvoje skrbniške dostopne podatke v 2 minutah!'"
                    </p>
                </div>
            </div>
        `,
        details: `
            <div class="space-y-3">
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <h4 class="font-bold text-white text-xs uppercase text-blue-400 mb-1">1. Neujemanje svetlobe in senc</h4>
                    <p class="text-xs text-slate-400">AI obrazni filtri v realnem času pogosto ne sledijo pravilno virom svetlobe v prostoru, kar povzroča nenavadne sence okoli nosu in očesnih jam.</p>
                </div>
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <h4 class="font-bold text-white text-xs uppercase text-blue-400 mb-1">2. Težave s frekvenco utripanja oči</h4>
                    <p class="text-xs text-slate-400">Sintetični videi imajo prepogosto ali povsem odsotno frekvenco utripanja vek (blinking rate anomaly).</p>
                </div>
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <h4 class="font-bold text-white text-xs uppercase text-blue-400 mb-1">3. Robni artefakti okoli čeljusti</h4>
                    <p class="text-xs text-slate-400">Ob hitrejšem premikanju glave se pojavijo zameglitve ali digitalni šum na robu obraza in vratu.</p>
                </div>
            </div>
        `
    },
    {
        title: "Forenzična analiza: Spear-Phishing & Header Spoofing",
        preview: `
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <div class="text-xs text-slate-400 border-b border-slate-800 pb-2 flex justify-between">
                    <span>Pošiljatelj: <strong class="text-white">ana.korosec@corp-secure-login.com</strong></span>
                    <span class="text-amber-400 font-semibold">SPF: SoftFail / DKIM: Valid</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
                    "Živjo, prosim te, da za moj osebni račun posodobiš izplačilni IBAN na nov tuj račun v priponki, saj banka ureja menjavo paketa..."
                </p>
            </div>
        `,
        details: `
            <div class="space-y-3">
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <h4 class="font-bold text-white text-xs uppercase text-blue-400 mb-1">1. Typosquatting / Lookalike Domene</h4>
                    <p class="text-xs text-slate-400">Uporaba domene, ki je zelo podobna pravi korporativni domeni (npr. zamenjava črk ali dodatek besed kot je 'secure').</p>
                </div>
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <h4 class="font-bold text-white text-xs uppercase text-blue-400 mb-1">2. Ustvarjanje lažnega pritiska</h4>
                    <p class="text-xs text-slate-400">Prošnje za nujne spremembe bančnih podatkov zunaj rednih administrativnih rokov kadrovske službe.</p>
                </div>
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <h4 class="font-bold text-white text-xs uppercase text-blue-400 mb-1">3. Ukrep preverjanja</h4>
                    <p class="text-xs text-slate-400">Nikoli ne odgovarjajte na e-pošto, ampak pošiljatelja pokličite preko znane interne telefonske številke iz imenika.</p>
                </div>
            </div>
        `
    }
];

function selectLabItem(index) {
    for (let i = 0; i < 3; i++) {
        const btn = document.getElementById('lab-btn-' + i);
        if (btn) {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('text-slate-400');
        }
    }
    const activeBtn = document.getElementById('lab-btn-' + index);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-400');
        activeBtn.classList.add('bg-blue-600', 'text-white');
    }

    const item = labItems[index];
    const titleEl = document.getElementById('lab-title');
    const previewEl = document.getElementById('lab-preview-container');
    const detailsEl = document.getElementById('lab-details-container');

    if (titleEl) titleEl.innerText = item.title;
    if (previewEl) previewEl.innerHTML = item.preview;
    if (detailsEl) detailsEl.innerHTML = item.details;
}

function playAudioSim() {
    const btn = event.currentTarget;
    if (btn) {
        btn.classList.add('bg-emerald-600');
        setTimeout(() => btn.classList.remove('bg-emerald-600'), 1500);
    }
}