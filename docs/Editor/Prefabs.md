**Reading this chapter takes about 20 minutes.**

This chapter contains the following three main contents.

1. Introduction to Prefabs
2. Guidelines for Using Prefabs 
3. Important Notes

## Introduction to Prefabs

### What is a Prefab?

- A prefab is a reusable combination of game objects, serving as a mechanism to compose multiple game objects into a single, independent resource. Prefabs can be used to create and store all the components, properties, and child objects of a game object. When the same game object needs to be reused multiple times, prefabs can be utilized by setting the game object as a prefab.

### Prefab Basic Rules

- Prefab Structure

![img](https://arkimg-qn.ark.online/1701741530445-26.png)

- All prefabs consist of a prefab root node, which is automatically generated with a default root node when creating an empty prefab.
- Below the prefab root node are the prefab child objects. Prefab child objects can have sibling or parent-child relationships with each other.
- Prefab referencing
  - The act of dragging and attaching a prefab to the main viewport or object manager in the editing state is known as prefab referencing. The resulting objects are referred to as prefab reference objects.

![img](https://arkimg-qn.ark.online/1701741530442-1.png)

## Prefab User Guide

### Creating Prefabs

- Creating a new prefab
- Click the "New Prefab" button in the Project Content under the prefab category.

![img](https://arkimg-qn.ark.online/1701741530442-2.png)

- Converting existing objects into prefabs
  - Method 1: Select the object in the Object Manager and right-click to access the context menu. Choose "Create Prefab" to convert the selected object and its child objects into a prefab.
    - Please note that only objects with the same parent node can be created as a prefab.

![img](https://arkimg-qn.ark.online/1701741530442-3.png)

- Method 2: Select the root node of an instanced prefab reference object in the Object Manager. Right-click and select "Save as New Prefab" from the context menu. The selected instanced state prefab reference object will be detached from the original prefab's reference and created as a new prefab.

![img](https://arkimg-qn.ark.online/1701741530442-4.png)

- Method 3: Select an object from the Object Manager and drag it into the Project Content under the prefab category.

![img](https://arkimg-qn.ark.online/1701741530442-5.gif)

- If the selected object has the same parent node and does not contain any prefab references, it will be created as a new prefab along with its child objects. A prefab folder will be created in the root directory of the prefab category in the project content. Locate and select the prefab within that folder.
- The object and its child objects in the object manager will be transformed into prefab reference objects.

### Storage of Prefabs

- The Project Content under the prefab category displays all the stored prefab resources within the current project.

![img](https://arkimg-qn.ark.online/1701741530442-6.png)

- Each prefab exists as a separate prefab file. The scripts, UI files, and materials referenced by the prefab are stored separately in their respective file types and are not integrated into the prefab file.
  - The prefab named "Example" references a UI file named "DefaultUI" and a script file named "test". "Cone" references a material file named "NewMaterial".

![img](https://arkimg-qn.ark.online/1701741530442-7.png)

- At this point, each file is stored in its respective directory.

![img](https://arkimg-qn.ark.online/1701741530442-8.png)

![img](https://arkimg-qn.ark.online/1701741530442-9.png)

![img](https://arkimg-qn.ark.online/1701741530442-10.png)

### Editing Prefabs

- Editing in the prefab editing viewport
  - Method 1: Select a prefab in the Project Content, right-click, and choose "Edit" or double-click the prefab file. This will open the selected prefab in the prefab editing viewport for editing.

![img](https://arkimg-qn.ark.online/1701741530442-11.png)

![img](https://arkimg-qn.ark.online/1701741530443-12.png)

- Method 2: Select the head node of a prefab in the object manager, right-click, and choose "Edit Prefab". This will open the selected prefab in the prefab editing viewport for editing.

![img](https://arkimg-qn.ark.online/1701741530443-13.png)

- Saving prefab modifications in the prefab editing viewport
  - Click the "Save" button in the Project Content to save the modifications made to the prefab.

![img](https://arkimg-qn.ark.online/1701741530443-14.png)

- When switching editing states or editing objects, click the "Save" button in the prompt dialog to save the changes.

![img](https://arkimg-qn.ark.online/1701741530443-15.png)

- Saving in the main editor

![img](https://arkimg-qn.ark.online/1701741530443-16.png)

- Right-click on a prefab and choose "Update Prefab" to save the modifications made to the prefab reference objects in the object manager.
- Right-click on a prefab and choose "Save as New Prefab" to save the modifications made to the prefab reference objects in the object manager as a new prefab.

### Using Prefabs

- Editing State
  - In the Resource Repository or Project Content, you can find prefabs and drag them into the object manager or the main viewport to create prefab reference objects.
- Runtime State
  - You can dynamically generate prefab reference objects using APIs during runtime.

```TypeScript
/*Synchronously generate a prefab reference object using the asset ID from the Resource Repository or Project Content (requires preloaded resources)*/
GameObject.spawn("AssetId")

/*Asynchronously generate a prefab reference object using the asset ID from the Resource Repository or Project Content (does not require preloaded resources)*/
GameObject.asyncSpawn("AssetId")
```

### Deleting Prefabs

- When deleting a prefab from the project content, the system will check if there are any reference objects of that prefab in the scene.
  - If there are reference objects, a confirmation dialog will be displayed.

![img](https://arkimg-qn.ark.online/1701741530443-17.png)

- Deleting reference objects: When deleting the prefab, the reference objects of the prefab in the scene will also be deleted.
- Breaking the reference: Deleting the prefab while keeping the objects in the scene, converting them into regular objects that are no longer dependent on the original prefab file.
- If there are no reference objects, a confirmation dialog will be displayed for a second confirmation before deleting the prefab.

![img](https://arkimg-qn.ark.online/1701741530443-18.png)

- When deleting a prefab folder, a second confirmation dialog will be displayed. After confirming the deletion, the "Delete Reference Object" logic will be applied to all prefabs within the folder. This means that all reference objects of the prefabs in the folder will be deleted along with the deletion of the prefab files.

![img](https://arkimg-qn.ark.online/1701741530443-19.png)

### Importing and Exporting Prefabs

- Exporting Prefabs
  - To export a prefab, navigate to the Project Content in the prefabs category. Right-click on the desired prefab and select the "Export" button from the context menu. Choose the export path in the file explorer, and the prefab will be packaged and exported.
  - The export process includes exporting the prefab description file (.prefab) as well as all referenced files, while ensuring that the relative paths between the files remain unchanged.
    - If scripts or UI elements reference other scripts, the referenced scripts and their path information will also be exported to preserve the relative paths.

![img](https://arkimg-qn.ark.online/1701741530443-20.png)

- Importing Prefabs
  - Click the "Import Prefab" button in the Project Content under the Prefabs category. In the file explorer, select the prefab you want to import, and the prefab will be imported.

![img](https://arkimg-qn.ark.online/1701741530443-21.png)

- During the import process, the prefab file will be parsed, and all referenced files will be restored to the project.
  - Upon import, the import details panel will be displayed, providing developers with information about the prefab's structure.
  - If there are conflicts between the files in the current project and the imported prefab, the user will be given options to rename or overwrite.
  - Overwrite: Selecting overwrite will replace the existing file with the imported file, and an overwrite icon will be displayed on the file's right side.
  - When there is a conflict between files in the original project and the imported file, but the paths are different, a prompt will be shown as illustrated in the following image.

![img](https://arkimg-qn.ark.online/1701741530443-22.png)

- Rename: Selecting rename will automatically rename the imported file upon import.
- For script types, if the renamed script is being referenced by other scripts, the tree structure will display the script files that reference it. A text will be displayed after those scripts saying, "This script references xxx.ts. Please manually modify it after import."

![img](https://arkimg-qn.ark.online/1701741530443-23.png)

- If there are no conflicts with the files in the current project, there are two scenarios:
  - New: If there are no conflicting files in the current project, a green "new" label will be displayed.
  - Ignore: If there is an identical file already existing in the current project, no labels or actions will be displayed.

![img](https://arkimg-qn.ark.online/1701741530443-24.png)

### Cancel Prefab

- In the Object Manager, right-click on the prefab root node to access the "Cancel Prefab" operation.
- This operation will convert the prefab reference objects into regular objects (from purple to white).

![img](https://arkimg-qn.ark.online/1701741530443-25.png)

## Important Notes

When dynamically generating prefabs using the spawn function, you need to use the AssetUtil class to download and load the prefab resources, or drag the prefab into the priority loading area of the Object Manager.

When using `asyncSpawn` for asynchronous prefab generation, there is no need to pre-load resources.