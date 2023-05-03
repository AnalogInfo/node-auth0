module.exports = {
  name: 'auth0',
  out: './new-docs/',
  exclude: [''],
  excludeExternals: false,
  excludePrivate: true,
  hideGenerator: true,
  readme: './README.md',
  visibilityFilters: {
    protected: false,
    inherited: true,
    external: true,
  },
  entryPoints: ['src/auth', 'src/management/managers.ts', 'src/management/models.ts'],
};
