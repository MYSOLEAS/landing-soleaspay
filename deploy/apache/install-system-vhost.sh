#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="/Users/Zhuanz/work/landing-soleaspay"
VHOST_SRC="$PROJECT_DIR/deploy/apache/soleaspay-test.conf"
VHOST_DEST="/etc/apache2/other/soleaspay-test.conf"
HOST_ENTRY="127.0.0.1 soleaspay.test www.soleaspay.test"

if [ ! -f "$PROJECT_DIR/dist/index.html" ]; then
  echo "dist/index.html is missing. Run npm run build first."
  exit 1
fi

sudo cp "$VHOST_SRC" "$VHOST_DEST"

if ! grep -q "soleaspay.test" /etc/hosts; then
  echo "$HOST_ENTRY" | sudo tee -a /etc/hosts >/dev/null
fi

echo "VirtualHost installed at $VHOST_DEST"
echo "Now run: sudo apachectl configtest"
echo "Then run: sudo apachectl restart"
echo "Test URL: http://soleaspay.test/home/"
