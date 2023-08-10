import { Request, Response } from "express";
import Producto from "../models/producto";

export const getProducts = async (req: Request, res: Response) => {
  const listProducts = await Producto.findAll();

  res.json(listProducts);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Producto.findByPk(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      msg: `No existe un producto con el id ${id}`,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Producto.findByPk(id);

  if (!product) {
    res.status(404).json({
      msg: `El producto con id ${id} no existe y no puede ser eliminado`,
    });
  } else {
    await product.destroy();
    res.json({
      msg: "el producto fue eliminado con exito",
    });
  }
};

export const postProduct = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    await Producto.create(body);

    res.json({
      msg: "el producto fue agregado con exitos",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msg: "ocurrio un error",
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const product = await Producto.findByPk(id);

  try {
    if (product) {
      await product.update(body);
      res.json({
        msg: "el producto fue actualizado con esito pa",
      });
    } else {
      res.status(404).json({
        msg: "ocurrio un error",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msg: "ocurrio un error",
    });
  }
};
