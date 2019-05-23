const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();

//##############1. Simple Cron job #$#################
// schedule tasks to be run on the server
cron.schedule("* * * * *", function() {
  console.log("running a task every minute");
  //   fs.unlink(path, err => {
  //     if (err) throw err;
  //     console.log("Error file succesfully deleted");
  //   });
});

//##############2. Database Backup ###################
// To backup a database
// cron.schedule("59 23 * * *", function() {
//   console.log("---------------------");
//   console.log("Running Cron Job");
//   if (shell.exec("sqlite3 database.sqlite  .dump > data_dump.sql").code !== 0) {
//     shell.exit(1);
//   } else {
//     shell.echo("Database backup complete");
//   }
// });

//##################### 3.Email Sender ######################
// create mail transporter
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "COMPANYEMAIL@gmail.com",
//     pass: "userpass"
//   }
// });

// // sending emails at periodic intervals
// cron.schedule("* * * * Wednesday", function() {
//   console.log("---------------------");
//   console.log("Running Cron Job");
//   let mailOptions = {
//     from: "COMPANYEMAIL@gmail.com",
//     to: "sampleuser@gmail.com",
//     subject: `Not a GDPR update ;)`,
//     text: `Hi there, this email was automatically sent by us`
//   };
//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       throw error;
//     } else {
//       console.log("Email successfully sent!");
//     }
//   });
// });

//############### Working of Cron Job ###############
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )

app.listen(3128);
