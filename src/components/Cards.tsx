import React from 'react'
import { Icon } from './Icon'
import './Cards.css'
interface CardProperties {
    image: string;
    title: string;
    series: number;
    repetitions: number;
}

export const Cards: React.FC<CardProperties> = ({ image, title, series, repetitions }) => {
    return (
        <div className="exercise-card">
            <div className="exercise-card__image-container">
                <img src={image} alt={title} className="exercise-card__image" />
            </div>
            <div className="exercise-card__info">
                <h3 className="exercise-card__title">{title}</h3>
                <p className="exercise-card__subtitle">{series} séries x {repetitions} repetições</p>
            </div>
            <div className="exercise-card__action">
                <Icon />
            </div>
        </div>
    )
}