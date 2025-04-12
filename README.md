
# 🎧 DJ Request App

Una aplicación web que permite a los asistentes de un evento pedir canciones en tiempo real y a los DJs ver y gestionar esas solicitudes. Esta app está compuesta por:

- 🎤 **Frontend** en React (`/frontend`) – Desplegado con Vercel
- 🎚️ **Backend** en Flask (`/backend`) – Desplegado con Render

---

## 🚀 ¿Qué puedes hacer con esta app?

- Pedir una canción y agregar una dedicatoria 💬
- Seleccionar el nombre del DJ al que va dirigida la solicitud 🎧
- Los DJs pueden ver solo las solicitudes que les corresponden ✅

---

## 🧠 Cómo desplegarla

### 🖥 Requisitos

- Cuenta en [GitHub](https://github.com)
- Cuenta en [Render](https://render.com)
- Cuenta en [Vercel](https://vercel.com)
- Git instalado en tu PC

---

### 🧩 Estructura del proyecto

```
dj-request-app/
├── frontend/   # React app
│   ├── package.json
│   └── src/App.jsx
├── backend/    # Flask app
│   ├── app.py
│   └── static/index.html
```

---

## 🟢 Paso a paso

### 1. Subir el proyecto a GitHub

```bash
git init
git add .
git commit -m "Primer commit"
git remote add origin https://github.com/tuusuario/dj-request-app.git
git push -u origin main
```

---

### 2. Desplegar el backend en Render

- Crea un nuevo **Web Service**
- Selecciona el repo
- Configura:
  - **Root directory**: `backend`
  - **Build command**: `pip install -r requirements.txt`
  - **Start command**: `gunicorn app:app`
- Obtendrás una URL como:  
  `https://dj-request-app.onrender.com`

---

### 3. Desplegar el frontend en Vercel

- Importa el mismo repo desde GitHub
- Configura:
  - **Root Directory**: `frontend`
- Vercel te dará una URL como:  
  `https://dj-request-app.vercel.app`

---

### 4. Conectar el frontend con el backend

En `frontend/src/App.jsx`, asegúrate de tener:

```js
fetch('https://dj-request-app.onrender.com/create-request', {
```

---

### 5. Probar la app

- Visita tu frontend
- Envía una solicitud
- Abre:  
  `https://dj-request-app.onrender.com/requests?dj=DJNombre`

---

## 🧑‍💻 Créditos y mejoras

Este proyecto está pensado para DJs independientes que quieran profesionalizar su interacción con el público. Puedes:

- Agregar login de DJs
- Agregar sistema de pagos
- Agregar base de datos (Supabase, Firebase, etc.)

¡A disfrutar la fiesta! 🎶🕺💃
