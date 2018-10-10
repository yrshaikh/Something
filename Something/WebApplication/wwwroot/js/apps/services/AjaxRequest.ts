
export const AjaxRequest = {
    post(url: string, data: any): Promise<any> {
        return fetch(url,
        {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            method: "POST",
        }).then((response) => {
            if (response.status === 200 || response.status === 201) {
                return response;
            } else {
                throw new Error(response.statusText);
            }
        }).catch((ex) => { throw new Error(ex); });
    },
};
