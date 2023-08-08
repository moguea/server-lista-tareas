const express = require('express');
const app = express();
const PORT = 3000; 


app.use(express.json());


let tasks = [
  { id: 1, description: 'Hacer compras', completed: false },
  { id: 2, description: 'Estudiar para el examen', completed: true },
  { id: 3, description: 'Ejercicio físico', completed: false }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
