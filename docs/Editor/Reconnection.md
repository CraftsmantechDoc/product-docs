**Reading this chapter takes about 5 minutes.**

This chapter outlines the reconnection mechanism after a disconnection occurs in a published experience.

# What is Reconnection?

Just like any other online game, the experiences you create and publish on GPark might be disconnected during gameplay due to network fluctuations/errors and server issues. **The reconnection feature** is provided by default and the session will be automatically reconnected in case of disconnection. A successful reconnection will allow players to continue playing, while a failed reconnection will result in disconnection from the server.

# Reconnection States

- **Disconnection**
  - When the client cannot communicate with the server due to network fluctuations/errors or server issues, it will be determined as a disconnection.
- **Reconnection**
  - When a disconnection is detected, a 10-second automatic reconnection will be performed, and a successful reconnection will allow the session to continue, while a failed reconnection will result in disconnection from the server. 
- **Disconnect from the server**
  - If the client still cannot connect to the server after 10 seconds, it will disconnect from the server. Players can choose to exit the session or try to reconnect again.

# How to Enable Reconnection?

- The feature is enabled by default, so no action from the developer is required.

# Important Notes

When developing your experience:

1. Try not to execute the RPC function every frame, or consider reducing the execution frequency if you can't avoid it.
2. Do not call a large number of RPC functions in a concentrated period of time, especially server broadcast RPCs.
3. More than 255 RPC function calls in a fixed time period will result in automatic network disconnection.