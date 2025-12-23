

/* Encode string to slug */
export const CreateSlug = (str: string | undefined): string => {
    if (str) {
        //replace all special characters | symbols with a space
        str = str.replace(/[`’~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ')
            .toLowerCase();

        // trim spaces at start and end of string
        str = str.replace(/^\s+|\s+$/gm, '');

        // replace space with dash/hyphen
        str = str.replace(/\s+/g, '-');
        // document.getElementById("slug-text").innerHTML = str;
        return str;
    } else {
        return ""
    }
}

export const DecodeSlug = (slug: string) => {
    // replace dashes with spaces
    let str = slug.replace(/-/g, ' ');

    // capitalize the first letter of each word
    str = str.replace(/\b\w/g, (match) => match.toUpperCase());

    return str;
}