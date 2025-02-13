import { IProduct } from '../types/types';

export const products: IProduct[] = [
    {
        id: 1,
        name: 'Cheese',
        description: '200g cheese block',
        price: 10,
        quantity: 0,
        img: 'https://t3.ftcdn.net/jpg/05/66/02/98/360_F_566029808_X7praimuCQt0MsLCmw5d65Pp5KqmTS8e.jpg',
    },
    {
        id: 2,
        name: 'Milk',
        description: '200ml milk bottle',
        price: 5,
        quantity: 0,
        img: 'https://unblast.com/wp-content/uploads/2020/06/Milk-Carton-Packaging-Mockup.jpg',
    },
    {
        id: 3,
        name: 'Tomato',
        description: '1 piece of tomato',
        price: 2.75,
        quantity: 0,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
    },
    {
        id: 4,
        name: 'Pineapple',
        description: '500g pineapple',
        price: 3.25,
        quantity: 0,
        img: 'https://product-images.metro.ca/images/h78/h17/8905403858974.jpg',
    },
];

export const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About us' },
    { path: '/products', name: 'Products' },
];

export const updateThemeByTime = (): boolean => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18;
};
