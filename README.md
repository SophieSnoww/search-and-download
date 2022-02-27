# Search and Download

A command-line app to easily search for and download videos and music.

## Quickstart

### Installation

All you need to do is run `npm i search-and-dl -g`, and you can run `sad` in the command line from anywhere.

### Example Usage

- `sad -s "bruh sound effect" -p youtube` will download the top result for "bruh sound effect" from youtube, as a video.
- `sad -s "bruh sound effect" -p youtube -a` does the same as above, but only saves an audio file.
- `sad -s "bruh sound effect" -p youtube -t` will save the thumbnail of the video as an image file, as well as downloading the video.

### Usage

```text
Usage: sad -s <search> -p <platform> [options]

Options:
      --help       Show help                                           [boolean]
      --version    Show version number                                 [boolean]
  -s, --search     What to search for                        [string] [required]
  -p, --platform   What platform to search on
                          [string] [required] [choices: "youtube", "soundcloud"]
  -a, --audio      Only download audio, not video     [boolean] [default: false]
  -t, --thumbnail  Save the thumbnail image           [boolean] [default: false]
```
