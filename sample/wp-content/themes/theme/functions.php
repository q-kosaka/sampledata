<?php

/* wp_head不要な記述削除 */
remove_action( 'wp_head', '_wp_render_title_tag', 1);
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'wp_shortlink_wp_head' );
remove_action( 'wp_head', 'rest_output_link_wp_head' );
remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
remove_action( 'wp_head', 'wp_oembed_add_host_js' );
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'wp_head', 'noindex', 1 );
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10 );
remove_action( 'wp_head', 'feed_links', 2);
remove_action( 'wp_head', 'feed_links_extra', 3);
remove_action( 'wp_head', 'start_post_rel_link', 10, 0);
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0);
remove_action( 'wp_head', 'index_rel_link');
remove_action( 'wp_head', 'rel_canonical');
remove_action( 'wp_head', 'wp_print_styles', 8);
remove_action( 'wp_head', 'wp_print_scripts', 8);
function remove_dns_prefetch( $hints, $relation_type ) {
  if ( 'dns-prefetch' === $relation_type ) {
    return array_diff( wp_dependencies_unique_hosts(), $hints );
  }
  return $hints;
}
add_filter( 'wp_resource_hints', 'remove_dns_prefetch', 10, 2 );
function my_delete_head() {
  wp_deregister_script( 'jquery' );
  wp_deregister_script( 'dashicons' );
  wp_deregister_style( 'wp-block-library' );
  wp_deregister_style( 'wp-block-library-theme' );
  wp_dequeue_style( 'global-styles' );
}
add_action( 'wp_enqueue_scripts', 'my_delete_head' );


/*-----------------------------------------------------------------------------------
 *TDK取得
-----------------------------------------------------------------------------------*/
//titleタグ表示用
function getting_title() {
	$titleAfter = 'サンプル';
	global $wp_query,$post;
	$return = "";
	if( is_post_type_archive('news') ) {
		$return = "NEWS｜".$titleAfter;
	}elseif( is_tax('news_cat') ) {
		$tarmId = get_queried_object_id();
		$tarmName = get_term_by('id', $tarmId, 'news_cat');
		$tarmName = $tarmName->name;
		$return = $tarmName."｜NEWS｜".$titleAfter;
	}elseif(is_singular('news')){ 
		$title_txt = get_post_meta(get_the_ID() , 'post_field_page_title' , TRUE);
		if($title_txt !== "" && $title_txt !== NULL){
			$return = $title_txt."｜".$titleAfter;
		}else{
			$return = get_the_title()."｜".$titleAfter;
		}
	}elseif(is_404()){ 
		$return = "Page not found｜".$titleAfter;
	}elseif(is_search()){ 
		$tmp_search_value = isset($_GET['s']) ? $_GET['s'] : "";
		$return = "検索結果｜".$titleAfter;
	}elseif(is_front_page() || is_home()){ 
		$return = $titleAfter;
	}else{
		$title_txt = get_post_meta(get_the_ID() , 'post_field_page_title' , TRUE);
		if($title_txt !== "" && $title_txt !== NULL){
			$return = $title_txt;
		}else{
			$return = get_the_title()."｜".$titleAfter;
		}
		
	}
	return $return;
}
//descriptionタグ表示用
function getting_description() {
	$descriptionAfter = 'サンプルディスクリプション';
	global $wp_query,$post;
	$return = "";
	if( is_post_type_archive('news') ) {
		$return = "NEWS｜".$descriptionAfter;
	}elseif( is_tax('news_cat') ) {
		$tarmId = get_queried_object_id();
		$tarmName = get_term_by('id', $tarmId, 'news_cat');
		$tarmName = $tarmName->name;
		$return = $tarmName."｜NEWS｜".$descriptionAfter;
	}elseif(is_singular('news')){ 
		$description_txt = get_post_meta(get_the_ID() , 'post_field_page_description' , TRUE);
		if($description_txt !== "" && $description_txt !== NULL){
			$return = $description_txt;
		}else{
			$return = get_the_title()."｜".$descriptionAfter;
		}
	}elseif(is_404()){ 
		$return = "Page not found｜".$descriptionAfter;
	}elseif(is_search()){ 
		$tmp_search_value = isset($_GET['s']) ? $_GET['s'] : "";
		$return = "検索結果｜".$descriptionAfter;
	}elseif(is_front_page() || is_home()){ 
		$return = $descriptionAfter;
	}else{
		$description_txt = get_post_meta(get_the_ID() , 'post_field_page_description' , TRUE);
		if($description_txt !== "" && $description_txt !== NULL){
			$return = $description_txt;
		}else{
			$return = get_the_title()."｜".$descriptionAfter;
		}
		
	}
	return $return;
}

