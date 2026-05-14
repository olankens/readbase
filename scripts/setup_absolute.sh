#!/bin/bash

set -euo pipefail

GITHUB_USER="olankens"
GITHUB_NAME="readbase"
README_FILE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/README.md"
FOR_REPLACE="https://github.com/${GITHUB_USER}/${GITHUB_NAME}/raw/HEAD/assets/"

[[ -f "$README_FILE" ]] && perl -0pi -e "s|\"assets/|\"${FOR_REPLACE}|g" "$README_FILE"