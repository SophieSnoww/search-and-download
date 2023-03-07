#!/usr/bin/env node

import * as youtube from "youtube-search-without-api-key";
import soundcloud from "soundcloud-scraper";
import youtubeDL from "youtube-dl-exec";
import yargs from "yargs";

const options = yargs(process.argv)
    .usage("Usage: sad -s <search> -p <platform> [options]")
    .option("s", {
        alias: "search",
        description: "What to search for",
        type: "string",
        demandOption: true
    })
    .option("p", {
        alias: "platform",
        description: "What platform to search on",
        type: "string",
        demandOption: true,
        choices: [
            "youtube",
            "soundcloud"
        ]
    })
    .option("a", {
        alias: "audio",
        description: "Only download audio, not video",
        type: "boolean",
        demandOption: false,
        default: false
    })
    .option("t", {
        alias: "thumbnail",
        description: "Save the thumbnail image",
        type: "boolean",
        demandOption: false,
        default: false
    })
    .argv;

let search = options.search;
let platform = options.platform;
let audio = options.audio;
let thumbnail = options.thumbnail;

let results;
let url;

if (platform === "youtube") {
    results = await youtube.search(search);
    url = results[0].url;
}
else if (platform === "soundcloud") {
    let client = new soundcloud.Client();

    results = await client.search(search);
    url = results[0].url;
}

let downloadOptions = {};

if (audio) {
    downloadOptions.extractAudio = audio;
}

if (thumbnail) {
    downloadOptions.writeThumbnail = thumbnail;
}

youtubeDL(url, downloadOptions);
