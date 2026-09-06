/**
 * Glavni krmilnik aplikacije (App Controller)
 * Upravlja preklapljanje med zavihki in modalnimi okni.
 */

function switchTab(tabId) {
    const tabs = ['intro', 'lab', 'case', 'playbooks'];
    tabs.forEach(id => {
        const tabEl = document.getElementById('tab-' + id);
        const navEl = document.getElementById('nav-' + id);
        if (tabEl) {
            if (id === tabId) {
                tabEl.classList.remove('hidden');
            } else {
                tabEl.classList.add('hidden');
            }
        }
        if (navEl) {
            if (id === tabId) {
                navEl.classList.remove('text-slate-400');
                navEl.classList.add('bg-blue-600', 'text-white');
            } else {
                navEl.classList.remove('bg-blue-600', 'text-white');
                navEl.classList.add('text-slate-400');
            }
        }
    });
}

function openInfoModal() {
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeInfoModal() {
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("DeepFake Simulator app.js initialized successfully.");
});