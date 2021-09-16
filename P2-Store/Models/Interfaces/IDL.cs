using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace P2_Store.Models.Interfaces
{
    public interface IDL
    {
        List<Product> ListProducts();
        List<Inventory> ListInventory();
        List<Order> ListOrders();
        List<Review> ListReviews();
        List<User> ListUsers();
        Product AddProduct(Product n);
        Product DeleteProduct(Product n);

        Inventory AddInventory(Inventory n);
        Inventory DeleteInventory(Inventory n);
        Order AddOrder(Order n);
        Order DeleteOrder(Order n);
        Review AddReview(Review n);
        Review DeleteReview(Review n);
        User AddUser(User n);
        User DeleteUser(User n);

        Inventory GetIventoryById(int id);


    }
}
