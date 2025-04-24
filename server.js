const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public"))); // serve public folder

// Categories & endpoints
const categories = {
  waifu: "https://api.waifu.pics/sfw/waifu",
  neko: "https://api.waifu.pics/sfw/neko",
  dog: "https://some-random-api.ml/img/dog",
  cat: "https://some-random-api.ml/img/cat",
  meme: "https://meme-api.com/gimme",
  placeholder: "https://picsum.photos/400/300"
};

// Image generator
app.get("/api/generate", async (req, res) => {
  const type = req.query.type;
  if (!type || !categories[type]) {
    return res.status(400).json({ error: "Invalid or missing 'type' query." });
  }

  try {
    if (type === "placeholder") return res.json({ image: categories[type] });

    const response = await axios.get(categories[type]);
    let imageUrl;
    switch (type) {
      case "waifu":
      case "neko":
        imageUrl = response.data.url;
        break;
      case "dog":
      case "cat":
        imageUrl = response.data.link;
        break;
      case "meme":
        imageUrl = response.data.url;
        break;
      default:
        imageUrl = categories[type];
    }

    res.json({ image: imageUrl, type });
  } catch (error) {
    console.error("Image fetch error:", error);
    res.status(500).json({ error: "Failed to fetch image." });
  }
});

// Lexica endpoint
app.get("/api/lexica", async (req, res) => {
  const prompt = req.query.prompt;
  if (!prompt) return res.status(400).json({ error: "Missing prompt." });

  try {
    const response = await axios.get(`https://lexica.art/api/v1/search?q=${encodeURIComponent(prompt)}`);
    const results = response.data.images;
    res.json({ images: results });
  } catch (error) {
    console.error("Lexica API error:", error);
    res.status(500).json({ error: "Failed to fetch from Lexica." });
  }
});

// Fallback to serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
