import {
    Badge,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    Button,
    Divider,
    Paper,
  } from "@mui/material";
  import { useAppDispatch, useAppSelector } from "../Hooks/Hooks";
  import { removeFromCart, toggleCart } from "../Store/cartSlice";
  import { ShoppingCart as ShoppingCartIcon, Close } from "@mui/icons-material";
  
  const Cart = () => {
    const { items, isOpen } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
  
    // Calculate Total Price
    const totalPrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  
    return (
      <>
        {/* Cart Button with Badge */}
        <IconButton color="inherit" onClick={() => dispatch(toggleCart())}>
          <Badge badgeContent={items?.length || 0} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
  
        {/* Shopping Cart Drawer */}
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={() => dispatch(toggleCart())}
        >
          <Paper sx={{ width: 350, height: "100%", display: "flex", flexDirection: "column" }}>
            
            {/* Cart Header */}
            <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "primary.main", color: "white" }}>
              <Typography variant="h6">Your Cart</Typography>
              <IconButton onClick={() => dispatch(toggleCart())} color="inherit">
                <Close />
              </IconButton>
            </Box>
  
            {/* Cart Items */}
            <List sx={{ flexGrow: 1, overflowY: "auto", p: 2 }}>
              {items.length === 0 ? (
                <Typography variant="body1" align="center" sx={{ mt: 3 }}>
                  Your cart is empty.
                </Typography>
              ) : (
                items.map((item) => (
                  <Box key={item.id} sx={{ mb: 2 }}>
                    <ListItem sx={{ display: "flex", alignItems: "center" }}>
                      
                      {/* Product Image */}
                      <ListItemAvatar>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ width: 60, height: 60, borderRadius: 8, objectFit: "cover" }}
                        />
                      </ListItemAvatar>
  
                      {/* Product Details */}
                      <ListItemText
                        primary={item.title}
                        secondary={`$${item.price} x ${item.quantity}`}
                        sx={{ flex: 1, pl: 2 }}
                      />
  
                      {/* Remove Button */}
                      <Button
                        size="small"
                        color="error"
                        onClick={() => dispatch(removeFromCart({ id: item.id }))}
                      >
                        Remove
                      </Button>
                    </ListItem>
  
                    {/* Divider Between Products */}
                    <Divider />
                  </Box>
                ))
              )}
            </List>
  
            {/* Footer - Total Price & Checkout Button */}
            {items.length > 0 && (
              <Box sx={{ p: 2, borderTop: "1px solid #ddd" }}>
                <Typography variant="h6" align="center" sx={{ mb: 1 }}>
                  Total: ${totalPrice.toFixed(2)}
                </Typography>
  
                {/* Checkout & Close Buttons */}
                <Button variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>
                  Proceed to Checkout
                </Button>
  
                <Button variant="outlined" color="secondary" fullWidth onClick={() => dispatch(toggleCart())}>
                  Close
                </Button>
              </Box>
            )}
          </Paper>
        </Drawer>
      </>
    );
  };
  
  export default Cart;