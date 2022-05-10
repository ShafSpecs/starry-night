// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mmims/language-batchfile>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.bat', '.cmd'],
  injections: {
    'L:meta.block.repeat.batchfile': {patterns: [{include: '#repeatParameter'}]}
  },
  names: ['batchfile', 'bat', 'batch', 'dosbatch', 'winbatch'],
  patterns: [
    {include: '#commands'},
    {include: '#comments'},
    {include: '#constants'},
    {include: '#controls'},
    {include: '#escaped_characters'},
    {include: '#labels'},
    {include: '#numbers'},
    {include: '#operators'},
    {include: '#parens'},
    {include: '#strings'},
    {include: '#variables'}
  ],
  repository: {
    command_set: {
      patterns: [
        {
          begin: '(?<=^|[\\s@])(?i:SET)(?=$|\\s)',
          beginCaptures: {0: {name: 'keyword.command.batchfile'}},
          end: '(?=$\\n|[&|><)])',
          patterns: [{include: '#command_set_inside'}]
        }
      ]
    },
    command_set_group: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.section.group.begin.batchfile'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.section.group.end.batchfile'}},
          patterns: [{include: '#command_set_inside_arithmetic'}]
        }
      ]
    },
    command_set_inside: {
      patterns: [
        {include: '#escaped_characters'},
        {include: '#variables'},
        {include: '#numbers'},
        {include: '#parens'},
        {include: '#command_set_strings'},
        {include: '#strings'},
        {
          begin: '([^ ][^=]*)(=)',
          beginCaptures: {
            1: {name: 'variable.other.readwrite.batchfile'},
            2: {name: 'keyword.operator.assignment.batchfile'}
          },
          end: '(?=$\\n|[&|><)])',
          patterns: [
            {include: '#escaped_characters'},
            {include: '#variables'},
            {include: '#numbers'},
            {include: '#parens'},
            {include: '#strings'}
          ]
        },
        {
          begin: '\\s+/[aA]\\s+',
          end: '(?=$\\n|[&|><)])',
          name: 'meta.expression.set.batchfile',
          patterns: [
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.batchfile'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.batchfile'}
              },
              name: 'string.quoted.double.batchfile',
              patterns: [
                {include: '#command_set_inside_arithmetic'},
                {include: '#command_set_group'},
                {include: '#variables'}
              ]
            },
            {include: '#command_set_inside_arithmetic'},
            {include: '#command_set_group'}
          ]
        },
        {
          begin: '\\s+/[pP]\\s+',
          end: '(?=$\\n|[&|><)])',
          patterns: [
            {include: '#command_set_strings'},
            {
              begin: '([^ ][^=]*)(=)',
              beginCaptures: {
                1: {name: 'variable.other.readwrite.batchfile'},
                2: {name: 'keyword.operator.assignment.batchfile'}
              },
              end: '(?=$\\n|[&|><)])',
              name: 'meta.prompt.set.batchfile',
              patterns: [{include: '#strings'}]
            }
          ]
        }
      ]
    },
    command_set_inside_arithmetic: {
      patterns: [
        {include: '#command_set_operators'},
        {include: '#numbers'},
        {match: ',', name: 'punctuation.separator.batchfile'}
      ]
    },
    command_set_operators: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.other.readwrite.batchfile'},
            2: {name: 'keyword.operator.assignment.augmented.batchfile'}
          },
          match:
            '([^ ]*)(\\+\\=|\\-\\=|\\*\\=|\\/\\=|%%\\=|&\\=|\\|\\=|\\^\\=|<<\\=|>>\\=)'
        },
        {
          match: '\\+|\\-|/|\\*|%%|\\||&|\\^|<<|>>|~',
          name: 'keyword.operator.arithmetic.batchfile'
        },
        {match: '!', name: 'keyword.operator.logical.batchfile'},
        {
          captures: {
            1: {name: 'variable.other.readwrite.batchfile'},
            2: {name: 'keyword.operator.assignment.batchfile'}
          },
          match: '([^ =]*)(=)'
        }
      ]
    },
    command_set_strings: {
      patterns: [
        {
          begin: '(")\\s*([^ ][^=]*)(=)',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.batchfile'},
            2: {name: 'variable.other.readwrite.batchfile'},
            3: {name: 'keyword.operator.assignment.batchfile'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.batchfile'}
          },
          name: 'string.quoted.double.batchfile',
          patterns: [
            {include: '#variables'},
            {include: '#numbers'},
            {include: '#escaped_characters'}
          ]
        }
      ]
    },
    commands: {
      patterns: [
        {
          match:
            '(?<=^|[\\s@])(?i:adprep|append|arp|assoc|at|atmadm|attrib|auditpol|autochk|autoconv|autofmt|bcdboot|bcdedit|bdehdcfg|bitsadmin|bootcfg|brea|cacls|cd|certreq|certutil|change|chcp|chdir|chglogon|chgport|chgusr|chkdsk|chkntfs|choice|cipher|clip|cls|clscluadmin|cluster|cmd|cmdkey|cmstp|color|comp|compact|convert|copy|cprofile|cscript|csvde|date|dcdiag|dcgpofix|dcpromo|defra|del|dfscmd|dfsdiag|dfsrmig|diantz|dir|dirquota|diskcomp|diskcopy|diskpart|diskperf|diskraid|diskshadow|dispdiag|doin|dnscmd|doskey|driverquery|dsacls|dsadd|dsamain|dsdbutil|dsget|dsmgmt|dsmod|dsmove|dsquery|dsrm|edit|endlocal|eraseesentutl|eventcreate|eventquery|eventtriggers|evntcmd|expand|extract|fc|filescrn|find|findstr|finger|flattemp|fonde|forfiles|format|freedisk|fsutil|ftp|ftype|fveupdate|getmac|gettype|gpfixup|gpresult|gpupdate|graftabl|hashgen|hep|helpctr|hostname|icacls|iisreset|inuse|ipconfig|ipxroute|irftp|ismserv|jetpack|klist|ksetup|ktmutil|ktpass|label|ldifd|ldp|lodctr|logman|logoff|lpq|lpr|macfile|makecab|manage-bde|mapadmin|md|mkdir|mklink|mmc|mode|more|mount|mountvol|move|mqbup|mqsvc|mqtgsvc|msdt|msg|msiexec|msinfo32|mstsc|nbtstat|net computer|net group|net localgroup|net print|net session|net share|net start|net stop|net use|net user|net view|net|netcfg|netdiag|netdom|netsh|netstat|nfsadmin|nfsshare|nfsstat|nlb|nlbmgr|nltest|nslookup|ntackup|ntcmdprompt|ntdsutil|ntfrsutl|openfiles|pagefileconfig|path|pathping|pause|pbadmin|pentnt|perfmon|ping|pnpunatten|pnputil|popd|powercfg|powershell|powershell_ise|print|prncnfg|prndrvr|prnjobs|prnmngr|prnport|prnqctl|prompt|pubprn|pushd|pushprinterconnections|pwlauncher|qappsrv|qprocess|query|quser|qwinsta|rasdial|rcp|rd|rdpsign|regentc|recover|redircmp|redirusr|reg|regini|regsvr32|relog|ren|rename|rendom|repadmin|repair-bde|replace|reset session|rxec|risetup|rmdir|robocopy|route|rpcinfo|rpcping|rsh|runas|rundll32|rwinsta|sc|schtasks|scp|scwcmd|secedit|serverceipoptin|servrmanagercmd|serverweroptin|setspn|setx|sfc|sftp|shadow|shift|showmount|shutdown|sort|ssh|ssh-add|ssh-agent|ssh-keygen|ssh-keyscan|start|storrept|subst|sxstrace|ysocmgr|systeminfo|takeown|tapicfg|taskkill|tasklist|tcmsetup|telnet|tftp|time|timeout|title|tlntadmn|tpmvscmgr|tpmvscmgr|tacerpt|tracert|tree|tscon|tsdiscon|tsecimp|tskill|tsprof|type|typeperf|tzutil|uddiconfig|umount|unlodctr|ver|verifier|verif|vol|vssadmin|w32tm|waitfor|wbadmin|wdsutil|wecutil|wevtutil|where|whoami|winnt|winnt32|winpop|winrm|winrs|winsat|wlbs|wmic|wscript|wsl|xcopy)(?=$|\\s)',
          name: 'keyword.command.batchfile'
        },
        {
          begin:
            '(?i)(?<=^|[\\s@])(echo)(?:(?=$|\\.|:)|\\s+(?:(on|off)(?=\\s*$))?)',
          beginCaptures: {
            1: {name: 'keyword.command.batchfile'},
            2: {name: 'keyword.other.special-method.batchfile'}
          },
          end: '(?=$\\n|[&|><)])',
          patterns: [
            {include: '#escaped_characters'},
            {include: '#variables'},
            {include: '#numbers'},
            {include: '#strings'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.command.batchfile'},
            2: {name: 'keyword.other.special-method.batchfile'}
          },
          match:
            '(?i)(?<=^|[\\s@])(setlocal)(?:\\s*$|\\s+(EnableExtensions|DisableExtensions|EnableDelayedExpansion|DisableDelayedExpansion)(?=\\s*$))'
        },
        {include: '#command_set'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '(?:^|(&))\\s*(?=((?::[+=,;: ])))',
          beginCaptures: {1: {name: 'keyword.operator.conditional.batchfile'}},
          end: '\\n',
          patterns: [
            {
              begin: '((?::[+=,;: ]))',
              beginCaptures: {
                1: {name: 'punctuation.definition.comment.batchfile'}
              },
              end: '(?=\\n)',
              name: 'comment.line.colon.batchfile'
            }
          ]
        },
        {
          begin: '(?<=^|[\\s@])(?i)(REM)(\\.)',
          beginCaptures: {
            1: {name: 'keyword.command.rem.batchfile'},
            2: {name: 'punctuation.separator.batchfile'}
          },
          end: '(?=$\\n|[&|><)])',
          name: 'comment.line.rem.batchfile'
        },
        {
          begin: '(?<=^|[\\s@])(?i:rem)\\b',
          beginCaptures: {0: {name: 'keyword.command.rem.batchfile'}},
          end: '\\n',
          name: 'comment.line.rem.batchfile',
          patterns: [
            {
              match: '[><|]',
              name: 'invalid.illegal.unexpected-character.batchfile'
            }
          ]
        }
      ]
    },
    constants: {
      patterns: [{match: '\\b(?i:NUL)\\b', name: 'constant.language.batchfile'}]
    },
    controls: {
      patterns: [
        {
          match: '(?i)(?<=^|\\s)(?:call|exit(?=$|\\s)|goto(?=$|\\s|:))',
          name: 'keyword.control.statement.batchfile'
        },
        {
          captures: {
            1: {name: 'keyword.control.conditional.batchfile'},
            2: {name: 'keyword.operator.logical.batchfile'},
            3: {name: 'keyword.other.special-method.batchfile'}
          },
          match:
            '(?<=^|\\s)(?i)(if)\\s+(?:(not)\\s+)?(exist|defined|errorlevel|cmdextversion)(?=\\s)'
        },
        {
          match: '(?<=^|\\s)(?i)(?:if|else)(?=$|\\s)',
          name: 'keyword.control.conditional.batchfile'
        },
        {
          begin: '(?<=^|[\\s(&^])(?i)for(?=\\s)',
          beginCaptures: {0: {name: 'keyword.control.repeat.batchfile'}},
          end: '\\n',
          name: 'meta.block.repeat.batchfile',
          patterns: [
            {
              begin: '(?<=[\\s^])(?i)in(?=\\s)',
              beginCaptures: {0: {name: 'keyword.control.repeat.in.batchfile'}},
              end: '(?<=[\\s)^])(?i)do(?=\\s)|\\n',
              endCaptures: {0: {name: 'keyword.control.repeat.do.batchfile'}},
              patterns: [{include: '$self'}]
            },
            {include: '$self'}
          ]
        }
      ]
    },
    escaped_characters: {
      patterns: [
        {
          match: '%%|\\^\\^!|\\^(?=.)|\\^\\n',
          name: 'constant.character.escape.batchfile'
        }
      ]
    },
    labels: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.batchfile'},
            2: {name: 'keyword.other.special-method.batchfile'}
          },
          match: '(?i)(?:^\\s*|(?<=call|goto)\\s*)(:)([^+=,;:\\s]\\S*)'
        }
      ]
    },
    numbers: {
      patterns: [
        {
          match: '(?<=^|\\s|=)(0[xX][0-9A-Fa-f]*|[+-]?\\d+)(?=$|\\s|<|>)',
          name: 'constant.numeric.batchfile'
        }
      ]
    },
    operators: {
      patterns: [
        {match: '@(?=\\S)', name: 'keyword.operator.at.batchfile'},
        {
          match: '(?<=\\s)(?i:EQU|NEQ|LSS|LEQ|GTR|GEQ)(?=\\s)|==',
          name: 'keyword.operator.comparison.batchfile'
        },
        {
          match: '(?<=\\s)(?i)(NOT)(?=\\s)',
          name: 'keyword.operator.logical.batchfile'
        },
        {
          match: '(?<!\\^)&&?|\\|\\|',
          name: 'keyword.operator.conditional.batchfile'
        },
        {match: '(?<!\\^)\\|', name: 'keyword.operator.pipe.batchfile'},
        {match: '<&?|>[&>]?', name: 'keyword.operator.redirection.batchfile'}
      ]
    },
    parens: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.section.group.begin.batchfile'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.section.group.end.batchfile'}},
          name: 'meta.group.batchfile',
          patterns: [
            {match: ',|;', name: 'punctuation.separator.batchfile'},
            {include: '$self'}
          ]
        }
      ]
    },
    repeatParameter: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.batchfile'}},
          match: '(%%)(?:(?i:~[fdpnxsatz]*(?:\\$PATH:)?)?[a-zA-Z])',
          name: 'variable.parameter.repeat.batchfile'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.batchfile'}
          },
          end: '(")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.batchfile'},
            2: {name: 'invalid.illegal.newline.batchfile'}
          },
          name: 'string.quoted.double.batchfile',
          patterns: [
            {match: '%%', name: 'constant.character.escape.batchfile'},
            {include: '#variables'}
          ]
        }
      ]
    },
    variable: {
      patterns: [
        {
          begin: '%(?=[^%]+%)',
          beginCaptures: {
            0: {name: 'punctuation.definition.variable.begin.batchfile'}
          },
          end: '(%)|\\n',
          endCaptures: {
            1: {name: 'punctuation.definition.variable.end.batchfile'}
          },
          name: 'variable.other.readwrite.batchfile',
          patterns: [
            {
              begin: ':~',
              beginCaptures: {0: {name: 'punctuation.separator.batchfile'}},
              end: '(?=%|\\n)',
              name: 'meta.variable.substring.batchfile',
              patterns: [{include: '#variable_substring'}]
            },
            {
              begin: ':',
              beginCaptures: {0: {name: 'punctuation.separator.batchfile'}},
              end: '(?=%|\\n)',
              name: 'meta.variable.substitution.batchfile',
              patterns: [
                {include: '#variable_replace'},
                {
                  begin: '=',
                  beginCaptures: {0: {name: 'punctuation.separator.batchfile'}},
                  end: '(?=%|\\n)',
                  patterns: [
                    {include: '#variable_delayed_expansion'},
                    {match: '[^%]+', name: 'string.unquoted.batchfile'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    variable_delayed_expansion: {
      patterns: [
        {
          begin: '!(?=[^!]+!)',
          beginCaptures: {
            0: {name: 'punctuation.definition.variable.begin.batchfile'}
          },
          end: '(!)|\\n',
          endCaptures: {
            1: {name: 'punctuation.definition.variable.end.batchfile'}
          },
          name: 'variable.other.readwrite.batchfile',
          patterns: [
            {
              begin: ':~',
              beginCaptures: {0: {name: 'punctuation.separator.batchfile'}},
              end: '(?=!|\\n)',
              name: 'meta.variable.substring.batchfile',
              patterns: [{include: '#variable_substring'}]
            },
            {
              begin: ':',
              beginCaptures: {0: {name: 'punctuation.separator.batchfile'}},
              end: '(?=!|\\n)',
              name: 'meta.variable.substitution.batchfile',
              patterns: [
                {include: '#escaped_characters'},
                {include: '#variable_replace'},
                {include: '#variable'},
                {
                  begin: '=',
                  beginCaptures: {0: {name: 'punctuation.separator.batchfile'}},
                  end: '(?=!|\\n)',
                  patterns: [
                    {include: '#variable'},
                    {match: '[^!]+', name: 'string.unquoted.batchfile'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    variable_replace: {
      patterns: [{match: '[^=%!\\n]+', name: 'string.unquoted.batchfile'}]
    },
    variable_substring: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.batchfile'},
            2: {name: 'punctuation.separator.batchfile'},
            3: {name: 'constant.numeric.batchfile'}
          },
          match: '([+-]?\\d+)(?:(,)([+-]?\\d+))?'
        }
      ]
    },
    variables: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.batchfile'}},
          match: '(%)(?:(?i:~[fdpnxsatz]*(?:\\$PATH:)?)?\\d|\\*)',
          name: 'variable.parameter.batchfile'
        },
        {include: '#variable'},
        {include: '#variable_delayed_expansion'}
      ]
    }
  },
  scopeName: 'source.batchfile'
}

export default grammar
