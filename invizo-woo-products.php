<?php
/**
 * Plugin Name:       Invizo Woo Products
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       invizo-woo-products
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_invizo_woo_products_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_invizo_woo_products_block_init' );


// Enable price for the product in rest api
function add_price_to_rest_api() {
    // register_rest_field( 'product', 'price', array(
    //     'get_callback' => 'get_product_price',
    //     'schema' => null,
    // ) );

    register_rest_field( 'product',
        'price',
        array(
            'get_callback'    => 'get_product_price',
            'update_callback' => null,
            'schema'          => null,
        )
    );

    // register_rest_field( 'product', 'regular_price', array(
    //     'get_callback' => 'get_product_regular_price',
    //     'schema' => null,
    // ) );
    // register_rest_field( 'product', 'sale_price', array(
    //     'get_callback' => 'get_product_sale_price',
    //     'schema' => null,
    // ) );
}

function get_product_price( $object, $field_name, $request ) {
    $product = wc_get_product( $object['id'] );
    $currency_symbol = get_woocommerce_currency_symbol();
    return html_entity_decode( $currency_symbol ) . $product->get_price();
    // return get_post_meta( $object['id'], '_price', true );
}

function get_product_regular_price( $object, $field_name, $request ) {
    $product = wc_get_product( $object['id'] );
    $currency_symbol = get_woocommerce_currency_symbol();
    
    if ( $product->is_type( 'variable' ) ) {
        return null;
    } elseif ( $product->is_on_sale() ) {
        return html_entity_decode( $currency_symbol ) . $product->get_regular_price();
    } else {
        return html_entity_decode( $currency_symbol ) . $product->get_regular_price();
    }
}

function get_product_sale_price( $object, $field_name, $request ) {
    $product = wc_get_product( $object['id'] );
    $currency_symbol = get_woocommerce_currency_symbol();
    
    if ( $product->is_on_sale() ) {
        return html_entity_decode( $currency_symbol ) . $product->get_sale_price();
    } else {
        return null;
    }
}

add_action( 'rest_api_init', 'add_price_to_rest_api' );



function add_price_to_product_api_response( $response, $post ) {
    if ( isset( $response->data ) ) {
        $product = wc_get_product( $post->ID );
        $response->data['price'] = $product->get_price();
    }
    return $response;
}
add_filter( 'woocommerce_rest_prepare_product_object', 'add_price_to_product_api_response', 10, 2 );



function register_product_price_meta() {
    register_meta('post', '_price', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
}
add_action('init', 'register_product_price_meta');
