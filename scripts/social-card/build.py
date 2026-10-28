#!/usr/bin/env python3
"""Regenerate assets/images/social.png (1200x627, dark) for Open Graph / LinkedIn.

Run from anywhere:  python3 scripts/social-card/build.py
Needs Google Chrome (headless). Inter comes from static/fonts/ (self-hosted),
the portrait from assets/images/claire_david.jpg, the monogram path from
assets/logo/logo-cd.svg (read at build time, not copied). The temporary HTML and
the Chrome profile go to a temp folder and are deleted afterwards.
"""
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parents[2]
HERE = pathlib.Path(__file__).resolve().parent
OUT = ROOT / "assets" / "images" / "social.png"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

svg = (ROOT / "assets" / "logo" / "logo-cd.svg").read_text()
logo_path = re.search(r'<path d="([^"]*)"', svg).group(1)

fonts = "\n  ".join(
    "@font-face { font-family: 'Inter'; font-weight: %d; font-style: normal; "
    "font-display: block; src: url('%s') format('woff2'); }"
    % (w, (ROOT / "static" / "fonts" / ("Inter-%d-latin.woff2" % w)).as_uri())
    for w in (400, 600)
)
photo = (ROOT / "assets" / "images" / "claire_david.jpg").as_uri()

html = (
    (HERE / "card.template.html").read_text()
    .replace("@FONTS@", fonts)
    .replace("@PHOTO@", photo)
    .replace("@LOGO_PATH@", logo_path)
)

tmp = pathlib.Path(tempfile.mkdtemp(prefix="social-card-"))
try:
    page = tmp / "card.html"
    page.write_text(html)
    shot = tmp / "card.png"
    subprocess.run(
        [
            CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
            "--force-device-scale-factor=1", "--window-size=1200,627",
            "--virtual-time-budget=3000",
            "--user-data-dir=" + str(tmp / "profile"),
            "--screenshot=" + str(shot), page.as_uri(),
        ],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    OUT.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(shot, OUT)
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("wrote", OUT)
