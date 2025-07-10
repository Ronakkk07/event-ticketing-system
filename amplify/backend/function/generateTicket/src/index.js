const AWS = require("aws-sdk");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const QRCode = require("qrcode");

const s3 = new AWS.S3();

exports.handler = async (event) => {
  const { userName, userEmail, eventName, ticketId } = event.arguments;

  try {
    // Generate QR Code
    const qrDataUrl = await QRCode.toDataURL(`Ticket ID: ${ticketId}`);

    // Create PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([400, 200]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText(`Event: ${eventName}`, { x: 50, y: 150, size: 18, font });
    page.drawText(`Name: ${userName}`, { x: 50, y: 130, size: 14, font });
    page.drawText(`Email: ${userEmail}`, { x: 50, y: 110, size: 14, font });
    page.drawText(`Ticket ID: ${ticketId}`, { x: 50, y: 90, size: 14, font });

    const qrImage = await pdfDoc.embedPng(qrDataUrl);
    page.drawImage(qrImage, {
      x: 250,
      y: 50,
      width: 100,
      height: 100,
    });

    const pdfBytes = await pdfDoc.save();

    // Upload to S3
    const s3Params = {
      Bucket: process.env.STORAGE_TICKETPDFSTORAGE_BUCKETNAME, // auto-injected by Amplify
      Key: `tickets/${ticketId}.pdf`,
      Body: Buffer.from(pdfBytes),
      ContentType: "application/pdf",
    };

    await s3.putObject(s3Params).promise();

    // Generate Pre-signed URL
    const url = s3.getSignedUrl("getObject", {
      Bucket: s3Params.Bucket,
      Key: s3Params.Key,
      Expires: 60 * 60, // 1 hour
    });

    return {
      message: `🎫 Ticket generated for ${userName}`,
      downloadLink: url,
    };
  } catch (error) {
    console.error("Error generating ticket:", error);
    return {
      message: "❌ Failed to generate ticket",
      downloadLink: null,
    };
  }
};
