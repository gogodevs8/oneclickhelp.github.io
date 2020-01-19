form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const now=new Date();
    const location={
        FORMATTED:passlatLan(),
        URL:"",
        coordinates:'',
        created_at:firebase.firestore.Timestamp.fromDate(now)
    }
});