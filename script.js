/* Miguel Ángel Urrutia — script.js  v2 */
(function () {
  'use strict';

  /* ================================================================
     TRANSLATIONS
     ================================================================ */
  var T = {
    en: {
      'nav.about':    'About',
      'nav.expertise':'Expertise',
      'nav.timeline': 'Experience',
      'nav.remote':   'Remote',
      'nav.contact':  'Contact',
      'hero.eyebrow': 'Certified Public Interpreter &nbsp;&middot;&nbsp; Panama City, Panama',
      'hero.title':   'Conference Interpreter &amp; Certified Court Interpreter',
      'hero.statement':'Senior conference and court interpreter based in Panama, trusted for legal, maritime, governmental, and international assignments since 1980.',
      'hero.cta.contact': 'Contact Miguel',
      'hero.cta.cv':      'Download CV',
      'cred.1': 'Certified Public Interpreter',
      'cred.2': 'Spanish &amp; English A-Level',
      'cred.3': 'Maritime &amp; Legal Specialist',
      'cred.4': 'Remote Simultaneous Interpretation',
      'cred.5': 'Panama Canal &amp; International Conferences',
      'about.heading': 'About',
      'about.lead': 'Miguel &Aacute;ngel Urrutia is a Certified Public Interpreter based in Panama City, with a continuous professional record in legal, maritime, governmental, and conference interpretation since 1980.',
      'about.p1': 'Recognized by the Ministry of Government and Justice of the Republic of Panama (Resolution No. 290), he holds an A-level designation in Spanish and English per AIIC standards, with working knowledge of French and Portuguese. He is also a Licensed Seafarer under the Panama Maritime Authority.',
      'about.p2': 'He has served as lead interpreter for international conferences, arbitration hearings, and Board of Directors proceedings, and has coordinated interpreting teams for the World Bank Group and the Japan International Cooperation Agency.',
      'exp.heading': 'Areas of Expertise',
      'exp.1.h': 'Legal &amp; Court Interpretation',
      'exp.1.p': 'Court hearings, arbitration panels, depositions, and sworn proceedings &mdash; in Panama, the United States, and internationally.',
      'exp.2.h': 'Maritime &amp; Panama Canal',
      'exp.2.p': 'Panama Canal proceedings, maritime arbitration, port congresses, and engineering conferences &mdash; including nuclear transport briefings.',
      'exp.3.h': 'Law Enforcement &amp; Security',
      'exp.3.p': 'Training programs for ICITAP, INTERPOL, ILEA, the U.S. Southern Command, the Royal Canadian Mounted Police, and the NCA (UK).',
      'exp.4.h': 'Government &amp; International Organizations',
      'exp.4.p': 'Diplomatic negotiations, OAS sessions, the World Economic Forum Latin America, and the FTAA/ALCA trade negotiations.',
      'exp.5.h': 'Medical &amp; Technical Conferences',
      'exp.5.p': 'Pharmaceutical symposia for Abbott, Merck, Roche, GSK, Bayer, and others; hospital equipment seminars; and engineering congresses including PIANC.',
      'exp.6.h': 'Finance, Banking &amp; Tax',
      'exp.6.p': 'LatAm Banking Federation, IMF and World Bank briefings, and tax law seminars for KPMG, PwC, BDO, Grant Thornton, and ECLAC.',
      'exp.7.h': 'Remote &amp; Hybrid Interpretation',
      'exp.7.p': '18+ years in remote simultaneous, hybrid, and fully decentralized formats, including live international television.',
      'tl.heading': 'Career Highlights',
      'tl.1.date': '1980',
      'tl.1.h': 'U.S. Embassy &mdash; Commercial Section',
      'tl.1.p': 'Started his interpreting career at the U.S. Embassy in Panama, serving the Commercial Section.',
      'tl.2.date': '1988 &ndash; 1993',
      'tl.2.h': 'U.S. State Department &mdash; FBIS Monitor',
      'tl.2.p': 'Latin America and Caribbean monitor for the Foreign Broadcast Information Service, a U.S. State Department intelligence unit handling sensitive regional reporting.',
      'tl.3.date': '1993',
      'tl.3.h': 'Certified Public Interpreter',
      'tl.3.p': 'Certified as Certified Public Interpreter (Spanish/English) by the Ministry of Government and Justice of Panama, Resolution No. 290.',
      'tl.4.date': '1998 &ndash; 2003',
      'tl.4.h': 'Panama Canal Commission / Panama Canal Authority',
      'tl.4.p': 'Lead interpreter, Language Services Branch. Arbitration hearings, accident investigations, Board of Directors meetings, and court proceedings &mdash; in Panama and abroad.',
      'tl.5.date': '2001 &ndash; 2003',
      'tl.5.h': 'FTAA / ALCA Negotiations',
      'tl.5.p': 'Conference interpreter for FTAA trade negotiations &mdash; authorized by AIIC senior interpreters and the FTAA Chief Interpreter.',
      'tl.6.date': 'Ongoing',
      'tl.6.h': 'International Courts, Law Enforcement &amp; Conferences',
      'tl.6.p': 'Court interpretation for the Miami Maritime Arbitration Council, the U.S. Federal Court, and Panama Maritime Court. Conference interpretation for the World Bank, INTERPOL, RCMP, NCA (UK), and the OAS.',
      'tl.7.date': 'Live Television',
      'tl.7.h': 'MEDCOM &mdash; International Broadcast Interpretation',
      'tl.7.p': 'Live interpretation for MEDCOM Panama: COP26, multiple Academy Awards ceremonies, Miss Universe, and Miss World.',
      'tl.8.date': '2021 &ndash; 2024',
      'tl.8.h': 'Legal Affairs Committee &mdash; APTI',
      'tl.8.p': 'Member of the Legal Affairs Committee of the Panamanian Association of Translators and Interpreters (APTI).',
      'rem.heading': 'Remote &amp; Hybrid Interpretation',
      'rem.lead': 'Delivering remote and hybrid interpretation since well before it became standard practice &mdash; in every format from conference calls to fully decentralized RSI.',
      'rem.1.title': 'Conference Calls',
      'rem.1.p': 'On-site interpretation of telephone presentations from remote participants, into and from a second language.',
      'rem.2.title': 'Videoconferences',
      'rem.2.p': 'Live interpretation of multi-speaker video sessions for on-site audiences.',
      'rem.3.title': 'Remote Simultaneous Interpretation',
      'rem.3.p': 'Interpreter off-site; audience and speakers at the venue.',
      'rem.4.title': 'Fully Decentralized RSI',
      'rem.4.p': 'Every participant, speaker, and interpreter in a separate location.',
      'rem.kudo': '<strong>Kudo Certified Interpreter</strong> &mdash; certified in the Kudoway RSI platform, with extensive experience advising organizers, hosts, and attendees on remote conference best practices.',
      'leg.heading': 'A Career Built Over Decades',
      'leg.quote': '&#8220;A career built over decades of trust, precision, and discretion.&#8221;',
      'leg.p1': 'From the commercial offices of the U.S. Embassy in 1980 to international maritime arbitration, live television interpretation, and fully remote simultaneous conferences &mdash; Miguel &Aacute;ngel Urrutia has worked at the intersection of language, law, and commerce for over four decades.',
      'leg.p2': 'His record reflects not only linguistic fluency, but the professional judgement, subject-matter depth, and personal discretion that sensitive international work demands. He has coordinated interpreting teams for the World Bank Group and the Japan International Cooperation Agency, completed AIIC professional development in 2023, and served institutions on five continents.',
      'leg.p3': 'This is a career defined not by volume, but by the calibre of assignments, the trust of repeat clients, and an unbroken standard of quality since 1980.',
      'con.heading': 'Contact',
      'con.intro': 'Available for conference assignments, court proceedings, and remote interpretation &mdash; nationally and internationally.',
      'con.label.email': 'Email',
      'con.label.phone': 'Telephone',
      'con.label.web':   'Website',
      'con.btn.email': 'Send an Email',
      'con.btn.call':  'Call: +507 6654-1664',
      'con.btn.wa':    'WhatsApp',
      'foot.title':  'Conference Interpreter &amp; Consultant &nbsp;&middot;&nbsp; Panama',
      'foot.credit': 'Website by Digital Cards Panama'
    },
    es: {
      'nav.about':    'Sobre M&iacute;',
      'nav.expertise':'Especialidades',
      'nav.timeline': 'Trayectoria',
      'nav.remote':   'Remoto',
      'nav.contact':  'Contacto',
      'hero.eyebrow': 'Int&eacute;rprete P&uacute;blico Autorizado &nbsp;&middot;&nbsp; Ciudad de Panam&aacute;, Panam&aacute;',
      'hero.title':   'Int&eacute;rprete de Conferencias e Int&eacute;rprete P&uacute;blico Autorizado',
      'hero.statement':'Int&eacute;rprete senior de conferencias y judicial basado en Panam&aacute;, con trayectoria en asuntos legales, mar&iacute;timos, gubernamentales e internacionales desde 1980.',
      'hero.cta.contact': 'Contactar a Miguel',
      'hero.cta.cv':      'Descargar CV',
      'cred.1': 'Int&eacute;rprete P&uacute;blico Autorizado',
      'cred.2': 'Espa&ntilde;ol e Ingl&eacute;s Nivel A',
      'cred.3': 'Especialista Mar&iacute;timo y Jur&iacute;dico',
      'cred.4': 'Interpretaci&oacute;n Simult&aacute;nea Remota',
      'cred.5': 'Canal de Panam&aacute; y Conferencias Internacionales',
      'about.heading': 'Sobre M&iacute;',
      'about.lead': 'Miguel &Aacute;ngel Urrutia es Int&eacute;rprete P&uacute;blico Autorizado con sede en Ciudad de Panam&aacute;, con una trayectoria profesional ininterrumpida en interpretaci&oacute;n jur&iacute;dica, mar&iacute;tima, gubernamental y de conferencias desde 1980.',
      'about.p1': 'Reconocido por el Ministerio de Gobierno y Justicia de la Rep&uacute;blica de Panam&aacute; (Resoluci&oacute;n No. 290), ostenta la designaci&oacute;n de nivel A en espa&ntilde;ol e ingl&eacute;s seg&uacute;n los est&aacute;ndares de la AIIC, con conocimiento funcional del franc&eacute;s y el portugu&eacute;s. Es tambi&eacute;n Marino Licenciado bajo la Autoridad Mar&iacute;tima de Panam&aacute;.',
      'about.p2': 'Ha actuado como int&eacute;rprete principal en conferencias internacionales, audiencias arbitrales y reuniones de junta directiva, y ha coordinado equipos de int&eacute;rpretes para el Grupo Banco Mundial y la Agencia de Cooperaci&oacute;n Internacional del Jap&oacute;n.',
      'exp.heading': '&Aacute;reas de Especialidad',
      'exp.1.h': 'Interpretaci&oacute;n Jur&iacute;dica y Judicial',
      'exp.1.p': 'Audiencias judiciales, paneles de arbitraje, deposiciones y actuaciones bajo juramento &mdash; en Panam&aacute;, Estados Unidos e internacionalmente.',
      'exp.2.h': 'Mar&iacute;timo y Canal de Panam&aacute;',
      'exp.2.p': 'Procedimientos del Canal de Panam&aacute;, arbitraje mar&iacute;timo, congresos portuarios y conferencias de ingenier&iacute;a &mdash; incluyendo gestiones sobre transporte nuclear.',
      'exp.3.h': 'Seguridad y Aplicaci&oacute;n de la Ley',
      'exp.3.p': 'Programas de formaci&oacute;n para ICITAP, INTERPOL, ILEA, el Comando Sur de EE.&nbsp;UU., la RCMP y la NCA (Reino Unido).',
      'exp.4.h': 'Gobierno y Organismos Internacionales',
      'exp.4.p': 'Negociaciones diplom&aacute;ticas, sesiones de la OEA, el Foro Econ&oacute;mico Mundial para Am&eacute;rica Latina y el proceso de negociaciones del ALCA/FTAA.',
      'exp.5.h': 'Congresos M&eacute;dicos y T&eacute;cnicos',
      'exp.5.p': 'Simposios de grandes farmac&eacute;uticas (Abbott, Merck, Roche, GSK, Bayer); seminarios de equipos hospitalarios; y congresos de ingenier&iacute;a incluyendo PIANC.',
      'exp.6.h': 'Finanzas, Banca e Impuestos',
      'exp.6.p': 'Federaci&oacute;n Latinoamericana de Bancos, informes del FMI y el Banco Mundial, y seminarios tributarios de KPMG, PwC, BDO, Grant Thornton y la CEPAL.',
      'exp.7.h': 'Interpretaci&oacute;n Remota e H&iacute;brida',
      'exp.7.p': 'M&aacute;s de 18 a&ntilde;os en formatos remoto, h&iacute;brido y completamente descentralizado, incluyendo televisi&oacute;n internacional en vivo.',
      'tl.heading': 'Trayectoria Profesional',
      'tl.1.date': '1980',
      'tl.1.h': 'Embajada de EE.&nbsp;UU. &mdash; Secci&oacute;n Comercial',
      'tl.1.p': 'Inici&oacute; su carrera como int&eacute;rprete en la Embajada de los Estados Unidos en Panam&aacute;, sirviendo a la Secci&oacute;n Comercial.',
      'tl.2.date': '1988 &ndash; 1993',
      'tl.2.h': 'Departamento de Estado &mdash; Monitor FBIS',
      'tl.2.p': 'Monitor para Am&eacute;rica Latina y el Caribe en el FBIS, unidad de inteligencia del Departamento de Estado de EE.&nbsp;UU.',
      'tl.3.date': '1993',
      'tl.3.h': 'Int&eacute;rprete P&uacute;blico Autorizado',
      'tl.3.p': 'Certificado como Int&eacute;rprete P&uacute;blico Autorizado (espa&ntilde;ol/ingl&eacute;s) por el Ministerio de Gobierno y Justicia de Panam&aacute;, Resoluci&oacute;n No. 290.',
      'tl.4.date': '1998 &ndash; 2003',
      'tl.4.h': 'Comisi&oacute;n / Autoridad del Canal de Panam&aacute;',
      'tl.4.p': 'Int&eacute;rprete principal de la Rama de Servicios de Idiomas. Audiencias arbitrales, investigaciones de accidentes, reuniones de junta directiva y actuaciones judiciales &mdash; en Panam&aacute; y en el exterior.',
      'tl.5.date': '2001 &ndash; 2003',
      'tl.5.h': 'Negociaciones del ALCA / FTAA',
      'tl.5.p': 'Int&eacute;rprete de conferencias en las negociaciones del ALCA &mdash; autorizado por int&eacute;rpretes senior de la AIIC y la Jefa de Int&eacute;rpretes del ALCA.',
      'tl.6.date': 'Vigente',
      'tl.6.h': 'Cortes Internacionales, Seguridad y Conferencias',
      'tl.6.p': 'Interpretaci&oacute;n judicial para el Consejo de Arbitraje Mar&iacute;timo de Miami, la Corte Federal de EE.&nbsp;UU. y la Corte Mar&iacute;tima de Panam&aacute;. Conferencias para el Banco Mundial, INTERPOL, RCMP, NCA y la OEA.',
      'tl.7.date': 'Televisi&oacute;n en Vivo',
      'tl.7.h': 'MEDCOM &mdash; Interpretaci&oacute;n en Transmisi&oacute;n Internacional',
      'tl.7.p': 'Interpretaci&oacute;n en directo para MEDCOM Panam&aacute;: COP26, m&uacute;ltiples ceremonias del &Oacute;scar, Miss Universo y Miss Mundo.',
      'tl.8.date': '2021 &ndash; 2024',
      'tl.8.h': 'Comit&eacute; de Asuntos Jur&iacute;dicos &mdash; APTI',
      'tl.8.p': 'Miembro del Comit&eacute; de Asuntos Jur&iacute;dicos de la Asociaci&oacute;n Paname&ntilde;a de Traductores e Int&eacute;rpretes (APTI).',
      'rem.heading': 'Interpretaci&oacute;n Remota e H&iacute;brida',
      'rem.lead': 'Prestando servicios en todos los formatos remotos e h&iacute;bridos desde bien antes de que se convirtieran en pr&aacute;ctica est&aacute;ndar &mdash; desde llamadas de conferencia hasta ISR completamente descentralizada.',
      'rem.1.title': 'Llamadas de Conferencia',
      'rem.1.p': 'Interpretaci&oacute;n presencial de presentaciones telef&oacute;nicas de participantes remotos, hacia y desde un segundo idioma.',
      'rem.2.title': 'Videoconferencias',
      'rem.2.p': 'Interpretaci&oacute;n en vivo de sesiones con m&uacute;ltiples ponentes para audiencias presenciales.',
      'rem.3.title': 'Interpretaci&oacute;n Simult&aacute;nea Remota',
      'rem.3.p': 'Int&eacute;rprete fuera del lugar; audiencia y ponentes en el sitio.',
      'rem.4.title': 'ISR Completamente Descentralizada',
      'rem.4.p': 'Cada participante, ponente e int&eacute;rprete en una ubicaci&oacute;n distinta.',
      'rem.kudo': '<strong>Int&eacute;rprete Certificado Kudo</strong> &mdash; certificado en la plataforma Kudoway RSI, con amplia experiencia asesorando organizadores, anfitriones y asistentes sobre buenas pr&aacute;cticas en eventos remotos.',
      'leg.heading': 'Una Carrera Construida a lo Largo de D&eacute;cadas',
      'leg.quote': '&#171;Una carrera construida durante d&eacute;cadas de confianza, precisi&oacute;n y discreci&oacute;n.&#187;',
      'leg.p1': 'Desde las oficinas comerciales de la Embajada de EE.&nbsp;UU. en 1980 hasta el arbitraje mar&iacute;timo internacional, la interpretaci&oacute;n en televisi&oacute;n en vivo y las conferencias simult&aacute;neas completamente remotas &mdash; Miguel &Aacute;ngel Urrutia ha trabajado en la intersecci&oacute;n del lenguaje, el derecho y el comercio durante m&aacute;s de cuatro d&eacute;cadas.',
      'leg.p2': 'Su historial refleja no solo fluidez ling&uuml;&iacute;stica, sino el juicio profesional, la profundidad tem&aacute;tica y la discreci&oacute;n personal que exige el trabajo internacional m&aacute;s sensible. Ha coordinado equipos de int&eacute;rpretes para el Grupo Banco Mundial y la Agencia de Cooperaci&oacute;n Internacional del Jap&oacute;n, complet&oacute; su formaci&oacute;n en la AIIC en 2023 y ha servido a instituciones en cinco continentes.',
      'leg.p3': 'Esta es una carrera definida no por el volumen, sino por la calidad de los encargos, la confianza de los clientes habituales y un est&aacute;ndar de excelencia ininterrumpido desde 1980.',
      'con.heading': 'Contacto',
      'con.intro': 'Disponible para conferencias, actuaciones judiciales e interpretaci&oacute;n remota &mdash; a nivel nacional e internacional.',
      'con.label.email': 'Correo Electr&oacute;nico',
      'con.label.phone': 'Tel&eacute;fono',
      'con.label.web':   'Sitio Web',
      'con.btn.email': 'Enviar un Correo',
      'con.btn.call':  'Llamar: +507 6654-1664',
      'con.btn.wa':    'WhatsApp',
      'foot.title':  'Int&eacute;rprete de Conferencias y Consultor &nbsp;&middot;&nbsp; Panam&aacute;',
      'foot.credit': 'Sitio web por Digital Cards Panama'
    }
  };

  var currentLang = 'en';

  function applyLang(lang) {
    currentLang = lang;
    var dict = T[lang] || T.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  /* ================================================================
     STICKY NAV SHADOW
     ================================================================ */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ================================================================
     MOBILE HAMBURGER
     ================================================================ */
  var toggle = document.getElementById('navToggle');
  var menu   = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      });
    });
    document.addEventListener('click', function (e) {
      if (nav && !nav.contains(e.target) && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  /* ================================================================
     ACTIVE NAV LINK ON SCROLL
     ================================================================ */
  var sections  = document.querySelectorAll('section[id]');
  var navLinks  = document.querySelectorAll('.nav-menu a[href^="#"]');

  if ('IntersectionObserver' in window) {
    var sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('nav-active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-64px 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { sectionObs.observe(s); });
  }

  /* ================================================================
     SCROLL REVEAL
     ================================================================ */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
    document.querySelectorAll('.reveal, .reveal-left').forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    /* If no IO support or reduced motion, reveal everything immediately */
    document.querySelectorAll('.reveal, .reveal-left').forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ================================================================
     PARALLAX — remote section background
     ================================================================ */
  var remoteSection = document.getElementById('remote');
  var remoteScene   = remoteSection ? remoteSection.querySelector('.remote-scene') : null;

  if (remoteScene && !prefersReducedMotion) {
    function onParallax() {
      var rect = remoteSection.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      var progress = rect.top / window.innerHeight;
      var shift    = progress * 40;
      remoteScene.style.transform = 'translateY(' + shift + 'px)';
    }
    window.addEventListener('scroll', onParallax, { passive: true });
    onParallax();
  }

})();
