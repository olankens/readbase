module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Default plugins
    "body-leading-blank": [1, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 72],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    "subject-empty": [2, "never"],
    "subject-exclamation-mark": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    'subject-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 10],
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'refactor']],
    // Adjunct plugins
    'scope-empty-brackets': [2, 'never'],
    'subject-verb-first': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'scope-empty-brackets': ({header}, when) => {
          const isEmpty = /^[a-z]+\(\)/.test(header);
          return [when === 'never' ? !isEmpty : isEmpty, 'scope may not be empty brackets'];
        },
        'subject-verb-first': async ({subject}, when) => {
          const initial = subject.trim().split(' ')[0].toLowerCase();
          const address = `https://api.dictionaryapi.dev/api/v2/entries/en/${initial}`;
          const [entry] = await fetch(address).then(r => r.json()).catch(() => []);
          const hasVerb = !!entry?.meanings?.some(m => m.partOfSpeech === 'verb');
          return [when === 'never' ? !hasVerb : hasVerb, 'subject must start with a verb'];
        },
      },
    },
  ],
};