// ================== TRADUÇÕES ==================
const translations = {
  'pt-BR': {
    settings: 'Configurações',
    language: 'Idioma',
    privacy: 'Privacidade',
    store: 'Acesse nossa Loja',
    tutorialsCompleted: 'Tutoriais Completos',
    logout: 'Desconectar',
    navTutorials: 'Tutoriais',
    navGallery: 'Galeria',
    navProfile: 'Perfil',
    loggedOut: 'Você saiu da sua conta.',
    enabledWord: 'ativado',
    disabledWord: 'desativado',
    languageChanged: name => `Idioma alterado para ${name}`,
    opening: name => `Abrindo ${name}...`,
    downloading: name => `Baixando "${name}"...`,
    privacyOptions: [
      { id: 'location', label: 'Localização', desc: 'Permitir acesso à sua localização' },
      { id: 'camera', label: 'Câmera', desc: 'Permitir acesso à câmera' },
      { id: 'mic', label: 'Microfone', desc: 'Permitir acesso ao microfone' },
      { id: 'contacts', label: 'Contatos', desc: 'Permitir acesso aos seus contatos' },
      { id: 'ads', label: 'Anúncios personalizados', desc: 'Usar seus dados para personalizar anúncios' },
      { id: 'analytics', label: 'Dados de uso', desc: 'Compartilhar dados de uso para melhorias' }
    ],
    storeApps: [
      { name: 'Tutoriais Pro', desc: 'Conteúdo extra e trilhas avançadas', price: 'Grátis' },
      { name: 'Tema Escuro Plus', desc: 'Novos temas para o aplicativo', price: 'R$ 4,90' },
      { name: 'Backup na Nuvem', desc: 'Guarde seu progresso com segurança', price: 'Grátis' },
      { name: 'Certificados Digitais', desc: 'Emita certificados dos tutoriais concluídos', price: 'R$ 9,90' }
    ]
  },
  'en-US': {
    settings: 'Settings',
    language: 'Language',
    privacy: 'Privacy',
    store: 'Visit our Store',
    tutorialsCompleted: 'Completed Tutorials',
    logout: 'Log Out',
    navTutorials: 'Tutorials',
    navGallery: 'Gallery',
    navProfile: 'Profile',
    loggedOut: 'You have been logged out.',
    enabledWord: 'enabled',
    disabledWord: 'disabled',
    languageChanged: name => `Language changed to ${name}`,
    opening: name => `Opening ${name}...`,
    downloading: name => `Downloading "${name}"...`,
    privacyOptions: [
      { id: 'location', label: 'Location', desc: 'Allow access to your location' },
      { id: 'camera', label: 'Camera', desc: 'Allow access to the camera' },
      { id: 'mic', label: 'Microphone', desc: 'Allow access to the microphone' },
      { id: 'contacts', label: 'Contacts', desc: 'Allow access to your contacts' },
      { id: 'ads', label: 'Personalized ads', desc: 'Use your data to personalize ads' },
      { id: 'analytics', label: 'Usage data', desc: 'Share usage data for improvements' }
    ],
    storeApps: [
      { name: 'Tutorials Pro', desc: 'Extra content and advanced tracks', price: 'Free' },
      { name: 'Dark Theme Plus', desc: 'New themes for the app', price: '$0.99' },
      { name: 'Cloud Backup', desc: 'Keep your progress safe', price: 'Free' },
      { name: 'Digital Certificates', desc: 'Issue certificates for completed tutorials', price: '$1.99' }
    ]
  },
  'es-ES': {
    settings: 'Configuración',
    language: 'Idioma',
    privacy: 'Privacidad',
    store: 'Visita nuestra Tienda',
    tutorialsCompleted: 'Tutoriales Completados',
    logout: 'Cerrar sesión',
    navTutorials: 'Tutoriales',
    navGallery: 'Galería',
    navProfile: 'Perfil',
    loggedOut: 'Has cerrado sesión.',
    enabledWord: 'activado',
    disabledWord: 'desactivado',
    languageChanged: name => `Idioma cambiado a ${name}`,
    opening: name => `Abriendo ${name}...`,
    downloading: name => `Descargando "${name}"...`,
    privacyOptions: [
      { id: 'location', label: 'Ubicación', desc: 'Permitir acceso a tu ubicación' },
      { id: 'camera', label: 'Cámara', desc: 'Permitir acceso a la cámara' },
      { id: 'mic', label: 'Micrófono', desc: 'Permitir acceso al micrófono' },
      { id: 'contacts', label: 'Contactos', desc: 'Permitir acceso a tus contactos' },
      { id: 'ads', label: 'Anuncios personalizados', desc: 'Usar tus datos para personalizar anuncios' },
      { id: 'analytics', label: 'Datos de uso', desc: 'Compartir datos de uso para mejoras' }
    ],
    storeApps: [
      { name: 'Tutoriales Pro', desc: 'Contenido extra y rutas avanzadas', price: 'Gratis' },
      { name: 'Tema Oscuro Plus', desc: 'Nuevos temas para la aplicación', price: '0,99 €' },
      { name: 'Copia en la Nube', desc: 'Guarda tu progreso de forma segura', price: 'Gratis' },
      { name: 'Certificados Digitales', desc: 'Emite certificados de los tutoriales completados', price: '1,99 €' }
    ]
  },
  'fr-FR': {
    settings: 'Paramètres',
    language: 'Langue',
    privacy: 'Confidentialité',
    store: 'Visitez notre Boutique',
    tutorialsCompleted: 'Tutoriels terminés',
    logout: 'Déconnexion',
    navTutorials: 'Tutoriels',
    navGallery: 'Galerie',
    navProfile: 'Profil',
    loggedOut: 'Vous avez été déconnecté.',
    enabledWord: 'activé',
    disabledWord: 'désactivé',
    languageChanged: name => `Langue changée en ${name}`,
    opening: name => `Ouverture de ${name}...`,
    downloading: name => `Téléchargement de « ${name} »...`,
    privacyOptions: [
      { id: 'location', label: 'Localisation', desc: "Autoriser l'accès à votre position" },
      { id: 'camera', label: 'Caméra', desc: "Autoriser l'accès à la caméra" },
      { id: 'mic', label: 'Microphone', desc: "Autoriser l'accès au microphone" },
      { id: 'contacts', label: 'Contacts', desc: "Autoriser l'accès à vos contacts" },
      { id: 'ads', label: 'Publicités personnalisées', desc: 'Utiliser vos données pour personnaliser les publicités' },
      { id: 'analytics', label: "Données d'utilisation", desc: "Partager les données d'utilisation pour des améliorations" }
    ],
    storeApps: [
      { name: 'Tutoriels Pro', desc: 'Contenu supplémentaire et parcours avancés', price: 'Gratuit' },
      { name: 'Thème Sombre Plus', desc: "Nouveaux thèmes pour l'application", price: '0,99 €' },
      { name: 'Sauvegarde Cloud', desc: 'Protégez votre progression', price: 'Gratuit' },
      { name: 'Certificats Numériques', desc: 'Délivrez des certificats pour les tutoriels terminés', price: '1,99 €' }
    ]
  },
  'de-DE': {
    settings: 'Einstellungen',
    language: 'Sprache',
    privacy: 'Datenschutz',
    store: 'Besuche unseren Store',
    tutorialsCompleted: 'Abgeschlossene Tutorials',
    logout: 'Abmelden',
    navTutorials: 'Tutorials',
    navGallery: 'Galerie',
    navProfile: 'Profil',
    loggedOut: 'Du wurdest abgemeldet.',
    enabledWord: 'aktiviert',
    disabledWord: 'deaktiviert',
    languageChanged: name => `Sprache geändert zu ${name}`,
    opening: name => `${name} wird geöffnet...`,
    downloading: name => `„${name}" wird heruntergeladen...`,
    privacyOptions: [
      { id: 'location', label: 'Standort', desc: 'Zugriff auf deinen Standort erlauben' },
      { id: 'camera', label: 'Kamera', desc: 'Zugriff auf die Kamera erlauben' },
      { id: 'mic', label: 'Mikrofon', desc: 'Zugriff auf das Mikrofon erlauben' },
      { id: 'contacts', label: 'Kontakte', desc: 'Zugriff auf deine Kontakte erlauben' },
      { id: 'ads', label: 'Personalisierte Werbung', desc: 'Deine Daten für personalisierte Werbung verwenden' },
      { id: 'analytics', label: 'Nutzungsdaten', desc: 'Nutzungsdaten für Verbesserungen teilen' }
    ],
    storeApps: [
      { name: 'Tutorials Pro', desc: 'Zusätzliche Inhalte und fortgeschrittene Kurse', price: 'Kostenlos' },
      { name: 'Dunkles Design Plus', desc: 'Neue Designs für die App', price: '0,99 €' },
      { name: 'Cloud-Backup', desc: 'Sichere deinen Fortschritt', price: 'Kostenlos' },
      { name: 'Digitale Zertifikate', desc: 'Zertifikate für abgeschlossene Tutorials ausstellen', price: '1,99 €' }
    ]
  },
  'it-IT': {
    settings: 'Impostazioni',
    language: 'Lingua',
    privacy: 'Privacy',
    store: 'Visita il nostro Negozio',
    tutorialsCompleted: 'Tutorial Completati',
    logout: 'Disconnetti',
    navTutorials: 'Tutorial',
    navGallery: 'Galleria',
    navProfile: 'Profilo',
    loggedOut: 'Hai effettuato il logout.',
    enabledWord: 'attivato',
    disabledWord: 'disattivato',
    languageChanged: name => `Lingua cambiata in ${name}`,
    opening: name => `Apertura di ${name} in corso...`,
    downloading: name => `Download di "${name}" in corso...`,
    privacyOptions: [
      { id: 'location', label: 'Posizione', desc: 'Consenti l\'accesso alla tua posizione' },
      { id: 'camera', label: 'Fotocamera', desc: 'Consenti l\'accesso alla fotocamera' },
      { id: 'mic', label: 'Microfono', desc: 'Consenti l\'accesso al microfono' },
      { id: 'contacts', label: 'Contatti', desc: 'Consenti l\'accesso ai tuoi contatti' },
      { id: 'ads', label: 'Annunci personalizzati', desc: 'Usa i tuoi dati per personalizzare gli annunci' },
      { id: 'analytics', label: 'Dati di utilizzo', desc: 'Condividi i dati di utilizzo per migliorie' }
    ],
    storeApps: [
      { name: 'Tutorial Pro', desc: 'Contenuti extra e percorsi avanzati', price: 'Gratis' },
      { name: 'Tema Scuro Plus', desc: 'Nuovi temi per l\'app', price: '0,99 €' },
      { name: 'Backup su Cloud', desc: 'Proteggi i tuoi progressi', price: 'Gratis' },
      { name: 'Certificati Digitali', desc: 'Rilascia certificati per i tutorial completati', price: '1,99 €' }
    ]
  },
  'ja-JP': {
    settings: '設定',
    language: '言語',
    privacy: 'プライバシー',
    store: 'ストアを見る',
    tutorialsCompleted: '完了したチュートリアル',
    logout: 'ログアウト',
    navTutorials: 'チュートリアル',
    navGallery: 'ギャラリー',
    navProfile: 'プロフィール',
    loggedOut: 'ログアウトしました。',
    enabledWord: 'オン',
    disabledWord: 'オフ',
    languageChanged: name => `言語が${name}に変更されました`,
    opening: name => `${name}を開いています...`,
    downloading: name => `「${name}」をダウンロード中...`,
    privacyOptions: [
      { id: 'location', label: '位置情報', desc: '位置情報へのアクセスを許可する' },
      { id: 'camera', label: 'カメラ', desc: 'カメラへのアクセスを許可する' },
      { id: 'mic', label: 'マイク', desc: 'マイクへのアクセスを許可する' },
      { id: 'contacts', label: '連絡先', desc: '連絡先へのアクセスを許可する' },
      { id: 'ads', label: 'パーソナライズ広告', desc: 'データを使って広告をパーソナライズする' },
      { id: 'analytics', label: '使用状況データ', desc: '改善のために使用状況データを共有する' }
    ],
    storeApps: [
      { name: 'チュートリアルPro', desc: '追加コンテンツと上級コース', price: '無料' },
      { name: 'ダークテーマPlus', desc: 'アプリの新しいテーマ', price: '¥150' },
      { name: 'クラウドバックアップ', desc: '進捗を安全に保存', price: '無料' },
      { name: 'デジタル証明書', desc: '修了したチュートリアルの証明書を発行', price: '¥300' }
    ]
  }
};

