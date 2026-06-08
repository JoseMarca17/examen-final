import React from 'react'
import { Cards } from './Cards'
import './List.css';
interface Excercise {
    id: string;
    image: string;
    title: string;
    series: number;
    repetitions: number;
}

interface ExerciseListProps {
    exercises: Excercise[];
}

export const ExerciseList: React.FC<ExerciseListProps> = ({ exercises }) => {
    return (
        <div className="exercise-list-container">
            <div className="exercise-list__header">
                <span className="exercise-list__label">info</span>
                <div className="exercise-list__title-row">
                    <h2 className="exercise-list__main-title">Exercícios</h2>
                    <span className="exercise-list__count">{exercises.length}</span>
                </div>
            </div>

            <div className="exercise-list__items">
                {exercises.map((exercise) => (
                    <Cards
                        key={exercise.id}
                        image={exercise.image}
                        title={exercise.title}
                        series={exercise.series}
                        repetitions={exercise.repetitions}
                    />
                ))}
            </div>
        </div>
    )
}

