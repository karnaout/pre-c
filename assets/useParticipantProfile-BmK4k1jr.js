import{r as e,v as c}from"./index-DQ6dPsCc.js";const p=()=>{const[a,r]=e.useState(null),[s,o]=e.useState(!0),[n,i]=e.useState(null);return e.useEffect(()=>{(async()=>{try{const t=await c.get("undefinedparticipant-profile",{headers:{Authorization:`${localStorage.getItem("token")}`}});r(t.data)}catch(t){i(t.response?t.response.data:t.message)}finally{o(!1)}})()},[]),{profileData:a,loading:s,error:n}};export{p as u};