function custom_allowed_block_types($select_allowed_blocks, $post) {
	if($post->post_type === 'post'){//投稿
		$select_allowed_blocks = array(
        	'core/paragraph', // 段落
			'core/heading', // 見出し
			'core/image', // 画像
			'core/shortcode', // ショートコード
            'core/freeform', // クラシック
		);
	}elseif($post->post_type === 'page'){//固定ページ
		$select_allowed_blocks = array(
        	'core/html', // カスタムHTML
		);
	}elseif($post->post_type === 'news'){//カスタム投稿
		$select_allowed_blocks = array(
        	'core/paragraph', // 段落
			'core/heading', // 見出し
        	'core/html', // カスタムHTML
		);
	}else{
		$select_allowed_blocks = array(
        	'core/paragraph', // 段落
			'core/heading', // 見出し
			'core/image', // 画像
			'core/shortcode', // ショートコード
            'core/freeform', // クラシック
		);
	}
    return $select_allowed_blocks;
}
add_filter('allowed_block_types', 'custom_allowed_block_types', 10, 10);
/*
各ブロックのスラッグは下記に記載
https://www.evernote.com/shard/s342/sh/4b45c4bb-867b-51ac-24ef-0a5ce6938383/1d2cba96d0d30e5f100fd1fe5c56f5e3
*/

function disable_block_editor( $use_block_editor, $post_type ) {
  if ( $post_type === 'news' ) return false;
  return $use_block_editor;
}
add_filter( 'use_block_editor_for_post_type', 'disable_block_editor', 10, 2 );


/*function custom_allowed_block_types($allowed_blocks, $post) {
	return array(
	    'core/html', // カスタムHTML
	);
}
add_filter('allowed_block_types', 'custom_allowed_block_types', 10, 10);
*/

/*
//カスタムタクソノミーのURLをカスタム投稿名と同じにする
function my_custom_post_type_permalinks_set($termlink, $term, $taxonomy){
	return str_replace('/'.$taxonomy.'/', '/', $termlink);
}
add_filter('term_link', 'my_custom_post_type_permalinks_set',11,3);
//リライトルールの追加	
//カスタム投稿タイプの一覧ページ
add_rewrite_rule('collection/page/([0-9]+)/?$', 'index.php?post_type=collection&paged=$matches[1]', 'top');

//親タームに属する記事ページ
add_rewrite_rule('collection/([^/]+)/([0-9]+)/?$', 'index.php?post_type=collection&p=$matches[2]', 'top');
//親ターム一覧ページ
add_rewrite_rule('collection/([^/]+)/?$', 'index.php?collection_cat=$matches[1]', 'top');
add_rewrite_rule('collection/([^/]+)/page/([0-9]+)/?$', 'index.php?collection_cat=$matches[1]&paged=$matches[2]', 'top'); 
//子ターム一覧ページ
add_rewrite_rule('collection/([^/]+)/([^/]+)/?$', 'index.php?collection_cat=$matches[2]', 'top');
add_rewrite_rule('collection/([^/]+)/([^/]+)/page/([0-9]+)/?$', 'index.php?collection_cat=$matches[1]&paged=$matches[2]', 'top');
*/