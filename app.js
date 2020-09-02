import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js'

/** Conectar ao MondoDB pelo Mongoose **/
(async () => {
  try {
    await mongoose.connect("mongodb+srv://test:123@cluster0.dydqv.mongodb.net/grades", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado com sucesso no MongoDb");
  } catch (err) {
    console.log("Erro ao conectar ao MongoDB" + err);
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API Iniciada'));