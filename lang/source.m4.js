// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.m4', '.m4', '.mc'],
  names: ['autoconf', 'm4', 'm4sugar'],
  patterns: [{include: '#main'}],
  repository: {
    arithmetic: {
      patterns: [
        {match: '[-+/*]', name: 'keyword.operator.arithmetic.m4'},
        {match: '=', name: 'keyword.operator.assignment.m4'}
      ]
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.m4'}},
      end: '$',
      name: 'comment.line.number-sign.m4'
    },
    dnl: {
      begin: 'dnl',
      beginCaptures: {0: {name: 'keyword.operator.macro.dnl.m4'}},
      end: '$\\n?',
      name: 'comment.line.dnl.m4'
    },
    macro: {
      patterns: [
        {
          captures: {1: {name: 'keyword.operator.macro.$1.m4'}},
          match:
            '(?x) (?<!\\w)\n( __file__\n| __line__\n| __oline__\n| AC_AIX\n| AC_ALLOCA\n| AC_ARG_ARRAY\n| AC_ARG_PROGRAM\n| AC_AUTOCONF_VERSION\n| AC_CACHE_LOAD\n| AC_CACHE_SAVE\n| AC_CANONICAL_BUILD\n| AC_CANONICAL_HOST\n| AC_CANONICAL_SYSTEM\n| AC_CANONICAL_TARGET\n| AC_CHAR_UNSIGNED\n| AC_CONST\n| AC_CROSS_CHECK\n| AC_CYGWIN\n| AC_C_BACKSLASH_A\n| AC_C_CHAR_UNSIGNED\n| AC_C_CONST\n| AC_C_CROSS\n| AC_C_FLEXIBLE_ARRAY_MEMBER\n| AC_C_INLINE\n| AC_C_LONG_DOUBLE\n| AC_C_PROTOTYPES\n| AC_C_RESTRICT\n| AC_C_STRINGIZE\n| AC_C_TYPEOF\n| AC_C_VARARRAYS\n| AC_C_VOLATILE\n| AC_DECL_SYS_SIGLIST\n| AC_DECL_YYTEXT\n| AC_DIR_HEADER\n| AC_DISABLE_OPTION_CHECKING\n| AC_DYNIX_SEQ\n| AC_EMXOS2\n| AC_ERLANG_SUBST_ERTS_VER\n| AC_ERLANG_SUBST_INSTALL_LIB_DIR\n| AC_ERLANG_SUBST_LIB_DIR\n| AC_ERLANG_SUBST_ROOT_DIR\n| AC_ERROR\n| AC_EXEEXT\n| AC_F77_LIBRARY_LDFLAGS\n| AC_F77_MAIN\n| AC_F77_WRAPPERS\n| AC_FC_LIBRARY_LDFLAGS\n| AC_FC_MAIN\n| AC_FC_WRAPPERS\n| AC_FIND_XTRA\n| AC_FIND_X\n| AC_FOREACH\n| AC_FUNC_ALLOCA\n| AC_FUNC_CHECK\n| AC_FUNC_CHOWN\n| AC_FUNC_CLOSEDIR_VOID\n| AC_FUNC_ERROR_AT_LINE\n| AC_FUNC_FNMATCH_GNU\n| AC_FUNC_FNMATCH\n| AC_FUNC_FORK\n| AC_FUNC_FSEEKO\n| AC_FUNC_GETGROUPS\n| AC_FUNC_GETLOADAVG\n| AC_FUNC_GETMNTENT\n| AC_FUNC_GETPGRP\n| AC_FUNC_LSTAT_FOLLOWS_SLASHED_SYMLINK\n| AC_FUNC_LSTAT\n| AC_FUNC_MALLOC\n| AC_FUNC_MBRTOWC\n| AC_FUNC_MEMCMP\n| AC_FUNC_MKTIME\n| AC_FUNC_MMAP\n| AC_FUNC_OBSTACK\n| AC_FUNC_REALLOC\n| AC_FUNC_SELECT_ARGTYPES\n| AC_FUNC_SETPGRP\n| AC_FUNC_SETVBUF_REVERSED\n| AC_FUNC_STAT\n| AC_FUNC_STRCOLL\n| AC_FUNC_STRERROR_R\n| AC_FUNC_STRFTIME\n| AC_FUNC_STRNLEN\n| AC_FUNC_STRTOD\n| AC_FUNC_STRTOLD\n| AC_FUNC_UTIME_NULL\n| AC_FUNC_VPRINTF\n| AC_FUNC_WAIT3\n| AC_GCC_TRADITIONAL\n| AC_GETGROUPS_T\n| AC_GETLOADAVG\n| AC_GNU_SOURCE\n| AC_HAVE_FUNCS\n| AC_HAVE_HEADERS\n| AC_HAVE_POUNDBANG\n| AC_HEADER_ASSERT\n| AC_HEADER_CHECK\n| AC_HEADER_DIRENT\n| AC_HEADER_EGREP\n| AC_HEADER_MAJOR\n| AC_HEADER_RESOLV\n| AC_HEADER_STAT\n| AC_HEADER_STDBOOL\n| AC_HEADER_STDC\n| AC_HEADER_SYS_WAIT\n| AC_HEADER_TIME\n| AC_HEADER_TIOCGWINSZ\n| AC_HELP_STRING\n| AC_INLINE\n| AC_INT_16_BITS\n| AC_IRIX_SUN\n| AC_ISC_POSIX\n| AC_LANG_CPLUSPLUS\n| AC_LANG_C\n| AC_LANG_FORTRAN77\n| AC_LANG_RESTORE\n| AC_LANG_SAVE\n| AC_LANG_WERROR\n| AC_LN_S\n| AC_LONG_64_BITS\n| AC_LONG_DOUBLE\n| AC_LONG_FILE_NAMES\n| AC_MAJOR_HEADER\n| AC_MEMORY_H\n| AC_MINGW32\n| AC_MINIX\n| AC_MINUS_C_MINUS_O\n| AC_MMAP\n| AC_MODE_T\n| AC_OBJEXT\n| AC_OFF_T\n| AC_OPENMP\n| AC_OUTPUT\n| AC_PATH_XTRA\n| AC_PATH_X\n| AC_PID_T\n| AC_PREFIX\n| AC_PRESERVE_HELP_ORDER\n| AC_PROGRAMS_CHECK\n| AC_PROGRAMS_PATH\n| AC_PROGRAM_CHECK\n| AC_PROGRAM_EGREP\n| AC_PROGRAM_PATH\n| AC_PROG_AWK\n| AC_PROG_CC_C89\n| AC_PROG_CC_C99\n| AC_PROG_CC_C_O\n| AC_PROG_CC_STDC\n| AC_PROG_CPP_WERROR\n| AC_PROG_CPP\n| AC_PROG_CXXCPP\n| AC_PROG_CXX_C_O\n| AC_PROG_EGREP\n| AC_PROG_F77_C_O\n| AC_PROG_FC_C_O\n| AC_PROG_FGREP\n| AC_PROG_GCC_TRADITIONAL\n| AC_PROG_GREP\n| AC_PROG_INSTALL\n| AC_PROG_LEX\n| AC_PROG_LN_S\n| AC_PROG_MAKE_SET\n| AC_PROG_MKDIR_P\n| AC_PROG_OBJCPP\n| AC_PROG_OBJCXXCPP\n| AC_PROG_RANLIB\n| AC_PROG_SED\n| AC_PROG_YACC\n| AC_REMOTE_TAPE\n| AC_REPLACE_FNMATCH\n| AC_REQUIRE_CPP\n| AC_RESTARTABLE_SYSCALLS\n| AC_RETSIGTYPE\n| AC_RSH\n| AC_SCO_INTL\n| AC_SETVBUF_REVERSED\n| AC_SET_MAKE\n| AC_SIZEOF_TYPE\n| AC_SIZE_T\n| AC_STAT_MACROS_BROKEN\n| AC_STDC_HEADERS\n| AC_STRCOLL\n| AC_STRUCT_DIRENT_D_INO\n| AC_STRUCT_DIRENT_D_TYPE\n| AC_STRUCT_ST_BLKSIZE\n| AC_STRUCT_ST_BLOCKS\n| AC_STRUCT_ST_RDEV\n| AC_STRUCT_TIMEZONE\n| AC_STRUCT_TM\n| AC_ST_BLKSIZE\n| AC_ST_BLOCKS\n| AC_ST_RDEV\n| AC_SYS_INTERPRETER\n| AC_SYS_LARGEFILE\n| AC_SYS_LONG_FILE_NAMES\n| AC_SYS_POSIX_TERMIOS\n| AC_SYS_RESTARTABLE_SYSCALLS\n| AC_SYS_SIGLIST_DECLARED\n| AC_TEST_CPP\n| AC_TEST_PROGRAM\n| AC_TIMEZONE\n| AC_TIME_WITH_SYS_TIME\n| AC_TYPE_GETGROUPS\n| AC_TYPE_INT16_T\n| AC_TYPE_INT32_T\n| AC_TYPE_INT64_T\n| AC_TYPE_INT8_T\n| AC_TYPE_INTMAX_T\n| AC_TYPE_INTPTR_T\n| AC_TYPE_LONG_DOUBLE_WIDER\n| AC_TYPE_LONG_DOUBLE\n| AC_TYPE_LONG_LONG_INT\n| AC_TYPE_MBSTATE_T\n| AC_TYPE_MODE_T\n| AC_TYPE_OFF_T\n| AC_TYPE_PID_T\n| AC_TYPE_SIGNAL\n| AC_TYPE_SIZE_T\n| AC_TYPE_SSIZE_T\n| AC_TYPE_UID_T\n| AC_TYPE_UINT16_T\n| AC_TYPE_UINT32_T\n| AC_TYPE_UINT64_T\n| AC_TYPE_UINT8_T\n| AC_TYPE_UINTMAX_T\n| AC_TYPE_UINTPTR_T\n| AC_TYPE_UNSIGNED_LONG_LONG_INT\n| AC_UID_T\n| AC_UNISTD_H\n| AC_USE_SYSTEM_EXTENSIONS\n| AC_USG\n| AC_UTIME_NULL\n| AC_VFORK\n| AC_VPRINTF\n| AC_WAIT3\n| AC_WARN\n| AC_WORDS_BIGENDIAN\n| AC_XENIX_DIR\n| AC_YYTEXT_POINTER\n| AH_HEADER\n| AM_MAINTAINER_MODE\n| AM_PATH_LISPDIR\n| AM_PROG_AS\n| AM_PROG_CC_C_O\n| AM_PROG_LEX\n| AM_PROG_GCJ\n| AM_PROG_MKDIR_P\n| AM_SILENT_RULES\n| AM_WITH_DMALLOC\n| AS_BOURNE_COMPATIBLE\n| AS_INIT\n| AS_LINENO_PREPARE\n| AS_MESSAGE_FD\n| AS_MESSAGE_LOG_FD\n| AS_ME_PREPARE\n| AS_ORIGINAL_STDIN_FD\n| AS_SHELL_SANITIZE\n| AT_CLEANUP\n| AT_COLOR_TESTS\n| m4_init\n| m4_location\n) \\b',
          name: 'meta.macro.m4'
        },
        {
          begin:
            '(?x) (?<!\\w)\n( builtin\n| changecom\n| changequote\n| changesyntax\n| changeword\n| debugfile\n| debugmode\n| decr\n| define\n| divert\n| divnum\n| dumpdef\n| errprint\n| esyscmd\n| eval\n| format\n| ifdef\n| ifelse\n| include\n| incr\n| index\n| indir\n| len\n| maketemp\n| pushdef\n| shift\n| sinclude\n| substr\n| syscmd\n| sysval\n| traceoff\n| traceon\n| translit\n| undefine\n| undivert\n| _AM_DEPENDENCIES\n| AC_ARG_ENABLE\n| AC_ARG_VAR\n| AC_ARG_WITH\n| AC_BEFORE\n| AC_CACHE_CHECK\n| AC_CACHE_VAL\n| AC_CHECKING\n| AC_CHECK_ALIGNOF\n| AC_CHECK_DECLS_ONCE\n| AC_CHECK_DECLS\n| AC_CHECK_DECL\n| AC_CHECK_FILES\n| AC_CHECK_FILE\n| AC_CHECK_FUNCS_ONCE\n| AC_CHECK_FUNCS\n| AC_CHECK_FUNC\n| AC_CHECK_HEADERS_ONCE\n| AC_CHECK_HEADERS\n| AC_CHECK_HEADER\n| AC_CHECK_LIB\n| AC_CHECK_MEMBERS\n| AC_CHECK_MEMBER\n| AC_CHECK_PROGS\n| AC_CHECK_PROG\n| AC_CHECK_SIZEOF\n| AC_CHECK_TARGET_TOOLS\n| AC_CHECK_TARGET_TOOL\n| AC_CHECK_TOOLS\n| AC_CHECK_TOOL\n| AC_CHECK_TYPES\n| AC_CHECK_TYPE\n| AC_COMPILE_CHECK\n| AC_COMPILE_IFELSE\n| AC_COMPUTE_INT\n| AC_CONFIG_AUX_DIR\n| AC_CONFIG_COMMANDS_POST\n| AC_CONFIG_COMMANDS_PRE\n| AC_CONFIG_COMMANDS\n| AC_CONFIG_FILES\n| AC_CONFIG_HEADERS\n| AC_CONFIG_LIBOBJ_DIR\n| AC_CONFIG_LINKS\n| AC_CONFIG_MACRO_DIR\n| AC_CONFIG_SRCDIR\n| AC_CONFIG_SUBDIRS\n| AC_CONFIG_TESTDIR\n| AC_COPYRIGHT\n| AC_DEFINE_UNQUOTED\n| AC_DEFINE\n| AC_DEFUN_ONCE\n| AC_DEFUN\n| AC_DIAGNOSE\n| AC_EGREP_CPP\n| AC_EGREP_HEADER\n| AC_ENABLE\n| AC_ERLANG_CHECK_LIB\n| AC_ERLANG_SUBST_INSTALL_LIB_SUBDIR\n| AC_F77_FUNC\n| AC_FATAL\n| AC_FC_FUNC\n| AC_FC_SRCEXT\n| AC_HAVE_LIBRARY\n| AC_INIT\n| AC_LANG_ASSERT\n| AC_LANG_CALL\n| AC_LANG_CONFTEST\n| AC_LANG_FUNC_LINK_TRY\n| AC_LANG_PROGRAM\n| AC_LANG_PUSH\n| AC_LANG_SOURCE\n| AC_LANG\n| AC_LIBOBJ\n| AC_LIBSOURCES\n| AC_LIBSOURCE\n| AC_LINK_FILES\n| AC_LINK_IFELSE\n| AC_MSG_CHECKING\n| AC_MSG_ERROR\n| AC_MSG_FAILURE\n| AC_MSG_NOTICE\n| AC_MSG_RESULT\n| AC_MSG_WARN\n| AC_OBSOLETE_COMMANDS\n| AC_PATH_PROGS_FEATURE_CHECK\n| AC_PATH_PROGS\n| AC_PATH_PROG\n| AC_PATH_TARGET_TOOL\n| AC_PATH_TOOL\n| AC_PREFIX_DEFAULT\n| AC_PREFIX_PROGRAM\n| AC_PREPROC_IFELSE\n| AC_PREREQ\n| AC_REPLACE_FUNCS\n| AC_REQUIRE_AUX_FILE\n| AC_REQUIRE\n| AC_REVISION\n| AC_RUN_IFELSE\n| AC_SEARCH_LIBS\n| AC_SUBST_FILE\n| AC_SUBST\n| AC_TRY_COMPILE\n| AC_TRY_CPP\n| AC_TRY_LINK_FUNC\n| AC_TRY_LINK\n| AC_TRY_RUN\n| AC_VERBOSE\n| AC_WARNING\n| AC_WITH\n| AH_BOTTOM\n| AH_TEMPLATE\n| AH_TOP\n| AH_VERBATIM\n| AM_DEP_TRACK\n| AM_INIT_AUTOMAKE\n| AM_MAKE_INCLUDE\n| AM_MISSING_PROG\n| AM_OUTPUT_DEPENDENCY_COMMANDS\n| AM_PROG_AR\n| AM_PROG_INSTALL_STRIP\n| AM_PROG_UPC\n| AM_SANITY_CHECK\n| AM_SET_DEPDIR\n| AS_BOX\n| AS_CASE\n| AS_DIRNAME\n| AS_ECHO_N\n| AS_ECHO\n| AS_ESCAPE\n| AS_HELP_STRING\n| AS_IF\n| AS_INIT_GENERATED\n| AS_LITERAL_IF\n| AS_LITERAL_WORD_IF\n| AS_MKDIR_P\n| AS_SET_CATFILE\n| AS_SET_STATUS\n| AS_TR_CPP\n| AS_TR_SH\n| AS_UNSET\n| AS_VAR_APPEND\n| AS_VAR_ARITH\n| AS_VAR_COPY\n| AS_VAR_IF\n| AS_VAR_POPDEF\n| AS_VAR_PUSHDEF\n| AS_VAR_SET_IF\n| AS_VAR_SET\n| AS_VAR_TEST_SET\n| AS_VERSION_COMPARE\n| AT_ARG_OPTION_ARG\n| AT_ARG_OPTION\n| AT_BANNER\n| AT_CAPTURE_FILE\n| AT_CHECK_EUNIT\n| AT_CHECK_UNQUOTED\n| AT_CHECK\n| AT_COPYRIGHT\n| AT_DATA\n| AT_FAIL_IF\n| AT_KEYWORDS\n| AT_SETUP\n| AT_SKIP_IF\n| AT_TESTED\n| AT_XFAIL_IF\n| AU_ALIAS\n| AU_DEFUN\n| m4_append_uniq_w\n| m4_append_uniq\n| m4_append\n| m4_apply\n| m4_argn\n| m4_assert\n| m4_bmatch\n| m4_bpatsubsts\n| m4_bpatsubst\n| m4_bregexp\n| m4_builtin\n| m4_car\n| m4_case\n| m4_cdr\n| m4_changecom\n| m4_changequote\n| m4_chomp_all\n| m4_chomp\n| m4_cleardivert\n| m4_cmp\n| m4_cond\n| m4_copy_force\n| m4_copy\n| m4_count\n| m4_curry\n| m4_debugfile\n| m4_debugmode\n| m4_decr\n| m4_default_nblank_quoted\n| m4_default_nblank\n| m4_default_quoted\n| m4_default\n| m4_define\n| m4_defn\n| m4_divert_once\n| m4_divert_push\n| m4_divert_text\n| m4_divert\n| m4_divnum\n| m4_do\n| m4_dquote_elt\n| m4_dquote\n| m4_dumpdefs\n| m4_dumpdef\n| m4_echo\n| m4_errprintn\n| m4_errprint\n| m4_escape\n| m4_esyscmd_s\n| m4_esyscmd\n| m4_eval\n| m4_exit\n| m4_expand\n| m4_fatal\n| m4_flatten\n| m4_foreach_w\n| m4_foreach\n| m4_format\n| m4_for\n| m4_ifblank\n| m4_ifdef\n| m4_ifnblank\n| m4_ifndef\n| m4_ifset\n| m4_ifvaln\n| m4_ifval\n| m4_if\n| m4_ignore\n| m4_include\n| m4_incr\n| m4_index\n| m4_indir\n| m4_len\n| m4_list_cmp\n| m4_make_list\n| m4_maketemp\n| m4_map_args_pair\n| m4_map_args_w\n| m4_map_args\n| m4_map_sep\n| m4_mapall_sep\n| m4_mapall\n| m4_map\n| m4_max\n| m4_min\n| m4_mkstemp\n| m4_normalize\n| m4_n\n| m4_pattern_allow\n| m4_pattern_forbid\n| m4_popdef\n| m4_pushdef\n| m4_quote\n| m4_re_escape\n| m4_rename_force\n| m4_rename\n| m4_reverse\n| m4_set_add_all\n| m4_set_add\n| m4_set_contains\n| m4_set_contents\n| m4_set_delete\n| m4_set_difference\n| m4_set_dump\n| m4_set_empty\n| m4_set_foreach\n| m4_set_intersection\n| m4_set_listc\n| m4_set_list\n| m4_set_map_sep\n| m4_set_map\n| m4_set_remove\n| m4_set_size\n| m4_set_union\n| m4_shift2\n| m4_shift3\n| m4_shiftn\n| m4_shift\n| m4_sign\n| m4_sinclude\n| m4_split\n| m4_stack_foreach_lifo\n| m4_stack_foreach_sep_lifo\n| m4_stack_foreach_sep\n| m4_stack_foreach\n| m4_strip\n| m4_substr\n| m4_syscmd\n| m4_sysval\n| m4_text_box\n| m4_text_wrap\n| m4_tolower\n| m4_toupper\n| m4_traceoff\n| m4_traceon\n| m4_translit\n| m4_undefine\n| m4_undivert\n| m4_unquote\n| m4_version_compare\n| m4_version_prereq\n| m4_warn\n| m4_wrap_lifo\n| m4_wrap\n) (?=\\()',
          beginCaptures: {1: {name: 'keyword.operator.macro.$1.m4'}},
          contentName: 'meta.parameters.m4',
          end: '(?<=\\))',
          name: 'meta.macro.m4',
          patterns: [{include: '#macro-innards'}]
        },
        {
          begin:
            "(?x) (?<!\\w)\n( AC_C_BIGENDIAN\n| AC_ERLANG_NEED_ERLC\n| AC_ERLANG_NEED_ERL\n| AC_ERLANG_PATH_ERLC\n| AC_ERLANG_PATH_ERL\n| AC_F77_DUMMY_MAIN\n| AC_FC_DUMMY_MAIN\n| AC_FC_FIXEDFORM\n| AC_FC_FREEFORM\n| AC_FC_LINE_LENGTH\n| AC_INCLUDES_DEFAULT\n| AC_LANG_POP\n| AC_OUTPUT\n| AC_PROG_CC\n| AC_PROG_CXX\n| AC_PROG_F77\n| AC_PROG_FC\n| AC_PROG_OBJCXX\n| AC_PROG_OBJC\n| AC_VALIDATE_CACHED_SYSTEM_TUPLE\n| AS_EXIT\n| AT_INIT\n| m4_combine\n| m4_divert_pop\n| m4_joinall\n| m4_join\n| m4_map_args_sep\n| m4_newline\n\n# The following macros have an undetermined arity, simply because I haven't researched their\n# actual definitions. Source: https://www.gnu.org/software/autoconf-archive/The-Macros.html\n| AX_ABSOLUTE_HEADER\n| AX_AC_APPEND_TO_FILE\n| AX_AC_PRINT_TO_FILE\n| AX_ADD_AM_MACRO_STATIC\n| AX_ADD_AM_MACRO\n| AX_ADD_AM_TRILINOS_MAKEFILE_EXPORT\n| AX_ADD_FORTIFY_SOURCE\n| AX_ADD_RECURSIVE_AM_MACRO_STATIC\n| AX_ADD_RECURSIVE_AM_MACRO\n| AX_AFS\n| AX_AM_JOBSERVER\n| AX_AM_MACROS_STATIC\n| AX_AM_MACROS\n| AX_AM_OVERRIDE_VAR\n| AX_APPEND_COMPILE_FLAGS\n| AX_APPEND_FLAG\n| AX_APPEND_LINK_FLAGS\n| AX_APPEND_TO_FILE\n| AX_ARG_WITH_PATH_STYLE\n| AX_ASM_INLINE\n| AX_AT_CHECK_PATTERN\n| AX_AUTO_INCLUDE_HEADERS\n| AX_BERKELEY_DB_CXX\n| AX_BERKELEY_DB\n| AX_BLAS_F77_FUNC\n| AX_BLAS\n| AX_BOOST_ASIO\n| AX_BOOST_BASE\n| AX_BOOST_CHRONO\n| AX_BOOST_CONTEXT\n| AX_BOOST_COROUTINE\n| AX_BOOST_DATE_TIME\n| AX_BOOST_FILESYSTEM\n| AX_BOOST_IOSTREAMS\n| AX_BOOST_LOCALE\n| AX_BOOST_LOG_SETUP\n| AX_BOOST_LOG\n| AX_BOOST_PROGRAM_OPTIONS\n| AX_BOOST_PYTHON\n| AX_BOOST_REGEX\n| AX_BOOST_SERIALIZATION\n| AX_BOOST_SIGNALS\n| AX_BOOST_SYSTEM\n| AX_BOOST_TEST_EXEC_MONITOR\n| AX_BOOST_THREAD\n| AX_BOOST_UNIT_TEST_FRAMEWORK\n| AX_BOOST_WAVE\n| AX_BOOST_WSERIALIZATION\n| AX_BUILD_DATE_EPOCH\n| AX_C99_INLINE\n| AX_CACHE_SIZE\n| AX_CAOLAN_CHECK_PACKAGE\n| AX_CAOLAN_SEARCH_PACKAGE\n| AX_CC_FOR_BUILD\n| AX_CC_MAXOPT\n| AX_CFLAGS_AIX_OPTION\n| AX_CFLAGS_FORCE_C89\n| AX_CFLAGS_HPUX_OPTION\n| AX_CFLAGS_IRIX_OPTION\n| AX_CFLAGS_NO_WRITABLE_STRINGS\n| AX_CFLAGS_STRICT_PROTOTYPES\n| AX_CFLAGS_SUN_OPTION\n| AX_CFLAGS_WARN_ALL\n| AX_CF_EBCDIC\n| AX_CHECK_ALIGNED_ACCESS_REQUIRED\n| AX_CHECK_ALLOCATED_CTIME\n| AX_CHECK_AWK_AND\n| AX_CHECK_AWK_ARGIND\n| AX_CHECK_AWK_ARRAY_DELETE_ELEM\n| AX_CHECK_AWK_ARRAY_DELETE\n| AX_CHECK_AWK_ARRAY_IN\n| AX_CHECK_AWK_ASORTI\n| AX_CHECK_AWK_ASORT\n| AX_CHECK_AWK_ASSOCIATIVE_ARRAY\n| AX_CHECK_AWK_ATAN2\n| AX_CHECK_AWK_COMPL\n| AX_CHECK_AWK_CONDITIONAL_EXPRESSION\n| AX_CHECK_AWK_COS\n| AX_CHECK_AWK_ENVIRON\n| AX_CHECK_AWK_ERRNO\n| AX_CHECK_AWK_EXIT\n| AX_CHECK_AWK_EXP\n| AX_CHECK_AWK_GENSUB\n| AX_CHECK_AWK_GETLINE\n| AX_CHECK_AWK_GSUB\n| AX_CHECK_AWK_IGNORECASE\n| AX_CHECK_AWK_INDEX\n| AX_CHECK_AWK_INT\n| AX_CHECK_AWK_LENGTH\n| AX_CHECK_AWK_LOG\n| AX_CHECK_AWK_LSHIFT\n| AX_CHECK_AWK_MATCH_2PARMS\n| AX_CHECK_AWK_MATCH_3PARMS\n| AX_CHECK_AWK_OPERATOR_MULTIPLY_MULTIPLY\n| AX_CHECK_AWK_OPERATOR_SQUARE\n| AX_CHECK_AWK_OR\n| AX_CHECK_AWK_PRINTF\n| AX_CHECK_AWK_RAND\n| AX_CHECK_AWK_RSHIFT\n| AX_CHECK_AWK_SIN\n| AX_CHECK_AWK_SPLIT\n| AX_CHECK_AWK_SPRINTF\n| AX_CHECK_AWK_SQRT\n| AX_CHECK_AWK_SRAND\n| AX_CHECK_AWK_STRFTIME\n| AX_CHECK_AWK_STRTONUM\n| AX_CHECK_AWK_SUBSTR\n| AX_CHECK_AWK_SUB\n| AX_CHECK_AWK_SYSTEM\n| AX_CHECK_AWK_SYSTIME\n| AX_CHECK_AWK_TOLOWER\n| AX_CHECK_AWK_TOUPPER\n| AX_CHECK_AWK_USER_DEFINED_FUNCTIONS\n| AX_CHECK_AWK_VARIABLE_VALUE_PAIRS\n| AX_CHECK_AWK_VAR_REGEXP\n| AX_CHECK_AWK_XOR\n| AX_CHECK_AWK__V\n| AX_CHECK_AWK__X_ESCAPES\n| AX_CHECK_CLASSPATH\n| AX_CHECK_CLASS\n| AX_CHECK_COMPILE_FLAG\n| AX_CHECK_DEFINE\n| AX_CHECK_DOCBOOK_DTD\n| AX_CHECK_DOCBOOK_XSLT_MIN\n| AX_CHECK_DOCBOOK_XSLT\n| AX_CHECK_DOS_FILESYS\n| AX_CHECK_ENABLE_DEBUG\n| AX_CHECK_FUNC_IN\n| AX_CHECK_GD\n| AX_CHECK_GIRS_GJS\n| AX_CHECK_GIR_SYMBOLS_GJS\n| AX_CHECK_GLUT\n| AX_CHECK_GLU\n| AX_CHECK_GLX\n| AX_CHECK_GL\n| AX_CHECK_GNU_MAKE\n| AX_CHECK_ICU\n| AX_CHECK_JAVA_HOME\n| AX_CHECK_JAVA_PLUGIN\n| AX_CHECK_JUNIT\n| AX_CHECK_LIBRARY\n| AX_CHECK_LINK_FLAG\n| AX_CHECK_MYSQLR\n| AX_CHECK_MYSQL_DB\n| AX_CHECK_MYSQL\n| AX_CHECK_OFF64_T\n| AX_CHECK_OPENSSL\n| AX_CHECK_PAGE_ALIGNED_MALLOC\n| AX_CHECK_PATHFIND\n| AX_CHECK_PATHNAME_STYLE\n| AX_CHECK_PGSQL_DB\n| AX_CHECK_POSIX_REGCOMP\n| AX_CHECK_POSIX_SYSINFO\n| AX_CHECK_POSTGRES_DB\n| AX_CHECK_PREPROC_FLAG\n| AX_CHECK_RQRD_CLASS\n| AX_CHECK_SIGN\n| AX_CHECK_STRCSPN\n| AX_CHECK_STRFTIME\n| AX_CHECK_STRUCT_FOR\n| AX_CHECK_SYMBOL\n| AX_CHECK_SYS_SIGLIST\n| AX_CHECK_TYPEDEF\n| AX_CHECK_UNAME_SYSCALL\n| AX_CHECK_USER\n| AX_CHECK_VSCRIPT\n| AX_CHECK_X86_FEATURES\n| AX_CHECK_ZLIB\n| AX_CODE_COVERAGE\n| AX_COMPARE_VERSION\n| AX_COMPILER_FLAGS_CFLAGS\n| AX_COMPILER_FLAGS_CXXFLAGS\n| AX_COMPILER_FLAGS_GIR\n| AX_COMPILER_FLAGS_LDFLAGS\n| AX_COMPILER_FLAGS\n| AX_COMPILER_VENDOR\n| AX_COMPILER_VERSION\n| AX_COMPILE_CHECK_SIZEOF\n| AX_COMPUTE_RELATIVE_PATHS\n| AX_COMPUTE_STANDARD_RELATIVE_PATHS\n| AX_COND_WITH_LEVEL\n| AX_CONFIGURE_ARGS\n| AX_CONFIG_FEATURE\n| AX_COUNT_CPUS\n| AX_CPU_FREQ\n| AX_CPU_VENDOR\n| AX_CREATE_GENERIC_CONFIG\n| AX_CREATE_PKGCONFIG_INFO\n| AX_CREATE_STDINT_H\n| AX_CREATE_TARGET_H\n| AX_CVS\n| AX_CXX_BOOL\n| AX_CXX_COMPILE_STDCXX_0X\n| AX_CXX_COMPILE_STDCXX_11\n| AX_CXX_COMPILE_STDCXX_14\n| AX_CXX_COMPILE_STDCXX_17\n| AX_CXX_COMPILE_STDCXX\n| AX_CXX_COMPLEX_MATH_IN_NAMESPACE_STD\n| AX_CXX_CONST_CAST\n| AX_CXX_CPPFLAGS_STD_LANG\n| AX_CXX_CXXFLAGS_STD_LANG\n| AX_CXX_DEFAULT_TEMPLATE_PARAMETERS\n| AX_CXX_DELETE_METHOD\n| AX_CXX_DTOR_AFTER_ATEXIT\n| AX_CXX_DYNAMIC_CAST\n| AX_CXX_ENUM_COMPUTATIONS_WITH_CAST\n| AX_CXX_ENUM_COMPUTATIONS\n| AX_CXX_ERASE_ITERATOR_TYPE\n| AX_CXX_EXCEPTIONS\n| AX_CXX_EXPLICIT_INSTANTIATIONS\n| AX_CXX_EXPLICIT_TEMPLATE_FUNCTION_QUALIFICATION\n| AX_CXX_EXPLICIT\n| AX_CXX_EXTERN_TEMPLATE\n| AX_CXX_FULL_SPECIALIZATION_SYNTAX\n| AX_CXX_FUNCTION_NONTYPE_PARAMETERS\n| AX_CXX_FUNCTION_TRY_BLOCKS\n| AX_CXX_GCC_ABI_DEMANGLE\n| AX_CXX_GNUCXX_HASHMAP\n| AX_CXX_HAVE_BAD_FUNCTION_CALL\n| AX_CXX_HAVE_BIND\n| AX_CXX_HAVE_BIT_AND\n| AX_CXX_HAVE_BIT_OR\n| AX_CXX_HAVE_BIT_XOR\n| AX_CXX_HAVE_COMPLEX_MATH1\n| AX_CXX_HAVE_COMPLEX_MATH2\n| AX_CXX_HAVE_COMPLEX\n| AX_CXX_HAVE_CREF\n| AX_CXX_HAVE_EMPTY_IOSTREAM\n| AX_CXX_HAVE_EXT_HASH_MAP\n| AX_CXX_HAVE_EXT_HASH_SET\n| AX_CXX_HAVE_EXT_SLIST\n| AX_CXX_HAVE_FREEZE_SSTREAM\n| AX_CXX_HAVE_FUNCTION\n| AX_CXX_HAVE_HASH\n| AX_CXX_HAVE_IEEE_MATH\n| AX_CXX_HAVE_IS_BIND_EXPRESSION\n| AX_CXX_HAVE_IS_PLACEHOLDER\n| AX_CXX_HAVE_KOENIG_LOOKUP\n| AX_CXX_HAVE_LONG_LONG_FOR_IOSTREAM\n| AX_CXX_HAVE_MEM_FN\n| AX_CXX_HAVE_NUMERIC_LIMITS\n| AX_CXX_HAVE_PLACEHOLDERS\n| AX_CXX_HAVE_REFERENCE_WRAPPER\n| AX_CXX_HAVE_REF\n| AX_CXX_HAVE_SSTREAM\n| AX_CXX_HAVE_STD\n| AX_CXX_HAVE_STL\n| AX_CXX_HAVE_STRING_PUSH_BACK\n| AX_CXX_HAVE_SYSTEM_V_MATH\n| AX_CXX_HAVE_VALARRAY\n| AX_CXX_HAVE_VECTOR_AT\n| AX_CXX_HEADER_PRE_STDCXX\n| AX_CXX_HEADER_STDCXX_0X\n| AX_CXX_HEADER_STDCXX_98\n| AX_CXX_HEADER_STDCXX_TR1\n| AX_CXX_HEADER_TR1_UNORDERED_MAP\n| AX_CXX_HEADER_TR1_UNORDERED_SET\n| AX_CXX_HEADER_UNORDERED_MAP\n| AX_CXX_HEADER_UNORDERED_SET\n| AX_CXX_LDFLAGS_STD_LANG\n| AX_CXX_MEMBER_CONSTANTS\n| AX_CXX_MEMBER_TEMPLATES_OUTSIDE_CLASS\n| AX_CXX_MEMBER_TEMPLATES\n| AX_CXX_MUTABLE\n| AX_CXX_NAMESPACES\n| AX_CXX_NAMESPACE_STD\n| AX_CXX_NEW_FOR_SCOPING\n| AX_CXX_OLD_FOR_SCOPING\n| AX_CXX_PARTIAL_ORDERING\n| AX_CXX_PARTIAL_SPECIALIZATION\n| AX_CXX_REINTERPRET_CAST\n| AX_CXX_RESTRICT_THIS\n| AX_CXX_RTTI\n| AX_CXX_RVALUE_REFERENCES\n| AX_CXX_STATIC_CAST\n| AX_CXX_STLPORT_HASHMAP\n| AX_CXX_TEMPLATES_AS_TEMPLATE_ARGUMENTS\n| AX_CXX_TEMPLATES\n| AX_CXX_TEMPLATE_KEYWORD_QUALIFIER\n| AX_CXX_TEMPLATE_QUALIFIED_BASE_CLASS\n| AX_CXX_TEMPLATE_QUALIFIED_RETURN_TYPE\n| AX_CXX_TEMPLATE_SCOPED_ARGUMENT_MATCHING\n| AX_CXX_TYPENAME\n| AX_CXX_USE_NUMTRAIT\n| AX_CXX_VAR_PRETTYFUNC\n| AX_CXX_VERBOSE_TERMINATE_HANDLER\n| AX_CZMQ\n| AX_C_ARITHMETIC_RSHIFT\n| AX_C_COMPILE_VALUE\n| AX_C_DECLARE_BLOCK\n| AX_C_FLOAT_WORDS_BIGENDIAN\n| AX_C_LONG_LONG\n| AX_C_REFERENCEABLE_PASSED_VA_LIST\n| AX_C_VAR_FUNC\n| AX_C___ATTRIBUTE__\n| AX_DECL_WCHAR_MAX\n| AX_DEFINE_INTEGER_BITS\n| AX_DEFINE_SUB_PATH\n| AX_DIRNAME\n| AX_DIST_MSI\n| AX_DIST_RPM\n| AX_DLL_STRING\n| AX_ELISP\n| AX_ENABLE_BUILDDIR\n| AX_EXECINFO\n| AX_EXPAND_PREFIX\n| AX_EXTEND_SRCDIR\n| AX_EXTRA_DIST\n| AX_EXT_CHECK_HEADER\n| AX_EXT_HAVE_LIB\n| AX_EXT\n| AX_F77_CMAIN_FFLAGS\n| AX_F90_HEADER\n| AX_F90_INTERNAL_HEADMOD\n| AX_F90_LIBRARY_SETUP\n| AX_F90_LIBRARY\n| AX_F90_MODULE_EXTENSION\n| AX_F90_MODULE_FLAG\n| AX_F90_MODULE\n| AX_FC_CHECK_DEFINE\n| AX_FILE_ESCAPES\n| AX_FIND_HAMCREST\n| AX_FIND_JUNIT\n| AX_FIND_SCALA_STDLIB\n| AX_FORCEINLINE\n| AX_FUNC_ACCEPT_ARGTYPES\n| AX_FUNC_GETOPT_LONG\n| AX_FUNC_MEMMOVE\n| AX_FUNC_MKDIR\n| AX_FUNC_POSIX_MEMALIGN\n| AX_FUNC_SNPRINTF\n| AX_FUNC_WHICH_GETHOSTBYNAME_R\n| AX_FUNC_WHICH_GETSERVBYNAME_R\n| AX_GCC_ARCHFLAG\n| AX_GCC_BUILTIN\n| AX_GCC_CONST_CALL\n| AX_GCC_FUNC_ATTRIBUTE\n| AX_GCC_LIBGCC_EH\n| AX_GCC_LIBSUPCXX\n| AX_GCC_LIB\n| AX_GCC_MALLOC_CALL\n| AX_GCC_VAR_ATTRIBUTE\n| AX_GCC_WARN_UNUSED_RESULT\n| AX_GCC_X86_AVX_XGETBV\n| AX_GCC_X86_CPUID\n| AX_GCC_X86_CPU_SUPPORTS\n| AX_GENERATE_CHANGELOG\n| AX_GNU_AUTOTEST\n| AX_HAVE_ADNS\n| AX_HAVE_EPOLL\n| AX_HAVE_POLL\n| AX_HAVE_QT\n| AX_HAVE_SELECT\n| AX_INCLUDE_STRCASECMP\n| AX_INSTALL_FILES\n| AX_INT128\n| AX_IS_RELEASE\n| AX_JAVA_CHECK_CLASS\n| AX_JAVA_OPTIONS\n| AX_JNI_INCLUDE_DIR\n| AX_LAPACK\n| AX_LIBGCJ_JAR\n| AX_LIBTOOLIZE_CFLAGS\n| AX_LIB_BEECRYPT\n| AX_LIB_CGAL_CORE\n| AX_LIB_CRYPTO\n| AX_LIB_CURL\n| AX_LIB_EV\n| AX_LIB_EXPAT\n| AX_LIB_FIREBIRD\n| AX_LIB_GCRYPT\n| AX_LIB_GDAL\n| AX_LIB_HDF5\n| AX_LIB_ID3\n| AX_LIB_LIBKML\n| AX_LIB_METIS\n| AX_LIB_MYSQLCPPCONN\n| AX_LIB_MYSQL\n| AX_LIB_NETCDF4\n| AX_LIB_NETTLE\n| AX_LIB_NOKALVA\n| AX_LIB_ORACLE_OCCI\n| AX_LIB_ORACLE_OCI\n| AX_LIB_ORBIT2\n| AX_LIB_POSTGRESQL\n| AX_LIB_READLINE\n| AX_LIB_SAMTOOLS\n| AX_LIB_SOCKET_NSL\n| AX_LIB_SQLITE3\n| AX_LIB_TABIX\n| AX_LIB_TAGLIB\n| AX_LIB_TRACE\n| AX_LIB_UPNP\n| AX_LIB_WAD\n| AX_LIB_XALAN\n| AX_LIB_XERCES\n| AX_LIB_XML_SECURITY\n| AX_LLVM\n| AX_LUAROCKS_ROCK\n| AX_LUA\n| AX_MAINTAINER_MODE_AUTO_SILENT\n| AX_MISSING_PROG\n| AX_MPIP\n| AX_MPI\n| AX_NEED_AWK\n| AX_NORMALIZE_PATH\n| AX_NOT_ENABLE_FRAME_POINTER\n| AX_NUMERIC_NAMEDLEVEL\n| AX_OPEN62541_CHECK_H\n| AX_OPEN62541_CHECK_LIB\n| AX_OPEN62541_PATH\n| AX_OPENMP\n| AX_PATCH_LIBTOOL_CHANGING_CMDS_IFS\n| AX_PATH_BDB\n| AX_PATH_GENERIC\n| AX_PATH_LIB_PCRE\n| AX_PATH_MILTER\n| AX_PATH_MISSING\n| AX_PERL_EXT_FLAGS\n| AX_PERL_EXT\n| AX_PERL_MODULE_VERSION\n| AX_PGSQL_PRIV_ROOT\n| AX_PKG_CHECK_MODULES\n| AX_PKG_MICO\n| AX_PKG_SWIG\n| AX_PREFIX_CONFIG_H\n| AX_PREPEND_FLAG\n| AX_PRINTF_SIZE_T\n| AX_PRINT_TO_FILE\n| AX_PROG_APACHE\n| AX_PROG_BISON_VERSION\n| AX_PROG_BISON\n| AX_PROG_CC_CHAR_SUBSCRIPTS\n| AX_PROG_CC_FOR_BUILD\n| AX_PROG_CC_MPI\n| AX_PROG_CP_S\n| AX_PROG_CRONTAB\n| AX_PROG_CXX_FOR_BUILD\n| AX_PROG_CXX_MPI\n| AX_PROG_DATE\n| AX_PROG_DOTNETCORE_VERSION\n| AX_PROG_DOXYGEN\n| AX_PROG_EMACS\n| AX_PROG_F77_MPI\n| AX_PROG_FASM_OPT\n| AX_PROG_FASM\n| AX_PROG_FC_MPI\n| AX_PROG_FIG2DEV\n| AX_PROG_FLEX_VERSION\n| AX_PROG_FLEX\n| AX_PROG_GJS\n| AX_PROG_GUILE_VERSION\n| AX_PROG_HAXE_VERSION\n| AX_PROG_HELP2MAN\n| AX_PROG_HLA_OPT\n| AX_PROG_HLA\n| AX_PROG_HTTPD\n| AX_PROG_JAR\n| AX_PROG_JAVAC_WORKS\n| AX_PROG_JAVAC\n| AX_PROG_JAVADOC\n| AX_PROG_JAVAH\n| AX_PROG_JAVA_CC\n| AX_PROG_JAVA_WORKS\n| AX_PROG_JAVA\n| AX_PROG_MASM_OPT\n| AX_PROG_MASM\n| AX_PROG_MD5SUM\n| AX_PROG_MODPROBE\n| AX_PROG_MYSQLADMIN\n| AX_PROG_MYSQLD\n| AX_PROG_MYSQLIMPORT\n| AX_PROG_MYSQLSHOW\n| AX_PROG_MYSQL\n| AX_PROG_NASM_OPT\n| AX_PROG_NASM\n| AX_PROG_PERL_MODULES\n| AX_PROG_PERL_VERSION\n| AX_PROG_PGCLIENT\n| AX_PROG_PYTHON_VERSION\n| AX_PROG_RUBY_VERSION\n| AX_PROG_SCALAC\n| AX_PROG_SCALA\n| AX_PROG_SCP\n| AX_PROG_SPLINT\n| AX_PROG_SSH\n| AX_PROG_TASM_OPT\n| AX_PROG_TASM\n| AX_PROG_TCL\n| AX_PROG_XSLTPROC\n| AX_PROG_YASM_OPT\n| AX_PROG_YASM\n| AX_PROTOTYPE_ACCEPT\n| AX_PROTOTYPE_GETSOCKNAME\n| AX_PROTOTYPE_SETSOCKOPT\n| AX_PROTOTYPE\n| AX_PTHREAD\n| AX_PYTHON_CONFIG_VAR\n| AX_PYTHON_DEVEL\n| AX_PYTHON_EMBED\n| AX_PYTHON_MODULE_VERSION\n| AX_PYTHON_MODULE\n| AX_PYTHON\n| AX_RECURSIVE_EVAL\n| AX_REQUIRE_DEFINED\n| AX_REQUIRE_ONE_FUNC\n| AX_RESTORE_FLAGS_WITH_PREFIX\n| AX_RESTORE_FLAGS\n| AX_RPM_INIT\n| AX_RUBY_DEVEL\n| AX_RUBY_EXT\n| AX_R_PACKAGE\n| AX_SAVE_FLAGS_WITH_PREFIX\n| AX_SAVE_FLAGS\n| AX_SET_DEFAULT_PATHS_SYSTEM\n| AX_SHORT_SLEEP\n| AX_SILENT_MODE\n| AX_SIP_DEVEL\n| AX_SPEC_FILE\n| AX_SPEC_PACKAGE_VERSION\n| AX_SPLIT_VERSION\n| AX_STRINGS_STRCASECMP\n| AX_STRING_STRCASECMP\n| AX_STRUCT_SEMUN\n| AX_SUBDIRS_CONFIGURE\n| AX_SUBDIR_FILES\n| AX_SUBST_WITH\n| AX_SWIG_ENABLE_CXX\n| AX_SWIG_MULTI_MODULE_SUPPORT\n| AX_SWIG_PYTHON\n| AX_SWITCH_FLAGS\n| AX_SYSV_IPC\n| AX_SYS_DEV_POLL\n| AX_SYS_LARGEFILE_SENSITIVE\n| AX_SYS_PERLSHARPBANG\n| AX_SYS_WEAK_ALIAS\n| AX_TLS\n| AX_TRILINOS_AMESOS\n| AX_TRILINOS_BASE\n| AX_TRILINOS_EPETRAEXT_HDF5\n| AX_TRILINOS_EPETRAEXT\n| AX_TRILINOS_EPETRA\n| AX_TRILINOS_RTOP\n| AX_TRILINOS_RYTHMOS\n| AX_TRILINOS_TEUCHOS\n| AX_TRILINOS_THYRA_EPETRAEXT\n| AX_TRILINOS_THYRA_EPETRA\n| AX_TRILINOS_THYRA\n| AX_TRY_AWK_ANYOUT\n| AX_TRY_AWK_EXPOUT\n| AX_TRY_COMPILE_JAVA\n| AX_TRY_RUN_JAVA\n| AX_TYPE_SOCKLEN_T\n| AX_UPLOAD\n| AX_VALGRIND_CHECK\n| AX_VAR_POP\n| AX_VAR_PUSH\n| AX_VAR_TIMEZONE_EXTERNALS\n| AX_VERY_NICE\n| AX_WARNING_DEFAULT_ACLOCALDIR\n| AX_WARNING_DEFAULT_PKGCONFIG\n| AX_WINT_T\n| AX_WITH_APXS\n| AX_WITH_BUILD_PATH\n| AX_WITH_CURSES_EXTRA\n| AX_WITH_CURSES\n| AX_WITH_DMALLOC\n| AX_WITH_MPATROL\n| AX_WITH_PROG\n| AX_XERCESC\n| AX_XSDCXX\n| AX_XTRA_CLASSPATH\n| AX_ZMQ\n| AX_ZONEINFO\n) (?:(?=\\()|\\b)",
          beginCaptures: {1: {name: 'keyword.operator.macro.$1.m4'}},
          contentName: 'meta.parameters.m4',
          end: '(?<=\\))|\\G(?!\\()',
          name: 'meta.macro.m4',
          patterns: [{include: '#macro-innards'}]
        }
      ]
    },
    'macro-innards': {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.bracket.round.m4'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.bracket.round.m4'}
          },
          patterns: [{include: '#macro-innards'}]
        },
        {include: 'etc#comma'},
        {include: '#variables'},
        {include: '#arithmetic'},
        {include: '#string-bracketed'},
        {include: '#quadrigraph'},
        {include: '#main'},
        {include: '#string-unquoted'}
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#dnl'},
        {include: '#macro'},
        {include: '#string-bracketed'}
      ]
    },
    quadrigraph: {
      match: '@(?:<:|:>|S\\||%:|{:|:}|&t)@',
      name: 'constant.character.quadrigraph.m4'
    },
    'string-asymmetric': {
      begin: '`',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.asymmetric.begin.m4'}
      },
      end: "'",
      endCaptures: {
        0: {name: 'punctuation.definition.string.asymmetric.end.m4'}
      },
      name: 'string.quoted.double.other.asymmetric.m4',
      patterns: [{include: '#string-asymmetric'}, {include: '#variables'}]
    },
    'string-bracketed': {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.square.bracket.begin.m4'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.string.square.bracket.end.m4'}
      },
      name: 'constant.other.quoted.m4',
      patterns: [
        {include: '#string-bracketed'},
        {include: '#variables'},
        {include: '#quadrigraph'},
        {include: '#macro'}
      ]
    },
    'string-unquoted': {
      captures: {
        0: {patterns: [{include: '#variables'}, {include: '#quadrigraph'}]}
      },
      match: '[^\\s\\[\\](),]+',
      name: 'constant.other.unquoted.m4'
    },
    variables: {
      captures: {1: {name: 'punctuation.definition.variable.m4'}},
      match: '(\\$)[0-9#@*]',
      name: 'variable.parameter.m4'
    }
  },
  scopeName: 'source.m4'
}

export default grammar
