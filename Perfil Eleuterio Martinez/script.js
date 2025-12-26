// --- Data Store ---

const bioData = {
    academic: `
        <ul class="space-y-4">
            <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">🎓</span>
                <div>
                    <strong class="block text-stone-900">Ingeniería Forestal</strong>
                    <span class="text-sm text-stone-600">Formación base centrada en la gestión sostenible de recursos.</span>
                </div>
            </li>
            <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">🔬</span>
                <div>
                    <strong class="block text-stone-900">Especialización en Ecología Tropical</strong>
                    <span class="text-sm text-stone-600">Estudios avanzados sobre la dinámica de los bosques húmedos.</span>
                </div>
            </li>
        </ul>
    `,
    roles: `
        <ul class="space-y-4">
            <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">🏛️</span>
                <div>
                    <strong class="block text-stone-900">Presidente Academia de Ciencias</strong>
                    <span class="text-sm text-stone-600">Liderando la institución científica más prestigiosa del país.</span>
                </div>
            </li>
            <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">🌳</span>
                <div>
                    <strong class="block text-stone-900">Comisión de Medio Ambiente</strong>
                    <span class="text-sm text-stone-600">Evaluación de impactos ambientales en proyectos nacionales.</span>
                </div>
            </li>
        </ul>
    `,
    awards: `
        <ul class="space-y-4">
            <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">🏆</span>
                <div>
                    <strong class="block text-stone-900">Premio Nacional de Ciencias</strong>
                    <span class="text-sm text-stone-600">Reconocimiento a su trayectoria investigativa.</span>
                </div>
            </li>
            <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">⭐</span>
                <div>
                    <strong class="block text-stone-900">Personaje del Año</strong>
                    <span class="text-sm text-stone-600">Otorgado por su defensa de Loma Miranda.</span>
                </div>
            </li>
        </ul>
    `
};

const protectedAreas = [
    { id: 'bahoruco', name: 'Sierra de Bahoruco', desc: 'Una de las áreas de mayor biodiversidad. Martínez ha realizado estudios sobre su flora endémica.', eco: 'Bosque Nublado', role: 'Investigador' },
    { id: 'miranda', name: 'Loma Miranda', desc: 'Su peritaje técnico demostró el valor hidrológico incalculable de esta zona.', eco: 'Bosque Húmedo', role: 'Perito Técnico' },
    { id: 'aguilas', name: 'Bahía de las Águilas', desc: 'Defensa férrea contra el desarrollo turístico masivo no regulado.', eco: 'Zona Costera', role: 'Asesor Científico' },
    { id: 'valle', name: 'Valle Nuevo', desc: 'Conocida como la "Madre de las Aguas". Promotor de restauración.', eco: 'Bosque de Montaña', role: 'Promotor' }
];

const publications = [
    { title: "La Riqueza de los Bosques Dominicanos", category: "book", year: 2010, summary: "Compendio detallado de las especies forestales." },
    { title: "Impacto Minero en Ecosistemas", category: "report", year: 2014, summary: "Informe técnico sobre Loma Miranda." },
    { title: "Reservas de la Biosfera", category: "article", year: 2018, summary: "Ensayo sobre la importancia de la designación UNESCO." },
    { title: "Flora Endémica de la Hispaniola", category: "book", year: 2005, summary: "Atlas fotográfico de plantas únicas." },
    { title: "Gestión de Cuencas", category: "report", year: 2020, summary: "Propuesta para el manejo sostenible del agua." },
    { title: "El Bosque Seco: Un Tesoro Oculto", category: "article", year: 2012, summary: "Análisis de la biodiversidad en zonas áridas." }
];

// Book Catalog with Search Links
const booksForSale = [
    { title: "Ecología de la Hispaniola", price: "Ver precio", color: "bg-green-800", year: 2021, isbn: "978-X-XXXXX" },
    { title: "Flora Endémica Ilustrada", price: "Ver precio", color: "bg-amber-700", year: 2005, isbn: "978-X-XXXXX" },
    { title: "La Riqueza de los Bosques", price: "Ver precio", color: "bg-emerald-700", year: 2010, isbn: "978-X-XXXXX" },
    { title: "Áreas Protegidas: Guía", price: "Ver precio", color: "bg-stone-700", year: 2018, isbn: "978-X-XXXXX" }
];

// --- Interaction Logic ---

function switchTab(tabId) {
    document.getElementById('tab-content').innerHTML = bioData[tabId];
    const tabs = ['academic', 'roles', 'awards'];
    tabs.forEach(t => {
        const el = document.getElementById(`tab-${t}`);
        if (t === tabId) {
            el.classList.add('tab-active', 'text-stone-800');
            el.classList.remove('text-stone-600');
        } else {
            el.classList.remove('tab-active', 'text-stone-800');
            el.classList.add('text-stone-600');
        }
    });
}

function renderAreaButtons() {
    const container = document.getElementById('area-buttons');
    container.innerHTML = protectedAreas.map(area => `
        <button onclick="selectArea('${area.id}')" 
            class="w-full text-left px-5 py-4 rounded-lg bg-white border border-stone-200 hover:border-green-500 hover:bg-green-50 transition-all duration-200 group flex justify-between items-center shadow-sm">
            <span class="font-semibold text-stone-700 group-hover:text-green-800">${area.name}</span>
            <span class="text-stone-400 group-hover:text-green-600">→</span>
        </button>
    `).join('');
}

