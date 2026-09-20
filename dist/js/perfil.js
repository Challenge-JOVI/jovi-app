// ================== TRADUÇÕES ==================
const translations = {
  'pt-BR': {
    settings: 'Configurações',
    profileTitle: 'Perfil',
    profileSubtitle: 'Seus dados e as preferências do aplicativo',
    ageLabel: 'Idade',
    memberSinceLabel: 'Membro desde',
    yearsOld: age => `${age} anos`,
    memberSinceChip: date => `Membro desde ${date}`,
    guestName: 'Visitante',
    guestEmail: 'Cadastre-se para ver seus dados aqui',
    notInformed: 'Não informado',
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
    privacyOptions: [
      { id: 'location', label: 'Localização', desc: 'Permitir acesso à sua localização' },
      { id: 'camera', label: 'Câmera', desc: 'Permitir acesso à câmera' },
      { id: 'mic', label: 'Microfone', desc: 'Permitir acesso ao microfone' },
      { id: 'contacts', label: 'Contatos', desc: 'Permitir acesso aos seus contatos' },
      { id: 'ads', label: 'Anúncios personalizados', desc: 'Usar seus dados para personalizar anúncios' },
      { id: 'analytics', label: 'Dados de uso', desc: 'Compartilhar dados de uso para melhorias' }
    ],
    storeNote: 'Canais de venda oficiais da JOVI no Brasil.',
    storeLinks: {
      site: 'Site oficial da JOVI',
      shopee: 'Loja oficial na Shopee',
      mercadolivre: 'Loja oficial no Mercado Livre',
      amazon: 'Loja oficial na Amazon'
    }
  },
  'en-US': {
    settings: 'Settings',
    profileTitle: 'Profile',
    profileSubtitle: 'Your details and the app preferences',
    ageLabel: 'Age',
    memberSinceLabel: 'Member since',
    yearsOld: age => `${age} years old`,
    memberSinceChip: date => `Member since ${date}`,
    guestName: 'Guest',
    guestEmail: 'Sign up to see your details here',
    notInformed: 'Not provided',
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
    privacyOptions: [
      { id: 'location', label: 'Location', desc: 'Allow access to your location' },
      { id: 'camera', label: 'Camera', desc: 'Allow access to the camera' },
      { id: 'mic', label: 'Microphone', desc: 'Allow access to the microphone' },
      { id: 'contacts', label: 'Contacts', desc: 'Allow access to your contacts' },
      { id: 'ads', label: 'Personalized ads', desc: 'Use your data to personalize ads' },
      { id: 'analytics', label: 'Usage data', desc: 'Share usage data for improvements' }
    ],
    storeNote: 'JOVI\'s official sales channels in Brazil.',
    storeLinks: {
      site: 'JOVI official website',
      shopee: 'Official store on Shopee',
      mercadolivre: 'Official store on Mercado Livre',
      amazon: 'Official store on Amazon'
    }
  },
  'es-ES': {
    settings: 'Configuración',
    profileTitle: 'Perfil',
    profileSubtitle: 'Tus datos y las preferencias de la aplicación',
    ageLabel: 'Edad',
    memberSinceLabel: 'Miembro desde',
    yearsOld: age => `${age} años`,
    memberSinceChip: date => `Miembro desde ${date}`,
    guestName: 'Invitado',
    guestEmail: 'Regístrate para ver tus datos aquí',
    notInformed: 'No indicado',
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
    privacyOptions: [
      { id: 'location', label: 'Ubicación', desc: 'Permitir acceso a tu ubicación' },
      { id: 'camera', label: 'Cámara', desc: 'Permitir acceso a la cámara' },
      { id: 'mic', label: 'Micrófono', desc: 'Permitir acceso al micrófono' },
      { id: 'contacts', label: 'Contactos', desc: 'Permitir acceso a tus contactos' },
      { id: 'ads', label: 'Anuncios personalizados', desc: 'Usar tus datos para personalizar anuncios' },
      { id: 'analytics', label: 'Datos de uso', desc: 'Compartir datos de uso para mejoras' }
    ],
    storeNote: 'Canales de venta oficiales de JOVI en Brasil.',
    storeLinks: {
      site: 'Sitio oficial de JOVI',
      shopee: 'Tienda oficial en Shopee',
      mercadolivre: 'Tienda oficial en Mercado Livre',
      amazon: 'Tienda oficial en Amazon'
    }
  },
  'fr-FR': {
    settings: 'Paramètres',
    profileTitle: 'Profil',
    profileSubtitle: "Vos informations et les préférences de l'application",
    ageLabel: 'Âge',
    memberSinceLabel: 'Membre depuis',
    yearsOld: age => `${age} ans`,
    memberSinceChip: date => `Membre depuis ${date}`,
    guestName: 'Invité',
    guestEmail: 'Inscrivez-vous pour voir vos informations ici',
    notInformed: 'Non renseigné',
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
    privacyOptions: [
      { id: 'location', label: 'Localisation', desc: "Autoriser l'accès à votre position" },
      { id: 'camera', label: 'Caméra', desc: "Autoriser l'accès à la caméra" },
      { id: 'mic', label: 'Microphone', desc: "Autoriser l'accès au microphone" },
      { id: 'contacts', label: 'Contacts', desc: "Autoriser l'accès à vos contacts" },
      { id: 'ads', label: 'Publicités personnalisées', desc: 'Utiliser vos données pour personnaliser les publicités' },
      { id: 'analytics', label: "Données d'utilisation", desc: "Partager les données d'utilisation pour des améliorations" }
    ],
    storeNote: 'Canaux de vente officiels de JOVI au Brésil.',
    storeLinks: {
      site: 'Site officiel de JOVI',
      shopee: 'Boutique officielle sur Shopee',
      mercadolivre: 'Boutique officielle sur Mercado Livre',
      amazon: 'Boutique officielle sur Amazon'
    }
  },
  'de-DE': {
    settings: 'Einstellungen',
    profileTitle: 'Profil',
    profileSubtitle: 'Deine Daten und die App-Einstellungen',
    ageLabel: 'Alter',
    memberSinceLabel: 'Mitglied seit',
    yearsOld: age => `${age} Jahre`,
    memberSinceChip: date => `Mitglied seit ${date}`,
    guestName: 'Gast',
    guestEmail: 'Registriere dich, um deine Daten hier zu sehen',
    notInformed: 'Keine Angabe',
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
    privacyOptions: [
      { id: 'location', label: 'Standort', desc: 'Zugriff auf deinen Standort erlauben' },
      { id: 'camera', label: 'Kamera', desc: 'Zugriff auf die Kamera erlauben' },
      { id: 'mic', label: 'Mikrofon', desc: 'Zugriff auf das Mikrofon erlauben' },
      { id: 'contacts', label: 'Kontakte', desc: 'Zugriff auf deine Kontakte erlauben' },
      { id: 'ads', label: 'Personalisierte Werbung', desc: 'Deine Daten für personalisierte Werbung verwenden' },
      { id: 'analytics', label: 'Nutzungsdaten', desc: 'Nutzungsdaten für Verbesserungen teilen' }
    ],
    storeNote: 'Offizielle Verkaufskanäle von JOVI in Brasilien.',
    storeLinks: {
      site: 'Offizielle JOVI-Website',
      shopee: 'Offizieller Shop bei Shopee',
      mercadolivre: 'Offizieller Shop bei Mercado Livre',
      amazon: 'Offizieller Shop bei Amazon'
    }
  },
  'it-IT': {
    settings: 'Impostazioni',
    profileTitle: 'Profilo',
    profileSubtitle: "I tuoi dati e le preferenze dell'app",
    ageLabel: 'Età',
    memberSinceLabel: 'Membro dal',
    yearsOld: age => `${age} anni`,
    memberSinceChip: date => `Membro dal ${date}`,
    guestName: 'Ospite',
    guestEmail: 'Registrati per vedere i tuoi dati qui',
    notInformed: 'Non indicato',
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
    privacyOptions: [
      { id: 'location', label: 'Posizione', desc: 'Consenti l\'accesso alla tua posizione' },
      { id: 'camera', label: 'Fotocamera', desc: 'Consenti l\'accesso alla fotocamera' },
      { id: 'mic', label: 'Microfono', desc: 'Consenti l\'accesso al microfono' },
      { id: 'contacts', label: 'Contatti', desc: 'Consenti l\'accesso ai tuoi contatti' },
      { id: 'ads', label: 'Annunci personalizzati', desc: 'Usa i tuoi dati per personalizzare gli annunci' },
      { id: 'analytics', label: 'Dati di utilizzo', desc: 'Condividi i dati di utilizzo per migliorie' }
    ],
    storeNote: 'Canali di vendita ufficiali di JOVI in Brasile.',
    storeLinks: {
      site: 'Sito ufficiale di JOVI',
      shopee: 'Negozio ufficiale su Shopee',
      mercadolivre: 'Negozio ufficiale su Mercado Livre',
      amazon: 'Negozio ufficiale su Amazon'
    }
  },
  'ja-JP': {
    settings: '設定',
    profileTitle: 'プロフィール',
    profileSubtitle: 'あなたの情報とアプリの設定',
    ageLabel: '年齢',
    memberSinceLabel: '登録日',
    yearsOld: age => `${age}歳`,
    memberSinceChip: date => `${date}から利用中`,
    guestName: 'ゲスト',
    guestEmail: '登録するとここに情報が表示されます',
    notInformed: '未入力',
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
    privacyOptions: [
      { id: 'location', label: '位置情報', desc: '位置情報へのアクセスを許可する' },
      { id: 'camera', label: 'カメラ', desc: 'カメラへのアクセスを許可する' },
      { id: 'mic', label: 'マイク', desc: 'マイクへのアクセスを許可する' },
      { id: 'contacts', label: '連絡先', desc: '連絡先へのアクセスを許可する' },
      { id: 'ads', label: 'パーソナライズ広告', desc: 'データを使って広告をパーソナライズする' },
      { id: 'analytics', label: '使用状況データ', desc: '改善のために使用状況データを共有する' }
    ],
    storeNote: 'ブラジルにおけるJOVIの公式販売チャネルです。',
    storeLinks: {
      site: 'JOVI公式サイト',
      shopee: 'Shopee公式ストア',
      mercadolivre: 'Mercado Livre公式ストア',
      amazon: 'Amazon公式ストア'
    }
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

// Canais de venda oficiais da JOVI no Brasil (a marca não tem e-commerce próprio)
const stores = [
  { id: 'site', name: 'jovimobile.com', url: 'https://www.jovimobile.com/br' },
  { id: 'shopee', name: 'Shopee', url: 'https://shopee.com.br/jovioficial' },
  { id: 'mercadolivre', name: 'Mercado Livre', url: 'https://www.mercadolivre.com.br/loja/jovi' },
  { id: 'amazon', name: 'Amazon', url: 'https://www.amazon.com.br/stores/JOVIOficial/page/5D12A6CF-C41D-43B5-BD55-91E9751D68D6' }
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

  document.documentElement.lang = currentLang;
  document.title = t('profileTitle');
  document.getElementById('current-lang').textContent = languages.find(lang => lang.code === currentLang).name;

  renderUser();
}

// ================== DADOS DO USUÁRIO (vindos do cadastro) ==================
function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

// Usa a conta que entrou no login; sem login, mostra a última conta criada
function getCurrentUser() {
  const users = getUsers();

  if (users.length === 0) {
    return null;
  }

  const loggedUserId = localStorage.getItem('loggedUserId');

  return users.find(user => user.id === loggedUserId) || users[users.length - 1];
}

const currentUser = getCurrentUser();

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0].charAt(0);
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';

  return (first + last).toUpperCase();
}

