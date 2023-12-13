**Reading this chapter takes about 20 minutes.**

This chapter will explain what the Character Editor is and how to use it.



# Character Editor Introduction

## What is the Character Editor?

- The Character Editor allows developers to freely customize the character's appearance by adjusting the properties of body type, hairstyle, clothing, makeup, etc.



## Basics of the Character Editor

- Character Style
  - The Character Editor currently provide four styles of resource: **Anime Style**, **Low-poly Style**, **Realistic**, and **Cartoony**.

**Anime Style**

| Male                                                         | Female                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![img](https://arkimg-qn.ark.online/1681727691521_797-1701053411928-126.png) | ![img](https://arkimg-qn.ark.online/1681727691476_917-1701053411929-128.png) |

**Low-poly**

| Male                                                       | Female                                                     |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| ![img](https://arkimg-qn.ark.online/1681727691613_794.png) | ![img](https://arkimg-qn.ark.online/1681727691429_659.png) |

**Realistic**

| Male                                                       | Female                                                     |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| ![img](https://arkimg-qn.ark.online/1681727691659_808.png) | ![img](https://arkimg-qn.ark.online/1681727691566_381.png) |

**Cartoony**

| Male                                                         | Female                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![img](https://arkimg-qn.ark.online/6e1fc63378da4181a610d3249dbc5592_74082639.webp) | ![img](https://arkimg-qn.ark.online/fa9af05a46534161bc7a33ee32c84a55_74082640.webp) |

- Editing Options

  - Clothing: 

    Customize character appearance by replacing resources and adjusting parameters such as color and pattern. Replacable resources include: 

    - Front hair 
    - Back hair 
    - Upper body cloth 
    - Lower body cloth 
    - Gloves 
    - Shoes & Socks

![img](https://arkimg-qn.ark.online/1701052739825-72.png) 

- Adjustable properties include colors, patterns, etc.

![img](https://arkimg-qn.ark.online/1701052739824-55.png)

- **Character Customization:** Change character appearance by adjusting parameters such as body part scaling and stretching. Adjustable options include face and body.

![img](https://arkimg-qn.ark.online/1701052739824-56.png)

# Character Editor User Guide

## Where To Find It

- Entry 1: Click the [Character Editor] button under Project Content

![img](https://arkimg-qn.ark.online/1701052739824-57.png)

- Entry 2: After selecting the Player object in the Object Manager and setting the humanoid object version to V2, click the [Character Editor] button

![img](https://arkimg-qn.ark.online/1701052739824-58.png)

- Entry 3: Create a V2 humanoid object in the Object Manager, select the object and click the [Character Editor] button in the Properties panel

![img](https://arkimg-qn.ark.online/1701052739824-59.png)

![img](https://arkimg-qn.ark.online/1701052739824-60.png)

![img](https://arkimg-qn.ark.online/1701052739824-61.png)

## Core Features

- **Editing character appearance**

![img](https://arkimg-qn.ark.online/1701052739825-62.png)

![img](https://arkimg-qn.ark.online/1701052739825-63.png)

- After selecting the editable items, adjust or slide the editing properties to change the character appearance.

- Character Slot Editing & Item Preview
  - Slot Editing

![img](https://arkimg-qn.ark.online/1701052739825-64.png)

- You can adjust the relative transformation (position, rotation, scaling) of the character slot, and all attachments mounted to the slot will be affected after adjustment (Note: you can press the shortcut key "V" to display the slot point in the viewport for adjustment)

- Attachments Preview

![img](https://arkimg-qn.ark.online/1701052739825-65.png)



- You can set the relative transformation (position, rotation, scaling) of a specified item on a slot, the item inserted in the slot will receive the effect after the change

- **Character Animation Preview**

![img](https://arkimg-qn.ark.online/1701052739825-66.png)

- Basic Stance Preview
  - Click the switch button to switch the whole set of stance preview resources, click a stance to preview in the main viewport
- Animation Sequence Preview
  - After dragging the animation sequence from the local repository into the animation list, tap a resource and click the [Play] button to preview it in the main viewport (Note: the animation sequence in the animation list can be deleted by the shortcut key "Delete")

## Saving and using character editing data

- Save

![img](https://arkimg-qn.ark.online/1701052739825-67.png)



- When you open the Character Editor for editing through the following entry, the [Save] button is displayed, click Save to save the edited data
  - Save on the player character
    - Entry: After selecting the Player object in the Object Manager and setting the humanoid object version to V2, click the [Character Editor] button
    - Application scenario: Setting the default character appearance of player characters in the game
  - Save on humanoid objects
    - Entry: Create a V2 humanoid object in the Object Manager, select the object and click the [Character Editor] button in the properties panel
    - Application scenario: Creating NPCs for a game
  - Saved in a stored data file
    - Entry: Select the character edit data stored under the project content-character category, and click the [Edit] button in the right-click menu
    - Application scenario: Edit and modify stored character appearance data

- Save As

![img](https://arkimg-qn.ark.online/1701052739825-68.png)

- Click [Save As] to store the character editing data by category in each category folder under Project Content - Characters

![img](https://arkimg-qn.ark.online/1701052739825-69.jpeg)

- Categories

| Category Name    | Usage                                                    |
| ---------------- | -------------------------------------------------------- |
| Upper Body Cloth | Stores upper body cloth editing data                     |
| Lower Body Cloth | Stores lower body cloth editing data                     |
| Hairstyle        | Stores front hair and back hair editing data             |
| Gloves           | Stores gloves editing data                               |
| Shoes            | Stores shoes editing data                                |
| Character        | Stores basic, face, and body related editing data        |
| Slot Parameter   | Stores slot adjustment, item previe related editing data |

- Instructions
  - Use during editing: Quickly import the data stored in the data file through [Import].
  - Use during runtime: apply the data stored in the data file to the Character via the API

```TypeScript
//Call the project content-character data file resource ID to change the corresponding data of the humanoid object
LoadEditorDataByGuid("GUID")
//Synchronize character appearance to multiple ends
SyncDIYDataBegin()
```


## Importing and exporting character editing data

- Export: Select an editing data under the project content-character category, click the [Export] button in the right-click menu, and then select the export path in Explorer to export the data.

![img](https://arkimg-qn.ark.online/1701052739825-70.png)

- Import: Click the [Import Character Appearance Data] button under the project content-character category, select the file to be imported in the explorer and then import the data (can support batch import)

![img](https://arkimg-qn.ark.online/1701052739825-71.png)