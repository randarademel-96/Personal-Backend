import NotFoundError from "../Domain/Errors/not-found-error.js";
import Category from "../infrastructure/schemas/Category.js";



const categories = [
  { categoryId: "1", name: "Headphones" },
  { categoryId: "2", name: "Earbuds" },
  { categoryId: "3", name: "Speakers" },
  { categoryId: "4", name: "Mobile Phones" },
  { categoryId: "5", name: "Smart Watches" },
];


export const getCategories = async (req, res, next) => {

  try {

    const data = await Category.find()
    return res.status(200).json(data).send()

  } catch (error) {
    next(error)
  }
}

export const createCategory = async (req, res, next) => {


  try {
    await Category.create(req.body);
    return res.status(201).send("Category created")

  } catch (error) {
    next(error);
  }
}

export const getCategory = async (req, res, next) => {
  try {
    const cid = req.params.id
    const category = await Category.findById(cid);

    if (!category) {
      throw new NotFoundError("Category not found")
    }

    return res.status(200).json(category).send()

  } catch (error) {
    next(error);
  }

}

export const deleteCategory = async (req, res, next) => {
  try {
    const cid = req.params.id
    const category = await Category.findByIdAndDelete(cid)

    if (!category) {
      throw new NotFoundError("Category not found")
    }

    categories.splice(cindex, 1);
    return res.status(204).send();

  } catch (error) {
    next(error)
  }
}

export const updateCategory = async (req, res, next) => {

  try {
    const cid = req.params.id
    const category = await Category.findByIdAndUpdate(cid, req.body)

    if (!category) {
      throw new NotFoundError("Category not found")
    }

    return res.status(200).send(category);

  } catch (error) {
    next(error)
  }

}


