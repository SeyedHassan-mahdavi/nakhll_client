// test apis
export async function getImages() {
    try {
        let response = await fetch('', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return response;
    } catch (error) {
        console.log("error", error);
    }
}