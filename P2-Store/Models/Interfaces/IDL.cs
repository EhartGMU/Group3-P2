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

        Inventory AddInventory(Inventory n);
        Order AddOrder(Order n);
        Review AddReview(Review n);
        User AddUser(User n);


    }
}
