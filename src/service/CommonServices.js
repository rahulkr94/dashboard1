export const getClorByType = (type) => {
    let tempColor = ""
    try {
        switch (type) {
            case "Clients":
                tempColor = "bc-clients";
                break;
            case "Documents":
                tempColor = "bc-documents";
                break;
            case "Social":
                tempColor = "bc-social";
                break;
            case "Adv":
                tempColor = "bc-advertisement";
                break;
            case "Work":
                tempColor = "bc-work";
                break;
        }
    } catch (error) {
        console.error("Error in getClorByType()", error);
    }
    return tempColor;
}