**Reading this chapter takes about 15 minutes.**

This section outlines how to create all kinds of colorful skies in the editor by modifying the basic properties of the Skybox.

## What is the Skybox?

The Skybox in the editor adopts the traditional skybox principles, dividing the skybox into three parts: the Top Layer, the Upper Layer, and the Bottom Layer, which correspond to different parts of the Skybox image picture. The Skybox is located in the outermost layer of the editor 3D world, wrapping all objects in the editor within.

![img](https://arkimg-qn.ark.online/1702351531192-30.png)



## How to Configure the Skybox？

Left mouse click on the "BP_MWSysSkyBox" object in the Object Manager (default upper right corner) to edit the skybox in the Properties Panel (default lower right corner).

![img](https://arkimg-qn.ark.online/1702351531190-1.png)

The main components of the Skybox are Skybox texture, gradient effect, stars, the Sun, the Moon, and the clouds. Below are the detailed descriptions of these components.

### Skybox Presets

The editor provides 8 commonly used Skybox preset effects. When a preset effects is selected, the basic properties of the Skybox below will be automatically change to the preset default values.

We can switch between different skybox presets based on different environments, making it convenient to switch skyboxes without having to set each parameter individually. We can also use the preset functionality to quickly restore settings.

Implementation steps:

First, let's add a few UI buttons to facilitate the switching of skybox presets. Of course, alternative mechanisms can also be used for switching. Then, in the onStart method of the UIDefault script, add the following code:

```TypeScript
    //Find the corresponding Preset 1 button
    const Preset1Btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_1') as Button
    //Find the corresponding Preset 2 button
    const Preset2Btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_2') as Button
    //Find the corresponding Preset 3 button
    const Preset3Btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_3') as Button
    //Find the corresponding Preset 4 button
    const Preset4Btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_4') as Button
    //Find the corresponding Preset 5 button
    const Preset5Btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_5') as Button
    //Find the corresponding Preset 6 button
    const Preset6Btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_6') as Button
    //Find the corresponding Preset 7 button
    const Preset7Btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_7') as Button
    //Find the corresponding Preset 8 button
    const Preset8Btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_8') as Button

    //Clicking the button, switch to Skybox preset 1
    Preset1Btn.onPressed.add(() => {
        Skybox.preset = 0;
    })
    //Clicking the button, switch to Skybox preset 2
    Preset2Btn.onPressed.add(() => {
        Skybox.preset = 1;
    })
    //Clicking the button, switch to Skybox preset 3
    Preset3Btn.onPressed.add(() => {
        Skybox.preset = 2;
    })
    //Clicking the button, switch to Skybox preset 4
    Preset4Btn.onPressed.add(() => {
        Skybox.preset = 3;
    })
    //Clicking the button, switch to Skybox preset 5
    Preset5Btn.onPressed.add(() => {
        Skybox.preset = 4;
    })
    //Clicking the button, switch to Skybox preset 6
    Preset6Btn.onPressed.add(() => {
        Skybox.preset = 5;
    })
    //Clicking the button, switch to Skybox preset 7
    Preset7Btn.onPressed.add(() => {
        Skybox.preset = 6;
    })
    //Clicking the button, switch to Skybox preset 8
    Preset8Btn.onPressed.add(() => {
        Skybox.preset = 7;
    })
}
```

### Skybox Texture

Changing Skybox texture: Drag the Skybox texture you want to replace from the Resource Manager on the left, then drag it to the right Properties panel → Skybox Texture and release it.

After choosing your texture, you can make further modifications to the sky texture.

- **Skybox Brightness**: You may change the brightness of the color emitted by the sky, with a value between 0 and 100.
- **Skybox Color**: You can change the overall color of the Skybox. This is equivalent to overlaying a color filter on the Skybox.

### Gradient Effect

![img](https://arkimg-qn.ark.online/1702351531190-2.png)



With gradient enabled, developers can edit the Top, the Upper, and the Lower layers of the Skybox. The colors of these layers will be multiplied with the overall Skybox color.

- Enable Gradient Effect:

   When checked, gradient effect is activated. If unchecked, the colors of the layers of the Skybox selected by the developer will not take effect.

  - **Skybox Top Layer Color:** The 65-100% portion of the Skybox. If gradient effect is turned on, the color will be multiplied with the overall Skybox color tone.
  - **Skybox Upper Layer Color:** The 50-64% portion of the Skybox. If gradient effect is turned on, the color will be multiplied with the overall Skybox color tone.
  - **Skybox Bottom Layer Color:** The 0-49% portion of the Skybox. If gradient effect is turned on, the color will be multiplied with the overall Skybox color tone.
  - **Faded Horizon:** Affects the gradient width of the horizon, in the range of 1-20. The smaller the value, the wider the color alternation between two adjacent parts; the larger the value, the narrower the color alternation between two adjacent parts.

![img](https://arkimg-qn.ark.online/1702351531190-3.png)

<center>Color effect of upper (red) and bottom (yellow) layers when the horizon fade out value is 1</center>

![img](https://arkimg-qn.ark.online/1702351531190-4.png)

<center>Color effect of upper (red) and bottom (yellow) layers when the horizon fade out value is 20</center>

### Stars

![img](https://arkimg-qn.ark.online/1702351531190-5.png)



- **Enable Stars:** When turned on, you can modify the properties of the stars, and the stars effect will be added to the Skybox; when off, the stars will not appear in the sky.

![img](https://arkimg-qn.ark.online/1702351531190-6.png)

<center>Stars Enabled</center>

![img](https://arkimg-qn.ark.online/asynccode)

<center>Stars Disabled</center>

- **Star Texture:** Change the star texture to create the effect for the stars.
- **Star Brightness:** Used to control the brightness of all stars in the sky, ranging from 0 to 1. The greater the brightness, the brighter the stars; the smaller the brightness, the dimmer the stars.

![img](https://arkimg-qn.ark.online/1702351531190-8.png)

<center>Brightness of 0.5</center>

![img](https://arkimg-qn.ark.online/asynccode)

<center>Brightness of 1.0</center>

- **Star Density:** Controls the number of stars in the sky, ranging from 0-100. At higher density, there are more stars in the sky, and size of the stars are smaller. At lower density, there are fewer stars in the sky, and the size of the stars are larger. 

![img](https://arkimg-qn.ark.online/asynccode)

<center>Density of 10</center>

![img](https://arkimg-qn.ark.online/asynccode)

<center>Density of 50</center>

### The Sun

![img](https://arkimg-qn.ark.online/1702351531191-12.png)



- **Enable Sun:** When turned on, you can modify the properties of the sun and a sun effect will be added to the Skybox; when turned off, the sun will not appear in the sky.

**Note that whenever the sun and the moon are enabled at the same time, only the sun is displayed, regardless of size.**

- **Sun Texture:** Change the sun texture to change the effect of the sun.
- **Sun Brightness:** Used to control the brightness of the sun in the sky, ranging from 0 to 2000. The greater the brightness, the brighter the sun. The smaller the brightness, the darker the sun. The following figures show the effect of the sun with brightness 0, 200 and 2000 respectively.

![img](https://arkimg-qn.ark.online/1702351531191-13.png)

![img](https://arkimg-qn.ark.online/1702352581270-71.png)

![img](https://arkimg-qn.ark.online/asynccode)

- **Sun Color:** Used to configure the color of the sun.
- **Sun Size:** Size of the sun, with a range between 0 to 100.

![img](https://arkimg-qn.ark.online/asynccode)

<center>Size of 10</center>

![img](https://arkimg-qn.ark.online/asynccode)

<center>Size of 50</center>

### The Moon

![img](https://arkimg-qn.ark.online/asynccode)



- Enable Moon：

  When turned on, you can modify the properties of the moon and a moon effect will be added to the Skybox; when turned off, the moon will not appear in the sky.

  - **Moon Texture:** Change the moon texture to change the effect of the moon.
  - **Moon Brightness:** Used to control the brightness of the Moon in the sky, ranging from 0 to 2000. The greater the brightness, the brighter the Moon. The smaller the brightness, the darker the Moon. The following figures show the effect of the moon with brightness 0, 200 and 2000 respectively.

![img](https://arkimg-qn.ark.online/asynccode)

![img](https://arkimg-qn.ark.online/1702352614943-74.png)

![img](https://arkimg-qn.ark.online/asynccode)

- **Moon Color:** Used to configure the color of the moon.
- **Moon Size:** Size of the moon, with a range between 0 to 100.

![img](https://arkimg-qn.ark.online/asynccode)

<center>Size of 10</center>

![img](https://arkimg-qn.ark.online/asynccode)

<center>Size of 50</center>

### Clouds

![img](https://arkimg-qn.ark.online/asynccode)



- Enable Cloud：

  When turned on, you can modify the properties of the clouds and clouds effect will be added to the Skybox; when turned off, the clouds will not appear in the sky.

  - **Cloud Texture:** Change the cloud texture to change the effect of the moon.
  - **Cloud Transparency:** Used to control the transparency of the clouds, ranging from 0 to 1. The smaller the transparency, the more transparent the cloud. The larger the transparency, the more visible the cloud.

![img](https://arkimg-qn.ark.online/asynccode)

<center>Cloud with transparency of 0.2</center>

![img](https://arkimg-qn.ark.online/asynccode)

<center>Cloud with transparency of 0.8</center>

- **Cloud Color: **Color of the clouds.
- **Cloud Density: **The density of clouds in the sky ranges from 0 to 1. The higher the density, the more sparse the cloud pattern; the lower the density, the more compact the cloud pattern.

![img](https://arkimg-qn.ark.online/asynccode)

<center>Cloud with density of 0.2</center>

![img](https://arkimg-qn.ark.online/asynccode)

<center>Cloud with density of 0.8</center>

- **Cloud Speed: **The speed of clouds moving in the sky ranges from 0 to 10. The greater the speed, the faster the clouds move. The smaller the speed, the slower the clouds move.

![img](https://arkimg-qn.ark.online/asynccode)

<center>Speed of 10</center>