function formatDate(isoDate) {
  if (!isoDate) {
    return t('notInformed');
  }

  return new Date(isoDate).toLocaleDateString(currentLang, {
    month: 'short',
    year: 'numeric'
  });
}

function renderUser() {
  const avatar = document.getElementById('avatar');
  const memberSince = document.getElementById('member-since');

  if (!currentUser) {
    avatar.textContent = '?';
    document.getElementById('user-name').textContent = t('guestName');
    document.getElementById('user-email').textContent = t('guestEmail');
    document.getElementById('user-age').textContent = t('notInformed');
    document.getElementById('user-created').textContent = t('notInformed');
    memberSince.classList.add('hidden');
    return;
  }

  avatar.textContent = getInitials(currentUser.name);
  document.getElementById('user-name').textContent = currentUser.name;
  document.getElementById('user-email').textContent = currentUser.email;
  document.getElementById('user-age').textContent = currentUser.age
    ? t('yearsOld')(currentUser.age)
    : t('notInformed');
  document.getElementById('user-created').textContent = formatDate(currentUser.createdAt);

  memberSince.classList.remove('hidden');
  memberSince.textContent = t('memberSinceChip')(formatDate(currentUser.createdAt));
}

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
    <div class="flex flex-col gap-1">
      ${languages.map(lang => `
        <button
          type="button"
          class="w-full flex items-center justify-between gap-3 px-3 py-3 rounded-2xl cursor-pointer transition-colors hover:bg-royal-blue-100"
          onclick="selectLanguage('${lang.code}')"
        >
          <span class="text-sm font-semibold">${lang.name}</span>
          ${lang.code === currentLang
            ? `<svg class="w-4 h-4 text-royal-blue-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/></svg>`
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
    <div class="flex flex-col">
      ${options.map(opt => `
        <div class="flex items-center justify-between gap-4 py-3 border-b border-line last:border-0">
          <div>
            <p class="text-sm font-semibold">${opt.label}</p>
            <p class="text-xs text-muted">${opt.desc}</p>
          </div>
          <button
            type="button"
            aria-pressed="${privacyState[opt.id]}"
            class="relative shrink-0 w-11 h-6 rounded-full cursor-pointer transition-colors ${privacyState[opt.id] ? 'bg-royal-blue-700' : 'bg-line'}"
            onclick="togglePrivacy('${opt.id}')"
          >
            <span class="absolute top-0.5 ${privacyState[opt.id] ? 'left-5.5' : 'left-0.5'} w-5 h-5 bg-white rounded-full shadow-float transition-all"></span>
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function renderStore() {
  const links = t('storeLinks');
  return `
    <div class="flex flex-col gap-3">
      ${stores.map(store => `
        <a
          href="${store.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-between gap-3 bg-field ring-1 ring-line rounded-2xl px-3 py-3 transition-colors hover:bg-royal-blue-100"
          onclick="showToast(t('opening')('${store.name}'))"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-linear-to-br from-royal-blue-700 to-royal-blue-500 flex items-center justify-center text-white font-extrabold text-sm shrink-0">
              ${store.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p class="text-sm font-semibold">${store.name}</p>
              <p class="text-xs text-muted">${links[store.id]}</p>
            </div>
          </div>
          <svg class="w-4 h-4 text-royal-blue-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5M15 3h6m0 0v6m0-6L10.5 13.5" />
          </svg>
        </a>
      `).join('')}
    </div>

    <p class="text-xs text-muted mt-4">${t('storeNote')}</p>
  `;
}

// ================== AÇÕES DENTRO DO MODAL ==================
function selectLanguage(code) {
  currentLang = code;
  const lang = languages.find(l => l.code === code);

  // Atualiza todos os textos fixos da tela
  applyStaticTranslations();

  // Atualiza o título do modal e o conteúdo (agora no novo idioma)
  document.getElementById('modal-title').textContent = t('language');
  document.getElementById('modal-content').innerHTML = renderLanguages();

  showToast(t('languageChanged')(lang.name));
}

function togglePrivacy(id) {
  privacyState[id] = !privacyState[id];
  document.getElementById('modal-content').innerHTML = renderPrivacy();
  const opt = t('privacyOptions').find(o => o.id === id);
  showToast(`${opt.label} ${privacyState[id] ? t('enabledWord') : t('disabledWord')}`);
}

// ================== CONTROLE DO MODAL ==================
function openModal(title, contentHtml) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-content').innerHTML = contentHtml;

  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('setting-modal');

  overlay.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.remove('translate-y-full');
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('setting-modal');

  overlay.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.add('translate-y-full');
}

// ================== DESCONECTAR ==================
document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('loggedUserId');
  showToast(t('loggedOut'));

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1200);
});

// ================== TOAST ==================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.remove('opacity-0');
  toastTimeout = setTimeout(() => {
    toast.classList.add('opacity-0');
  }, 2000);
}

// ================== PROGRESSO DOS TUTORIAIS ==================
const total = tutorials.length;
const completedIds = JSON.parse(localStorage.getItem('completedTutorials')) || [];
const completed = tutorials.filter(tutorial => completedIds.includes(tutorial.id)).length;

function updateProgress() {
  document.getElementById('tutorial-count').textContent = `${completed}/${total}`;
  document.getElementById('tutorial-bar').style.width = `${(completed / total) * 100}%`;
}
updateProgress();

// Aplica os textos no idioma inicial (pt-BR) assim que a página carrega
applyStaticTranslations();
