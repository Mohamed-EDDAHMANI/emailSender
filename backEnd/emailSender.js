const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

const anourEmail = "anouarechcharai08@gmail.com";
const anouAppPassword = "kjks soxx qnzx utvp";

const simoEmail = "eddahmani.mohamed11@gmail.com";
const simoAppPassword = "ojli ibwm wdvx zozk";

const zikoEmail = "elkahrizakaria@gmail.com";
const zikoAppPassword = "bgiy psup snxr yena";

const zikoMoufidEmail = "moufidzakaria766@gmail.com";
const zikoAppMoufidPassword = "cdqg cepq gehz wban";

const sujectSimo = 'Candidature pour un stage PFA – Développeur Full Stack "YouCode/UM6P"'
const khedmaSuject = 'Application for MERN Stack Developer Internship – Final Year Project (PFA)'
const elmoufidMessage = `<p>Madame, Monsieur,</p>

<p>Actuellement étudiant à YouCode et passionné par le développement web, je suis à la recherche d’un stage d’une durée de deux mois en tant que Développeur Full Stack. Intégrer votre entreprise représente pour moi une opportunité idéale pour mettre en pratique mes compétences techniques, tout en contribuant activement à vos projets.</p>

<p>Au cours de ma formation, j’ai eu l’occasion de travailler sur plusieurs projets concrets, ce qui m’a permis de développer une solide maîtrise des technologies web, tant côté front-end que back-end.</p>

<p>Je vous invite à consulter mon CV en pièce jointe pour plus de détails sur mon parcours. Je me tiens à votre disposition pour tout entretien à votre convenance.</p>

<p>Dans l’attente de votre retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.</p>

<p>
  <strong>Zakariae ElMOUFID</strong><br>
  moufidzakaria766@gmail.com<br>
  <strong>+212 680060524</strong><br>
  <strong>YouCode</strong>, Youssoufia<br>
  <a href="https://www.linkedin.com/in/zakariae-elmoufid-1b22a8330/"><strong>LinkedIn</strong></a> |  
  <a href="https://github.com/Zakariae-Elmoufid"><strong>GitHub</strong></a>
</p>`;


const messageSimo = `<p>Madame, Monsieur,</p>
  <p>Actuellement étudiant à YouCode et passionné par le développement web, je souhaite intégrer votre entreprise pour un stage de deux mois en tant que Développeur Full Stack.</p>

  <p>Ma formation et mes projets m'ont permis d’acquérir une solide maîtrise des technologies telles que React.js, Node.js, Laravel, PHP et SQL. Ce stage représente pour moi une opportunité d’approfondir mes compétences et de contribuer activement à vos projets.</p>

  <p>Je vous invite à consulter mon CV en pièce jointe et reste disponible pour un entretien.</p>

  <p>Dans l’attente de votre retour, je vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.</p>

  <p><strong>Mohamed EDDAHMANI</strong><br>
  eddahmani.mohamed11@gmail.com<br>
  +212 658511779<br>
  YouCode, Youssoufia<br>
  <a href="https://www.linkedin.com/in/mohamed-eddahmani/">LinkedIn</a> | 
  <a href="https://portfolio-git-master-simos-projects-bdb2ab00.vercel.app/">Portfolio</a> | 
  <a href="https://github.com/Mohamed-EDDAHMANI">GitHub</a>
</p>`;

