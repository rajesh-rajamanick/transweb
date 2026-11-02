// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Products by Application Tab Switching
function switchAppTab(tabName) {
    const tabs = ['solar', 'wind', 'rectifier', 'special'];
    
    tabs.forEach(t => {
        const pane = document.getElementById(`tab-${t}`);
        const btn = document.getElementById(`btn-${t}`);
        
        if (pane && btn) {
            if (t === tabName) {
                pane.classList.remove('hidden');
                btn.className = "app-tab-btn px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-industrial-accent text-industrial-dark shadow-md transition";
            } else {
                pane.classList.add('hidden');
                btn.className = "app-tab-btn px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-industrial-card text-industrial-muted border border-industrial-border hover:text-white transition";
            }
        }
    });
}

// Specification Table Filtering
function filterSpecs(category) {
    const rows = document.querySelectorAll('.spec-row');
    const filterBtns = document.querySelectorAll('.spec-filter-btn');

    filterBtns.forEach(btn => {
        btn.className = "spec-filter-btn px-4 py-2 bg-industrial-card text-industrial-muted border border-industrial-border rounded text-xs font-bold uppercase hover:text-white transition";
    });
    event.target.className = "spec-filter-btn px-4 py-2 bg-industrial-accent text-industrial-dark rounded text-xs font-bold uppercase transition";

    rows.forEach(row => {
        if (category === 'all' || row.getAttribute('data-category') === category) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Modal Management Functions
function openRfqModal() {
    document.getElementById('rfq-modal').classList.remove('hidden');
}

function closeRfqModal() {
    document.getElementById('rfq-modal').classList.add('hidden');
}

function openCatalogModal() {
    document.getElementById('catalog-modal').classList.remove('hidden');
}

function closeCatalogModal() {
    document.getElementById('catalog-modal').classList.add('hidden');
}

function openCertModal() {
    document.getElementById('cert-modal').classList.remove('hidden');
}

function closeCertModal() {
    document.getElementById('cert-modal').classList.add('hidden');
}

function simulateDownload() {
    alert("Downloading official Power Lead Catalogue PDF (Up to 20 MVA, 33 kV Class - BIS Licence CM/L-6700128010)...");[cite: 5]
    closeCatalogModal();
}

function handleInquirySubmit(e) {
    e.preventDefault();
    alert("Thank you! Your technical inquiry specification has been submitted to Power Lead Enterprises. Our engineering team will respond shortly.");
    e.target.reset();
}

function handleModalRfq(e) {
    e.preventDefault();
    alert("RFQ successfully configured and submitted! We will email the design-backed proposal to your contact.");
    closeRfqModal();
}