const express = require("express");
const axios = require("axios");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files (Frontend)
app.use(express.static(path.join(__dirname, "public")));

const IMAGE_GEN_API_URL = "https://api.deepai.org/api/text2img"; // Free AI Image Generator

app.post("/api/generate-image", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Please provide a prompt for image generation." });
    }

    try {
        const response = await axios.post(
            IMAGE_GEN_API_URL,
            { text: prompt },
            { headers: { "Content-Type": "application/json" } }
        );

        res.json({ image_url: response.data.output_url });
    } catch (error) {
        console.error("Image generation error:", error);
        res.status(500).json({ error: "Failed to generate image." });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Image Generation API running at http://localhost:${PORT}`))