const khedmaMessage = `<p>Dear AI Crafters Team,</p>
  <p>I hope this message finds you well.</p>

  <p>My name is EDDAHMANI Mohamed, and I am currently completing my first year of studies at YouCode / UM6P. As part of my academic requirements, I am required to undertake a PFA (Projet de Fin d'Année) internship. I am highly interested in applying for the MERN Stack Developer Intern position at your company in Casablanca.</p>

  <p>I am passionate about full-stack development, particularly with the MERN stack (MongoDB, Express, React, Node.js), and I am deeply curious about AI integration because I believe it is the future of development and that joining AI Crafters would be a perfect opportunity to not only fulfill my internship requirements but also to launch my career in this exciting and innovative field.</p>

  <p>The opportunity to work alongside a dynamic team, learn through real-world projects, and contribute to AI-powered solutions aligns perfectly with my career aspirations. I am also eager to grow my skills in areas such as TypeScript, REST APIs, Git, and AI/LLMs technologies.</p>

  <p>I would be honored to discuss how I can contribute to your team and grow through this valuable experience.</p>

  <p>Thank you for considering my application.</p>

  <p>Best regards,</p>

  <p><strong>Mohamed EDDAHMANI</strong><br>
  eddahmani.mohamed11@gmail.com<br>
  +212 658511779<br>
  YouCode, Youssoufia<br>
  <a href="https://www.linkedin.com/in/mohamed-eddahmani/">LinkedIn</a> | 
  <a href="https://portfolio-git-master-simos-projects-bdb2ab00.vercel.app/">Portfolio</a> | 
  <a href="https://github.com/Mohamed-EDDAHMANI">GitHub</a>
</p>`;


// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service like 'outlook', 'yahoo', etc.
  auth: {
    user: simoEmail,
    pass: simoAppPassword // Use an App Password instead of your real password
  }
});


// const recipients = ['dsimo4323@gmail.com'];
// 130 email 
// const recipients = [
// ]

const recipients = [
  'lab@aicrafters.com'
]

