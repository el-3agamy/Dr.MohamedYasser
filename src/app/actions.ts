'use server';

import { google } from 'googleapis';

export async function submitToSheets(formData: { name: string; whatsapp: string }) {
    try {
        // Prepare private key formatting for deployment environments
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: privateKey,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // const now = new Date();
        // const formattedDate =
        //     `${String(now.getDate()).padStart(2, '0')}-` +
        //     `${String(now.getMonth() + 1).padStart(2, '0')}-` +
        //     `${now.getFullYear()} ` +
        //     `${String(now.getHours()).padStart(2, '0')}:` +
        //     `${String(now.getMinutes()).padStart(2, '0')}`
        //     ;

        const egyptTime = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Africa/Cairo',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
            .format(new Date())
            .replace(',', '')
            .replace(/\//g, '-');

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Dentist Leads!A:C',
            // valueInputOption: 'USER_ENTERED',
            valueInputOption: 'RAW',
            requestBody: {
                // values: [[new Date().toISOString(), formData.name, formData.whatsapp]],
                // values: [[formattedDate, formData.name, String(formData.whatsapp)]],
                values: [[egyptTime, formData.name, String(formData.whatsapp)]],
            },
        });

        return { success: true };
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return { success: false, error: 'Failed to submit form.' };
    }
}