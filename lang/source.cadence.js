// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/onflow/vscode-cadence>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.cdc'],
  names: ['cadence'],
  patterns: [
    {include: '#comments'},
    {include: '#expressions'},
    {include: '#declarations'},
    {include: '#keywords'},
    {include: '#code-block'},
    {include: '#composite'},
    {include: '#event'}
  ],
  repository: {
    'code-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.cadence'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cadence'}},
      patterns: [{include: '$self'}]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.cadence'}},
          match: '\\A^(#!).*$\\n?',
          name: 'comment.line.number-sign.cadence'
        },
        {
          begin: '/\\*\\*(?!/)',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.cadence'}
          },
          end: '\\*/',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.end.cadence'}
          },
          name: 'comment.block.documentation.cadence',
          patterns: [{include: '#nested'}]
        },
        {
          begin: '/\\*:',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.cadence'}
          },
          end: '\\*/',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.end.cadence'}
          },
          name: 'comment.block.documentation.playground.cadence',
          patterns: [{include: '#nested'}]
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.cadence'}
          },
          end: '\\*/',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.end.cadence'}
          },
          name: 'comment.block.cadence',
          patterns: [{include: '#nested'}]
        },
        {
          match: '\\*/',
          name: 'invalid.illegal.unexpected-end-of-block-comment.cadence'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.cadence'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '///',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.cadence'}
              },
              end: '^',
              name: 'comment.line.triple-slash.documentation.cadence'
            },
            {
              begin: '//:',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.cadence'}
              },
              end: '^',
              name: 'comment.line.double-slash.documentation.cadence'
            },
            {
              begin: '//',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.cadence'}
              },
              end: '^',
              name: 'comment.line.double-slash.cadence'
            }
          ]
        }
      ],
      repository: {
        nested: {begin: '/\\*', end: '\\*/', patterns: [{include: '#nested'}]}
      }
    },
    composite: {
      begin:
        '\\b((?:(?:struct|resource|contract)(?:\\s+interface)?)|transaction|enum)\\s+([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)',
      beginCaptures: {
        1: {name: 'storage.type.$1.cadence'},
        2: {name: 'entity.name.type.$1.cadence'}
      },
      end: '(?<=\\})',
      name: 'meta.definition.type.composite.cadence',
      patterns: [
        {include: '#comments'},
        {include: '#conformance-clause'},
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.type.begin.cadence'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.type.end.cadence'}},
          name: 'meta.definition.type.body.cadence',
          patterns: [{include: '$self'}]
        }
      ]
    },
    'conformance-clause': {
      begin: '(:)(?=\\s*\\{)|(:)\\s*',
      beginCaptures: {
        1: {name: 'invalid.illegal.empty-conformance-clause.cadence'},
        2: {name: 'punctuation.separator.conformance-clause.cadence'}
      },
      end: '(?!\\G)$|(?=[={}])',
      name: 'meta.conformance-clause.cadence',
      patterns: [
        {
          begin: '\\G',
          end: '(?!\\G)$|(?=[={}])',
          patterns: [{include: '#comments'}, {include: '#type'}]
        }
      ]
    },
    declarations: {
      patterns: [
        {include: '#var-let-declaration'},
        {include: '#function'},
        {include: '#initializer'}
      ]
    },
    event: {
      begin: '\\b(event)\\b\\s+([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)\\s*',
      beginCaptures: {
        1: {name: 'storage.type.event.cadence'},
        2: {name: 'entity.name.type.event.cadence'}
      },
      end: '(?<=\\))|$',
      name: 'meta.definition.type.event.cadence',
      patterns: [{include: '#comments'}, {include: '#parameter-clause'}]
    },
    'expression-element-list': {
      patterns: [
        {include: '#comments'},
        {
          begin: '([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)\\s*(:)',
          beginCaptures: {
            1: {name: 'support.function.any-method.cadence'},
            2: {name: 'punctuation.separator.argument-label.cadence'}
          },
          end: '(?=[,)\\]])',
          patterns: [{include: '#expressions'}]
        },
        {
          begin: '(?![,)\\]])(?=\\S)',
          end: '(?=[,)\\]])',
          patterns: [{include: '#expressions'}]
        }
      ]
    },
    expressions: {
      patterns: [
        {include: '#comments'},
        {include: '#function-call-expression'},
        {include: '#literals'},
        {include: '#operators'},
        {include: '#language-variables'}
      ]
    },
    function: {
      begin: '\\b(fun)\\b\\s+([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)\\s*',
      beginCaptures: {
        1: {name: 'storage.type.function.cadence'},
        2: {name: 'entity.name.function.cadence'}
      },
      end: '(?<=\\})|$',
      name: 'meta.definition.function.cadence',
      patterns: [
        {include: '#comments'},
        {include: '#parameter-clause'},
        {include: '#function-result'},
        {
          begin: '(\\{)',
          beginCaptures: {
            1: {name: 'punctuation.section.function.begin.cadence'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.section.function.end.cadence'}},
          name: 'meta.definition.function.body.cadence',
          patterns: [{include: '$self'}]
        }
      ]
    },
    'function-call-expression': {
      patterns: [
        {
          begin: '(?!(?:set|init))([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)\\s*(\\()',
          beginCaptures: {
            1: {name: 'support.function.any-method.cadence'},
            4: {name: 'punctuation.definition.arguments.begin.cadence'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.arguments.end.cadence'}
          },
          name: 'meta.function-call.cadence',
          patterns: [{include: '#expression-element-list'}]
        }
      ]
    },
    'function-result': {
      begin: '(?<![/=\\-+!*%<>&|\\^~.])(:)(?![/=\\-+!*%<>&|\\^~.])\\s*',
      beginCaptures: {1: {name: 'keyword.operator.function-result.cadence'}},
      end: '(?!\\G)(?=\\{|;)|$',
      name: 'meta.function-result.cadence',
      patterns: [{include: '#type'}]
    },
    initializer: {
      begin: '(?<!\\.)\\b(init)\\s*(?=\\(|<)',
      beginCaptures: {1: {name: 'storage.type.function.cadence'}},
      end: '(?<=\\})|$',
      name: 'meta.definition.function.initializer.cadence',
      patterns: [
        {include: '#comments'},
        {include: '#parameter-clause'},
        {
          begin: '(\\{)',
          beginCaptures: {
            1: {name: 'punctuation.section.function.begin.cadence'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.section.function.end.cadence'}},
          name: 'meta.definition.function.body.cadence',
          patterns: [{include: '$self'}]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '(?<!\\.)\\b(?:if|else|switch|case|default)\\b',
          name: 'keyword.control.branch.cadence'
        },
        {
          match: '(?<!\\.)\\b(?:return|continue|break)\\b',
          name: 'keyword.control.transfer.cadence'
        },
        {
          match: '(?<!\\.)\\b(?:while|for|in)\\b',
          name: 'keyword.control.loop.cadence'
        },
        {
          match:
            '(?<!\\.)\\b(?:pre|post|prepare|execute|create|destroy|emit)\\b',
          name: 'keyword.other.cadence'
        },
        {
          match:
            '(?<!\\.)\\b(?:private|pub(?:\\(set\\))?|access\\((?:self|contract|account|all)\\))\\b',
          name: 'keyword.other.declaration-specifier.accessibility.cadence'
        },
        {
          match: '\\b(?:init|destroy)\\b',
          name: 'storage.type.function.cadence'
        },
        {
          match: '(?<!\\.)\\b(?:import|from)\\b',
          name: 'keyword.control.import.cadence'
        }
      ]
    },
    'language-variables': {
      patterns: [{match: '\\b(self)\\b', name: 'variable.language.cadence'}]
    },
    literals: {
      patterns: [
        {include: '#boolean'},
        {include: '#numeric'},
        {include: '#string'},
        {match: '\\bnil\\b', name: 'constant.language.nil.cadence'}
      ],
      repository: {
        boolean: {
          match: '\\b(true|false)\\b',
          name: 'constant.language.boolean.cadence'
        },
        numeric: {
          patterns: [
            {include: '#binary'},
            {include: '#octal'},
            {include: '#decimal'},
            {include: '#hexadecimal'}
          ],
          repository: {
            binary: {
              match: '(\\B\\-|\\b)0b[01]([_01]*[01])?\\b',
              name: 'constant.numeric.integer.binary.cadence'
            },
            decimal: {
              match: '(\\B\\-|\\b)[0-9]([_0-9]*[0-9])?\\b',
              name: 'constant.numeric.integer.decimal.cadence'
            },
            hexadecimal: {
              match: '(\\B\\-|\\b)0x[0-9A-Fa-f]([_0-9A-Fa-f]*[0-9A-Fa-f])?\\b',
              name: 'constant.numeric.integer.hexadecimal.cadence'
            },
            octal: {
              match: '(\\B\\-|\\b)0o[0-7]([_0-7]*[0-7])?\\b',
              name: 'constant.numeric.integer.octal.cadence'
            }
          }
        },
        string: {
          patterns: [
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.cadence'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.cadence'}
              },
              name: 'string.quoted.double.single-line.cadence',
              patterns: [
                {
                  match: '\\r|\\n',
                  name: 'invalid.illegal.returns-not-allowed.cadence'
                },
                {include: '#string-guts'}
              ]
            }
          ],
          repository: {
            'string-guts': {
              patterns: [
                {
                  match: '\\\\[0\\\\tnr"\']',
                  name: 'constant.character.escape.cadence'
                },
                {
                  match: '\\\\u\\{[0-9a-fA-F]{1,8}\\}',
                  name: 'constant.character.escape.unicode.cadence'
                }
              ]
            }
          }
        }
      }
    },
    operators: {
      patterns: [
        {match: '\\-', name: 'keyword.operator.arithmetic.unary.cadence'},
        {match: '!', name: 'keyword.operator.logical.not.cadence'},
        {match: '=', name: 'keyword.operator.assignment.cadence'},
        {match: '<-', name: 'keyword.operator.move.cadence'},
        {match: '<-!', name: 'keyword.operator.force-move.cadence'},
        {match: '\\+|\\-|\\*|/', name: 'keyword.operator.arithmetic.cadence'},
        {match: '%', name: 'keyword.operator.arithmetic.remainder.cadence'},
        {match: '==|!=|>|<|>=|<=', name: 'keyword.operator.comparison.cadence'},
        {match: '\\?\\?', name: 'keyword.operator.coalescing.cadence'},
        {match: '&&|\\|\\|', name: 'keyword.operator.logical.cadence'},
        {match: '[?!]', name: 'keyword.operator.type.optional.cadence'}
      ]
    },
    'parameter-clause': {
      begin: '(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.parameters.begin.cadence'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.cadence'}},
      name: 'meta.parameter-clause.cadence',
      patterns: [{include: '#parameter-list'}]
    },
    'parameter-list': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.function.cadence'},
            2: {name: 'variable.parameter.function.cadence'}
          },
          match:
            '([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)\\s+([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)(?=\\s*:)'
        },
        {
          captures: {
            1: {name: 'variable.parameter.function.cadence'},
            2: {name: 'entity.name.function.cadence'}
          },
          match: '(([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*))(?=\\s*:)'
        },
        {
          begin: ':\\s*(?!\\s)',
          end: '(?=[,)])',
          patterns: [
            {include: '#type'},
            {
              match: ':',
              name: 'invalid.illegal.extra-colon-in-parameter-list.cadence'
            }
          ]
        }
      ]
    },
    type: {
      patterns: [
        {include: '#comments'},
        {
          match: '([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)',
          name: 'storage.type.cadence'
        }
      ]
    },
    'var-let-declaration': {
      begin: '\\b(var|let)\\b\\s+([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)',
      beginCaptures: {
        1: {name: 'storage.type.$1.cadence'},
        2: {name: 'entity.name.type.$1.cadence'}
      },
      end: '=|<-|<-!|$',
      patterns: [{include: '#type'}]
    }
  },
  scopeName: 'source.cadence'
}

export default grammar