// const recipients = [
//   "contact@devarch-digital.com",
//   "contact@rdmaroc.com",
//   "info@primadev.org",
//   "contact@urikacloud.com",
//   "Contact@protandy.com",
//   "Tarik.f@protandy.com",
//   "contact@luovatechnologie.com",
//   "contact@ismaafwebagency.com",
//   "recrutement.stage@sofrecom.com",
//   "contact@godogi.com",
//   "info@picaxel.com",
//   "contact@smartsoluce.com",
//   "contact@energiedin.com",
//   "contact@elvisuel.com",
//   "contact@webassistances.com",
//   "contact@bytebuild.ma",
//   "contact@proweb.ma",
//   "contact@codingart.io",
//   "info@phoenix19digitalix.com",
//   "contact@agencewebagadir.com",
//   "info@websitedesignerwix.com",
//   "webagency.maroc.group@gmail.com",
//   "Contact@centralweb.ma",
//   "rh@majjane.ma",
//   "contact@sn-solutions.ma",
//   "contact@e-novation.ma",
//   "contact@bekwellmaroc.com",
//   "contact@tingisweb.com",
//   "hi@1k.ma",
//   "contact@truecodinghub.com",
//   "recrutement@skyline.ma",
//   "hello@skyline.ma",
//   "info@devnet.ma",
//   "contact@yallah-yallah.com",
//   "contact@rhillane.com",
//   "info@odoo.com",
//   "Contact@mouttahid.com",
//   "contact@tasmimweb.com",
//   "Contact@guide-web.ma",
//   "info@softsevenart.com",
//   "contact@webcom.ma",
//   "contact@viixdigital.com",
//   "contact@mahjoubweb.com",
//   "contact@pixelweb.ma",
//   "contact@wikidigital.net",
//   "contact@technologies-4you.com",
//   "contact@rythmedia.com",
//   "contact@adverweb.ma",
//   "business@dotma.ma",
//   "contact@masavoir.com",
//   "contact@webeuz.com",
//   "recrutement@glory-creation.com",
//   "contactdevit1@gmail.com",
//   "info@mtds.com",
//   "info@nerolinkmedia.com",
//   "contact@techaden.com",
//   "contact@novitus.ma",
//   "ste.ajicod@gmail.com",
//   "info@x-hub.io",
//   "bibornefrance@gmail.com",
//   "ziribox2022@gmail.com",
//   "hello@4tech.ma",
//   "info@evia-services.com",
//   "saphircaisse@gmail.com",
//   "info@hostino.com",
//   "contact@viralwave.agency",
//   "contact@weindustry.ma",
//   "info@weindustry.ma",
//   "Contact@ahdigital.tech",
//   "contact@jway.ma",
//   "wissal.doumi@cbi.ma",
//   "nouhaila.brija@sofrecom.com",
//   "tiqaelite@gmail.com",
//   "oumaima.c@consultingdatamed.com",
//   "mehdi@sygma.ai",
//   "neko.tech.ma@gmail.com",
//   "itsolutions@intelcia.com",
//   "contact@radiumdigital.ma",
//   "contact@digitalandcreativity.com",
//   "contact@digitalholding.ma",
//   "contact@digitalclub.ma",
//   "Contact@digitalma.ma",
//   "contact@digitalad.ma",
//   "contact@up-skill.org",
//   "contact@softas.ma",
//   "contact@apexagency.ma",
//   "contact@softydev.com",
//   "contact@infomed-tech.com",
//   "simo.asmouh@gmail.com",
//   "mazouari@powerm.ma",
//   "contact@creation-site-maroc.ma",
//   "contact@inovteam.com",
//   "contact@highsystemsinfo.com",
//   "Contact@jokesigner.com",
//   "khadija.marine@sofrecom.com",
//   "cbi@cbi.ma",
//   "talentunit.ma@capgemini.com",
//   "Imane.machane@hps-worldwide.com",
//   "Contact@adria-bt.com",
//   "contact@finatech.com",
//   "cv@dba.ma",
//   "hello@dba.ma",
//   "contact@cbo.ma",
//   "cvjob1.ma@gmail.com",
//   "contact@mediadigitalinvest.com",
//   "k.bouhfid@bhfsoft.com",
//   "bonjour@inventiv-it.fr",
//   "hello@wht.agency",
//   "manal.mbarki@capgemini.com",
//   "fchaffai@xperlean.com",
//   "contact@digispaceagency.net",
//   "application.cofma@coficab.com",
//   "recrutement@valinnov.tech",
//   "oriigami.contact@gmail.com",
//   "scoopevent0@gmail.com",
//   "g_kouehion@yahoo.com",
//   "hiba.falky@marketingconfort.com",
//   "Oumaima.Mahboub.STG@teal.ma",
//   "chaimaa.anaddam@bertrandt.com",
//   "job.maroc@inetum.com",
//   "recrutement.yvesrochermaroc@yrnet.com",
//   "administration@auditec.ma",
//   "wiam.el-baamrani@airbus.com",
//   "eya.youssfi@digixer.fr",
//   "chokrane.belhaj@digixer.fr",
//   "recrutement@digispaceagency.net",
//   "nadasalki38@gmail.com",
//   "afrimet.marocc@gmail.com",
//   "m.recrutement2018@gmail.com",
//   "recrutement@masterlab.ma",
//   "rhrecrutement180@gmail.com",
//   "candidature@axa-services.ma",
//   "myjob@timlogsolutions.com",
//   "z.tawfiki@eolcenter.net",
//   "team@tidar.ma",
//   "hafsa.badry@alpha55.ma",
//   "recrutement@agma.co.ma",
//   "fatima-ez-zahra.fadili@atos.net",
//   "raihanabelmadani@prestafreedomprod.com",
//   "stages@caf-technologies.com",
//   "bouykarouane.abdelali@gmail.com",
//   "i.obayd@black-box.ma",
//   "hamzaamgouj054@gmail.com",
//   "everestosagency@gmail.com",
//   "najwa.mirani@skylark.ma",
//   "chaimae.zarkani@deltalink.ma",
//   "recrutement@superauto.ma",
//   "amal.lasri@niji.fr",
//   "contact@rubicon.ma",
//   "khaoula.taha@skylark.ma",
//   "aymane.ramou.2017@gmail.com",
//   "hajar.workwide@gmail.com",
//   "recrutement@mabelka.com",
//   "careers@argoteamgroup.com",
//   "kawtar.boulkaid@lemonderh.ma",
//   "Ahmed.benbrahim@bi-newvision.com",
//   "jihane.bennani@sabiss.net",
//   "n.cherkaoui.sellami@accenture.com",
//   "khaoula.touri@rs-telecom.fr",
//   "ons.louhichi@ezeegenai.dev",
//   "samhidi@gear9.ma",
//   "application.cofkt@coficab.com",
//   "recrutement@vnb-it.fr",
//   "kenza.elboury@docaposte.fr",
//   "n.labzour@mascir.ma",
//   "Kenza.bakkar@alten.com",
//   "rh-talent@g3c.ma",
//   "oussama.ezzaytouni@africashore.com",
//   "rh@mail.digi4.ma",
//   "compliance@jooble.com",
//   "privacy@jooble.com",
//   "ihelp@idigitalise.net",
//   "oumaima.e@adex-personnel.com",
//   "hibaamgbuilding@gmail.com",
//   "recrutement@utopiha.fr",
//   "rh@tthgroupe.com",
//   "sara.nafi@walitservices.com",
//   "amal.amegoude@akkodis.com",
//   "abderrahimabbad25@gmail.com",
//   "imad.hammane@welink.ma",
//   "safaedriouach0@gmail.com",
//   "offresdeemploi24@gmail.com",
//   "miacorps.tanger@gmail.com",
//   "isardari41@gmail.com",
//   "h.hamdi@tro.ma",
//   "recrutementkicklox@gmail.com",
//   "gastrorecrut14@gmail.com",
//   "rh@sn-investment.ma",
//   "agencetanger@manpower-maroc.com",
//   "rh@aep.ma",
//   "recrutement.dynamictalentsearch@gmail.com",
//   "cv@marwa.com",
//   "kenitra.carriere@sews-e.com",
//   "hse.newgeneration@gmail.com",
//   "chaimae.elhaloui@sully-group.com",
//   "mariammakboul98@gmail.com",
//   "impactskills03@gmail.com",
//   "kawthar.bennani@niji.fr",
//   "nabil.sbaghi@dekra.com",
//   "RH@yuccainfo.com.tn"
// ];





