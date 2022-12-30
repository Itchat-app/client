import Prism from 'prismjs';
import 'prismjs/components/prism-c.min';
import 'prismjs/components/prism-cpp.min';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-json5.min';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-brainfuck';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-ini';
import 'prismjs/components/prism-toml';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-less';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-makefile';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-objectivec';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-r';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-shell-session';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-visual-basic';
import 'prismjs/components/prism-asm6502';
import 'prismjs/components/prism-nasm';
import 'prismjs/components/prism-wasm';
import 'prismjs/components/prism-llvm';
import 'prismjs/components/prism-apacheconf';
import 'prismjs/components/prism-dns-zone-file';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-nginx';
import 'prismjs/components/prism-coq';
import 'prismjs/components/prism-elixir';
import 'prismjs/components/prism-elm';
import 'prismjs/components/prism-erlang';
import 'prismjs/components/prism-fsharp';
import 'prismjs/components/prism-haskell';
import 'prismjs/components/prism-ocaml';
import 'prismjs/components/prism-reason';
import 'prismjs/components/prism-scala';
import 'prismjs/components/prism-sml';
import 'prismjs/components/prism-xquery';
import 'prismjs/components/prism-glsl';
import 'prismjs/components/prism-mel';
import 'prismjs/components/prism-processing';
import 'prismjs/components/prism-clojure';
import 'prismjs/components/prism-lisp';
import 'prismjs/components/prism-scheme';
import 'prismjs/components/prism-asciidoc';
import 'prismjs/components/prism-latex';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-protobuf';
import 'prismjs/components/prism-fortran';
import 'prismjs/components/prism-wolfram';
import 'prismjs/components/prism-matlab';
import 'prismjs/components/prism-mizar';
import 'prismjs/components/prism-stan';
import 'prismjs/components/prism-jsstacktrace';
import 'prismjs/components/prism-javastacktrace';
import 'prismjs/components/prism-actionscript';
import 'prismjs/components/prism-applescript';
import 'prismjs/components/prism-autohotkey';
import 'prismjs/components/prism-autoit';
import 'prismjs/components/prism-coffeescript';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-gml';
import 'prismjs/components/prism-livescript';
import 'prismjs/components/prism-moonscript';
import 'prismjs/components/prism-qml';
import 'prismjs/components/prism-vim';
import 'prismjs/components/prism-nim';
import 'prismjs/components/prism-haml';
import 'prismjs/components/prism-ada';
import 'prismjs/components/prism-arduino';
import 'prismjs/components/prism-basic';
import 'prismjs/components/prism-crystal';
import 'prismjs/components/prism-batch';
import 'prismjs/components/prism-excel-formula';
import 'prismjs/components/prism-ebnf';
import 'prismjs/components/prism-haxe';
import 'prismjs/components/prism-mongodb';

import 'prismjs/themes/prism-tomorrow.css';
// Prism.hooks.add('before-sanity-check', function (env) {
//   env.element.innerHTML = env.element.innerHTML.replace(/<br>/g, '\n');
//   env.code = env.element.textContent!;
// });
(Prism.languages.markdown = Prism.languages.extend(`markup`, {})),
  Prism.languages.insertBefore(`markdown`, `prolog`, {
    blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: `punctuation` },
    code: [
      { pattern: /^(?: {4}|\t).+/m, alias: `keyword` },
      { pattern: /(?<=```).*(?=```)/gs, dotAll: true, alias: `keyword` },
    ],
    test: [
      { pattern: /^(?: {4}|\t).+/m, alias: `keyword` },
      { pattern: /(?<=```).*(?=```)/gs, dotAll: true, alias: `keyword` },
    ],
    title: [
      {
        pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
        alias: `important`,
        inside: { punctuation: /==+$|--+$/ },
      },
      {
        pattern: /(^\s*)#+.+/m,
        lookbehind: !0,
        alias: `important`,
        inside: { punctuation: /^#+|#+$/ },
      },
    ],
    hr: {
      pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: `punctuation`,
    },
    list: {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: `punctuation`,
    },
    'url-reference': {
      pattern:
        /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/,
      },
      alias: `url`,
    },
    bold: {
      pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
      lookbehind: !0,
      inside: { punctuation: /^\*\*|^__|\*\*$|__$/ },
    },
    italic: {
      pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
      lookbehind: !0,
      inside: { punctuation: /^[*_]|[*_]$/ },
    },
    url: {
      pattern:
        /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
      inside: {
        variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
        string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
      },
    },
  }),
  (Prism.languages.markdown.bold.inside.url = Prism.util.clone(
    Prism.languages.markdown.url,
  )),
  (Prism.languages.markdown.italic.inside.url = Prism.util.clone(
    Prism.languages.markdown.url,
  )),
  (Prism.languages.markdown.bold.inside.italic = Prism.util.clone(
    Prism.languages.markdown.italic,
  )),
  (Prism.languages.markdown.italic.inside.bold = Prism.util.clone(
    Prism.languages.markdown.bold,
  ));
export { Prism };
