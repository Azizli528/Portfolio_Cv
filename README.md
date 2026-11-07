# Əzizli Məhərrəm — Portfolio & CV

React + Vite ilə hazırlanmış şəxsi portfolio və CV saytı.

## Səhifələr
- **Ana səhifə** — təqdimat, təhsil, dillər, əlaqə
- **Bacarıqlar** — texnologiyalar və sertifikatlar
- **Layihələr** — GitHub hesabından avtomatik yüklənir
- **CV** — çap edib PDF kimi saxlamaq olar

## İşə salmaq
```bash
npm install
npm run dev
```
Sonra brauzerdə terminalda göstərilən ünvanı aç (adətən `http://localhost:5173`).

## Məlumatları dəyişmək
Bütün mətnlər `src/data.js` faylındadır: ad, əlaqə, bacarıq səviyyələri, sertifikatlar, təhsil, dillər.

## GitHub Pages-də yerləşdirmək
1. Layihəni GitHub-a yüklə (`node_modules` və `dist` qovluqları `.gitignore`-dadır).
2. Terminalda:
   ```bash
   npm run build
   ```
3. GitHub-da repo → **Settings → Pages** → Source: **GitHub Actions** və ya `dist` qovluğunun məzmununu `gh-pages` branch-ına yüklə.

Ən sadə yol: `npm i -D gh-pages`, `package.json`-a `"deploy": "gh-pages -d dist"` skripti əlavə et və `npm run build && npm run deploy` işlət.

## Texnologiyalar
React 18, React Router (HashRouter), Vite, CSS.
