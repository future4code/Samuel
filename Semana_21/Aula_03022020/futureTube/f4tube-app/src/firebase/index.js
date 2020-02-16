import * as firebase from 'firebase';

export const setUsername = (userId, username, email, bday, photoUrl) => {
    return firebase.firestore().collection("users").doc(userId)
    .set({ 
        username: username,
        birthday: bday,
        email: email,
        photoUrl: photoUrl  
    })
}