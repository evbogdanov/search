import amalgamaIcon from './assets/amalgama.png';
import collinsIcon from './assets/collins.png';
import deeplIcon from './assets/deepl.png';
import googleIcon from './assets/google.png';
import googleTranslateIcon from './assets/googleTranslate.png';
import hhIcon from './assets/hh.svg';
import imdbIcon from './assets/imdb.png';
import kinopoiskIcon from './assets/kp.png';
import ltIcon from './assets/lt.jpg';
import tatoebaIcon from './assets/tatoeba.svg';
import udIcon from './assets/ud.png';
import wikipediaIcon from './assets/wikipedia.png';
import wiktionaryIcon from './assets/wiktionary.png';
import yaIcon from './assets/ya.png';
import yaTranslateIcon from './assets/yaTranslate.png';
import youtubeIcon from './assets/youtube.png';

const searchPlaceholder = '{s}';

const searches = [
    ////////////////////////////////////////////////////////////////////////////
    /// Search engines
    ////////////////////////////////////////////////////////////////////////////
    {
        shortcut: 'ya',
        alias: 'я',
        url: 'https://yandex.ru/search/?text={s}',
        icon: yaIcon,
        description: 'Search with Yandex',
    },
    {
        shortcut: 'g',
        alias: 'г',
        url: 'https://www.google.com/search?q={s}',
        icon: googleIcon,
        description: 'Search with Google',
    },

    ////////////////////////////////////////////////////////////////////////////
    /// hh
    ////////////////////////////////////////////////////////////////////////////
    {
        shortcut: 'h',
        alias: 'hh',
        url: 'https://github.com/search?q=org%3Ahhru+{s}&type=code',
        icon: hhIcon,
        description: 'Search hh code',
    },

    ////////////////////////////////////////////////////////////////////////////
    /// Learning languages
    ////////////////////////////////////////////////////////////////////////////
    {
        shortcut: 'd',
        alias: null,
        url: 'https://www.deepl.com/en/translator#en/ru/{s}',
        icon: deeplIcon,
        description: 'DeepL 🇬🇧 to 🇷🇺',
    },
    {
        shortcut: 'д',
        alias: null,
        url: 'https://www.deepl.com/en/translator#ru/en/{s}',
        icon: deeplIcon,
        description: 'DeepL 🇷🇺 to 🇬🇧',
    },
    {
        shortcut: 'dw',
        alias: null,
        url: 'https://www.deepl.com/en/write#en/{s}',
        icon: deeplIcon,
        description: 'DeepL Write',
    },
    {
        shortcut: 'tr',
        alias: null,
        url: 'https://translate.yandex.ru/?lang=en-ru&text={s}',
        icon: yaTranslateIcon,
        description: 'Yandex Translate 🇬🇧 to 🇷🇺',
    },
    {
        shortcut: 'тр',
        alias: null,
        url: 'https://translate.yandex.ru/?lang=ru-en&text={s}',
        icon: yaTranslateIcon,
        description: 'Yandex Translate 🇷🇺 to 🇬🇧',
    },
    {
        shortcut: 'er',
        alias: null,
        url: 'https://translate.google.com/?text={s}&sl=en&tl=ru',
        icon: googleTranslateIcon,
        description: 'Translate 🇬🇧 to 🇷🇺',
    },
    {
        shortcut: 'ре',
        alias: null,
        url: 'https://translate.google.com/?text={s}&sl=ru&tl=en',
        icon: googleTranslateIcon,
        description: 'Translate 🇷🇺 to 🇬🇧',
    },
    {
        shortcut: 'fr',
        alias: null,
        url: 'https://translate.google.com/?text={s}&sl=fr&tl=ru',
        icon: googleTranslateIcon,
        description: 'Translate 🇫🇷 to 🇷🇺',
    },
    {
        shortcut: 'рф',
        alias: null,
        url: 'https://translate.google.com/?text={s}&sl=ru&tl=fr',
        icon: googleTranslateIcon,
        description: 'Translate 🇷🇺 to 🇫🇷',
    },
    {
        shortcut: 'ef',
        alias: null,
        url: 'https://translate.google.com/?text={s}&sl=en&tl=fr',
        icon: googleTranslateIcon,
        description: 'Translate 🇬🇧 to 🇫🇷',
    },
    {
        shortcut: 'fe',
        alias: null,
        url: 'https://translate.google.com/?text={s}&sl=fr&tl=en',
        icon: googleTranslateIcon,
        description: 'Translate 🇫🇷 to 🇬🇧',
    },
    {
        shortcut: 'f',
        alias: null,
        url: 'https://www.collinsdictionary.com/search/?dictCode=french-english&q={s}',
        icon: collinsIcon,
        description: 'Collins French Dictionary',
    },
    {
        shortcut: 'u',
        alias: null,
        url: 'http://www.urbandictionary.com/define.php?term={s}',
        icon: udIcon,
        description: 'Urban Dictionary',
    },
    {
        shortcut: 'fs',
        alias: null,
        url: 'https://tatoeba.org/eng/sentences/search?from=fra&to=eng&query={s}',
        icon: tatoebaIcon,
        description: 'French sentences',
    },
    {
        shortcut: 'am',
        alias: null,
        url: 'https://www.amalgama-lab.com/search/?searchid=2148731&text={s}',
        icon: amalgamaIcon,
        description: 'Amalgama',
    },
    {
        shortcut: 'lt',
        alias: null,
        url: 'https://lyricstranslate.com/en/site-search?query={s}',
        icon: ltIcon,
        description: 'Lyrics Translate',
    },

    ////////////////////////////////////////////////////////////////////////////
    /// Videos
    ////////////////////////////////////////////////////////////////////////////
    {
        shortcut: 'yt',
        alias: 'ют',
        url: 'https://www.youtube.com/results?search_query={s}',
        icon: youtubeIcon,
        description: 'YouTube',
    },
    {
        shortcut: 'imdb',
        alias: null,
        url: 'http://www.imdb.com/find?q={s}',
        icon: imdbIcon,
        description: 'IMDB',
    },
    {
        shortcut: 'kp',
        alias: 'кп',
        url: 'http://www.kinopoisk.ru/index.php?kp_query={s}',
        icon: kinopoiskIcon,
        description: 'KinoPoisk',
    },

    ////////////////////////////////////////////////////////////////////////////
    /// Wiktionary
    ////////////////////////////////////////////////////////////////////////////
    {
        shortcut: 'w',
        alias: null,
        url: 'https://en.wiktionary.org/w/index.php?search={s}',
        icon: wiktionaryIcon,
        description: 'Wiktionary',
    },
    {
        shortcut: 'fw',
        alias: null,
        url: 'https://fr.wiktionary.org/w/index.php?search={s}',
        icon: wiktionaryIcon,
        description: 'French Wiktionary',
    },
    {
        shortcut: 'в',
        alias: null,
        url: 'https://ru.wiktionary.org/w/index.php?search={s}',
        icon: wiktionaryIcon,
        description: 'Russian Wiktionary',
    },

    ////////////////////////////////////////////////////////////////////////////
    /// Wikipedia
    ////////////////////////////////////////////////////////////////////////////
    {
        shortcut: 'wp',
        alias: null,
        url: 'https://en.wikipedia.org/w/index.php?search={s}',
        icon: wikipediaIcon,
        description: 'Wikipedia',
    },
    {
        shortcut: 'fwp',
        alias: null,
        url: 'https://fr.wikipedia.org/w/index.php?search={s}',
        icon: wikipediaIcon,
        description: 'French Wikipedia',
    },
    {
        shortcut: 'вп',
        alias: null,
        url: 'https://ru.wikipedia.org/w/index.php?search={s}',
        icon: wikipediaIcon,
        description: 'Russian Wikipedia',
    },
];

export { searchPlaceholder, searches };
