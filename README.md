

### **`README.md`**
```md
# AI Image Generation API

## Overview
This is a lightweight **AI Image Generation API** that works **without requiring an API key**. It uses **DeepAI’s free AI model** to generate images based on user prompts.

## Features
✅ **No API key required**  
✅ **Generate images using text prompts**  
✅ **Works as an API & web interface**  
✅ **Deployable on Render/Vercel**

---

## 🔧 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/image-gen-api.git
cd image-gen-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Server**
```sh
npm start
```
The API will run on `http://localhost:8080`.

---

## 🚀 Usage
### **API Request (POST)**
Send a POST request to:
```
http://localhost:8080/api/generate-image
```
With JSON body:
```json
{
  "prompt": "A futuristic city at sunset"
}
```

### **Expected Response**
```json
{
  "image_url": "https://deepai-generated-image.com/example.jpg"
}
```

---

## 🌐 Web UI
This API includes a **simple frontend UI** (`public/index.html`) where users can enter prompts and view generated images.

1️⃣ **Start the server**  
2️⃣ Open `http://localhost:8080` in your browser  
3️⃣ Enter a prompt & **generate an image**  

---

## 🛠 Deployment
### **Deploy on Render**
1️⃣ Push your repo to GitHub  
2️⃣ Go to **[Render](https://render.com/)**  
3️⃣ Create a **Node.js Web Service**  
4️⃣ Set the start command to `npm start`

### **Deploy on Vercel**
1️⃣ Install Vercel CLI
```sh
npm install -g vercel
```
2️⃣ Deploy
```sh
vercel deploy
```

---

## 📜 License
This project is **MIT Licensed**. Feel free to modify and use it.

---

## 🙌 Contributions
Have improvements? Open a **pull request** or reach out!


