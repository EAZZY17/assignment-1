import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoComponent from './DemoComponent'
import IngredientsList from './IngredientsList'

const itemsList = [
    "1 cup unsalted butter",
    "1 cup crunchy peanut butter",
    "1 cup brown sugar",
    "1 cup white sugar",
    "2 eggs",
    "2.5 cups all purpose flour",
    "1 teaspoon baking powder",
    "0.5 teaspoon salt"
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IngredientsList items={itemsList}/>
      <DemoComponent />
    </>
  )
}

export default App
