import React, { Component } from 'react'
import Slider from '../Components/Home/Slider'
import Feature from '../Components/Home/Feature'
import CategoryGallery from '../Components/Home/CategoryGallery'
import Promotion from '../Components/Home/Promotion'
import LookModal from '../Components/Home/LookModal'

export default class Home extends Component {
    render() {
        return (
            <>
                <Slider />
                <Feature />
                <CategoryGallery />
                <Promotion />
                <LookModal />
            </>
        )
    }
}