// Path to the PDF file
const pdfFilePath = path.join(__dirname, 'files', 'CV_Mohamed_EDDAHMANI.pdf');

// Email content
const mailOptions = {
  from: simoEmail,
  subject: khedmaSuject,
  html: khedmaMessage,
  attachments: [
    {
      filename: 'CV_Mohamed_EDDAHMANI.pdf',
      path: pdfFilePath,
      contentType: 'application/pdf'
    }
  ]
};

// Function to send email to a single recipient
const sendEmail = (recipient) => {
  const options = { ...mailOptions, to: recipient };

  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (error, info) => {
      if (error) {
        console.error(`Error sending to ${recipient}:`, error);
        reject(error);
      } else {
        console.log(`Email sent to ${recipient}: ${info.response}`);
        resolve(info);
      }
    });
  });
};

// Function to send emails to all recipients with delay

const sendEmailsWithDelay = async (recipients, delayMs) => {
  console.log(`Starting to send emails to ${recipients.length} recipients...`);

  for (let i = 0; i < recipients.length; i++) {
    const recipient = recipients[i];
    try {
      console.log(`Sending email to ${recipient} (${i + 1}/${recipients.length})...`);
      await sendEmail(recipient);

      // Don't delay after the last email
      if (i < recipients.length - 1) {
        console.log(`Waiting ${delayMs / 1000} seconds before sending next email...`);
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    } catch (error) {
      console.error(`Failed to send email to ${recipient}:`, error);
      // Continue with next recipient even if current one fails
    }
  }

  console.log('Email sending process completed.');
};

// Start sending emails with 5 second (5000ms) delay
sendEmailsWithDelay(recipients, 5000);
