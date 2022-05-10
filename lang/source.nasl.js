// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tenable/sublimetext-nasl>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.nasl', '.inc'],
  names: ['nasl'],
  patterns: [
    {include: '#line_comment'},
    {
      begin: '\\s*/\\*',
      captures: {0: {name: 'punctuation.definition.comment.nasl'}},
      end: '\\*/',
      name: 'comment.block.nasl'
    },
    {
      begin: '^=',
      captures: {0: {name: 'punctuation.definition.comment.nasl'}},
      end: '^=cut',
      name: 'comment.block.documentation.nasl'
    },
    {
      match: '\\b(if|else|while|for|return|foreach|break|continue)\\b',
      name: 'keyword.control.nasl'
    },
    {begin: '"', end: '"', name: 'string.quoted.double.nasl'},
    {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.nasl',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.nasl'}]
    },
    {
      begin:
        '(^\\s*)(public|private)?\\s+(function)(?:\\s+|(\\s*&\\s*))(?:|([a-zA-Z0-9_~]+))\\s*(\\()',
      captures: {
        1: {name: 'storage.type.modifier.nasl'},
        2: {name: 'storage.type.function.nasl'},
        3: {name: 'storage.type.method.nasl'},
        4: {name: 'support.function.magic.nasl'},
        5: {name: 'entity.name.function.nasl'},
        6: {name: 'punctuation.definition.parameters.begin.nasl'}
      },
      end: '\\)',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.nasl'}},
      name: 'meta.function.nasl'
    },
    {
      begin: '^\\s*(object)\\s+([a-zA-Z0-9_]+)',
      captures: {
        1: {name: 'storage.type.modifier.nasl'},
        2: {name: 'entity.name.class.nasl'}
      },
      end: '\\{',
      name: 'meta.class.nasl'
    },
    {match: '\\b(local_var|global_var|var)\\b', name: 'storage.type.nasl'},
    {
      match:
        '\\b(NULL|true|false|TRUE|FALSE|BYTE_ORDER_LITTLE_ENDIAN|PRINTER_ENUM_SHARED|PRINTER_ENUM_NETWORK|PRINTER_ENUM_NAME|PRINTER_ENUM_LOCAL|_FCT_ANON_ARGS|ACT_GATHER_INFO|AUDIT_WEB_APP_NOT_AFFECTED|AUDIT_SOCK_FAIL|ACT_DESTRUCTIVE_ATTACK|ACT_ATTACK|ENCAPS_TLSv1)\\b',
      name: 'constant.language.nasl'
    },
    {
      match:
        '\\b(display|exit|function|substr|isnull|raw_dword|crap|strlen|get_dword|mkdword|cstring|dump|mkpad|string|include|set_byte_order|isnull|strlen|get_string|get_port_state|open_sock_tcp|mkbyte|mkword|raw_string|query_scratchpad)\\b',
      name: 'keyword.functions.standard'
    },
    {
      match:
        '\\b(dce_rpc_pipe_request|dce_rpc_parse_response|dce_rpc_pipe_request|bind_pipe)\\b',
      name: 'keyword.functions.smbinternal'
    },
    {
      match:
        '\\b(get_kb_item|kb_smb_name|kb_smb_transport|kb_smb_login|kb_smb_password|kb_smb_domain|get_kb_item_or_exit)\\b',
      name: 'keyword.functions.kb'
    },
    {
      match: '\\b(NetUseAdd|session_init|NetUseDel|session_get_hostname)\\b',
      name: 'keyword.functions.smb'
    },
    {
      match: '\\b(security_hole|security_note|security_report)\\b',
      name: 'keyword.functions.reporting'
    },
    {
      match:
        '\\b(script_name|script_version|script_timeout|script_description|script_copyright|script_summary|script_category|script_family|xscript_end_attributes|xscript_cvs_date|script_dependencie|script_dependencies|script_require_keys|script_require_ports|script_require_udp_ports|script_exclude_keys|xscript_set_attribute|script_add_preference|script_get_preference|script_get_preference_file_content|script_get_preference_file_location|script_id|script_cve_id|script_bugtraq_id|script_xref|get_preference|safe_checks|replace_kb_item|set_kb_item|get_kb_item|get_kb_fresh_item|get_kb_list|security_warning|security_note|security_hole|scanner_add_port|scanner_status|scanner_get_port|open_sock_tcp|open_sock_udp|open_priv_sock_tcp|open_priv_sock_udp|recv|recv_line|send|close|join_multicast_group|leave_multicast_group|get_source_port|cgibin|is_cgi_installed|http_open_socket|http_head|http_get|http_post|http_delete|http_put|http_close_socket|get_host_name|get_host_ip|same_host|get_host_open_port|get_port_state|get_tcp_port_state|get_udp_port_state|islocalhost|islocalnet|get_port_transport|this_host|this_host_name|string|raw_string|strcat|display|ord|hex|hexstr|strstr|ereg|ereg_replace|egrep|eregmatch|match|substr|insstr|tolower|toupper|crap|strlen|split|chomp|int|stridx|str_replace|make_list|make_array|keys|max_index|sort|unixtime|gettimeofday|localtime|mktime|open_sock_kdc|start_denial|end_denial|dump_ctxt|typeof|exit|rand|usleep|sleep|isnull|defined_func|forge_ip_packet|get_ip_element|set_ip_elements|insert_ip_options|dump_ip_packet|forge_tcp_packet|get_tcp_element|set_tcp_elements|dump_tcp_packet|tcp_ping|forge_udp_packet|get_udp_element|set_udp_elements|dump_udp_packet|forge_icmp_packet|get_icmp_element|forge_igmp_packet|send_packet|pcap_next|send_capture|MD2|MD4|MD5|SHA|SHA1|RIPEMD160|HMAC_MD2|HMAC_MD5|HMAC_SHA|HMAC_SHA1|HMAC_DSS|HMAC_RIPEMD160|dh_generate_key|bn_random|bn_cmp|dh_compute_key|rsa_public_decrypt|bf_cbc_encrypt|bf_cbc_decrypt|dsa_do_verify|pem_to_rsa|pem_to_dsa|rsa_sign|dsa_do_sign|pread|find_in_path|fread|fwrite|unlink|get_tmp_dir|file_stat|file_open|file_close|file_read|file_write|file_seek|prompt|get_local_mac_addrs|func_has_arg|socket_get_error|big_endian|socket_ready|socket_negotiate_ssl|socket_pending|fill_list|zlib_compress|zlib_decompress|fork|bsd_byte_ordering|inject_packet|get_local_mac_addr|get_gw_mac_addr|prompt_password|disable_all_plugins|enable_plugin_family|disable_plugin_family|enable_plugin_id|disable_plugin_id|rm_kb_item|get_host_raw_ip|this_host_raw|aes_cbc_encrypt|aes_cbc_decrypt|tripledes_cbc_encrypt|tripledes_cbc_decrypt|file_is_signed|bind_sock_tcp|bind_sock_udp|sock_accept|make_path|start_trace|stop_trace|rsa_public_encrypt|rsa_private_encrypt|rsa_private_decrypt|bn_dec2raw|bn_raw2dec|bn_hex2raw|bn_raw2hex|tcp_scan|socketpair|syn_scan|platform|xmlparse|preg|pgrep|pregmatch|udp_scan|preg_replace|get_global_kb_list|set_global_kb_item|get_global_kb_item|open_sock2|mutex_lock|mutex_unlock|uint|aes_ctr_encrypt|aes_ctr_decrypt|set_mem_limits|report_xml_tag|script_set_attribute|script_end_attributes|datalink|link_layer|sendto|recvfrom|bpf_open|bpf_close|bpf_next|bn_add|bn_sub|bn_mul|bn_sqr|bn_div|bn_mod|bn_nnmod|bn_mod_add|bn_mod_sub|bn_mod_mul|bn_mod_sqr|bn_exp|bn_mod_exp|bn_gcd|readdir|ssl_accept|resolv|open_sock_proxy|get_peer_name|nessus_get_dir|rename|get_sock_name|shutdown|debug_exit|aes_cfb_encrypt|aes_cfb_decrypt|routethrough|socket_set_timeout|file_mtime|mkdir|rmdir|ssl_accept2|gzip_compress|deflate_compress|thread_create|wait|getpid|query_report|can_query_report|xslt_apply_stylesheet|platform_ptr_size|kill|nasl_level|socket_get_secure_renegotiation_support|SHA224|SHA256|SHA512|HMAC_SHA224|HMAC_SHA256|HMAC_SHA512|server_authenticate|server_is_user_admin|server_add_user|server_delete_user|server_user_chpasswd|server_list_users|server_feed_type|server_generate_token|server_validate_token|server_delete_token|server_get_plugin_list|server_get_plugin_preferences_list|server_get_plugin_description|server_get_preferences|server_do_scan|server_scan_list|server_list_reports|server_report_get_host_list|server_report_get_port_list|server_report_get_port_details|server_list_policies|server_delete_policy|server_rename_policy|server_add_policy|server_get_plugin_list_family|server_report_get_tags|server_scan_ctrl|server_report_delete|server_apply_filter_to_report|server_restart|server_import_nessus_file|server_get_plugins_md5|server_get_load|server_list_policies_summaries|server_get_plugin_list_matching_families|server_user_exists|server_import_policy_nessus_file|server_copy_policy|socket_redo_ssl_handshake|socket_reset_ssl|server_add_ticket|server_edit_ticket|server_delete_ticket|server_get_tickets|server_get_status|server_master_unlock|server_get_plugins_descriptions|server_get_policy|server_do_scan_as_user|server_scan_get_status|server_loading_progress|server_query_report|server_report_get_trail_details|acap_close|acap_command|acap_get_tag|acap_increment_tag|acap_open|acap_set_tag|acap_starttls|acquired_ticket |activex_check_fileversion|activex_end|activex_get_filename|activex_get_fileversion|activex_get_killbit|activex_get_name|activex_init|activex_is_installed|add_authority_information_access|add_authority_key_identifier|add_basic_constraints|add_certificate_policies|add_crl_distribution_points|add_extended_key_usage|add_extension_data|add_general_name|add_hex_string|add_hex_string_nl|add_install|add_key_usage|add_overflow|add_port_in_list|add_rdn_seq|add_rdn_seq_nl|_address_to_raw|add_string|add_string_nl|add_subject_alternative_name|add_subject_key_identifier|AFPLogin|aix_check_patch|aix_report_add|aix_report_get|already_known_flaw|answers_differ|apache_module_is_installed|ARCFOUR |arcfour_setkey |arp_ping|ascii |ascii2ebcdic|ascii2utf16LE|base64|base64_code|base64decode|base64_decode|beginning_of_response|ber_decode |ber_decode_oid |ber_encode |ber_get_addr |ber_get_counter32 |ber_get_data |ber_get_int |ber_get_octet_string |ber_get_oid |ber_get_response_pdu |ber_get_sequence |ber_get_timeticks |ber_length |ber_put_get_next_pdu |ber_put_get_pdu |ber_put_int |ber_put_null |ber_put_octet_string |ber_put_oid |ber_put_sequence |ber_put_set_pdu |bf_F|bind_pipe |blob_to_pem|blowfish_decipher |blowfish_decrypt |blowfish_encipher |blowfish_encrypt |blowfish_initialize |broken_asp_interpretor|broken_php_interpretor|broken_www_interpretor|bsal_getbyte|bsal_getdword|bsal_getword|bsal_length|bsal_new|bsal_read|buffer_parameter |build_url|build_url_data|can_host_asp|can_host_php|cdr_get_byte_order|cdr_marshal_long|cdr_marshal_num|cdr_marshal_octet|cdr_marshal_short|cdr_marshal_string|cdr_marshal_wstring|cdr_set_byte_order|cdr_unmarshal_long|cdr_unmarshal_num|cdr_unmarshal_octet|cdr_unmarshal_short|cdr_unmarshal_string|cdr_unmarshal_wstring|cert_get_ext|cert_report|cgi_dirs|check_account|check_asa_release|check_gssapi_token |check_ios_matrix|check_jar_hotfix|check_junos|check_kerberos_response |check_model|check_oracle_patch|check_pattern|check_release|_check_telnet|check_version |check_win_dir_trav|check_win_dir_trav_ka|cipher_cmp|cipher_name|cipher_report|cipher_strength|class_name |class_parameter |clean_string|clear_cookiejar|client_hello|client_send_cert |CloseFile |CloseServiceHandle |CloseSession|cmp_addr_v|cmp_build|cmp_html|cmp_release|cmpv|cmp_version|compute_diff|ControlService |convert_all_time|convert_dword |convert_generalized_time|convert_time_to_sec |convert_utc_time|crc32|CreateFile |CreateService |create_uddi_xml |crypt|cstring |cvsdate2unixtime|cvss_vector_to_base_score|cvss_vector_to_temporal_score|date_cmp|dce_rpc |dce_rpc_alter_context |dce_rpc_auth3 |dce_rpc_bind |dce_rpc_connect |dce_rpc_ntlmssp_header |dce_rpc_parse_bind_ack |dce_rpc_parse_response |dce_rpc_pipe_request |dce_rpc_request |dce_rpc_sendrecv_request |deb_check|deb_report_add|deb_report_get|deb_str_cmp|debug_print|deb_ver_cmp|dec2hex|declare_broken_web_server|decode_file_directory_info|decode_kb_blob|decode_smb2|decode_uuid |decrypt|default_account_report|DeleteService |deprecated_version|der_decode |der_decode_asrep |der_decode_kdcrep |der_decode_oid |der_decode_tgsrep |der_encode |der_encode_apreq |der_encode_asreq |der_encode_boolean|der_encode_crypt |der_encode_enumerated|der_encode_filter|der_encode_int |der_encode_int32 |der_encode_kdcreq |der_encode_kdc_req_body |der_encode_list |der_encode_name |der_encode_negtokeninit |der_encode_octet_string |der_encode_oid |der_encode_padata |der_encode_paenc|der_encode_request |der_encode_sequence |der_encode_string |der_encode_tgsreq |der_encode_time |derive_keys|der_length |der_parse_bool |der_parse_data |der_parse_int |der_parse_list |der_parse_list_oid |der_parse_octet_string |der_parse_oid |der_parse_sequence |der_parse_spnego_init |der_parse_spnego_resp |DES |des_cbc_checksum |des_cbc_decrypt2|des_cbc_encrypt |des_cbc_encrypt2|des_cbc_md5_checksum |des_cbc_md5_decrypt |des_cbc_md5_encrypt |des_cbc_string_to_key |des_encrypt |dh_gen_key|dh_valid_key|difftime|disable_cookiejar|disable_cookiejar_autosave|disable_socket_ka|display|dns_comp_get|dns_split|dns_str_get|dns_str_to_query_txt|do_check_win_dir_trav|dos_status |DSI_GetDataLen|DSI_GetErrorCode|DSI_LastError|DSI_Packet|DSI_SendRecv|dump|dump_certificate|dump_cookiejar|dump_line_and_data|dump_table|dynamic_web_content|ebcdic2ascii|enable_cookiejar|enable_cookiejar_autosave|enable_keepalive|encode_char |encode_int |encode_kb_blob|encode_uuid |EnumServicesStatus |erase_cookie|erase_http_cookie|err_print|estimate_load|esx_check|esx_report_get|exec_cmd|exec_cmds|extract_asa_version|extract_pattern_from_resp|extract_sql_backend_from_kb|extract_structures |extract_version|filter_rh_inconstency|FindFile|FindFirstFile |FindFirstFile2|find_install|find_issuer_idx|FindNextFile |FindNextFile2|find_pattern|find_reason|fingerprint_cert|fingerprint_string|fixparity|fix_rel_location|fixup_rpm_list|format_dn|FPCloseVol|FPEnumerateExt2|FPEnumerateExt2Parse|FPGetSrvrParms|FPGetSrvrParmsParseReply|FPLogin|FPLogout|FPOpenVol|FPOpenVolParseReply|fqdn_resolv|freebsd_packages|ftp_authenticate|ftp_close|ftp_pasv|ftp_recv_data|ftp_recv_line|ftp_recv_listing|ftp_send_cmd|ftp_starttls|generate_uuid|generic_str_cmp|get_3digits_svc|get_any_http_cookie|get_backport_banner|get_bignum1|GetBundleVersionCmd|_GetBundleVersionCmd|getbyte|get_byte |GetCarbonVersionCmd|get_cgi_arg_list|get_cgi_arg_val_list|get_cgi_list|get_cgi_methods|get_checksum_type |get_data_size|get_dirs_from_kb|getdword|get_dword |GetFileSize |GetFileVersion |GetFileVersionEx |get_form_action_list|get_form_enctype_list|get_form_method_list|get_ftp_banner|get_ftp_port|get_header_command_code|get_header_dos_error_code|get_header_flags|get_header_flags2|get_header_nt_error_code|get_header_signature|get_header_tid|get_header_uid|get_http_banner|get_http_cookie|get_http_cookie_from_key|get_http_cookie_keys|get_http_cookies_names|get_http_page|get_http_port|get_imap_banner |get_install_from_kb|get_install_report|get_kb_banner|get_kb_blob|get_kb_item_or_exit|get_kb_list_or_exit|get_mysql_version|get_oracle_os|get_oracle_version|get_parity |get_php_version|get_pop3_banner |get_port_for_service|GetProductVersion|get_query_txt|get_qword|getqword_shift|get_read_timeout|get_registered_option |get_report|get_rpc_port|get_rpc_port2|get_rpc_port3|GetSecurityInfo |get_server_cert|get_server_public_key|get_service|GetService |get_service_banner_line|GetServiceDisplayName |get_sid |get_smb_data|get_smb_header|get_smb_parameters|get_smtp_banner|get_squid_banner|get_ssh_banner|get_ssh_error|get_ssh_server_version|get_ssh_supported_authentication|get_ssl_ports|GetStatus|getstring|get_string |get_string2 |get_telnet_banner|get_tested_ports|get_unknown_banner|get_unknown_banner2|get_unknown_svc|get_ver_type|get_vuln_report|get_win32_find_data_fileattributes |get_win32_find_data_filename |getword|get_word |giop_marshal_message|giop_marshal_request|giop_unmarshal_message|giop_unmarshal_reply|gssapi_ssh_get_mic |headers_split|heuristic_sig|_hex |hex2dec|hex2raw|_hex2raw|hex2raw2|hex_buf|hexdump |hexnumber|__hex_value|hive_int2str|_HMAC_SHA256|hotfix_add_report|hotfix_check_3rd_party|hotfix_check_dhcpserver_installed|hotfix_check_domain_controler|hotfix_check_excel_version|hotfix_check_exchange_installed|hotfix_check_fversion|hotfix_check_fversion_end|hotfix_check_fversion_init|hotfix_check_ie_version|hotfix_check_iis_installed|hotfix_check_nt_server|hotfix_check_office_version|hotfix_check_outlook_version|hotfix_check_powerpoint_version|hotfix_check_publisher_version|hotfix_check_server_core|hotfix_check_sp|hotfix_check_wins_installed|hotfix_check_word_version|hotfix_check_works_installed|hotfix_data_access_version|hotfix_get_commonfilesdir|hotfix_get_mssqldir|hotfix_get_officecommonfilesdir|hotfix_get_officeprogramfilesdir|hotfix_get_programfilesdir|hotfix_get_programfilesdirx86|hotfix_get_report|hotfix_get_systemroot|hotfix_ie_gt|hotfix_is_vulnerable|hotfix_missing|hotfix_path2share|hotfix_security_hole|hotfix_security_note|hotfix_security_warning|hpux_check_ctx |hpux_check_patch |hpux_installed |hpux_patch_installed|htonl|htons|http_40x|http_add_auth_to_req|http_check_authentication|http_check_remote_code|http_check_remote_code |http_clear_error|http_close_socket_ka|_http_close_socket_ka_only|http_cookies_style|HTTP_DES |HTTP_des_encrypt |http_disable_auth_scheme|http_disable_keep_alive|http_enable_auth_scheme|http_enable_keep_alive|http_error_msg|http_force_keep_alive|http_form_login|http_get_cache|http_get_read_timeout|http_head_part|http_incr_timeout_on_err|http_is_broken|http_is_dead|http_keepalive_check_connection|http_keepalive_enabled|http_keepalive_recv_body|http_keepalive_send_recv|http_last_sent_request|http_login_incr_count|http_login_release_lock|http_login_take_lock|http_mk_buffer_from_req|http_mk_delete_req|http_mk_get_req|http_mk_head_req|http_mk_post_req|http_mk_proxy_request|http_mk_put_req|http_mk_req|http_mk_trace_req|HTTP_NTLM_Hash |HTTP_NTLM_Response |http_open_sock_err|http_open_socket_ka|HTTP_permute |http_reauthenticate_if_needed|_http_recv|http_recv|http_recv3|http_recv_body|http_recv_headers2|http_recv_headers3|http_recv_length|http_redirect_with_get|http_reopen_socket|http_send_get_post|http_send_recv|http_send_recv3|http_send_recv_buf|_http_send_recv_once|http_send_recv_req|http_server_header|http_set_async_sock|HTTP_set_des_key |http_set_error|http_set_max_req_sz|http_set_read_timeout|http_store_dialog|http_strerror|HTTP_str_to_key |http_transient_error|http_uri_is_subpath|icmp|ICMP|icmp_checksum|icmp_get|icmp_set|iiop_unmarshal_profile|imap_close|imap_get_tag|imap_increment_tag|imap_is_response_ok|imap_read_tagged_response|imap_send_cmd|imap_set_tag|imap_starttls|index_by_name|inet_sum|info_send_cmd|init|init_cookiejar|init_crypto_data|init_esx_check|init_snmp |inject_poison|insert_icmp|int2|integer |inv8 |inverse |ior_destringify|ior_unmarshal|ip|ip6|ip6_get|ip6_set|ipaddr|ip_checksum|ip_csum|ip_dot2raw|ip_finish_insert_option|ip_get|ip_insert_option|ip_option|ip_raw2dot|ip_set|is_accessible_share|is_cgi_installed3|is_cgi_installed_ka|is_embedded_server|is_host_ip|is_known_extension|isolate_pattern|is_password_prompt|isprint |is_private_addr|is_registered_option|is_same_host|issameoid|is_self_signed|is_signed_by|is_sshd_bugged|isUnicode |is_valid_snmp_product|is_weak_key |join|_junos_ver_compare|kb_smb_domain|kb_smb_login|kb_smb_name|kb_smb_password|kb_smb_transport|kb_ssh_certificate|kb_ssh_client_ver|kb_ssh_host|kb_ssh_login|kb_ssh_passphrase|kb_ssh_password|kb_ssh_privatekey|kb_ssh_publickey|kb_ssh_realm|kb_ssh_transport|kerberos_checksum |kerberos_decrypt |kerberos_encrypt |kerberos_securityblob |kerberos_ssh |kerberostime|kex_packet|known_service|ldap_bind_request|ldap_extended_request|ldap_get_last_error|ldap_init|ldap_modify_request|ldap_parse_bind_response|ldap_parse_enumerated|ldap_parse_extended_response|ldap_parse_modify_response|ldap_parse_response|ldap_parse_search_entry|ldap_parse_search_object_name|ldap_recv|ldap_recv_next|ldap_request|ldap_request_sendrecv|ldap_search_request|ldap_set_error|ldap_starttls|len_bn|len_long|LEword|line2string |list|list_uniq|LM_Hash |LM_Response |LMv2_Response |load_CA|load_cookiejar|load_tgs_session |LsaClose |LsaEnumerateAccountsWithUserRight |LsaLookupNames |LsaLookupSid |LsaOpenPolicy |LsaQueryDomainInformationPolicy |LsaQueryInformationPolicy |LsaQuerySecurityObject |lshift |mac_compute|maj_cmp|maj_vers_cmp|_make_hashset|make_service_list|merge|mkbedword|mkbyte|mk_cookie_header|mkdate|mkdns|mkdword|mkicmp|mkip|mkip6|mkipaddr|mkLEword|mklist|mk_list|mk_list_silent|mk_list_silent3|mkpacket|mkpad|mk_query|mk_query_txt|mktcp|mkudp|mkword|month_num_by_name|_msdos_time|ms_since_midnight|mul_overflow|mult_str|my_encode|mysql_check_version|mysql_close|mysql_get_caps|mysql_get_lang|mysql_get_last_error|mysql_get_null_string|mysql_get_protocol|mysql_get_salt|mysql_get_scramble|mysql_get_scramble323|mysql_get_socket|mysql_get_status|mysql_get_thread_id|mysql_get_variant|mysql_get_version|mysql_hash_password|mysql_init|mysql_is_error_packet|mysql_is_ok_packet|mysql_is_proto41_supported|mysql_login|mysql_open|mysql_parse_error_packet|mysql_recv_packet|mysql_send_packet|mysql_ver_cmp|netbios_encode|netbios_header |netbios_name|netbios_packet |netbios_sendrecv |netbios_session_request |NetEnum |NetGetInfo |NetGroupGetUsers |NetLocalGroupGetMembers |netop_banner_items|netop_check_and_add_banner|netop_each_found|netop_kb_derive|netop_log_detected|netop_product_ident|netop_spacepad|netop_zeropad|NetServerEnum |NetServerGetInfo |NetSessionEnum |NetShareEnum |NetUseAdd |NetUseDel |NetUserGetGroups |NetUserGetInfo |NetUserGetLocalGroups |NetUserGetModals |NetWkstaGetInfo |NetWkstaUserEnum |nfs_cwd|nfs_mount|nfs_readdir|nfs_umount|nntp_article|nntp_auth|nntp_cmd|nntp_connect|nntp_make_id|nntp_post|nntp_recv|nntp_send|nntp_starttls|nondigit_vers_cmp|normalize_url_path|normalize_value|NTLM_Hash |NTLM_Response |ntlmssp_auth_securityblob |ntlmssp_data |ntlmssp_negotiate_securityblob |ntlmssp_parse_challenge |ntlmssp_parse_response |NTLMv2_Hash |NTLMv2_Response |ntohl|ntohs|ntol|ntos|nt_status |null_length |_obj_cmp|obj_cmp|_obj_cmp_array|obj_random|_obj_random_array|_obj_random_data|_obj_random_string|on_exit|open|OpenSCManager |OpenService |OpenSession|open_sock_ssl|openssl_check_version|openssl_ver_cmp|os_name_split|packet_payload|packet_split|packettype|padsz|parse_access_description|parse_addrlist|parse_algorithm_identifier|parse_attribute_type_and_value|parse_authority_information_access|parse_authority_key_identifier|parse_basic_constraints|parse_cert_chain|parse_certificate_comment|parse_certificate_policies|parse_crl_distribution_points|parse_dacl |parse_der_cert|parse_distribution_point|parse_extended_key_usage|parse_extension|parse_extensions|parse_flags|parse_general_name|parse_general_names|parse_http_headers|parse_key_usage|parse_lsalookupsid |parse_pdacl |parse_pkg_name|parse_policy_information|parse_policy_qualifier_information|parse_private_key|parse_publickey_info|parse_rdn_sequence|parse_rpm_name|parse_security_descriptor |parse_setcookie_header|parse_subject_alternative_name|parse_subject_key_identifier|parse_tbs_certificate|parse_time|password_to_key|patch_installed|patch_release_number|payload|pem_to_blob|permute |php_ver_match|ping_host4|pkg_cmp|pkg_op|pkg_op_match|pkg_report_get|pkg_test|pop3_close|pop3_is_response_ok|pop3_read_response|pop3_send_cmd|pop3_starttls|pow2|pstring|putbignum|putbignum1|putstring|qpkg_check|qpkg_cmp|qpkg_report_add|qpkg_report_get|qpkg_ver_cmp|QueryServiceObjectSecurity |QueryServiceStatus |_rand64|rand_str|raw_byte |raw_dword |raw_int16|raw_int32|raw_int8|raw_ntlmssp_auth_securityblob |raw_ntlmssp_negotiate |raw_ntlmssp_parse_challenge |raw_qword|_raw_to_address|raw_word |rc4_hmac_checksum |rc4_hmac_decrypt |rc4_hmac_encrypt |rc4_hmac_string_to_key |read|read_dword |ReadFile |read_version_in_kb|recv_ssh_packet|recv_ssl|recv_until|redir_urlencode|RegCloseKey |RegConnectRegistry |RegEnumKey |RegEnumValue |RegGetKeySecurity |register_service|register_stream|registry_key_writeable_by_non_admin|_RegOpenKey |RegOpenKey |RegQueryInfoKey |RegQueryValue |reload_cookie_jars|remote_sig_match|removeMSBits|replace_cgi_1arg_token|replace_cgi_args_token|replace_http_cookies|replace_kb_blob|replace_unprintable_char|report_service|report_tftp_backdoor|reset_snmp_version|reverse|reverse8 |rlogin|rm_kb_blob|rm_kb_item|ROUND |rpc_accept_stat|rpc_getport |rpclong|rpc_packet |rpcpad|rpc_reply_stat|rpc_sendrecv |rpm_check|rpm_cmp|rpm_exists|rpm_report_add|rpm_report_get|run_injection_hdr|run_injection_param_names|S |SamCloseHandle |SamConnect2 |SamEnumerateDomainsInSamServer |SamGetAliasMemberShip |SamGetGroupsForUser |SamGetMembersInAlias |SamGetMembersInGroup |SamLookupDomainInSamServer |SamLookupIdsInDomain |SamLookupNamesInDomain |SamOpen |SamOpenAlias |SamOpenDomain |SamOpenGroup |SamOpenUser |SamQueryInformationDomain |SamQueryInformationUser |sanitize_utf16|save_tgs_session |save_version_in_kb|scanned_ports_list|scan_snmp_string|script_cvs_date|script_cwe_id|script_end_attributes|script_osvdb_id|script_set_attribute|script_set_cvss_base_vector|script_set_cvss3_base_vector|script_set_cvss_temporal_vector|security_report_v4|send_rexec|send_rsh|send_ssh_packet|service_is_dead|service_is_unknown|session_add_flags |session_add_flags2 |session_del_flags2 |session_get_addrlist |session_get_buffersize |session_get_cid |session_get_errorcode |session_get_flags |session_get_flags2 |session_get_hostname |session_get_mackey |session_get_messageid|session_get_mid |session_get_pid |session_get_secmode|session_get_sequencenumber |session_get_server_max_size |session_get_sid|session_get_socket |session_get_tid |session_get_timeout |session_get_uid |session_increase_sequencenumber |session_init |session_is_authenticated |session_is_guest |session_is_smb2|session_is_unicode |session_set_addrlist |session_set_authenticated |session_set_buffersize |session_set_errorcode |session_set_guest |session_set_host_info |session_set_hostname |session_set_mackey |session_set_mid |session_set_pid |session_set_secmode|session_set_server_max_size |session_set_sid|session_set_smb2|session_set_socket |session_set_tid |session_set_timeout |session_set_uid |session_set_unicode |session_smb2_support|set_byte_order|set_des_key |set_globals|set_http_cookie|set_http_cookie_from_hash|set_kb_banner|set_kb_blob|set_mysql_version|set_snmp_version|set_ssh_error|set_telnet_banner|set_unknown_banner|sha256|shrink_list|sid2string |sid_ldiv|sid_ltoa|silent_service|sinfp|sinfp_extract_options|sinfp_get_distance|sinfp_get_ip|sinfp_get_mss|sinfp_get_options|sinfp_get_tcp|sinfp_get_tcp_flags|sinfp_get_tcp_win|sinfp_heuristic_match|sinfp_match|sinfp_mkbinary|sip_open|sip_recv|sip_send|slack_elt_cmp|slack_ver_cmp|slackware_check|slackware_report_add|slackware_report_get|smb2_close|smb2_create|smb2_header|smb2_ioctl|smb2_login |smb2_logoff|smb2_negotiate|smb2_query_directory|smb2_query_info|smb2_read|smb2_recv |smb2_sendrecv|smb2_session_setup|smb2_tree_connect|smb2_tree_disconnect|smb2_write|smb_check_success |smb_close |smb_create_and_x |smb_data |smb_decode_header|smb_file_read|smb_header |smb_login |smb_logoff_andx |smb_negotiate_protocol |smb_nt_trans |smb_parameters |smb_read_and_x |smb_recv |smb_sendrecv|smb_session_setup_andx |smb_session_setup_andx_kerberos_core |smb_session_setup_andx_lanman_core |smb_session_setup_andx_ntlm_core |smb_session_setup_andx_ntlmssp_core |smb_trans2 |smb_trans_and_x |smb_trans_lanman |smb_trans_pipe |smb_tree_connect_and_x |smb_tree_disconnect |smb_write_and_x |smtp_close|smtp_from_header|smtp_open|smtp_recv_banner|smtp_recv_line|smtp_send_port|smtp_send_socket|smtp_starttls|smtp_to_header|snmp_assemble_authentication_data|snmp_assemble_request_data|snmp_exchange|snmp_extract_reply |snmp_put_engine_data|snmp_reply |snmp_request|snmp_request_next |snmp_request_set |snmpv3_authenticate_incoming|snmpv3_authenticate_outgoing|snmpv3_decrypt_incoming|snmpv3_encrypt_outgoing|snmpv3_fail|snmpv3_initial_request|snmpv3_parse_authoritative|snmpv3_parse_header|snmpv3_put_msg_global_data|snmpv3_request|solaris_check_patch|solaris_details_add|solaris_get_report|solaris_report_set|sol_vers_cmp|sort_cert_chain|space|split_long_line|split_tcp|split_udp|split_url|ssh1_recv|ssh1_send|ssh_auth_gssapi|ssh_auth_keyboard|ssh_auth_password|ssh_auth_publickey|ssh_auth_supported|ssh_close_channel|ssh_close_connection|ssh_cmd|ssh_cmd1|ssh_cmd_error|ssh_dss_verify|ssh_exchange_identification|ssh_hex2raw|ssh_kex1|ssh_kex2|ssh_login|ssh_open_channel|ssh_open_connection|ssh_parse_keys|ssh_recv|ssh_req_svc|ssh_rsa_verify|ssh_userauth1|ssh_userauth2|ssl2_handshake|ssl3_handshake|ssl_calc_finished|ssl_calc_master|ssl_derive_keyblk|ssl_find|ssl_mk_handshake_msg|ssl_mk_record|ssl_parse|StartService |store_1_cookie|store_cookiejar|str2long|stream_error|string2sid |strip|strridx|str_to_key |substr_at_offset|supported_encryption_type |tcp|TCP|tcp_checksum|tcp_finish_insert_option|tcp_flags|tcp_get|tcp_insert_option|tcp_set|telnet2_init |telnet_do_neg_about_size|telnet_dont |telnet_do_starttls|telnet_do_term_type|telnet_handle_suboption |telnet_loop |telnet_negotiate|telnet_open_cnx|telnet_read |telnet_send_cmd |telnet_send_suboption |telnet_starttls|telnet_will |telnet_wont |telnet_write |test|test1cgi|test1url|test_cgi_rec|test_cgi_xss|test_sinfp|test_udp_port|tftp_get|tftp_ms_backdoor|tftp_put|tls_calc_master|tls_derive_keyblk|tls_mk_handshake_msg|tls_mk_record|tls_prf|torture_cgi_audit_response|torture_cgi_build_report|torture_cgi_delay|torture_cgi_init|torture_cgi_name|torture_cgi_remember|torture_cgis|torture_cgis_yesno|torture_cgi_untestable_param|tripledes_decrypt|tripledes_encrypt|tripledes_initialize|ubuntu_check|ubuntu_report_add|ubuntu_report_get|ubuntu_ver_cmp|udp|UDP|udp_checksum|udp_get|udp_ping_pong|udp_recv_line|udp_recv_line_reset|udp_set|unicode |unicode2ascii |unixtime_to_nttime64 |update_window_size|upnp_find_service|upnp_make_soap_data|upnp_make_soap_req|upnp_svc_url|urldecode|urlencode|url_hex2raw|usm_AES_priv_decrypt|usm_AES_priv_protocol|usm_DES_priv_decrypt|usm_DES_priv_protocol|usm_HMAC_MD5_auth_protocol|usm_HMAC_SHA_auth_protocol|utf16_to_ascii|ver_compare|verify_service|ver_num|vers_cmp|voffset_to_offset |_wins_clean_name|wins_name_records_request|wins_owner_records_request|_wins_send_recv|wins_start_association|wins_stop_association|wont_test_cgi|write_dword |WriteFile |xdr_auth_unix|xdr_getdword|xdr_getstring|xdr_long|xdr_string|xml_get_child|xml_get_children|xml_get_children_names|xml_get_names_values|_xml_table_to_string|xmpp_open|xmpp_starttls|xor |XOR|xor8| |_zero_pad|_zip_extract|zip_extract|zip_parse|xscript_osvdb_id|xscript_set_cvss_base_vector|soap_send_request|audit)\\b',
      name: 'keyword.functions.scripts'
    }
  ],
  repository: {
    escaped_char: {match: '\\\\.', name: 'constant.character.escape.nasl'},
    line_comment: {
      patterns: [
        {
          captures: {
            1: {name: 'comment.line.number-sign.nasl'},
            2: {name: 'punctuation.definition.comment.nasl'}
          },
          match: '^((#|//).*$\\n?)',
          name: 'meta.comment.full-line.nasl'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.nasl'}},
          match: '(#|//).*$\\n?',
          name: 'comment.line.number-sign.perl'
        }
      ]
    }
  },
  scopeName: 'source.nasl'
}

export default grammar
