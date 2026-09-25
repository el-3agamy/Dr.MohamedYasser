// import { NextResponse } from "next/server";
// import ExcelJS from "exceljs";
// import path from "path";
// import fs from "fs";

// export async function POST(req: Request) {

//     try {
//         const { name, whatsApp } = await req.json();
//         if (!name || !whatsApp) {
//             return NextResponse.json({ err: "Name and WhatsApp number are required", status: 400 })
//         }
//         const filePath = path.join(process.cwd(), "whatsapp_leads.xlsx");
//         const workbook = new ExcelJS.Workbook();

//         if (fs.existsSync(filePath)) {
//             await workbook.xlsx.readFile(filePath);
//         } else {
//             const worksheet = workbook.addWorksheet("Leads");
//             worksheet.columns = [
//                 { header: 'Name', key: 'name', width: 25 },
//                 { header: 'WhatsApp Number', key: 'whatsapp', width: 20 },
//                 { header: 'Date', key: 'date', width: 25 },
//             ];
//         }

//         const worksheet = workbook.getWorksheet('Leads') || workbook.addWorksheet('Leads');
//         worksheet.addRow(
//             {
//                 name,
//                 whatsApp,
//                 date: new Date().toLocaleString(),
//             }
//         );
//         await workbook.xlsx.writeFile(filePath);
//         return NextResponse.json({ success: true, message: 'Saved to Excel successfully!' });

//     }
//     catch (error) {
//         console.error('Error saving to Excel:', error);
//         return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
//     }
// }