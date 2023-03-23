import Product from "../models/product";
import joi from "joi";
const productSchema = joi.object({
  name: joi.string().required("Chưa nhập tên sản phẩm"),
  price: joi.number().required(),
});
const getAll = async (req, res) => {
  try {
    const product = await Product.find();
    if (product.length == 0) {
      return res.json({
        errors: "Không có sản phẩm nào",
      });
    }
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      errors: error,
    });
  }
};
const getProductId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.json({
        errors: "Không có sản phẩm nào",
      });
    }
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      errors: error,
    });
  }
};
const addProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.details[0].message,
      });
    }
    const product = await Product.create(req.body);
    if (!product) {
      return res.json({
        errors: "Không thêm được sản phẩm",
      });
    }
    return res.json({
      message: "Thêm sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      errors: error,
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        errors: error.details[0].message,
      });
    }
    const product = await Product.updateOne({ _id: req.params.id }, req.body);
    if (!product) {
      return res.json({
        errors: "Cập nhật sản phẩm không thành công",
      });
    }
    return res.json({
      message: "update thành công",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      errors: error,
    });
  }
};
const remove = async (req, res) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });
    if (!product) {
      return res.json({
        message: "Xóa sản phẩm không thành công",
      });
    }
    return res.json({
      message: "Xóa sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      errors: error,
    });
  }
};
export { getAll, addProduct, updateProduct, remove, getProductId };
