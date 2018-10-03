
export const AjaxRequest = {
    post(url: string, data: any): Promise<any> {
        return fetch(url, 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status === 200) {
                return response;
            } else {
                throw new Error(response.statusText);
            }
        }).catch(function (ex) {
            throw new Error(ex);
        });
    },
};
