// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Anomareh/PHP-Twig.tmbundle>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.twig'],
  names: ['twig'],
  patterns: [
    {
      begin: '(<)([a-zA-Z0-9:]++)(?=[^>]*></\\2>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.html'}
      },
      end: '(>(<)/)(\\2)(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'meta.scope.between-tag-pair.html'},
        3: {name: 'entity.name.tag.html'},
        4: {name: 'punctuation.definition.tag.html'}
      },
      name: 'meta.tag.any.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(<\\?)(xml)',
      captures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.xml.html'}
      },
      end: '(\\?>)',
      name: 'meta.tag.preprocessor.xml.html',
      patterns: [
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'}
      ]
    },
    {
      begin: '<!--',
      captures: {0: {name: 'punctuation.definition.comment.html'}},
      end: '--\\s*>',
      name: 'comment.block.html',
      patterns: [
        {match: '--', name: 'invalid.illegal.bad-comments-or-CDATA.html'},
        {include: '#embedded-code'}
      ]
    },
    {
      begin: '<!',
      captures: {0: {name: 'punctuation.definition.tag.html'}},
      end: '>',
      name: 'meta.tag.sgml.html',
      patterns: [
        {
          begin: '(?i:DOCTYPE)',
          captures: {1: {name: 'entity.name.tag.doctype.html'}},
          end: '(?=>)',
          name: 'meta.tag.sgml.doctype.html',
          patterns: [
            {
              match: '"[^">]*"',
              name: 'string.quoted.double.doctype.identifiers-and-DTDs.html'
            }
          ]
        },
        {
          begin: '\\[CDATA\\[',
          end: ']](?=>)',
          name: 'constant.other.inline-data.html'
        },
        {
          match: '(\\s*)(?!--|>)\\S(\\s*)',
          name: 'invalid.illegal.bad-comments-or-CDATA.html'
        }
      ]
    },
    {include: '#embedded-code'},
    {
      begin: '(?:^\\s+)?(<)((?i:style))\\b(?![^>]*/>)',
      captures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.style.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      end: '(</)((?i:style))(>)(?:\\s*\\n)?',
      name: 'source.css.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(>)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.html'}},
          end: '(?=</(?i:style))',
          patterns: [{include: '#embedded-code'}, {include: 'source.css'}]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:script))\\b(?![^>]*/>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.script.html'}
      },
      end: '(?<=</(script|SCRIPT))(>)(?:\\s*\\n)?',
      endCaptures: {2: {name: 'punctuation.definition.tag.html'}},
      name: 'source.js.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(?<!</(?:script|SCRIPT))(>)',
          captures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.script.html'}
          },
          end: '(</)((?i:script))',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.comment.js'}},
              match: '(//).*?((?=</script)|$\\n?)',
              name: 'comment.line.double-slash.js'
            },
            {
              begin: '/\\*',
              captures: {0: {name: 'punctuation.definition.comment.js'}},
              end: '\\*/|(?=</script)',
              name: 'comment.block.js'
            },
            {include: '#php'},
            {include: '#twig-print-tag'},
            {include: '#twig-statement-tag'},
            {include: '#twig-comment-tag'},
            {include: 'source.js'}
          ]
        }
      ]
    },
    {
      begin: '(</?)((?i:body|head|html)\\b)',
      captures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.structure.any.html'}
      },
      end: '(>)',
      name: 'meta.tag.structure.any.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin:
        '(</?)((?i:address|blockquote|dd|div|dl|dt|fieldset|form|frame|frameset|h1|h2|h3|h4|h5|h6|iframe|noframes|object|ol|p|ul|applet|center|dir|hr|menu|pre)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.block.any.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.block.any.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin:
        '(</?)((?i:a|abbr|acronym|area|b|base|basefont|bdo|big|br|button|caption|cite|code|col|colgroup|del|dfn|em|font|head|html|i|img|input|ins|isindex|kbd|label|legend|li|link|map|meta|noscript|optgroup|option|param|q|s|samp|script|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|title|tr|tt|u|var)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.inline.any.html'}
      },
      end: '((?: ?/)?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.inline.any.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(</?)([a-zA-Z0-9:]+)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.other.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.other.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {include: '#entities'},
    {match: '<>', name: 'invalid.illegal.incomplete.html'},
    {match: '<', name: 'invalid.illegal.bad-angle-bracket.html'},
    {include: '#twig-print-tag'},
    {include: '#twig-statement-tag'},
    {include: '#twig-comment-tag'}
  ],
  repository: {
    'embedded-code': {
      patterns: [
        {include: '#ruby'},
        {include: '#php'},
        {include: '#twig-print-tag'},
        {include: '#twig-statement-tag'},
        {include: '#twig-comment-tag'},
        {include: '#python'}
      ]
    },
    entities: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.entity.html'},
            3: {name: 'punctuation.definition.entity.html'}
          },
          match: '(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)',
          name: 'constant.character.entity.html'
        },
        {match: '&', name: 'invalid.illegal.bad-ampersand.html'}
      ]
    },
    php: {
      begin: '(?=(^\\s*)?<\\?)',
      end: '(?!(^\\s*)?<\\?)',
      patterns: [{include: 'text.html.php'}]
    },
    python: {
      begin: '(?:^\\s*)<\\?python(?!.*\\?>)',
      end: '\\?>(?:\\s*$\\n)?',
      name: 'source.python.embedded.html',
      patterns: [{include: 'source.python'}]
    },
    ruby: {
      patterns: [
        {
          begin: '<%+#',
          captures: {0: {name: 'punctuation.definition.comment.erb'}},
          end: '%>',
          name: 'comment.block.erb'
        },
        {
          begin: '<%+(?!>)=?',
          captures: {0: {name: 'punctuation.section.embedded.ruby'}},
          end: '-?%>',
          name: 'source.ruby.embedded.html',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.comment.ruby'}},
              match: '(#).*?(?=-?%>)',
              name: 'comment.line.number-sign.ruby'
            },
            {include: 'source.ruby'}
          ]
        },
        {
          begin: '<\\?r(?!>)=?',
          captures: {0: {name: 'punctuation.section.embedded.ruby.nitro'}},
          end: '-?\\?>',
          name: 'source.ruby.nitro.embedded.html',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.comment.ruby.nitro'}
              },
              match: '(#).*?(?=-?\\?>)',
              name: 'comment.line.number-sign.ruby.nitro'
            },
            {include: 'source.ruby'}
          ]
        }
      ]
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.double.html',
      patterns: [{include: '#embedded-code'}, {include: '#entities'}]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.single.html',
      patterns: [{include: '#embedded-code'}, {include: '#entities'}]
    },
    'tag-generic-attribute': {
      match: '\\b([a-zA-Z\\-:]+)',
      name: 'entity.other.attribute-name.html'
    },
    'tag-id-attribute': {
      begin: '\\b(id)\\b\\s*(=)',
      captures: {
        1: {name: 'entity.other.attribute-name.id.html'},
        2: {name: 'punctuation.separator.key-value.html'}
      },
      end: '(?<=\'|")',
      name: 'meta.attribute-with-value.id.html',
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'meta.toc-list.id.html',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.double.html',
          patterns: [{include: '#embedded-code'}, {include: '#entities'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'meta.toc-list.id.html',
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.single.html',
          patterns: [{include: '#embedded-code'}, {include: '#entities'}]
        }
      ]
    },
    'tag-stuff': {
      patterns: [
        {include: '#tag-id-attribute'},
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'},
        {include: '#embedded-code'}
      ]
    },
    'twig-arrays': {
      begin: '(?<=[\\s\\(\\{\\[:,])\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.twig'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.array.end.twig'}},
      name: 'meta.array.twig',
      patterns: [
        {include: '#twig-arrays'},
        {include: '#twig-hashes'},
        {include: '#twig-constants'},
        {include: '#twig-strings'},
        {include: '#twig-functions-warg'},
        {include: '#twig-functions'},
        {include: '#twig-macros'},
        {include: '#twig-objects'},
        {include: '#twig-properties'},
        {include: '#twig-filters-warg'},
        {include: '#twig-filters'},
        {include: '#twig-filters-warg-ud'},
        {include: '#twig-filters-ud'},
        {match: ',', name: 'punctuation.separator.object.twig'}
      ]
    },
    'twig-comment-tag': {
      begin: '\\{#-?',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.twig'}},
      end: '-?#\\}',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.twig'}},
      name: 'comment.block.twig'
    },
    'twig-constants': {
      patterns: [
        {
          match:
            '(?i)(?<=[\\s\\[\\(\\{:,])(?:true|false|null|none)(?=[\\s\\)\\]\\}\\,])',
          name: 'constant.language.twig'
        },
        {
          match:
            '(?<=[\\s\\[\\(\\{:,]|\\.\\.|\\*\\*)[0-9]+(?:\\.[0-9]+)?(?=[\\s\\)\\]\\}\\,]|\\.\\.|\\*\\*)',
          name: 'constant.numeric.twig'
        }
      ]
    },
    'twig-filters': {
      captures: {1: {name: 'support.function.twig'}},
      match:
        '(?<=(?:[a-zA-Z0-9_\\x{7f}-\\x{ff}\\]\\)\\\'\\"]\\|)|\\{%\\sfilter\\s)(abs|capitalize|e(?:scape)?|first|join|(?:json|url)_encode|keys|last|length|lower|nl2br|number_format|raw|reverse|round|sort|striptags|title|trim|upper)(?=[\\s\\|\\]\\}\\):,]|\\.\\.|\\*\\*)'
    },
    'twig-filters-ud': {
      captures: {1: {name: 'meta.function-call.other.twig'}},
      match:
        '(?<=(?:[a-zA-Z0-9_\\x{7f}-\\x{ff}\\]\\)\\\'\\"]\\|)|\\{%\\sfilter\\s)([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)'
    },
    'twig-filters-warg': {
      begin:
        '(?<=(?:[a-zA-Z0-9_\\x{7f}-\\x{ff}\\]\\)\\\'\\"]\\|)|\\{%\\sfilter\\s)(batch|convert_encoding|date|date_modify|default|e(?:scape)?|format|join|merge|number_format|replace|round|slice|split|trim)(\\()',
      beginCaptures: {
        1: {name: 'support.function.twig'},
        2: {name: 'punctuation.definition.parameters.begin.twig'}
      },
      contentName: 'meta.function.arguments.twig',
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.twig'}},
      patterns: [
        {include: '#twig-constants'},
        {include: '#twig-functions-warg'},
        {include: '#twig-functions'},
        {include: '#twig-macros'},
        {include: '#twig-objects'},
        {include: '#twig-properties'},
        {include: '#twig-filters-warg'},
        {include: '#twig-filters'},
        {include: '#twig-filters-warg-ud'},
        {include: '#twig-filters-ud'},
        {include: '#twig-strings'},
        {include: '#twig-arrays'},
        {include: '#twig-hashes'}
      ]
    },
    'twig-filters-warg-ud': {
      begin:
        '(?<=(?:[a-zA-Z0-9_\\x{7f}-\\x{ff}\\]\\)\\\'\\"]\\|)|\\{%\\sfilter\\s)([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(\\()',
      beginCaptures: {
        1: {name: 'meta.function-call.other.twig'},
        2: {name: 'punctuation.definition.parameters.begin.twig'}
      },
      contentName: 'meta.function.arguments.twig',
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.twig'}},
      patterns: [
        {include: '#twig-constants'},
        {include: '#twig-functions-warg'},
        {include: '#twig-functions'},
        {include: '#twig-macros'},
        {include: '#twig-objects'},
        {include: '#twig-properties'},
        {include: '#twig-filters-warg'},
        {include: '#twig-filters'},
        {include: '#twig-filters-warg-ud'},
        {include: '#twig-filters-ud'},
        {include: '#twig-strings'},
        {include: '#twig-arrays'},
        {include: '#twig-hashes'}
      ]
    },
    'twig-functions': {
      captures: {1: {name: 'support.function.twig'}},
      match: '(?<=is\\s)(defined|empty|even|iterable|odd)'
    },
    'twig-functions-warg': {
      begin:
        '(?<=[\\s\\(\\[\\{:,])(attribute|block|constant|cycle|date|divisible by|dump|include|max|min|parent|random|range|same as|source|template_from_string)(\\()',
      beginCaptures: {
        1: {name: 'support.function.twig'},
        2: {name: 'punctuation.definition.parameters.begin.twig'}
      },
      contentName: 'meta.function.arguments.twig',
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.twig'}},
      patterns: [
        {include: '#twig-constants'},
        {include: '#twig-functions-warg'},
        {include: '#twig-functions'},
        {include: '#twig-macros'},
        {include: '#twig-objects'},
        {include: '#twig-properties'},
        {include: '#twig-filters-warg'},
        {include: '#twig-filters'},
        {include: '#twig-filters-warg-ud'},
        {include: '#twig-filters-ud'},
        {include: '#twig-strings'},
        {include: '#twig-arrays'}
      ]
    },
    'twig-hashes': {
      begin: '(?<=[\\s\\(\\{\\[:,])\\{',
      beginCaptures: {0: {name: 'punctuation.section.hash.begin.twig'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.hash.end.twig'}},
      name: 'meta.hash.twig',
      patterns: [
        {include: '#twig-hashes'},
        {include: '#twig-arrays'},
        {include: '#twig-constants'},
        {include: '#twig-strings'},
        {include: '#twig-functions-warg'},
        {include: '#twig-functions'},
        {include: '#twig-macros'},
        {include: '#twig-objects'},
        {include: '#twig-properties'},
        {include: '#twig-filters-warg'},
        {include: '#twig-filters'},
        {include: '#twig-filters-warg-ud'},
        {include: '#twig-filters-ud'},
        {match: ':', name: 'punctuation.separator.key-value.twig'},
        {match: ',', name: 'punctuation.separator.object.twig'}
      ]
    },
    'twig-keywords': {
      match:
        '(?<=\\s)((?:end)?(?:autoescape|block|embed|filter|for|if|macro|raw|sandbox|set|spaceless|trans|verbatim)|as|do|else|elseif|extends|flush|from|ignore missing|import|include|only|use|with)(?=\\s)',
      name: 'keyword.control.twig'
    },
    'twig-macros': {
      begin:
        '(?x)\n                    (?<=[\\s\\(\\[\\{:,])\n                    ([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\n                    (?:\n                        (\\.)([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\n                    )?\n                    (\\()\n            ',
      beginCaptures: {
        1: {name: 'meta.function-call.twig'},
        2: {name: 'punctuation.separator.property.twig'},
        3: {name: 'variable.other.property.twig'},
        4: {name: 'punctuation.definition.parameters.begin.twig'}
      },
      contentName: 'meta.function.arguments.twig',
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.twig'}},
      patterns: [
        {include: '#twig-constants'},
        {include: '#twig-operators'},
        {include: '#twig-functions-warg'},
        {include: '#twig-functions'},
        {include: '#twig-macros'},
        {include: '#twig-objects'},
        {include: '#twig-properties'},
        {include: '#twig-filters-warg'},
        {include: '#twig-filters'},
        {include: '#twig-filters-warg-ud'},
        {include: '#twig-filters-ud'},
        {include: '#twig-strings'},
        {include: '#twig-arrays'},
        {include: '#twig-hashes'}
      ]
    },
    'twig-objects': {
      captures: {1: {name: 'variable.other.twig'}},
      match:
        '(?<=[\\s\\{\\[\\(:,])([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(?=[\\s\\}\\[\\]\\(\\)\\.\\|,:])'
    },
    'twig-operators': {
      patterns: [
        {
          captures: {1: {name: 'keyword.operator.arithmetic.twig'}},
          match: '(?<=\\s)(\\+|-|//?|%|\\*\\*?)(?=\\s)'
        },
        {
          captures: {1: {name: 'keyword.operator.assignment.twig'}},
          match: '(?<=\\s)(=|~)(?=\\s)'
        },
        {
          captures: {1: {name: 'keyword.operator.bitwise.twig'}},
          match: '(?<=\\s)(b-(?:and|or|xor))(?=\\s)'
        },
        {
          captures: {1: {name: 'keyword.operator.comparison.twig'}},
          match:
            '(?<=\\s)((?:!|=)=|<=?|>=?|(?:not )?in|is(?: not)?|(?:ends|starts) with|matches)(?=\\s)'
        },
        {
          captures: {1: {name: 'keyword.operator.logical.twig'}},
          match: '(?<=\\s)(\\?|:|and|not|or)(?=\\s)'
        },
        {
          captures: {0: {name: 'keyword.operator.other.twig'}},
          match:
            '(?<=[a-zA-Z0-9_\\x{7f}-\\x{ff}\\]\\)\'"])\\.\\.(?=[a-zA-Z0-9_\\x{7f}-\\x{ff}\'"])'
        },
        {
          captures: {0: {name: 'keyword.operator.other.twig'}},
          match:
            '(?<=[a-zA-Z0-9_\\x{7f}-\\x{ff}\\]\\}\\)\'"])\\|(?=[a-zA-Z_\\x{7f}-\\x{ff}])'
        }
      ]
    },
    'twig-print-tag': {
      begin: '\\{\\{-?',
      beginCaptures: {0: {name: 'punctuation.section.tag.twig'}},
      end: '-?\\}\\}',
      endCaptures: {0: {name: 'punctuation.section.tag.twig'}},
      name: 'meta.tag.template.value.twig',
      patterns: [
        {include: '#twig-constants'},
        {include: '#twig-operators'},
        {include: '#twig-functions-warg'},
        {include: '#twig-functions'},
        {include: '#twig-macros'},
        {include: '#twig-objects'},
        {include: '#twig-properties'},
        {include: '#twig-filters-warg'},
        {include: '#twig-filters'},
        {include: '#twig-filters-warg-ud'},
        {include: '#twig-filters-ud'},
        {include: '#twig-strings'},
        {include: '#twig-arrays'},
        {include: '#twig-hashes'}
      ]
    },
    'twig-properties': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.property.twig'},
            2: {name: 'variable.other.property.twig'}
          },
          match:
            '(?x)\n                        (?<=[a-zA-Z0-9_\\x{7f}-\\x{ff}])\n                        (\\.)([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\n                        (?=[\\.\\s\\|\\[\\)\\]\\}:,])\n                    '
        },
        {
          begin:
            '(?x)\n                        (?<=[a-zA-Z0-9_\\x{7f}-\\x{ff}])\n                        (\\.)([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\n                        (\\()\n                    ',
          beginCaptures: {
            1: {name: 'punctuation.separator.property.twig'},
            2: {name: 'variable.other.property.twig'},
            3: {name: 'punctuation.definition.parameters.begin.twig'}
          },
          contentName: 'meta.function.arguments.twig',
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.parameters.end.twig'}
          },
          patterns: [
            {include: '#twig-constants'},
            {include: '#twig-functions-warg'},
            {include: '#twig-functions'},
            {include: '#twig-macros'},
            {include: '#twig-objects'},
            {include: '#twig-properties'},
            {include: '#twig-filters-warg'},
            {include: '#twig-filters'},
            {include: '#twig-filters-warg-ud'},
            {include: '#twig-filters-ud'},
            {include: '#twig-strings'},
            {include: '#twig-arrays'}
          ]
        },
        {
          captures: {
            1: {name: 'punctuation.section.array.begin.twig'},
            2: {name: 'variable.other.property.twig'},
            3: {name: 'punctuation.section.array.end.twig'},
            4: {name: 'punctuation.section.array.begin.twig'},
            5: {name: 'variable.other.property.twig'},
            6: {name: 'punctuation.section.array.end.twig'},
            7: {name: 'punctuation.section.array.begin.twig'},
            8: {name: 'variable.other.property.twig'},
            9: {name: 'punctuation.section.array.end.twig'}
          },
          match:
            '(?x)\n                        (?<=[a-zA-Z0-9_\\x{7f}-\\x{ff}\\]])\n                        (?:\n                            (\\[)(\'[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*\')(\\])\n                            |(\\[)("[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*")(\\])\n                            |(\\[)([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(\\])\n                        )\n                    '
        }
      ]
    },
    'twig-statement-tag': {
      begin: '\\{%-?',
      beginCaptures: {0: {name: 'punctuation.section.tag.twig'}},
      end: '-?%\\}',
      endCaptures: {0: {name: 'punctuation.section.tag.twig'}},
      name: 'meta.tag.template.block.twig',
      patterns: [
        {include: '#twig-constants'},
        {include: '#twig-keywords'},
        {include: '#twig-operators'},
        {include: '#twig-functions-warg'},
        {include: '#twig-functions'},
        {include: '#twig-macros'},
        {include: '#twig-filters-warg'},
        {include: '#twig-filters'},
        {include: '#twig-filters-warg-ud'},
        {include: '#twig-filters-ud'},
        {include: '#twig-objects'},
        {include: '#twig-properties'},
        {include: '#twig-strings'},
        {include: '#twig-arrays'},
        {include: '#twig-hashes'}
      ]
    },
    'twig-strings': {
      patterns: [
        {
          begin: "(?:(?<!\\\\)|(?<=\\\\\\\\))'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.twig'}
          },
          end: "(?:(?<!\\\\)|(?<=\\\\\\\\))'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.twig'}},
          name: 'string.quoted.single.twig'
        },
        {
          begin: '(?:(?<!\\\\)|(?<=\\\\\\\\))"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.twig'}
          },
          end: '(?:(?<!\\\\)|(?<=\\\\\\\\))"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.twig'}},
          name: 'string.quoted.double.twig'
        }
      ]
    }
  },
  scopeName: 'text.html.twig'
}

export default grammar
