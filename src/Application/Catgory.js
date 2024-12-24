import NotFoundError from "../Domain/Errors/not-found-error.js";



const categories = [
  { id: "1", name: "Headphones" },
  { id: "2", name: "Earbuds" },
  { id: "3", name: "Speakers" },
  { id: "4", name: "Mobile Phones" },
  { id: "5", name: "Smart Watches" },
];


export const getCategories = (req, res, next) => {

  try {
    return res.status(200).json(categories).send()

  } catch (error) {
    next(error)
  }
}

export const createCategory = (req, res, next) => {


  try {
    categories.push(req.body, next);
    return res.status(201).send("Category created")
    
  } catch (error) {
    next(error);
  }
}

export const getCategory = (req, res, next) => {
  try {
    const cid = req.params.id
    const category = categories.find((cat) => cat.id == cid)

    if (!category) {
      throw new NotFoundError("Category not found")
    }

    return res.status(200).json(category).send()

  } catch (error) {
    next(error);
  }

}

export const deleteCategory = (req, res, next) => {
  try {
    const cid = req.params.id
    const cindex = categories.findIndex((cat) => cat.id == cid)

    if (cindex == -1) {
      throw new NotFoundError("Category not found")
    }

    categories.splice(cindex, 1);
    return res.status(204).send();

  } catch (error) {
    next(error)
  }
}

export const updateCategory = (req, res,next) => {

  try {
    const cid = req.params.id
  const category = categories.find((cat) => cat.id == cid)

  if(!category){
    throw new NotFoundError("Category not found")
  }

  category.id = req.body.id;
  category.name = req.body.name;

  return res.status(200).send();
    
  } catch (error) {
    next(error)
  }

}


