const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Student Greeting App</title>
            <style>
                :root { color-scheme: light; font-family: Inter, system-ui, sans-serif; }
                * { box-sizing: border-box; }
                body {
                    margin: 0; min-height: 100vh; display: grid; place-items: center;
                    color: #172033; background: linear-gradient(135deg, #eef4ff, #f8fbff);
                }
                main {
                    width: min(92%, 640px); padding: 3.5rem 2rem 2rem; text-align: center;
                    background: rgba(255, 255, 255, .9); border: 1px solid #dce6f5;
                    border-radius: 20px; box-shadow: 0 20px 50px rgba(36, 65, 110, .12);
                }
                .badge { color: #2563eb; font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
                h1 { margin: .6rem 0 1rem; font-size: clamp(2rem, 5vw, 3.2rem); }
                p { margin: .6rem 0; color: #526176; font-size: 1.05rem; }
                .status { display: inline-block; margin-top: 1.4rem; padding: .65rem 1rem; border-radius: 999px; color: #166534; background: #dcfce7; font-weight: 600; }
                footer { margin-top: 2.5rem; color: #94a3b8; font-size: .78rem; }
            </style>
        </head>
        <body>
            <main>
                <div class="badge">DevOps Student Project</div>
                <h1>Student Greeting App</h1>
                <p>Hello from Docker!</p>
                <p>Containerized successfully.</p>
                <div class="status">● Application online</div>
                <footer>Jacob Sebastian Cyril · 2547121</footer>
            </main>
        </body>
        </html>
    `);
});

app.get("/student", (req, res) => {
    res.json({
        message: "Welcome to DevOps!",
        student: "Your Name"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
