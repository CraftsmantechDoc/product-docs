**Reading this chapter takes about 10 minutes.**

This chapter introduces the following editor features:

1. Resolution Simulation
2. Screen Orientation

# Resolution Simulation

Developers can use the resolution simulation function to test the game effect under different resolutions in the editing state and test run state.

## Where To Find It

Find this button on the top-right corner of the Editor toolbar.

![img](https://arkimg-qn.ark.online/1701057023405-15.png)

## Panel Description

![img](https://arkimg-qn.ark.online/1701057023403-1.png)

- Add Resolution
  - Developers can click the [+] button to open the custom resolution panel.
  - ![img](https://arkimg-qn.ark.online/1701057023404-2.png)

  - Users can add resolution after filling in the name and size in the custom resolution panel.
- Resolution List
  - On the list, the default viewport resolution and added custom resolutions are displayed. Click one to switch to the selected resolution. 
  - Resolutions added by developers can be deleted.

![img](https://arkimg-qn.ark.online/1701057023404-3.png)

## Usage Effect

- Main viewport: according to the selected resolution and viewport size, the viewport is divided into operable areas and invalid areas.
  - ![img](https://arkimg-qn.ark.online/1701057023404-4.png)
- PIE: Adaptive resizing of the PIE window according to the selected resolution and aspect ratio.
  - ![img](https://arkimg-qn.ark.online/1701057023404-5.png)

<center>16:9</center>

![img](https://arkimg-qn.ark.online/1701057023404-6.png)

<center>4:3</center>

# Screen Orientation

The games on the mobile platform are divided into landscape mode and portrait mode.

Developers can use the Screen Orientation functions to debug their games in the editing and PIE state. This will also be used as the format to set the horizontal and portrait mode after the game is released on the mobile platform.

## Where To Find It

Same as above, find this button on the top-right corner of the Editor toolbar.

![img](https://arkimg-qn.ark.online/1701057023404-7.png)

## Panel Description

![img](https://arkimg-qn.ark.online/1701057023404-8.png)

- You can set the game to landscape or portrait mode after selecting the landscape or portrait option in the device display settings below the pop-up window (landscape is selected by default)

## **Usage Effect**

- Main viewport: according to the landscape or portrait mode and resolution settings, the viewport is divided into operable and invalid areas.
  - ![img](https://arkimg-qn.ark.online/1701057023405-9.png)

<center>Landscape</center>

![img](https://arkimg-qn.ark.online/1701057023405-10.png)

<center>Portrait</center>

- PIE: Adaptive adjustment of PIE window size according to landscape and portrait mode and resolution settings.
  - ![img](https://arkimg-qn.ark.online/1701057023405-11.png)

<center>Landscape</center>

![img](https://arkimg-qn.ark.online/1701057023405-12.png)

<center>Landscape</center>

- Mobile: Showing the released games in landscape mode/portrait mode
  - ![img](https://arkimg-qn.ark.online/1701057023405-13.png)

<center>Landscape</center>

![img](https://arkimg-qn.ark.online/1701057023405-14.png)

<center>Portrait</center>

1. # Important Notes

The editor defaults to landscape mode, providing character control UI and character camera parameters for landscape mode.

After switching from landscape to portrait mode, developers may need to adjust the character control UI and character camera parameters according to the gameplay and content.