"use server"

import { redirect } from 'next/navigation'
import { SendEmail } from '../helper/mailer'

export const SubmitSearchForm = (formData: FormData) => {
    const type = formData.get("type")
    const status = formData.get("status") !== "" ? "status=" + formData.get("status") + "&" : ""
    const Input = formData.get("Input") !== "" ? "Input=" + formData.get("Input") + "&" : ""
    const propertyType = formData.get("propertyType") !== "" ? "propertyType=" + formData.get("propertyType") + "&" : ""
    const min_Area = formData.get("min-Area") !== "" ? "min-area=" + formData.get("min-Area") + "&" : ""
    const max_Area = formData.get("max-Area") !== "" ? "max-area=" + formData.get("max-Area") + "&" : ""
    const min_Bedrooms = formData.get("min-Bedrooms") !== "" ? "min-bedrooms=" + formData.get("min-Bedrooms") + "&" : ""
    const max_Bedrooms = formData.get("max-Bedrooms") !== "" ? "max-bedrooms=" + formData.get("max-Bedrooms") + "&" : ""
    const min_price = formData.get("min-price") !== "" ? "min-price=" + formData.get("min-price") + "&" : ""
    const max_price = formData.get("max-price") !== "" ? "max-price=" + formData.get("max-price") + "&" : ""

    redirect(type + "?" + status + Input + propertyType + min_Area + max_Area + min_Bedrooms + max_Bedrooms + min_price + max_price)
}


export const SubmitContactForm = async (formData: FormData) => {

    const name = formData.get("name") as string ?? ""
    const email = formData.get("email") as string ?? ""
    const phone = formData.get("phone") as string ?? ""
    const purpose = formData.get("purpose") as string ?? ""
    const property_type = formData.get("property_type") as string ?? ""
    const location = formData.get("location") as string ?? ""
    const message = formData.get("message") as string ?? ""

    const result = await SendEmail({
        subject: "A Lead from Park Greens - Damac Hills 2",
        emailTo : process.env.NEXT_PUBLIC_EMAIL ?? "",
        data: {
            name: name,
            email: email,
            phone: phone,
            message: message,
            purpose: purpose,
            property_type: property_type,
            location: location
        }
    })

    if (result?.messageId) {
        return {
            success: true,
            message: "Email sent Successfully"
        }
    }

    // redirect('https://mail.google.com/mail/?view=cm&fs=1&to=admin@thekingdom.ae&su=A Lead from Park Greens - Damac Hills 2' + "&body=" + name + email + phone + purpose + property_type + location + message)
}

export const SubmitCustomForm = async (details : { emailTo : string , subject: string }, formData: FormData) => {

    const name = formData.get("name") as string ?? ""
    const email = formData.get("email") as string ?? ""
    const phone = formData.get("phone") as string  ?? ""
    const message = formData.get("message") as string ?? ""

    const result = await SendEmail({
        subject: details.subject,
        emailTo : details.emailTo,
        data: {
            name: name,
            email: email,
            phone: phone,
            message: message
        }
    })

    if (result?.messageId) {
        return {
            success: true,
            message: "Email sent Successfully"
        }
    }
}