// Nomes dos idiomas sempre exibidos no próprio idioma (padrão em qualquer celular)
const languages = [
  { code: 'pt-BR', name: 'Português (Brasil)' },
  { code: 'en-US', name: 'English (United States)' },
  { code: 'es-ES', name: 'Español' },
  { code: 'fr-FR', name: 'Français' },
  { code: 'de-DE', name: 'Deutsch' },
  { code: 'it-IT', name: 'Italiano' },
  { code: 'ja-JP', name: '日本語' }
];

let currentLang = 'pt-BR';

// Estado de privacidade não depende do idioma
let privacyState = {
  location: true,
  camera: true,
  mic: false,
  contacts: false,
  ads: false,
  analytics: true
};

function t(key) {
  return translations[currentLang][key];
}

// ================== APLICA TRADUÇÃO NA TELA PRINCIPAL ==================
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}

// ================== NAVEGAÇÃO INFERIOR ==================
const navItems = document.querySelectorAll('.nav-item');
const tabKeys = { tutoriais: 'navTutorials', galeria: 'navGallery', perfil: 'navProfile' };

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => {
      i.classList.remove('text-brand');
      i.classList.add('text-gray-400');
      i.querySelector('span').classList.remove('font-semibold');
      i.querySelector('svg').setAttribute('fill', 'none');
    });
    item.classList.remove('text-gray-400');
    item.classList.add('text-brand');
    item.querySelector('span').classList.add('font-semibold');
    item.querySelector('svg').setAttribute('fill', 'currentColor');

    const tab = item.dataset.tab;
    if (tab !== 'perfil') {
      showToast(t('opening')(t(tabKeys[tab])));
    }
  });
});

