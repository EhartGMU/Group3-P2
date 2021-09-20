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

        public async Task<Inventory> AddInventory(Inventory n)
        {

            _context.Inventories.Add(
                new Entities.Inventory
                {
                   
                    Name = n.Name,
                    Price = n.Price,
                    Stock = n.Stock,
                    CategoryId = n.CategoryId,
                    Description= n.Description
                }
            );
            await _context.SaveChangesAsync();
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

        public Inventory DeleteInventory(Inventory n)
        {
            _context.Inventories.Remove(
                new Entities.Inventory
                {
                    Id = n.Id,
                    Name = n.Name,
                    Price = n.Price,
                    Stock = n.Stock,
                    CategoryId = n.CategoryId,
                    Description = n.Description
                });
            _context.SaveChanges();
            return n;
        }
      

        public Order DeleteOrder(Order n)
        {
            _context.Orders.Remove(
                new Entities.Order
                {
                    Id = n.Id,
                    UserId = n.UserId,
                    Total = n.Total,
                    IsCompleted = n.IsCompleted
                });
            _context.SaveChanges();
            return n;
        }

        public Product DeleteProduct(Product n)
        {
            _context.Products.Remove(
                new Entities.Product
                {
                    Id = n.Id,
                    Name = n.Name,
                    Price = n.Price,
                    Quantity = n.Quantity,
                    OrderId = n.OrderId,
                    InventoryId = n.InventoryId
                });
            _context.SaveChanges();
            return n;
        }

        public Review DeleteReview(Review n)
        {
            _context.Reviews.Remove(
                new Entities.Review
                {
                    Id = n.Id,
                    InventoryId = n.InventoryId,
                    UserId = n.UserId,
                    Score = n.Score,
                    Message = n.Message
                });
            _context.SaveChanges();
            return n;
        }
        public User DeleteUser(User n)
        {
            _context.Users.Remove(
                new Entities.User
                {
                    Id = n.Id,
                    FullName = n.FullName,
                    Pass = n.Pass,
                    Email = n.Email,
                    DateJoined = n.DateJoined,
                    IsAdmin = n.IsAdmin
                });
            _context.SaveChanges();
            return n;
        }


        public Inventory GetInventoryById(int id)
        {

            var rest = _context.Inventories.FirstOrDefault(r => r.Id == id);
            Inventory newRest = new Inventory(rest.Id, rest.Name, rest.Price, rest.Stock, rest.CategoryId, rest.Description);
            return newRest;
           

        }
        public Order GetOrderById(int id)
        {

            var rest = _context.Orders.FirstOrDefault(r => r.Id == id);
            Order newRest = new Order(rest.Id,  rest.UserId, rest.Total, rest.IsCompleted);
            return newRest;

        }
        public Product GetProductById(int id)
        {

            var rest = _context.Products.FirstOrDefault(r => r.Id == id);
            Product newRest = new Product(rest.Id, rest.Name, rest.Price, rest.Quantity, rest.OrderId, rest.InventoryId);
            return newRest;

        }

        public User GetUserById(int id)
        {

            var rest = _context.Users.FirstOrDefault(r => r.Id == id);
            User newRest = new User(rest.Id, rest.FullName, rest.Pass, rest.Email, rest.DateJoined, rest.IsAdmin);
            return newRest;

        }


        public void UpdateInventory(Inventory rest)
        {
            var OriginalRest = _context.Inventories.FirstOrDefault(r => r.Id == rest.Id);

            OriginalRest.Name = rest.Name;
            OriginalRest.Price = rest.Price;
            OriginalRest.Stock = rest.Stock;
            OriginalRest.CategoryId = rest.CategoryId;
            OriginalRest.Description = rest.Description;
            _context.SaveChanges();
            
        }

        public void UpdateOrder(Order rest)
        {
            var OriginalRest = _context.Orders.FirstOrDefault(r => r.Id == rest.Id);

            OriginalRest.UserId = rest.UserId;
            OriginalRest.Total = rest.Total;
            OriginalRest.IsCompleted = rest.IsCompleted;
            _context.SaveChanges();

        }

        public void UpdateProduct(Product rest)
        {
            var OriginalRest = _context.Products.FirstOrDefault(r => r.Id == rest.Id);

            OriginalRest.Name = rest.Name;
            OriginalRest.Price = rest.Price;
            OriginalRest.Quantity = rest.Quantity;
            OriginalRest.OrderId = rest.OrderId;
            OriginalRest.InventoryId = rest.InventoryId;
   
          _context.SaveChanges();

        }






    }

}