function selectArea(id) {
    const area = protectedAreas.find(a => a.id === id);
    if (!area) return;
    const display = document.getElementById('area-display');
    document.getElementById('area-title').innerText = area.name;
    document.getElementById('area-desc').innerText = area.desc;
    document.getElementById('stat-eco').innerText = area.eco;
    document.getElementById('stat-role').innerText = area.role;
    document.getElementById('area-stats').classList.remove('hidden');
    display.classList.remove('opacity-50');
    setTimeout(() => display.classList.add('opacity-100'), 50);
}

function renderPublications(filter = 'all') {
    const grid = document.getElementById('publications-grid');
    const filtered = filter === 'all' ? publications : publications.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(pub => {
        let icon = '📄';
        let typeColor = 'text-stone-500';
        if (pub.category === 'book') { icon = '📘'; typeColor = 'text-blue-600'; }
        if (pub.category === 'report') { icon = '📊'; typeColor = 'text-amber-600'; }
        if (pub.category === 'article') { icon = '📰'; typeColor = 'text-green-600'; }
        const typeLabel = pub.category === 'book' ? 'Libro' : (pub.category === 'report' ? 'Informe' : 'Artículo');
        return `
        <div class="interactive-card bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between h-full">
            <div>
                <div class="flex justify-between items-start mb-3">
                    <span class="text-2xl">${icon}</span>
                    <span class="text-xs font-bold uppercase tracking-wider ${typeColor} bg-stone-50 px-2 py-1 rounded">${typeLabel}</span>
                </div>
                <h3 class="text-lg font-bold text-stone-900 mb-2 leading-snug">${pub.title}</h3>
                <p class="text-sm text-stone-600 mb-4">${pub.summary}</p>
            </div>
        </div>`;
    }).join('');
}

// --- Render Book Catalog with Amazon Links ---
function renderBookCatalog() {
    const grid = document.getElementById('book-catalog-grid');
    
    grid.innerHTML = booksForSale.map(book => {
        // Generate a generic search link for Amazon based on title and author
        const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(book.title + " Eleuterio Martinez")}`;
        
        return `
        <div class="group flex flex-col items-center">
            <a href="${amazonSearchUrl}" target="_blank" class="block">
                <div class="book-spine relative w-48 h-72 ${book.color} rounded-r-md rounded-l-sm shadow-xl flex flex-col justify-between p-4 mb-6 cursor-pointer">
                    <div class="book-binding h-full absolute left-2 top-0 bottom-0"></div>
                    <div class="ml-4 flex flex-col h-full text-center items-center justify-center">
                        <h4 class="text-white font-serif font-bold text-lg leading-tight mb-2 opacity-90">${book.title}</h4>
                        <div class="w-8 h-0.5 bg-white/30 my-2"></div>
                        <span class="text-white/70 text-xs uppercase tracking-widest">Martínez</span>
                    </div>
                    <div class="absolute bottom-4 right-4 opacity-50">
                        <span class="text-white text-xs font-mono">${book.year}</span>
                    </div>
                </div>
            </a>
            
            <div class="text-center w-full">
                <h3 class="font-bold text-stone-800 text-lg mb-1">${book.title}</h3>
                <div class="flex items-center justify-center mt-3">
                    <a href="${amazonSearchUrl}" target="_blank" 
                       class="flex items-center gap-2 text-xs bg-[#232F3E] text-white px-4 py-2 rounded hover:bg-[#FF9900] hover:text-black transition-colors uppercase font-bold tracking-wider shadow-md group">
                        <i class="fab fa-amazon text-lg"></i>
                        <span>Ver en Amazon</span>
                    </a>
                </div>
            </div>
        </div>
    `}).join('');
}

// --- Charts Initialization ---
function initCharts() {
    const ctx1 = document.getElementById('ecosystemChart').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Bosque Nublado', 'Bosque Seco', 'Costero/Marino', 'Urbano'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: ['#166534', '#ca8a04', '#0ea5e9', '#78716c'],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { boxWidth: 15 } }
            }
        }
    });

    const ctx2 = document.getElementById('timelineChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['1990s', '2000s', '2010s', '2020s'],
            datasets: [
                {
                    label: 'Áreas Defendidas',
                    data: [2, 5, 8, 4],
                    backgroundColor: '#4d7c0f',
                    borderRadius: 4,
                    order: 2
                },
                {
                    label: 'Publicaciones',
                    data: [3, 6, 12, 5],
                    type: 'line',
                    borderColor: '#d97706',
                    borderWidth: 2,
                    tension: 0.3,
                    pointRadius: 4,
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, grid: { color: '#e7e5e4' } },
                x: { grid: { display: false } }
            },
            plugins: { legend: { position: 'bottom' } }
        }
    });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    switchTab('academic');
    renderAreaButtons();
    selectArea('bahoruco');
    renderPublications();
    renderBookCatalog(); // Updated for Amazon
    initCharts();

    document.getElementById('pub-filter').addEventListener('change', (e) => {
        renderPublications(e.target.value);
    });

    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });
});