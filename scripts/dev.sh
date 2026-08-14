#!/bin/sh
# Next.js 16 se cuelga con Node 24 en esta máquina. Usar Node 22.
# Turbopack es el bundler por defecto; no forzar Webpack.
set -e
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
NODE22="${HOME}/.local/share/isapres-premium/node22/bin/node"

if [ -x "$NODE22" ]; then
  NODE="$NODE22"
else
  NODE="$(command -v node)"
fi

export PATH="$(dirname "$NODE"):$PATH"
echo "dev: $("$NODE" -v)"
cd "$ROOT"
exec "$NODE" "$ROOT/node_modules/next/dist/bin/next" dev "$@"