// ================== ABRIR CONFIGURAÇÃO ==================
function openSetting(name) {
  if (name === 'idioma') {
    openModal(t('language'), renderLanguages());
  } else if (name === 'privacidade') {
    openModal(t('privacy'), renderPrivacy());
  } else if (name === 'loja') {
    openModal(t('store'), renderStore());
  }
}

// ================== RENDERIZADORES ==================
function renderLanguages() {
  return `
    <div class="space-y-1">
      ${languages.map(lang => `
        <button
          class="lang-option w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-gray-50 transition"
          onclick="selectLanguage('${lang.code}')"
        >
          <span class="text-sm text-gray-700">${lang.name}</span>
          ${lang.code === currentLang
            ? `<svg class="w-4 h-4 text-brand" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>`
            : ''
          }
        </button>
      `).join('')}
    </div>
  `;
}

function renderPrivacy() {
  const options = t('privacyOptions');
  return `
    <div class="space-y-1">
      ${options.map(opt => `
        <div class="flex items-center justify-between px-1 py-3 border-b border-gray-50 last:border-0">
          <div class="pr-4">
            <p class="text-sm font-medium text-gray-700">${opt.label}</p>
            <p class="text-xs text-gray-400 mt-0.5">${opt.desc}</p>
          </div>
          <button
            class="toggle-switch flex-shrink-0 w-11 h-6 rounded-full relative transition-colors ${privacyState[opt.id] ? 'bg-brand' : 'bg-gray-200'}"
            onclick="togglePrivacy('${opt.id}')"
          >
            <span class="absolute top-0.5 ${privacyState[opt.id] ? 'left-5' : 'left-0.5'} w-5 h-5 bg-white rounded-full shadow transition-all"></span>
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function renderStore() {
  const apps = t('storeApps');
  return `
    <div class="space-y-3">
      ${apps.map((app, i) => `
        <div class="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-brand font-bold text-sm">
              ${app.name.charAt(0)}
            </div>
            <div>
              <p class="text-sm font-medium text-gray-700">${app.name}</p>
              <p class="text-xs text-gray-400">${app.desc}</p>
            </div>
          </div>
          <button
            class="text-xs font-semibold text-brand border border-brand rounded-full px-3 py-1.5 hover:bg-brand hover:text-white transition"
            onclick="installApp(${i})"
          >
            ${app.price}
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

// ================== AÇÕES DENTRO DO MODAL ==================
function selectLanguage(code) {
  currentLang = code;
  const lang = languages.find(l => l.code === code);

  // Atualiza todos os textos fixos da tela
  applyStaticTranslations();

  // Atualiza o título do modal e o conteúdo (agora no novo idioma)
  document.getElementById('modalTitle').textContent = t('language');
  document.getElementById('modalContent').innerHTML = renderLanguages();

  showToast(t('languageChanged')(lang.name));
}

function togglePrivacy(id) {
  privacyState[id] = !privacyState[id];
  document.getElementById('modalContent').innerHTML = renderPrivacy();
  const opt = t('privacyOptions').find(o => o.id === id);
  showToast(`${opt.label} ${privacyState[id] ? t('enabledWord') : t('disabledWord')}`);
}

function installApp(index) {
  const app = t('storeApps')[index];
  showToast(t('downloading')(app.name));
}

// ================== CONTROLE DO MODAL ==================
function openModal(title, contentHtml) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalContent').innerHTML = contentHtml;

  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('settingModal');

  overlay.classList.remove('opacity-0', 'pointer-events-none');
  overlay.classList.add('opacity-100');
  modal.classList.remove('translate-y-full');
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('settingModal');

  overlay.classList.add('opacity-0', 'pointer-events-none');
  overlay.classList.remove('opacity-100');
  modal.classList.add('translate-y-full');
}

// ================== DESCONECTAR ==================
document.getElementById('logoutBtn').addEventListener('click', () => {
  showToast(t('loggedOut'));
});

// ================== TOAST ==================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 2000);
}

// ================== PROGRESSO DOS TUTORIAIS ==================
let completed = 4;
const total = 8;
function updateProgress() {
  document.getElementById('tutorialCount').textContent = `${completed}/${total}`;
  document.getElementById('tutorialBar').style.width = `${(completed / total) * 100}%`;
}
updateProgress();

// Aplica os textos no idioma inicial (pt-BR) assim que a página carrega
applyStaticTranslations();
