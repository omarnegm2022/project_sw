import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Xiaomi Mi 9T',
      slug: 'xiaomi-Mi-9T',
      category: 'phones',
      image: '/images/p1.jpg', 
      price: 30,
      countInStock: 10,
      brand: 'Xiaomi',
      rating: 4.5,
      numReviews: 10,
      description: 'Dual Sim, 128GB, 4G LTE - Red',
    },
    {
      name: 'ThinkBook 16 Gen 4',
      slug: 'thinkBook-16-Gen-4',
      category: 'Laptops',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 1,
      brand: 'Lenovo',
      rating: 4.0,
      numReviews: 10,
      description: '15.6in FHD Core i7 - 250GB SSD - 8GB RAM - Rtx 3050,8 Cores at 4.6 GHz - 11th Gen CPU',
    },
    {
      name: 'Dell G15 5511 Gaming ',
      slug: 'dell-G15-5511-Gaming',
      category: 'Laptops',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Dell',
      rating: 4.5,
      numReviews: 14,
      description: '15.6in FHD Core i7 - 1TB SSD - 16GB RAM - Rtx 3060,8 Cores at 4.6 GHz - 11th Gen CPU',
    },
    {
      name: 'Samsung Galaxy A23',
      slug: 'samsung-galaxy-A23',
      category: 'phones',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Samsung',
      rating: 4.5,
      numReviews: 10,
      description: '128GB, 4GB RAM, Dual SIM Mobile Phone, White',
    },
  ],
};
export default data;
