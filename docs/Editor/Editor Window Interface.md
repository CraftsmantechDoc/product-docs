# Editor Window Interface

**Reading this chapter takes about 30 minutes.**

This chapter provides a comprehensive guide on the general operation of each window interface of the editor.

We recommend that you look for specific modules that you are interested in.

## What is an Editor Window Interface?

The interface of the editor is composed of various windows pieced together.

Each window bears part of the editor's functions. Become familiar with the operation of each window as well as its functions, only then can you use it to your desire and create your perfect game.

## What Does an Editor Window Interface Contain?

- The editor window consists of eight parts: Top Tab, Menu Bar, Tool Bar, Asset Library, Main Viewport, Object Manager, Project Content, and Properties Panel.
- The default layout is shown below

![1701063770668-116](https://arkimg-qn.ark.online/1701063770668-116-1702377698473-1.jpeg)

## How to Properly Use/Operate Different Editor Windows

### General Rules

#### Tabbing

- All five windows support tabbing except for the Menu Bar, Top Tab, and Tool Bar.
- Take the Asset Library as an example, click on the small yellow corner at the top left of the picture, and the Asset Library tab will appear.

![img](https://arkimg-qn.ark.online/1701063770647-1.png)![img](https://arkimg-qn.ark.online/1701063770647-2.png)

- Once tabbed, you can drag and drop windows to various locations in the editor, or drag and drop them as a separate window.

![img](https://arkimg-qn.ark.online/1701063770647-4.png)

- To hide tabs, right-click on the tab and click on "Hide Tabs".

- You can also access the Close tab, Close Tabs to the Right, and Close Other Tabs buttons with right-click on the tab.

  ![img](https://arkimg-qn.ark.online/1701063770647-5.png)

- If you want to restore to the initial settings, click on the Menu Bar - View - Restore Default Settings

### Top Tab

![img](https://arkimg-qn.ark.online/1701063770647-6.png)

- The Top Tab has different rules than the previously mentioned tabs, so you cannot drag and drop both under the same level
- The main editor tab exists by default and cannot be closed
- **Sub-editors** can be turned into a page by dragging and dropping them to the Top Tab area

### Menu Bar

![img](https://arkimg-qn.ark.online/1701063770647-7.png)

#### Project

- The project menu provides a series of project-related operations; users can create, open, backup, manage games, etc. here

![img](https://arkimg-qn.ark.online/1701063770647-8.png)

#### View

- Control the visibility of each window, managed by multi-select boxes

![img](https://arkimg-qn.ark.online/1701063770647-9.png)

#### Help

- Open Help and click on the Release Note button to open the page corresponding to the update announcement, so that you can check the content update of editor versions

![img](https://arkimg-qn.ark.online/1701063770647-10.png)

#### Undo & Redo

-  The hotkeys for those two commonplace operations are ctrl+z and ctrl+y respectively

![img](https://arkimg-qn.ark.online/1701063770648-11.png)

### Tool Bar

#### Draw Mode

![img](https://arkimg-qn.ark.online/1701063770648-12.png)

- See more details in the Draw Mode document. 

#### Transform Tools

![img](https://arkimg-qn.ark.online/1701063770648-13.png)

- The three buttons on the left are Move (W), Rotate (E), and Scale (R). Select them with your mouse or use the shortcut keys in the main viewport
- The rightmost icon + value stands for the minimum unit of execution under the selected transform tool (the figure below shows the unit of movement)

![img](https://arkimg-qn.ark.online/1701063770648-14.png)

- Click on the grid icon to choose whether to enable this feature; if disabled, the operation command will be executed in the smallest unit by system default (which is much smaller than the unit provided in the drop-down box)

![img](https://arkimg-qn.ark.online/1701063770648-15.png)

#### World/Local Axis

![img](https://arkimg-qn.ark.online/1701063770648-16.png)

- Click this icon to switch the world/local axis used by the main viewport
- World Axis: When performing movement and rotation, it always follows the world coordinates and does not change with the rotation of the object
- Local Axis: When performing movement and rotation, the selected object is used as the reference system

![img](https://arkimg-qn.ark.online/1701063770648-17.png)![img](https://arkimg-qn.ark.online/1701063770648-18.png)

#### Create

![img](https://arkimg-qn.ark.online/1701063770648-19.png)

- Clicking on New Script will add a new script file to the project contents and place it in the renaming state
- Clicking on New Prefab will add a new prefab file to the project content and place it in the renaming state, and the main viewport and object manager will automatically enter the editing state of the prefab
- Clicking on New UI will add a new UI file to the project content and place it in the renaming state
- Clicking on New Character will open the Character Editor

#### Run

![img](https://arkimg-qn.ark.online/1701063770648-20.png)

- Click the Run icon on the left to run the game locally
- Click the drop-down icon on the right side of Run button to open the Run Settings screen

![img](https://arkimg-qn.ark.online/1701063770648-21.png)

- The game will be run based on the conditions set here
- Port: the port number when running, the same port players will enter the same space assigned by the server
- Standalone Mode: When this mode is enabled, the number of players can only be 1, and you cannot connect with others
- Number of Players: Selectable only in non-Standalone Mode, determines the number of players in the local runtime
- Starting Location: You may choose whether to run with the default spawn point in the scene (F5) or with the current actual camera position

#### Visible

![img](https://arkimg-qn.ark.online/1701063770648-22.png)

- Navigation Area: determines whether the specific green area displayed in Navigation Area objects is visible or not in the main viewport

  ![img](https://arkimg-qn.ark.online/1701063770648-23.png)

- Icons and Wireframes: whether icons and wireframes are visible in the main viewport; shortcut key: V

  ![img](https://arkimg-qn.ark.online/1701063770648-24.png)

- Chat Box Area: whether to hide the chat area in the main viewport during the editing phase (unpublished) (the chat area is a generic chat feature provided by the platform and will be generated by default after the game is published to the platform)

![img](https://arkimg-qn.ark.online/1701063770649-25.png)

#### Resolution

![img](https://arkimg-qn.ark.online/1701063770649-26.png)

- Controls the resolution of the current primary viewport/runtime

- Primary viewport tiling: The scene fills the current primary viewport size

- The new button at the bottom can be used to create customized resolution. After clicking it, a customization panel appears where you can enter the name and size information for a custom resolution. 

  ![img](https://arkimg-qn.ark.online/1701063770649-27.png)

![img](https://arkimg-qn.ark.online/1701063770649-28.png)

- After successfully creating a new one, click to switch to it. Hover over the delete icon on the right side to delete that custom resolution.
- Device display settings: Determines whether the primary viewport screen is landscape or portrait orientation. 

![img](https://arkimg-qn.ark.online/1701063770649-29.png)

#### Camera

![img](https://arkimg-qn.ark.online/1701063770649-30.png)

- Set the speed and acceleration/deceleration ratio of the current camera movement with the slider
- Normal Speed: The speed of camera movement in the main viewport when the right mouse button + WASD are pressed
- Fast Mode Speed Multiplier: The speed multiplier of fast mode camera movement in the main viewport when the right mouse button + WASD + Shift are pressed. If the value is 2, then the camera will move twice as fast compared to the default speed. 
- The speed multiplier of slow mode camera movement in the main viewport when the right mouse button + WASD + Ctrl are pressed. If the value is 0.1, then the camera will move at 1/10 of the default speed. 

#### Settings

![img](https://arkimg-qn.ark.online/1701063770649-31.png)

- World Settings: set several world scene properties and player properties, see [Editor Settings](https://meta.feishu.cn/wiki/wikcnCfsoc1NfXvtIruO9KuIHpg) for more details
- Editor Settings: set several general editor-related properties, see [Editor Settings](https://meta.feishu.cn/wiki/wikcnCfsoc1NfXvtIruO9KuIHpg) for more details

#### Collision Box

- Enabling/Disabling the collision box function in the Tool Bar

![img](https://arkimg-qn.ark.online/1701063770649-32.png)

- By enabling this button, the following alignment rules will be activated

  - Bounding Box Edge Alignment

    - When dragging an object to move, when one side of the bounding box is aligned with the bounding box edge of other objects, the aligned bounding box edge is shown in yellow
    - If the mouse continues to drag the object further for a certain distance, the object is lifted from the Bounding Box Edge Alignment and you can continue to move the object

    ![img](https://arkimg-qn.ark.online/1701063770649-33.png)

  - Bounding Box Surface Alignment

    - When dragging an object to move, when one side of the enclosing box is aligned with the surface of the enclosing box of other objects, the surface of the aligned enclosing box is shown in yellow

    - If the mouse continues to drag the object further for a certain distance, the object is lifted from the Bounding Box Surface Alignment and you can continue to move the object

      ![img](https://arkimg-qn.ark.online/1701063770649-34.png)

#### Align Tool

- Find the Align Tool button on the Tool Bar

  ![img](https://arkimg-qn.ark.online/1701063770649-35.png)

  - After you click the button, the panel is displayed next to the Properties Panel

    ![img](https://arkimg-qn.ark.online/1701063770649-36.png)

  - Usage

    - Mode: alignment by maximum/center/minimum of the selected axis

      ![img](https://arkimg-qn.ark.online/1701063770649-37.png)

    - Align in: alignment by World/Local Axis. You may select multiple axes

      ![img](https://arkimg-qn.ark.online/1701063770649-38.png)

    - Relative to:

      ![img](https://arkimg-qn.ark.online/1701063770649-39.png)

      - Selected Bounds: alignment according to the bounding box formed by the selected object

      - Active Object: the default is the last selected object, which is used as the reference system.

        - After checking this box, you can modify the active object by left-clicking on it, and the border color of the active object is orange

          ![img](https://arkimg-qn.ark.online/1701063770649-40.png)

    - Align: When all options are selected, the Align button is highlighted. Hover the mouse into the Align tool panel, and the main viewport displays the alignment axis/face/point

    - | Axis                                                         | Face                                                         | Point                                                        |
      | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
      | ![img](https://arkimg-qn.ark.online/1701063770650-41-1701063907662-349.png) | ![img](https://arkimg-qn.ark.online/1701063770650-42-1701063918312-351.png) | ![img](https://arkimg-qn.ark.online/1701063770650-43-1701063923494-353.png) |

      

### Asset Library

![img](https://arkimg-qn.ark.online/1701063770650-44.png)

- The Asset Library provides a variety of assets to build a wide range of scenes
- The icon tabs on the left are Art Assets, Game Function Object, Favorites, and History respectively
  - Logic Assets: objects that have some generic ability to implement game logic
    - Index Level: Logical Assets - Asset Types
  - Art Assets: used to build the appearance of scenes
    - Index Level: Art Assets - Asset Type - Theme
  - Favorites and History tabs are under development and will be available soon

#### Download and Previewing Assets

- The assets in the editor are stored on cloud servers. You need to click on the asset to download it
- Click on the downloaded assets, you can preview them in the property panel. Static models, effects, and animations can be previewed
- Each time you enter a project, it takes a few seconds to pull information about the asset from the cloud for asset display, filtering, and search operations

#### Using Assets

- Different assets are used in different ways, please refer to the asset-related documentation for details
- Right-click on a asset to copy the asset ID and name for easy reference in scripts

![img](https://arkimg-qn.ark.online/1701063770650-45.png)

#### Filter

- Supports filtering the theme and category of assets
- Style filtering by drop-down box selection, supports multi-selection. Results are unioned, in other words, displayed results meet at least one of the filter requirements
- Different asset types have different styles, and filters will not be cleared when switching themes under the same type

![img](https://arkimg-qn.ark.online/1701063770650-46.png)

- Filter categories by tag selection, supports multi-selection. the tags that are not displayed can be expanded by the drop-down button. Results are unioned, in other words, displayed results meet at least one of the filter requirements

  ![img](https://arkimg-qn.ark.online/1701063770650-47.png)

- Theme and category filter criteria are intersected

- When switching between topics of the same asset type, the filters for styles are retained and the filters for categories are removed

#### Search

![img](https://arkimg-qn.ark.online/1701063770650-48.png)

- Fuzzy search can be performed by searching asset name, asset ID, and asset tag
- When ending the search state, the navigation directory is initialized and the current category filter is cleared, but the style filter will be retained the next time you enter the directory before the search

### Main Viewport

![img](https://arkimg-qn.ark.online/1701063770650-49.png)

- The main viewport is used to build a colorful game world

#### Selecting Objects

- There are three ways to select objects, which are main viewport click selection, main viewport box selection, object manager click selection
  - Main viewport click selection: Left mouse click on the object in the main viewport to select it, left mouse button + ctrl to multi-select objects
  - Main viewport box selection: Hold down the left mouse button and drag to area-select in the interface, you can select multiple objects this way
  - Object manager click selection: Left mouse click on the object in the object manager to select the object, left mouse button + ctrl to multi-select objects

#### Camera Commands

- Click and drag the right mouse button to rotate the camera (camera position stays the same)
- Scroll the wheel to move the camera (camera orientation stays the same)
- WASD + right mouse button to move the camera and adjust the camera orientation (camera position and orientation are changed)

#### Transform Tool

- Move: press W after selecting the object to switch to move mode, left mouse button to drag the corresponding coordinate axis to complete the object's movement

  ![img](https://arkimg-qn.ark.online/1701063770650-50.png)

  - Multiple axes can be selected when dragging and dropping
  - Objects can be multi-selected
  - In addition to moving axes, the object can also be moved by dragging and holding the left mouse button, and it is not related to transform mode
    - When performing this, static objects will be automatically attached to each other 
  - While moving the main viewport object, hold down the shift key to lock the relative position between the camera and the object

- Rotate: Press E to switch to rotation mode after selecting the object, and left mouse click to rotate the rotation axis in the viewport to complete the rotation of the object

  ![img](https://arkimg-qn.ark.online/1701063770650-51.png)

  - Only one axis can be selected when rotating
  - The object can be multi-selected, **but when multi-selected, objects will rotate based on the center of the enclosing box geometry, not the object anchor point**

- Scale: Press R to switch to scale mode after selecting the object, and drag the corresponding zoom axis with the left mouse button to complete the scaling of the object

  ![img](https://arkimg-qn.ark.online/1701063770650-52.png)

  - Multiple axes can be selected when scaling
  - Objects can be multi-selected
  - Scaling by object anchor point for isometric scaling
  - Unilateral Scaling (only usable for static objects): six points as shown in the figure, up and down, left and right, front and back; use the left mouse button to drag these six points to achieve the effect of unilateral scaling

#### Main Viewport Right-Click Menu

![img](https://arkimg-qn.ark.online/1701063770650-53.png)

- The right-click function in the main viewport is only available when an object is selected (except for paste)

- Basic commands such as copy and paste are not explained here

- Viewing an object from a certain orientation

  - Move the camera to a certain orientation of the object to facilitate viewing the object from that orientation

    ![img](https://arkimg-qn.ark.online/1701063770650-54.png)

- Object Focus

  - After entering the object focus state, when right-clicking to rotate the camera angle, the camera will rotate around the object, so that it is easy to observe the details of the object from different directions
  - You can use the shortcut key F, or "Object Focus" in the main viewport right-click menu, or double-click an object in the object manager to enter the object focus state

- Move the object to the location of the camera

  - Move the object to the current camera location, so that the camera overlaps with the current object anchor point, modified by the object's position

- Rotate the object to the orientation of the camera

  - Rotates the object to the current camera orientation, modifying the **rotation angle** of the object

- Snap Down

  - Snap the object to the ground **(the bounding box of the object** will touch the ground)
  - If the object's bounding box is already in contact with or under the ground, the operation is invalid

#### View Selector

![img](https://arkimg-qn.ark.online/1701063770650-55.png)

- Base faces (6): contains front, back, left, right, top, bottom
- Corner faces (8): the corner faces are sandwiched by three adjacent faces, including front top left, front top right, front bottom left, front lower right, rear top left, rear top right, rear bottom left, rear bottom right
- Clicking on one of the base/corner faces of the view selector will rotate the position and orientation of the camera and switch the view to that surface
- Hold down the left mouse button to drag the view selector in the main viewport

#### Scene/Prefab Switch

![img](https://arkimg-qn.ark.online/1701063770650-56.png)

- The main viewport has two editing modes: scene mode and prefab mode
- Under scene mode, you are editing the game scene
- Under prefab mode, you are editing a specific prefab
- After editing a prefab in prefab mode, you can click the save button in the project content or switch back to scene mode to save the prefab

![img](https://arkimg-qn.ark.online/1701063770650-57.png)

- When double-clicking on a prefab file or creating a new prefab, the switch button in the above figure will appear, click to switch modes. You can also close the prefab editing interface by using the close button in the upper right corner of the main viewport

![img](https://arkimg-qn.ark.online/1701063770651-58.png)

###  Project Content

![img](https://arkimg-qn.ark.online/1701063770651-59.png)

- The purpose of the project content is to manage and edit the files used in this project
- The left side of the content directory is the file type categories. Different categories provide different functions. The left side is also the navigation area, you can quickly access the **folder path** through the left navigation area

![img](https://arkimg-qn.ark.online/1701063770651-60.png)

- The left directory also supports right-click menu operations for folders, and the functions of folders under each type are explained below

#### Tiled/List Layout

![img](https://arkimg-qn.ark.online/1701063770651-61.png)

- You can choose how the content is organized in the project content 
  - The function is accessed via the icon in the upper right corner of the project content page. The left one is the list display mode, and the right one is the tiled mode display 
  - Layout options are stored locally 

#### Shortcut Access

- The top left corner provides a shortcut access function, click on the corresponding folder, it will jump to the folder

  ![img](https://arkimg-qn.ark.online/1701063770651-62.png)

#### Search Function

![img](https://arkimg-qn.ark.online/1701063770651-63.png)

- Search based on the currently selected directory **containing the same level and lower level**
- The search rule is fuzzy search by name
- Search terms will not be cleared when switching file categories on the left

#### Preview

- Tiled Layout: When hovering over a file, a preview portal appears in the upper right corner of the icon

![img](https://arkimg-qn.ark.online/1701063770651-64.png)

- List Layout: When hovering over a file, a preview portal appears on the far right of the line

![img](https://arkimg-qn.ark.online/1701063770651-65.png)

- Click this button to open the preview window, which exists as a separate window and can be dragged and dropped to any position on the screen

![img](https://arkimg-qn.ark.online/1701063770651-66.png)

- Script Preview: provide copy button for GUID, name, and show script details

- Prefab Preview: provide GUID, name copy button, and display prefab body structure, support viewport preview

  - Prefab structure tree can expand and collapse nodes

  - Viewport Preview: similar to the main viewport camera operation, this preview offers a better view of this specific asset

    ![img](https://arkimg-qn.ark.online/1701063770651-67.png)

- UI File Preview: Contains GUID and the copy button

![img](https://arkimg-qn.ark.online/1701063770651-68.png)

- Character File Preview: contains GUID, copy button for name, and preview viewport

![img](https://arkimg-qn.ark.online/1701063770651-69.png)

#### Scripts

![img](https://arkimg-qn.ark.online/1701063770651-70.png)

- When the left navigation bar switches to script, the right side contains the New Script, New UI Script and Import Script buttons

- New Script: click this button to create a new script in the current directory.

- New UI script: click this button to create a new UI script in the current directory

- Import Script: click to open windows explorer to import the script file into the current directory

  - Only .ts format files can be imported
  - Supports multi-selecting when importing

- Using the script file

  - Drag and drop the script file into the main viewport or object manager to take effect
  - The specific mount level is related to the logic of the code in the script

- Right-click menu - Right-click script file

  ![img](https://arkimg-qn.ark.online/1701063770651-71.png)

  - Copy, paste and other basic operations will not be explained here
  - Select Recently Referenced Object
    - The file in the project content is referenced to the same object in the object manager (e.g. if you drag and drop a script into the object manager, the script object in the object manager is actually referenced to the script file in the project content)
    - **The same script file may be referenced multiple times, so the function is to select the most recently referenced object in the object manager**
  - Edit
    - After clicking on edit (or double-clicking on the script file), VScode will be opened automatically to edit the script
    - If you don't have VScode, please download it from the VScode website.
  - Export
    - Click Export to open windows explorer and store the script file, the main purpose is to reuse the script for different projects.
  - Refresh
    - Update the script information to the latest (you need to click save after editing in VScode)

- Right-click menu - Right-click empty area

  ![img](https://arkimg-qn.ark.online/1701063770651-72.png)

  - Create Folder
    - Create a folder in the current directory
    - You can drag different scripts into different folders for easy management

- Right-click menu - Right-click on the folder

  - These basic operations will not be described here

    ![img](https://arkimg-qn.ark.online/1701063770651-73.png)

#### Prefabs

- Prefabs exist in the project content in the form of folders

  ![img](https://arkimg-qn.ark.online/1701063770651-74.png)

  - This folder contains a prefab file, a script folder, and a UI folder

    ![img](https://arkimg-qn.ark.online/1701063770652-75.png)

  - Double-click the prefab file, and the main viewport will enter the prefab editing state

    ![img](https://arkimg-qn.ark.online/1701063770652-76.png)

    - After modification, the Save button appears on the project content prefab panel

      ![img](https://arkimg-qn.ark.online/1701063770652-77.png)

- The right-click function of prefabs is generally the same as the script, with the following differences

  - You can't create folders within the prefab interface
  - **The script and UI folders in the prefab folder do not support delete, rename and paste operations.**
  - The prefab folder supports exporting, which is convenient for reusing the whole prefabricated body.

- Using prefabs

  - Drag a prefab file (not a folder) into the main viewport or object manager to take effect

- See the Prefab documentation for more details on how to use prefabs 

#### UI File

![img](https://arkimg-qn.ark.online/1701063770652-78.png)

- UI file interface has the New UI button, click it to create a new UI file in the current directory
- Folder operation is the same as scripting
- Right-clicking the UI file has basically the same as the script's case, the only difference is that when editing (double click) a UI file, it will automatically open the UI editor
- Using UI files
  - Drag the UI file into the main viewport or object manager to take effect
- Please refer to UI editor documentation for UI editor related usage

#### Character

![img](https://arkimg-qn.ark.online/1701063770652-79.png)

- The character interface provides buttons to create a new appearance and import character appearance data
- **Click on New Appearance (or double-click on the character data file) to open the character editor**
- Click on Import Character Appearance, and windows explorer will open. You can select the previously exported character data, the main purpose is also for different project data reuse
- Folder operation is the same as the script's
- The right-click character data file functions the same as the script's, the only difference is that when editing (double-clicking) the character data, it will automatically pull up the character editor
- Using Character Files
  - Can be dragged into the main viewport or object manager to exist as individual character data
  - The purpose of character data is to modify the character appearance, if you want to use it on a character (such as putting a piece of clothing on a person), you need to use it in the character editor or call the corresponding API in the script, please refer to the character editor documentation for more details

#### Materials

- Material files are different from other files in that they require specific material asset support. Material files are description files (prefab is also a description file), which describe the configuration of the parameters of the material asset
- To customize the material, you first need to go to the properties panel to find the material properties and click the Edit Material button

![img](https://arkimg-qn.ark.online/1701063770652-80.png)

- After clicking the button, a new material file will be created in the project content based on the material asset
- Double-click on the material file to edit the properties of the material and the texture assets used by the material
- After modifying the material, click Save to save the material's parameter settings

### Output Window

- Output window to view logs

![img](https://arkimg-qn.ark.online/1701063770652-81.png)

- The output window is divided into server-side, client-side 1/2/3/4, selected by drop-down

![img](https://arkimg-qn.ark.online/1701063770652-82.png)

- Log levels are divided into information, warning, error, and output, also selected by drop-down

![img](https://arkimg-qn.ark.online/1701063770652-83.png)

- Right-click operations

  ![img](https://arkimg-qn.ark.online/1701063770652-84.png)

  - Provide clear log, copy, and open log directory operations

### Object Manager

![img](https://arkimg-qn.ark.online/1701063770652-85.png)

- Object Manager is used to manage all kinds of objects used in the scene
- The root directory is the World, Object, Navigation Area, and Priority Loading respectively
  - Objects under World: objects that cannot be deleted and must exist in the scene, such as the camera, skybox, etc.
  - Objects under Object: general objects, which are also the main part of building the game world
  - Objects under Navigation Area: only "navigation area" and "navigation area modification" logical objects and scripts can be mounted here
  - Objects under Priority Loading: objects placed in this area will be loaded when starting the game. The game will only enter after all priority loading is completed

#### Mounting

- Place an object on the child-level of an object: drag and drop the object onto another object

![img](https://arkimg-qn.ark.online/1701063770652-86.png)![img](https://arkimg-qn.ark.online/1701063770652-87.png)

- Place an object on the level of an object: drag the object to the horizontal line between two objects, and also for level movement

![img](https://arkimg-qn.ark.online/1701063770652-88.png)![img](https://arkimg-qn.ark.online/1701063770652-89.png)

#### Expand/Collapse All

![img](https://arkimg-qn.ark.online/1701063770652-90.png)

- Only the root directory "Objects" has this function
- Clicking this button will expand/close all branches of the tree structure under "Objects".

#### Search

![img](https://arkimg-qn.ark.online/1701063770653-91.png)

- You can search the name of each object and GUID with fuzzy searches
- After selecting an object in the search state, you can still locate the object when you exit the search state (or the last selected object if there are multiple selections)

#### Filter

![img](https://arkimg-qn.ark.online/1701063770653-92.png)

- Supports filtering on Static Status, Network Status, Viewport Display, Viewport Lock, and File properties of the object
- The filter options are presented in the form of tags, which can be deleted by clicking the tag clear button

![img](https://arkimg-qn.ark.online/1701063770653-93.png)

- Filter results are unioned, in other words, displayed results meet at least one of the filter requirements

#### Locking/Hiding on the Right of Objects

![img](https://arkimg-qn.ark.online/1701063770653-94.png)

- Lock/hide button display logic

  ![img](https://arkimg-qn.ark.online/1701063770653-95.png)

  - When the lock/hide button is in the "locked" or "hidden" state, the button is displayed in the object manager
  - When the locked/hidden button is "unlocked" or "unhidden", the corresponding button is displayed only when the mouse hovers over the object

- Network Status: Click the "S&C" button in the figure to expand the network status selection

  - ![img](https://arkimg-qn.ark.online/1701063770653-96.png)

  - This property can also be set in the properties panel

- Locked Status: click the lock button to switch the locked/unlocked status

  - Locked objects can not be selected in the main viewport, you can only select the object in the object manager. In the main viewport, these objects will be displayed with a red box

    ![img](https://arkimg-qn.ark.online/1701063770653-97.png)

- Shown and Hidden State: click the show/hide button to toggle the show/hide status

  - Hidden objects are not visible in the main viewport

#### Scene/Prefab Mode

- Like the main viewport, the object manager is divided into scene/prefab mode
- After entering the prefab editing state, the object manager will display the structure of the prefab instead of the world scene; synchronized with the main viewport

#### Right-click Menu

![img](https://arkimg-qn.ark.online/1701063770653-98.png)

- The scope of functions provided by the right-click menu function differs for different root directories and file types, but the types of functions are basically the same; some common functions are described below

- Paste and Paste to

  - Paste: paste to the same level as the selected object (when the object is not selected, paste to the "Object" child level of the root directory)
  - Paste to: paste to the child level of the selected object

- Create Folder & Create Folder with Selection

  - Create Folder: create a folder at the child level of the selected object
  - Create Folder with Selection: create a folder at the same level as the selected object, **the selected object becomes a child-level object under the folder**

- Create Merged Actor & Create Merged Actor with Selected

  - Only static objects can be merged, and merging objects can optimize runtime performance (multiple meshes into one mesh)

  - When an object is selected, or when the "object" root is selected, an empty merge actor can be created at the child level of that object, and the user can drag and drop static objects into the empty merge actor.

  - When one or more objects are selected, a merged actor can be created with the selected objects, which is equivalent to merging these objects.

  - Right click on the merged actor to unmerge it

    ![img](https://arkimg-qn.ark.online/1701063770653-99.png)

- Create Game Function Object

  - Available only for single selection, not for multiple selections

  - Create a specified function object at the child level of this object to facilitate the handling of game logic for this object

    ![img](https://arkimg-qn.ark.online/1701063770653-100.png)

- Object Focus: same function as the main viewport

- Locating Source

  - **Objects in the object manager are actually referenced objects, which themselves are only a reference relationship, not the data itself**
  - Place the data source of the object in the selected state **(the source is generally the library and project content)**
  - If you drag a asset from the library to the main viewport, the locating source button can directly lead to the location of the asset in the library, and placed it in the selected state
  - If the data source disappears, the object in the object manager will turn red, at this point the object is empty and useless
  - ![img](https://arkimg-qn.ark.online/1701063770653-101.png)

- Generate Prefab

  - Generate the selected object as a prefab and create a new prefab in the project content

- Prefab object related

  - The prefab object differs from the regular object functions, with three extra functions shown in the figure
  - Edit Prefab
    - The main viewport and the object manager both enter the prefabricated body editing mode to edit the prefabricated body
  - Update Prefab with Prefab Reference Object
    - When editing the prefab without entering the editing state, such as when modifying the tree structure of the prefab directly in the object manager **(then the prefab will turn yellow in the object manager, when the prefab enters the instance state from the normal state)**, use this function to save the changes made to the prefab
  - Reset Prefab
    - Change the prefab from the instanced state to the normal state (purple to yellow), i.e., withdraw the modification of the structure of this prefab in the object manager in this instanced state
  - Save as New Prefab
    - This option appears when the prefabricated object is in the instanced state
    - Save this modified prefab in the object manager as a new prefab, the project content will be added to this prefab, and the original prefab in the object manager will be updated to this new prefab at the same time

### Properties Panel

![img](https://arkimg-qn.ark.online/1701063770653-102.png)

- The Properties Panel is used for previewing asset information and modifying object properties
- The preview function has been explained above already, so the following mainly explains the operation related to modifying object properties

#### Search

![img](https://arkimg-qn.ark.online/1701063770653-103.png)

- Support fuzzy search for property names in Simplified Chinese and English

#### Basic Properties

- Name, tag, network status, dynamic/static, GUID are all put under Basic Properties

![img](https://arkimg-qn.ark.online/1701063770653-104.png)

#### Setting Values

![img](https://arkimg-qn.ark.online/1701063770654-105.png)

- The values are basically modified by the controls shown in the figure
- You can modify the value by holding the input box and sliding it left or right, or you can click and enter it by typing directly
- When editing material properties, you need to customize the material before you can modify it (generate a material description file under the project content)
- When this material asset refers to a file in the project content, the properties of the material can only be modified in the properties panel when it is used

![img](https://arkimg-qn.ark.online/1701063770654-106.png)

![img](https://arkimg-qn.ark.online/1701063770654-107.png)

#### Reset Button

- Almost all properties can be reset, the reset button will appear after modifying the property
- The Reset button will reset this property to the **system's default value**

![img](https://arkimg-qn.ark.online/1701063770654-108.png)

#### Color Picker

- Click on the colored area in the picture to open the color picker

  ![img](https://arkimg-qn.ark.online/1701063770654-109.png)

  ![img](https://arkimg-qn.ark.online/1701063770654-110.png)

- Modifying Colors

  - The color picker provides **two color models, RGBA and HSV**. Generally speaking, users only need to adjust one of the two color models

  - Method 1: Modify numerical values of RGBA and HSV, you can drag and drop or double-click to input

  - Method 2: Input the hexadecimal color code directly

  - Method 3: Click or drag and drop the color palette

    - In addition to the round color palette in the picture, click the button below to switch to the square color palette, users can choose according to their needs

    - ![img](https://arkimg-qn.ark.online/1701063770654-111.png)![img](https://arkimg-qn.ark.online/1701063770654-112.png)

      

- Compare old and new colors

  - **The old color is the current color used for this color property, and the new color is the current color in the color palette.** Use this function for easy comparison

    ![img](https://arkimg-qn.ark.online/1701063770654-113.png)

- Custom Colors

  - Users can drag and drop colors from the right side of the "old and new colors" to the top of the color picker to save them for easy reuse.

    ![img](https://arkimg-qn.ark.online/1701063770654-114.png)

#### Eyedropper

- The eyedropper widget exists for some objects, such as motion control objects. Eyedroppers can also be defined in scripts
- Click on the eyedropper icon in the picture and then click on the object in the main viewport; you can also drag and drop the object directly from the object manager into the box
- Picked-up objects can be located, making it easy to find the position of the picked-up objects in the object manager
- The box under the straw prohibits input, if you want to clear the picked-up object, click the reset button next to the eyedropper button

#### Asset Selector

![img](https://arkimg-qn.ark.online/1701063770654-115.png)

- The purpose of this widget is to replace the currently used asset with a asset from the library/project content
- Method: Drag and drop the same type of assets in the Asset Library/project content to achieve the use of assets; for more details, please refer to the asset-related documentation

#### Adding/Removing Components

- Click the Add button on the right to add a new structure corresponding to this property
- Click the delete button to the right of a component to delete the structure

#### Other Widgets

- In addition to the above controls, there are some common controls in the properties panel, such as drop-down boxes and text input boxes, which are simple to operate and are not described here