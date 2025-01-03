import express from 'express';
const app = express();
import { productRouter } from './api/product.js';
import globalErrorHandlingMiddleware from './api/middleware/global-error-handling-middleware.js';
import { categoryRouter } from './api/category.js';
import { connectDB } from './infrastructure/db.js';




app.use(express.json()); // For parsing JSON requests* 

// app.use((req, res, next) => {
//     console.log("Request recieved");
//     console.log(req.method, req.url);
//     next();
// })

app.use('/api/products', productRouter);
app.use('/api/category', categoryRouter);



app.use(globalErrorHandlingMiddleware)




// app.get('/products', getProducts)

// app.post('/products', createProduct)


// app.get('/products/:id', getProduct)

// app.delete('/products/:id', deleteProduct)

// app.patch('/products/:id', updateProduct)

connectDB();
app.listen(8000, () => console.log(`Server running on port ${8000}`)); 