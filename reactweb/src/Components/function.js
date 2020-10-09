class dbfunction{

    //로그아웃시 세션 스토리지 지우기
    dblogout() {
        sessionStorage.clear();
        return;
    }


}

export default new dbfunction()