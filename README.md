# Focus

> #### A BugsBuster's Project.

---

### About the project

_In the midst of the pandemic, many people lost their jobs, with this data set it is possible to perfect the job searching so that more people in need can find jobs._

---

### Frontend Documentation

This project was developed witn **React**, **Sass**, **Node.js** and **Express**.

---

### General Instructions

- Clone this repository or make Fork of it.
- Once you have cloned or Forked open your command line and execute the next command line:
  `npm install`
- This will install all the dependencies necessaries to work with this project.
- Once all the dependencies are installed, open the project with your favourite code editor and look for a file called **package.json**
- There you will see one script that is ready for you to use it.
- The script is: **build:development** and that one will allow you to work in a development envaroment.
- To use the **build:development script** go to your command line and executed the following command: `npm run build:development`.
- **WARNING**: The are another script in the file package.json that is **build:production**. That script is only for when the project or changes are ready to go to production. **So do not use that script if it is not necessary.**
- **WARNING**: There is a folder called **public** that contains a **HTML** file. **Do not** add any other HTML file to the folder or any code into that file.
- Located the **src** folder in the root of the project. There you will see another two folders called **assets** and **components**. In the components folders you will add all the code for each components you create in React and in the assets folder you will add all the images and Sass styles that your components require.

---

### How to add new components

---

#### Before start:

- In the **src** folder you'll see another folder called **components**. Inside that folder you'll see two files called **App.jsx** and **Layout.jsx**.
- The **App.jsx** file works as the main file that will contain all the code.
- The **Layout.jsx** file will contain our components for the body section, so it goes inside the **App.jsx** file.
- The **Layout.jsx **file was configured to receive **children**. So it is ready to receive all the components that are necessaries for the project.

---

- To add a new component into the project, please **locate yourself inside the components folder** and there create a new folder with the name of the component you are creating.
- Inside the folder you have created for the new component **must go all the code** necessary for that component.
- For the **Sass styles** of the new component, please **locate yourself inside the assets folder.** There you'll see three folders called **images, components** and **util**. **Go inside components folder **and create a folder with the name of the component you are going to give styles **and inside that new folder** create all the Sass files necessaries for the styles to the component.
- In the **util folder** you'll see a file called **Variables.scss**, that file contains all the variables that have been setup for the project, so **make sure you use those variables**in the project when it's require.
- If you want to** add more files** like **mixins** or anyther archive that **extends the sass functionality**, add those files in the **util folder** and then **make the right reference** in the files that are going to use those functionalities.
- If you need to **add images** to the component, **locate yourself in the assets folder**. There you'll see the **images folder** where you can add all the images that your component requires.

---

#### WARNING:

Remember to name all the folders and and files with the right structure

- For folders, the name must go all in lowercase.
- For files, the name must go with the first letter in uppercase.
