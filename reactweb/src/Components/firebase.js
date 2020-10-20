import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'


// firebase 설정과 관련된 개인 정보
const firebaseConfig = {
    apiKey: "AIzaSyC-39P6iYoEQ8pYdjkOUMAjL0Mj2X1tYMM",
    authDomain: "leave-pass-management-system.firebaseapp.com",
    databaseURL: "https://leave-pass-management-system.firebaseio.com",
    projectId: "leave-pass-management-system",
    storageBucket: "leave-pass-management-system.appspot.com",
    messagingSenderId: "860597117782"
};

var newlist = new Array(5);

// firebase의 firestore 인스턴스를 변수에 저장
class db{
    constructor(){
        // firebaseConfig 정보로 firebase 시작
        firebase.initializeApp(firebaseConfig);
        this.firestore = firebase.firestore()
        this.auth = firebase.auth()
    }

    register(Email,Password){
        return this.auth.createUserWithEmailAndPassword(Email, Password)
    }

    async registerAdmin(data){
        return this.firestore.collection("Admin").doc(`${data.ServiceNo}`).set(data)
    }

    async registerSoldier(data){
        return this.firestore.collection("Soldier").doc(`${data.ServiceNo}`).set(data)
    }

    async changeProfileAdmin(data, ServiceNo){
        return this.firestore.collection("Admin").doc(`${ServiceNo}`).update({
            Rank: data.Rank,
            Unit: data.Unit,
            PhoneNo: data.PhoneNo
        })
    }

    async changeProfile(data, ServiceNo){
        return this.firestore.collection("Soldier").doc(`${ServiceNo}`).set(data)
    }
    
    async loginAdmin(ServiceNo, password) {
        const data = await this.firestore.collection("Admin").doc(`${ServiceNo}`).get()
        return this.auth.signInWithEmailAndPassword(data.get('Email'), password)
    }

    async login(ServiceNo, password) {
        const data = await this.firestore.collection("Soldier").doc(`${ServiceNo}`).get()
        return (this.auth.signInWithEmailAndPassword(data.get('Email'), password))
    }

    async setLoginFirebaseData(ServiceNo) {
        const data = await this.firestore.collection("Soldier").doc(`${ServiceNo}`).get()
        sessionStorage.setItem('LoginedName',data.get('Name'))
        sessionStorage.setItem('LoginedUnit',data.get('Unit'))
        return;
    }

    async setLoginFirebaseDataAdmin(ServiceNo) {
        const data = await this.firestore.collection("Admin").doc(`${ServiceNo}`).get()
        sessionStorage.setItem('LoginedName',data.get('Name'))
        sessionStorage.setItem('LoginedUnit',data.get('Unit'))
        return;
    }

    ChangePassword(email) {
        firebase.auth().sendPasswordResetEmail(`${email}`).then(function() {
            alert("비밀번호 재설정 이메일을 보냈습니다.")
          }).catch(function(error) {
            alert(error)
          });
    }

    SendMessageAdmin(data){
        return this.firestore.collection("MessageAdmin").add(data)
    }

 }
// 필요한 곳에서 사용할 수 있도록 내보내기
export default new db()