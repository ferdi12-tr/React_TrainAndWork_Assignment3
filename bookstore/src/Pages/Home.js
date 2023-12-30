import React, { Component } from 'react'
import Slider from '../Components/Home/Slider'
import BestSellingBooks from '../Components/Home/BestSellingBooks'
import Featured from '../Components/Home/Featured'
import NewRelease from '../Components/Home/NewRelease'
import CollectionCount from '../Components/Home/CollectionCount'
import PickedByAuthor from "../Components/Home/PickedByAuthor"
import Testimonial from '../Components/Home/Testimonial'
import Authors from "../Components/Home/Authors"
import LatestNews from "../Components/Home/LatestNews"

export default class Home extends Component {
    render() {
        return (
            <>
                <Slider />
                <main id="tg-main" className="tg-main tg-haslayout">
                    <BestSellingBooks />
                    <Featured />
                    <NewRelease />
                    <CollectionCount />
                    <PickedByAuthor />
                    <Testimonial />
                    <Authors />
                    <LatestNews />
                </main></>
        )
    }
}
