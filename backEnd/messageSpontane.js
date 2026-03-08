const messageSpontane = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Candidature – Développeur Full Stack Junior</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background: #f5f7fa;
      padding: 30px;
    }
    .container {
      max-width: 650px;
      margin: auto;
      background: #ffffff;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,.08);
    }
    .header {
  background: #2563eb;
  padding: 30px;
  color: #ffffff;
}
    .header h1 {
      font-size: 20px;
      margin: 0;
      font-weight: 700;
    }
    .content {
      padding: 30px;
      color: #1f2937;
      font-size: 14px;
      line-height: 1.7;
    }
    .stack span {
      display: inline-block;
      background: #e0e7ff;
      color: #1e3a8a;
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 12px;
      margin: 4px 4px 0 0;
      font-weight: 600;
    }
    .signature {
      margin-top: 25px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      color: #374151;
    }
    .name {
      font-size: 20px;
      font-weight: 700;
      color: #1e293b;
    }
    strong {
      color: #2563eb;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>Candidature spontanée – Développeur Full Stack Junior</h1>
    </div>

    <div class="content">
      <p>Bonjour Madame, Monsieur,</p>

      <p>
        Je vous adresse ma candidature spontanée pour un poste de
        <strong>Développeur Full Stack Junior</strong>.
      </p>

      <p>
        Je suis <strong>Mohamed EDDAHMANI</strong>, étudiant à <strong>YouCode / UM6P</strong>,
        développeur Full Stack junior avec une expérience sur des projets réels
        et un rôle de <strong>Team Lead</strong>.
      </p>

      <p><strong>Stack technique :</strong></p>
      <div class="stack">
        <span>JavaScript / TypeScript</span>
        <span>ReactJS / NextJS</span>
        <span>React Native</span>
        <span>NestJS</span>
        <span>NodeJS / ExpressJS</span>
        <span>PHP / Laravel</span>
        <span>SQL</span>
        <span>Docker</span>
      </div>

      <p>
        Disponible immédiatement, je serais ravi d’échanger avec vous lors d’un entretien.
        <strong>CV disponible sur demande.</strong>
      </p>

      <div class="signature">
        <div class="name">Mohamed EDDAHMANI</div>
        📧 eddahmani.mohamed11@gmail.com<br>
        📱 +212 658 511 779<br>
        📍 Casablanca
      </div>
    </div>
  </div>
</body>
</html>`;
module.exports = messageSpontane;
