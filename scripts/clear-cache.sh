#!/bin/bash

# Скрипт для очистки кэша и перезапуска TypeScript сервера
# Использование: ./scripts/clear-cache.sh

echo "🧹 Очистка кэша TypeScript и IDE..."

# Очищаем кэш TypeScript
rm -rf node_modules/.cache/
rm -rf .vscode/.tscache/
rm -f tsconfig.tsbuildinfo
rm -f *.tsbuildinfo

# Очищаем кэш Vite
rm -rf node_modules/.vite/

# Очищаем временные файлы
rm -f *.tmp
rm -f *.temp

echo "✅ Кэш очищен!"
echo ""
echo "📋 Следующие шаги:"
echo "1. В Cursor: Cmd+Shift+P → 'TypeScript: Restart TS Server'"
echo "2. Или перезагрузите окно: Cmd+Shift+P → 'Developer: Reload Window'"
echo ""
echo "🚀 Готово! TypeScript сервер должен работать корректно."
