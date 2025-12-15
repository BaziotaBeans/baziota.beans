/**
 * Gera um blurDataURL para usar como placeholder nas imagens do Next.js
 * Cria um SVG pequeno e borrado que serve como placeholder durante o carregamento
 * Usa um blurDataURL estático que funciona tanto no servidor quanto no cliente
 */
export function getBlurDataURL(): string {
  // SVG pequeno com gradiente escuro que funciona como placeholder blur
  // Base64 de um SVG 10x10 com gradiente cinza escuro
  return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM3NDE1MTtzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMTE4Mjc7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkaWVudCkiIC8+PC9zdmc+";
}

