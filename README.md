# 🛡️ Deepfake Akademija

> Interaktivna izobraževalna platforma za ozaveščanje zaposlenih o nevarnostih deepfake napadov — glasovni klon, video maskiranje in lažna e-pošta.

**Laboratorij za Analizo Digitalnih Artefaktov** · SOC Awareness Training

![Status](https://img.shields.io/badge/status-aktivno-3fb950)
![Jezik](https://img.shields.io/badge/jezik-sloven%C5%A1%C4%8Dina-58a6ff)
![Odvisnosti](https://img.shields.io/badge/odvisnosti-brez-3fb950)
![Licenca](https://img.shields.io/badge/licenca-MIT-d29922)

---

## ⚠️ Pomembno: kaj ta platforma NE počne

Ta projekt je **izključno izobraževalen** in zasnovan po obrambni logiki (*blue team*).

- ❌ **Ne generira** deepfake vsebin — ne klonira glasu, ne obdela obraza, ne pošilja lažne e-pošte.
- ❌ **Ne uporablja** posnetkov, obrazov ali glasov resničnih oseb.
- ✅ **Uči prepoznavanje** — vzorce napadov, forenzične artefakte in pravilne odzive.

Vsi scenariji so **simulirani** in jasno označeni kot demonstracija. Cilj ni, da uporabnik ustvari ponaredek, temveč da ga **zna prepoznati in se pravilno odzvati**.

---

## 📖 O projektu

Napadalci danes iz nekaj sekund posnetega glasu ustvarijo prepričljiv klon, med video-klicem prekrijejo obraz z obrazom vodje, ali z AI napišejo phishing e-pošto brez slovničnih napak. Prepoznavanje se je premaknilo od očitnih znakov k **tehničnim in kontekstualnim artefaktom**, ki jih AI modeli (še) ne morejo povsem skriti.

Platforma zaposlene skozi tri module popelje od razlage napada do preverjanja znanja, z enotnim sporočilom: **ustavi se in preveri po drugem kanalu (out-of-band).**

---

## 🧩 Moduli

| # | Modul | Vsebina |
|---|-------|---------|
| 01 | 🎙️ **Glasovni klon** | Simuliran WhatsApp predvajalnik z zapisom klica; znaki: odsotnost mikro-pavz, frekvenčno rezanje >8 kHz, ploščata intonacija. |
| 02 | 🎭 **Video maskiranje** | Stiliziran video-okvir s klikljivimi točkami artefaktov (robovi obraza, sence, sinhronizacija ustnic, mežikanje) + aktivni test v živo. |
| 03 | ✉️ **Lažna e-pošta** | Interaktivna phishing pošta z označeno *lookalike* domeno, dvojno končnico priponke in psihološkim pritiskom. |

Poleg treh učnih modulov sta na voljo še dve praktični orodji:

| # | Orodje | Vsebina |
|---|--------|---------|
| 04 | 🔬 **Analizator artefaktov** | Uporabnik naloži **osumljen** medij (sliko/video), ki **ostane lokalno v brskalniku**. Prebere EXIF metapodatke, izriše **Error Level Analysis (ELA)** in vodi skozi forenzično kontrolno listo z oceno tveganja. |
| 05 | 🎯 **Scenarijski trenažer** | 7 razvejanih scenarijev: klic (kloniran glas), BEC e-pošta, deepfake video-klic, SMS smishing, QR quishing, lažni IT support, MFA fatigue. Sistem ocenjuje odzive. |
| 06 | 📊 **Pripravljenost + certifikat** | Nadzorna plošča z rezultati vseh modulov in vaje, skupno oceno pripravljenosti (Odporen / Previden / Ranljiv) ter generiranjem **potrdila o usposabljanju** za tisk/PDF. |

### O analizatorju — kaj (ni)

Analizator **ni** detektor deepfaka z gumbom. Brskalnik ne more zanesljivo zaznati ponaredka; orodje je disciplinirana kontrolna lista, kot jo uporablja analitik, plus tehnični podatki. Vgrajena sta:

- **EXIF branje** — minimalen parser prebere APP1/TIFF strukturo JPEG-a (proizvajalec, model, programska oprema, čas zajema …) in označi, če metapodatki namigujejo na urejanje/generiranje. Vse brez zunanjih knjižnic.
- **ELA (Error Level Analysis)** — slika se prek `<canvas>` ponovno stisne v JPEG in razlika se ojačano prikaže; naknadno urejena območja pogosto izstopajo. Nastavljivo ojačanje in kakovost re-kompresije.

Ocena tveganja je zgolj vsota uporabnikovih opažanj in namenoma ne obljublja lažne gotovosti. Naložena datoteka se obdela lokalno prek `URL.createObjectURL` in se nikamor ne naloži.

Vsak učni modul ima enako strukturo:

1. **Kako napad izgleda** — razlaga + simuliran primer z označenimi artefakti
2. **Na kaj biti pozoren** — 4 opozorilni znaki
3. **Obramba** — konkreten obrambni ukrep
4. **Preverjanje znanja** — 3-vprašalni kviz s takojšnjo povratno informacijo

Zgoraj je **sledilnik napredka** (0/3 modulov), vsak modul se ob zaključku kviza odkljuka, na koncu pa se prikaže skupni rezultat.

---

## ✨ Funkcije

- **Voden ogled (onboarding)** — ob prvem obisku pozdravni modal in spotlight tur čez vse ključne elemente; kontekstualni namigi ob interaktivni vsebini; vodenje »Naprej na naslednji korak« po vsakem kvizu. Zapomni si prek `localStorage`, znova ga zaženeš z gumbom **Ogled**.
- **Popolnoma samostojno** — ena HTML datoteka, brez odvisnosti, brez strežnika, brez zunanjih zahtevkov (razen Google Fonts). SRC logotip je vgrajen kot data-URI (moder za svetlo, bel za temno temo).
- **Interaktivni kviz** z ocenjevanjem, povratno informacijo in možnostjo ponovitve.
- **Lokalna analiza medijev** — EXIF + ELA v brskalniku; nič se ne pošlje nikamor (zasebnost po zasnovi).
- **Razvejan scenarijski trenažer** (7 scenarijev) z ocenjevanjem odločitev.
- **Nadzorna plošča pripravljenosti** in **certifikat o usposabljanju** za tisk/PDF.
- **Sledenje napredku** in skupni rezultat.
- **Svetla in temna tema** (samodejno po sistemu + ročni preklop).
- **Odziven vmesnik** — deluje na namizju in mobilnih napravah.
- **Dostopnost** — tipkovniška navigacija, `prefers-reduced-motion`, semantični elementi.
- **Mesta za medije** (`// MESTO ZA MEDIJ`) — jasno označena mesta, kamor lahko organizacija vstavi lastne odobrene demo posnetke.

---

## 🚀 Uporaba

Projekt ne potrebuje gradnje (*build*) ali namestitve.

```bash
# Kloniraj repozitorij
git clone https://github.com/<uporabnik>/deepfake-akademija.git
cd deepfake-akademija

# Odpri neposredno v brskalniku
open src/index.html        # macOS
xdg-open src/index.html    # Linux
start src/index.html       # Windows
```

Za lokalni strežnik (priporočeno pri vgradnji lastnih medijev):

```bash
cd src
python3 -m http.server 8080
# → odpri http://localhost:8080
```

### Objava (GitHub Pages)

1. V `Settings → Pages` izberi vejo (npr. `main`) in mapo `/src` ali korensko mapo.
2. Stran bo dostopna na `https://<uporabnik>.github.io/deepfake-akademija/`.

---

## 🔧 Prilagoditev

### Vstavljanje lastnih (odobrenih) medijev

V kodi poišči komentarje `// MESTO ZA MEDIJ` in zamenjaj simulirane predvajalnike:

- **Glas** → zamenjaj `.player` z `<audio controls src="...">`
- **Video** → zamenjaj `.video-mock` z `<video controls>` ali GIF-om s poudarjenimi artefakti
- **E-pošta** → dodaj zaslonske posnetke resničnih (anonimiziranih) phishing primerov

> ⚠️ Uporabljaj le vsebine, za katere imaš licenco/dovoljenje. Ne uporabljaj glasu ali obraza resnične osebe brez njene izrecne privolitve.

### Urejanje vprašanj

Kvizi so definirani v polju `QUIZZES` v `<script>` bloku — vsak modul je polje objektov z `q` (vprašanje), `opts` (odgovori), `correct` (indeks pravilnega) in `why` (razlaga).

### Barve in tipografija

Vse barve so definirane kot CSS spremenljivke v `:root` (in `:root[data-theme="light"]`). Zamenjaj jih za lastno organizacijsko identiteto.

---

## 📁 Struktura

```
deepfake-akademija/
├── src/
│   ├── index.html         # celotna platforma (samostojna datoteka)
│   └── assets/
│       ├── src-logo.png       # SRC logo (moder)
│       └── src-logo-white.png # SRC logo (bel, za temno temo)
├── docs/
│   └── SECURITY.md        # opomba o namenu in etiki
├── README.md
└── LICENSE
```

> Opomba: `index.html` ima logotipa **vgrajena kot data-URI**, zato je datoteka samozadostna in mape `assets/` ne potrebuje za delovanje — priložena je za nadaljnjo uporabo (npr. drugje na intranetu).

---

## 🎯 Kontekst in navdih

Pristop temelji na obrambni logiki, ki jo uporabljajo profesionalna orodja za ozaveščanje (npr. tipa KnowBe4): namesto generiranja napadov uči **prepoznavanje in odziv**. Enotno pravilo skozi vse module je **out-of-band preverjanje** — nikoli ne ukrepaj na podlagi samega sporočila.

---

## 📜 Licenca

MIT — glej [LICENSE](LICENSE).

Vsebina je namenjena izobraževanju in ozaveščanju. Odgovorna raba je obveznost uporabnika.
