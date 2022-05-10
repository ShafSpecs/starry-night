// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom/language-ruby>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [
    '.builder',
    '.druby',
    '.duby',
    '.eye',
    '.fcgi',
    '.gemspec',
    '.god',
    '.jbuilder',
    '.mirah',
    '.mspec',
    '.pluginspec',
    '.podspec',
    '.prawn',
    '.rabl',
    '.rake',
    '.rb',
    '.rbi',
    '.rbuild',
    '.rbw',
    '.rbx',
    '.ru',
    '.ruby',
    '.spec',
    '.thor',
    '.watchr'
  ],
  names: ['jruby', 'macruby', 'mirah', 'rake', 'rb', 'rbx', 'ruby'],
  patterns: [
    {
      begin: '\\bclass\\b',
      beginCaptures: {0: {name: 'keyword.control.class.ruby'}},
      end: '\\s*$|(?![\\s\\w.:<])',
      name: 'meta.class.ruby',
      patterns: [
        {match: '[A-Z]\\w*', name: 'entity.name.type.class.ruby'},
        {include: '#separators'},
        {
          begin: '(<<)\\s*',
          beginCaptures: {1: {name: 'punctuation.definition.variable.ruby'}},
          contentName: 'variable.other.object.ruby',
          end: '(?=$)|(?![\\s\\w.:])',
          patterns: [
            {match: '[A-Z]\\w*', name: 'entity.name.type.class.ruby'},
            {include: '#separators'}
          ]
        },
        {
          begin: '(<)\\s*',
          beginCaptures: {1: {name: 'punctuation.separator.inheritance.ruby'}},
          contentName: 'entity.other.inherited-class.ruby',
          end: '(?=$)|(?![\\s\\w.:])',
          patterns: [
            {match: '[A-Z]\\w*', name: 'entity.name.type.class.ruby'},
            {include: '#separators'}
          ]
        }
      ]
    },
    {
      begin: '\\bmodule\\b',
      beginCaptures: {0: {name: 'keyword.control.module.ruby'}},
      end: '\\s*$|(?![\\s\\w.:])',
      name: 'meta.module.ruby',
      patterns: [
        {
          match: '[A-Z]\\w*(?=::)',
          name: 'entity.other.inherited-class.module.ruby'
        },
        {match: '[A-Z]\\w*', name: 'entity.name.type.module.ruby'},
        {include: '#separators'}
      ]
    },
    {match: '(?<!\\.)\\belse(\\s)+if\\b', name: 'invalid.deprecated.ruby'},
    {
      captures: {1: {name: 'punctuation.definition.constant.hashkey.ruby'}},
      match: '(?>[a-zA-Z_]\\w*(?>[?!])?)(:)(?!:)',
      name: 'constant.other.symbol.hashkey.ruby'
    },
    {
      captures: {1: {name: 'punctuation.definition.constant.ruby'}},
      match: '(?<!:)(:)(?>[a-zA-Z_]\\w*(?>[?!])?)(?=\\s*=>)',
      name: 'constant.other.symbol.hashkey.ruby'
    },
    {
      match:
        '(?<!\\.)\\b(BEGIN|begin|case|class|else|elsif|END|end|ensure|for|if|in|module|rescue|then|unless|until|when|while)\\b(?![?!])',
      name: 'keyword.control.ruby'
    },
    {match: '(?<!\\.)\\bdo\\b', name: 'keyword.control.start-block.ruby'},
    {match: '(?<={)(\\s+)', name: 'meta.syntax.ruby.start-block'},
    {
      match:
        '(?<!\\.)\\b(alias|alias_method|break|next|redo|retry|return|super|undef|yield)\\b(?![?!])|\\bdefined\\?|\\b(block_given|iterator)\\?',
      name: 'keyword.control.pseudo-method.ruby'
    },
    {match: '\\bnil\\b(?![?!])', name: 'constant.language.nil.ruby'},
    {
      match: '\\b(true|false)\\b(?![?!])',
      name: 'constant.language.boolean.ruby'
    },
    {match: '\\b(__(FILE|LINE)__)\\b(?![?!])', name: 'variable.language.ruby'},
    {match: '\\bself\\b(?![?!])', name: 'variable.language.self.ruby'},
    {
      match:
        '\\b(initialize|new|loop|include|extend|prepend|raise|fail|attr_reader|attr_writer|attr_accessor|attr|catch|throw|private|private_class_method|module_function|public|public_class_method|protected|refine|using)\\b(?![?!])',
      name: 'keyword.other.special-method.ruby'
    },
    {
      begin: '\\b(?<!\\.|::)(require|require_relative)\\b(?![?!])',
      captures: {1: {name: 'keyword.other.special-method.ruby'}},
      end: '$|(?=#|})',
      name: 'meta.require.ruby',
      patterns: [{include: '$self'}]
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.ruby'}},
      match: '(@)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.instance.ruby'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.ruby'}},
      match: '(@@)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.class.ruby'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.ruby'}},
      match: '(\\$)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.global.ruby'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.ruby'}},
      match:
        '(\\$)(!|@|&|`|\'|\\+|\\d+|~|=|/|\\\\|,|;|\\.|<|>|_|\\*|\\$|\\?|:|"|-[0adFiIlpv])',
      name: 'variable.other.readwrite.global.pre-defined.ruby'
    },
    {
      begin: '\\b(ENV)\\[',
      beginCaptures: {1: {name: 'variable.other.constant.ruby'}},
      end: ']',
      name: 'meta.environment-variable.ruby',
      patterns: [{include: '$self'}]
    },
    {
      match: '\\b[A-Z]\\w*(?=((\\.|::)[A-Za-z]|\\[))',
      name: 'support.class.ruby'
    },
    {
      match:
        '\\b((abort|at_exit|autoload|binding|callcc|caller|caller_locations|chomp|chop|eval|exec|exit|fork|format|gets|global_variables|gsub|lambda|load|local_variables|open|p|print|printf|proc|putc|puts|rand|readline|readlines|select|set_trace_func|sleep|spawn|sprintf|srand|sub|syscall|system|test|trace_var|trap|untrace_var|warn)\\b(?![?!])|autoload\\?|exit!)',
      name: 'support.function.kernel.ruby'
    },
    {match: '\\b[_A-Z]\\w*\\b', name: 'variable.other.constant.ruby'},
    {
      begin:
        '(?x)\n(?=def\\b)                          # optimization to help Oniguruma fail fast\n(?<=^|\\s)(def)\\s+\n(\n  (?:(self)(\\.|::))?\n  (?>[a-zA-Z_]\\w*(?>(\\.|::)))*    # method prefix\n  (?>                               # method name\n    [a-zA-Z_]\\w*(?>[?!]|=(?!>))?\n    |\n    ===?|!=|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[]=?\n  )\n)\n\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.def.ruby'},
        2: {name: 'entity.name.function.ruby'},
        3: {name: 'variable.language.self.ruby'},
        4: {name: 'punctuation.separator.method.ruby'},
        5: {name: 'punctuation.separator.method.ruby'},
        6: {name: 'punctuation.definition.parameters.ruby'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.ruby'}},
      name: 'meta.function.method.with-arguments.ruby',
      patterns: [
        {
          begin: '(?![\\s,)])',
          end: '(?=,|\\)\\s*$)',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.variable.ruby'},
                2: {
                  name: 'constant.other.symbol.hashkey.parameter.function.ruby'
                },
                3: {name: 'punctuation.definition.constant.hashkey.ruby'},
                4: {name: 'variable.parameter.function.ruby'}
              },
              match: '\\G([&*]?)(?:([_a-zA-Z]\\w*(:))|([_a-zA-Z]\\w*))'
            },
            {include: '$self'}
          ]
        },
        {match: ',', name: 'punctuation.separator.delimiter.ruby'}
      ]
    },
    {
      begin:
        '(?x)\n(?=def\\b)                          # optimization to help Oniguruma fail fast\n(?<=^|\\s)(def)\\s+\n(\n  (?:(self)(\\.|::))?\n  (?>[a-zA-Z_]\\w*(?>(\\.|::)))*    # method prefix\n  (?>                               # method name\n    [a-zA-Z_]\\w*(?>[?!]|=(?!>))?\n    |\n    ===?|!=|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[]=?\n  )\n)\n[ \\t]\n(?=[ \\t]*[^\\s#;])                 # make sure the following is not comment',
      beginCaptures: {
        1: {name: 'keyword.control.def.ruby'},
        2: {name: 'entity.name.function.ruby'},
        3: {name: 'variable.language.self.ruby'},
        4: {name: 'punctuation.separator.method.ruby'},
        5: {name: 'punctuation.separator.method.ruby'}
      },
      end: '$',
      name: 'meta.function.method.with-arguments.ruby',
      patterns: [
        {
          begin: '(?![\\s,])',
          end: '(?=,|$)',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.variable.ruby'},
                2: {
                  name: 'constant.other.symbol.hashkey.parameter.function.ruby'
                },
                3: {name: 'punctuation.definition.constant.hashkey.ruby'},
                4: {name: 'variable.parameter.function.ruby'}
              },
              match: '\\G([&*]?)(?:([_a-zA-Z]\\w*(:))|([_a-zA-Z]\\w*))'
            },
            {include: '$self'}
          ]
        },
        {match: ',', name: 'punctuation.separator.delimiter.ruby'}
      ]
    },
    {
      captures: {
        1: {name: 'keyword.control.def.ruby'},
        3: {name: 'entity.name.function.ruby'},
        4: {name: 'variable.language.self.ruby'},
        5: {name: 'punctuation.separator.method.ruby'},
        6: {name: 'punctuation.separator.method.ruby'}
      },
      match:
        '(?x)\n(?=def\\b)                            # optimization to help Oniguruma fail fast\n(?<=^|\\s)(def)\\b\n(\n  \\s+\n  (\n    (?:(self)(\\.|::))?\n    (?>[a-zA-Z_]\\w*(?>(\\.|::)))*    # method prefix\n    (?>                               # method name\n      [a-zA-Z_]\\w*(?>[?!]|=(?!>))?\n      |\n      ===?|!=|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[]=?\n    )\n  )\n)?',
      name: 'meta.function.method.without-arguments.ruby'
    },
    {
      match:
        '(?x)\n\\b\n(\n  [\\d](?>_?\\d)*                             # 100_000\n  (\\.(?![^[:space:][:digit:]])(?>_?\\d)*)?   # fractional part\n  ([eE][-+]?\\d(?>_?\\d)*)?                   # 1.23e-4\n  |\n  0\n  (?:\n    [xX][[:xdigit:]](?>_?[[:xdigit:]])*|\n    [oO]?[0-7](?>_?[0-7])*|\n    [bB][01](?>_?[01])*|\n    [dD]\\d(?>_?\\d)*\n  )                                           # A base indicator can only be used with an integer\n)\\b',
      name: 'constant.numeric.ruby'
    },
    {
      begin: ":'",
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.ruby'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [{match: "\\\\['\\\\]", name: 'constant.character.escape.ruby'}]
    },
    {
      begin: ':"',
      beginCaptures: {0: {name: 'punctuation.section.symbol.begin.ruby'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.section.symbol.end.ruby'}},
      name: 'constant.other.symbol.interpolated.ruby',
      patterns: [{include: '#interpolated_ruby'}, {include: '#escaped_char'}]
    },
    {match: '(?<!\\()/=', name: 'keyword.operator.assignment.augmented.ruby'},
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.single.ruby',
      patterns: [
        {match: "\\\\'|\\\\\\\\", name: 'constant.character.escape.ruby'}
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.double.interpolated.ruby',
      patterns: [{include: '#interpolated_ruby'}, {include: '#escaped_char'}]
    },
    {
      begin: '`',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.interpolated.ruby',
      patterns: [{include: '#interpolated_ruby'}, {include: '#escaped_char'}]
    },
    {
      begin:
        '(?x)\n(?<![\\w)])((/))(?![?*+])\n(?=\n  (?:\\\\/|[^/])*+          # Do NOT change the order\n  /[eimnosux]*\\s*\n  (?:\n    [)\\]}#.,?:]|\\|\\||&&|<=>|=>|==|=~|!~|!=|;|$|\n    if|else|elsif|then|do|end|unless|while|until|or|and\n  )\n  |\n  $\n)',
      captures: {
        1: {name: 'string.regexp.interpolated.ruby'},
        2: {name: 'punctuation.section.regexp.ruby'}
      },
      contentName: 'string.regexp.interpolated.ruby',
      end: '((/[eimnosux]*))',
      patterns: [{include: '#regex_sub'}]
    },
    {
      begin: '%r{',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.ruby'}},
      end: '}[eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.ruby'}},
      name: 'string.regexp.interpolated.ruby',
      patterns: [{include: '#regex_sub'}, {include: '#nest_curly_r'}]
    },
    {
      begin: '%r\\[',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.ruby'}},
      end: '][eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.ruby'}},
      name: 'string.regexp.interpolated.ruby',
      patterns: [{include: '#regex_sub'}, {include: '#nest_brackets_r'}]
    },
    {
      begin: '%r\\(',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.ruby'}},
      end: '\\)[eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.ruby'}},
      name: 'string.regexp.interpolated.ruby',
      patterns: [{include: '#regex_sub'}, {include: '#nest_parens_r'}]
    },
    {
      begin: '%r<',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.ruby'}},
      end: '>[eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.ruby'}},
      name: 'string.regexp.interpolated.ruby',
      patterns: [{include: '#regex_sub'}, {include: '#nest_ltgt_r'}]
    },
    {
      begin: '%r([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.ruby'}},
      end: '\\1[eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.ruby'}},
      name: 'string.regexp.interpolated.ruby',
      patterns: [{include: '#regex_sub'}]
    },
    {
      begin: '%I\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: ']',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_brackets_i'}
      ]
    },
    {
      begin: '%I\\(',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_parens_i'}
      ]
    },
    {
      begin: '%I<',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt_i'}
      ]
    },
    {
      begin: '%I{',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_curly_i'}
      ]
    },
    {
      begin: '%I([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.interpolated.ruby',
      patterns: [{include: '#interpolated_ruby'}, {include: '#escaped_char'}]
    },
    {
      begin: '%i\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: ']',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [
        {match: '\\\\]|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_brackets'}
      ]
    },
    {
      begin: '%i\\(',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [
        {match: '\\\\\\)|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_parens'}
      ]
    },
    {
      begin: '%i<',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [
        {match: '\\\\>|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_ltgt'}
      ]
    },
    {
      begin: '%i{',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [
        {match: '\\\\}|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_curly'}
      ]
    },
    {
      begin: '%i([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [{match: '\\\\.'}]
    },
    {
      begin: '%W\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: ']',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_brackets_i'}
      ]
    },
    {
      begin: '%W\\(',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_parens_i'}
      ]
    },
    {
      begin: '%W<',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt_i'}
      ]
    },
    {
      begin: '%W{',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_curly_i'}
      ]
    },
    {
      begin: '%W([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [{include: '#interpolated_ruby'}, {include: '#escaped_char'}]
    },
    {
      begin: '%w\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: ']',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [
        {match: '\\\\]|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_brackets'}
      ]
    },
    {
      begin: '%w\\(',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [
        {match: '\\\\\\)|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_parens'}
      ]
    },
    {
      begin: '%w<',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [
        {match: '\\\\>|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_ltgt'}
      ]
    },
    {
      begin: '%w{',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [
        {match: '\\\\}|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_curly'}
      ]
    },
    {
      begin: '%w([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ruby'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.array.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [{match: '\\\\.'}]
    },
    {
      begin: '%[Qx]?\\(',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_parens_i'}
      ]
    },
    {
      begin: '%[Qx]?\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: ']',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_brackets_i'}
      ]
    },
    {
      begin: '%[Qx]?{',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_curly_i'}
      ]
    },
    {
      begin: '%[Qx]?<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt_i'}
      ]
    },
    {
      begin: '%[Qx]([^\\w])',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [{include: '#interpolated_ruby'}, {include: '#escaped_char'}]
    },
    {
      begin: '%([^\\w\\s=])',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.interpolated.ruby',
      patterns: [{include: '#interpolated_ruby'}, {include: '#escaped_char'}]
    },
    {
      begin: '%q\\(',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [
        {match: '\\\\\\)|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_parens'}
      ]
    },
    {
      begin: '%q<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [
        {match: '\\\\>|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_ltgt'}
      ]
    },
    {
      begin: '%q\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: ']',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [
        {match: '\\\\]|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_brackets'}
      ]
    },
    {
      begin: '%q{',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [
        {match: '\\\\}|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_curly'}
      ]
    },
    {
      begin: '%q([^\\w])',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.quoted.other.ruby',
      patterns: [{match: '\\\\.'}]
    },
    {
      begin: '%s\\(',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.ruby'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [
        {match: '\\\\\\)|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_parens'}
      ]
    },
    {
      begin: '%s<',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.ruby'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [
        {match: '\\\\>|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_ltgt'}
      ]
    },
    {
      begin: '%s\\[',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.ruby'}},
      end: ']',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [
        {match: '\\\\]|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_brackets'}
      ]
    },
    {
      begin: '%s{',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.ruby'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [
        {match: '\\\\}|\\\\\\\\', name: 'constant.character.escape.ruby'},
        {include: '#nest_curly'}
      ]
    },
    {
      begin: '%s([^\\w])',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.ruby'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.ruby'}},
      name: 'constant.other.symbol.ruby',
      patterns: [{match: '\\\\.'}]
    },
    {
      captures: {1: {name: 'punctuation.definition.constant.ruby'}},
      match:
        '(?x)\n(?<!:)(:)\n(?>\n  [$a-zA-Z_]\\w*(?>[?!]|=(?![>=]))?\n  |\n  ===?|<=>|>[>=]?|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[]=?\n  |\n  @@?[a-zA-Z_]\\w*\n)',
      name: 'constant.other.symbol.ruby'
    },
    {
      begin: '^=begin',
      captures: {0: {name: 'punctuation.definition.comment.ruby'}},
      end: '^=end',
      name: 'comment.block.documentation.ruby'
    },
    {include: '#yard'},
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.ruby'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.ruby'}},
          end: '\\n',
          name: 'comment.line.number-sign.ruby'
        }
      ]
    },
    {
      match:
        '(?<!\\w)\\?(\\\\(x[[:xdigit:]]{1,2}(?![[:xdigit:]])\\b|0[0-7]{0,2}(?![0-7])\\b|[^x0MC])|(\\\\[MC]-)+\\w|[^\\s\\\\])',
      name: 'constant.numeric.ruby'
    },
    {
      begin: '^__END__\\n',
      captures: {0: {name: 'string.unquoted.program-block.ruby'}},
      contentName: 'text.plain',
      end: '(?=not)impossible',
      patterns: [
        {
          begin: '(?=<?xml|<(?i:html\\b)|!DOCTYPE (?i:html\\b))',
          end: '(?=not)impossible',
          name: 'text.html.embedded.ruby',
          patterns: [{include: 'text.html.basic'}]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)HTML)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.html',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)HTML)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'text.html',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'text.html.basic'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)XML)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.xml',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)XML)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'text.xml',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'text.xml'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)SQL)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.sql',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)SQL)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.sql',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'source.sql'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)GRAPHQL)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.graphql',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)GRAPHQL)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.graphql',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'source.graphql'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)CSS)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.css',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)CSS)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.css',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'source.css'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)CPP)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.cpp',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)CPP)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.cpp',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'source.c++'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)C)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.c',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)C)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.c',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'source.c'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.js',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.js',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'source.js'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)JQUERY)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.js.jquery',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)JQUERY)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.js.jquery',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.shell',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.shell',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'source.shell'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)LUA)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.lua',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)LUA)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.lua',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'source.lua'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<[-~](["\'`]?)((?:[_\\w]+_|)RUBY)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.ruby',
      patterns: [
        {
          begin: '(?><<[-~](["\'`]?)((?:[_\\w]+_|)RUBY)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ruby'}
          },
          contentName: 'source.ruby',
          end: '^\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.unquoted.heredoc.ruby',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_ruby'},
            {include: 'source.ruby'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?>=\\s*<<(["\'`]?)(\\w+)\\1)',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '^\\2$',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.unquoted.heredoc.ruby',
      patterns: [
        {include: '#heredoc'},
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'}
      ]
    },
    {
      begin: '(?>((<<[-~](["\'`]?)(\\w+)\\3,\\s?)*<<[-~](["\'`]?)(\\w+)\\5))',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ruby'}},
      end: '^\\s*\\6$',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
      name: 'string.unquoted.heredoc.ruby',
      patterns: [
        {include: '#heredoc'},
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'}
      ]
    },
    {
      begin: '(?<={|{\\s|[^A-Za-z0-9_]do|^do|[^A-Za-z0-9_]do\\s|^do\\s)(\\|)',
      captures: {1: {name: 'punctuation.separator.variable.ruby'}},
      end: '(?<!\\|)(\\|)(?!\\|)',
      patterns: [
        {include: 'source.ruby'},
        {match: '[_a-zA-Z][_a-zA-Z0-9]*', name: 'variable.other.block.ruby'},
        {match: ',', name: 'punctuation.separator.variable.ruby'}
      ]
    },
    {include: '#separators'},
    {match: '->', name: 'support.function.kernel.arrow.ruby'},
    {
      match: '<<=|%=|&{1,2}=|\\*=|\\*\\*=|\\+=|-=|\\^=|\\|{1,2}=|<<',
      name: 'keyword.operator.assignment.augmented.ruby'
    },
    {
      match: '<=>|<(?!<|=)|>(?!<|=|>)|<=|>=|===|==|=~|!=|!~|(?<=[ \\t])\\?',
      name: 'keyword.operator.comparison.ruby'
    },
    {
      match: '(?<!\\.)\\b(and|not|or)\\b(?![?!])',
      name: 'keyword.operator.logical.ruby'
    },
    {
      match: '(?<=^|[ \\t])!|&&|\\|\\||\\^',
      name: 'keyword.operator.logical.ruby'
    },
    {
      match: '(%|&|\\*\\*|\\*|\\+|-|/)',
      name: 'keyword.operator.arithmetic.ruby'
    },
    {match: '=', name: 'keyword.operator.assignment.ruby'},
    {match: '\\||~|>>', name: 'keyword.operator.other.ruby'},
    {match: '{', name: 'punctuation.section.scope.begin.ruby'},
    {match: '}', name: 'punctuation.section.scope.end.ruby'},
    {match: '\\[', name: 'punctuation.section.array.begin.ruby'},
    {match: ']', name: 'punctuation.section.array.end.ruby'},
    {match: '\\(|\\)', name: 'punctuation.section.function.ruby'}
  ],
  repository: {
    escaped_char: {
      match: '\\\\(?:[0-7]{1,3}|x[\\da-fA-F]{1,2}|.)',
      name: 'constant.character.escape.ruby'
    },
    heredoc: {begin: '^<<[-~]?\\w+', end: '$', patterns: [{include: '$self'}]},
    interpolated_ruby: {
      patterns: [
        {
          begin: '#{',
          beginCaptures: {0: {name: 'punctuation.section.embedded.begin.ruby'}},
          contentName: 'source.ruby',
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.embedded.end.ruby'}},
          name: 'meta.embedded.line.ruby',
          patterns: [{include: '#nest_curly_and_self'}, {include: '$self'}]
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.ruby'}},
          match: '(#@)[a-zA-Z_]\\w*',
          name: 'variable.other.readwrite.instance.ruby'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.ruby'}},
          match: '(#@@)[a-zA-Z_]\\w*',
          name: 'variable.other.readwrite.class.ruby'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.ruby'}},
          match: '(#\\$)[a-zA-Z_]\\w*',
          name: 'variable.other.readwrite.global.ruby'
        }
      ]
    },
    nest_brackets: {
      begin: '\\[',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: ']',
      patterns: [{include: '#nest_brackets'}]
    },
    nest_brackets_i: {
      begin: '\\[',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: ']',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_brackets_i'}
      ]
    },
    nest_brackets_r: {
      begin: '\\[',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: ']',
      patterns: [{include: '#regex_sub'}, {include: '#nest_brackets_r'}]
    },
    nest_curly: {
      begin: '{',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: '}',
      patterns: [{include: '#nest_curly'}]
    },
    nest_curly_and_self: {
      patterns: [
        {
          begin: '{',
          captures: {0: {name: 'punctuation.section.scope.ruby'}},
          end: '}',
          patterns: [{include: '#nest_curly_and_self'}]
        },
        {include: '$self'}
      ]
    },
    nest_curly_i: {
      begin: '{',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: '}',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_curly_i'}
      ]
    },
    nest_curly_r: {
      begin: '{',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: '}',
      patterns: [{include: '#regex_sub'}, {include: '#nest_curly_r'}]
    },
    nest_ltgt: {
      begin: '<',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: '>',
      patterns: [{include: '#nest_ltgt'}]
    },
    nest_ltgt_i: {
      begin: '<',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: '>',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt_i'}
      ]
    },
    nest_ltgt_r: {
      begin: '<',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: '>',
      patterns: [{include: '#regex_sub'}, {include: '#nest_ltgt_r'}]
    },
    nest_parens: {
      begin: '\\(',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: '\\)',
      patterns: [{include: '#nest_parens'}]
    },
    nest_parens_i: {
      begin: '\\(',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: '\\)',
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {include: '#nest_parens_i'}
      ]
    },
    nest_parens_r: {
      begin: '\\(',
      captures: {0: {name: 'punctuation.section.scope.ruby'}},
      end: '\\)',
      patterns: [{include: '#regex_sub'}, {include: '#nest_parens_r'}]
    },
    regex_sub: {
      patterns: [
        {include: '#interpolated_ruby'},
        {include: '#escaped_char'},
        {
          captures: {
            1: {name: 'punctuation.definition.arbitrary-repetition.ruby'},
            3: {name: 'punctuation.definition.arbitrary-repetition.ruby'}
          },
          match: '({)\\d+(,\\d+)?(})',
          name: 'string.regexp.arbitrary-repetition.ruby'
        },
        {
          begin: '\\[(?:\\^?])?',
          captures: {0: {name: 'punctuation.definition.character-class.ruby'}},
          end: ']',
          name: 'string.regexp.character-class.ruby',
          patterns: [{include: '#escaped_char'}]
        },
        {
          begin: '\\(\\?#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.ruby'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.ruby'}},
          name: 'comment.line.number-sign.ruby',
          patterns: [{include: '#escaped_char'}]
        },
        {
          begin: '\\(',
          captures: {0: {name: 'punctuation.definition.group.ruby'}},
          end: '\\)',
          name: 'string.regexp.group.ruby',
          patterns: [{include: '#regex_sub'}]
        },
        {
          begin:
            '(?<=^|\\s)(#)\\s(?=[[a-zA-Z0-9,. \\t?!-][^\\x{00}-\\x{7F}]]*$)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.ruby'}},
          end: '$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.comment.ruby'}},
          name: 'comment.line.number-sign.ruby'
        }
      ]
    },
    separators: {
      patterns: [
        {match: '=>', name: 'punctuation.separator.key-value.ruby'},
        {match: ';', name: 'punctuation.terminator.statement.ruby'},
        {match: ',', name: 'punctuation.separator.delimiter.ruby'},
        {
          captures: {1: {name: 'punctuation.separator.namespace.ruby'}},
          match: '(::)(?=\\s*[A-Z])'
        },
        {match: '&?\\.|::', name: 'punctuation.separator.method.ruby'},
        {match: ':', name: 'punctuation.separator.other.ruby'}
      ]
    },
    yard: {
      patterns: [
        {include: '#yard_comment'},
        {include: '#yard_name_types'},
        {include: '#yard_tag'},
        {include: '#yard_types'},
        {include: '#yard_directive'}
      ]
    },
    yard_comment: {
      begin:
        '^(\\s*)(#)(\\s*)(@)(abstract|api|author|deprecated|example|macro|note|overload|since|todo|version)(?=\\s|$)',
      beginCaptures: {
        2: {name: 'punctuation.definition.comment.ruby'},
        4: {name: 'comment.line.keyword.punctuation.yard.ruby'},
        5: {name: 'comment.line.keyword.yard.ruby'}
      },
      contentName: 'comment.line.string.yard.ruby',
      end: '^(?!\\s*#\\3\\s{2,})',
      name: 'comment.line.number-sign.ruby',
      patterns: [{include: '#yard'}, {include: '#yard_continuation'}]
    },
    yard_continuation: {
      match: '^\\s*#',
      name: 'punctuation.definition.comment.ruby'
    },
    yard_directive: {
      begin:
        '^(\\s*)(#)(\\s*)(@!)(attribute|endgroup|group|macro|method|parse|scope|visibility)(\\s+((\\[).+(])))?(?=\\s)',
      beginCaptures: {
        2: {name: 'punctuation.definition.comment.ruby'},
        4: {name: 'comment.line.keyword.punctuation.yard.ruby'},
        5: {name: 'comment.line.keyword.yard.ruby'},
        6: {name: 'comment.line.yard.ruby'},
        7: {name: 'comment.line.type.yard.ruby'},
        8: {name: 'comment.line.punctuation.yard.ruby'},
        9: {name: 'comment.line.punctuation.yard.ruby'}
      },
      contentName: 'comment.line.string.yard.ruby',
      end: '^(?!\\s*#\\3\\s{2,})',
      name: 'comment.line.number-sign.ruby',
      patterns: [{include: '#yard'}, {include: '#yard_continuation'}]
    },
    yard_name_types: {
      begin:
        '^(\\s*)(#)(\\s*)(@)(attr|attr_reader|attr_writer|option|param|see|yieldparam)(?=\\s)(\\s+([a-z_][a-zA-Z_]*))?(\\s+((\\[).+(])))?',
      beginCaptures: {
        10: {name: 'comment.line.punctuation.yard.ruby'},
        11: {name: 'comment.line.punctuation.yard.ruby'},
        2: {name: 'punctuation.definition.comment.ruby'},
        4: {name: 'comment.line.keyword.punctuation.yard.ruby'},
        5: {name: 'comment.line.keyword.yard.ruby'},
        6: {name: 'comment.line.yard.ruby'},
        7: {name: 'comment.line.parameter.yard.ruby'},
        8: {name: 'comment.line.yard.ruby'},
        9: {name: 'comment.line.type.yard.ruby'}
      },
      contentName: 'comment.line.string.yard.ruby',
      end: '^(?!\\s*#\\3\\s{2,})',
      name: 'comment.line.number-sign.ruby',
      patterns: [{include: '#yard'}, {include: '#yard_continuation'}]
    },
    yard_tag: {
      captures: {
        2: {name: 'punctuation.definition.comment.ruby'},
        4: {name: 'comment.line.keyword.punctuation.yard.ruby'},
        5: {name: 'comment.line.keyword.yard.ruby'}
      },
      match: '^(\\s*)(#)(\\s*)(@)(private)$',
      name: 'comment.line.number-sign.ruby'
    },
    yard_types: {
      begin:
        '^(\\s*)(#)(\\s*)(@)(raise|return|yield(?:return)?)(?=\\s)(\\s+((\\[).+(])))?',
      beginCaptures: {
        2: {name: 'punctuation.definition.comment.ruby'},
        4: {name: 'comment.line.keyword.punctuation.yard.ruby'},
        5: {name: 'comment.line.keyword.yard.ruby'},
        6: {name: 'comment.line.yard.ruby'},
        7: {name: 'comment.line.type.yard.ruby'},
        8: {name: 'comment.line.punctuation.yard.ruby'},
        9: {name: 'comment.line.punctuation.yard.ruby'}
      },
      contentName: 'comment.line.string.yard.ruby',
      end: '^(?!\\s*#\\3\\s{2,})',
      name: 'comment.line.number-sign.ruby',
      patterns: [{include: '#yard'}, {include: '#yard_continuation'}]
    }
  },
  scopeName: 'source.ruby'
}

export default grammar
