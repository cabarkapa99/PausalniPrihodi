import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Sva polja su obavezna" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Neispravna email adresa" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email content for the business owner
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "pausalni-prihodi@uwit.rs",
      subject: `Nova poruka sa sajta: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nova poruka sa kontakt forme
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Detalji poruke:</h3>
            <p><strong>Ime i prezime:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Predmet:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Poruka:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #2563eb; border-radius: 4px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Napomena:</strong> Ova poruka je poslata sa kontakt forme na sajtu Pausalni Prihodi.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Potvrda primljene poruke - Pausalni Prihodi",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; text-align: center;">Hvala vam na poruci!</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Poštovani/a <strong>${name}</strong>,</p>
            <p>Uspešno smo primili vašu poruku i odgovorićemo vam uskoro.</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Detalji vaše poruke:</h3>
            <p><strong>Predmet:</strong> ${subject}</p>
            <p><strong>Poruka:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; background-color: #f9fafb; padding: 10px; border-radius: 4px;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #2563eb; border-radius: 4px;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Kontakt:</strong><br>
              Email: pausalni-prihodi@uwit.rs<br>
              Radno vreme: Ponedeljak - Petak: 09:00 - 17:00
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
            <p>Pausalni Prihodi - Vaš partner za paušalno oporezivanje</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: "Poruka je uspešno poslata!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Greška pri slanju poruke. Molimo pokušajte ponovo." },
      { status: 500 }
    );
  }
}
