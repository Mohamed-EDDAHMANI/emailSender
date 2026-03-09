const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');
const messageSpontane = require('./messageSpontane')
const messagePersonaliser = require('./messagePersonaliser')
const candidatureMERN = require('./messageGe')


const simoEmail = "eddahmani.mohamed11@gmail.com";
const simoAppPassword = process.env.SIMO_APP_PASSWORD;

const khedmaSuject = 'Candidature – Développeur Full Stack Junior "YouCode/UM6P"'



// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service like 'outlook', 'yahoo', etc.
  auth: {
    user: simoEmail,
    pass: simoAppPassword // Use an App Password instead of your real password
  }
});

// const recipients = [  
//   "kaoutar.nouri@hps-worldwide.com",
//   "meriem.boumzguid@smile-maroc.com",
//   "recrutement@iwaco.ma",
//   "rhairecrutement@gmail.com",
//   "recrutement@atlascs.ma",
//   "maha.cheikhi@avaliance.com",
//   "asmaa.jnibi@capgemini.com",
//   "lambdasoft5@gmail.com",
//   "Chaimaa.Anaddam@bertrandt.com",
//   "talents@insurbt.com",
//   "mariam.rabie@asset.com.eg",
//   "samia.elkaissi@hcltech.com",
//   "attaam72@gmail.com",
//   "ecruitment@t2s.ma",
//   "donia.chennoufi@value.com.tn",
//   "recrutement@weshore.com",
//   "candidature@ifcarsolutions.com",
//   "contact@schoolify-edtech.com",
//   "rh.recrutement.id@gmail.com",
//   "meriem.aziz@adria-bt.com",
//   "careers@aicrafters.com",
//   "wissal.el.hariri@accenture.com",
//   "recrutement@anakot.com",
//   "recrutement@abatechnology.ma",
//   "recrutement@energeticlink.com",
//   "Yafang@omnidata.ma",
//   "ghofrane.hefiene@binitns.com",
//   "offre-st@consult-it.com",
//   "hermance.ma@digiware-business.com",
//   "amani.essid@softgen.fr",
//   "ayoub.labite@gmail.com",
//   "edricknubla25@gmail.com",
//   "myassine@medtech.ma",
//   "ghofrane.hefiene@binitns.com",
//  "F.ouladsine@nomatis.com",
//   "talents@insurbt.com",
//   "igartoua@wemanity.com",
//   "ihssane.chemaou@avaliance.com",
//   "cabinet.ybaccompagnement@gmail.com",
//   "chaimae.hasnaoui@smile-maroc.com",
//   "i.nssiri@klk.ma",
// ];

const recipients = [
  "kouisdoha@gmail.com"
];
// const recipients = [ 
//   "talents@insurbt.com",
//   "igartoua@wemanity.com",
//   "ihssane.chemaou@avaliance.com",
//   "cabinet.ybaccompagnement@gmail.com",
//   "chaimae.hasnaoui@smile-maroc.com",
//   "i.nssiri@klk.ma",
//   "doha.yahia@indatacore.com",
//   "aymen.metoui@agoraplus.com",
//   "growthhub.mena@gmail.com",
//   "contact@tastyandnomad.com",
//   "attaam72@gmail.com",
//   "recrutement@ac2i.ma",
//   "rhstagerecrutement@gmail.com",
//   "karima.sassi@kouka.io",
//   "avalette@teksystems.com",
//   "moise.k@digiware-business.com",
//   "fadwa.bouzianeouaritini@alten.com",
//   "amina@tcrew.be",
//   "rhairecrutement@gmail.com",
//   "g.spiess@wepoint.com",
//   "frh@alfapeople.com",
//   "assistant@automize.ma",
//   "hello@agentooz.com"
// ];

const pdfFilePath = path.join(__dirname, 'files', 'CV_Mohamed_Eddahmani.pdf');

// Email content
const mailOptions = {
  from: simoEmail,
  subject: khedmaSuject,
  html: candidatureMERN,
  attachments: [
    {
      filename: 'CV_Mohamed_Eddahmani.pdf',
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

// supa db password
// atheletPro0-9
