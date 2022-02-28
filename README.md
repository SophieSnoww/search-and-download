# Search and Download

A command-line app to easily search for and download videos and music.

- [Search and Download](#search-and-download)
  - [Quickstart](#quickstart)
    - [Installation](#installation)
    - [Example Usage](#example-usage)
  - [Usage](#usage)
  - [Fixing the Python Thing](#fixing-the-python-thing)
    - [Linux](#linux)
    - [Windows](#windows)

## Quickstart

### Installation

Because of a weird quirk in the main dependency, `youtube-dl-exec`, the `python` command must be available on your machine (not `py`, not `python3`). If it isn't, `bin-version-check-cli` will throw an error, preventing you from installing anything in the first place. As far as I can tell, there's no easy solution to this, but I'd like to get it fixed soon. For fixes in the meantime, see [Fixing the Python Thing](#fixing-the-python-thing).

Then, all you need to do is run

```bash
npm i search-and-dl -g
```

and you can run `sad` in the command line from anywhere.

### Example Usage

- `sad -s "bruh sound effect" -p youtube` will download the top result for "bruh sound effect" from youtube, as a video.
- `sad -s "bruh sound effect" -p youtube -a` does the same as above, but only saves an audio file.
- `sad -s "bruh sound effect" -p youtube -t` will save the thumbnail of the video as an image file, as well as downloading the video.

## Usage

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

## Fixing the Python Thing

### Linux

Installing `python-is-python3` will make the `python` command functional, if the only one you have is `python3`.

```bash
sudo apt install python-is-python3
```

### Windows

If you attempt to run `python` from the command line and don't have it installed, Windows will open the microsoft store page for Python 3. All you need to do is install it from there.
