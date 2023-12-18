module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rule: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
