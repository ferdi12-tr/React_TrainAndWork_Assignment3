import React, { useEffect, useState } from 'react'
import CategoryProduct from '../../CategoryProduct';
import { useSelector } from 'react-redux';


export default function CategoryProducts() {

    const [selectedCategory, setSelectedCategory] = useState(1)
    const [biographProduct, setBiographProduct] = useState([])
    const [childrenProduct, setChildrenProduct] = useState([])
    const [historyProduct, setHistoryProduct] = useState([])

    const categories = useSelector(state => state.categories.categories)
    const products = useSelector(state => state.products.products)

    useEffect(() => {
        setBiographProduct(products.filter(product => product.categoryId === 1))
        setChildrenProduct(products.filter(product => product.categoryId === 2))
        setHistoryProduct(products.filter(product => product.categoryId === 3))
    }, [selectedCategory, products])



    return (categories &&
        <div className="single-block">
            <div className="home-right-block bg-white">
                <div className="sb-custom-tab text-lg-left text-center">
                    <ul className="nav nav-tabs nav-style-2" id="myTab2" role="tablist">
                        <li className="nav-item">
                            <a onClick={() => setSelectedCategory(categories[0].id)} className="nav-link active" id="shop-tab2" data-bs-toggle="tab" href="#shop2" role="tab" aria-controls="shop2" aria-selected="true">
                                {categories[0]?.name}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setSelectedCategory(categories[1].id)} className="nav-link" id="men-tab2" data-bs-toggle="tab" href="#men2" role="tab" aria-controls="men2" aria-selected="true">
                                {categories[1]?.name}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setSelectedCategory(categories[2].id)} className="nav-link" id="woman-tab2" data-bs-toggle="tab" href="#woman2" role="tab" aria-controls="woman2" aria-selected="false">
                                {categories[2]?.name}
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent2">
                        <div className="tab-pane show active" id="shop2" role="tabpanel" aria-labelledby="shop-tab2">
                            <div className="product-slider product-list-slider multiple-row slider-border-multiple-row  sb-slick-slider">
                                {biographProduct.map((product, index) => {
                                    return <CategoryProduct key={index} product={product} />
                                })}
                            </div>
                        </div>
                        <div className="tab-pane" id="men2" role="tabpanel" aria-labelledby="men-tab2">
                            <div className="product-slider product-list-slider multiple-row slider-border-multiple-row  sb-slick-slider">
                                {childrenProduct.map((product, index) => {
                                    return <CategoryProduct key={index} product={product} />
                                })}
                            </div>
                        </div>
                        <div className="tab-pane" id="woman2" role="tabpanel" aria-labelledby="woman-tab2">
                            <div className="product-slider product-list-slider multiple-row slider-border-multiple-row  sb-slick-slider">
                                {historyProduct.map((product, index) => {
                                    return <CategoryProduct key={index} product={product} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
