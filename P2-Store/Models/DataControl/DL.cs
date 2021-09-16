using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using P2_Store.Entities;
using P2_Store.Models.Interfaces;

namespace P2_Store.Models.DataControl
{
    public class DL : IDL
    {
        private readonly G3P2dbContext _context;

        public DL(G3P2dbContext context)
        {
            _context = context;
        }


        public List<Product> ListProducts()
        {
            return _context.Products

                .Select(n => new Product
                {
                    Id = n.Id,
                    Name = n.Name,
                    Price = n.Price,
                    Quantity = n.Quantity,
                    OrderId = n.OrderId,
                    InventoryId = n.InventoryId
                    
                })
                .ToList();
        }

        public List<Inventory> ListInventory()
        {
            return _context.Inventories

                .Select(n => new Inventory
                {
                    Id = n.Id,
                    Name = n.Name,
                    Price = n.Price,
                    Stock = n.Stock,
                    CategoryId = n.CategoryId,
                    Description = n.Description

                })
                .ToList();
        }



        public List<Order> ListOrders()
        {
            return _context.Orders

                .Select(n => new Order
                {
                    Id = n.Id,
                    UserId = n.UserId,
                    Total = n.Total,
                    IsCompleted = n.IsCompleted            

                })
                .ToList();
        }


        public List<Review> ListReviews()
        {
            return _context.Reviews

                .Select(n => new Review
                {
                    Id = n.Id,
                    InventoryId = n.InventoryId,
                    UserId = n.UserId,
                    Score = n.Score,
                    Message = n.Message
                
                })
                .ToList();
        }

        public List<User> ListUsers()
        {
            return _context.Users

                .Select(n => new User
                {
                    Id = n.Id,
                    FullName = n.FullName,
                    Pass = n.Pass,
                    Email = n.Email,
                    DateJoined = n.DateJoined,
                    IsAdmin = n.IsAdmin

                })
                .ToList();
        }

        public Product AddProduct(Product n)
        {

            _context.Products.Add(
                new Entities.Product
                {
                    Id = n.Id,
                    Name = n.Name,
                    Price = n.Price,
                    Quantity = n.Quantity,
                    OrderId = n.OrderId,
                    InventoryId = n.InventoryId
                }
            );
            _context.SaveChanges();
            return n;
        }

        public Inventory AddInventory(Inventory n)
        {

            _context.Inventories.Add(
                new Entities.Inventory
                {
                    Id = n.Id,
                    Name = n.Name,
                    Price = n.Price,
                    Stock = n.Stock,
                    CategoryId = n.CategoryId,
                    Description= n.Description
                }
            );
            _context.SaveChanges();
            return n;
        }

        public Order AddOrder(Order n)
        {

            _context.Orders.Add(
                new Entities.Order
                {
                    Id = n.Id,
                    UserId = n.UserId,
                    Total = n.Total,
                    IsCompleted = n.IsCompleted                
                }
            );
            _context.SaveChanges();
            return n;
        }

        public Review AddReview(Review n)
        {

            _context.Reviews.Add(
                new Entities.Review
                {
                    Id = n.Id,
                    InventoryId = n.InventoryId,
                    UserId = n.UserId,
                    Score = n.Score,
                    Message = n.Message
                }
            );
            _context.SaveChanges();
            return n;
        }

        public User AddUser(User n)
        {

            _context.Users.Add(
                new Entities.User
                {
                    Id = n.Id,
                    FullName = n.FullName,
                    Pass = n.Pass,
                    Email = n.Email,
                    DateJoined = n.DateJoined,
                    IsAdmin = n.IsAdmin
                }
            );
            _context.SaveChanges();
            return n;
        }














    }
    
}
