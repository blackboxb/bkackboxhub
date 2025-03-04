import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, orderDelete } = context;

    return (
        <div className="p-4">
            <div className="py-5">
                <h1 className="text-xl font-bold">All Orders</h1>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="h-12 px-6 text-md font-bold">S.No.</th>
                            <th className="h-12 px-6 text-md font-bold">Order Id</th>
                            <th className="h-12 px-6 text-md font-bold">Image</th>
                            <th className="h-12 px-6 text-md font-bold">Title</th>
                            <th className="h-12 px-6 text-md font-bold">Category</th>
                            <th className="h-12 px-6 text-md font-bold">Price</th>
                            <th className="h-12 px-6 text-md font-bold">Quantity</th>
                            <th className="h-12 px-6 text-md font-bold">Total Price</th>
                            <th className="h-12 px-6 text-md font-bold">Status</th>
                            <th className="h-12 px-6 text-md font-bold">Name</th>
                            <th className="h-12 px-6 text-md font-bold">Address</th>
                            <th className="h-12 px-6 text-md font-bold">Pincode</th>
                            <th className="h-12 px-6 text-md font-bold">Phone Number</th>
                            <th className="h-12 px-6 text-md font-bold">Email</th>
                            <th className="h-12 px-6 text-md font-bold">Date</th>
                            <th className="h-12 px-6 text-md font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllOrder.map((order) => {
                            return (
                                <React.Fragment key={order.id}>
                                    {order.cartItems.map((item, index) => {
                                        const { id, productImageUrl, title, category, price, quantity } = item;
                                        return (
                                            <tr key={`${order.id}-${index}`} className="border-b border-gray-700">
                                                <td className="h-12 px-6 text-md">{index + 1}</td>
                                                <td className="h-12 px-6 text-md">{id}</td>
                                                <td className="h-12 px-6 text-md">
                                                    <img src={productImageUrl} alt="img" className="w-12 h-12 object-cover" />
                                                </td>
                                                <td className="h-12 px-6 text-md">{title}</td>
                                                <td className="h-12 px-6 text-md">{category}</td>
                                                <td className="h-12 px-6 text-md">₹{price}</td>
                                                <td className="h-12 px-6 text-md">{quantity}</td>
                                                <td className="h-12 px-6 text-md">₹{price * quantity}</td>
                                                <td className="h-12 px-6 text-md text-green-600">{order.status}</td>
                                                {/* Only display address info on the first item of each order */}
                                                {index === 0 && (
                                                    <>
                                                        <td className="h-12 px-6 text-md" rowSpan={order.cartItems.length}>{order.addressInfo.name}</td>
                                                        <td className="h-12 px-6 text-md" rowSpan={order.cartItems.length}>{order.addressInfo.address}</td>
                                                        <td className="h-12 px-6 text-md" rowSpan={order.cartItems.length}>{order.addressInfo.pincode}</td>
                                                        <td className="h-12 px-6 text-md" rowSpan={order.cartItems.length}>{order.addressInfo.mobileNumber}</td>
                                                        <td className="h-12 px-6 text-md" rowSpan={order.cartItems.length}>{order.email}</td>
                                                        <td className="h-12 px-6 text-md" rowSpan={order.cartItems.length}>{order.date}</td>
                                                        <td className="h-12 px-6 text-md text-red-500 cursor-pointer" rowSpan={order.cartItems.length} onClick={() => orderDelete(order.id)}>Delete</td>
                                                    </>
                                                )}
                                            </tr>
                                        );
                                    })}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetail;
