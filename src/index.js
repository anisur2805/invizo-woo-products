import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { SelectControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import "@wordpress/data-controls";
import { useState } from "react";

registerBlockType("invizo-woo-products/products", {
	title: __("Invizo Products List", "invizo-woo-products"),
	icon: "products",
	category: "widgets",
	attributes: {
		numProducts: {
			type: "number",
			default: 5,
		},
		itemsPerRow: {
			type: "string",
			default: "3",
		},
		sortOrder: {
			type: "string",
			default: "asc",
		},
		sortType: {
			type: "string",
			default: "price",
		},
	},
	edit: withSelect((select, props) => {
		const { sortOrder, numProducts, itemsPerRow, sortType } = props.attributes;

		// let order = sortOrder === "asc" ? "asc" : "desc";

		// let orderby;
		// if (sortType === "price") {
		// 	orderby = "price";
		// } else {
		// 	orderby = "title";
		// }

		return {
			products: select("core").getEntityRecords("postType", "product", {
				per_page: numProducts,
				// orderby: sortType === "price" ? "meta_value_num" : "title",
				// orderby: sortType === "price" ? "price" : "title",
				orderby: "_regular_price",
				// orderby: "price",
				// meta_key: "_price",
				order: sortOrder,
				items_per_row: itemsPerRow,
				_embed: true,
				image: true,
				// meta_key: sortType === "price" ? "_price" : undefined,
			}),
		};
	})(({ products, attributes, setAttributes }) => {
		const { sortOrder, numProducts, itemsPerRow, sortType } = attributes;

		if (!products) {
			return "Loading products...";
		}

		if (products.length === 0) {
			return "No products found.";
		}

		const options = [
			{ value: "asc", label: "Low to high" },
			{ value: "desc", label: "High to low" },
		];

		const perRowOptions = [
			{ value: "1", label: "One Item" },
			{ value: "2", label: "Two Items" },
			{ value: "3", label: "Three Items" },
			{ value: "4", label: "Four Items" },
		];

		const sortTypeOptions = [
			{ value: "price", label: "Price" },
			{ value: "title", label: "Title" },
		];

		return [
			<div key="editor" className="invizo-woo-products-sort-row">
				<h2 className="invizo-heading">Products List</h2>
				<div key="editor" className="invizo-woo-products-sort-wrapper">
					<SelectControl
						label="Items Per Row"
						value={itemsPerRow}
						options={perRowOptions}
						onChange={(value) => setAttributes({ itemsPerRow: value })}
					/>
					<SelectControl
						label="Sort order"
						value={sortOrder}
						options={options}
						onChange={(value) => setAttributes({ sortOrder: value })}
					/>
					<SelectControl
						label="Sort type"
						value={sortType}
						options={sortTypeOptions}
						onChange={(value) => setAttributes({ sortType: value })}
					/>
					<SelectControl
						label="Number of products"
						value={numProducts}
						options={[
							{ value: 5, label: "5" },
							{ value: 10, label: "10" },
							{ value: 20, label: "20" },
							{ value: 50, label: "50" },
						]}
						onChange={(value) =>
							setAttributes({ numProducts: parseInt(value) })
						}
					/>
				</div>
			</div>,
			<ul
				key="products"
				className={`products invizo-lists invizo-column-${itemsPerRow}`}
			>
				{products.map((product) => {
					const imageSize = "medium";

					return (
						<li key={product.id} className="product invizo-list-item">
							<a href={product.link}>
								<img
									src={
										product.featured_media
											? product._embedded["wp:featuredmedia"][0].media_details
													.sizes[imageSize].source_url
											: "placeholder-image-url"
									}
									alt={product.name}
								/>
							</a>
							<a href={product.link}>{product.name}</a>

							<h3>{product.title.rendered}</h3>
							{product.price && (
								<div className="invizo-price">
									{product.on_sale ? (
										<div>
											<span className="product-price product-price--sale">
												{product.sale_price}
											</span>
											<span className="product-price product-price--regular">
												{product.regular_price}
											</span>
										</div>
									) : (
										<span>{product.price}</span>
									)}
								</div>
							)}

							<a
								className="button button-primary"
								href={`/shop?add-to-cart=${product.id}`}
							>
								Add to Cart
							</a>
						</li>
					);
				})}
			</ul>,
		];
	}),

	save: () => null,
});
