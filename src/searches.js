const searchPlaceholder = '{s}';

const searches = [
  //////////////////////////////////////////////////////////////////////////////
  /// Search engines
  //////////////////////////////////////////////////////////////////////////////
  {
    shortcut: 'g',
    alias: 'г',
    url: 'https://www.google.com/search?q={s}',
    icon: 'google.png',
    description: 'Search with Google',
  },
  {
    shortcut: 'gi',
    alias: null,
    url: 'https://www.google.com/searchbyimage?image_url={s}',
    icon: 'google.png',
    description: 'Search Google for image',
  },
  {
    shortcut: 'ddg',
    alias: 'duck',
    url: 'https://duckduckgo.com/?q={s}',
    icon: 'duck.png',
    description: 'Search with DuckDuckGo',
  },
  {
    shortcut: 'ya',
    alias: 'я',
    url: 'https://yandex.ru/search/?text={s}',
    icon: 'yandex.png',
    description: 'Search with Yandex',
  },

  //////////////////////////////////////////////////////////////////////////////
  /// Video
  //////////////////////////////////////////////////////////////////////////////
  {
    shortcut: 'yt',
    alias: 'ют',
    url: 'https://www.youtube.com/results?search_query={s}',
    icon: 'youtube.png',
    description: 'YouTube',
  },
  {
    shortcut: 'imdb',
    alias: null,
    url: 'http://www.imdb.com/find?q={s}',
    icon: 'imdb.png',
    description: 'IMDB',
  },
  {
    shortcut: 'kp',
    alias: 'кп',
    url: 'http://www.kinopoisk.ru/index.php?kp_query={s}',
    icon: 'kp.png',
    description: 'KinoPoisk',
  },

  //////////////////////////////////////////////////////////////////////////////
  /// Dictionaries
  //////////////////////////////////////////////////////////////////////////////
  {
    shortcut: 'm',
    alias: null,
    url: 'http://www.macmillandictionary.com/search/british/direct/?q={s}',
    icon: 'md.png',
    description: 'Macmillan Dictionary',
  },
  {
    shortcut: 'u',
    alias: null,
    url: 'http://www.urbandictionary.com/define.php?term={s}',
    icon: 'ud.png',
    description: 'Urban Dictionary',
  },
  {
    shortcut: 'f',
    alias: null,
    url: 'https://www.collinsdictionary.com/search/?dictCode=french-english&q={s}',
    icon: 'collins.png',
    description: 'Collins French Dictionary',
  },

  //////////////////////////////////////////////////////////////////////////////
  /// Wiktionary
  //////////////////////////////////////////////////////////////////////////////
  {
    shortcut: 'w',
    alias: null,
    url: 'https://en.wiktionary.org/w/index.php?search={s}',
    icon: 'wiktionary.png',
    description: 'Wiktionary',
  },
  {
    shortcut: 'fw',
    alias: null,
    url: 'https://fr.wiktionary.org/w/index.php?search={s}',
    icon: 'wiktionary.png',
    description: 'French Wiktionary',
  },
  {
    shortcut: 'в',
    alias: null,
    url: 'https://ru.wiktionary.org/w/index.php?search={s}',
    icon: 'wiktionary.png',
    description: 'Russian Wiktionary',
  },

  //////////////////////////////////////////////////////////////////////////////
  /// Wikipedia
  //////////////////////////////////////////////////////////////////////////////
  {
    shortcut: 'wp',
    alias: null,
    url: 'https://en.wikipedia.org/w/index.php?search={s}',
    icon: 'wikipedia.png',
    description: 'Wikipedia',
  },
  {
    shortcut: 'fwp',
    alias: null,
    url: 'https://fr.wikipedia.org/w/index.php?search={s}',
    icon: 'wikipedia.png',
    description: 'French Wikipedia',
  },
  {
    shortcut: 'вп',
    alias: null,
    url: 'https://ru.wikipedia.org/w/index.php?search={s}',
    icon: 'wikipedia.png',
    description: 'Russian Wikipedia',
  },
  
  //////////////////////////////////////////////////////////////////////////////
  /// Google Translate
  //////////////////////////////////////////////////////////////////////////////
  {
    shortcut: 'er',
    alias: null,
    url: 'http://translate.google.com/#en/ru/{s}',
    icon: 'translate.png',
    description: 'Translate 🇬🇧 to 🇷🇺',
  },
  {
    shortcut: 'ре',
    alias: null,
    url: 'http://translate.google.com/#ru/en/{s}',
    icon: 'translate.png',
    description: 'Translate 🇷🇺 to 🇬🇧',
  },
  {
    shortcut: 'fr',
    alias: null,
    url: 'http://translate.google.com/#fr/ru/{s}',
    icon: 'translate.png',
    description: 'Translate 🇫🇷 to 🇷🇺',
  },
  {
    shortcut: 'рф',
    alias: null,
    url: 'http://translate.google.com/#ru/fr/{s}',
    icon: 'translate.png',
    description: 'Translate 🇷🇺 to 🇫🇷',
  },
  {
    shortcut: 'ef',
    alias: null,
    url: 'http://translate.google.com/#en/fr/{s}',
    icon: 'translate.png',
    description: 'Translate 🇬🇧 to 🇫🇷',
  },
  {
    shortcut: 'fe',
    alias: null,
    url: 'http://translate.google.com/#fr/en/{s}',
    icon: 'translate.png',
    description: 'Translate 🇫🇷 to 🇬🇧',
  },

  //////////////////////////////////////////////////////////////////////////////
  /// Lyrics
  //////////////////////////////////////////////////////////////////////////////
  {
    shortcut: 'am',
    alias: null,
    url: 'https://www.amalgama-lab.com/search/?searchid=2148731&text={s}',
    icon: 'amalgama.png',
    description: 'Amalgama',
  },
  {
    shortcut: 'lt',
    alias: null,
    url: 'https://lyricstranslate.com/en/site-search?query={s}',
    icon: 'lt.jpg',
    description: 'Lyrics Translate',
  },

  //////////////////////////////////////////////////////////////////////////////
  /// Misc
  //////////////////////////////////////////////////////////////////////////////
  {
    shortcut: 'al',
    alias: null,
    url: 'http://www.alexa.com/search?q={s}',
    icon: 'alexa.png',
    description: 'Traffic statistics',
  },
  {
    shortcut: 'fs',
    alias: null,
    url: 'https://tatoeba.org/eng/sentences/search?from=fra&to=eng&query={s}',
    icon: 'tatoeba.svg',
    description: 'French sentences',
  },
];

export {
  searchPlaceholder,
  searches
};
