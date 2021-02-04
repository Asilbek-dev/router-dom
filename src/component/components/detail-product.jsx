const DetailProduct = ({
  match: {
    params: { productId },
  },
}) => {
    
    return <h2>Detail {productId} Product component</h2>;
};

export default DetailProduct;
