/**
 * Študija primera - Podatki in kronologija BEC incidenta
 * Opisuje štiri ključne faze napada in obrambnega ukrepanja.
 */

const caseStudyPhases = [
    {
        id: 1,
        title: "OSINT & Profiliranje",
        badge: "Faza 1",
        description: "Napadalci analizirajo LinkedIn profile vodstva, javne nastope in glasovne posnetke podkastov za treniranje AI modela."
    },
    {
        id: 2,
        title: "Sprožitev Panike",
        badge: "Faza 2",
        description: "Zaposleni prejme nujno glasovno sporočilo ali video klic od 'direktorja', ki zahteva takojšnje tajno nakazilo sredstev."
    },
    {
        id: 3,
        title: "Preizkus Protokola",
        badge: "Faza 3",
        description: "Zaposleni začuti pritisk časa, vendar uporabi Out-of-Band Verification (klic nazaj preko znane interne centrale)."
    },
    {
        id: 4,
        title: "Nevtralizacija",
        badge: "Faza 4",
        description: "Ugotovljeno je, da gre za prevaro. Varnostna služba sproži blokado in obvesti CERT ekipo."
    }
];

function renderCaseStudyTimeline(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    caseStudyPhases.forEach(phase => {
        const badgeClass = phase.id === 4 ? 'bg-emerald-600' : 'bg-blue-600';
        html += `
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 relative">
                <div class="absolute -top-3 left-5 ${badgeClass} text-white text-xs px-2.5 py-0.5 rounded-full font-bold">${phase.badge}</div>
                <h4 class="font-bold text-white text-base pt-1">${phase.title}</h4>
                <p class="text-slate-400 text-xs leading-relaxed">${phase.description}</p>
            </div>
        `;
    });
    container.innerHTML = html;
}