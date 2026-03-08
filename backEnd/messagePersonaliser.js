const messagePersonaliser = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Candidature – Développeur Fullstack MERN</title>
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
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
      color: #4338ca;
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
      color: #667eea;
    }
    strong {
      color: #667eea;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>Candidature – Développeur Fullstack MERN (CDI)</h1>
    </div>

    <div class="content">
      <p>Bonjour <strong>Soft Bridge Solutions</strong>,</p>

      <p>
        Suite à votre publication LinkedIn concernant le recrutement d'un
        <strong>Développeur Fullstack MERN</strong>, je me permets de vous
        adresser ma candidature pour rejoindre votre équipe.
      </p>

      <p>
        Je suis <strong>Mohamed EDDAHMANI</strong>, développeur fullstack, actuellement
        en <strong>stage</strong> où je développe des applications web et mobile complètes
        en utilisant des technologies modernes du stack MERN et React Native.
      </p>

      <p>
        Mon expérience inclut la conception et le développement d'applications fullstack,
        la gestion d'état avec Redux, l'intégration d'API REST, ainsi que l'optimisation
        des performances côté client et serveur.
      </p>

      <p>
        Je suis actuellement à la recherche d'une <strong>opportunité CDI à Marrakech</strong>
        pour mettre à profit mes compétences et contribuer à des projets innovants au sein
        d'une entreprise dynamique comme la vôtre.
      </p>

      <p><strong>Compétences techniques :</strong></p>
      <div class="stack">
        <span>JavaScript / TypeScript</span>
        <span>Node.js</span>
        <span>NestJS</span>
        <span>React.js</span>
        <span>Redux / RTK</span>
        <span>MongoDB</span>
        <span>WebSocket</span>
        <span>Next.js</span>
        <span>Git</span>
        <span>CSS</span>
      </div>

      <p>
        Motivé, rigoureux et doté d'un excellent esprit d'équipe, je serais ravi
        d'échanger avec vous concernant cette opportunité et de contribuer au
        développement de vos projets.
      </p>

      <div class="signature">
        <div class="name">Mohamed EDDAHMANI</div>
        📧 eddahmani.mohamed11@gmail.com<br>
        📱 +212 658 511 779<br>
        📍 Disponible pour Marrakech
      </div>
    </div>
  </div>
</body>
</html>`;
  
module.exports = messagePersonaliser;