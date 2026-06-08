import { ExerciseList } from "@/src/components/List";

const mockExercises = [
  { id: '1', title: 'Puxada frontal', series: 3, repetitions: 12, image: '/images/1.png' },
  { id: '2', title: 'Remada curvada', series: 3, repetitions: 12, image: '/images/2.png' },
  { id: '3', title: 'Remada unilateral', series: 3, repetitions: 12, image: '/images/3.png' },
  { id: '4', title: 'Levantamento terra', series: 3, repetitions: 12, image: '/images/4.png' },
];

export default function Page() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', padding: '40px', backgroundColor: '#121212', minHeight: '100vh' }}>
      <ExerciseList exercises={mockExercises} />
    </main>
  )
}