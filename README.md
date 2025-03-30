## **📌 Todo List App with Supabase, React, and Vite**  
This is a simple **Todo List Application** built with **React, Supabase, and Vite**. It allows users to **create, read, update, and delete (CRUD)** their own tasks, stored securely in a **Supabase database**.  

🚀 **Live Demo:** 
[Supabase Todo App](https://supabase-todo-app-bice.vercel.app/)

---

### **✨ Features**  
✅ Create a new todo item  
✅ Read (view) all todos created by the authenticated user  
✅ Update the name or completion status of a todo  
✅ Delete a todo item  

---

### **🛠 Technologies Used**  
- ⚛️ **React** – Frontend library for building the user interface  
- 🔥 **Supabase** – Backend-as-a-Service for managing the database & authentication  
- ⚡ **Vite** – Lightning-fast build tool for development  
- 🐘 **PostgreSQL** – Database for storing todos  

---

### **🚀 Set-Up**  
#### **1️⃣ Install the Supabase in the project using this command**  
```sh
npm install @supabase/supabase-js
```

#### **2️⃣ Setup Environment Variables**  
Create a `.env` file in the root of your project and add(take URL and KEY from dashboard of Supabase.com:  
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_KEY=your-supabase-key
```

#### **3️⃣ Make a Separate file of supabase-client**   
```env
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl,supabaseKey);

export default supabase;
```

#### **4️⃣ Start the Development Server**  
```sh
npm run dev
```

---


### **Supabase website:**
[Supabase official](https://supabase.com/dashboard/project/wateqhtxnvcochahdjtn/editor/29291)

---

### **📌 Usage**  
- Create Todos: Add a new todo by typing in the input field and clicking the "Add Todo" button.
- Read Todos: View your todos listed below the input field.
- Update Todos: Edit the name of a todo by clicking the "Edit" button and updating it.
- Mark as Completed: Toggle the completion status of a todo by clicking the "Complete" button.
- Delete Todos: Remove a todo by clicking the "Delete" button. 

---

### **🤝 Contributing**  
Feel free to **fork** this repo, submit **pull requests**, or suggest improvements!  

---

### **Made with ❤️ by Ramit Roshan**   
