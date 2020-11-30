export const initState = {
    revenu: 0,
    profilName: "theo",
    imgProfil: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/18835535_854405988045540_4686398475279015689_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=zEsZ7X-ipJsAX-9JUym&_nc_ht=scontent-cdt1-1.xx&oh=f2f95903fc2b703d4290ceedea32feb2&oe=5FE6BA22"
}

export const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "UPDATE_REVENU":
            return {
                ...state,
                revenu : state.revenu + action.payload
            }
        case "UPDATE_PHOTO_PROFIL":
            return {
                ...state,
                imgProfil : action.payload[0],
                profilName : action.payload[1]

            }
        default: 
            return initState
    }
}