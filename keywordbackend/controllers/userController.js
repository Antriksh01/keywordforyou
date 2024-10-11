const express = require("express");
const multer = require("multer");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const path = require("path");
const fs = require("fs");

ffmpeg.setFfmpegPath(ffmpegStatic.path);

const videoSpiliter = (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No video file uploaded." });
    }

    const videoPath = req.file.path;
    const outputDir = `output/${path.basename(
      videoPath,
      path.extname(videoPath)
    )}/`;

    // Check if output directory exists, if not, create it
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log("Input video path:", videoPath);
    console.log("Output directory:", outputDir);

    // Start FFmpeg processing to split the video
    ffmpeg(videoPath)
      .outputOptions("-f", "segment") // Segment the file
      .outputOptions("-segment_time", "30") // Set segment duration to 30 seconds
      .outputOptions("-reset_timestamps", "1") // Reset timestamps for each segment
      .on("start", (commandLine) => {
        console.log("FFmpeg process started with command:", commandLine);
      })
      .on("progress", (progress) => {
        console.log(`Processing: ${progress.percent}% done`);
      })
      .on("end", () => {
        console.log("Video split completed.");

        // Retrieve list of files created
        const files = fs
          .readdirSync(outputDir)
          .map((file) => `${outputDir}${file}`);

        res.json({
          message: "Video split successfully.",
          files: files, // Return the list of output files
        });
      })
      .on("error", (err) => {
        console.error("Error splitting video:", err.message);

        // Delete incomplete output files if an error occurs
        if (fs.existsSync(outputDir)) {
          fs.readdirSync(outputDir).forEach((file) => {
            fs.unlinkSync(path.join(outputDir, file));
          });
        }

        res.status(500).json({ error: `FFmpeg error: ${err.message}` });
      })
      .output(`${outputDir}output%03d.mp4`) // Output pattern for segments
      .run();
  } catch (error) {
    console.error("Internal server error:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { videoSpiliter };
