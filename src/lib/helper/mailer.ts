import * as nodemailer from "nodemailer";

interface SendEmailI {
  subject: string;
  emailTo: string;
  data: {
    name: string;
    email: string;
    phone?: string;
    message?: string;
    purpose?: string;
    property_type?: string;
    location?: string;
  };
}

export const SendEmail = async ({
  subject,
  emailTo,
  data: { email, name, phone, message, purpose, property_type, location },
}: SendEmailI) => {
  try {
    const transport = nodemailer.createTransport({
      port: Number(process.env.MAILER_PORT),
      secure: true,
      host: process.env.MAILER_HOST,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD,
      },
      debug: true,
    });

    const response = await transport.sendMail({
      from: email,
      to: emailTo,
      subject: subject,
      html: `
       <html>
        <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body>
          <div style="">
            ${
              name
                ? `<p><span style="font-weight:bold;">Name:</span> ${name}</p>`
                : ""
            }
            ${
              email && email !== ""
                ? `<p><span style="font-weight:bold;">Email:</span> ${email}</p>`
                : ""
            }
            ${
              phone
                ? `<p><span style="font-weight:bold;">Phone:</span> ${phone}</p>`
                : ""
            }
            ${
              message
                ? `<p><span style="font-weight:bold;">Message:</span> ${message}</p>`
                : ""
            }
            ${
              purpose
                ? `<p><span style="font-weight:bold;">Purpose:</span> ${purpose}</p>`
                : ""
            }
            ${
              property_type
                ? `<p><span style="font-weight:bold;">Property Type:</span> ${property_type}</p>`
                : ""
            }
            ${
              location
                ? `<p><span style="font-weight:bold;">Location:</span> ${location}</p>`
                : ""
            }
           </div>
        </body>
       </html>
`,
    });

    return response;
  } catch (error) {
    console.log("Mailer ERROR: ", (error as Error).message);
  }
};
