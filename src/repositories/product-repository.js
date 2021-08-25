const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// get
exports.getProduct = async data => {
  return await Product.findOne({ "_id": data });
};

// get with filters
exports.getProducts = async (produto, categoria) => {
  if(produto){
    return await Product.find({ nome: produto });
  }
  if(categoria){
    return await Product.find({ categoria: categoria });
  }
  return await Product.find();
};

// getAll
exports.getAll = async (linhasPorPagina, pagina) => {

  const totalCount = (await Product.find()).length;
  const pageSize = linhasPorPagina;
  const pageIndex = pagina;
  const skip = (pageIndex - 1) * pageSize;
  const pageCount = Number.parseInt((totalCount / pageSize) + ((totalCount % pageSize) != 0 ? 1 : 0));

  const products = await Product.find()
  .sort({ nome: 1 })
  .skip(Number.parseInt(skip))
  .limit(Number.parseInt(pageSize));

  return ({ 
    products: products,
    metadata: {
      count: products.length, 
      totalCount: totalCount,
      pageIndex: pageIndex,
      pageCount: pageCount,
      hasNextPage: ((pageIndex == pageCount) || (pageIndex > pageCount)) ? false : true,
      hasPreviousPage: ((pageIndex == 1) || (pageIndex > pageCount)) ? false : true
    }
  });
};