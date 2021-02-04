import _ from "lodash";

const products = [
    {   id: 1,
        name: "Apple Mac pro-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officiis nisi optio quam velit consequuntur eligendi harum maxime id expedita!",
        img: "http://picsum.photos/200/200",
        color: "red",
        price: 200000,
    },
    {   id: 2,
        name: "Apple Mac pro-2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officiis nisi optio quam velit consequuntur eligendi harum maxime id expedita!",
        img: "http://picsum.photos/100/100",
        color: "green",
        price: 100000,
    },
    {   id: 3,
        name: "Apple Mac pro-3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officiis nisi optio quam velit consequuntur eligendi harum maxime id expedita!",
        img: "http://picsum.photos/300/300",
        color: "grey",
        price: 150000,
    }
];
export const getProducts = () => {
    return products.map((product) => _.pick(product, ["name","id","description","img"]))
};

export const getProduct = (id) =>{
    return products.filter((product) => product.id === id);
}